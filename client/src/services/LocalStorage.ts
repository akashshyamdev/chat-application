export default class LocalStorage {
	constructor(private key?: string) {}

	getItem(key?: string) {
		return JSON.parse(window.localStorage.getItem(this.key || key!) || '{}');
	}

	setItem(value: any, key?: string) {
		window.localStorage.setItem(this.key || key!, JSON.stringify(value));

		return this.getItem(this.key || key!);
	}

	removeItem(key?: string) {
		window.localStorage.removeItem(this.key || key!);

		return null;
	}

	clear() {
		window.localStorage.clear();

		return null;
	}
}
