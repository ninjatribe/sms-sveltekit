import { id } from '$lib/common/utils';
import clientPromise from '$lib/server/mongo';

/** @type {import('./$types').RequestHandler} */
export async function PUT({ request, locals }: any) {
	const data = await request.json();
	const db = await clientPromise();
	const school = db.collection('school');
	data._id = id()

    const response = await school.insertOne(data);
	if (response) {
		return new Response(
			JSON.stringify({
				status: 'Success',
				response
			})
		);
	}
}
