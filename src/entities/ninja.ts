import { injectable, inject } from "inversify";
import { TYPES } from "../common/types";
import { IThrowableWeapon } from "../interfaces/throwableWeapon";
import { IWarrior } from "../interfaces/warrior";
import { IWeapon } from "../interfaces/weapon";

@injectable()
class Ninja implements IWarrior {
  private _katana: IWeapon;
  private _shuriken: IThrowableWeapon;

  public constructor(
    @inject(TYPES.IWeapon) katana: IWeapon,
    @inject(TYPES.IThrowableWeapon) shuriken: IThrowableWeapon
  ) {
    this._katana = katana;
    this._shuriken = shuriken;
  }

  public fight() {
    return this._katana.hit();
  }
  public sneak() {
    return this._shuriken.throw();
  }
}

export { Ninja };
