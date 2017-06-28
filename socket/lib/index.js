const server = require('http').createServer();
const io = require('socket.io')(server, {
	serveClient: false,
	wsEngine: 'ws' // uws is not supported since it is a native module
});
const port = process.env.PORT || 3000;

io.on('connect', onConnect);
server.listen(port, () => console.log('server listening on port ' + port));

function onConnect(socket) {
	console.log('connect ' + socket.id);

	socket.on('disconnect', () => console.log('disconnect ' + socket.id));
	setInterval(() => {
		sendMsg(socket)
	}, 30000)
	socket.on('my other event', function(data) {
		console.log(data);
	});
}

function sendMsg(socket) {
	socket.emit('news', {
		msg: '新实验提醒',
		expInfo: {
			teacher: '李老师',
			name: '青蛙解剖',
			date: '2017-06-29 15:30:00'
		}
	});
}