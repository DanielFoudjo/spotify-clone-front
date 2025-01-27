import { Injectable } from '@angular/core';
import { ToastInfo } from './model/toast-info.model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: ToastInfo[] = [];

  show(body: string, type: "SUCCESS" | "DANGER"): void {
    let className;
    if(type === "DANGER") {
      className = "bg-danger text-white";
    } else {
      className = "bg-success text-white";
    }
    const toastInfo: ToastInfo = {body, className};
    this.toasts.push(toastInfo);
  }

  constructor() { }

  remove(toast: ToastInfo): void {
    this.toasts = this.toasts.filter(toastToCompare => toastToCompare !== toast);
  }
}
