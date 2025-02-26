import { BasePo } from '../../pageObjects/base';
import { BaseSelectors } from "../function-for-cypress/baseSelectors";

const basePage = new BasePo();

describe('TC-1 --- Checking registration form fields', () => {

  it('Checking Name fields: First Name, Last Name', () => {

    basePage.goToRegistrationPage();
    basePage.checkElementWithTextIsVisible({
      selector: BaseSelectors.h5,
      text: 'Student Registration Form',
      isVisible: true
    });
    basePage.checkElementWithTextIsVisible({
      selector: BaseSelectors.label,
      text: 'Name',
      isVisible: true
    });
    basePage.checkPlaceholderValue({
      placeholder: 'First Name',
      isVisible: true
    });
    basePage.checkPlaceholderValue({
      placeholder: 'Last Name',
      isVisible: true
    });
  });

  it('Checking Email field', () => {

    basePage.goToRegistrationPage();
    basePage.checkElementWithTextIsVisible({
      selector: BaseSelectors.label,
      text: 'Email',
      isVisible: true
    });
    basePage.checkPlaceholderValue({
      placeholder: 'name@example.com',
      isVisible: true
    });
  });

  it('Checking Gender section', () => {

    basePage.goToRegistrationPage();
    basePage.checkElementWithTextIsVisible({
      selector: BaseSelectors.div,
      text: 'Gender',
      isVisible: true
    });
    basePage.checkElementWithTextIsVisible({
      selector: BaseSelectors.label,
      text: 'Male',
      isVisible: true
    });
    basePage.checkElementWithTextIsVisible({
      selector: BaseSelectors.label,
      text: 'Female',
      isVisible: true
    });
    basePage.checkElementWithTextIsVisible({
      selector: BaseSelectors.label,
      text: 'Other',
      isVisible: true
    });
  });

  it('Checking Mobile field', () => {

    basePage.goToRegistrationPage();
    basePage.checkElementWithTextIsVisible({
      selector: BaseSelectors.label,
      text: 'Mobile',
      isVisible: true
    });
    basePage.checkPlaceholderValue({
      placeholder: 'Mobile Number',
      isVisible: true
    });
  });
});
