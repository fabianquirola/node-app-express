const keywordsRouter = require('./api/keywords');
const productsRouter = require('./products');
const userRouter = require('./api/users');

const routes = (app) => {
    app.use('/keywords',keywordsRouter);
    app.use('/products',productsRouter);
    app.use('/user',userRouter);
}
 
module.exports = routes;