import Token from "../utils/Token";
import IPayPalPayment from "./IPayPalPayment";

export default class PayPal implements IPayPalPayment {
  private token: Token;

  authToken(): Token {
    return new Token();
  }

  payPalPayment(): void {
    this.token = this.authToken();
    console.log("Token", this.token.getToken());

    console.log("Processing PayPal Payment");
  }

  payPalReceive(): void {
    console.log("Receiving payment via PayPal");
  }
}
