let ffindMaxSlidingWindow = function(arr, windowSize) {
    let result = [];
    
    if(arr.length == 0) {
      return result;
    }
    
    if (windowSize > arr.length) {
      return result;
    }
    // let array1 = [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67];  
    // size = 3;

    let window_ = [];
    //find out max for first window
    for (let i = 0; i < windowSize; i++) {
      while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
        window_.pop();
      } 
      //window = [0,2]
      window_.push(i);
    }
    
    result.push(arr[window_[0]]);
    //result = [10]
    //windowsize = 3;
    for (let i = windowSize; i < arr.length; i++) {
      // remove all numbers that are smaller than current number
      // from the tail of list
      //i = 16;
      //window_ = [15]
      while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
        window_.pop();
        //window = []
      }
      
      //remove first number if it doesn't fall in the window anymore
      if (window_.length > 0 && (window_[0]  <= i - windowSize)) {
        window_.shift();
        //window = []
      }
      
      window_.push(i);
      //window = [15]
      //result = [10,9,23,23,34,56,67,67,67,-1,-2,9,10,34,67]
      result.push(arr[window_[0]]);
    } 
    return result;
  };
  
// let array1 = [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67];  
//   console.log("Max = " + ffindMaxSlidingWindow(array, 3));
  
let array1 = [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67];  
console.log("Max = " + ffindMaxSlidingWindow(array1, 3));