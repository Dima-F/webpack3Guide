import _ from 'lodash';
import './style.css';
import Snake from './snake.jpeg';


function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  //adding image
  var mySnake = new Image();
  mySnake.src = Snake;
  element.appendChild(mySnake);
  return element;
}

document.body.appendChild(component());
