/// <reference types="cypress" />

import { Checker } from "./checker";

export interface Clicker { }

export class Clicker extends Checker {

    public clickOnElementWithText({
        selector,
        text,
        quantity = 0,
        isForce = false,
        timeout = 30000
    }: {
        selector: string,
        text: string,
        quantity?: number,
        isForce?: boolean
        timeout?: number
    }): void {
        cy.contains(selector, text, { timeout: timeout }).eq(quantity).click({ force: isForce });
    }

    public clickOnElement({
        selector,
        quantity = 0,
        isForce = false,
        isLast = false
      }: {
        selector: string,
        quantity?: number,
        isForce?: boolean,
        isLast?: boolean
      }): void {
        if (isLast) {
          cy.get(selector).last().click({ force: isForce });
          return;
        }
    
        cy.get(selector).eq(quantity).click({ force: isForce });
      }

}