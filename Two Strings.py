def twoStrings(s1, s2):
    char1Array = s1.lower()
    char2Array = s2.lower()
    value = 'No'
    for i in char1Array:
        print(i)
        if(i in char2Array):
            value = 'Yes'
    return value

print(twoStrings('hello', 'world'))