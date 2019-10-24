import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ListaProdutosPage } from './lista-produtos.page';
import { SharedModule } from '../../core/shared/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ListaProdutosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaProdutosPage]
})
export class ListaProdutosPageModule {}
