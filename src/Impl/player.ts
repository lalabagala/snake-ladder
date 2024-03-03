import { IPlayer } from "../interfaces/iPlayer";
import { IPosition } from "../interfaces/iposition";
import { Position } from "./position";

export class Player implements IPlayer {
    player_name: string;
    current_position: IPosition;
    constructor(player_name: string) {
        this.player_name = player_name
        this.current_position = new Position(0)
    }
    update_position(position: IPosition) {
        this.current_position = position;
    }

    get_current_position(): IPosition {
        return this.current_position
    }

    set_new_position(new_position: IPosition) {
        console.log("Setting position to ", new_position)
        this.current_position = new_position
    }

}