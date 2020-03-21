import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterPersonas'})
export class FilterPersonasPipe implements PipeTransform {
	
	transform(personasOriginal: any = [], valor: any = '') {
		let personasFiltradas = [];
		
		if(!valor) {
			return personasOriginal;
		} else {
			valor = valor.toLowerCase();
			(personasOriginal || []).forEach(persona => {
				if((persona.nombre || '').toLowerCase().includes(valor) || (persona.apellidos || '').toLowerCase().includes(valor)) {
					personasFiltradas.push(persona)
				}
			});
			
			return personasFiltradas;
		}
	}
  
}