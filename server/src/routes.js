const express = require('express')
const router = express.Router()
const controller = require('./controllers.js')
const verifyToken = require('./jwt.js')

router.get('/', (_, res) => res.send('Server running'))

router.post('/register', controller.createUser)

router.post('/login', controller.verifyUser)

router.post('/forgot-password', controller.recoverAccount)

router.post('/update-password', controller.resetPassword)

router.get('/demo/admin', controller.demoAdmin)

router.get('/demo/user', controller.demoUser)

router.post('/products', verifyToken, controller.createProduct)

router.get('/products', controller.fetchProducts)

router.put('/products/:id', verifyToken, controller.updateProduct)

router.delete('/products/:id', verifyToken, controller.deleteProduct)

router.post('/cart', verifyToken, controller.updateCart)

router.get('/cart', verifyToken, controller.fetchCart)

router.post('/orders', verifyToken, controller.checkoutProduct)

router.get('/orders', verifyToken, controller.fetchOrders)

router.get('/sessions', verifyToken, controller.fetchSession)

router.get('/payment', controller.processPayment)

module.exports = router