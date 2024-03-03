import { ILadder } from "./iladder"
import { IPosition } from "./iposition"
import { ISnake } from "./isnake"

export interface ICell {
    position: IPosition
    snake: ISnake | null
    ladder?: ILadder | null
    is_snake_cell(): Boolean
    is_ladder_cell():Boolean
    get_snake(): ISnake | null
    get_ladder():ILadder | null
    set_snake(snake: ISnake): void
    set_ladder(ladder: ILadder): void
}