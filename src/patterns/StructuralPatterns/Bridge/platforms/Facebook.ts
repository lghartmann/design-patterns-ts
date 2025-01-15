import IPlatform from "./IPlatform";

export default class Facebook implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log("Facebook Broadcast started");
  }

  configureRMTP(): void {
    this.authToken();
    console.log("Setting up Facebook RMTP");
  }

  authToken(): void {
    console.log("Facebook: Access authorized");
  }
}
