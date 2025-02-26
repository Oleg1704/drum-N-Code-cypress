/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */

import { Base, booster } from "./common/base";
import { Checker } from "./common/checker";
import { Clicker } from "./common/clicker";
import { Helper } from "./common/helper";

export interface BasePo extends Base, Checker, Clicker, Helper { }
export class BasePo extends booster(Base, Checker, Clicker, Helper) { }
