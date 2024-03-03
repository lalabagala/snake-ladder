import { IBoard } from '../interfaces/iBoard';
import { ICell } from '../interfaces/icell';
import { Snake } from './snake';
import { Position } from './position';
import { Ladder } from './ladder';

export class ConstructSnakeLadder {
    board: IBoard
    constructor(board: IBoard) {
        this.board = board
    }
    public addSnakeAndLadderToBoard(snake_positions: string[], ladder_positions: string[]) {
       this.addSnakesToPoints(snake_positions)
       this.addLadderToPoints(ladder_positions)
       return this.board
    }


    private addSnakesToPoints(snake_positions: string[]) {
        for (let el of snake_positions) {
            let _position = el.split(' ')
            let _start = Number(_position[0])
            let _end = Number(_position[1])
            if (_start < _end) {
                throw new Error(`invalid input for snake ${_start}, ${_end}`)
            }
            this.addOneSnakeToPoint(_start, _end);
        }
    }

    private addLadderToPoints(ladder_positions: string[]) {
        for (let el of ladder_positions) {
            let _position = el.split(' ')
            let _start = Number(_position[0])
            let _end = Number(_position[1])
            if (_start > _end) {
                throw new Error(`invalid input for ladder ${_start}, ${_end}`)
            }
            this.addOneLadderToPoint(_start, _end);
        }
    }

    private addOneSnakeToPoint(_start: number, _end: number) {
        console.log("adding snake at ", _start);
        let _cell: ICell = this.board.getCellAtPosition(_start);
        let start_position = new Position(_start)
        let end_position = new Position(_end)
        let snake = new Snake(start_position, end_position)
        _cell.set_snake(snake);
    }

    private addOneLadderToPoint(_start: number, _end: number) {
        console.log("adding ladder at ", _start);
        let _cell: ICell = this.board.getCellAtPosition(_start);
        let start_position = new Position(_start)
        let end_position = new Position(_end)
        let ladder = new Ladder(start_position, end_position)
        _cell.set_ladder(ladder);
    }

}