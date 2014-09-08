'use strict';

describe('Controller: PhonesCtrl', function () {

  // load the controller's module
  beforeEach(module('testAppApp'));

  var PhonesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhonesCtrl = $controller('PhonesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
