let controller = require('../controllers/controller.js');

module.exports = app => {
	// enter routes here. [Format is app.<app/get/post/delete>('url', callback)]
	app.post('/api/register', controller.register);
	app.get('/api/users', controller.getUsers);
	app.post('/api/login', controller.login);
	app.get('/api/logout', controller.logout);
	app.post('/api/add_question', controller.addQuestion);
}