# Insertion sort implementation 
def insertion_sort(arr):
    for index in range(1, len(arr)):
        temp = arr[index]
        position = index - 1
        while position >= 0:
            if arr[position] > temp:
                arr[position + 1] = arr[position]
                position = position - 1
            else: 
                break
        arr[position + 1] = temp
    return arr

arr1 = [1, 4, 6, 8, 2, 1, 6]
arr2 = [4, 6, 18, 19, 43, 56, 98, 32, 99]
arr3 = [44, 65, 89, 91, 20, 34]

print(insertion_sort(arr1))
print(insertion_sort(arr2))
print(insertion_sort(arr3))

