import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule  } from 'ngx-bootstrap/pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ButtonNewModule } from './components/button-new/button-new.module';
import { ButtonEditModule } from './components/button-edit/button-edit.module';
import { ButtonDeleteModule } from './components/button-delete/button-delete.module';
import { InputSearchModule } from './components/input-search/input-search.module';

import { FiltersModule } from './core/filters/filters.module';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		BrowserAnimationsModule,
		HttpClientModule,
		
		ModalModule.forRoot(),
		PaginationModule.forRoot(),
		BsDatepickerModule.forRoot(),

		ButtonNewModule,
		ButtonEditModule,
		ButtonDeleteModule,
		InputSearchModule,
		
		FiltersModule,
	],
	providers: [
		AppService,
	],
	bootstrap: [
		AppComponent,
	]
})
export class AppModule { }
