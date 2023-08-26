const router = require('express').Router();

// подключаем модули userRoutes и cardRoutes из файлов './users' и '/cards'
const userRoutes = require('./user');
const movieRoutes = require('./movie');

// вызываем метод .use() роутера для определения маршрута /user и /movie.
// userRoutes и movieRoutes - обработчики для маршрута
router.use('/users', userRoutes);
router.use('/movies', movieRoutes);

module.exports = router;
