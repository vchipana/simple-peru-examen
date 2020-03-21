import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { FormPersonaComponent } from './form-persona.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		
		ModalModule.forRoot(),
		BsDatepickerModule.forRoot(),
	],
	declarations: [
		FormPersonaComponent,
	],
	exports: [
		FormPersonaComponent,
	]
})
export class FormPersonaModule {}