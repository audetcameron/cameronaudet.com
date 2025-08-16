<template>
  <div class="" role="region" aria-labelledby="title">
    <a
      ref="btnRef"
      class="party-btn"
      :aria-pressed="isParty.toString()"
      aria-controls="partyOverlay"
      @click="toggleParty()"
    >
      {{ isParty ? 'Stop Disco Party' : 'Disco Party - (WIP) (Esc to cancel)' }}
    </a>

    <!-- Render the overlay at <body> level so it can cover the entire app -->
    <teleport to="body">
      <div id="partyOverlay" class="party-overlay" :aria-hidden="(!isParty).toString()">
        <div class="party-dim"></div>

        <div class="rig" aria-hidden="true">
          <div class="chain"></div>
          <div class="ball-wrap">
            <!-- Inline SVG Disco Ball -->
            <svg class="disco-ball" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Disco ball">
              <rect x="98" y="0" width="4" height="22" rx="1" fill="#9ca3af"/>
              <g transform="translate(0,20)">
                <defs>
                  <radialGradient id="shine" cx="35%" cy="35%" r="78%">
                    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/>
                    <stop offset="30%" stop-color="#d1d5db" stop-opacity="0.9"/>
                    <stop offset="60%" stop-color="#9ca3af" stop-opacity="0.85"/>
                    <stop offset="100%" stop-color="#6b7280" stop-opacity="0.95"/>
                  </radialGradient>
                  <linearGradient id="tile" x1="0%" x2="100%">
                    <stop offset="0%" stop-color="#e5e7eb"/>
                    <stop offset="50%" stop-color="#f8fafc"/>
                    <stop offset="100%" stop-color="#cbd5e1"/>
                  </linearGradient>
                  <clipPath id="ballClip"><circle cx="100" cy="100" r="86"/></clipPath>
                </defs>

                <circle cx="100" cy="100" r="86" fill="url(#shine)"/>

                <g class="mirror" clip-path="url(#ballClip)">
                  <g fill="url(#tile)">
                    <g id="col">
                      <rect x="8" y="14" width="14" height="14"/>
                      <rect x="8" y="30" width="14" height="14"/>
                      <rect x="8" y="46" width="14" height="14"/>
                      <rect x="8" y="62" width="14" height="14"/>
                      <rect x="8" y="78" width="14" height="14"/>
                      <rect x="8" y="94" width="14" height="14"/>
                      <rect x="8" y="110" width="14" height="14"/>
                      <rect x="8" y="126" width="14" height="14"/>
                      <rect x="8" y="142" width="14" height="14"/>
                      <rect x="8" y="158" width="14" height="14"/>
                    </g>
                    <use href="#col" transform="translate(16,0)"/>
                    <use href="#col" transform="translate(32,0)"/>
                    <use href="#col" transform="translate(48,0)"/>
                    <use href="#col" transform="translate(64,0)"/>
                    <use href="#col" transform="translate(80,0)"/>
                    <use href="#col" transform="translate(96,0)"/>
                    <use href="#col" transform="translate(112,0)"/>
                    <use href="#col" transform="translate(128,0)"/>
                    <use href="#col" transform="translate(144,0)"/>
                    <use href="#col" transform="translate(160,0)"/>
                  </g>
                </g>

                <g class="glare" clip-path="url(#ballClip)">
                  <ellipse cx="70" cy="70" rx="40" ry="20" fill="#ffffff" opacity="0.35"/>
                  <ellipse cx="70" cy="70" rx="20" ry="10" fill="#ffffff" opacity="0.45"/>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div class="beams" aria-hidden="true">
          <div class="beam b1"></div>
          <div class="beam b2"></div>
          <div class="beam b3"></div>
          <div class="overlay o1"></div>
          <div class="overlay o2"></div>
        </div>

        <div class="sparkles" aria-hidden="true"></div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'

/**
 * Props let you tweak behavior without touching the component internals
 */
const props = defineProps<{
  autoStopMs?: number
  partyDuration?: string
  beamOpacity?: number
  sparkleOpacity?: number
}>()

const isParty = ref(false)
const btnRef = ref<HTMLButtonElement | null>(null)
let stopTimer: ReturnType<typeof setTimeout> | null = null
let classObserver: MutationObserver | null = null

function setCSSVars() {
  const root = document.documentElement
  if (props.partyDuration) root.style.setProperty('--party-duration', props.partyDuration)
  if (typeof props.beamOpacity === 'number') root.style.setProperty('--beam-opacity', String(props.beamOpacity))
  if (typeof props.sparkleOpacity === 'number') root.style.setProperty('--sparkle-opacity', String(props.sparkleOpacity))
}

function toggleParty(force?: boolean) {
  const enable = typeof force === 'boolean' ? force : !isParty.value
  isParty.value = enable
  document.body.classList.toggle('party', enable)
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape') toggleParty(false)
}

onMounted(() => {
  // Respect reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (prefersReduced.matches) {
    document.documentElement.style.setProperty('--party-duration', '18s')
    document.documentElement.style.setProperty('--beam-opacity', '0.35')
    document.documentElement.style.setProperty('--sparkle-opacity', '0.6')
  }
  setCSSVars()

  window.addEventListener('keydown', onKeyDown)

  // Auto-stop after a period to avoid trapping the user
  classObserver = new MutationObserver(() => {
    if (!isParty.value) return
    if (stopTimer) clearTimeout(stopTimer)
    const ms = typeof props.autoStopMs === 'number' ? props.autoStopMs : 60000
    stopTimer = setTimeout(() => toggleParty(false), ms)
  })
  classObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] })
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown)
  if (stopTimer) clearTimeout(stopTimer)
  classObserver?.disconnect()
  // Ensure we clean up class if the component goes away while party is on
  document.body.classList.remove('party')
})

// Keep button contents (dot) present when label text switches
watch(isParty, () => {
  const btn = btnRef.value
  if (!btn) return
  if (!btn.querySelector('.dot')) {
    const dot = document.createElement('span')
    dot.className = 'dot'
    dot.setAttribute('aria-hidden', 'true')
    btn.prepend(dot)
  }
})
</script>

<style>
:root {
  --party-duration: 14s;
  --beam-opacity: 0.55;
  --sparkle-opacity: 0.9;
  --accent: #7c3aed; /* purple */
  --accent-2: #06b6d4; /* cyan */
  --accent-3: #f59e0b; /* amber */
  --accent-4: #ef4444; /* red */
  --accent-5: #22c55e; /* green */
}

html, body { height: 100%; }
body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; line-height: 1.5; }

/*.disco-card { max-width: 780px; width: 100%; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px; box-shadow: 0 10px 30px rgba(2,6,23,0.08); padding: 2rem; position: relative; overflow: hidden; }
.disco-card h1 { margin: 0 0 .5rem; font-size: clamp(1.4rem, 2.3vw + 1rem, 2.2rem); }
.disco-card p { margin: 0 0 1.25rem; color: #475569; }
*/
.party-btn{
	cursor: pointer;
}
/*.party-btn {
  appearance: none; border: 0; background: linear-gradient(135deg, var(--accent), var(--accent-2)); color: white; padding: .9rem 1.2rem; border-radius: 999px;
  font-weight: 700; letter-spacing: .2px; cursor: pointer; box-shadow: 0 8px 20px rgba(124, 58, 237, 0.35);
  display: inline-flex; align-items: center; gap: .6rem; transition: transform .15s ease, box-shadow .15s ease;
}
.party-btn:hover { transform: translateY(-1px); box-shadow: 0 12px 28px rgba(124, 58, 237, 0.45); }
.party-btn:active { transform: translateY(0); }
.party-btn .dot { width: .5rem; height: .5rem; border-radius: 50%; background: currentColor; box-shadow: 12px 0 0 currentColor, -12px 0 0 currentColor; opacity: .9; }
*/
.party-overlay { position: fixed; inset: 0; pointer-events: none; z-index: 9999; overflow: hidden; display: grid; place-items: start center; opacity: 0; transition: opacity .4s ease; }
body.party .party-overlay { opacity: 1; }
.party-dim { position: fixed; inset: 0; background: radial-gradient(1200px 800px at 50% -10%, rgba(0,0,0,.45), rgba(0,0,0,.75)); mix-blend-mode: multiply; }

.rig { position: relative; width: 100%; height: 0; }
.chain { position: absolute; top: 0; left: 50%; width: 2px; height: 180px; background: repeating-linear-gradient(to bottom, #e5e7eb 0 8px, #9ca3af 8px 16px); transform: translateX(-50%) scaleY(0); transform-origin: top; transition: transform .7s ease .25s; box-shadow: 0 0 0 1px rgba(0,0,0,.08) inset; }
.ball-wrap { position: absolute; top: 180px; left: 50%; transform: translate(-50%, -160%) scale(.9); transition: transform .7s ease .25s; }
body.party .chain { transform: translateX(-50%) scaleY(1); }
body.party .ball-wrap { transform: translate(-50%, 0) scale(1); }
.disco-ball { width: clamp(120px, 12vw, 200px); height: auto; filter: drop-shadow(0 20px 30px rgba(0,0,0,.35)); }

@keyframes ball-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes glare-shift { 0% { transform: translate(-30%, -30%); } 50% { transform: translate(20%, 10%);} 100% { transform: translate(-30%, -30%);} }
body.party .disco-ball .mirror { animation: ball-rotate calc(var(--party-duration) * 1.6) linear infinite; transform-origin: 50% 50%; }
body.party .disco-ball .glare { animation: glare-shift 6s ease-in-out infinite; }

.beams { position: fixed; inset: 0; overflow: hidden; }
.beam { position: absolute; inset: -10% -20%; opacity: 0; mix-blend-mode: screen; filter: brightness(1.1) contrast(1.05) saturate(1.2); }
.beam::before { content: ""; position: absolute; inset: -20% -10%; background:
  conic-gradient(from 0deg at 50% 20%, rgba(255,255,255,.0) 0deg, rgba(255,255,255,.1) 4deg, rgba(255,255,255,.85) 12deg, rgba(255,255,255,.08) 22deg, rgba(255,255,255,.0) 28deg);
  filter: blur(6px);
}
@keyframes sweep { from { transform: rotate(0turn); } to { transform: rotate(1turn); } }
.beam.b1 { opacity: var(--beam-opacity); }
.beam.b1::before { background: conic-gradient(from 10deg at 50% 15%, rgba(255,255,255,0) 0, rgba(255,255,255,.9) 10deg, rgba(255,255,255,0) 24deg); }
.beam.b2 { opacity: calc(var(--beam-opacity) * .9); transform: scale(1.2); }
.beam.b3 { opacity: calc(var(--beam-opacity) * .8); transform: scale(1.4); }
body.party .beam.b1 { animation: sweep calc(var(--party-duration) * .75) linear infinite; }
body.party .beam.b2 { animation: sweep calc(var(--party-duration) * .95) linear infinite reverse; }
body.party .beam.b3 { animation: sweep calc(var(--party-duration) * 1.3) linear infinite; }

.overlay { position: absolute; inset: 0; pointer-events: none; mix-blend-mode: screen; opacity: .85; }
.overlay.o1 { background: radial-gradient(80vw 40vh at 10% 10%, var(--accent), transparent 60%), radial-gradient(80vw 40vh at 90% 20%, var(--accent-3), transparent 60%); }
.overlay.o2 { background: radial-gradient(80vw 40vh at 15% 90%, var(--accent-5), transparent 60%), radial-gradient(80vw 40vh at 80% 80%, var(--accent-2), transparent 60%); opacity: .65; }

.sparkles { position: fixed; inset: 0; pointer-events: none; }
.sparkles::before, .sparkles::after { content: ""; position: absolute; inset: 0; background-repeat: no-repeat; mix-blend-mode: screen; opacity: var(--sparkle-opacity); }
.sparkles::before { width: 3px; height: 3px; background: white; border-radius: 50%; box-shadow: 5vw 10vh, 15vw 18vh, 25vw 8vh, 35vw 24vh, 45vw 12vh, 55vw 20vh, 65vw 6vh, 75vw 22vh, 85vw 14vh, 95vw 18vh, 10vw 70vh, 20vw 78vh, 30vw 68vh, 40vw 84vh, 50vw 72vh, 60vw 80vh, 70vw 66vh, 80vw 82vh, 90vw 74vh, 15vw 50vh, 22vw 44vh, 28vw 56vh, 36vw 48vh, 48vw 52vh, 58vw 46vh, 66vw 58vh, 74vw 54vh, 82vw 60vh, 90vw 48vh; filter: blur(.2px) brightness(1.3); animation: twinkle 2.2s ease-in-out infinite alternate; }
.sparkles::after { width: 2px; height: 2px; background: white; border-radius: 50%; box-shadow: 8vw 28vh, 18vw 36vh, 26vw 30vh, 34vw 40vh, 42vw 34vh, 52vw 42vh, 62vw 32vh, 72vw 38vh, 82vw 28vh, 92vw 36vh, 6vw 86vh, 16vw 94vh, 26vw 88vh, 36vw 96vh, 46vw 90vh, 56vw 98vh, 66vw 88vh, 76vw 96vh, 86vw 92vh, 96vw 86vh; filter: blur(.2px) brightness(1.3); animation: twinkle 3s ease-in-out infinite alternate; }
@keyframes twinkle { from { opacity: .4; transform: scale(.9); } to { opacity: 1; transform: scale(1.2); } }

@media (prefers-reduced-motion: reduce) {
  .beam, .disco-ball .mirror, .disco-ball .glare, .sparkles::before, .sparkles::after { animation: none !important; }
}

/* Subtle pulse for any wrapping content to feel the beat */
@keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.015); } }
body.party .disco-card { animation: pulse 1.4s ease-in-out infinite; }
</style>
