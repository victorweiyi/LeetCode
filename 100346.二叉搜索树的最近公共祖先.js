/*
 * @lc app=leetcode.cn id=100346 lang=javascript
 *
 * [剑指 Offer 68 - I] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p ||root ===q) return root
    if(p.val<root.val && q.val<root.val){
      return lowestCommonAncestor(root.left,p,q)
    }else if(q.val>root.val && p.val>root.val){
      return lowestCommonAncestor(root.right,p,q)
    }else{
        return root
    }
};
// @lc code=end

