/// <reference types="cypress" />

import { Checker } from "./checker";
import { Clicker } from "./clicker";

export interface Helper extends Clicker, Checker { }

export class Helper {

public goToRegistrationPage(): void {
    cy.visit('https://demoqa.com/automation-practice-form');
  }

  public waitForSomeTime(time: number): void {
    cy.wait(time * 1000);
  }

  public reloadPage(isForce: boolean = false): void {
    cy.reload(isForce);
  }
}