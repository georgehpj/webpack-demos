require.ensure(['./a'], function(require) {
  var content = require('./a');
  
  var h1 = document.createElement('h1');
  h1.innerText = content;
  document.body.appendChild(h1);
});
