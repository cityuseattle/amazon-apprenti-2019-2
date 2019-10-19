def displayInventory(inventory):
    print("Inventory:")
    item_total = 0
    for k, v in inventory.items():
        print(k + " " + str(v))
        item_total = item_total + v
        
    print("Total number if items: " + str(item_total))


def addInventory (inv, addedItems):
    
    for item in addedItems:
            inv.setdefault(item, 0)
            inv[item] += 1
    return inv
        
    


inventoryItems = {'rope': 1, 'torch': 6, 'gold coin': 42, 'dagger': 1, 'arrow': 12} 
displayInventory(inventoryItems)

new_item = ['gold coin', 'dagger', 'gold coin', 'gold coin', 'ruby']


inventoryItems = addInventory(inventoryItems, new_item)
displayInventory(inventoryItems)

