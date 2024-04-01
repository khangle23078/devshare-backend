import { PostComment } from "../entities/post_comment.entity"

export const insert = (data: any, userId: number, postId: number) => {
  const newComment = PostComment.create({ ...data, userId: userId, postId: postId })
  return PostComment.save(newComment)
}