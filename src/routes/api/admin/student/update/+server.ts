import clientPromise from '$lib/server/mongo';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, locals }: any) {
	const data = await request.json();
	const db = await clientPromise();
	const students = db.collection('Students');

    const response = await students.updateOne(
        { _id: data._id }, 
        { $set: {
            firstName: data.student_firstname,
            lastName: data.student_lastname,
            grade: data.student_current_grade,
            schoolYear: data.school_year
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
