=begin
Create a function isDivisible(n, x, y) that checks if a number n
is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
=end

def is_divisible(n,x,y)
  if n % x == 0 && n % y == 0
    return true
  else
    return false
  end
end
