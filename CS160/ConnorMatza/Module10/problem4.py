import copy

def get_median(nums):
    ##Again, forcing the pass-by-val here
    new_nums = copy.deepcopy(nums)
    new_nums.sort()
    mid = len(new_nums) // 2
    if len(new_nums) % 2 == 0:
        ##Float division
        return (new_nums[mid] + new_nums[mid - 1]) / 2
    else:
        return new_nums[mid]

test = [2,9, 5]
print(get_median(test))