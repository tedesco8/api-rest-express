const { createContainer, asClass, asValue, asFunction } = require("awilix");

//  config
const config = require("../config");
const app = require(".");

// services
const {
  HomeService,
  UserService,
  HouseService,
  CommentService,
  AuthService
} = require("../services");

// controllers
const {
  HomeController,
  UserController,
  HouseController,
  CommentController,
  AuthController
} = require("../controllers");

// routes
const {
  HomeRoutes,
  UserRoutes,
  HouseRoutes,
  CommentRoutes,
  AuthRoutes
} = require("../routes/index.routes");
const Routes = require("../routes");

// models
const { User, Comment, House } = require("../models");

// repositories
const {
  UserRepository,
  HouseRepository,
  CommentRepository
} = require("../repositories");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    HouseService: asClass(HouseService).singleton(),
    AuthService: asClass(AuthService).singleton()
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    HouseController: asClass(HouseController.bind(HouseController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton()
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    HouseRoutes: asFunction(HouseRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton()
  })
  .register({
    User: asValue(User),
    House: asValue(House),
    Comment: asValue(Comment)
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    HouseRepository: asClass(HouseRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()
  });

module.exports = container;
