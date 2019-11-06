import datetime
import calendar

def color_of_my_birthday(date):
    born = datetime.datetime.strptime(date, '%m/%d/%Y').weekday()
    day = calendar.day_name[born]
    if day == 'Sunday':
            color ='Red'
    elif day =='Monday':
            color = 'Yellow'
    elif day =='Tuesday':
            color = 'pink'
    elif day =='Wednesday':
            color = 'green'
    elif day =='Thursaday':
            color = 'orange'
    elif day =='Friday':
            color = 'blue'
    elif day =='Saturday':
            color = 'purple'
    return(day, color)

date = input("what is ur birthday? (mm/dd/yyyy): ")
day, color_day = color_of_my_birthday(date)
print("color of my birthday ({}): {}".format(day, color_day))    