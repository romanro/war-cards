import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from '../../environments/environment';
import { NewDescResponse } from '../models';
import { ErrorHandlingService } from './error-handling.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private error: ErrorHandlingService) {}

  API_URL = environment.API_URL;

  getNewDesks(desks: number = 1) {
    return this.http
      .get<NewDescResponse>(
        `${this.API_URL}deck/new/shuffle/?deck_count=${desks}`
      )
      .pipe(catchError(this.error.handleHttpError));
  }
}
