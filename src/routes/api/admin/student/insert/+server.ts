import { id } from '$lib/common/utils';
import clientPromise from '$lib/server/mongo';

/** @type {import('./$types').RequestHandler} */
export async function POST({request, locals}: any) {
    const data = await request.json();
    const db = await clientPromise();
    const Student = db.collection('students');
    data._id = id();
    data.completeName = `${data.firstName} ${data.lastName}`;
    
    const response = await Student.insertOne(data);
    if(response) {
        return new Response(
            JSON.stringify({
                status: 'Success',
                response
            })
        )
    }
}