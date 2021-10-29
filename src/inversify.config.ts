import { Container } from "inversify";
import { TYPES } from "./common/types";
import { Ninja } from "./entities/ninja";
import { Katana } from "./entities/katana";
import { Shuriken } from "./entities/shuriken";
import { IThrowableWeapon } from "./interfaces/throwableWeapon";
import { IWarrior } from "./interfaces/warrior";
import { IWeapon } from "./interfaces/weapon";

const myContainer = new Container();
myContainer.bind<IWarrior>(TYPES.IWarrior).to(Ninja);
myContainer.bind<IWeapon>(TYPES.IWeapon).to(Katana);
myContainer.bind<IThrowableWeapon>(TYPES.IThrowableWeapon).to(Shuriken);

export { myContainer };
