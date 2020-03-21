import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FilterPersonasModule } from './components/filter-personas/filter-personas.module';
import { TablePersonasModule } from './components/table-personas/table-personas.module';
import { FormPersonaModule } from './components/form-persona/form-persona.module';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,

		FilterPersonasModule,
		TablePersonasModule,
		FormPersonaModule,
	],
	providers: [],
	bootstrap: [
		AppComponent,
	]
})
export class AppModule { }
