import { ErrorHandler } from "@angular/core";


export class GlobalErrorHandler implements ErrorHandler {
  handleError(error) {
    console.log(error);
    alert('An unexpected error occurred!');
  }
}