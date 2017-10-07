import _ from 'lodash';
import './style.css';
import Snake from './snake.jpeg';
import Data from './data.xml';


function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // adding image
  var mySnake = new Image();
  mySnake.src = Snake;
  element.appendChild(mySnake);
  console.log(Data);
  return element;
}

document.body.appendChild(component());
