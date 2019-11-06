sneakers = {
    'name': 'Jordan',
    'price': 800
}

def discount_price(product, discount):
    newPrice = int(product['price'] * (1.0 - discount))
    assert (0 <= newPrice <= product['price']), "Discount price is lower than zero"

    return newPrice

# 50% off
print(discount_price(sneakers, 0.5))
# 200% off
print(discount_price(sneakers, 2))