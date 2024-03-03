import { IBoard } from "../interfaces/iBoard";
import { IPlayer } from "../interfaces/iPlayer";
import { IGame } from "../interfaces/igame";
import { Board } from "./board";
import { Position } from "./position";

export class Game implements IGame {
    player_one: IPlayer;
    player_two: IPlayer;
    board: IBoard;
    current_chance: IPlayer
    winner: IPlayer | null;
    constructor(player_one: IPlayer, player_two: IPlayer, board: Board) {
        this.player_one = player_one;
        this.player_two = player_two;
        this.board = board
        this.current_chance = player_one;
        this.winner = null
    }

    get_board(): IBoard {
        return this.board;
    }

    public roll_dice(): Boolean {
        console.log("current player is ", this.current_chance.player_name)
        const dice_no = this.getRandomNumber(1, 6);
        console.log("dice no ", dice_no)
        this.move_current_player_to_position(dice_no);
        console.log("moved player to ", this.current_chance.get_current_position());
        this.check_snake_at_cell_and_migrate();
        this.check_ladder_at_cell_and_migrate();
        console.log("players new position ", this.current_chance.get_current_position());
        let winner_val = this.check_winner()
        this.switch_turn()
        return winner_val
    }

    private getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    private check_winner(): Boolean {
        let current_position = this.current_chance.get_current_position()
        let position_value = current_position.get_position_value()
        if(position_value == 100) {
            this.winner = this.current_chance
            return true
        } else {
            return false
        }
    }

    public get_winner() {
        return this.winner
    }
    
    private switch_turn() {
        if(this.current_chance==this.player_one) {
            this.current_chance=this.player_two
        } else {
            this.current_chance = this.player_one
        }
    }

    private move_current_player_to_position(delta: number) {
        let current_position = this.current_chance.get_current_position()
        let current_pos_int = current_position.get_position_value()
        let new_position_int = current_pos_int+delta
        if(new_position_int > 100) {
            new_position_int = 100
        }
        let new_position = new Position(new_position_int)
        this.current_chance.set_new_position(new_position);
    }

    private check_snake_at_cell_and_migrate() {
        let current_pos = this.current_chance.get_current_position();
        let cell = this.board.getCellAtPosition(current_pos.get_position_value())
        if(cell.is_snake_cell()) {
            let snake = cell.get_snake();
            if(snake) {
                // console.log("got snake at ", cell)
                let end_position = snake.get_end_cell();
                this.current_chance.set_new_position(end_position)
                return true
            }
        }
        return false
    }

    private check_ladder_at_cell_and_migrate(): Boolean {
        let current_pos = this.current_chance.get_current_position();
        let cell = this.board.getCellAtPosition(current_pos.get_position_value())
        if(cell.is_ladder_cell()) {
            let ladder = cell.get_ladder();
            if(ladder) {
                // console.log("got ladder at ", cell, ladder, ladder.get_end_cell())
                let end_position = ladder.get_end_cell();
                this.current_chance.set_new_position(end_position);
                // console.log("current position ", this.current_chance.player_name, this.current_chance.get_current_position())
                return true
            }
        }
        return false
    }
    
}