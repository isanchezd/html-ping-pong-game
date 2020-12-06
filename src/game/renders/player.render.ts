import { PLAYER_HEIGHT, PLAYER_WIDTH } from "../constants";
import { RenderContext } from "../interfaces/render-context.interface";
import { Render } from "../interfaces/render.inteface";

export class PlayerRender implements Render {

    public render(context: RenderContext): void {
        context.ctx.fillStyle = context.color;
        context.ctx.fillRect(context.x, context.y, PLAYER_WIDTH, PLAYER_HEIGHT);
    }
}