import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointURI } from '@core/models';
import { environment } from '@environment/environment';
import { catchError } from 'rxjs';
import { ErrorHandlingService } from './error-handling.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private error: ErrorHandlingService) {}

  API_URL = environment.API_URL;

  get<T>(url: EndPointURI) {
    return this.http
      .get<T>(`${this.API_URL}${url}`)
      .pipe(catchError(this.error.handleHttpError));
  }
}
