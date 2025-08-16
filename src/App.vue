<script setup>
  // import HelloWorld from './components/HelloWorld.vue'
  import ThemeToggle from './components/ThemeToggle.vue'
  import { reactive, computed } from 'vue'

  import DiscoParty from './components/DiscoParty.vue'
  import AlienInvasion from './components/AlienInvasion.vue'

  const copyright = computed(() => {
    return new Date().getFullYear() ;
  })
</script>

  <template>
    <header class="pt-4 pb-16 md:pt-8 lg:pt-8">
      <div class="container max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
        <nav class="flex items-center justify-between mb-20">
          <div class="flex items-center space-x-2 dark:bg-gray-300 dark:rounded-full dark:overflow-hidden">
            <a href="#body" id="skip-link" class="hidden">skip to body</a>
            <img src="./assets/worker-logo.svg" alt="Capial Web Company Logo" class="w-20 h-20">
          </div>
          <div>


            <ThemeToggle  />

            <a href="https://www.linkedin.com/in/cameronaudet/" target="_blank" class="px-4 py-3 md:px-4 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500" aria-label="Linkedin">
              Linkedin
            </a>
            <a href="https://github.com/audetcameron" target="_blank" class="ml-1 px-4 py-3 md:px-4 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500" aria-label="Github">
              Github
            </a>

          </div>

        </nav>

        <div class="text-center" id="body">
          <div class="flex justify-center mb-16">
            <img src="./assets/caudet-profile-pic.jpg" alt="Profile photo of Cameron Audet" class="rounded-full">
          </div>

          <h6 class="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8 dark:text-gray-300">Cameron Audet</h6>
          <h1 class="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8 dark:text-blue-400">
            Senior Full Stack Developer
          </h1>
          <h2 class="font-normal text-gray-900 dark:text-gray-300 text-2xl md:text-4xl leading-none mb-8">& Director of Technology</h2>

          <p class="font-normal text-gray-600 text-md md:text-xl mb-16 dark:text-gray-300">
            Building, maintaining, and optimizing web infrastructure and automation systems across diverse technology stacks.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            <a href="https://www.linkedin.com/in/cameronaudet/" target="_blank" class="inline-flex items-center px-4 py-3 md:px-4 md:py-4 bg-white dark:bg-white border border-2 border-solid font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
              Let's Chat
              <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </p>
        </div>
      </div>
    </header>


    <section class="container max-w-screen-xl mx-auto py-10 md:py-16 dark:bg-gray-800" id="workHistory">
      <div class="container max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
        <div class="flex flex-col lg:flex-row justify-between">
          <div class="mb-10 lg:mb-0 sm:w-full lg:w-auto  ">

            <h2 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5 dark:text-gray-300">Professional Experience</h2>

            <p class="mt-2 font-normal text-gray-500 text-md">
              Provide ongoing platform support and consultation to ensure performance, scalability, and alignment with business goals.
            </p>
            <p class="mt-2 font-normal text-gray-500 text-md ">
              Cross functional team manager.
            </p>

          </div>

          <div class="space-y-24">
            <article class="flex space-x-6">
              <h3 class="font-normal text-gray-700 text-3xl md:text-4xl dark:text-gray-300">01</h3>

              <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>

              <div>
                <h3 class="font-normal text-gray-700 text-3xl md:text-4xl mb-5 dark:text-gray-300">
                  Full Stack MVC
                </h3>

                <p class="font-normal text-gray-500 text-sm md:text-base">
                  Develop and maintained long-term web applications using Laravel with React/Vue/Livewire and Inertia.
                </p>
                <p class="mt-2 font-normal text-gray-500 text-sm md:text-base">
                  Develop and maintained long-term web applications using Django Python with Jquery.
                </p>
              </div>
            </article>

            <article class="flex space-x-6">
              <h3 class="font-normal text-gray-700 text-3xl md:text-4xl dark:text-gray-300">02</h3>

              <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>

              <div>
                <h3 class="font-normal text-gray-700 text-3xl md:text-4xl mb-5 dark:text-gray-300">
                  E-commerce and Microservices
                </h3>

                <p class="font-normal text-gray-500 text-sm md:text-basee">
                  Build and maintain a variety of E-commerce solutions including custom shopify themes, WordPress Woocommerce, Magento, OpenCart, Square Space, Wix, Square and more.
                </p>
                <p class="mt-2 font-normal text-gray-500 text-sm md:text-base">
                  Create custom microservices for middle man operations and automations via Google App Scripts, Laravel Schedules, Zapier, Make, Buffer, Notion and more.
                </p>
              </div>
            </article>

            <article class="flex space-x-6">
              <h3 class="font-normal text-gray-700 text-3xl md:text-4xl dark:text-gray-300">03</h3>
              <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>
              <div>
                <h3 class="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                  Marketing, SEO, AIO, GEO
                </h3>

                <p class="font-normal text-gray-500 text-sm md:text-base">
                  Lead technical strategy and decision-making for marketing and web development initiatives, guiding teams on stack selection, architecture, and implementation.
                </p>
                <p class="mt-2 font-normal text-gray-500 text-sm md:text-base">
                  Create custom GPT's for AIO/GEO website Audits and perform techincal SEO to optimize site performance and reduce page load times.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="container max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 dark:bg-gray-800">
      <h2 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5 dark:text-gray-300">Techincal Experience</h2>
      <p class="font-normal text-gray-500 text-md ">
        Webflow, WordPress / WooCommerce, Wix, Square, Square Space, Shopify, Drupal, Joomla, Laravel, Django, TypeScript, AWS, Zapier, N8N, Make, Buffer, HubSpot, Google Tag Manager and Analytics, SEMRush, Active Campaign, Constant Contact, Mailchimp, Revenate, Zoho, HotJar, Toast, OpenTable, and more.
      </p>
      <p class="font-normal text-gray-500 text-xs md:text-base">

      </p>
      <p class="font-normal text-gray-500 text-xs md:text-base">
        Linux, OSX, Windows System Administration. DNS Management
      </p>
    </section>

    <section class="py-10 md:py-16 dark:bg-gray-800" id="services">
      <div class="container max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article class="bg-gray-50 px-8 py-10 rounded-md">
            <div class="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>

            <h4 class="font-medium text-gray-700 text-lg mb-4">API Development</h4>

            <p class="font-normal text-gray-500 text-md">
              Designing and building RESTful and GraphQL APIs with a focus on performance, security, and
              comprehensive documentation for developers.
            </p>
          </article>

          <article class="bg-gray-50 px-8 py-10 rounded-md">
            <div class="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
            </div>

            <h4 class="font-medium text-gray-700 text-lg mb-4">Database Architecture</h4>

            <p class="font-normal text-gray-500 text-md">
              Creating efficient database schemas inside Laravel and Django to ensure scalability, optimization, and performance.
            </p>
          </article>

          <article class="bg-gray-50 px-8 py-10 rounded-md">
            <div class="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            </div>

            <h4 class="font-medium text-gray-700 text-lg mb-4">SysAdmin</h4>

            <p class="font-normal text-gray-500 text-md">
              Linux, OSX, Windows System Administration. Cloud Infrastructure Management
            </p>
          </article>
        </div>
      </div>
    </section>

    <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <div>
        <h6 class="footer-title">Services</h6>
        <p class="footer-txt">Consulting</p>
        <p class="footer-txt">Development</p>
        <p class="footer-txt">Marketing</p>
        <p class="footer-txt">Social Media</p>
      </div>
      <div>
        <h6 class="footer-title">Extras</h6>
        <a href="https://audetcameron.github.io/brain-game/" target="_blank" class="link link-hover">Brain Game</a>
        <AlienInvasion />
        <DiscoParty />
      </div>
      <div>
        <h6 class="footer-title">Hobbies</h6>
        <a href="https://discord.com/invite/laravel" target="_blank" class="link link-hover">Laravel Discord</a>
        <a href="https://www.youtube.com/@MechaDome" target="_blank" class="link link-hover">MechaDome</a>
        <a href="https://capitalwebcompany.com/" target="_blank" class="link link-hover">Capital Web Company</a>
      </div>
    </footer>
    <div class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>Copyright © {{copyright}}- All right reserved by ACME Industries Ltd</p>
        <p class="text-xs"> attribution: <a href="https://www.vecteezy.com/free-vector/developer-icon">Developer Icon Vectors by Vecteezy</a></p>
      </aside>
    </div>
    <!-- <HelloWorld msg="Vite + Vue" /> -->
  </template>

  <style scoped>
    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
      filter: drop-shadow(0 0 2em #42b883aa);
    }
  </style>
