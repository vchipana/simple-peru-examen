import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule  } from 'ngx-bootstrap/pagination';

import { ButtonEditModule } from '../button-edit/button-edit.module';
import { ButtonDeleteModule } from '../button-delete/button-delete.module';
import { FilterPersonasModule } from '../filter-personas/filter-personas.module';

import { TablePersonasComponent } from './table-personas.component';
import { TablePersonasService } from './table-personas.service';

@NgModule({
	imports: [
		CommonModule,
		
		ModalModule.forRoot(),
		PaginationModule.forRoot(),
		
		ButtonEditModule,
		ButtonDeleteModule,
		FilterPersonasModule,
	],
	declarations: [
		TablePersonasComponent,
	],
	exports: [
		TablePersonasComponent,
	],
	providers: [
		TablePersonasService,
	]
})
export class TablePersonasModule {}