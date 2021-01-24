let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
let nameInput

module.exports = {
  init: () => {
    nameInput = element(by.name('name'));
    emailInput = element(by.name('email'));
    nextSectionBtn = element(by.css('.btn'));
    activeStatus = element(by.css('.active span'));
    radioXbox = element(by.xpath(".//input[@value='xbox']"));
    headerH3 = element(by.xpath('.//h3'));
  },
  get: (string) => {
    return browser.get(string);
  },
  setName: (name) => {
    return nameInput.sendKeys(name);
  },
  setEmail: (email) => {
    return emailInput.sendKeys(email);
  },
  pressNextSectionBtn: () => {
    nextSectionBtn.click();
  },
  activeStatusIs: (number) => {
    expect(activeStatus.getText()).to.eventually.contain(number);
  },
  clickRadioXbox: () => {
    return radioXbox.click();
  },
  headerH3Contain: (text) => {
    expect(headerH3.getText()).to.eventually.contain(text);
  },
}