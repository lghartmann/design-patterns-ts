import DATA_BASE from "../servers/DataBase";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if (!email.includes("@")) {
      console.log("Invalid Email", "background: #222; color:rgb(171, 20, 20)");
      return false;
    }

    const [foundUser] = DATA_BASE.filter(
      (user) => user.email === email && user.password === password
    );
    if (!foundUser) {
      console.log(
        "User not registered in database",
        "background: #222; color:rgb(171, 20, 20)"
      );
      return false;
    }

    return this.checkNext(email, password);
  }
}
