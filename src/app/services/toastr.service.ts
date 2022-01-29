import { Injectable } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  success(message: string){
    toastr.success(message);
   }
   warning(message: string){
     toastr.warning(message);
   }
   error(message: string){
     toastr.error(message);
   }
}
