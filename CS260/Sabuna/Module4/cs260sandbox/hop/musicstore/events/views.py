from django.shortcuts import render

# Create your views here.
def show_events(request):
    events = ["anniversary 20th october", "black friday 29th November", "Christmas 25th December"]
    return render(request, 'events/events.html', {"events": events})