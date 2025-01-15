import MercadoPago from "../mercadopago/MercadoPago";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment {
  constructor(private mercadoPago: MercadoPago) {
    console.log("All good!");
  }

  authToken(): Token {
    return this.mercadoPago.authToken();
  }

  payPalPayment(): void {
    this.mercadoPago.enviarPagamento();
  }

  payPalReceive(): void {
    this.mercadoPago.receberPagamento();
  }
}
