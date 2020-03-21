import { Component, Input, Output, EventEmitter, OnChanges, TemplateRef, ViewChild } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
	selector: 'form-persona',
	templateUrl: './form-persona.component.html',
	styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnChanges {
	
	@Input()  personas: any = [];
	@Output() personasChange: EventEmitter<any> = new EventEmitter();
	
	@Input()  indexPersonaSeleccionada: any;
	@Output() indexPersonaSeleccionadaChange: EventEmitter<any> = new EventEmitter();
	
	@Input()  open: boolean;
	@Output() openChange: EventEmitter<any> = new EventEmitter();
	
	@Output() onConfirm: EventEmitter<any> = new EventEmitter();
	
	persona: any = {};
	alerts: any = {};
	
	modalRef: BsModalRef;	
	@ViewChild('templateForm', { static: true }) templateForm: TemplateRef<any>;
	
	constructor(
		private modalService: BsModalService) {}
		
	ngOnChanges(changes) {
		if(changes.open && changes.open.currentValue) {
			if(this.indexPersonaSeleccionada != null) {
				this.editPersona();
			}
			this.openModal(this.templateForm);
			setTimeout(() => { this.openChange.emit(false); });
		}
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
		this.indexPersonaSeleccionadaChange.emit(null);
	}
	
	addPersona() {
		if(this.indexPersonaSeleccionada != null) {
			this.personas[this.indexPersonaSeleccionada] = {...this.persona};
			this.showAlertEditPersona();
			this.onConfirm.emit();
		} else {
			this.personas.push(this.persona);
			this.showAlertNewPersona();
			this.onConfirm.emit();
		}
		this.personasChange.emit(this.personas);
		this.closeModal();
	}
	
	editPersona() {
		this.persona = {...this.personas[this.indexPersonaSeleccionada]};
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