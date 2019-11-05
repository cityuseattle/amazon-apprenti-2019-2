inventory = {'rope': 1, 'torch': 6, 'gold coin': 42, 'dagger': 1, 'arrow': 12}
new_item = ['gold coin', 'dagger', 'gold coin', 'gold coin', 'ruby']

def displayInventory():
    print('Inventory:')
    item_total = 0
    for k, v in inventory.items():
        print(k + ' ' + str(v))
        item_total = sum(inventory.values())
    print('Total number of items: ' + str(item_total))


def addToInventory(inventory, new_item):
    for item in new_item:
        inventory[item] = inventory.get(item, 0) + 1
addToInventory(inventory, new_item)
displayInventory()