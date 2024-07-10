import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WhatsappTemplateService } from '../../Services/whatsapp-service.service';

@Component({
  selector: 'app-whatsapp-template-user',
  standalone: true,
  imports: [],
  templateUrl: './template-user.component.html',
  styleUrl: './template-user.component.css'
})
export class WhatsappTemplateUserComponent implements OnInit {

  template: any = null;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private whatsappService: WhatsappTemplateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const templateId = this.route.snapshot.paramMap.get('templateId');
    if (templateId) {
      this.getTemplate(templateId);
    } else {
      this.router.navigate(['/']); // Redirect if templateId is missing
    }
  }

  getTemplate(templateId: string): void {
    console.log("Trying to fetch")
    this.whatsappService.getSingleTemplate(templateId).subscribe(
      template => {
        console.log("Template fetching started")
        this.template = template;
        this.loading = false;
        console.log("Fetched templates: ",this.template)
      },
      error => {
        console.error('Error fetching template:', error);
        this.loading = false;
      }
    );
  }
}