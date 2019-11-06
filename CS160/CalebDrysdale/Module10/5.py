#5.Write a Python program to find unique triplets whose three elements would result in the sum of zero from a set of n integers. (8 points)

def additionByZero(nums):
  result = []
  nums.sort()
  for i in range(len(nums)-2):
    if i> 0 and nums[i] == nums[i-1]:
      continue
    l, r = i+1, len(nums)-1
    while l < r:
      s = nums[i] + nums[l] + nums[r]
      if s > 0:
        r -= 1
      elif s < 0:
          l += 1
      else:
     #This is as far a I could go.

x = [1 -6, 4, 2, -2, 2, 0, -2, 0]
print(additionByZero(x))