import {Injectable} from "@angular/core";
import {Router, Routes} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class RouteHelperService {

    constructor(public router: Router){}

    getRoutes() {
        return this.router.config;
    }

    // configureRoutes(routeVo: RouteVo) {
    //     // this.router.resetConfig([{ path: "somePath", component: null} ]);
    //     this.router.config.push({ path: 'somePath', component: routeVo.component });
    //     this.routes.push({ path: routeVo.link, outlet: routeVo.title});
    //
    // }
}