import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'input-search',
	templateUrl: './input-search.component.html',
	styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent {
	
	@Input()  filtro: any;
	@Output() filtroChange: EventEmitter<any> = new EventEmitter();
	
}