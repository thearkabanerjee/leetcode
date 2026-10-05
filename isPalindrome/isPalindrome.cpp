#include <iostream>
using namespace std;

class Solution {
public:
  bool isPalindrome(int x) {
    if (x < 0) {
      return false;
    } else {
      int a = 0;
      int b = x;

      while (x > 0) {
        a *= 10;
        a += x % 10;
        x /= 10;
      }

      return (b == a);
    }
  }
};
