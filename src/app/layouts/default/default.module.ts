import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { DashboardsComponent } from "src/app/modules/dashboards/dashboards.component";
import { RouterModule } from "@angular/router";
import { PostsComponent } from "src/app/modules/posts/posts.component";
import { UserProfileComponent } from "src/app/modules/user-profile/user-profile.component";

import { SharedModule } from "src/app/shared/shared.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { DashboardService } from "src/app/modules/dashboard.service";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardsComponent,
    PostsComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [DashboardService],
})
export class DefaultModule {}
