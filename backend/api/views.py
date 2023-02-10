from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def getData(request):
    data = {'test1':'data1', 'test2':'data2'}
    return Response(data)