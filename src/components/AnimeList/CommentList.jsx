
export const CommentList = async ({ animeMalId }) => {
    const comments = await prisma.comment.findMany({
        where: {
            anime_mal_id: animeMalId
        }
    })

    return (
        <div className="grid grid-cols-4 gap-4 mb-4">
            {comments.map((comment) => (
                <div className="text-brand-dark bg-brand-primary p-4" key={comment.id}>
                    <p>{comment.username}</p>
                    <p>{comment.comment}</p>
                </div>
            ))}
        </div>
    )
}
