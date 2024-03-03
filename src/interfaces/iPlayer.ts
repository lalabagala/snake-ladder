import { IPosition } from "./iposition"

export interface IPlayer {
    player_name: string
    current_position: IPosition
    get_current_position(): IPosition
    set_new_position(new_position: IPosition): void;
}