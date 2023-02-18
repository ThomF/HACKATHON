import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

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

  async updateComment(userId, updateData, commentId) {
    const foundComment = await dbContext.Comments.findById(commentId)

    if (!foundComment) {
      throw new BadRequest("404 Not Found")
    }

    if (foundComment.userId != userId) {
      throw new BadRequest("401 Not Authorized")
    }

    foundComment.body = updateData.body || foundComment.body

    await foundComment.save()
    return foundComment

  }

}

export const commentsService = new CommentsService()


