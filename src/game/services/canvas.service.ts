import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../constants';

export class CanvasCleanerService {
    public static clean(canvas: HTMLCanvasElement) {
        canvas.height = CANVAS_HEIGHT;
        canvas.width = CANVAS_WIDTH;
    }
}