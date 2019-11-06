import re

def find_phone_number(text):
    regEx = re.compile(r'([0-9]{3})(\s|-|\.)([0-9]{3})(\s|-|\.)([0-9]{4})')
    for match in re.finditer(regEx, message):
        print(match.group())

def find_url(text):
    pattern = re.findall(r'http[s]?://[a-zA-Z]+\.[a-z]+', text)
    for i in pattern:
        print("Urls: ", i)


if __name__ == "__main__":
    message = 'Call me at 206 111 2456 or 255.125.3456. 908-444-3459 is my office number. '
    print("The following phone numbers were parsed: ")
    text = """<p>Contents : </p><a href-"https://google.com">Python Examples </a>
            <a href="http://github.com">Even more examples</a>"""
    print("Phone numbers found: ")
    find_phone_number(message)
    print("\nUrls Found:")
    find_url(text)

