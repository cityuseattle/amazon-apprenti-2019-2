class Logging(object):

    def __init__(self, get_response):
        self.get_response = get_response
        #One-time configuration and initialization on start-up
        print('initialization')

    def __call__(self, request):
        #Logic executed on a request before the view (and other middleware) is called.
        print('before_view_is_called')

        ''' After you modify (or not) the original request, you must turn over control to the view method in order for it to run.
        This phase is triggered when you pass request to the self.get_response reference you set in the __init__ method.
        This phase effectively says, "I'm done modifying the requests, go ahead and turn it over to the view method so it can run." '''
        response = self.get_response(request)
        #Logic executed on response after the view is called.
        print('after_view_is_called')
        #Return reponse to finish middleware sequence
        return response

    def process_view(self, request, view_func, view_args, view_kwargs):
        #logic executed before a call to view
        #gives access to the view itself & arguments
        print('process_view')

    def process_exception(self, request, exception):
        #logic executed if an exception/error occurs in the view
        print('process_exception')

    def process_template_response(self, request, response):
        #Logic executed after the view is called
        #Only if view response is TemplateResponse
        print('process_template_response')
        return response