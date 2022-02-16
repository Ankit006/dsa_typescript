// quick sort element idea of where an item is sorted where 
// an item, all the element left side of an item is smaller then that and
// all the element right side of an item are greater than that

type pivotPos = number;

function swap(arr:number[],i:number,j:number ):void{
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


function partition(arr:number[],start:number,end:number):pivotPos{
    const pivot = arr[end];
    let pIndex = start;

    for(let x=start;x<end;x++){
        if(arr[x] <= pivot){
            swap(arr,x,pIndex);
            pIndex++;
        }
    }
    swap(arr,pIndex,end);
    return pIndex;

}


function quickSort(arr:number[],start:number = 0,end:number = arr.length - 1):number[]{
    if(start >= end) return arr;
    const pivotIndex = partition(arr,start,end);
    quickSort(arr ,start,pivotIndex - 1);
    quickSort(arr,pivotIndex+1,end);
    return arr;
}

console.log(quickSort([5,4,2,1,0,8,7,-1]))