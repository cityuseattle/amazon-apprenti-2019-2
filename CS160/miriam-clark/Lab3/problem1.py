
def displayInventory(inventory):
    print("Inventory: ")
    item_total = 0
    for k, v in inventory.items():
       item_total += v
       print(str(items.get(k, 0)) + " " + k)

    print("Total number of items: " + str(item_total))

def addToInventory(inventory, new_items):
    for item in new_items:
        if item in inventory.keys():
            inventory[item] = inventory[item] + 1
        else:
            inventory[item] = 1
    return inventory
    

items = {'rope': 1, 'torch': 6, 'gold coin': 42, 'dagger': 1, 'arrow': 12}
loot = ['gold coin', 'dagger', 'gold coin', 'gold coin', 'ruby']

displayInventory(items)
print("After adding new items.")
displayInventory(addToInventory(items, loot))