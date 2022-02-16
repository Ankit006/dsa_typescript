function bubbleSort(arr:number[]){
    let noSwap = true;
  for(let i = arr.length - 1;i>0;i--){
      noSwap = true;
      for(let j = 0;j<= i -1;j++){
          if(arr[j] > arr[j+1]){
              const temp:number = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp
              noSwap = false;
          }
      }
      if(noSwap) break;
  }
  return arr;
}


