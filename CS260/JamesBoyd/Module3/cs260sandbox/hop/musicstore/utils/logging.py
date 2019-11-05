class Logging(object):

    def __init__(self, get_response):
        self.get_response = get_response
        print('initialization')
    
    def __call__(self, request):
        print('before_view_is_called')
        response = self.get_response(request)
        print('after_view_is_called')
        return response

    def process_view(self, request, view_func, view_args, view_kwargs):
        print('process_view')

    def process_exception(self, request, exception):
        print('process_exception')

    def process_template_response(self, request, response):
        print('process_template_response')
        return response