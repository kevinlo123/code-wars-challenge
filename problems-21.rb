=begin
Your car is old, it breaks easily.
The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"),
work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".
=end

def bump(x)
  amountOfBumps = 0
  arr = x.split("")
  arr.each do |road|
    if road == "n"
      amountOfBumps += 1
    end 
  end
  if amountOfBumps > 15
    return "Car Dead"
  else
    return "Woohoo!"
  end
end 
