const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const socketIO = require('socket.io')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const port = process.env.port || 3000;

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket)=>{
  console.log('A user has connected');
  socket.on('chat message', (message)=>{
    console.log('Server received message: ', message)
    io.emit('chat message', message);
  })
  socket.on('disconnect', () => {
    console.log('Client disconnected')
  });
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*',(req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
  .listen(port, ()=>console.log(`Server listening on port ${port}`));
})

// websockets
// const io = socketIO(app);



// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
