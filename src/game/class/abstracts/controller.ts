import { EventEmitter } from '../../interfaces/event-emitter.interface';

export abstract class Controller implements EventEmitter {
    public emitEvent(eventName: string, eventDetail: CustomEventInit){
        const EVENT = new CustomEvent<any>(eventName, eventDetail);
        document.dispatchEvent(EVENT);
    }
}