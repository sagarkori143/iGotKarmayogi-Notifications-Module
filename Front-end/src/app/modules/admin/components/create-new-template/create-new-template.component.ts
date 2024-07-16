import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';
import { HighlightPipe } from '../../../../pipes/highlighter.pipe';
import { PropServiceService } from '../../../../services/prop-service.service';
import { FormsModule } from '@angular/forms';
import { TemplateService } from '../../services/createTemplate/create-template.service';

@Component({
  selector: 'app-create-new-template',
  standalone: true,
  imports: [NavbarComponent, CommonModule, HighlightPipe, FormsModule],
  templateUrl: './create-new-template.component.html',
  styleUrls: ['./create-new-template.component.css']
})
export class CreateNewTemplateComponent implements OnInit {
  selectedCategory: string = '';
  selectedMedium: string|null = null;
  templateData = {
    templateId: '',
    category: '',
    subject: '',
    content: ''
  };

  constructor(private propService: PropServiceService, private templateService: TemplateService, private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      const type = params.get('type');
      this.selectedMedium = type;
    });
  }

  onSubmit(): void {
    // Call the service to create the template with the form data
    this.templateService.createTemplate(this.templateData).subscribe(
      response => {
        this.router.navigate([`/dashboard/templates/${this.selectedMedium}`]);
        console.log('Template created successfully:', response);
        // Optionally, reset the form or navigate to another page
      },
      error => {
        console.error('Error creating template:', error);
      }
    );
  }
}
