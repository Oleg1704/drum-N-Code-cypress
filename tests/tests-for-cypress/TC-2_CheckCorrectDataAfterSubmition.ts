import { Buttons } from './../function-for-cypress/selectors/buttons';
import { Fields } from './../function-for-cypress/selectors/fields';
import { BasePo } from '../../pageObjects/base';
import { BaseSelectors } from "../function-for-cypress/baseSelectors";

const basePage = new BasePo();

describe('TC-2 --- Checking correct data after submit', () => {

  it('Fill in the all required fields, submit page and check correct data', () => {

    basePage.goToRegistrationPage();
    basePage.checkElementWithTextIsVisible({
      selector: BaseSelectors.h5,
      text: 'Student Registration Form',
      isVisible: true
    });
    basePage.fillField(
        Fields.firstNameField,
        'My First Name',
      );
      basePage.fillField(
        Fields.lastNameField,
        'My Last Name',
      );
      basePage.fillField(
        Fields.emailField,
        'example@example.com',
      );
      basePage.clickOnElementWithText({
        selector: BaseSelectors.label,
        text: 'Male'
      });
      basePage.fillField(
        Fields.mobileField,
        '1234567890',
      );
      basePage.clickOnElement({
        selector: Buttons.submitButton,
      });
      basePage.checkElementWithTextIsVisible({
        selector: BaseSelectors.td,
        text: 'My First Name My Last Name',
        isVisible: true
      });
      basePage.checkElementWithTextIsVisible({
        selector: BaseSelectors.td,
        text: 'example@example.com',
        isVisible: true
      });
      basePage.checkElementWithTextIsVisible({
        selector: BaseSelectors.td,
        text: '1234567890',
        isVisible: true
      });
  });
});
