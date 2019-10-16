def displayInventory(inventory):
    print("\nIventory: ")
    itemTotal = 0
    for key, value in inventory.items():
        print("\t", key, value)
        itemTotal += value
    print("\nTotal number of items: " + str(itemTotal) + "\n")

def addToInventory(inventory, newItem):
    for x in range(len(newItem)):
        if newItem[x] in inventory:
            inventory[newItem[x]] += 1
        else:
            inventory[newItem[x]] = 1

inventory = {
    "rope": 1,
    "torch": 6,
    "gold coin": 42,
    "dagger": 1,
    "arrow": 12
    }

new_item = ['gold coin', 'dagger', 'gold coin', 'gold coin', 'ruby']
displayInventory(inventory)
addToInventory(inventory, new_item)
displayInventory(inventory)