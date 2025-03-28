
// // function secondLargestOPtimesed(arr) {
// //     let largest = Number.NEGATIVE_INFINITY;
// //     let secondLargest = Number.NEGATIVE_INFINITY;

// const { ChildProcess } = require("child_process");



// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] > largest) {
// //             secondLargest = largest;
// //             largest = arr[i];
// //         } else if (arr[i] > secondLargest && arr[i] !== largest) {
// //             secondLargest = arr[i];
// //         }
// //     }

   
// //     return secondLargest === Number.NEGATIVE_INFINITY ? null : secondLargest;
// // }

// // console.log(secondLargestOPtimesed([12, 35, 1, 10, 24, 1])); 
 
//  //Time complexity=>O(n)
//  //space complexity=>o(1)




// // nums=[1,2,3,4,5,6,7]
// // k=3
// // function rotateArray(nums,k){
// //      let size = nums.length;
// //      if(size<k){
// //         k=k%size;
// //      }
// //      const rotated=nums.splice(size-k,size);//[5,6,7]
// //      nums.unshift(...rotated)
// //      return nums;
// // }
// // console.log(rotateArray([1,2,3,4,5,6,7],3));

// //Time complexity=>O(n)


// // Optimised Approach

// //[1,2,3,4,5,6,7]=>[7,6,5,4,3,2,1]=>[5,6,7,4,3,2,1]=>[5,6,7,1,2,3,4]
// // function rotateArrayy(nums, k) {
// //     let size = nums.length;
// //     if (size < k) {
// //         k = k % size;
// //     }

// //     reverse(nums, 0, size - 1);  // O(n) - Reverse the entire array
// //     reverse(nums, 0, k - 1);     // O(k) - Reverse the first k elements
// //     reverse(nums, k, size - 1);  // O(n-k) - Reverse the remaining n-k elements

// //     return nums;
// // }

// // Time Complexity: O(n)
// // Space Complexity: O(1)

// // function reverse(nums, left, right) {
// //     while (left < right) {
// //         const temp = nums[left];
// //         nums[left++] = nums[right];
// //         nums[right--] = temp;
// //     }
// // }

// // console.log(rotateArrayy([1, 2, 3, 4, 5, 6, 7], 3)); 
// // Output: [5, 6, 7, 1, 2, 3, 4]



// let arr = [1, 0, 2, 0, 3, 0];
// let result = new Array(arr.length);
// let index = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//         result[index] = arr[i];
//         index++;
//     }
// }
// while (index < arr.length) {
//     result[index] = 0;
   
//     index++;
// }

// // console.log(result); // Output: [1, 2, 3, 0, 0, 0]



// // Remove Duplicates from Sorted Array

// function removeDuplicate(nums){
//     for(let i=0;i<nums.length-1;i++){ // O(n)
//         if(nums[i]===nums[i+1]){
//             nums.splice(i+1,1); // O(1)
//             i--;
//         }
//     }
//     return nums.length
// }

// // Time Complexity: O(n)
// // Space Complexity: O(1)

// // console.log(removeDuplicate([0,0,1,1,2,2,3,3,4]));


// function removeDuplicateNew(nums){
//     if(nums.length===0)return 0
//     let i=0

//     for(let j=1;j<nums.length;j++){
//         if(nums[i]!=nums[j]){
//             i++;
//             nums[i]=nums[j]
//         }
//     }
//     return i+1
// }
// // console.log(removeDuplicateNew([0,0,1,1,2,2,3,3,4]));

// // reversing an array

// let array=[1,2,3,4,5]
// let length=array.length;
// let reversedarr=new Array(length)
// for(let i=0;i<array.length;i++){
//     reversedarr[length-1-i]=array[i]
// }
// // console.log(reversedarr);

// // merging two arrays

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let merge=new Array(arr1.length+arr2.length)
// let ind=0
// for(let i=0;i<arr1.length;i++){
//     merge[ind]=arr1[i]
//     ind ++
// }
// for(let i=0;i<arr2.length;i++){
//     merge[ind]=arr2[i]
//     ind ++
// }
// // console.log(merge);

// // finding max/min

// let ar = [3, 1, 7, 4, 9, 2, 5];
// let max=ar[0]
// let min=ar[0]
// for(let i=1;i<ar.length;i++){
//     if(ar[i]>max){
//         max=ar[i]
//     }
//     if(ar[i]<min){
//         min=ar[i]
//     }
// }
// // console.log(max);
// // console.log(min);















// //linear search 

// const linearSearch=(nums,target)=>{
//     for(let i=0;i<nums.length;i++){ //O(n)
//         if(target===nums[i]){
//             return i
//         }
        
//     }
//     return -1
// }
// //Time complexity=>O(n)
// // space complexity=>O(1)
// // console.log(linearSearch([4,5,6,7,0,1,2],0));
// // console.log(linearSearch([4,5,6,7,0,1,2],3));


// // Global linear search 

// const GlobalLinearSearch =(nums,target)=>{
//     const result=[]
//     for(let i=0;i<nums.length;i++){
//         if(target===nums[i]){
//             result.push(i)
//         }
//     }
//     if(result.length===0)return -1
//     return result;
// }


// //Time complexity=>O(n)
// // space complexity=>O(n)

// // console.log(GlobalLinearSearch([4,5,0,7,0,1,2],0));


// // Binary search


// function search(nums,target){
//     let start=0;
//     let end=nums.length-1

//     while(start<=end){
//         let middle=Math.floor((start+end)/2);

//         if(nums[middle]===target){
//             return middle;
//         }else if(nums[middle]<target){
//             start=middle +1
//         }else{
//             end=middle -1
//         }
//     }
//     return -1
// }

// //Time complexity=>O(logn)
// // space complexity=>O(1)

// // console.log(search([-1,0,3,11,9,12],9));
// // console.log(search([-1,0,3,11,9,12],39));


// function findKthPositive(arr,k){
//     let count =0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<=k+count){
//             count ++
//         }
//     }//count =0=2<=5+0=5
//     return k + count //11=5+4=9
//  }
// // console.log(findKthPositive([2,3,4,7,11],5));



// function maximumCount(nums) {
//     return Math.max(upperBound(nums), lowerBound(nums));
//   }
//   function upperBound(nums) {
//     let low = 0,
//       high = nums.length - 1;
  
//     while (low < high) {
//       let mid = Math.ceil((low + high) / 2);
//       if (nums[mid] < 0) low = mid;
//       else high = mid - 1;
//     }
  
//     return nums[0] >= 0 ? 0 : low + 1;
//   }
  
//   function lowerBound(nums) {
//     let low = 0,
//       high = nums.length - 1;
  
//     while (low < high) {
//       let mid = Math.floor((low + high) / 2);
//       if (nums[mid] > 0) high = mid;
//       else low = mid + 1;
//     }
  
//     return nums[nums.length - 1] <= 0 ? 0 : nums.length - low;
//   }













  class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size;
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size;
    }
    
    set(key,value){
        const index=this.hash(key)
        const bucket=this.table[index];
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            const sameKeyItem=bucket.find(item=>item[0]===key);
            if(sameKeyItem){
                sameKeyItem[1]=value;
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index=this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            const sameKeyItem=bucket.find(item=>item[0]===key)
            if(sameKeyItem){
             return   sameKeyItem[1]
            }
        }
        return undefined
    }
    
    remove(key){
        const index=this.hash(key);
        const bucket=this.table[index]
        if(bucket){
            const sameKeyItem=bucket.find(item=>item[0]===0)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

let table=new HashTable(7);


table.set("a","Anand")
table.set("b","AMAl")
table.set("c","navya")

console.log(table.get("a"))

table.display()

















