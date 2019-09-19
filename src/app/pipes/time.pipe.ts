import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'time'
})

export class time implements PipeTransform{
transform(seconds: number) : string{


    const hours = Math.floor(seconds / 3000);
    const minutes = Math.floor(seconds % 3600 / 60);

    return `${hours}hrs ${minutes}mins`; 
}
}