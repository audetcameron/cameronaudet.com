<script setup lang="ts">

</script>

<template>

  <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
    <div class="container max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row relative py-16">
      <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
        <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
          Cameron Audet
          <span class="text-2xl sm:text-4xl">
           Senior Full Stack Developer
         </span>
         <span class="text-1xl sm:text-2xl">
          & Director of Technology
        </span>
      </h1>
      <h2 class="text-sm sm:text-base text-gray-700 dark:text-white">
       Building, maintaining, and optimizing web infrastructure and automation systems across diverse technology stacks.
     </h2>
     <div class="flex mt-8">
      <a href="https://www.linkedin.com/in/cameronaudet/" target="_blank" class="uppercase py-2 px-4 rounded-lg bg-red-500 border-2 border-transparent text-white text-md mr-4 hover:bg-red-400">
        LinkedIn
      </a>
      <RouterLink to="/showcase" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-red-500 text-red-500 dark:text-white hover:bg-red-500 hover:text-white text-md">
        Showcase
      </RouterLink>
    </div>
  </div>
  <div class="block mt-4 md:mt-0 sm:w-1/3 lg:w-3/5 relative">
    <img src="@/assets/caudet-profile-pic.jpg" alt="Profile photo of Cameron Audet" class="rounded-full max-w-xs md:max-w-sm m-auto">
  </div>
</div>
</div>

<section class="container max-w-screen-xl mx-auto py-10 md:py-16 dark:bg-gray-800" id="workHistory">
  <div class="container max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
    <div class="flex flex-col lg:flex-row justify-between">
      <div class="mb-10 lg:mb-0 sm:w-full lg:w-auto  ">

        <h3 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5 dark:text-gray-300">Professional Experience</h3>

        <p class="mt-2 font-normal text-gray-500 text-md">
          Provide ongoing platform support and consultation to ensure performance, scalability, and alignment with business goals.
        </p>
        <p class="mt-2 font-normal text-gray-500 text-md ">
          Cross functional team manager.
        </p>

      </div>

      <div class="space-y-24">
        <article class="flex space-x-6">
          <div class="font-normal text-gray-700 text-3xl md:text-4xl dark:text-gray-300"></div>

          <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>

          <div>
            <h4 class="font-normal text-gray-700 text-3xl md:text-4xl mb-5 dark:text-gray-300">
              Full Stack MVC
            </h4>

            <p class="font-normal text-gray-500 text-sm md:text-base">
              Develop and maintain long-term web applications using diverse tech stacks, including Laravel with React, Vue, Livewire, and Inertia, as well as Django (Python) with jQuery.
            </p>

          </div>
        </article>

        <article class="flex space-x-6">
          <div class="font-normal text-gray-700 text-3xl md:text-4xl dark:text-gray-300"></div>

          <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>

          <div>
            <h4 class="font-normal text-gray-700 text-3xl md:text-4xl mb-5 dark:text-gray-300">
              E-commerce and Microservices
            </h4>

            <p class="font-normal text-gray-500 text-sm md:text-base">
              Build and maintain a variety of E-commerce solutions including custom shopify themes, WordPress Woocommerce, Magento, OpenCart, Square Space, Wix, Square and more.
            </p>
            <p class="mt-2 font-normal text-gray-500 text-sm md:text-base">
              Create custom microservices for middle man operations and automations via Google App Scripts, Laravel Schedules, Zapier, Make, Buffer, Notion, HubSpot, and more.
            </p>
          </div>
        </article>

        <article class="flex space-x-6">
          <div class="font-normal text-gray-700 text-3xl md:text-4xl dark:text-gray-300"></div>
          <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>
          <div>
            <h4 class="font-normal text-gray-700 text-3xl md:text-4xl mb-5 dark:text-gray-300">
              Marketing, SEO, AIO, GEO
            </h4>

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
  <h3 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5 dark:text-gray-300">Techincal Experience - <small class="text-xs">to name a few</small></h3>
  <p class="font-normal text-gray-500 text-md ">
    Webflow, WordPress / WooCommerce, Wix, Square, Square Space, Shopify, Drupal, Joomla, Laravel, LiveWire, Inertia, Django, TypeScript, React, VueJs, Bootstrap, Foundation, Tailwind, Docker, AWS, Zapier, N8N, Make, Buffer, HubSpot, Google Tag Manager and Analytics, SEMRush, Active Campaign, Constant Contact, Mailchimp, Revenate, Zoho, HotJar, Toast, OpenTable, and more.
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
          Designing and building RESTful APIs with a focus on performance, security, and
          comprehensive documentation for developers.
        </p>
      </article>

      <article class="bg-gray-50 px-8 py-10 rounded-md">
        <div class="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4 dark:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
        </div>

        <h4 class="font-medium text-gray-700 text-lg mb-4">Database Architecture</h4>

        <p class="font-normal text-gray-500 text-md">
          Creating efficient database schemas to ensure scalability, optimization, and performance.
        </p>
      </article>

      <article class="bg-gray-50 px-8 py-10 rounded-md">
        <div class="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4 dark:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
        </div>

        <h4 class="font-medium text-gray-700 text-lg mb-4">SysAdmin / Tech Operations</h4>

        <p class="font-normal text-gray-500 text-md">
          Linux, OSX, Windows System Administration. Cloud Infrastructure Management. Team Leadership and internal team software management.
        </p>
      </article>
    </div>
  </div>
</section>




</template>
