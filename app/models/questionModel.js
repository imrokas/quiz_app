var Question = Backbone.Model.extend({
	defaults: {
		question: '',
		options: [],
		correctAnswer: null,
		userAnswer: null
	}
});