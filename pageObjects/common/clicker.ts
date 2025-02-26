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

}