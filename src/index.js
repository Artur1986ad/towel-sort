
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let merged = [];
  if(matrix === undefined ){
    return merged;
  }else{
  for(let i = 0; i < matrix.length ; i++)
  {
    if(i%2 === 0)
    {
      merged = merged.concat(matrix[i]); 
    }else{
      merged = merged.concat(matrix[i].reverse()); 
    }
  }
  return merged;
}
}

