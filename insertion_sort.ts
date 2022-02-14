function insertionSort(arr:number[]):number[]{
    for(let i = 1;i<arr.length;i++){
        let current:number = arr[i];
        let pos:number = i;
        while(pos >=0 && arr[pos - 1] > current){
            arr[pos] = arr[pos - 1];
            pos --;
        }

        arr[pos] = current
    }
    return arr;
}



