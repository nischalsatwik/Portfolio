import Mindgame from "./Games and Quiz/Mindgame"
import NumberGame from "./Games and Quiz/NumberGame"
import Tictactoe from "./Games and Quiz/Tictactoe"
import Carousel from 'react-bootstrap/Carousel';
export default function Game(){
    return(<div className="game">
    <Carousel interval={null} className="car" >
        <Carousel.Item>
        <NumberGame></NumberGame>
        </Carousel.Item>
        <Carousel.Item>
        <Tictactoe></Tictactoe>
        </Carousel.Item>
        <Carousel.Item>
        <Mindgame></Mindgame>
        </Carousel.Item>
      </Carousel>
    </div>)
}