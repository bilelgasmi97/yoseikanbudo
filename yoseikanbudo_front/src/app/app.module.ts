import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './auth/login/login.component';
import {MatSortModule} from '@angular/material/sort';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './pages/products/products.component';
import { ProductService } from './services/product.service';
import { AddproductComponent } from './pages/products/addproduct/addproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateproductComponent } from './pages/products/updateproduct/updateproduct.component';
import { TournoisComponent } from './pages/tournois/tournois.component';
import { AddtournementComponent } from './pages/tournois/addtournement/addtournement.component';
import { UpdatetournementComponent } from './pages/tournois/updatetournement/updatetournement.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { NewsComponent } from './pages/news/news.component';
import { UserssComponent } from './pages/userss/userss.component';
import { MembersComponent } from './pages/members/members.component';
import { TeamService } from './services/team.service';
import { NewsService } from './services/news.service';
import { ChatMessageComponent } from './pages/chat-message/chat-message.component';
import {MatListModule} from '@angular/material/list';
import { ChatService } from './services/chat.service';
import { ActivitesComponent } from './pages/activites/activites.component';
import { UpdateactivitesComponent } from './pages/activites/updateactivites/updateactivites.component';
import { AddactivitesComponent } from './pages/activites/addactivites/addactivites.component';
import { AddteamComponent } from './pages/teams/addteam/addteam.component';
import { UpdateteamComponent } from './pages/teams/updateteam/updateteam.component';
import { AddnewsComponent } from './pages/news/addnews/addnews.component';
import { UpdatenewsComponent } from './pages/news/updatenews/updatenews.component';
import { AdduserComponent } from './pages/userss/adduser/adduser.component';
import { UpdateuserComponent } from './pages/userss/updateuser/updateuser.component';
import { UsersService } from './services/user.service';
import { GalerieComponent } from './pages/galerie/galerie.component';
import { AddgalarieComponent } from './pages/galerie/addgalarie/addgalarie.component';
import { UpdategalarieComponent } from './pages/galerie/updategalarie/updategalarie.component';
import { EmailappComponent } from './pages/chat-message/emailapp/emailapp.component';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    BodyComponent,
    LoginComponent,
    ProductsComponent,
    AddproductComponent,
    UpdateproductComponent,
    TournoisComponent,
    AddtournementComponent,
    UpdatetournementComponent,
    TeamsComponent,
    NewsComponent,
    UserssComponent,
    MembersComponent,
    ChatMessageComponent,
    ActivitesComponent,
    UpdateactivitesComponent,
    AddactivitesComponent,
    AddteamComponent,
    UpdateteamComponent,
    AddnewsComponent,
    UpdatenewsComponent,
    AdduserComponent,
    UpdateuserComponent,
    GalerieComponent,
    AddgalarieComponent,
    UpdategalarieComponent,
    EmailappComponent,
    

    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpClientModule,
    MatSortModule,
    MatListModule,
    MatSelectModule,

   
  ],
  providers: [
    ProductService,
    TeamService,
    NewsService,
    ChatService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
