import { IBoard } from "./iBoard";
import { IPlayer } from "./iPlayer";

export interface IGame {
    player_one: IPlayer;
    player_two: IPlayer;
    board: IBoard;
    get_board(): IBoard
}