import { ILadder } from "../interfaces/iladder"
import { IPosition } from "../interfaces/iposition"

export class Ladder implements ILadder {
    start_position: IPosition
    end_position: IPosition
    
    constructor(start_position: IPosition, end_position: IPosition) {
        this.start_position = start_position
        this.end_position = end_position
    }
    get_end_cell(): IPosition {
        return this.end_position
    }
}