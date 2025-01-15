import IPlatform from "./IPlatform";

export default class Twitch implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log("Twitch Broadcast started");
  }

  configureRMTP(): void {
    this.authToken();
    console.log("Setting up Twitch RMTP");
  }

  authToken(): void {
    console.log("Twitch: Access authorized");
  }
}
