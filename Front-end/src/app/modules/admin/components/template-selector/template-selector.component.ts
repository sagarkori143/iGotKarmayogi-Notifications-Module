import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterEvent } from '@angular/router';
import { HighlightPipe } from '../../../../pipes/highlighter.pipe';
import { PropServiceService } from '../../../../services/prop-service.service';
@Component({
  selector: 'app-template-selector',
  standalone: true,
  imports: [NavbarComponent,CommonModule,HighlightPipe],
  templateUrl: './template-selector.component.html',
  styleUrl: './template-selector.component.css',
})
export class TemplateSelectorComponent {
serviceTitle:string="SMS-Service"
templates=[
  {
      "id": 1001,
      "category": "festival",
      "templateContent": "We are excited to announce that on the occasion of {{festivalName}}, we will have a celebration at the hostel premises on {{festivalDate}}. Join us for a joyful event!"
  },
  {
      "id": 1002,
      "category": "exam announcement",
      "templateContent": "Dear students, the exam for {{courseName}} is scheduled on {{examDate}}. Please ensure you are prepared and ready to excel."
  },
  {
      "id": 1003,
      "category": "new course launch",
      "templateContent": "We are thrilled to launch our new course: {{courseName}}. Enrollment starts on {{enrollmentStartDate}}. Don't miss out on this opportunity to learn and grow."
  },
  {
      "id": 1004,
      "category": "course expiry",
      "templateContent": "Reminder: Your access to {{courseName}} will expire on {{expiryDate}}. Make sure to complete all modules before the deadline."
  },
  {
      "id": 1005,
      "category": "course completion",
      "templateContent": "Congratulations on completing {{courseName}}! Your hard work and dedication have paid off. Keep up the great work!"
  },
  {
      "id": 1006,
      "category": "festival",
      "templateContent": "Happy {{festivalName}}! We invite you to join us for the celebration on {{festivalDate}} at the hostel premises. Let's make it a memorable day!"
  },
  {
      "id": 1007,
      "category": "exam announcement",
      "templateContent": "Attention students: The final exam for {{courseName}} is on {{examDate}}. Be sure to review all your notes and be well-prepared."
  },
  {
      "id": 1008,
      "category": "new course launch",
      "templateContent": "Announcing our new course: {{courseName}}. Enrollment opens on {{enrollmentStartDate}}. Secure your spot and embark on a new learning journey."
  },
  {
      "id": 1009,
      "category": "course expiry",
      "templateContent": "Notice: The course {{courseName}} will expire on {{expiryDate}}. Please complete all required activities before this date."
  },
  {
      "id": 1010,
      "category": "course completion",
      "templateContent": "Well done! You have successfully completed the {{courseName}}. We are proud of your achievement and wish you continued success."
  },
  {
      "id": 1011,
      "category": "festival",
      "templateContent": "Celebrate {{festivalName}} with us on {{festivalDate}} at the hostel. We have planned a variety of activities and treats. Don't miss out!"
  },
  {
      "id": 1012,
      "category": "exam announcement",
      "templateContent": "Heads up! The exam for {{courseName}} is coming up on {{examDate}}. Start your revision early to ensure success."
  },
  {
      "id": 1013,
      "category": "new course launch",
      "templateContent": "Exciting news! Our new course {{courseName}} is now available. Enrollment starts on {{enrollmentStartDate}}. Join us and enhance your skills."
  },
  {
      "id": 1014,
      "category": "course expiry",
      "templateContent": "Your subscription to {{courseName}} will expire on {{expiryDate}}. Please ensure you complete all course requirements before this date."
  },
  {
      "id": 1015,
      "category": "course completion",
      "templateContent": "Congratulations! You have completed {{courseName}}. Your certificate will be available for download on {{certificateDate}}."
  },
  {
      "id": 1016,
      "category": "workshop",
      "templateContent": "Join us for an interactive workshop on {{workshopTopic}} on {{workshopDate}}. Register now to reserve your spot."
  },
  {
      "id": 1017,
      "category": "seminar",
      "templateContent": "We are pleased to invite you to a seminar on {{seminarTopic}} on {{seminarDate}}. Don't miss this opportunity to learn from experts."
  },
  {
      "id": 1018,
      "category": "webinar",
      "templateContent": "Sign up for our upcoming webinar on {{webinarTopic}} scheduled for {{webinarDate}}. Enhance your knowledge from the comfort of your home."
  },
  {
      "id": 1019,
      "category": "holiday announcement",
      "templateContent": "Please note that the institution will be closed on {{holidayName}} ({{holidayDate}}). We wish you a happy holiday!"
  },
  {
      "id": 1020,
      "category": "maintenance notice",
      "templateContent": "A scheduled maintenance will take place on {{maintenanceDate}}. Access to the platform may be temporarily unavailable. We apologize for any inconvenience."
  },
  {
      "id": 1021,
      "category": "newsletter",
      "templateContent": "Welcome to our monthly newsletter! This edition includes updates on {{newsletterTopic}} and upcoming events. Stay informed and engaged."
  },
  {
      "id": 1022,
      "category": "event reminder",
      "templateContent": "Reminder: The event {{eventName}} will take place on {{eventDate}}. We look forward to your participation."
  },
  {
      "id": 1023,
      "category": "feedback request",
      "templateContent": "We value your feedback! Please take a moment to complete the survey for {{courseName}} and help us improve your learning experience."
  },
  {
      "id": 1024,
      "category": "congratulations",
      "templateContent": "Congratulations to {{recipientName}} on achieving {{achievement}}! We are proud of your success and dedication."
  },
  {
      "id": 1025,
      "category": "welcome message",
      "templateContent": "Welcome to {{institutionName}}! We are delighted to have you join us. Let's embark on this exciting journey together."
  }
]
selectedTemplateId: number | null = null;

constructor(private router: Router, private propService:PropServiceService) {}
selectedMedium:null|string=null
ngOnInit(){
   this.selectedMedium=this.propService.getMedium()
}
  selectTemplate(template: any) {
    this.selectedTemplateId = this.selectedTemplateId === template.id ? null : template.id;
  }

  onRadioClick(templateId: number) {
    this.selectedTemplateId = templateId;
  }

  navigator() {
    if (this.selectedTemplateId !== null) {
      this.router.navigate(['/usetemplate', this.selectedTemplateId]);
    }
  }
  createtemplate(){
    this.router.navigate(['/createnewtemplate']);
  }

}
