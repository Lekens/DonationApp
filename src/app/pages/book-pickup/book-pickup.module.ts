import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { BookPickupPageRoutingModule } from './book-pickup-routing.module';

import { BookPickupPage } from './book-pickup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    BookPickupPageRoutingModule
  ],
  declarations: [BookPickupPage]
})
export class BookPickupPageModule {}
