import { Component, input,OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute, Router,NavigationExtras } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-use-template',
  standalone: true,
  imports: [NavbarComponent,CommonModule,FormsModule],
  templateUrl: './use-template.component.html',
  styleUrl: './use-template.component.css'
})

export class UseTemplateComponent implements OnInit {
  templateId: number | null = null;
  template: any;
  variableValues: { [key: string]: string } = {};

  constructor(private route: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.template = navigation.extras.state['template'];
      console.log('Received Template Data in constructor:', this.template);
    }
  }

  extractVariables(content: string): string[] {
    // Regex to extract variables enclosed in {{ }}
    const regex = /{{(.*?)}}/g;
    const matches = content.match(regex);
    if (matches) {
      // Extract variable names without {{ }}
      return matches.map(match => match.replace(/{{|}}/g, '').trim());
    }
    return [];
  }

  replaceVariables(content: string): string {
    // Replace variables in content with values from variableValues
    let replacedContent = content;
    for (const [key, value] of Object.entries(this.variableValues)) {
      const variableRegex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
      replacedContent = replacedContent.replace(variableRegex, value);
    }
    return replacedContent;
  }

  submitForm(): void {
    // Process form submission with variable values
    console.log('Form submitted with values:', this.variableValues);

    // Replace variables in template content
    const replacedContent = this.replaceVariables(this.template.Content);
    console.log('Replaced Content:', replacedContent);
    const navigationExtras:NavigationExtras = {
      state: {
        template: this.template,
        replacedContent
      }
    };

    // Navigate to next page with replaced content
    this.router.navigate(['/dashboard/campaigns/users'], navigationExtras);
    
    // Implement further logic here, e.g., API call to use template with replaced content
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.templateId = Number(params.get('id'));
      if (!this.template) {
        console.error('No template data found in navigation state');
      } else {
        console.log('Template data found in navigation state:', this.template);
      }
    });
  }
}
