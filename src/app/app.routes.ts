import { Routes } from '@angular/router';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'campaign', component: CampaignsComponent },
];
