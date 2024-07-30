import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor() { }
  SelectedTemplate:string | null= null;
  SelectedUsers:object={};
  SelectedOption:string="select-template";

  getSelectedTemplate():string|null{
    return this.SelectedTemplate;
  }
  getSelectedUsers():object|null{
    return this.SelectedUsers;
  }
  getSelectedOption():string|null{
    return this.SelectedOption;
  }

  setSelectedTemplate(template:string):void{
    this.SelectedTemplate=template;
  }
  setSelectedUsers(users:object):void{
    this.SelectedUsers=users;
  }
  setSelectedOption(option:string):void{
    this.SelectedOption=option;
  }

}
