function parent() {
    const message = 'Hello Parent!'
     
     function child() { 
     console.log(message); 
     }
     
     return child;
 }
 
 const childFN = parent(); // Closure function
 childFN();

 
//  Haviv, Amos Q.. MEAN Web Development - Second Edition . Packt Publishing. Kindle Edition. 