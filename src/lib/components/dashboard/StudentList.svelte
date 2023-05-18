<script>
    // @ts-nocheck
    
        // import axios from 'axios';
        import { onMount } from "svelte";
        import { paginate, LightPaginationNav } from 'svelte-paginate'
        
        // Components
        import EditStudentModal from "../forms/EditStudentlist.svelte";
    
        // Variables
        let items = [];
        let search = ""
        let currentPage = 1;
        let pageSize = 10;
        let itemSize;
        let paginatedItems = [];

        // Exported to edit gender modal
        let editId;
        let editFirstName;
        let editLastName;
        let editGrade;
        let editSchoolYear

        // States
        export let showEditStudentModal = false;
    
    
        async function loadStudents() {
            try {
                let response = await fetch('/api/admin/student', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                let result = await response.json();
                // console.log(result);
                items = result.response;
            } catch (error) {
                console.error('error', error);
            }
            
        }
    
        
        const deleteStudent = async(id) => {
            const response = await fetch('/api/admin/student/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    _id: id
                })
            });
            let result = await response.json();
            if (result.status === 'Success') {
                console.log("Success");
                loadGenders();
            }
        }
    
        $: {
            // If search has a value
            paginatedItems = search
                ? items.filter((students) => {
                        return (
                            students.students_firstname.match(RegExp(search, 'gi')) ||
                            students.students_lastname.match(RegExp(search, 'gi'))
                        );
                  })
                : items;
            
            // Change the length of paginate whenever paginated items change.
            if(paginatedItems.length){
                itemSize = paginatedItems.length
                paginatedItems = paginate({ items: paginatedItems, pageSize, currentPage });
            }
    
        }
    
        onMount(() => {
            loadStudents()
        })
    </script>
    
    <div class="h-full w-full">
        <div class="flex p-2 w-ful">
            <div class="flex items-center gap-2">
                <p>Search: </p>
                <input type="text" bind:value={search}>
            </div>
        </div>  
        <p class="text-2xl">Student List</p>
        <div>
            <table class="border-2 border-black bg-gray-100 w-full">
                <thead class="bg-gray-300">
                    <tr class="bg-gray-300">
                        <th class="text-start">ID</th>
                        <th class="text-start">Name</th>
                        <th class="text-start">Gender</th>
                        <th class="text-start">Grade</th>
                        <th class="text-start">School Year</th>
                        <th class="text-start">Birthday</th>
                        <th class="text-start">Action </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {#key paginatedItems}
                        {#if paginatedItems}
                            {#each paginatedItems as item}
                                <tr class="border-b">
                                    <td>{item._id.slice(-5)}</td>
                                    <td>{item.student_firstname} {item.student_lastname}</td>
                                    <td>{item.student_gender}</td>
                                    <td>{item.current_grade}</td>
                                    <td>{item.school_year}</td>
                                    <td>{item.birth_date}</td>
                                    <td class="w-min">

                                        <button class="text-center p-1 w-min my-2 bg-green-300 rounded-md" on:click={(e) => {showEditStudentModal = !showEditStudentModal; editId = item._id; editFirstName = item.student_firstname; editLastName = item.student_lastname; editGrade = item.current_grade; editSchoolYear = item.school_year}}>Edit</button>
                                        <button class="text-center p-1 w-min my-2 bg-red-300 rounded-md" on:click={() => {deleteStudent(item._id)}}>Delete</button>
                                    </td    >
                                </tr>
                            {/each}
                        {/if}
                    {/key}
                </tbody>
            </table>
            <LightPaginationNav
                totalItems={itemSize}
                {pageSize}
                {currentPage}
                limit={1}
                showStepOptions={true}
                on:setPage={(e) => (currentPage = e.detail.page)}
            />
        </div>
         <!-- <button on:click={() => {insertGender()}}>Add hetero</button> -->
    <EditStudentModal bind:showEditStudentModal bind:editId bind:editFirstName bind:editLastName bind:editGrade bind:editSchoolYear {loadStudents}/>
    </div>