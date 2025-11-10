# Print even numbers between 1 and 20

def even_numbers(i = 1):
    output = []
    for i in range (1, 21):
        if i%2 == 0:
            output.append(i)
    return output

print(even_numbers())
            
