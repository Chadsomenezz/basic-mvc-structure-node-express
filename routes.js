const Express = require("express");
const Router = Express.Router();
const users = require(`./controllers/users`);
const UserController = new users;

Router.get("/", UserController.index);
Router.get("/login", UserController.viewLoginPage);
Router.get("/register", UserController.viewRegisterPage);
Router.get("/logoff", UserController.processLogoff);

module.exports = Router;
