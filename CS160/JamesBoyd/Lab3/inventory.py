#Create functions
def displayInventory(inventory):
    print("Inventory:")
    item_total = 0
    for key, value in inventory.items():
        print(key + ' ' + str(value))
        item_total += value
    print("Total number of items: " + str(item_total))


def addToInventory(inventory, itemList):
    print("after adding new items")
    for item in itemList:
        if item in inventory.keys() :
            inventory[item]= 1+inventory[item]
        else:
            inventory[item]=1
    displayInventory(inventory)
    

#Create my inventory (which is a dictionary)
stuff = {'rope': 1, 'torch': 6, 'gold coin': 42, 'dagger': 1, 'arrow': 12}
#Create a LIST of item we want to add
new_item = ['gold coin', 'dagger', 'gold coin', 'gold coin', 'ruby']

#Call functions
displayInventory(stuff)
addToInventory(stuff, new_item)