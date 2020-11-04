const { createContainer, asClass, asFunction, asValue } = require("awilix");

//config
const config = require("../config");
const app = require(".");
//services
const { HomeService, UserService } = require("../services");
//controllers
const { HomeController } = require("../controllers");
//routes
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");
//models
const { User, Home } = require("../models");
//repositories
const {UserRepository, HomeRepository} = require('../repositories')
//inyeccion
const container = createContainer();
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton()
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
  })
  .register({
    User: asValue(User),
    Home: asValue(Home)
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    HomeRepository: asClass(HomeRepository).singleton()
  })

module.exports = container;
