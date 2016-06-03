(function(){

	//Bootstrap module
	angular.module('orderclient', [
		'ui.router',
		'720kb.datepicker'
	]).value('config', {
		apiRoot: 'http://localhost:3000/api/'
	});

})();
