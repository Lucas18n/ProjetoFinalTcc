import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { FormapagamentoCrudComponent } from './views/formapagamento-crud/formapagamento-crud.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';
import { FornecedorCreateComponent } from './component/fornecedor/fornecedor-create/fornecedor-create.component';
//import { FornecedorCreateComponent } from './component/fornecedor/fornecedor-create/fornecedor-create.component';


const routes: Routes = [
{
  path: "",
  component: HomeComponent
},

///////////////////////////products
{
  path: "products",
  component: ProductCrudComponent
},
{
  path: "products/create",
  component: ProductCreateComponent

},
///////////////////////////products FIM

///////////////////////////formaPagamento
{
  path: "formaPagamento",
  component: FormapagamentoCrudComponent
},
{
  path: "fornecedores/create",
  component: FornecedorCreateComponent
},
{
  path: "fornecedores",
  component: FornecedorCrudComponent
},
//{
  //path: "fornecedor/create",
 // component: FornecedorCreateComponent
//},
///////////////////////////fornecedores FIM

///////////////////////////Cliente
{
  path: "cliente",
  component: ClienteCrudComponent
},
{
  path: "cliente/create",
  component: ClienteCreateComponent
},
///////////////////////////Cliente FIM
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
