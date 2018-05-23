=begin
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.
The input string will only consist of lower case letters and/or spaces. 
=end

def getCount(inputStr)
  count = 0
  arr = inputStr.split("");
  arr.each do |item|
    if item == 'a' || item == 'e' ||
       item == 'i' || item == 'o' ||
       item == 'u' 
      count += 1
    end
  end
  return count
end
