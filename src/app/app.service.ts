import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AppService {
	
	constructor(
		private httpClient: HttpClient) {}
		
	getPersonas(): Observable<any> {
		return this.httpClient.get('/assets/api/mock/personas.json');
	}
}	
