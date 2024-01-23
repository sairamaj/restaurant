const nums = [1,10,6,3,8,9]

// sort work on strings. as per string "10" is less than "6"
var sorted = nums.sort(function(a,b){
    return a-b
})
console.log(sorted)

var sorted = nums.sort( (a,b) => a-b)
console.log(sorted)

// decreasing order
const nums1 = [1,10,6,3,8,9]
console.log(nums1.sort((a,b)=> b-a));