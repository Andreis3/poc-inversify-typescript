import "reflect-metadata";
import { myContainer } from "./inversify.config";
import { TYPES } from "./common/types";
import { IWarrior } from "./interfaces/warrior";

const ninja = myContainer.get<IWarrior>(TYPES.IWarrior);

console.log("ninja.fight() =>", ninja.fight(), ninja.fight() === "cut!");
console.log("ninja.sneak() =>", ninja.sneak(), ninja.sneak() === "hit!");
