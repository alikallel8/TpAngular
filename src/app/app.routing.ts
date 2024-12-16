import { ColorComponent } from "./color/color.component";
import { CvComponent } from "./tpcv/cv/cv.component";
import {Routes, RouterModule} from
"@angular/router";
import { DetailsComponent } from "./tpcv/details/details.component";
import { LoginComponent } from "./login/login.component";

const APP_ROUTES : Routes = [
    {path: 'color' , component:ColorComponent},
    {path: 'cv',component:CvComponent},
    {path: '',component:CvComponent},
    {path: 'cv/:id',component:DetailsComponent},
    {path: 'login',component:LoginComponent},

    ];

    export const ROUTING = 
RouterModule.forRoot(APP_ROUTES);