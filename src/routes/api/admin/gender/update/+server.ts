import clientPromise from '$lib/server/mongo';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, locals }: any) {
	const data = await request.json();
	const db = await clientPromise();
	const gender = db.collection('genders');

    const response = await gender.updateOne(
        { _id: data._id }, 
        { $set: {
            gender: data.gender,
            description: data.description
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
