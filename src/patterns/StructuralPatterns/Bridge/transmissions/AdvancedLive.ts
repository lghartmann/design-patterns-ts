import IPlatform from "../platforms/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live {
  constructor(platform: IPlatform) {
    super(platform);
  }

  subtitles(): void {
    console.log("Subtitles enabled");
  }

  comments(): void {
    console.log("Comments enabled");
  }

  startBroadCast(): void {
    console.log("Starting broadcast");
  }

  result(): void {
    console.log("**ON AIR**");
  }
}
