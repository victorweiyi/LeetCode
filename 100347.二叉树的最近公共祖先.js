/*
 * @lc app=leetcode.cn id=100347 lang=javascript
 *
 * [剑指 Offer 68 - II] 二叉树的最近公共祖先
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

/**先看P,Q其中有没有是根节点的，如果有，返回根节点
当！root时，返回root
如果不符合上述情况，递归查找左、右子树 */
var lowestCommonAncestor = function(root, p, q) {
        if(!root || root ===p || root ===q) return root;
        const left = lowestCommonAncestor(root.left,p,q)
        const right = lowestCommonAncestor(root.right,p,q)
        if(!left) return right
        if(!right) return left
        return root
};


// @lc code=end

