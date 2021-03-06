const router = express.Router();
const controller = require('./controller');

router.route('/')
    .get(controller.search)
    .post(controller.create);


router.route('/:id')
    .get(controller.readById)
    .put(controller.update)
    .patch(controller.patch)
    .delete(controller.remove);


module.exports = router;
