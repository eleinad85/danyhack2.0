import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfiloComponent } from "./profilo/profilo.component";

const routes: Routes = [{ path: "profilo", component: ProfiloComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
