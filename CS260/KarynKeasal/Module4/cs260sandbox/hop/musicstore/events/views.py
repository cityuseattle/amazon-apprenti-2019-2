from django.shortcuts import render

# Create your views here.

def show_events(request):
    events = ["Anniversary 20th October", "Black Friday 29th November", "Chirstmas 23rd December"]
    return render(request, 'events/events.html', {"events": events})