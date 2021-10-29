import { injectable } from "inversify";
import { IWeapon } from "../interfaces/weapon";

@injectable()
class Katana implements IWeapon {
  public hit() {
    return "cut!";
  }
}

export { Katana };
