import datetime
import calendar

def color_of_mybirthday(date):
    born = datetime.datetime.strptime(date, '%m/%d/%Y').weekday()
    day = calendar.day_name[born]
    if day == 'Sunday':
        color = 'Red'
    elif day == 'Monday':
        color = 'Yellow'
    elif day == 'Tuesday':
        color = 'Pink'
    elif day == 'Wednesday':
        color = 'Green'
    elif day == 'Thursday':
        color = 'Orange'
    elif day == 'Friday':
        color = 'Blue'
    elif day == 'Saturday':
        color = 'Purple'
    return (day, color)

date = input("What is your birthday? (mm/dd/yyyy): ")

# can declare and assign multiple variables at same time with this function call because function returns 2 values!
day, color_day = color_of_mybirthday(date)

# the .format(var1, var2) below allows to insert variables content in order of the {} fields inside the string!
print("Color of my Birthday({}): {}".format(day, color_day))