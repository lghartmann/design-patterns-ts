import DATA_BASE from "../servers/DataBase";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    const [foundUser] = DATA_BASE.filter((user) => user.email === email);

    if (!foundUser) {
      console.log("Invalid Email", "background: #222; color:rgb(171, 20, 20)");
      return false;
    }

    if (foundUser.permission === PermissionType.ADMIN) {
      console.log(
        "Admin Permission granted",
        "background: #222; color:rgb(30, 20, 171)"
      );
      return true;
    }

    console.log(
      "User Permission granted",
      "background: #222; color:rgb(30, 20, 171)"
    );

    return this.checkNext(email, password);
  }
}
