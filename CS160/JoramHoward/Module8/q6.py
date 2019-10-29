def describe_person(first_name, last_name, age=None, favorite_language=None):
    # Required information:
    print("First name: %s" % first_name.title())
    print("Last name: %s" % last_name.title())

    # Optional information:
    if age:
        print("Age: %d" % age)
    if favorite_language:
        print("Favorite language: %s" % favorite_language)
    print()
