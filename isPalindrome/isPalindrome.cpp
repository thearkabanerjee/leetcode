class Solution {
public:
  bool isPalindrome(int x) {
    if (x < 0) {
      return false;
    } else {
      long long a = 0;
      long long b = x;

      while (x > 0) {
        a *= 10;
        a += x % 10;
        x /= 10;
      }

      return (b == a);
    }
  }
};
