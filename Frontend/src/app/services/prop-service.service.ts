import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropServiceService {

  constructor() { }
  medium:string|null=null

  getMedium():string|null{
    return this.medium
  }

  setMedium(medium:string|null){
    this.medium=medium
  }
}
