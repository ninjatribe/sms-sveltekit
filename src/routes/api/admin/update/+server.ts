import clientPromise from '$lib/server/mongo';

/** @type {import('./$types').RequestHandler} */
export async function POST({request, locals}: any) {
    if(!locals?.user) {
		return new Response(JSON.stringify({ messsage:'Invalid access.' }), { status: 200 });
	}

    const data  = await request.json();
    console.log(data);
    const db = await clientPromise();
    const Setting = db.collection('users');

    const settings = await Setting.updateOne(
        { _id: data._id }, {profile: data.profile},
        {
            $set: {
                'firstName': data.firstName,
                'lastName' : data.lastName,
                'province': data.province,
                'phone': data.phone,
                'email' : data.email,
                'country' : data.country,
            }
        }
    )

    return new Response(JSON.stringify({success: true, message: 'Record Updated'}), {headers: {'content-type': 'application/json'}, status: 200})
}