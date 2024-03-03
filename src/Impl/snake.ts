import { IPosition } from "../interfaces/iposition";
import { ISnake } from "../interfaces/isnake";

export class Snake implements ISnake {
    start_position: IPosition;
    end_position: IPosition;

    constructor(start_position: IPosition, end_position: IPosition) {
        this.start_position = start_position
        this.end_position = end_position
    }
    get_end_cell(): IPosition {
        return this.end_position
    }
}