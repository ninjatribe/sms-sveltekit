<script>
    // @ts-nocheck
    export let title;
    export let isModalOpen = false;

    let firstName = '', lastName = '', displayName = '', email = '', mobile = '', province = '', country = '';
  
    const handleClose = () => {
      isModalOpen = false;
      console.log(isModalOpen)
    };

  </script>
  
  <div class="fixed z-10 inset-0 overflow-y-auto { isModalOpen ? 'block' : 'hidden' }">
    <div class="flex items-center justify-center min-h-screen">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
      <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-4xl mx-auto" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class="p-6 bg-blue-400">
          <h2 class="text-lg text-center font-medium leading-6 text-gray-900" id="modal-headline">
            {title}
          </h2>
        </div>
          <div class="p-6 mt-4">
            <form class="max-w-lg mx-auto">
                <div class="grid grid-cols-2 gap-2">
                    <div class="mb-4">
                        <label for="firstName" class="block mb-2 font-bold text-gray-700">First Name:</label>
                        <input type="text" id="firstName" name="firstName" bind:value="{firstName}" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline" />
                      </div>
                      <div class="mb-4">
                        <label for="lastName" class="block mb-2 font-bold text-gray-700">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" bind:value="{lastName}" class="w-full px-3 py-2 lading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline" />
                      </div>
                </div>
                <div class="mb-4">
                        <label for="lastName" class="block mb-2 font-bold text-gray-700">Display Name:</label>
                        <input type="text" id="lastName" name="lastName" bind:value="{displayName}" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline" />
                </div>
                <div class="grid grid-cols-2 grid-row2 gap-2">
                    <div class="mb-4">
                        <label for="email" class="block mb-2 font-bold text-gray-700">Email:</label>
                        <input type="email" id="email" name="email" bind:value="{email}" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline" />
                    </div>

                    <div class="mb-4">
                        <label for="mobile" class="block mb-2 font-bold text-gray-700">Mobile:</label>
                        <input type="tel" id="mobile" name="mobile" bind:value="{mobile}" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline" />
                    </div>
                    <div class="mb-4">
                        <label for="province" class="block mb-2 font-bold text-gray-700">Province:</label>
                        <input type="text" id="province" name="province" bind:value="{province}" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline" />
                    </div>

                    <div class="mb-4">
                        <label for="country" class="block mb-2 font-bold text-gray-700">Country:</label>
                        <input type="text" id="country" name="country" bind:value="{country}" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline" />
                    </div>
                </div>
              </form>
          </div>
        <div class="p-2 bg-gray-100 text-right">
            <button type="button" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-green-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                Update
            </button>
          <button type="button" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" on:click={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  