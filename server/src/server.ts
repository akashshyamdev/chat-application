import colors from 'colors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { Server } from 'socket.io';
import app from './app';
import { getRecentMessages } from './controllers/messages';

const io = new Server(app, { cors: { origin: '*' } });

process.on('uncaughtException', (err) => {
	console.error(err.name, err.message);
	console.log('UNHANDLED REJECTION 💣 💣 💥 💥');

	process.exit(1);
});

// ENV Variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// DB
mongoose
	.connect(process.env.DB_URL!, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then((con) => {
		console.log(colors.yellow.bold(`Database connected ${con.connection.host}`));
	})
	.catch((err) => {
		console.error(err.message.red.underline.bold);
		process.exit(1);
	});

// Socket
io.on('connection', async (socket) => {
	// Get all messages
	const messages = await getRecentMessages();

	// Send all messages
	socket.emit('recent_messages', messages);

	socket.on('create_message', () => {});
});

// Listening code
const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
	console.log(colors.yellow.bold(`Server running in ${process.env.NODE_ENV} on port ${port}`));
});

process.on('unhandledRejection', (err: Error) => {
	console.error(err.name, err.message);
	console.log('UNHANDLED REJECTION 💣 💣 💥 💥');

	server.close(() => {
		process.exit(0);
	});
});
