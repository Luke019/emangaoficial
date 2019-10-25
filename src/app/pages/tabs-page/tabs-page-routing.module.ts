import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'produtos',
        children: [
          {
            path: '',
            loadChildren: '../../produtos/lista-produtos/lista-produtos.module#ListaProdutosPageModule'
          }
        ]
      },
      {
        path: 'pedidos',
        children: [
          {
            path: 'carrinho/novo-item/:key',
            loadChildren: '../../pedidos/form-item-pedido/form-item-pedido.module#FormItemPedidoPageModule'
          },
          {
            path: 'carrinho',
            loadChildren: '../../pedidos/lista-item-pedido/lista-item-pedido.module#ListaItemPedidoPageModule'
          }
        ]
      },
      // {
      //   path: 'pedidos',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: '../../pedidos/lista-item-pedido/lista-item-pedido.module#ListaItemPedidoPageModule'
      //     }
      //   ]
      // },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: '../map/map.module#MapModule'
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/produtos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/produtos',
    pathMatch: 'full'
  }
  // {
  // path: 'tabs',
  //   component: TabsPage,
  //   children: [
  //     {
  //       path: 'produtos',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: '../produtos/lista-produtos/lista-produtos.module#ListaProdutosPageModule'
  //         }
  //       ]
  //     },
  //     {
  //       path: 'perfil',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: '../usuarios/perfil/perfil.module#PerfilPageModule'
  //         }
  //       ]
  //     },
  //     {
  //       path: '',
  //       redirectTo: '/tabs/produtos',
  //       pathMatch: 'full'
  //     }
  //   ]
  // },
  // {
  //   path: 'usuarios',
  //   children: [
  //     {
  //       path: 'enderecos',
  //       loadChildren: '../enderecos/lista-endereco/lista-endereco.module#ListaEnderecoPageModule'
  //     },
  //     {
  //       path: 'endereco/novo',
  //       loadChildren: '../enderecos/form-endereco/form-endereco.module#FormEnderecoPageModule'
  //     },
  //     {
  //       path: 'enderecos/editar/:key',
  //       loadChildren: '../enderecos/form-endereco/form-endereco.module#FormEnderecoPageModule'
  //     }
  //   ]
  // },
  // {
  //   path: 'pedido',
  //   children: [
  //     {
  //       path: 'carrinho/novo-item/:key',
  //       loadChildren: '../pedidos/form-item-pedido/form-item-pedido.module#FormItemPedidoPageModule'
  //     },
  //     {
  //       path: 'carrinho',
  //       loadChildren: '../pedidos/lista-item-pedido/lista-item-pedido.module#ListaItemPedidoPageModule'
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   redirectTo: '/tabs/produtos',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

