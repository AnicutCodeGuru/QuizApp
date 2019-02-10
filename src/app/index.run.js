(function() {
  'use strict';

  angular
    .module('assignment')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('Assignment ready');
  }

})();
