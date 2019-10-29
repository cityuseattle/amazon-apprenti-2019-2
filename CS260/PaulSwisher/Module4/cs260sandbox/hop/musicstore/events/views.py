from django.shortcuts import render

# Create your views here.
def show_events(request):
    events = ["Anniversary 20th October", "Black Friday 29th November", "Christmass 23rd December"]
    return render(request, 'events/events.html', {"events": events})