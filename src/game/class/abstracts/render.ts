import { RenderContext } from "../../interfaces/render-context.interface";

export abstract class Render  {
  public abstract render(context: RenderContext): void;
}
