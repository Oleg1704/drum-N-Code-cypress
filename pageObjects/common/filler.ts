/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import { Clicker } from "./clicker";

export interface Filler extends Clicker {}

export class Filler {
  public fillField(selector: string, value: string, fillMethod = 'type', withClear = true, quantity: number = 0, parseSpecialCharSequences: boolean = false): void {
    if (fillMethod === 'paste' && withClear) {
      cy.get(selector).clear({ force: true });
      cy.get(selector).type(value);

      return;
    }

    if (fillMethod === 'paste' && !withClear) {
      cy.get(selector).eq(quantity).click();
      cy.get(selector).eq(quantity).type(value);

      return;
    }

    if (withClear) {
      cy.get(selector).eq(quantity).clear({ force: true });
      cy.get(selector).eq(quantity).click({ force: true });
      cy.get(selector).eq(quantity).type(value, { force: true });

      return;
    }

    cy.get(selector).eq(quantity);
    cy.get(selector).eq(quantity).click({ force: true });
    cy.get(selector).eq(quantity).type(value, { force: true, parseSpecialCharSequences });
  }
}