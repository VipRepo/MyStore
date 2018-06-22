import express from 'express';
import customerRoute from '../customer/routes/customer.route'

const router = express.Router(); // eslint-disable-line new-cap

/** GET /ping - Check service health */
router.get('/ping', (req, res) =>
  res.send('OK')
);

router.get('/favicon.ico', function(req, res) {
    res.status(204);
});

router.use('/customers', customerRoute)

export default router;
