<svelte:head>
    <title>New Student Inquiry</title>
</svelte:head>
<script>
	import AddStudent from '$lib/components/forms/AddStudentForm.svelte';
    // @ts-nocheck
    import { studentsArray } from '$lib/utils/stores/Student.js';

    let pending = 'Pending';
    let firstName = '', lastName = '', email = '', gender = '', martial_status = '', family_role = '', apply = '', missionary = '', inform = '', ads = '', missionary_message = '', apply_message = '';
	let isModalOpen = false;

    // @ts-ignore
    const handleModal = (e) => {
        e?.preventDefault();
        isModalOpen = true;
    }
    
    // @ts-ignore
    async function handleSubmit(event) {
      event?.preventDefault();
      const response = await fetch('/api/admin/applicant/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          gender,
          martial_status,
          family_role,
          apply,
          apply_message,
          missionary,
          missionary_message,
          inform,
          ads,
          pending,
          $studentsArray,
        })
      });
      let result = await response.json();
      isModalOpen = false;
      if(result.status === 'Success') {
        alert("Information has been saved");
      }
    }
</script>
<div class="mt-4">
    <form class="max-w-4xl mx-auto" on:submit={handleSubmit}>
        <h2 class="text-center font-bold text-blue-900 text-3xl">NEW STUDENT INQUIRY FORM</h2>
        <div class="text-sm white">
            <p class="my-5">Is my child <span class="italic">eligible for enrollment</span> at Faith Academy? Are there <span class="italic">openings available</span> in my child’s grade level? Is there any <span>other testing</span> or paperwork I need to complete before I apply? Am I already <span class="italic">ready to apply</span>? Kindly submit the following form and our registrar will be happy to answer those questions and help you get started. <strong class="text-blue-900">Please note: This form is not the application; it is the first step of the application and enrollment process.</strong></p> 
            <p>If you had a registration account prior to March of 2022, you will need to submit this form to create a new account. This also applies to those who have already submitted a pre-registration form or are a returning family with students who have been previously enrolled. Kindly complete ALL fields in English otherwise you may be asked to started again. After submission wait for a follow up email from our registrar which will include next steps and login instructions. </p>
            <p class="my-5">Already received confirmation or looking for re-enrollment? <a href="/" class="text-blue-200 underline">Login here</a></p>
        </div>
        <h1 class="font-bold text-2xl mt-5 text-blue-900">Parents Information</h1>
        <hr>
        <div class="grid grid-cols-2 gap-2">
            <div class="mb-4">
                <label for="firstName" class="mb-2 block font-bold text-blue-900">NAME:</label>
                <input type="text" id="firstName" name="firstName" bind:value={firstName} placeholder="First Name" class="w-3/6 leading-tight text-gray-700 border rounded" required/>
                <input type="text" id="firstName" name="lastName" bind:value={lastName} placeholder="Last Name" class="w-2/6 leading-tight text-gray-700 border rounded" required/>
            </div>
            <div class="mb-4">
                <label for="gender" class="block mb-2 font-bold text-blue-900">Gender:</label>
                <select id="gender" name="gender" bind:value="{gender}" class="w-full px-4 py-2 text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100" required>
                    <option value="" disabled selected>Select an option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-3">
            <div class="mb-4">
                <label for="email" class="block mb-2 font-bold text-blue-900">Email:</label>
                <input type="text" id="email" name="email" placeholder="Email" bind:value={email} class=" w-full leading-tight text-gray-700 border rounded" required/>
          </div>
          <div class="mb-4">
            <label for="martial" class="block mb-2 font-bold text-blue-900">Martial Status:</label>
            <select id="martial" name="martial" bind:value={martial_status} class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100" required>
                <option value="" disabled selected>Please Choose</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Seperated">Seperated</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="family" class="block mb-2 font-bold text-blue-900">Family role:</label>
            <select id="family" name="family" bind:value={family_role} class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100" required>
                <option value="" disabled selected>Please Choose</option>
                <option value="Father">Father/Legal Guardian</option>
                <option value="Mother">Mother/Legal Guardian</option>
                <option value="Guardian">Guardian</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
            <div class="mb-4">
                <label for="gender" class="block mb-2 font-bold text-blue-900">DO YOU INTENDED TO APPLY FOR A STAFF POSITION AT FAITH ACADEMY?</label>
                <select bind:value={apply} id="apply" name="apply" class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100" required>
                    <option value="" disabled selected>Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
              </select>
              {#if apply === 'yes'}
              <div class="mb-4">
                <label for="apply_message" class="block mb-2 font-bold text-blue-900">Message:</label>
                <textarea placeholder="Please indicate for what position you intend to apply." bind:value={apply_message} id="apply_message" name="apply_message" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" />
              </div>
              {/if}

        </div>
        <div class="mb-4">
        <label for="missionary" class="block mb-2 font-bold text-blue-900">IS YOUR FAMILY NOW OR WILL BE IN FULL-TIME MISSIONARY WORK?</label>
            <select bind:value={missionary} id="missionary" name="missionary" class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100" required>
                <option value="" disabled selected>Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            {#if missionary === 'yes'}
            <div class="mb-4">
                <label for="missionary_message" class="block mb-2 font-bold text-blue-900">Message:</label>
                <textarea placeholder="Please give the same name of your organization" bind:value={missionary_message} id="missionary_message" name="missionary_message" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" />
              </div>
            {/if}
        </div>
    </div>
    <div class="grid grid-cols-2 gap-2">
        <div class="mb-4">
            <label for="inform" class="block mb-2 font-bold text-blue-900">HOW DID YOU HEAR ABOUT FAITH ACADEMY?</label>
            <select id="inform" name="inform" bind:value={inform} class="w-full px-4 py-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none focus:shadow-outline class:active:bg-gray-100 class:focus:outline-none class:focus:bg-gray-100" required>
                <option value="" disabled selected>Select an option</option>
                <option value="website">Website</option>
                <option value="advertisement">Advertisement</option>
                <option value="staff">FA Staff or Alumni</option>
                <option value="friend">Friend</option>
                <option value="recuitment">Recuitment Booth</option>
                <option value="other">Other</option>
              </select>
        </div>
        <div class="mb-4">
            <label for="ads" class="block mb-2 font-bold text-blue-900">WHERE DID YOU SEE OUR AD?</label>
            <input type="text" id="ads" name="ads" bind:value={ads} class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" placeholder="Note:" required/>
        </div>
        </div>
        <br>
        <br>
        <div>
        <h1 class="font-bold text-2xl mb-4 text-blue-900">Student Information</h1>
        <hr>
        <hr>
        <table class="w-full bg-blue-900 text-gray-500 dark:text-gray-400 ">
            <thead class="text-white text-center text-xl">
                    <th>Name</th>
                    <th>Grade Level of Interest</th>
                    <th>Enrollment School Year</th>
            </thead>
            <tbody>
                {#each $studentsArray as student}
                <tr class="bg-white border-b text-center text-blue-900 font-bold">
                    <td>{student.name}</td>
                    <td>{student.grade}</td>
                    <td>{student.year}</td>
                    <!--<button on:click={deleteRow(data.id)}>Delete</button>--->
                </tr>
                {/each}
            </tbody>
        </table>
        <button class="text-yellow-600 py-6" on:click={handleModal}>+ Add Student</button>
    </div>
    <div class="mb-4 mt-10">
        <label for="question" class="block mb-2 font-bold text-gray-700">QUESTIONS?:</label>
        <hr>
        <label for="question" class="font-bold text-blue-900 py-2">WHAT QUESTIONS CAN WE ANSWER FOR YOU?</label>
        <textarea placeholder="Type Here..." id="question" name="question" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" required/>
      </div>
      <div class="text-center">
        <button class="text-white py-2 bg-yellow-500 px-5 rounded text-center">Submit</button>
      </div>
    </form>
</div>
{#if isModalOpen}
	<AddStudent title={'Student Info'} bind:isModalOpen />
{/if}