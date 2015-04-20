for num in 1..100

  fizz = num % 3 == 0
  buzz = num % 5 == 0
  
  puts fizz ? (buzz ? "FizzBuzz" : "Fizz") : (buzz ? "Buzz" : num )
  
end