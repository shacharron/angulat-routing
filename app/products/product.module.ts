import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from "@angular/router";
import { ProductResolverService } from "../services/product-resolver.service";
import { ProductEditTagsComponent } from "./product-edit/product-edit-tags.component";
import { ProductEditInfoComponent } from "./product-edit/product-edit-info.component";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'products',
        children: [
          {
              path :'' ,  component: ProductListComponent,
          },
          {
            path: ':id',
            component: ProductDetailComponent,
            resolve: { resolvedData: ProductResolverService }
          },
          {
            path: ':id/edit', component: ProductEditComponent,
            resolve: { resolvedData: ProductResolverService },
            children: [
              {path: '', redirectTo: 'info', pathMatch: 'full'},
              {path: 'tags', component: ProductEditTagsComponent},
              {path: 'info', component: ProductEditInfoComponent}
            ]
          }
        ]
      }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditTagsComponent,
    ProductEditInfoComponent
  ]
})
export class ProductModule { }
