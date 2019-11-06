sneakers = {'name': 'Fire Jordan', 'price': 800}

def discount_price(product, discount):
    newPrice = int(product['price'] * (1.0 - discount))
    assert (0 <= newPrice <= product['price']), "Discount price is lower than zero"

    return newPrice


# 50% OFF
print(discount_price(sneakers, 0.5))
# 200% OFF
print(discount_price(sneakers, 2))