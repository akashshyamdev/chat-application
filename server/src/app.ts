import cors from 'cors';
import express from 'express';
// @ts-ignore
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
// @ts-ignore
import xss from 'xss-clean';
import groupRouter from './routes/group';
import messageRouter from './routes/messages';
import userRouter from './routes/users';

const app = express();

app.use(cors());

app.use(helmet());

const limiter = rateLimit({
	max: 200,
	windowMs: 30 * 60 * 1000,
	message: 'Too many requests from this IP, try again in half an hour',
});

app.use('/api', limiter);

app.use(morgan('dev'));

app.use(express.json());

app.use(mongoSanitize());

app.use(xss());

app.use(hpp());

// Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/groups', groupRouter);
app.use('/api/v1/messages', messageRouter);

export default app;
