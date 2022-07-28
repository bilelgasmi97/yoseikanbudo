import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BodyComponent } from './body/body.component';
import { AuthGuard } from './guards/auth.guard';
import { ChatMessageComponent } from './pages/chat-message/chat-message.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MembersComponent } from './pages/members/members.component';
import { NewsComponent } from './pages/news/news.component';
import { ProductsComponent } from './pages/products/products.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { TournoisComponent } from './pages/tournois/tournois.component';
import { UserssComponent } from './pages/userss/userss.component';

const routes: Routes = [
    {path : '' , redirectTo:'/login' , pathMatch:'full'},
    {path: 'login' , component:LoginComponent},
    {path :'admin' , component:BodyComponent ,
     canActivate:[AuthGuard] ,
     children:[
      {path : 'admin' , redirectTo:'dashboard' , pathMatch:'full'},
      {path : 'dashboard' , component:DashboardComponent},
      {path : 'products' , component:ProductsComponent},
      {path : 'tournois' , component:TournoisComponent},
      {path : 'teams' , component:TeamsComponent},
      {path : 'news' , component:NewsComponent},
      {path : 'users' , component:UserssComponent},
      {path : 'members' , component:MembersComponent},
      {path : 'chat' , component:ChatMessageComponent},
    

    ]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
