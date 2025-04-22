import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Fornecedor } from './fornecedor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  baseUrl = "http://localhost:8080/fornecedor"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X",{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Fornecedor): Observable<Fornecedor>{
    return this.http.post<Fornecedor>(this.baseUrl, product)
  }

  read(): Observable<Fornecedor[]>{
    return this.http.get<Fornecedor[]>(this.baseUrl)
  }

  readById(id: string): Observable<Fornecedor>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Fornecedor>(url)
  }

  update(product: Fornecedor): Observable<Fornecedor>{
    const url = `${this.baseUrl}/${product.forId}`
    return this.http.put<Fornecedor>(url, product)
  }

  delete(id: number): Observable<Fornecedor>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Fornecedor>(url)
  }
}
