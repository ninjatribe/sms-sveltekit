<script>
    // @ts-nocheck
    export let title;
    export let isModalOpen = false;
    export let loadStudent = () => {};

    let firstName = '', middleName = '', lastName = '', email = '', gender = '', mobile = '', primaryLanguage = '', citizenship = '';
  
    const handleClose = () => {
      isModalOpen = false;
      console.log(isModalOpen)
    };

    async function handleSubmit(event) {
      event?.preventDefault();
      const response = await fetch('/api/admin/student/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          middleName,
          lastName,
          email,
          gender,
          mobile,
          primaryLanguage,
          citizenship,
        })
      });
      let result = await response.json();
      isModalOpen = false;
      if(result.status === 'Success') {
        loadStudent();
      }
    }
  </script>
  
  <div class="fixed z-10 inset-0 overflow-y-auto { isModalOpen ? 'block' : 'hidden' }">
    <div class="flex items-center justify-center min-h-screen">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
      <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full mx-auto" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class="p-6">
          <h2 class="text-lg font-medium leading-6 text-gray-900" id="modal-headline">
            {title}
          </h2>
          <div class="mt-4">
            
            <form class="max-w-lg mx-auto" on:submit={handleSubmit}>
                <div class="mb-4">
                  <label for="firstName" class="block mb-2 font-bold text-gray-700">First Name:</label>
                  <input type="text" id="firstName" name="firstName" bind:value="{firstName}" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                </div>
                <div class="mb-4">
                  <label for="lastName" class="block mb-2 font-bold text-gray-700">Middle Name:</label>
                  <input type="text" id="middleName" name="middleName" bind:value="{middleName}" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                </div>
                <div class="mb-4">
                  <label for="lastName" class="block mb-2 font-bold text-gray-700">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" bind:value="{lastName}" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                </div>
                <div class="mb-4">
                  <label for="email" class="block mb-2 font-bold text-gray-700">Email:</label>
                  <input type="email" id="email" name="email" bind:value="{email}" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                </div>
                <div class="mb-4">
                    <label for="gender" class="block mb-2 font-bold text-gray-700">Gender:</label>
                    <select id="gender" name="gender" bind:value="{gender}" class="w-48 px-4 py-2 text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100">
                        <option value="" disabled selected>Select an option</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                </div>
                <div class="mb-4">
                  <label for="mobile" class="block mb-2 font-bold text-gray-700">Mobile:</label>
                  <input type="tel" id="mobile" name="mobile" bind:value="{mobile}" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                </div>
                <div class="mb-4">
                    <label for="primaryLanguage" class="block mb-2 font-bold text-gray-700">Primary Language:</label>
                    <select id="primaryLanguage" name="primaryLanguage" bind:value="{primaryLanguage}" class="w-48 px-4 py-2 text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100">
                        <option value="" disabled selected>Select an option</option>
                        <option value="english">English</option>
                        <option value="tagalog">Tagalog</option>
                      </select>
                </div>
                <div class="mb-4">
                    <label for="citizenship" class="block mb-2 font-bold text-gray-700">Citizenship:</label>
                    <select id="citizenship" name="citizenship" bind:value="{citizenship}" class="w-48 px-4 py-2 text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100">
                        <option value="" disabled selected>Select an option</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Australia">Australia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Italy">Italy</option>
                        <option value="Japan">Japan</option>
                        <option value="Philippines">Philippines</option>
                        <option value="South Korea">South Korea</option>
                      </select>
                </div>
                <div class="text-center">
                  <button type="submit" class="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline">Submit</button>
                </div>
              </form>
              
          </div>
        </div>
        <div class="p-2 bg-gray-100 text-right">
          <button type="button" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" on:click={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  