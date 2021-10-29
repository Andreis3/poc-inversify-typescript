import { injectable } from "inversify";
import { IThrowableWeapon } from "../interfaces/throwableWeapon";

@injectable()
class Shuriken implements IThrowableWeapon {
  public throw() {
    return "hit!";
  }
}

export { Shuriken };
