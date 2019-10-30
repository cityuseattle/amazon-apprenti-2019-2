from django.shortcuts import render

# Create your views here.

def show_events(request):
    events = ["Anniversary 20th October", "Black Friday 29th November", "Christmas 25th December"]
    return render(request, 'events/events.html', {"events": events})
