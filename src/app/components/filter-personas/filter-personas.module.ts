import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputSearchModule } from '../input-search/input-search.module';
import { ButtonNewModule } from '../button-new/button-new.module';

import { FilterPersonasComponent } from './filter-personas.component';
import { FilterPersonasPipe } from './filter-personas.pipe';

@NgModule({
	imports: [
		CommonModule,
		
		InputSearchModule,
		ButtonNewModule,
	],
	declarations: [
		FilterPersonasComponent,
		FilterPersonasPipe,
	],
	exports: [
		FilterPersonasComponent,
		FilterPersonasPipe,
	],
	providers: [
		FilterPersonasPipe,
	]
})
export class FilterPersonasModule {}