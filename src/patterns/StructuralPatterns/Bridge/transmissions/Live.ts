import IPlatform from "../platforms/IPlatform";
import ITransmission from "./ITransmission";

export default class Live implements ITransmission {
  constructor(private platform: IPlatform) {}

  startBroadCast(): void {
    console.log("Starting broadcast");
  }
  result(): void {
    console.log("**ON AIR**");
  }
}
