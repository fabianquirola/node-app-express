const keywordsRouter = require('./api/keywords');
const productsRouter = require('./products');

const routes = (app) => {
    app.use('/keywords',keywordsRouter);
    app.use('/products',productsRouter);
}
 
module.exports = routes;