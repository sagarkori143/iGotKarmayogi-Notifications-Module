import { Component } from '@angular/core';
import { NavbarComponent } from '../../../modules/admin/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../../../pipes/highlighter.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { PropServiceService } from '../../../services/prop-service.service';
import { WhatsappTemplateService } from '../../Services/whatsapp-service.service';

@Component({
  selector: 'app-whatsapp-template-selector',
  standalone: true,
  imports: [NavbarComponent,CommonModule,HighlightPipe],
  templateUrl: './template-selector.component.html',
  styleUrl: './template-selector.component.css'
})
export class WhatsappTemplateSelectorComponent {
  templates: any = null;
  selectedTemplateId: string | null = null
  loading:boolean=true;

  constructor(
    private whatsappService: WhatsappTemplateService,
    private propService: PropServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.getTemplates();
  }

  getTemplates(): void {
    this.whatsappService.getTemplates().subscribe(
      data => {
        this.templates = data.templates,
        console.log(data);
      },
      error => console.error('Error:', error)
    );
    this.loading=false;
  }

  onRadioClick(templateId: string): void {
    this.selectedTemplateId = templateId;
  }

  selectTemplate(template: any): void {
    this.propService.setSelectedTemplate(template);
    this.selectedTemplateId = template.id;
  }

  createTemplate(): void {
     this.router.navigate(['dashboard/whatsapp/create']);
  }

  navigate(): void {
   // if (this.selectedTemplateId) {
 //     this.router.navigate(['/send-message']);
  //  }
  }
  
}
