my_variable = 42
print(my_variable)
print(id(my_variable))  #this is memory location

my_other_variable = my_variable #same memory location linking
print(my_other_variable)
print(id(my_other_variable)) #this is memory location

my_variable = 100
print(my_variable)
print(id(my_variable))