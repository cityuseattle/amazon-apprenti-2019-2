#before adding the items
inventory= {
            'rope': 1,
            'torch': 6,
            'gold coin': 42,
            'dagger': 1,
            'arrow': 12
            }  
             

def displayInventory(inventory):
    print("Inventory:")
    item_total = 0
    for k, v in inventory.items():
        print('Key:' + k + 'Value:' + str(v))
        item_total +=inventory[k]     
    print("Total number of items: ", item_total)

new_item =['gold coin', 'dagger', 'gold coin', 'gold coin', 'ruby']


def addToInventory(inventory, new_item):
    for v in new_item:
        inventory.setdefault(v, 0)
        inventory[v]=inventory[v] + 1
    displayInventory(inventory)


print("Before adding")
displayInventory(inventory)
print("After adding new items")
addToInventory(inventory,new_item)



