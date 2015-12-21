'use strict'

angular.module('constants',[])

.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})

.constant('USER_ROLES', {
  all: 'All',
  admin: 'Admin',
  agent: 'Agent',
})

.constant('USER_STATUS',{
	A:'Active',
	D:'Disabled'
})