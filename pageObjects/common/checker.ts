/// <reference types="cypress" />

export interface Checker { }

export class Checker {

    public checkElementWithTextIsVisible({
        selector,
        text,
        isVisible,
        timeout = 30000,
        notbeVisibleState = 'not.exist',
        quantity = 0,
        isContain = true,
      }: {
        selector: string;
        text: string;
        isVisible: boolean;
        timeout?: number;
        notbeVisibleState?: string;
        quantity?: number;
        isContain?: boolean;
      }): void {
        if (!isContain) {
          cy.get(selector).contains(text).should(isVisible ? 'be.visible' : notbeVisibleState, { timeout });
    
          return;
        }
    
        if (isVisible && quantity > 0) {
          cy.get(selector).eq(quantity).contains(text).should(isVisible ? 'be.visible' : notbeVisibleState, { timeout });
    
          return;
        }
    
        cy.contains(selector, text, { timeout }).should(isVisible ? 'be.visible' : notbeVisibleState, { timeout });
      }
    
}