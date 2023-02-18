import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController.js";

export class CommentsController extends BaseController {

  constructor() {
    super('api/comments')
    this.router
      .get('/:commentId', this.getCommentsByCommentId)
      .post('/:vinylId/comments', this.createComment)

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
}

