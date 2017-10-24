function getComponent(){
  return import('lodash').then(_=>{
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  }).catch(err=>'An err ocured while loading component!');
}
getComponent().then(component=>{
  document.body.appendChild(component);
});
