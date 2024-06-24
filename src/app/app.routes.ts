import { Routes } from '@angular/router';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { HomeComponent } from './components/home/home.component';
import { TemplateSelectorComponent } from './components/template-selector/template-selector.component';
import { UseTemplateComponent } from './components/use-template/use-template.component';
import { MediumSelectorComponent } from './components/medium-selector/medium-selector.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'campaign', component: CampaignsComponent },
    {path:'medium',component:MediumSelectorComponent},
    {path:'templates',component:TemplateSelectorComponent},
    { path: 'usetemplate/:id', component: UseTemplateComponent },
    
];
