import IPlatform from "./IPlatform";

export default class YouTube implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log("YouTube Broadcast started");
  }

  configureRMTP(): void {
    this.authToken();
    console.log("Setting up YouTube RMTP");
  }

  authToken(): void {
    console.log("YouTube: Access authorized");
  }
}
