import clientPromise from '$lib/server/mongo';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, locals }: any) {
	if (!locals?.user) {
		return new Response(JSON.stringify({ messsage: 'Invalid access.' }), { status: 200 });
	}

	const data = await request.json();
	console.log('data', data);
	console.log('locals.user._id', locals.user._id);
	const db = await clientPromise();
	const User = db.collection('users');

	const response = await User.updateOne(
		{ _id: locals.user._id },
		{
			$set: {
				'profile.firstName': data.firstName,
				'profile.lastName': data.lastName,
				'profile.displayName': `${data.firstName} ${data.lastName}`,
				'profile.province': data.province,
				'profile.phone': data.phone,
				'profile.email': data.email,
				'profile.country': data.country
			}
		}
	);

	return new Response(JSON.stringify({ success: true, message: 'Record Updated', response }), {
		headers: { 'content-type': 'application/json' },
		status: 200
	});
}
