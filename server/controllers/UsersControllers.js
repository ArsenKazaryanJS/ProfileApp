const { Errors } = require('./Errors');

class UsersControllers {
    async getAllUsers(req, res) {
        try {
            const users = await req.app.locals.services.users.getAllUsers();
            res.status(200).set('Content-Type', 'application/json').json(users);
        } catch (error) {
            Errors.serverError(res, error.message);
        }
    }

    async authMe(req, res) {
        try {
            const id = req?.userId;
            const user = await req.app.locals.services.users.authMe(id);
            res.status(200).set('Content-Type', 'application/json').json(user);
        } catch (error) {
            Errors.badRequestError(res, error.message);
        }
    }

    async authRegister(req, res) {
        try {
            const body = req.body;
            const user = await req.app.locals.services.users.authRegister(body);
            res.status(201).set('Content-Type', 'application/json').json(user);
        } catch (error) {
            Errors.badRequestError(res, error.message);
        }
    }

    async authLogin(req, res) {
        try {
            const body = req.body;
            const user = await req.app.locals.services.users.authLogin(body);
            console.log(user);
            
            res.status(200).set('Content-Type', 'application/json').json(user);
        } catch (error) {
            Errors.badRequestError(res, error.message);
        }
    }

    async updateUser(req, res) {
        try {
            const {body } = req;
            const id = req.userId;
            const user = await req.app.locals.services.users.updateUser({ ...body}, id);
            res.status(200).set('Content-Type', 'application/json').json(user);
        } catch (error) {
            Errors.badRequestError(res, error.message);
        }
    }

    async logOut(req, res) {
        try {
            const id = req.userId; 
            const response = await req.app.locals.services.users.logOut(id);
            res.status(200).set('Content-Type', 'application/json').json(response);
        } catch (error) {
            Errors.badRequestError(res, error.message);
        }
    }

    async addFriend(req, res) {
        try {
            const userId = req.userId;
            const { friendId } = req.body;
            const updatedUser = await req.app.locals.services.users.addFriend(userId, friendId);
            res.status(200).json(updatedUser);
        } catch (error) {
            Errors.badRequestError(res, error.message);
        }
    }

    async removeFriend(req, res) {
        try {
            const userId = req.userId;
            const { friendId } = req.body;
            const response = await req.app.locals.services.users.removeFriend(userId, friendId);
            res.status(200).json(response);
        } catch (error) {
            Errors.badRequestError(res, error.message);
        }
    }
    async searchUsers(req, res) {
        try {
            const { query } = req.query; 
            const users = await req.app.locals.services.users.searchUsers(query);
            res.status(200).set('Content-Type', 'application/json').json(users);
        } catch (error) {
            Errors.badRequestError(res, error.message);
        }
    }
    

    
}

module.exports = UsersControllers;
