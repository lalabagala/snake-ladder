import { IPosition } from "../interfaces/iposition"

export class Position implements IPosition {
    position_value: number
    constructor(position_value: number) {
        this.position_value = position_value
    }
    get_position_value(): number {
        return this.position_value
    }
} 