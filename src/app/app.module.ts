import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddComponent } from './components/add/add.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { EditComponent } from './components/edit/edit.component';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavbarComponent,
    FooterComponent,
    AddComponent,
    TableListComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
