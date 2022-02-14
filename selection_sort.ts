// time complexity O(n^2)

function selectionSort(arr:number[]){
    for(let i = 0;i<arr.length - 1;i++){
        for(let j = i +1 ; j<arr.length;j++){
            if(arr[i] > arr[j]){
                const temp:number = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }
    return arr;
}

console.log(selectionSort([5,2,1,4,1,3,0,-1]))