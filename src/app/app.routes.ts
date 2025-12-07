import { Routes } from '@angular/router';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Home } from './home/home';
import { ReflectFg } from './reflect-fg/reflect-fg';
import { ReflectMt } from './reflect-mt/reflect-mt';
import { ReflectFinal } from './reflect-final/reflect-final';
export const routes: Routes = [
    {path: 'about', component: About},
    {path: '', component: Home},
    {path: 'projects', component: Projects},
    {path: 'appdev1', loadComponent: () => import('./appdev1/appdev1').then(m => m.Appdev1)}, 
    {path: 'reflect-fg', component: ReflectFg},
    {path: 'reflect-mt', component: ReflectMt},
    {path: 'reflect-final', component: ReflectFinal}
];
