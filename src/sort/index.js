export default {
  buddleSort(arr) {
    let len = arr.length, temp;
    for(let i = 0; i < len; i++) {
      for(let j = 0; j < len - i; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    } 
    return arr;
  }
}
