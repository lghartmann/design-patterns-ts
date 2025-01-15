import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayoneerAdapter from "./adapters/PayoneerAdapter";
import MercadoPago from "./mercadopago/MercadoPago";
import Payoneer from "./payoneer/Payoneer";
import PayPal from "./paypal/PayPal";

const payPalPayment = new PayPal();
payPalPayment.payPalPayment();
payPalPayment.payPalReceive();

const basePayoneer = new Payoneer();
const payoneerPayment = new PayoneerAdapter(basePayoneer);
payoneerPayment.payPalPayment();
payoneerPayment.payPalReceive();

const baseMercadoPago = new MercadoPago();
const mercadoPagoPayment = new MercadoPagoAdapter(baseMercadoPago);
mercadoPagoPayment.payPalPayment();
mercadoPagoPayment.payPalReceive();
