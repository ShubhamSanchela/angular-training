import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports : [
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class SharedModule { }
