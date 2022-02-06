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
  CategoryRoutes,
  AuthRoutes,
} = require("../routes/index.routes");

// controllers
const {
  HomeController,
  UserController,
  ArticleController,
  CategoryController,
  AuthController,
} = require("../controllers");

// services
const {
  HomeService,
  UserService,
  ArticleService,
  CategoryService,
  AuthService,
} = require("../services");

// repositories
const {
  UserRepository,
  ArticleRepository,
  CategoryRepository,
} = require("../repositories");

// models
const { User, CategoryModel, ArticleModel } = require("../models");

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
    CategoryRoutes: asFunction(CategoryRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    ArticleController: asClass(ArticleController.bind(ArticleController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    CategoryController: asClass(
      CategoryController.bind(CategoryController)
    ).singleton(),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    CategoryService: asClass(CategoryService).singleton(),
    ArticleService: asClass(ArticleService).singleton(),
    AuthService: asClass(AuthService).singleton(),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    ArticleRepository: asClass(ArticleRepository).singleton(),
    CategoryRepository: asClass(CategoryRepository).singleton(),
  })
  .register({
    User: asValue(User),
    ArticleModel: asValue(ArticleModel),
    CategoryModel: asValue(CategoryModel),
  });

module.exports = container;
