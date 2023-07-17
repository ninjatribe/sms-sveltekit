<script>
	// @ts-nocheck

	// State management
	export let showEditStudentModal = false;

	// Exported variables
	export let editId;
	export let editFirstName;
	export let editLastName;
	export let editGrade;
	export let editSchoolYear;

	// Function
	export let loadStudents = () => {};

	let newFirstName;
	let newLastName;
	let newGrade;
	let newSchoolYear;

	const updateStudent = async () => {
		const response = await fetch('/api/admin/student/update', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				_id: editId,
				student_firstname: newFirstName,
				student_lastname: newLastName,
				current_grade: newGrade,
				school_year: newSchoolYear
			})
		});
		let result = await response.json();
		if (result.status === 'Success') {
			console.log('Success');
			loadStudents();
			newFirstName = '';
			newLastName = '';
			newGrade = '';
			newSchoolYear = '';
			showEditStudentModal = !showEditStudentModal;
		}
	};
</script>

<!-- This div should cover the whole relative-parent div -->
<!-- Boilerplate modal for dashboard or anything that has relative parent -->
<div
	class="w-full h-full flex justify-center items-center absolute top-0 z-50 {showEditStudentModal
		? 'block'
		: 'hidden'}"
>
	<!-- "Main" div -->
	<div class="flex flex-col justify-around items-center w-72 h-100 bg-slate-300">
		<div>
			<p class="text-xl bold">Edit Students List</p>
			<p>{editId}</p>
			<p>First Name</p>
			<input type="text" bind:value={newFirstName} placeholder={editFirstName} />
			<p>Last Name</p>
			<input type="text" bind:value={newLastName} placeholder={editLastName} />
			<p>Grade</p>
			<input type="text" bind:value={newGrade} placeholder={editGrade} />
			<p>School Year</p>
			<input type="text" bind:value={newSchoolYear} placeholder={editSchoolYear} />
		</div>
		<div>
			<button
				class="bg-blue-300 w-14 p-2 border-2 rounded-lg"
				on:click={() => {
					updateStudent();
				}}>Save</button
			>
			<button
				class="bg-red-300 w-14 p-2 border-2 rounded-lg"
				on:click={() => {
					showEditStudentModal = !showEditStudentModal;
				}}>Close</button
			>
		</div>
	</div>
</div>
