import { Component, TemplateRef, Input } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	indexPersonaSeleccionada: any;	
	personas: any = [];	
	filtro: String;
	reload: any = {};
	open: any = {};
	
}
