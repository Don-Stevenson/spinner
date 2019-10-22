const spinnerArray = ['\r|   ','\r/   ','\r-   ','\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];
//console.log(sentence);
let i = 0;

const spinner = function (array){
  if (i < array.length){
    for (const item of array){
      setTimeout(() =>{
        process.stdout.write(item);
      }, 100*i);  
      i++;  
    };
  };
};

spinner(spinnerArray);
