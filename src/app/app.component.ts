import { Component, TemplateRef, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { AppService } from './app.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	
	modalRef: BsModalRef;
	
	filtro: any;
	
	persona: any = {};
	personas: any = [];
	personasFiltradas: any = [];
	indexPersonaSeleccionada: any;	
	personaPaginadas: any = [];
	
	alerts: any = {};
	
	pagination: PageChangedEvent = {page: 1, itemsPerPage: 5};
	
	constructor(
		private modalService: BsModalService,
		private appService: AppService) {}
		
	ngOnInit() {
		this.getPersonas();
	}
	
	getPersonas() {		
		this.personas = this.getLocalStorage();
		if(!this.personas.length) {
			this.appService.getPersonas().subscribe(
				data => {
					this.personas = data;
					this.initPagination();
				}
			);
		} else {
			this.initPagination();
		}	
	}
	
	initPagination() {		
		this.personaPaginadas = this.personas.slice(0, 5);
	}

	openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template);
	}
	
	closeModal() {
		this.modalRef.hide();
		this.clearPersona();
	}
	
	clearPersona() {		
		this.persona = {};
		this.indexPersonaSeleccionada = null;
	}
	
	addPersona() {
		if(this.indexPersonaSeleccionada != null) {
			this.personas[this.indexPersonaSeleccionada] = {...this.persona};
			this.showAlertEditPersona();
		} else {
			this.personas.push(this.persona);
			this.showAlertNewPersona();
		}
		this.pageChanged(this.pagination);
		this.setLocalStorage();
		this.closeModal();
	}
	
	editPersona(index) {
		this.indexPersonaSeleccionada = index;
		this.persona = {...this.personas[this.getIndexByPagination(index)]};
	}
	
	deletePersona(index) {
		console.log(this.pagination);
		this.indexPersonaSeleccionada = index;
	}
	
	confirmarDelete() {
		this.personas.splice(this.getIndexByPagination(this.indexPersonaSeleccionada), 1);
		this.pageChanged(this.pagination);
		this.setLocalStorage();
		this.closeModal();
	}
	
	getIndexByPagination(index) {
		return ((this.pagination.page - 1) * this.pagination.itemsPerPage) + index;
	}
	
	setLocalStorage() {
		localStorage.setItem('personas', JSON.stringify(this.personas || []));
	}
	
	getLocalStorage() {
		return JSON.parse(localStorage.getItem('personas')) || [];
	}
	 
	pageChanged(event: PageChangedEvent): void {
		console.log(event);
		const startItem = (event.page - 1) * event.itemsPerPage;
		const endItem = event.page * event.itemsPerPage;
		this.pagination = event;
		this.personaPaginadas = this.personas.slice(startItem, endItem);
	}
	
	showAlertNewPersona() {
		this.alerts.nuevaPersona = true;
		setTimeout(() => {
			this.alerts.nuevaPersona = false;
		}, 5000)
	}
	
	showAlertEditPersona() {
		this.alerts.editPersona = true;
		setTimeout(() => {
			this.alerts.editPersona = false;
		}, 5000)
	}
}
