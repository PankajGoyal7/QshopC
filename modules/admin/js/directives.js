angular.module('qcProduct.admin.directives', []).directive('plusMinusToggle',function(){
	return {
		restrict:'E',
		scope:true,
		template:'<button ng-click="custiom=!custom"><span ng-show="custom">+</span><span ng-hide ="custom">-</span></button>',
		replace:true
	};
});