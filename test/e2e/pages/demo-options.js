module.exports = function DemoOptions(){
  this.demoPath = 'xs-angular-action-buttons/demo/xs-action-buttons-demo-options.html';
  this.options = {
    hasClone: undefined,
    hasEdit: undefined,
    hasNew: undefined,
    hasDelete: undefined
  };
  this.buttonSizes = {
    xs: undefined,
    sm: undefined,
    md: undefined,
    lg: undefined
  };
  this.results = {
    action: undefined,
    hasNew: undefined,
    hasEdit: undefined,
    hasClone: undefined,
    hasDelete: undefined
  };
  this.getButton = function(text) {
    return element(by.buttonText(text));
  };
  this.getOption = function(name) {
    this.options[name] = element(by.model(name));
  };
  this.checkElementExists = function(element) {
    return browser.isElementPresent(element)
  };
  this.checkOptionExists = function(name) {
    return this.checkElementExists(this.options[name]);
  };
  this.checkButtonExists = function(buttonText) {
    return this.checkElementExists(by.buttonText(buttonText))
  };
  this.checkOptionIsSelected = function(name) {
    return this.options[name].isSelected();
  };
  this.getResultText = function(name) {
    return this.results[name].getText();
  };
  this.getResults = function() {
    this.results.action = element(by.binding('action'));
    this.results.hasNew = element(by.binding('hasNew'));
    this.results.hasEdit = element(by.binding('hasEdit'));
    this.results.hasClone = element(by.binding('hasClone'));
    this.results.hasDelete = element(by.binding('hasDelete'));
  };
  this.clickOption = function(name) {
    this.options[name].click();
  };
  this.setAllOptionsOff = function () {
    for (var option in this.options) {
      this.setOptionOff(option);
    }
  };
  this.setOptionOff = function(name) {
    if( this.options[name].isSelected() ){
      this.options[name].click();
    }
  };
  this.getOptions = function() {
    this.getOption('hasNew');
    this.getOption('hasEdit');
    this.getOption('hasClone');
    this.getOption('hasDelete');
  };
  this.getButtonSize = function() {
    this.buttonSize = element(by.model('size'));
  };
  this.selectButtonSize = function(name) {
    this.buttonSizes[name].click();
  };
  this.getButtonSizes = function() {
    this.getButtonSize('xs');
    this.getButtonSize('sm');
    this.getButtonSize('md');
    this.getButtonSize('lg');
  };

  // open demo web page, grab reference to primary elements
  browser.get(this.demoPath);

  // load static elements
  this.title = browser.getTitle();
  this.getResults();
  this.getOptions();
  this.getButtonSize();

};
