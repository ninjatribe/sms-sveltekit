import clientPromise from '$lib/server/mongo';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, locals }: any) {
	const data = await request.json();
	const db = await clientPromise();
	const applicant = db.collection('applicants');

	const response = await applicant.updateOne(
		{ _id: data._id },
		{
			$set: {
				martial_status: data.martial_status,
				family_role: data.family_role,
				pending: data.pending,
				completeName: data.completeName
			}
		}
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
