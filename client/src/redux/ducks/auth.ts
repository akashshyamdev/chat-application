import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import Http from 'services/Http';
import { Action } from './../../types/redux';

export const AUTH_SIGNUP_REQUEST = 'AUTH_SIGNUP_REQUEST';
export const AUTH_SIGNUP_SUCCESS = 'AUTH_SIGNUP_RESPONSE';
export const AUTH_SIGNUP_FAIL = 'AUTH_SIGNUP_REQUEST';

export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_RESPONSE';
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_REQUEST';

export const signup = (formData: any) => async (dispatch: Dispatch) => {
	try {
		dispatch({
			type: AUTH_SIGNUP_REQUEST,
		});

		console.log('action');
		const httpService = new Http('api/v1/users/signup');
		const user = await httpService.create(formData);

		console.log(user);

		dispatch({
			type: AUTH_SIGNUP_SUCCESS,
			payload: { ...user, token: user.token },
		});

		localStorage.setItem('auth', JSON.stringify(user));
	} catch (err) {
		const error = err as AxiosError;

		dispatch({
			type: AUTH_SIGNUP_FAIL,
			payload: error?.response?.data?.message || error?.message,
		});
	}
};

export const login = (formData: any) => async (dispatch: Dispatch) => {
	try {
		dispatch({
			type: AUTH_LOGIN_REQUEST,
		});

		const httpService = new Http('api/developers/login');
		const { data, token } = await httpService.create(formData);

		dispatch({
			type: AUTH_LOGIN_SUCCESS,
			payload: { ...data, token },
		});

		localStorage.setItem('auth', JSON.stringify(data));
	} catch (err) {
		const error = err as AxiosError;

		dispatch({
			type: AUTH_LOGIN_FAIL,
			payload: error?.response?.data?.message || error?.message,
		});
	}
};

export default function reducer(state = {}, action: Action) {
	switch (action.type) {
		case AUTH_SIGNUP_REQUEST:
		case AUTH_LOGIN_REQUEST:
			return { ...state, loading: true };

		case AUTH_SIGNUP_SUCCESS:
		case AUTH_LOGIN_SUCCESS:
			return { ...state, ...action.payload, loading: false, isAuthenticated: true };

		case AUTH_SIGNUP_FAIL:
		case AUTH_LOGIN_FAIL:
			return { ...state, ...action.payload, loading: false };
		default:
			return state;
	}
}
