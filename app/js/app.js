var Gardener = angular.module('Gardener', [
	'ui.router'
])

Gardener.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'partials/main.html',
      controller: 'Main_Control',
      authenticate: true
    })
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'Login_Control',
      authenticate: false
    })

  $urlRouterProvider.otherwise('/login')
})

Gardener.factory('Fortress', function() {
  return {
    is_authenticated: function() {
      return false
    }
  }
})

Gardener.run(function($rootScope, $state, Fortress) {
  $rootScope.$on('$stateChangeStart', function(event, to_state, to_params, from_state, from_params) {
    if (to_state.authenticate && !Fortress.is_authenticated()) {
      $state.transitionTo('login')
      event.preventDefault()
    }
  })
})

Gardener.controller('Main_Control', function() {

})

Gardener.controller('Login_Control', function($scope, $http, $state) {
  $scope.submit = function() {
    $http.post('/gardener/vineyard/login', {
      name: $scope.user.name,
      pass: $scope.user.pass
    })
      .then(function(response) {
        $state.transitionTo('main')
      })

  }
})
//Gardener.config(['$routeProvider',
//	function($routeProvider) {
//		$routeProvider.
//		when('/login', {
//			templateUrl: 'partials/login.html',
//			controller: 'Login_Controller'
//		})
//}])

/*
var Gardener = {
	config: null,
	current_site: null,
	version: "none",
	load: function () {
		Bloom.get('config.json')
			.then(function (data) {
				Gardener.config = data
				Gardener.current_site = data.sites[0]
				return Block.load('app/blocks/blocks.html')
			})
			.then(function () {
				var login = Login.create()
				$('.js-content').append(login.element)
			})
	},
	get_vineyard_url: function (path) {
		return "http://" + Gardener.current_site.url + "/" + path
	},
	post_vineyard: function (path, data) {
		var url = Gardener.get_vineyard_url(path)
		return Bloom.post(url, data)
	}
}

var Login = Bloom.Flower.subclass('Login', {
	block: 'login',
	initialize: function () {
		var self = this
		var element = this.element
		this.element.submit(function (e) {
			e.preventDefault()
			var data = {
				name: element.find('.js-name').val(),
				pass: element.find('.js-pass').val(),
				version: Gardener.version
			}

			Gardener.post_vineyard('vineyard/login', data)
				.then(function () {
					element.remove()

				})
		})
	}
})*/