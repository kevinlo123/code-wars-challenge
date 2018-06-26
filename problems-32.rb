=begin
Write a function named sumDigits which takes a number as input and returns the sum 
of the absolute value of each of the number's decimal digits. For example:
  sumDigits 10    # Returns 1
  sumDigits 99    # Returns 18
  sumDigits -32   # Returns 5
=end

def sumDigits(number)
  count = 0
  arr = number.to_s.split("")
  arr.each do |num|
    count += num.to_i
  end
  return count;
end
