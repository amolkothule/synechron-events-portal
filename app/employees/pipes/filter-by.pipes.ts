import { Pipe, PipeTransform } from '@angular/core';


import { Employee } from '../models/employee';

@Pipe({
    name: 'eventsFilter'
})

export class FilterByPipe implements PipeTransform {
    transform(value: Employee[], ...args: any[]): Employee[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((employee: Employee) =>
        employee.employeeName.toLocaleLowerCase().indexOf(filter) != -1) : value;    
    }
}
