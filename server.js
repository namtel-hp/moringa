var express = require('express'),
  app = express(),
  port = process.env.PORT || 3100,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  User = require('./api/models/usersModel'),
  Course = require('./api/models/CoursesModel'),
  Attendance = require('./api/models/AttendanceModel'),
  Grade = require('./api/models/gradesModel'),
  //Course = require('./api/models/CoursesModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/moringadb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/mcRoutes');
routes(app);

app.listen(port);
console.log('MoringaCore RESTful API server started on: ' + port);
