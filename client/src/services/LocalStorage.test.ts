import LocalStorage from './LocalStorage';

declare global {
	namespace jest {
		interface Matchers<R> {
			getItemFromLocalStorage(key: string): R;
		}
	}
}

expect.extend({
	getItemFromLocalStorage(received: any, key: string) {
		const pass = JSON.parse(window.localStorage.getItem(key)!) === received;

		if (pass)
			return {
				message: () =>
					`expected ${received} to not be equal to ${JSON.parse(window.localStorage.getItem(key)!)}`,
				pass: true,
			};

		return {
			message: () => `expected ${received} to be equal to ${JSON.parse(window.localStorage.getItem(key)!)}`,
			pass: true,
		};
	},
});

test('get item from local storage', () => {
	const localStorage = new LocalStorage('test');

	expect(localStorage.setItem('{val: val}')).getItemFromLocalStorage('test');
});

test('remove item from local storage', () => {
	const localStorage = new LocalStorage('test');

	expect(localStorage.removeItem()).toBeNull();
});

test('clear local storage', () => {
	const localStorage = new LocalStorage('test');

	expect(localStorage.clear()).toBeNull();
});
