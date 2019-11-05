const fs = require('fs');

fs.readFile('./etc/hosts.txt', 'utf8', (err, data) => { 
    if (err) { 
     return console.log(err); 
    } 
  
    console.log(data); 
  });
  
//   Haviv, Amos Q.. MEAN Web Development - Second Edition . Packt Publishing. Kindle Edition. 