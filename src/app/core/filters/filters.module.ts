import { NgModule } from '@angular/core';

import { FilterPersonas } from './filter-personas.pipe';

@NgModule({
	imports: [		
	],
	declarations: [
		FilterPersonas,
	],
	exports: [
		FilterPersonas,
	],
	providers: [
		FilterPersonas,
	]
})

export class FiltersModule { }