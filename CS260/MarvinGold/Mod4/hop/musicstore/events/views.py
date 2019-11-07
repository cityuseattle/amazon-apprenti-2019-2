from django.shortcuts import render

# Create your views here.


def show_events(request):
    events = ["Anniversary , 20 OCT", "Black Friday 29 NOV", "Christmas 25 DEC"]
    return render(request, 'event/events.html', {"events":events})