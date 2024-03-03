import { IPosition } from "./iposition"

export interface ISnake {
    start_position: IPosition
    end_position: IPosition
    get_end_cell(): IPosition
    
}