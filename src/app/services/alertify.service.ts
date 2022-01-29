import { Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs' ;
import { ToastrModule } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message: string){
   Toastr.success(message);
  }
  warning(message: string){
    toastr.warning(message);
  }
  error(message: string){
    alertyfy.error(message);
  }
}
