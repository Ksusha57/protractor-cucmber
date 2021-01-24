let specPage = require('../pages/spec.po.js');
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
const { BeforeAll } = require('cucumber');
chai.use(chaiAsPromised);

BeforeAll(function(){
    console.log(__file);
})

Before(function(){
    specPage.init();
})

Given('The user go to {string}', function (string) {
    specPage.get(string);
});

When('The user adds {string} in the name field', function (string) {
    specPage.setName(string);

});

When('The user adds {string} in the email field', function (string) {
    specPage.setEmail(string);
});

When('press "Next section" button', function () {
    specPage.pressNextSectionBtn();
});

When('I choose Xbox radio', function () {
    specPage.clickRadioXbox();
});

Then('"Interests" is active section', function () {
    specPage.activeStatusIs(2)
});

Then('I see "Test Completed, WooHoo!"', function () {
    specPage.headerH3Contain("Test Completed, WooHoo!")
});