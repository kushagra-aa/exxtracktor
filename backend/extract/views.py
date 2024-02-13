from rest_framework.response import Response
from .models import Conversion
from .serializers import GetConversionSerializer, ImageUploadSerializer, AddConversionSerializer
from rest_framework.decorators import api_view
from rest_framework.parsers import MultiPartParser
from .helpers.extractText import extract_text


@api_view(["GET", "POST"])
def conversion_list(request):
    if (request.method == "GET"):
        conversions = Conversion.objects.all()
        serializer = GetConversionSerializer(conversions, many=True)
        return Response({"conversions": serializer.data}, status=200)

    parser_classes = [MultiPartParser]  # Allow multipart form data
    if request.method == 'POST':
        serializer = ImageUploadSerializer(data=request.data)
        if serializer.is_valid():
            # Trigger image upload and URL generation
            image = serializer.save()["image_url"]

            extracted_data = extract_text(image)

            serializer = AddConversionSerializer(data={
                "user": "admin",
                "image": image,
                "text": ", ".join(extracted_data['text']),
                "bold_text": ", ".join(extracted_data['bold_text']),
            })
        if serializer.is_valid():
            serializer.save()  # This saves data to the Conversion model
            return Response({"message": "Successfully Extracted the Text!", "data": serializer.data}, status=200)
        else:
            return Response(serializer.errors, status=400)

    return Response({'method': 'Not allowed'}, status=405)
