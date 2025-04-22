import { Component } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { Router } from '@angular/router';
import { Fornecedor } from '../fornecedor.model';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent {

  fornecedor: Fornecedor = {
    forNomeFantasia: '',
    forCnpj: '',
    forRazaoSocial: ''
  }

  //importando fornecedorService
  constructor(private fornecedorService: FornecedorService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createFornecedor(): void {
    this.fornecedorService.create(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor Criado!!!')
      this.router.navigate(['/fornecedors'])
    })
  }

  cancel(): void {
    this.router.navigate(['/fornecedors'])
  }
}
