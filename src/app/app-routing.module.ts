import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
// import {HomeComponent} from "./pages/home/home.component";
import { InnovationComponent } from './pages/innovation/innovation.component';
import { LandingComponent } from './components/landing/landing.component';
// import {PrizesComponent} from "./pages/prizes/prizes.component";

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'prizes', component: InnovationComponent}
  // Add other routes if needed
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',

  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
