export interface EventEmitter {
    emitEvent(eventName: string, eventObject: CustomEventInit): void;
}