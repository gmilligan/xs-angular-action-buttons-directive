describe('XS Angular Action Buttons Options Demo test', function() {
  var DemoPage = require('./pages/demo-options');
  var demo = new DemoPage();

  describe('Options Demo page is Loaded', function() {
    it('should have correct title', function() {
      expect(demo.title).toEqual('xs-angular-action-buttons options demo');
    })
  });

  describe('Check for action button options', function() {
    it('should have "hasNew" option', function() {
      expect(demo.checkOptionExists('hasNew')).toEqual(true);
    });
    it('should have "hasEdit" option', function() {
      expect(demo.checkOptionExists('hasEdit')).toEqual(true);
    });
    it('should have "hasClone" option', function() {
      expect(demo.checkOptionExists('hasClone')).toEqual(true);
    });
    it('should have "hasDelete" option', function() {
      expect(demo.checkOptionExists('hasDelete')).toEqual(true);
    });
  });

  describe('Check for action button sizes', function() {
    it('should have button size model', function() {
      expect(demo.checkElementExists(demo.buttonSize)).toEqual(true);
    });
  });

  describe('Hide all Buttons', function() {
    demo.setAllOptionsOff();
    it('should have no "New" button', function() {
      expect( demo.checkButtonExists('New')).toEqual(false);
    });
    it('should have no "Clone" button', function() {
      expect( demo.checkButtonExists('Edit')).toEqual(false);
    });
    it('should have no "Clone" button', function() {
      expect( demo.checkButtonExists('Clone')).toEqual(false);
    });
    it('should have no "Delete" button', function() {
      expect( demo.checkButtonExists('Delete')).toEqual(false);
    });
  });

  describe('"New" button Tests', function() {
    it('should have "hasNew" option', function() {
      expect(demo.checkOptionExists('hasNew')).toBe(true);
    });
    it('should have "hasNew" button option unchecked', function() {
      expect(demo.checkOptionIsSelected('hasNew')).toBe(false);
    });

    it('should have "hasNew" button option checked', function() {
      demo.clickOption('hasNew');
      expect(demo.checkOptionIsSelected('hasNew')).toBe(true);
    });

    it('should have "hasNew" result binding set to true', function() {
      expect(demo.getResultText('hasNew')).toBe('true');
    });

    it('should invoke "New" action when button is clicked', function() {
      demo.getButton('New').click();
      expect(demo.getResultText('action')).toBe('New');
    });
  });

  describe('"Edit" button Tests', function() {
    it('should have "hasEdit" option', function() {
      expect(demo.checkOptionExists('hasEdit')).toBe(true);
    });
    it('should have "hasEdit" button option unchecked', function() {
      expect(demo.checkOptionIsSelected('hasEdit')).toBe(false);
    });

    it('should have "hasEdit" button option checked', function() {
      demo.clickOption('hasEdit');
      expect(demo.checkOptionIsSelected('hasEdit')).toBe(true);
    });

    it('should have "hasEdit" result binding set to true', function() {
      expect(demo.getResultText('hasEdit')).toBe('true');
    });

    it('should invoke "Edit" action when button is clicked', function() {
      demo.getButton('Edit').click();
      expect(demo.getResultText('action')).toBe('Edit');
    });
  });

  describe('"Clone" button Tests', function() {
    it('should have "hasClone" option', function() {
      expect(demo.checkOptionExists('hasClone')).toBe(true);
    });
    it('should have "hasClone" button option unchecked', function() {
      expect(demo.checkOptionIsSelected('hasClone')).toBe(false);
    });

    it('should have "hasClone" button option checked', function() {
      demo.clickOption('hasClone');
      expect(demo.checkOptionIsSelected('hasEdit')).toBe(true);
    });

    it('should have "hasClone" result binding set to true', function() {
      expect(demo.getResultText('hasClone')).toBe('true');
    });

    it('should invoke "Clone" action when button is clicked', function() {
      demo.getButton('Clone').click();
      expect(demo.getResultText('action')).toBe('Clone');
    });
  });

  describe('"Delete" button Tests', function() {
    it('should have "hasDelete" option', function() {
      //expect(browser.isElementPresent(demo.options.hasDelete)).toBe(true);
      //expect(demo.checkElementExists(demo.options.hasDelete)).toBe(true);
      expect(demo.checkOptionExists('hasDelete')).toBe(true);
    });
    it('should have "hasDelete" button option unchecked', function() {
      expect(demo.checkOptionIsSelected('hasDelete')).toBe(false);
    });

    it('should have "hasDelete" button option checked', function() {
      demo.clickOption('hasDelete');
      expect(demo.checkOptionIsSelected('hasDelete')).toBe(true);
    });

    it('should have "hasDelete" result binding set to true', function() {
      expect(demo.getResultText('hasDelete')).toBe('true');
    });

    it('should invoke "Clone" action (from last test) when "Delete" button is clicked', function() {
      demo.getButton('Delete').click();
      expect(demo.getResultText('action')).toBe('Clone');
    });
  });

  describe('"Delete" Confirmation & Cancel Tests', function() {
    it('should create "Confirm Delete" & "Cancel"', function() {
      expect(demo.checkButtonExists('Confirm Delete')).toBeTruthy();
      expect(demo.checkButtonExists('Cancel')).toBeTruthy();
    });
    it('should invoke Cancel action when "Cancel" is pressed', function() {
      demo.getButton('Cancel').click();
      expect(demo.getResultText('action')).toBe('Cancel');
    });
    it('should have destroyed a Cancel & Confirm buttons', function(){
      expect(demo.checkButtonExists('Confirm Delete')).toBe(false);
      expect(demo.checkButtonExists('Cancel')).toBe(false);
    });
    it('should invoke Delete action when Confirm Delete is click', function(){
      demo.getButton('Delete').click();
      expect(demo.checkButtonExists('Confirm Delete')).toBe(true);

      demo.getButton('Confirm Delete').click();
      expect(demo.getResultText('action')).toBe('Delete');
    });
    it('should have destroyed the "Confirm Delete" button on delete', function() {
      expect(demo.checkButtonExists('Confirm Delete')).toBe(false);
    })
  });

});