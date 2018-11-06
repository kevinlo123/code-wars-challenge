# Reverse every other word in a given string, then return it. Don't forget to include the spaces!

def reverse_alternate(string)
  arr = string.split(" ")
  answer = arr.map.with_index{ |word,i|
    if i.odd?
      word.reverse
    else
      word
    end
  }
  answer.join(" ")
end
