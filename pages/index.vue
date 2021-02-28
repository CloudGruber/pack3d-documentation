<template>

<div class="w-full">
  <!-- This is the landing page content - swap out with your own -->
    <div class="w-full p-4">
      <div class="grid grid-cols-10 gap-4">
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <a href="https://docstemplate.cleavr.cloud" target="_blank" class="flex flex-row items-center p-4 bg-blue-100 rounded shadow-sm hover:bg-blue-200">
            <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-blue-500 rounded-xl">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div class="flex flex-col flex-grow ml-4 font-semibold text-blue-800">
              Starting Guide
            </div>
          </a>
        </div>
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <a href="https://github.com/cleavr/docs-template" target="_blank" class="flex flex-row items-center p-4 bg-green-100 rounded shadow-sm hover:bg-green-200">
            <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-green-500 rounded-xl">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div class="flex flex-col flex-grow ml-4 font-semibold text-green-800">
              Github Repository
            </div>
          </a>
        </div>
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <a href="https://docs.cleavr.io" target="_blank" class="flex flex-row items-center p-4 bg-orange-100 rounded shadow-sm hover:bg-orange-200">
            <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-orange-500 rounded-xl">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <div class="flex flex-col flex-grow ml-4 font-semibold text-orange-800">
              System design documentation
            </div>
          </a>
        </div>
      </div>
    </div>
  <div class="flex flex-col w-full mt-8">
    <div class="flex flex-col justify-center text-center bg-red-200 rounded shadow-lg md:flex-row md:text-left">
      <div class="relative flex flex-col items-center justify-center">
        <div class="absolute flex items-center justify-center w-12 h-12 ml-2 text-xl font-black text-red-100 bg-red-700 rounded-full shadow-lg md:ml-0 md:mr-3">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
      </div>
      <div class="flex flex-col justify-center max-w-2xl p-10 ml-5 bg-red-200 rounded">
        <div class="text-xs font-bold text-red-500 uppercase">Build</div>
        <div class="text-xl font-bold text-red-700 md:text-3xl">Nuxt / Content</div>
        <div class="mt-4 text-red-800">
          Consequat cillum esse veniam anim irure duis eu nostrud sunt culpa enim.
          Adipisicing est dolor non labore proident cupidatat magna culpa amet commodo anim.
          Laboris ad consectetur occaecat magna Lorem.
          Velit magna incididunt pariatur tempor magna nisi ex dolor occaecat proident sit.
        </div>
        <div class="mt-6">
          <a href="https://content.nuxtjs.org" target="_blank" class="text-red-800 hover:text-red-600">
            View the Nuxt / Content docs -->
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col w-full">
    <div class="flex flex-col justify-center mt-12 text-center bg-blue-200 rounded shadow-lg md:flex-row md:text-left">
      <div class="relative flex flex-col items-center justify-center">
        <div class="absolute flex items-center justify-center w-12 h-12 ml-2 text-xl font-black text-teal-100 bg-blue-700 rounded-full shadow-lg md:ml-0 md:mr-3">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
      </div>
      <div class="flex flex-col justify-center max-w-2xl p-10 ml-5 bg-blue-200 rounded">
        <div class="text-xs font-bold text-blue-500 uppercase">Design</div>
        <div class="text-xl font-bold text-blue-700 md:text-3xl">TailwindCSS</div>
        <div class="mt-4 text-blue-800">
          This starter template uses TailwindCSS. Check out their documentation for the various ways you can apply TailwindCSS to your documentation
          center. You may also want to check out TailwindUI, their paid library of pre-made components.
        </div>
        <div class="mt-6">
          <a href="https://tailwindcss.com/docs" target="_blank" class="text-blue-800 hover:text-blue-600">
            View the TailwindCSS docs -->
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col w-full">
    <div class="flex flex-col justify-center mt-12 text-center bg-teal-200 rounded shadow-lg md:flex-row md:text-left">
      <div class="relative flex flex-col items-center justify-center">
        <div class="absolute flex items-center justify-center w-12 h-12 ml-2 text-xl font-black text-teal-100 bg-teal-700 rounded-full shadow-lg md:ml-0 md:mr-3">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>
      <div class="flex flex-col justify-center max-w-2xl p-10 ml-5 bg-teal-200 rounded">
        <div class="text-xs font-bold text-teal-500 uppercase">Deploy</div>
        <div class="text-xl font-bold text-teal-700 md:text-3xl">Cleavr</div>
        <div class="mt-4 text-teal-800">
          When you're ready to make your site live, use Cleavr to provision a VPS server, configure your server for Nuxt, and deploy your site.
        </div>
        <div class="mt-6">
          <a href="https://cleavr.io" target="_blank" class="text-teal-800 hover:text-teal-600">
            Deploy your apps with Cleavr -->
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full pb-12 mt-12">
    <h2 class="text-2xl font-semibold">
      Libraries Used
    </h2>
    <div class="w-full my-6 overflow-x-scroll bg-white rounded shadow-md min-w-3xl">
      <table class="w-full text-left border-collapse">
        <thead>
        <tr>
          <th class="px-6 py-4 text-sm font-bold uppercase border-b bg-grey-lightest text-grey-dark border-grey-light">Library</th>
          <th class="px-6 py-4 text-sm font-bold uppercase border-b bg-grey-lightest text-grey-dark border-grey-light">Description</th>
        </tr>
        </thead>
        <tbody>
        <tr class="hover:bg-grey-lighter">
          <td class="px-6 py-4 border-b border-grey-light">
            <a href="https://content.nuxtjs.org" class="text-blue-500 hover:text-blue-700" target="_blank">
              @nuxt/content
            </a>
          </td>
          <td class="px-6 py-4 text-sm border-b border-grey-light">
            Create blogs and docs using markdown and Vue components
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="px-6 py-4 border-b border-grey-light">
            <a href="https://github.com/drdogbot7/tailwindcss-responsive-embed" class="text-blue-500 hover:text-blue-700" target="_blank">
              tailwindcss-responsive-embed
            </a>
          </td>
          <td class="px-6 py-4 text-sm border-b border-grey-light">
            Make embedded content responsive
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="px-6 py-4 border-b border-grey-light">
            <a href="https://github.com/tailwindlabs/tailwindcss-aspect-ratio" class="text-blue-500 hover:text-blue-700" target="_blank">
              tailwindcss-aspect-ratio
            </a>
          </td>
          <td class="px-6 py-4 text-sm border-b border-grey-light">
            Display ideal aspect rations for media
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="px-6 py-4 border-b border-grey-light">
            <a href="https://tailwindcss.com/docs/typography-plugin" class="text-blue-500 hover:text-blue-700" target="_blank">
              @tailwindcss/typography
            </a>
          </td>
          <td class="px-6 py-4 text-sm border-b border-grey-light">
            Style html converted from Markdown with Prose class
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="px-6 py-4 border-b border-grey-light">
            <a href="https://www.npmjs.com/package/nuxt-content-algolia" class="text-blue-500 hover:text-blue-700" target="_blank">
              nuxt-content-algolia
            </a>
          </td>
          <td class="px-6 py-4 text-sm border-b border-grey-light">
            Deliver documentation content to your Algolia indices
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="px-6 py-4 border-b border-grey-light">
            <a href="https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/vue/" class="text-blue-500 hover:text-blue-700" target="_blank">
              vue-instantsearch
            </a>
          </td>
          <td class="px-6 py-4 text-sm border-b border-grey-light">
            Algolia search components made for VueJS
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="px-6 py-4 border-b border-grey-light">
            <a href="https://www.npmjs.com/package/v-click-outside" class="text-blue-500 hover:text-blue-700" target="_blank">
              v-click-outside
            </a>
          </td>
          <td class="px-6 py-4 text-sm border-b border-grey-light">
            Detect outside clicks - great for collapsing dropdown menus
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style>
</style>
