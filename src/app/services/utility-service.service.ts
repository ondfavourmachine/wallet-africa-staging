import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  constructor(
    private _snackBar: MatSnackBar, 
    ) { }


    errorSnackBar(message: string, action: string = ''){
      const config: MatSnackBarConfig = {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: "error-snackBar",
        duration: 3000
      }
      this._snackBar.open(message, action, config);
    }
  
    successSnackBar(message: string, action: string = '', duration?: number): void{
      const config: MatSnackBarConfig = {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: "success-snackbar",
        duration: duration || 3000
      }
      this._snackBar.open(message, action, config);
    }
}
