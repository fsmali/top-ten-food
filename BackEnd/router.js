import express from 'express';
import foodController from './controllers/foodController.js';
import userController from './controllers/userController.js';
import { auth } from './middleware/auth.js';
import reviewController from "./controllers/reviewController.js"
import { body } from "express-validator";
import validate from "./middleware/validate.js";


const router = express.Router();

router.route('/foods').get(foodController.getAll).post(auth,foodController.create);
router
  .route('/foods/:id')
  .get(foodController.getById)
  .patch(auth,foodController.updateById)
  .delete(auth,foodController.deleteById);

router.route('/register').post(body("email").isEmail(),
body("password").isLength({ min: 7 }),
body("role"),
validate,
userController.register);
router.route('/login').post(userController.login);
router.route("/foods/:foodId").post(auth,reviewController.createReview);
router.route("/foods/:foodId/:reviewId").patch(auth, body("text").trim().isLength({ min: 1 }),
validate,reviewController.updateReview).delete(auth, reviewController.deleteReview);
export default router;
  