#include <vector>
using namespace std;

class Solution {
public:
  vector<int> shuffle(vector<int> &nums, int n) {
    vector<int> nums2;

    for (int i = 0; i < n; i++) {
      nums2.push_back(nums[i]);
      nums2.push_back(nums[i + n]);
    }

    return nums2;
  }
};
