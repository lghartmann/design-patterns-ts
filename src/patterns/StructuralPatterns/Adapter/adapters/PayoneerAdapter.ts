import Payoneer from "../payoneer/Payoneer";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class PayoneerAdapter implements IPayPalPayment {
  private token: Token;

  constructor(private payoneer: Payoneer) {
    console.log("All good!");
  }

  authToken(): Token {
    return new Token();
  }

  payPalPayment(): void {
    this.payoneer.sendPayment();
  }

  payPalReceive(): void {
    this.payoneer.receivePayment();
  }
}
