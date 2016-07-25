

//express middleware to help route

const NewsController = require('./news-controller');
const NewsRouter = require('express').Router();
NewsRouter.get('/', NewsController.getFromDB);
NewsRouter.get('/dataset/:search', NewsController.searchAPI);
NewsRouter.get('/dataset/', NewsController.getFromNewsAPI);
NewsRouter.get('/dataset/companies', NewsController.getCompaniesFromNewsAPI);
NewsRouter.get('/dataset/strings/', NewsController.inputSentiment);

NewsRouter.get('/getSentiment/', NewsController.alchemyGetSentiment);

module.exports = NewsRouter;
