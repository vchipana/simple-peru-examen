export class AppFactory {
	
	public static setLocalStorage(personas) {
		localStorage.setItem('personas', JSON.stringify(personas || []));
	}
	
	public static getLocalStorage() {
		return JSON.parse(localStorage.getItem('personas')) || [];
	}
	
}