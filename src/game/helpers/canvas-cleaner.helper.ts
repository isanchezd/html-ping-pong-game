import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../constants';

export class CanvasCleanerHelper {
    public static clean(canvas: HTMLCanvasElement) {
        canvas.height = CANVAS_HEIGHT;
        canvas.width = CANVAS_WIDTH;
    }
}