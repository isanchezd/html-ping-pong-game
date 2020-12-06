import { EventEmitter } from '../../interfaces/event-emitter.interface';
import { ContextState } from '../../state/context.state';

export abstract class Controller implements EventEmitter {
    get ctx(): CanvasRenderingContext2D {
        return ContextState.getInstance().ctx;
    }

    public emitEvent(eventName: string, eventDetail: CustomEventInit){
        const EVENT = new CustomEvent<any>(eventName, eventDetail);
        document.dispatchEvent(EVENT);
    }
}