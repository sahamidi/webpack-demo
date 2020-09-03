import myName from "./myName"

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = myName("Sal")
    return element;
  }
  
  document.body.appendChild(component());
 