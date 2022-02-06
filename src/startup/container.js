const { createContainer, asClass, asValue, asFunction } = require("awilix");

//  config
const config = require("../config");
const app = require(".");

const Routes = require("../routes");

// routes
const {
  HomeRoutes,
  UserRoutes,
  ArticleRoutes,
  CommentRoutes,
  AuthRoutes,
} = require("../routes/index.routes");

// controllers
const {
  HomeController,
  UserController,
  ArticleController,
  CommentController,
  AuthController,
} = require("../controllers");

// services
const {
  HomeService,
  UserService,
  ArticleService,
  CommentService,
  AuthService,
} = require("../services");

// repositories
const {
  UserRepository,
  ArticleRepository,
  CommentRepository,
} = require("../repositories");

// models
const { User, Comment, ArticleModel } = require("../models");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    ArticleRoutes: asFunction(ArticleRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    ArticleController: asClass(ArticleController.bind(ArticleController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    CommentController: asClass(
      CommentController.bind(CommentController)
    ).singleton(),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    ArticleService: asClass(ArticleService).singleton(),
    AuthService: asClass(AuthService).singleton(),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    ArticleRepository: asClass(ArticleRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
  })
  .register({
    User: asValue(User),
    ArticleModel: asValue(ArticleModel),
    Comment: asValue(Comment),
  });

module.exports = container;
