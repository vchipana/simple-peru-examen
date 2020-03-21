import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputSearchComponent } from './input-search.component';

@NgModule({
	imports: [
		FormsModule,
	],
	declarations: [
		InputSearchComponent,
	],
	exports: [
		InputSearchComponent,
	]
})
export class InputSearchModule {}