class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    prefixProduct = (arr) => {
  const n = arr.length;
  const res = [];
  let prod = 1;
  for (let i = 0; i < n; i++) {
    res.push(prod);
    prod *= arr[i];
  }
  return res;
};

 suffixProduct = (arr) => {
  const n = arr.length;
  const res = [];
  let prod = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] = prod;
    prod *= arr[i];
  }
  return res;
};

    productExceptSelf(nums) {
         const len = nums.length;
  const pre = this.prefixProduct(nums);
  const suf = this.suffixProduct(nums);

  const res = new Array(len);
  for (let i = 0; i < len; i++) {
    res[i] = pre[i] * suf[i];
  }
  return res;
    }
}
