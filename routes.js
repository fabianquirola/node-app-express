const keywordsRouter = require('./api/keywords');
const productsRouter = require('./products');
const userRouter = require('./api/users');

const pages = require('./pages');
const api = require('./api');

const routes = (app) => {
    app.use('/api',api);
    app.use('/pages',pages);
   
}
 
module.exports = routes;