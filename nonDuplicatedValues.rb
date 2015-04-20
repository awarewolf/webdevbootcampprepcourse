def non_duplicated_values(values)
  counts = Hash.new(0)
  values.each { |value| counts[value] += 1 }
  counts.select { |value,count| count == 1 }.keys
end