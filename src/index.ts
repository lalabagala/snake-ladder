import * as fs from 'fs';
import { Game } from './Impl/game';
import { Player } from './Impl/player';
import { Board } from './Impl/board';
import { ConstructSnakeLadder } from './Impl/constructSnakeAndLadder';

console.log("starting game ");


  const data = fs.readFileSync('./src/input.txt', 'utf8');
  let data_arr = data.split('\n')
  console.log(data_arr);
  let snake_count = Number(data_arr.splice(0,1))
  let snake_coordinates = data_arr.splice(0,snake_count)
  let ladder_count = Number(data_arr.splice(0,1))
  let ladder_coordinates = data_arr.splice(0, ladder_count);
  let player_count = Number(data_arr.splice(0,1));
  console.log({snake_coordinates, ladder_coordinates})
  let player_one_name = data_arr[0]
  let player_two_name = data_arr[1]
  let player_one = new Player(player_one_name)
  let player_two = new Player(player_two_name)
  let board = new Board();
  let constructSnakeAndLadder = new ConstructSnakeLadder(board)
  board = constructSnakeAndLadder.addSnakeAndLadderToBoard(snake_coordinates, ladder_coordinates)
  let game = new Game(player_one, player_two, board)

  setInterval(()=> {
    let win = game.roll_dice();
    if(win) {
      let winner = game.get_winner()
      console.log(winner?.player_name + " is the winner ")
      process.exit(0)
    }
  }, 1000)
