import { dbContext } from "../db/DbContext.js"

class CommentsService {
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