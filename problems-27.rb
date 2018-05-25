=begin
  Description:
  Remove a exclamation mark from the end of string.
  For a beginner kata, you can assume that the input data is always a string, no need to verify it.
  Examples
  remove("Hi!") === "Hi"
  remove("Hi!!!") === "Hi!!"
  remove("!Hi") === "!Hi"
  remove("!Hi!") === "!Hi"
  remove("Hi! Hi!") === "Hi! Hi"
  remove("Hi") === "Hi"
  Note
=end

def remove(s)
  arr = s.split("")
  if arr[arr.length - 1] == '!'
    arr.pop
    return arr.join("")
  else
    return arr.join("")
  end
end
