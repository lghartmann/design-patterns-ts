class Client {
  email: string;

  constructor(email: string) {
    this.email = email;
  }

  create(): void {}

  read(): void {}

  update(): void {}

  delete(): void {}

  // This method should be abstracted to a Notify class (as coded above)
  //   sendMail(): boolean {
  //     return true;
  //   }
}

class Notify {
  constructor(private client: Client) {}
  sendEmail(): boolean {
    console.log(this.client.email);
    return true;
  }
}

const client = new Client("mail@mail.com");

const notification = new Notify(client);

notification.sendEmail();
