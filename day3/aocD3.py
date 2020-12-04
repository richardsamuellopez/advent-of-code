#!/usr/bin/env python3
from array import array

print('Hello World!')
def main(right, down):
    map = []
    x = 0
    y = 0
    trees = 0
    repeatLength = 0
    mapLength = 0
    f= open("map", "r")
    f1= f.readlines()
    for line in f1:
        array = list(line)
        if '\n' in array :
            array.remove('\n')
        # print(array)
        map.append(array)

    repeatLength = len(array)
    mapLength = len(map)

    for y in range(0, mapLength, down):
        if(map[y][x] == '#'):
            trees += 1
        x += right
        if x >= repeatLength:
            x = x-repeatLength
        y += down

    print('The number of trees: ')
    print(trees)
    return trees

if __name__== "__main__":
    trees1 = main(1,1)
    trees2 = main(3,1)
    trees3 = main(5,1)
    trees4 = main(7,1)
    trees5 = main(1,2)
    print("Total trees: ", trees1 * trees2 * trees3 * trees4 * trees5)
