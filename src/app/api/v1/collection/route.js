import prisma from "@/libs/prisma"
export async function POST(request) {
    const { anime_mal_id, user_email } = await request.json()
    const data = {
        anime_mal_id,
        user_email
    }
    const createCollection = await prisma.collection.create({
        data
    })
    // console.log("createCollection", createCollection);
    if (!createCollection) {
        return Response.json({ status: 500, isCreated: false })
    }
    return Response.json({ status: 200, isCreated: true })
}