function binarySearch(arr:number[],name:number){
    let start:number = 0;
    let end:number = arr.length - 1;   

    while(start <= end){
        let mid:number = Math.floor((start+end) / 2);
        if(arr[mid]  === name){
            return mid;
        }
        if(name < arr[mid]){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}
