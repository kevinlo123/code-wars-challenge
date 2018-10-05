=begin
  Given a string made up of letters a, b, and/or c, switch the position of letters a and b
  (change a to b and vice versa). Leave any incidence of c untouched.
  Example:
  'acb' --> 'bca'
  'aabacbaa' --> 'bbabcabb'
=end

def switcheroo(x) 
  res = []
  x.split("").each do |letter|
    if letter == "a"
      res.push("b")
    elsif letter == "b"
      res.push("a")
    else
      res.push("c")
    end
  end
  return res.join
end
