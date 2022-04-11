
module.exports = function (app,config) {
  const controllerFactory = require("../controllers/produtos");
  const controller = controllerFactory();

  app
    .route(config.get("server.path_root") + "produtos")
    .get(controller.showList);

  app
    .route(config.get("server.path_root") + "produtos")
    .post(controller.add);

  app
    .route(config.get("server.path_root") + "produtos")
    .patch(controller.update);

  app
    .route(config.get("server.path_root") + "produtos")
    .delete(controller.remove);

};
