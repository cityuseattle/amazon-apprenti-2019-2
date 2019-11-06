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
    message = 'Call me at 206 555 5555 or 206.123.4567 tomorrow. 206-999-6789 is my office.'
    text = """<p>Contents :</p><a href="https://google.com">Python Examples</a>
            <a href="http://github.com">Even More Examples</a>"""
    print("Phone Numbers found:")
    find_phone_number(message)
    print("\nUrls found:")
    find_url(text)