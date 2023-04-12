<script>
    // @ts-nocheck
    import { studentsArray } from "../../../routes/apply/new_student_inquiry/data-store";
    let special ='', currently = '', student_firstname = '', student_lastname = '', student_gender = '', birth_date= '', interest_grade = '', school_year = '', current_grade = '', current_school = '', special_message = '', currently_message = '', languages = '';
    export let title;
    export let isModalOpen = false;

    const handleClose = () => {
      isModalOpen = false;
    };

    async function handleSubmitForm(event) {
      event?.preventDefault();
      const response = await fetch('/api/admin/student/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          student_firstname,
          student_lastname,
          student_gender,
          birth_date,
          interest_grade,
          school_year,
          current_grade,
          current_school,
          special,
          special_message,
          currently,
          currently_message,
          languages,
        })
      });
      let result = await response.json();
      if(result.status === 'Success') {
        handleSubmitStudent();
      }
    }
    const handleSubmitStudent = () => {
        const new_Student = {
          name: student_firstname + " " + student_lastname,
          grade: current_grade,
          year: school_year,
        };
        studentsArray.update((currentStudent) => {
          return [new_Student, ...currentStudent];
        })
        isModalOpen = false;
      }

</script>
<div class="fixed z-10 inset-0 overflow-y-auto { isModalOpen ? 'block' : 'hidden' }">
    <div class="fixed inset-0 bg-gray-900 bg-opacity-80"></div>
      <div class="bg-white overflow-hidden transform transition-all max-w-4xl mx-auto" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class="p-6 bg-blue-900 text-white ">
          <h2 class="text-lg font-medium leading-6" id="modal-headline">
            {title}
          </h2>
        </div>

          <div class="mt-4">
            <form class="px-2 mx-auto" on:submit={handleSubmitForm}>
                <div class="grid grid-cols-2 gap-2">
                    <div class="mb-4">
                        <label for="firstName" class="block mb-2 font-bold text-blue-900">FIRST NAME:</label>
                        <input id="firstName" placeholder="First Name" bind:value={student_firstname} name="firstName" class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100">    
                    </div>
                    <div class="mb-4">
                        <label for="gender" class="block mb-2 font-bold text-blue-900">LAST NAME:</label>
                        <input id="lastname" placeholder="Last Name" bind:value={student_lastname} name="lastname" class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div class="mb-4">
                    <label for="gender" class="block mb-2 font-bold text-blue-900">Gender:</label>
                    <select id="gender" name="gender" bind:value="{student_gender}" class="w-full px-4 py-2 text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100" required>
                        <option value="" disabled selected>Select an option</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                  </div>
                    <div class="mb-4">
                      <label for="birth_date" class="block mb-2 font-bold text-blue-900">BIRTH DATE:</label>
                      <input type="date" id="birth_date" placeholder="Date of Birth" bind:value={birth_date} name="birth_date" class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100">
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <div class="mb-4">
                      <label for="interest_grade" class="mb-2 block font-bold text-blue-900">GRADE LEVEL OF INTEREST:</label>
                      <select id="interest_grade" name="interest_grade" bind:value={interest_grade} class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100">
                        <option value="" disabled selected>Select Grade</option>
                        <option value="Pre-k">Pre-k</option>
                        <option value="Kinder">Kinder</option>
                        <option value="Grade 1">Grade 1</option>
                        <option value="Grade 2">Grade 2</option>
                        <option value="Grade 3">Grade 3</option>
                        <option value="Grade 4">Grade 4</option>
                        <option value="Grade 5">Grade 5</option>
                        <option value="Grade 6">Grade 6</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Grade 8">Grade 8</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11">Grade 11</option>
                        <option value="Grade 12">Grade 12</option>
                      </select>
                    </div>
                    <div class="mb-4">
                      <label for="school_year" class="block mb-2 font-bold text-blue-900">ENROLLMENT SCHOOL YEAR</label>
                      <select id="school_year" name="school_year" bind:value={school_year} class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100">
                        <option value="" disabled selected>Select School Year</option>
                        <option value="2023-2024">2023-2024</option>
                      </select>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <div class="mb-4">
                      <label for="current_grade" class="mb-2 block font-bold text-blue-900">CURRENT GRADE IN SCHOOL:</label>
                      <select id="current_grade" name="current_grade" bind:value={current_grade} class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100">
                        <option value="" disabled selected>Select Grade</option>
                        <option value="Pre-k">Pre-k</option>
                        <option value="Kinder">Kinder</option>
                        <option value="Grade 1">Grade 1</option>
                        <option value="Grade 2">Grade 2</option>
                        <option value="Grade 3">Grade 3</option>
                        <option value="Grade 4">Grade 4</option>
                        <option value="Grade 5">Grade 5</option>
                        <option value="Grade 6">Grade 6</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Grade 8">Grade 8</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11">Grade 11</option>
                        <option value="Grade 12">Grade 12</option>
                      </select>
                    </div>
                    <div class="mb-4">
                      <label for="current_school" class="block mb-2 font-bold text-blue-900">CURRENT SCHOOL</label>
                      <input type="text" id="current_school" placeholder="Current School" bind:value={current_school} name="current_school" class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100">
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <div class="mb-4">
                      <label for="special" class="block mb-2 font-bold text-blue-900">Does your child have a suspected or diagnosed special need (physical handicap, learning disability, behavioural, ADHD, autism, speech delay etc)?</label>
                      <select bind:value={special} id="special" name="special" class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100">
                        <option value="" disabled selected>Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      {#if special === 'yes'}
                      <div class="mb-4">
                        <label for="special_message" class="block mb-2 font-bold text-blue-900">Message:</label>
                        <textarea bind:value={special_message} placeholder="Please provide a short description of the need. We will get back to you if we need more information" id="message" name="message" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" />
                      </div>
                      {/if}
                    </div>
                    <div class="mb-4">
                      <label for="currently" class="block mb-2 font-bold text-blue-900">Is this student currently attending a school where he or she is part of an ESL Pull-out Program or receiving ESL Support?</label>
                      <select bind:value={currently} id="currently" name="currently" class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100">
                        <option value="" disabled selected>Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      {#if currently === 'yes'}
                      <div class="mb-4">
                        <label for="currently_message" class="block mb-2 font-bold text-blue-900">Message:</label>
                          <textarea bind:value={currently_message} placeholder="Please provide additional information about his/her ESL Level" id="message" name="message" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" />
                        </div>
                        {/if}
                      </div>
                    </div>
                    <div>
                      <p class="block mb-2 font-bold text-blue-900">If English is not the language spoken at home for this student, please state the first language. In addition, if his or her schooling has not been in English for the last 3 years, please indicate in what language or languages school has been conducted.</p>
                      <textarea placeholder="Type Here" bind:value={languages} id="languages" name="languages" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" />
                    </div>
                    <div class="text-right">
                      <button type="submit" class="px-4 py-2 font-bold text-white bg-blue-900 rounded">Add Student</button>
                    </div>
                  </form>
                </div>
                <div class="p-2 bg-gray-100 text-left">
                  <button type="button" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" on:click={handleClose}>
                    Close
                  </button>
                </div>
              </div>
            </div>