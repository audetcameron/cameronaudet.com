<template>
  <div class="" role="region" aria-label="Alien invasion controls">
<!--     <p>
      Click to unleash tiny UFOs that zap elements on the page. Press <kbd>Esc</kbd> to stop and restore.
    </p> -->

    <a
      ref="btnRef"
      class="invade-btn"
      :aria-pressed="isInvading.toString()"
      @click="toggleInvasion()"
    >
      <!-- <span class="dot" aria-hidden="true"></span> -->
      {{ isInvading ? 'Cease Fire & Restore' : 'Launch Invasion (esc to cancel)' }}
    </a>

    <!-- Overlay and ships live at the <body> level so they can cover the whole app -->
    <teleport to="body">
      <div id="alienOverlay" class="alien-overlay" :aria-hidden="(!isInvading).toString()">
        <!-- SVG layer to draw lasers -->
        <svg class="laser-stage" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"></svg>

        <!-- Ships container -->
        <div class="ships" aria-hidden="true">
          <div
            v-for="ship in ships"
            :key="ship.id"
            class="ship"
            :style="{ left: ship.x + 'px', top: ship.y + 'px', transform: `translate(-50%,-50%) rotate(${ship.rot}deg)` }"
          >
            <!-- Cute little UFO -->
            <svg viewBox="0 0 120 80" class="ufo" aria-hidden="true">
              <defs>
                <radialGradient id="ufoGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#ffffff" stop-opacity=".95"/>
                  <stop offset="100%" stop-color="#93c5fd" stop-opacity=".2"/>
                </radialGradient>
              </defs>
              <!-- glow -->
              <ellipse cx="60" cy="58" rx="40" ry="12" fill="url(#ufoGlow)" opacity="0.7"/>
              <!-- dome -->
              <ellipse cx="60" cy="36" rx="18" ry="14" fill="#e0f2fe" stroke="#7dd3fc"/>
              <!-- saucer -->
              <ellipse cx="60" cy="50" rx="36" ry="12" fill="#94a3b8" stroke="#64748b"/>
              <!-- lights -->
              <circle v-for="i in 6" :key="i" :cx="20 + i*10" cy="52" r="2.5" :fill="i % 2 ? '#facc15' : '#60a5fa'"/>
            </svg>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

/**
 * AlienInvasion.vue
 * Fun visual effect: spawn small UFOs that periodically pick targets in the DOM and "zap" them.
 * Targeted elements get non-destructive classes that add glitch/blur/fade; pressing Esc or stopping restores them.
 */

const props = defineProps<{
  /** CSS selector for zap targets */
  targetSelector?: string
  /** CSS selector for elements to exclude (comma-separated) */
  excludeSelector?: string
  /** Number of ships */
  count?: number
  /** How often a shot is fired per ship (ms) */
  cadenceMs?: number
  /** Maximum targets to affect at once (safety) */
  maxActiveTargets?: number
  /** Constrain zaps to within this element (selector). Defaults to whole document */
  scopeSelector?: string
}>()

const isInvading = ref(false)
const btnRef = ref<HTMLButtonElement | null>(null)
const ships = ref<{ id: number; x: number; y: number; rot: number }[]>([])
const timers: number[] = []
let stage: SVGSVGElement | null = null
let scopeEl: Element | Document = document

const DEFAULT_TARGETS = 'main, article, section, .content, .container, .card, .tile, .box, img, p, h1, h2, h3, h4, h5, h6, .grid > *, li'
const DEFAULT_EXCLUDES = '#alienOverlay, .invasion-card, .disco-card, .party-overlay, header .nav, nav, footer'

function rand(min: number, max: number) { return Math.random() * (max - min) + min }
function pick<T>(arr: T[]): T | null { return arr.length ? arr[Math.floor(Math.random() * arr.length)] : null }

function sizeStage() {
  if (!stage) return
  stage.setAttribute('width', String(window.innerWidth))
  stage.setAttribute('height', String(window.innerHeight))
  stage.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`)
}

function spawnShips(n: number) {
  ships.value = Array.from({ length: n }).map((_, i) => ({
    id: i + 1,
    x: rand(60, window.innerWidth - 60),
    y: rand(40, Math.min(window.innerHeight * 0.33, window.innerHeight - 80)),
    rot: rand(-10, 10),
  }))
}

function visibleTargets(): HTMLElement[] {
  const tSel = props.targetSelector || DEFAULT_TARGETS
  const xSel = `${props.excludeSelector || DEFAULT_EXCLUDES}, .alien-immune`
  const all = Array.from((scopeEl instanceof Document ? scopeEl : scopeEl.ownerDocument!).querySelectorAll<HTMLElement>(tSel))
  const excluded = new Set(Array.from(document.querySelectorAll<HTMLElement>(xSel)))
  return all.filter(el => {
    if (!el || excluded.has(el) || el.closest('#alienOverlay')) return false
    const rect = el.getBoundingClientRect()
    const visible = rect.width >= 40 && rect.height >= 24 && rect.bottom > 0 && rect.right > 0 && rect.top < window.innerHeight && rect.left < window.innerWidth
    return visible
  })
}

function drawLaser(x1: number, y1: number, x2: number, y2: number) {
  if (!stage) return null
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
  g.setAttribute('class', 'laser')

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'line')
  path.setAttribute('x1', String(x1))
  path.setAttribute('y1', String(y1))
  path.setAttribute('x2', String(x2))
  path.setAttribute('y2', String(y2))
  g.appendChild(path)

  stage.appendChild(g)
  // auto-remove after animation
  window.setTimeout(() => g.remove(), 500)
  return g
}

function zapTarget(from: { x: number; y: number }, target: HTMLElement) {
  // compute centers
  const rect = target.getBoundingClientRect();
  const tx = rect.left + rect.width / 2
  const ty = rect.top + rect.height / 2

  drawLaser(from.x, from.y, tx, ty)

  // add zap class (non-destructive)
  target.classList.add('alien-target')
  // brief glitch then fade
  target.classList.add('alien-glitch')
  window.setTimeout(() => target.classList.remove('alien-glitch'), 600)
  window.setTimeout(() => target.classList.add('alien-zapped'), 420)
}

function shipLoop(ship: { id: number; x: number; y: number; rot: number }) {
  // wander a bit
  const wander = () => {
    ship.x = Math.max(40, Math.min(window.innerWidth - 40, ship.x + rand(-30, 30)))
    ship.y = Math.max(30, Math.min(window.innerHeight * 0.5, ship.y + rand(-10, 10)))
    ship.rot = rand(-15, 15)
  }

  const tick = () => {
    if (!isInvading.value) return
    // maybe move
    wander()
    // maybe shoot
    if (Math.random() < 0.9) {
      const targets = visibleTargets().filter(el => !el.classList.contains('alien-zapped'))
      const t = pick(targets)
      if (t) zapTarget({ x: ship.x, y: ship.y }, t)
    }
  }

  const cadence = Math.max(250, props.cadenceMs ?? 900)
  const id = window.setInterval(tick, cadence)
  timers.push(id)
}

function startInvasion() {
  // Setup scope
  scopeEl = props.scopeSelector ? (document.querySelector(props.scopeSelector) || document) : document
  // Stage
  stage = document.querySelector('.laser-stage')
  sizeStage()
  window.addEventListener('resize', sizeStage)

  // Spawn ships
  spawnShips(Math.max(1, Math.min(20, props.count ?? 6)))
  ships.value.forEach(shipLoop)
}

function stopInvasion() {
  timers.forEach(id => clearInterval(id))
  timers.length = 0
  ships.value = []
  document.querySelectorAll('.laser').forEach(el => el.remove())
  window.removeEventListener('resize', sizeStage)
  // restore targets
  document.querySelectorAll('.alien-target, .alien-zapped, .alien-glitch').forEach(el => el.classList.remove('alien-target', 'alien-zapped', 'alien-glitch'))
}

function toggleInvasion(force?: boolean) {
  const enable = typeof force === 'boolean' ? force : !isInvading.value
  isInvading.value = enable
  const overlay = document.getElementById('alienOverlay')
  if (overlay) overlay.style.opacity = enable ? '1' : '0'
  if (enable) {startInvasion()} else {stopInvasion()}
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape') toggleInvasion(false)
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown)
  stopInvasion()
})
</script>

<style>
:root {
  --laser-color: #22d3ee;
  --laser-core: #e2e8f0;
  --zap-accent: #f43f5e;
}

.invasion-card { max-width: 780px; background: #fff; border: 1px solid #e5e7eb; border-radius: 16px; box-shadow: 0 10px 30px rgba(2,6,23,0.08); padding: 1.5rem; }
.invasion-card h2 { margin: 0 0 .5rem; font-size: clamp(1.2rem, 1.2vw + 1rem, 1.6rem); }
.invasion-card p { margin: 0 0 1rem; color: #475569; }
.invade-btn{cursor: pointer;}
/*.invade-btn { appearance: none; border: 0; background: linear-gradient(135deg, #0ea5e9, #22d3ee); color: #fff; padding: .85rem 1.1rem; border-radius: 999px; font-weight: 700; letter-spacing: .2px; cursor: pointer; box-shadow: 0 8px 20px rgba(14,165,233,.35); display: inline-flex; align-items: center; gap: .6rem; transition: transform .15s ease, box-shadow .15s ease; }
.invade-btn:hover { transform: translateY(-1px); box-shadow: 0 12px 28px rgba(14,165,233,.45); }
.invade-btn .dot { width: .5rem; height: .5rem; border-radius: 50%; background: currentColor; box-shadow: 12px 0 0 currentColor, -12px 0 0 currentColor; opacity: .9; }
*/
/* Overlay covers page without eating clicks except on our elements */
.alien-overlay { position: fixed; inset: 0; z-index: 10000; pointer-events: none; opacity: 0; transition: opacity .3s ease; }
.laser-stage { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }

/* Ships */
.ships { position: absolute; inset: 0; pointer-events: none; }
.ship { position: absolute; width: 72px; height: 48px; animation: bob 2.2s ease-in-out infinite; filter: drop-shadow(0 6px 18px rgba(34,211,238,.35)); }
.ufo { width: 100%; height: 100%; }
@keyframes bob { 0%, 100% { transform: translate(-50%, -50%) rotate(0deg); } 50% { transform: translate(-50%, calc(-50% + 6px)) rotate(1.5deg); } }

/* Laser visuals */
.laser line { stroke: var(--laser-color); stroke-width: 3; filter: drop-shadow(0 0 6px var(--laser-color)); }
.laser::after { content: ""; }
.laser line { stroke-dasharray: 600; stroke-dashoffset: 600; animation: beam .35s ease-out forwards; }
@keyframes beam { to { stroke-dashoffset: 0; } }

/* Target effects (non-destructive) */
.alien-target { position: relative; }
.alien-target::after { content: ""; position: absolute; inset: -2px; border: 1px dashed rgba(34,211,238,.35); pointer-events: none; animation: targetPulse 1s ease-in-out infinite; }
@keyframes targetPulse { 0%, 100% { opacity: .25; } 50% { opacity: .7; } }

/* Glitch effect */
@keyframes glitchShift { 0% { clip-path: inset(0 0 0 0); transform: translate(0,0); } 20% { clip-path: inset(10% 0 15% 0); transform: translate(2px,-2px); } 40% { clip-path: inset(40% 0 5% 0); transform: translate(-2px,1px); } 60% { clip-path: inset(15% 0 35% 0); transform: translate(1px,1px); } 80% { clip-path: inset(30% 0 10% 0); transform: translate(-1px,-1px); } 100% { clip-path: inset(0 0 0 0); transform: translate(0,0); } }
.alien-glitch { animation: glitchShift .5s steps(2, end); }

/* Zapped = faded, blurred, and unclickable but not removed */
.alien-zapped { transition: filter .4s ease, opacity .6s ease, transform .4s ease; filter: blur(2px) saturate(.6) brightness(.9); opacity: 0.08; pointer-events: none !important; }

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .ship, .laser line, .alien-glitch { animation: none !important; }
}
</style>
