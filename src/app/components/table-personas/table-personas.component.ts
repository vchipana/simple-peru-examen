import { Component, Input, OnInit, OnChanges, Output, EventEmitter, TemplateRef } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { AppFactory } from '../../app.factory';

import { TablePersonasService } from './table-personas.service';

@Component({
	selector: 'table-personas',
	templateUrl: './table-personas.component.html',
	styleUrls: ['./table-personas.component.css']
})
export class TablePersonasComponent implements OnInit, OnChanges {
	
	@Input()  personas: any = [];	
	@Output() personasChange: EventEmitter<any> = new EventEmitter();
	
	@Input()  reload: boolean;
	@Output() reloadChange: EventEmitter<any> = new EventEmitter();
	
	@Input()  filtro: String;
	
	@Output() onEdit: EventEmitter<any> = new EventEmitter();
	
	personasFiltradas: any = [];
	indexPersonaSeleccionada: any;	
	personaPaginadas: any = [];
	modalRef: BsModalRef;
	
	pagination: PageChangedEvent = {page: 1, itemsPerPage: 5};
	
	constructor(
		private modalService: BsModalService,
		private tablePersonasService: TablePersonasService) {}
		
	ngOnInit() {
		this.getPersonas();
	}
	
	ngOnChanges(changes) {
		if(changes.reload && changes.reload.currentValue) {
			AppFactory.setLocalStorage(this.personas);
			this.pageChanged(this.pagination);
			setTimeout(() => { this.reloadChange.emit(false) });
		}
	}
	
	getPersonas() {		
		this.personas = AppFactory.getLocalStorage();
		if(!this.personas.length) {
			this.tablePersonasService.getPersonas().subscribe(
				data => {
					this.personas = data;
					this.personasChange.emit(this.personas);
					this.initPagination();
				}
			);
		} else {
			this.initPagination();
		}	
	}
	
	initPagination() {		
		this.personaPaginadas = this.personas.slice(0, 5);
		this.personasChange.emit(this.personas);
	}
	 
	pageChanged(event: PageChangedEvent): void {
		const startItem = (event.page - 1) * event.itemsPerPage;
		const endItem = event.page * event.itemsPerPage;
		this.pagination = event;
		this.personaPaginadas = this.personas.slice(startItem, endItem);
	}
	
	getIndexByPagination(index) {
		return ((this.pagination.page - 1) * this.pagination.itemsPerPage) + index;
	}
	
	deletePersona(index) {
		this.indexPersonaSeleccionada = index;
	}
	
	confirmarDelete() {
		this.personas.splice(this.getIndexByPagination(this.indexPersonaSeleccionada), 1);
		this.personasChange.emit(this.personas);
		this.pageChanged(this.pagination);
		AppFactory.setLocalStorage(this.personas);
		this.closeModal();
	}
	
	openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template);
	}
	
	closeModal() {
		this.modalRef.hide();
	}
	
}