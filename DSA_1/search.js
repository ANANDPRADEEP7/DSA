
    // linear-search.js

    const linearSearch = (nums, target) => {
      for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
          return i;
        }
      }
      return -1;
    };

    //-binary-search.js

    
function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

// Time Complexity  - O(logn)
// Space Complexity - O(1)
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 69));


    //-binary-search.js  recursive implementation 
 


function BinarySearch(nums,target,start=0,end=nums.length-1){
    if(start>end){
        return -1
    }
    let middle=Math.floor((start+end)/2)
    if(nums[middle]===target){
        return middle
    }else if(nums[middle]<target){
        return BinarySearch(nums,target,middle+1,end)
    }else{
        return BinarySearch(nums,target,start,middle-1)
    }
}

