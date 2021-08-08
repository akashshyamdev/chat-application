const ROOT_URL = process.env.REACT_APP_SERVER_URL;

export type QueryParams = { [key: string]: string };

export default class BaseHttp {
	headers = {};

	constructor(public url_prefix: string = '') {
		this.getHeaders();
	}

	async get(url: string, queryParams?: QueryParams) {
		try {
			let response = await fetch(ROOT_URL + this.getUrl(url) + `?${this.mapQueryParams(queryParams)}`, {
				headers: this.headers,
			});
			return response.json();
		} catch (error) {
			console.log(error);
			return null;
		}
	}

	async post(url: string, body: any, queryParams?: QueryParams) {
		try {
			let response = await fetch(ROOT_URL + this.getUrl(url) + `?${this.mapQueryParams(queryParams)}`, {
				method: 'POST',
				headers: this.headers,
				body: JSON.stringify(body),
			});

			return response.json();
		} catch (error) {
			console.log(error);
			return null;
		}
	}

	async put(url: string, body: any, queryParams?: QueryParams) {
		try {
			let response = await fetch(ROOT_URL + this.getUrl(url) + `?${this.mapQueryParams(queryParams)}`, {
				method: 'PUT',
				headers: this.headers,
				body: JSON.stringify(body),
			});

			return response.json();
		} catch (error) {
			console.log(error);
			return null;
		}
	}

	async delete(url: string, queryParams?: QueryParams) {
		try {
			await fetch(ROOT_URL + this.getUrl(url) + `?${this.mapQueryParams(queryParams)}`, {
				method: 'DELETE',
				headers: this.headers,
			});

			return undefined;
		} catch (error) {
			console.log(error);
			return null;
		}
	}

	getUrl(url: string) {
		return this.url_prefix + url;
	}

	getHeaders() {
		this.headers = {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		};
	}

	mapQueryParams(queryParams?: QueryParams) {
		return queryParams
			? Object.keys(queryParams)
					.map(function (key) {
						return key + '=' + queryParams[key];
					})
					.join('&')
			: '';
	}
}
