#include <iostream>
#include <vector>
using namespace std;

void moveZeroes(vector<int> &nums) {
  int count = 0;
  cout << '[';
  for (int i = 0; i < nums.size(); i++) {

    if (nums[i] != 0) {
      if (i != nums.size() - 1) {
        cout << nums[i] << ',';
      }
    } else {
      count++;
    }
  }

  for (int i = 0; i < count; i++) {
    if (i != count - 1) {
      cout << 0 << ',';
    } else {
      cout << 0;
    }
  }

  cout << ']' << endl;
};

int main() {
  vector<int> nums = {0, 1, 2, 3, 0, 4};
  moveZeroes(nums);
  return 0;
}
