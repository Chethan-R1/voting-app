import { Route, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
    {
        path: 'login',
        component: AuthComponent
    },
     {
        path: '',
        component: AuthComponent
    },
    
    {
        path: 'home',
        component: HomeComponent
    }
]