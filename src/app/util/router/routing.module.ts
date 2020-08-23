import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteHelperService} from "./routehelper.service";
import {DashboardComponent} from "../../dashboard/dashboard.component";
import {AppComponent} from "../../app.component";

const routes: Routes = [
    // {path: '', pathMatch : 'full', component: AppComponent},
    {path: 'dashboard-component', component: DashboardComponent,  data: {title: 'Dashboard'} }
    // {path: '**', redirectTo: '/not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [RouteHelperService]
})
export class RoutingModule {
}
