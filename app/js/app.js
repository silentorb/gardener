var Gardener = angular.module('Gardener', [
	'ngRoute',
	'Gardener_Controllers'
])

Gardener.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'partials/login.html',
			controller: 'Login_Controller'
		})
}])
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