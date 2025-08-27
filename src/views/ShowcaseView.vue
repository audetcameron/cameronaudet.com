<template>
  <div id="showcase" class="p-4 bg-white sm:p-0 dark:bg-gray-800 max-w-screen-xl mx-auto">
    <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5 dark:text-gray-300">Experience Showcase</h1>
  </div>

  <div class="bg-sky-100 dark:bg-sky-800">
    <div class="block lg:flex py-4 mx-auto  container max-w-screen-xl">

      <div class="images">
        <img class="" alt="maranada-cluejay dashbaord screenshot" src="@/assets/cluejay-dashboard-1.jpg" />
        <img class="mt-6 " alt="maranada-cluejay dashbaord lab results" src="@/assets/cluejay-dashboard-2.jpg" />
      </div>
      <div class="xl:w-2/5 lg:w-1/2 p-4 md:p-0 lg:ml-8 md:ml-6 md:mt-0 mt-6">

        <div class="border-b border-gray-300 pb-3 mt-6 lg:mt-0">
          <p class="text-sm leading-none text-gray-600 dark:text-gray-300 ">
            ClueJay / MySimplePetLab - (Employer:Altos)
          </p>
          <h2 class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
            Overview
          </h2>
          <p class="xl:pr-2 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-2">
            ClueJay (later MySimplePetLab) was a startup that offered at-home pet testing. I helped develop and implement the technical foundation of their lab infrastructure along with their customer-facing platform, dashboards, and admin tools.
          </p>
        </div>

        <div class="border-b border-gray-300 pb-2">
          <h2 class="text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">Technology Stack</h2>
          <p class="xl:pr-2 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-2">
            Laravel, WordPress, Redis, Nova, Forge, custom VPS provisioning, Vue.js 2
          </p>
        </div>

        <div class="border-b border-gray-300 pb-6">
          <p class="text-lg leading-4 mt-4 text-gray-900 dark:text-gray-300">Front End</p>
          <ul class="list-disc ml-6 mt-2 mt-2">
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Headless WordPress was used as the CMS so the client could manage page content directly.</li>
            <li class="pr-6 lg:pr-0text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Commerce was powered by WooCommerce, with data fetched into Laravel through API connections.</li>
            <li class="pr-6 lg:pr-0text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Laravel’s observer system ensured that when a user was created in Laravel, the corresponding account was automatically created in WordPress.</li>
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Custom WordPress functions were developed to handle authentication and deliver CMS content for rendering inside the Laravel front end.</li>
          </ul>
          <p class="text-lg leading-4 mt-4 text-gray-900 dark:text-gray-300">Customer Dashboard</p>
          <ul class="list-disc ml-6 mt-2 mt-2">
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Built with Vue.js and Laravel (pre-Inertia, using API endpoints).</li>
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">A nightly Laravel schedule pulled product and kit data from the vendor. This allowed us to correlate kit activations with customer accounts using unique codes from purchased kits.</li>
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Customers could activate kits, create pet profiles, and submit samples for analysis.</li>
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Once lab staff uploaded results using the Lab Dashboard, customers could view their test results, complete surveys, and share or print results for their veterinarians.</li>
          </ul>
          <p class="text-lg leading-4 mt-4 text-gray-900 dark:text-gray-300">Admin Panel (Laravel Nova)</p>
          <ul class="list-disc ml-6 mt-2">
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Developed a custom Laravel Nova administration panel with Spatie impersonation so support staff could troubleshoot customer accounts directly.</li>
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Included permission management to give different team members (such as administrators and customer service) the appropriate level of access.</li>
          </ul>
          <p class="text-lg leading-4 mt-4 text-gray-900 dark:text-gray-300">Lab Dashboard (Laravel Nova)</p>
          <ul class="list-disc ml-6 mt-2">
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Designed a system for lab technicians to scan QR codes on samples, enter results, and link those results to the correct customer profile.</li>
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Provided an efficient workflow to ensure accuracy and speed when processing test data.</li>
          </ul>
        </div>

        <div class="pb-2">
          <h2 class="text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">Outcome</h2>
          <p class="xl:pr-2 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-2">
            ClueJay was acquired by MySimplePetLab within a year of launch after securing new funding. MySimplePetLab later ceased operations in 2025.
            <a data-start="2330" data-end="2417" class="decorated-link" rel="noopener" target="_blank" href="https://web.archive.org/web/20250121090716/https://mysimplepetlab.com/">Archived site
              <span aria-hidden="true" class="ms-0.5 inline-block align-middle leading-none"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-rtl-flip="" class="block h-[0.75em] w-[0.75em] stroke-current stroke-[0.75]"><path d="M14.3349 13.3301V6.60645L5.47065 15.4707C5.21095 15.7304 4.78895 15.7304 4.52925 15.4707C4.26955 15.211 4.26955 14.789 4.52925 14.5293L13.3935 5.66504H6.66011C6.29284 5.66504 5.99507 5.36727 5.99507 5C5.99507 4.63273 6.29284 4.33496 6.66011 4.33496H14.9999L15.1337 4.34863C15.4369 4.41057 15.665 4.67857 15.665 5V13.3301C15.6649 13.6973 15.3672 13.9951 14.9999 13.9951C14.6327 13.9951 14.335 13.6973 14.3349 13.3301Z"></path></svg></span>
            </a>
          </p>
        </div>

        <div class="border-b border-gray-200 pb-2">
          <h2 class="text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">My Role</h2>
          <p class="xl:pr-2 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300mt-2">I worked with Figma comps to build all functionality with Vue.js and Sass inside Laravel. Every technical challenge required a tailored solution, and the flexibility of Laravel made it possible to deliver a seamless experience across customer, admin, and lab workflows.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-teal-200 dark:bg-teal-800 mt-4">
    <div class="block lg:flex py-4 mx-auto  container max-w-screen-xl">

      <div class="images">
        <img class="" alt="ITR commerce screenshot" src="@/assets/itr-laravel-vuejs-build-1.jpg" />
        <img class="mt-6 " alt="ITR dashboard screenshot" src="@/assets/itr-laravel-vuejs-build-2.jpg" />
      </div>

      <div class="xl:w-2/5 lg:w-1/2 p-4 md:p-0 lg:ml-8 md:ml-6 md:mt-0 mt-6">

        <div class="border-b border-gray-400 pb-3 mt-6 lg:mt-0">
          <p class="text-sm leading-none text-gray-600 dark:text-gray-300 ">
            <a data-start="2330" data-end="2417" class="decorated-link" rel="noopener" target="_blank" href="https://itrondemand.com/">
              ITR OnDemand
              <span aria-hidden="true" class="ms-0.5 inline-block align-middle leading-none"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-rtl-flip="" class="block h-[0.75em] w-[0.75em] stroke-current stroke-[0.75]"><path d="M14.3349 13.3301V6.60645L5.47065 15.4707C5.21095 15.7304 4.78895 15.7304 4.52925 15.4707C4.26955 15.211 4.26955 14.789 4.52925 14.5293L13.3935 5.66504H6.66011C6.29284 5.66504 5.99507 5.36727 5.99507 5C5.99507 4.63273 6.29284 4.33496 6.66011 4.33496H14.9999L15.1337 4.34863C15.4369 4.41057 15.665 4.67857 15.665 5V13.3301C15.6649 13.6973 15.3672 13.9951 14.9999 13.9951C14.6327 13.9951 14.335 13.6973 14.3349 13.3301Z"></path></svg></span>
              - (Employer:Altos)
            </a>
          </p>
          <h2 class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
            Overview
          </h2>
          <p class="xl:pr-2 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-2">
            ITR needed a subscription-based commerce platform that integrated directly with HubSpot Deals. I engineered a solution that combined Laravel, Vue.js, and AWS infrastructure to support recurring billing, customer dashboards, and mobile applications.
          </p>
        </div>

        <div class="border-b border-gray-400 pb-2">
          <h2 class="text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">Technology Stack</h2>
          <p class="xl:pr-2 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-2">
            Laravel, Vue.js 2, Forge, AWS, Authorize.net ARB, HubSpot API, Laravel Nova, Laravel Passport,  Headless Chrome (Puppeteer)
          </p>
        </div>

        <div class="border-b border-gray-400 pb-6">
          <p class="text-lg leading-4 mt-4 text-gray-900 dark:text-gray-300">Front End</p>
          <ul class="list-disc ml-6 mt-2">
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Built recurring subscription commerce with Authorize.net ARB (Automated Recurring Billing).</li>
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Integrated HubSpot APIs to synchronize subscriptions with HubSpot Deals.</li>
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Developed Vue.js components for checkout and account management.</li>
          </ul>
          <p class="text-lg leading-4 mt-4 text-gray-900 dark:text-gray-300">Customer Dashboard</p>
          <ul class="list-disc ml-6 mt-2">
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Designed a custom PDF rendering solution for ITR’s Datacast and Trends Reports.</li>
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Converted Publisher templates into reusable layouts and parsed XML data to display responsive, mobile-friendly reports inside Vue.js.</li>
          </ul>
          <p class="text-lg leading-4 mt-4 text-gray-900 dark:text-gray-300">Admin Panel (Laravel Nova)</p>
          <ul class="list-disc ml-6 mt-2">
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Created a full-featured admin dashboard for troubleshooting user accounts and managing subscriptions.</li>
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Implemented role-based permissions using Spatie packages to give different levels of access to team members.</li>
          </ul>
          <p class="text-lg leading-4 mt-4 text-gray-900 dark:text-gray-300">Mobile Application Support</p>
          <ul class="list-disc ml-6 mt-2">
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Provided the backend for both iOS and Android apps.</li>
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Used Laravel Passport to expose secure API endpoints.</li>
            <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Leveraged headless Chrome (Puppeteer) to transform API data into responsive HTML layouts optimized for mobile app display.</li>
          </ul>
        </div>

        <div class="pb-2">
          <h2 class="text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">Outcome</h2>
          <p class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-2">
           ITR continues to operate its OnDemand service with the platform I delivered, supporting customers across web and mobile.
         </p>
       </div>

       <div class="pb-2">
        <h2 class="text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">My Role</h2>
        <p class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-2">I served as the primary developer, engineer, and team manager, coordinating cross-functional efforts to deliver the project on time and ensure high-quality, reliable code.</p>
      </div>


    </div>
  </div>
</div>

<div class="bg-purple-200 dark:bg-purple-900 mt-4">
  <div class="block lg:flex py-4 mx-auto container max-w-screen-xl">

    <div class="images">
      <img class="" alt="Epilepsy New England Donation Center screenshot" src="@/assets/efne-dc-website.jpg" />
      <img class="mt-6 " alt="Epilepsy New England Donation Center Bin Finder" src="@/assets/efne-dc-binfinder.jpg" />

    </div>

    <div class="xl:w-2/5 lg:w-1/2 p-4 md:p-0 lg:ml-8 md:ml-6 md:mt-0 mt-6">

      <div class="border-b border-gray-400 pb-3 mt-6 lg:mt-0">
        <p class="text-sm leading-none text-gray-600 dark:text-gray-300 ">
          <a data-start="2330" data-end="2417" class="decorated-link" rel="noopener" target="_blank" href="https://www.donatenewengland.org/schedule-a-pickup">
            Epilepsy Foundation New England - Donation Center
            <span aria-hidden="true" class="ms-0.5 inline-block align-middle leading-none"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-rtl-flip="" class="block h-[0.75em] w-[0.75em] stroke-current stroke-[0.75]"><path d="M14.3349 13.3301V6.60645L5.47065 15.4707C5.21095 15.7304 4.78895 15.7304 4.52925 15.4707C4.26955 15.211 4.26955 14.789 4.52925 14.5293L13.3935 5.66504H6.66011C6.29284 5.66504 5.99507 5.36727 5.99507 5C5.99507 4.63273 6.29284 4.33496 6.66011 4.33496H14.9999L15.1337 4.34863C15.4369 4.41057 15.665 4.67857 15.665 5V13.3301C15.6649 13.6973 15.3672 13.9951 14.9999 13.9951C14.6327 13.9951 14.335 13.6973 14.3349 13.3301Z"></path></svg></span>
            - (Employer:Altos)
          </a>
        </p>
        <h2 class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
          Overview
        </h2>
        <p class="xl:pr-2 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-2">
          EFNEDC needed an automated system to coordinate donation pickups and improve engagement with donors. The solution connected HubSpot CRM with Google Sheets, enabling SMS and email notifications for local pickup routes and an interactive bin locator for drop-off donations across New England.
        </p>
      </div>

      <div class="border-b border-gray-400 pb-2">
        <h2 class="text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">Technology Stack</h2>
        <p class="xl:pr-2 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-2">
          Laravel microservices, HubSpot CRM, Zapier, Google Sheets, Google Maps API, Google Distance Matrix, Google Apps Script, MessageMedia SMS
        </p>
      </div>

      <div class="border-b border-gray-400 pb-6">
        <p class="text-lg leading-4 mt-4 text-gray-900 dark:text-gray-300">Bin Finder</p>
        <ul class="list-disc ml-6 mt-2">
          <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Built a donation bin locator that pulled location data from Google Sheets.</li>
          <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Integrated Google Maps and the Distance Matrix API to help users quickly find the closest donation bins.</li>
          <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">
            Live example:
            <a data-start="2330" data-end="2417" class="decorated-link text-gray-900 dark:text-gray-400 text-underline" rel="noopener" target="_blank" href="https://www.donatenewengland.org/drop-off-locations">
              Donate New England Drop-off Locations
              <span aria-hidden="true" class="ms-0.5 inline-block align-middle leading-none"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-rtl-flip="" class="block h-[0.75em] w-[0.75em] stroke-current stroke-[0.75]"><path d="M14.3349 13.3301V6.60645L5.47065 15.4707C5.21095 15.7304 4.78895 15.7304 4.52925 15.4707C4.26955 15.211 4.26955 14.789 4.52925 14.5293L13.3935 5.66504H6.66011C6.29284 5.66504 5.99507 5.36727 5.99507 5C5.99507 4.63273 6.29284 4.33496 6.66011 4.33496H14.9999L15.1337 4.34863C15.4369 4.41057 15.665 4.67857 15.665 5V13.3301C15.6649 13.6973 15.3672 13.9951 14.9999 13.9951C14.6327 13.9951 14.335 13.6973 14.3349 13.3301Z"></path></svg></span>
            </a>
          </li>
        </ul>
        <p class="text-lg leading-4 mt-4 text-gray-900 dark:text-gray-300">Automation Microservice</p>
        <ul class="list-disc ml-6 mt-2">
          <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Developed a Laravel-based microservice to fetch and sync location data from Google Sheets into corresponding HubSpot lists.</li>
          <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Designed HubSpot workflows integrated with MessageMedia SMS to notify donors in advance when a pickup truck would be in their area.</li>
          <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Increased conversions by allowing donors to schedule pickups directly from automated messages.</li>
        </ul>
        <p class="text-lg leading-4 mt-4 text-gray-900 dark:text-gray-300">Data Integration</p>
        <ul class="list-disc ml-6 mt-2">
          <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Connected HubSpot, Google Sheets, and Zapier to streamline data flows.</li>
          <li class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-1">Wrote custom Google Apps Scripts to export CSV data for email campaigns and third-party vendors based on HubSpot form submissions.</li>
        </ul>
      </div>

      <div class="border-b border-gray-200 pb-2">
        <h2 class="text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">Outcome</h2>
        <p class="pr-6 lg:pr-0 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-2">
          The solution significantly improved automation efficiency and increased donations for the nonprofit by making both pickups and drop-offs more convenient for users.
        </p>
     </div>

  </div>
</div>
</div>

<div class="container my-4 mx-auto">
  <p class="text-center">More showcase examples avaible on request.</p>
</div>
</template>

<style>

</style>
