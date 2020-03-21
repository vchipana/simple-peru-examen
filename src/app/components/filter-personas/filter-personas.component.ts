import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'filter-personas',
	templateUrl: './filter-personas.component.html',
	styleUrls: ['./filter-personas.component.css']
})
export class FilterPersonasComponent {
	
	@Input()  filtro: any;
	@Output() filtroChange: EventEmitter<any> = new EventEmitter()
	
	@Output() onNew: EventEmitter<any> = new EventEmitter();
	
}