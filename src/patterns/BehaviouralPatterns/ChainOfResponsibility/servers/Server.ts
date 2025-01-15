import Middleware from "../middlewares/Middleware";

export default class Server {
  private middleware: Middleware;

  public setMiddleware(middleware: Middleware) {
    this.middleware = middleware;
  }

  public login(email: string, password: string): boolean {
    if (this.middleware.check(email, password)) {
      console.log("Welcome!", "background: #222, color:rgb(58, 171, 20)");
      return true;
    }

    return false;
  }
}
