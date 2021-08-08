import BaseHttp, { QueryParams } from './BaseHttp';

export default class Http {
	public baseHttp: BaseHttp;

	constructor(public urlPrefix: string) {
		this.baseHttp = new BaseHttp();
	}

	getAll(queryParams?: QueryParams) {
		return this.baseHttp.get(`/${this.urlPrefix}`, queryParams);
	}

	get(id: string, queryParams?: QueryParams) {
		return this.baseHttp.get(`/${this.urlPrefix}/${id}`, queryParams);
	}

	create(body: any, queryParams?: QueryParams) {
		return this.baseHttp.post(`/${this.urlPrefix}`, body, queryParams);
	}

	update(id: string, body: any, queryParams?: QueryParams) {
		return this.baseHttp.put(`/${this.urlPrefix}/${id}`, body, queryParams);
	}

	delete(id: string, queryParams?: QueryParams) {
		console.log('delete');
		return this.baseHttp.delete(`/${this.urlPrefix}/${id}`, queryParams);
	}
}
