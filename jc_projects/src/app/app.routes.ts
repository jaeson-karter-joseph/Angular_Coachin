import { Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { ExampleComponent } from './components/example/example.component';
import { ServiceOneComponent } from './components/servicesComponents/service-one/service-one.component';
import { ServicetwoComponent } from './components/servicesComponents/servicetwo/servicetwo.component';
import { RouteParamsComponent } from './route-params/route-params.component';

export const routes: Routes = [
    {
        path: 'parentChild',
        component: ParentComponent,
    },
    {
        path: 'pipes',
        component: ExampleComponent
    },
    {
        path: 'servicesOne',
        component: ServiceOneComponent
    },
    {
        path: 'servicesTwo',
        component: ServicetwoComponent
    },
    {
        path: 'param/:data1/:data2',
        component: RouteParamsComponent
    }
];
