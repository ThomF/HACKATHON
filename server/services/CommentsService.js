import { dbContext } from "../db/DbContext.js"

class CommentsService {
  async removeComment(commentId) {
    const comment = await this.getCommentsByCommentId(commentId)
    // @ts-ignore
    await comment.remove()
    return comment
  }
  async getCommentsByCommentId(commentId) {
    const comments = await dbContext.Comments.findById(commentId).populate('')
    return comments
  }

  async postComment(commentData) {
    const newComment = await dbContext.Comments.create(commentData)
    return newComment
  }

  async getCommentByVinylId(vinylId) {
    const foundComments = await dbContext.Comments.find(vinylId)
    return foundComments
  }
}

export const commentsService = new CommentsService()


