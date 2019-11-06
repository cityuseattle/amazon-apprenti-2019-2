import datetime
import calendar

def color_of_mybirthday(date):
    #return 0 -6
    born = datetime.datetime.strptime(date, '%m/%d/%Y').weekday()
    #[Monday, ]
    day =  calendar.day_name[born]
    if day == 'Sunday':
        color = 'Red'
    if day == 'Monday':
        color = 'Yellow'
    if day == 'Tuesday':
        color = 'Pink'
    if day == 'Wednesday':
        color = 'Green'
    if day == 'Thursday':
        color = 'Orange'
    if day == 'Friday':
        color = 'Blue'
    if day == 'Saturday':
        color = 'Purple'
    return (day, color)

date = input("what is your birthday? (mm/dd/yyyy): ")
day, color_day = color_of_mybirthday(date)
print("Color of my Birthday ({}): {}".format(day, color_day))