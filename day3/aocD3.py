#!/usr/bin/env python3
from array import array

print('Hello World!')
def main():
    map = []
    right = 3
    down = 1
    x = 0
    y = 0
    trees = 0
    repeatLength = 0
    f= open("map", "r")
    f1= f.readlines()
    for line in f1:
        array = list(line)
        if '\n' in array :
            array.remove('\n')
        # print(array)
        map.append(array)

    repeatLength = len(array)

    # print(map)
    for row in map:
        # print(row)
        if (row[x] == '#'):
            trees += 1
        x += right
        if x >= repeatLength:
            x = x-repeatLength

    print('The number of trees: ')
    print(trees)

if __name__== "__main__":
    main()
