import { ICell } from "./icell"

export interface IBoard {
    game_board: ICell[]
    init_board(): void
    get_board(): ICell[]
    getCellAtPosition(position: number): ICell
}