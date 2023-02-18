import { Auth0Provider } from "@bcwdev/auth0provider";
import { dbContext } from "../db/DbContext.js";
import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController.js";

export class CommentsController extends BaseController {

  constructor() {
    super('api/comments')
    this.router
      .get('/:commentId', this.getCommentsByCommentId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('/:vinylId/comments', this.createComment)
      .delete('/:vinylId/comments', this.removeComment)
      .put('/:commentId', this.updateComment)

  }

  async getCommentsByCommentId(req, res, next) {
    try {
      const commentId = req.params.commentId
      const comments = await commentsService.getCommentsByCommentId(commentId)
      return res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async createComment(req, res, next) {
    try {
      const user = req.userInfo
      req.body.userId = user.id
      req.body.vinylId = req.params.vinylId
      const commentData = req.body

      const comment = await commentsService.postComment(commentData)
      return res.send(comment)

    } catch (error) {
      next(error)
    }
  }
  async removeComment(req, res, next) {
    try {
      const commentId = req.params.commentId
      const comment = await commentsService.removeComment(commentId)
    } catch (error) {
      next(error)
    }
  }

  async updateComment(req, res, next) {

    try {
      const commentId = req.params.commentId
      const userId = req.userInfo.id
      const updateData = req.body
      const updatedComment = await commentsService.updateComment(userId, updateData, commentId)

      return res.send(updatedComment)
    } catch (error) {
      next(error)
    }
  }

}

