import { IPosition } from "./iposition"

export interface ILadder {
    start_position: IPosition
    end_position: IPosition
    get_end_cell(): IPosition
}