import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import CheckWeakPasswordMiddleware from "./middlewares/CheckUserWeakPassword";
import Server from "./servers/Server";

const server = new Server();

const middleware = new CheckUserMiddleware();

middleware.linkWith(new CheckPermissionMiddleware());
middleware.linkWith(new CheckWeakPasswordMiddleware());

server.setMiddleware(middleware);

server.login("mail@mail.com", "123456");
