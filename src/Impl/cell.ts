import { ICell } from "../interfaces/icell";
import { ILadder } from "../interfaces/iladder";
import { IPosition } from "../interfaces/iposition";
import { ISnake } from "../interfaces/isnake";

export class Cell implements ICell {
    position: IPosition;
    snake: ISnake | null;
    ladder: ILadder | null;
    constructor(position: IPosition) {
        this.position = position
        this.snake = null
        this.ladder = null
    }
    is_snake_cell(): Boolean {
        if(this.snake) {
            return true
        }
        return false
    }
    is_ladder_cell(): Boolean {
        if(this.ladder) {
            return true
        }
        return false
    }
    get_snake(): ISnake | null {
        return this.snake
    }
    get_ladder(): ILadder | null {
        return this.ladder
    }

    set_snake(snake: ISnake): void {
        this.snake = snake
    }

    set_ladder(ladder: ILadder): void {
        this.ladder = ladder
    }
    
}