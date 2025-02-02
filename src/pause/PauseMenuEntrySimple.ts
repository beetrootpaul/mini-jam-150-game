import { $d, BpxVector2d } from "@beetpx/beetpx";
import { c } from "../globals";
import { PauseMenuEntry } from "./PauseMenuEntry";

export class PauseMenuEntrySimple implements PauseMenuEntry {
  constructor(text: string, onExecute: () => void) {
    this._text = text;
    this._onExecute = onExecute;
    this._size = $d.measureText(text).wh;
  }

  private readonly _text: string;
  private readonly _onExecute: () => void;
  private readonly _size: BpxVector2d;
  private _isFocused: boolean = false;

  get size(): BpxVector2d {
    return this._size;
  }

  update(isFocused: boolean): void {
    this._isFocused = isFocused;
  }

  draw(xy: BpxVector2d): void {
    $d.text(this._text, xy, this._isFocused ? c.redYellow2 : c.blueGreen3);
  }

  execute(): void {
    this._onExecute();
  }
}
