(function() {
  var app = angular.module('cookies', []);

  app.directive('color', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (/^(green|blue|red|yellow)$/i.test(viewValue)) {
            ctrl.$setValidity('color', true);
            return viewValue;
          } else {
            ctrl.$setValidity('color', false);
            return undefined;
          }
        });
      }
    };
  });
})();

