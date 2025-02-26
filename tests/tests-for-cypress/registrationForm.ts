import { BasePo } from '../../pageObjects/base';
import { BaseSelectors } from "../function-for-cypress/baseSelectors";

const basePage = new BasePo();

describe('Verify registration form fields', () => {
  it('Verify Name fields: First Name, Last Name', () => {

    basePage.goToRegistrationPage();
  });
});
