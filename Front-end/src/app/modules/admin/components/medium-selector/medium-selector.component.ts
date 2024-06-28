import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { PropServiceService } from '../../../../services/prop-service.service';

@Component({
  selector: 'app-medium-selector',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './medium-selector.component.html',
  styleUrl: './medium-selector.component.css'
})
export class MediumSelectorComponent {
  constructor(private router:Router, private propService:PropServiceService){}

  selectedMedium:string | null=null

  selectMedium(response:string){
   this.selectedMedium=response
  }

  submitHandler(){
   if(this.selectedMedium){
   this.propService.setMedium(this.selectedMedium)
   this.router.navigate(['/templates'])
   }
  }
}
