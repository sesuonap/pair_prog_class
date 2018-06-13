# write a function that reverses a string (without reverse method)

# random_string = "steve"

# def reverse_string(input) 
#   split_str = input.split("")
#   rev_string = []
#   input.length.times { rev_string << split_str.pop }
#   rev_string.join
# end
# p reverse_string(random_string)


# Write a function that accepts a string and returns the number of times that the letter “a” occurs in it.

# str = "avocados have many abarths"

# def count_a(input)
#   times = input.count("a")
# end

# p count_a(str)



# Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within in the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the “index” method!

array = [1,2,3,4,5,6,7,8,9]
find_this = 7

def s_n_d(array,find_this)
  index = 0

  array.each do |number|
    if number === find_this
      return index
    end 
    index += 1
  end
end 

p s_n_d(array,find_this)