import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isViisible$ = new BehaviorSubject<boolean>(false)

  open() {
    this.isViisible$.next(true)
  }

  close() {
    this.isViisible$.next(false)
  }

  constructor() { }
}
