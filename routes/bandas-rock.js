import controller from "../controllers/bandas-rock.js";

const nomeRota = 'bandas';

export default function (app,config) {

  app
    .route(config.get("server.path_root") + nomeRota)
    .get(controller.showList);

  app
    .route(config.get("server.path_root") + nomeRota)
    .post(controller.add);

  app
    .route(config.get("server.path_root") + nomeRota)
    .put(controller.update);

  app
    .route(config.get("server.path_root") + nomeRota)
    .delete(controller.remove);

  console.log(`Rota [${nomeRota}] carregada...`);
};
