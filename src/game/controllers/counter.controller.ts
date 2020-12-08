import { Counter } from "../class/entities/counter";

export class CounterController {
  private _counter: Counter;
  private _DOMCounterRef: HTMLElement;

  public get point(): number {
    return this._counter.point;
  }
  
  constructor(domRefernce: HTMLElement) {
    this._counter = new Counter();
    this._DOMCounterRef = domRefernce;
    this._DOMCounterRef.innerText = this._counter.point.toString();
  }

  public updateCounter() {
    this._counter.point += 1;
    this._DOMCounterRef.innerText = this._counter.point.toString();
  }
  
}
