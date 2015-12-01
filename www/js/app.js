// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function ($ionicPlatform, $rootScope) {
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
    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.tabs.position('bottom').style('standard');
        //    $ionicConfigProvider.views.transition('ios');
        $stateProvider
            .state('index', {
                url: '/index',
                views: {
                    'index': {
                        templateUrl: 'templates/home.html',
                        controller: function ($scope) {
                            $scope.title = "目录"
                        }
                    }
                }
            })
            .state('index.list', {
                url: '/list',
                views: {
                    'list-view': {
                        templateUrl: 'templates/lists.html',
                        controller: function ($scope) {
                            $scope.types = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                            $scope.type = "目录";
                        }
                    }
                }
            })
            .state('index.list-child', {
                url: '/list/:type',
                views: {
                    'list-view': {
                        templateUrl: 'templates/lists.html',
                        controller: function ($scope, $stateParams) {
                            $scope.types = ['0/1', '1/1', '2/1', '3/1', '4/1', '5/1', '6/1', '7/1', '8/1', '9/1'];
                            $scope.type = "目录";
                        }
                    }
                }
            })
            .state('index.list-child-id', {
                url: '/list/:type/:id',
                views: {
                    'list-view': {
                        template: 'templates/lists.html',
                        controller: function ($scope, $stateParams) {
                            //                        $scope.types=['0/1','1/1','2/1','3/1','4/1','5/1','6/1','7/1','8/1','9/1'];
                            $scope.type = "目录";
                        }
                    }
                }
            })
            .state('index.collect', {
                url: '/collect',
                views: {
                    'list-view': {
                        templateUrl: 'templates/collect.html',
                        controller: function ($scope) {
                            $scope.types = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                            $scope.type = "收藏";
                            $scope.onSwipeRight = function () {
                                $('.tab-href-list').trigger('click');
                            }
                        }
                    }
                }
            })
            .state('index.collect-id', {
                url: '/collect/:id',
                views: {
                    'list-view': {
                        templateUrl: 'templates/collect.html',
                        controller: function ($scope, $stateParams) {
                            //                        $scope.types=[0,1,2,3,4,5,6,7,8,9];
                            $scope.type = "收藏";
                        }
                    }
                }
            })
            .state('setting', {
                url: '/setting',
                views: {
                    'index': {
                        templateUrl: 'templates/setting.html',
                        controller: function ($scope) {
                            //                        $scope.setting=false;
                        }
                    }
                }
            })
            .state('form', {
                url: '/form',
                views: {
                    'index': {
                        templateUrl: 'templates/setting-form.html',
                        controller: function ($scope) {
                            //                        $scope.setting=false;
                        }
                    }
                }
            })

        ;
        $urlRouterProvider.otherwise('/index/list');
    });
