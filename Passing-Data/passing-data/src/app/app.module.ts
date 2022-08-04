import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentInfoComponent } from './students/student-info.component';
import { StudentListComponent } from './students/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
