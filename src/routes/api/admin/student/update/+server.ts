import clientPromise from '$lib/server/mongo';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, locals }: any) {
	const data = await request.json();
	const db = await clientPromise();
	const students = db.collection('students');

    const response = await students.updateOne(
        { _id: data._id }, 
        { $set: {
            student_firstname: data.student_firstname,
            student_lastname: data.student_lastname,
            current_grade: data.current_grade,
            school_year: data.school_year
        }}
    );
	if (response) {
		return new Response(
			JSON.stringify({
				status: 'Success',
				response
			})
		);
	}
}
