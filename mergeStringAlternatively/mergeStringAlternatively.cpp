#include <iostream>
using namespace std;

int main() {
  string word1 = "abc";
  string word2 = "pqr";

  for (int i = 0; i < word1.length(); i++) {
    cout << word1[i] << endl;
  }

  for (int i = 0; i < word2.length(); i++) {
    cout << word2[i] << endl;
  }

  return 0;
}
