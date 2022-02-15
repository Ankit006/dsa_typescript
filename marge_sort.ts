function margeArray(firstArr: number[], secondArr: number[]): number[] {
  const newArr: number[] = [];
  let firstArrPos:number = 0;
  let secondArrPos:number = 0;

  while(firstArrPos < firstArr.length && secondArrPos < secondArr.length){
      if(firstArr[firstArrPos] < secondArr[secondArrPos]){
          newArr.push(firstArr[firstArrPos]);
          firstArrPos++;
      }else{
          newArr.push(secondArr[secondArrPos]);
          secondArrPos++
      }
  }

  while(firstArrPos < firstArr.length){
      newArr.push(firstArr[firstArrPos])
      firstArrPos++
  }

  while(secondArrPos < secondArr.length){
      newArr.push(secondArr[secondArrPos])
      secondArrPos++
  }
  return newArr;
}



function margeSort(arr:number[]):number[]{
    if(arr.length <= 1) return arr;
    const midPos = Math.floor(arr.length/2);

    const leftArr =  margeSort(arr.slice(0,midPos));
    const rightArr = margeSort(arr.slice(midPos));

    return margeArray(leftArr,rightArr);

}


console.log(margeSort([8,1,3,6,0,7,3]))

