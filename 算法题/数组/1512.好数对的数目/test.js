// 1512. 好数对的数目
// 给你一个整数数组 nums 。
// 如果一组数字(i, j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。
// 返回好数对的数目。

// 示例 1：
// 输入：nums = [1, 2, 3, 1, 1, 3]
// 输出：4
// 解释：有 4 组好数对，分别是(0, 3), (0, 4), (3, 4), (2, 5) ，下标从 0 开始

// 示例 2：
// 输入：nums = [1, 1, 1, 1]
// 输出：6
// 解释：数组中的每组数字都是好数对

// 示例 3：
// 输入：nums = [1, 2, 3]
// 输出：0

var numIdenticalPairs = function (nums) {
	const arrMap = nums.map((ele, index) => {
		const arr = nums.filter((num, index2) => num === ele && index2 > index);
		return arr.length;
	});
	return arrMap.reduce((prev, cur) => prev + cur);
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))

//其他解法 
//双游标
//减少了一次时间复杂度
// var numIdenticalPairs = function (nums) {
// 	if (!nums.length) return 0
// 	let count = 0
// 	let j = 0
// 	for (let i = 0; i < nums.length; j++) {
// 		if (j === nums.length) i++, j = 0
// 		i < j && nums[j] === nums[i] && count++
// 	}
// 	return count
// };
