inventory = {}

def displayInventory(inventory):
    print("Inventory")
    item_total = 0
    for k, v in inventory.items():
        item_total += v
        print(k, " ", v)
    print("Total items" + " " + str(item_total))
def addToInventory(inventory, item, number):
    if item in inventory:
        inventory[item] += number
    else:
        inventory.update({item : number })
    print(inventory)

new_item = ['gold coin', 'dagger', 'gold coin', 'gold coin', 'ruby']
for i in range(len(new_item)):
    addToInventory(inventory, new_item[i], 1)

