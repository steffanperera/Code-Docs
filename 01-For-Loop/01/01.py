# Print numbers from 1 to 10 using a for loop

def test_loop(i = 1):
    numbers = []
    for i in range(1, 11):
        numbers.append(i)
    return numbers

print(test_loop())
    