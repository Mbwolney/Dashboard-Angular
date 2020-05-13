import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { DashboardsComponent } from "./modules/dashboards/dashboards.component";
import { PostsComponent } from "./modules/posts/posts.component";
import { UserProfileComponent } from "./modules/user-profile/user-profile.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: DashboardsComponent,
      },
      {
        path: "posts",
        component: PostsComponent,
      },
      {
        path: "user-profile",
        component: UserProfileComponent,
      },
      { path: "**", redirectTo: "/", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
