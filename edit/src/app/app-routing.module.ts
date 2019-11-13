import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'edit-profile', component: EditProfileComponent },
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);