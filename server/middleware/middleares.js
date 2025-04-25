const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const {Errors} = require('../controllers/Errors')
dotenv.config()




//CHECKAUTH
const checkAuth = (req, res, next) => {
    try {
        const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')
        const decoded = jwt.verify(token, process.env.LOGIN_TOKEN_KEY)
        req.userId = decoded.id
        next()
    } catch (error) {
    Errors.forbiddenError(res, error.message)
    }
}




module.exports = {checkAuth}