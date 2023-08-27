const router = require('express').Router();
const NotFoundError = require('../errors/not-found-err');

// подключаем модули userRoutes и cardRoutes из файлов './users' и '/cards'
const userRoutes = require('./user');
const movieRoutes = require('./movie');
// импорт роутов signin и signup
const singInRoutes = require('./signin');
const singUpRoutes = require('./signup');

// вызываем метод .use() роутера для определения маршрута /user и /movie.
// userRoutes и movieRoutes - обработчики для маршрута
router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/', singInRoutes);
router.use('/', singUpRoutes);
router.use((req, res, next) => next(new NotFoundError('Route not found')));

module.exports = router;
