/*
 * @lc app=leetcode.cn id=100343 lang=javascript
 *
 * [剑指 Offer 62] 圆圈中最后剩下的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    let ans = 0;
    for (let i = 2; i <= n; i++) {
      ans = (ans + m) % i;
    }
    return ans;
};
// @lc code=end

