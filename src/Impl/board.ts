import { IBoard } from "../interfaces/iBoard";
import { ICell } from "../interfaces/icell";
import { Cell } from "./cell";
import { Position } from "./position";

export class Board implements IBoard {
    game_board: ICell[] = [];
    constructor() {
        this.init_board()
    }
    init_board(): void {
        for (let i=0; i<100;i++) {
            let position = new Position(i)
            this.game_board[i] = new Cell(position);
        }
    }
    get_board(): ICell[] {
        return this.game_board
    }

    getCellAtPosition(position: number) {
        return this.game_board[position]
    }
    
}