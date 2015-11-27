// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'templates/home.html'
            })
            .state('index.left', {
                url: '/left',
                views: {
                    'index-left': {
                        templateUrl: 'templates/index-tab-left.html'
                    }
                }
            })
            .state('index.left-all', {
                url: '/left/all',
                views: {
                    'index-left': {
                        templateUrl: 'templates/list-all.html'
                    }
                }
            })
            .state('index.right', {
                url: '/right',
                views: {
                    'index-right': {
                        templateUrl: 'templates/index-tab-right.html'
                    }
                }
            })
            .state('setting', {
                url: '/setting',
                templateUrl: 'templates/setting.html'
            })
            .state('settingForm', {
                url: '/setting/form',
                templateUrl: 'templates/setting-form.html'
            });

        $urlRouterProvider.otherwise('/index/left');
    })
