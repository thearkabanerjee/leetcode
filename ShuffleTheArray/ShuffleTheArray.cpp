#include <array>
#include <iostream>
using namespace std;

int main() {
  array<int, 6> nums = {2, 5, 1, 3, 4, 7};
  int n = 3;
  for (int i = 0; i < n; i++) {
    cout << nums[i] << " ";
    cout << nums[i + n] << " ";
  }

  cout << endl;
  return 0;
}
