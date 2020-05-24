export class ContextState {
    private static instance: ContextState;
    public ctx: CanvasRenderingContext2D;

    public static getInstance(): ContextState {
        if (!ContextState.instance) {
            ContextState.instance = new ContextState();
        }

        return ContextState.instance;
    }
}