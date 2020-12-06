import { RADIUS_BALL } from "../constants";
import { RenderContext } from "../interfaces/render-context.interface";
import { Render } from "../interfaces/render.inteface";

export class BallRender implements Render {

    public render(context: RenderContext): void {
        context.ctx.fillStyle = context.color;
        context.ctx.arc(context.x, context.y, RADIUS_BALL, 0, 2 * Math.PI, false);
        context.ctx.fill();
    }
}