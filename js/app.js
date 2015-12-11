'use strict'

angular.module('qcProduct',['ngCookies','ngAnimate','ui.router',
				'qcProduct.auth','qcProduct.auth.controllers','qcProduct.auth.services',
				'qcProduct.admin.controllers','qcProduct.admin.services'])

.value('PROXY_POINT','./phpscript/proxyremote.php');
