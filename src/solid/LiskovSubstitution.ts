interface IPaymentInstrument {
  validate(): void;
  collectPayment(): void;
}

abstract class Nubank implements IPaymentInstrument {
  validate(): void {
    console.log("Validating card...");
  }
  collectPayment(): void {
    console.log("Payment concluded successfully");
  }
}

class CreditCard extends Nubank {
  validate(): void {
    console.log("Validating credit limit...");
  }

  collectPayment(): void {
    console.log("Payment concluded successfully");
  }
}

class DebitCard extends Nubank {
  validate(): void {
    console.log("Validating account balance...");
  }

  collectPayment(): void {
    console.log("Payment concluded successfully");
  }
}

class NubankRewards implements IPaymentInstrument {
  validate(): void {
    console.log("Validating account points...");
  }

  collectPayment(): void {
    console.log("Payment concluded with reward points");
  }
}

const credit = new CreditCard();
credit.validate();
credit.collectPayment();

const debit = new DebitCard();
debit.validate();
debit.collectPayment();

const rewards = new NubankRewards();
rewards.validate();
rewards.collectPayment();
