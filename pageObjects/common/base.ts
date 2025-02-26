/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Constructor, makeBoosterWith } from "../../utils/booster";

export class Base {}
export const booster: (...constructors: any[]) => Constructor = makeBoosterWith(Base);