import pdb
import logging


def compute_area(*dim): 

    result = 0

    if dim[0]: # circle

        result = 3.14 * dim[0] ** 2

    elif dim[1]: # x, y

        result = dim[0] * dim[1]

    elif dim[2]: # x, y, z

        result = dim[0] * dim[1] * dim[2]

    else:

        print("invalid input params")

    return result


pdb.set_trace()
result = compute_area(2)

print("result is ", result)

result = compute_area(10, 20)

print("result is ", result)
