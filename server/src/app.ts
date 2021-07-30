import express from 'express';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize'; // @ts-ignore
import xss from 'xss-clean';
import hpp from 'hpp';
import AppError from './utils/AppError';

const app = express();

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


app.all('*', (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});


export default app;
