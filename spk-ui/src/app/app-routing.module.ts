import { MarketRouterComponent } from './Components/token-market/market-router/market-router.component'
import { ViewProductComponent } from './Components/admin/view-product/view-product.component'
import { OrderDetailsComponent } from './Components/admin/order-details/order-details.component'
import { AddProductComponent } from './Components/admin/add-product/add-product.component'
import { AdminComponent } from './Components/admin/admin.component'
import { AdminRouterComponent } from './Components/admin/admin-router/admin-router.component'
import { ViewCartComponent } from './Components/user/view-cart/view-cart.component'
import { AccountSummeryComponent } from './Components/user/account-summery/account-summery.component'
import { UserRouterComponent } from './Components/user/user-router/user-router.component'
import { RegisterComponent } from './Components/register/register.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './Components/home/home.component'
import { UserComponent } from './Components/user/user.component'
import { TokenMarketComponent } from './Components/token-market/token-market.component'
import { LoginGuard } from './Guards/Login/login.guard'
import { ViewOrdersComponent } from './Components/admin/view-orders/view-orders.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    canActivate: [ LoginGuard ],
    component: RegisterComponent
  },
  {
    path: 'market',
    component: UserRouterComponent,
    children: [
      {
        path: '',
        component: UserComponent
      },
      {
        path: 'summary',
        component: AccountSummeryComponent
      },
      {
        path: 'cart',
        component: ViewCartComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminRouterComponent,
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: 'add-product',
        component: AddProductComponent
      },
      {
        path: 'order-details',
        component: OrderDetailsComponent
      },
      {
        path: 'view-products',
        component: ViewProductComponent
      },
      {
        path: 'view-orders',
        component: ViewOrdersComponent
      }
    ]
  },
  {
    path: 'exchange',
    component: MarketRouterComponent,
    canActivate: [ LoginGuard ],
    children: [
      {
        path: '',
        component: TokenMarketComponent
      }
    ]
  }
]


@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
