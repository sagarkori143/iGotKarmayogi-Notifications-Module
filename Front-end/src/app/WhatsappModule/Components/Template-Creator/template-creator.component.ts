import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PropServiceService } from '../../../services/prop-service.service';
import { WhatsappTemplateService } from '../../Services/whatsapp-service.service';

@Component({
  selector: 'app-whatsapp-template-creator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-creator.component.html',
  styleUrls: ['./template-creator.component.css'] // Correct property name
})
export class WhatsappTemplateCreatorComponent implements OnInit {
  senderNumber: string | null = null;
  name: string = '';
  language: string = 'en';
  category: string = '';
  allowCategoryChange: boolean = false;
  bodyText: string = '';
  examples: string[] = [''];

  constructor(
    private http: HttpClient,
    private propService: PropServiceService,
    private whatsappService: WhatsappTemplateService
  ) {}

  ngOnInit() {
    this.senderNumber = this.propService.getSenderNumber();
  }

  addExample() {
    this.examples.push('');
  }

  onSubmit() {
    const templateData = {
      senderNumber: this.senderNumber,
      name: this.name,
      language: this.language,
      category: this.category,
      allowCategoryChange: this.allowCategoryChange,
      structure: {
        body: {
          text: this.bodyText,
          examples: this.examples.filter(example => example !== '')
        },
        type: 'TEXT'
      }
    };

    console.log('Template creation started');
    this.whatsappService.createTemplate(templateData).subscribe(
      data => {
        console.log(data);
      },
      error => console.error('Error:', error)
    );
    console.log('Template creation process completed');
  }
}
