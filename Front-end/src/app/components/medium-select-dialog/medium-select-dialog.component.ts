import { Component } from '@angular/core';
import { Output,Input,EventEmitter } from '@angular/core';
import { PropServiceService } from '../../services/prop-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medium-select-dialog',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './medium-select-dialog.component.html',
  styleUrl: './medium-select-dialog.component.css'
})
export class MediumSelectDialogComponent {
  @Input() campaign: any;
  @Output() close = new EventEmitter<void>();

  selectedMethod: string | null = null;

  constructor(private propService:PropServiceService, private Router:Router){}
 
  mediumSelect(medium:string){
   this.selectedMethod=medium;
  }
  submit() {
    if (this.selectedMethod) {
      this.propService.setMedium(this.selectedMethod);
      this.close.emit();
      this.Router.navigate(['templates']);
    } else {
      alert('Please select a method of communication');
    }
  }
  isClosing:boolean=false;
  Open:boolean=true;
  closeDetails() {
    this.isClosing = true;
    setTimeout(() => {
      this.close.emit();
      this.Open = false;
    }, 300); // Duration of the closing animation, adjust as necessary
  }
}
