import os
import uuid
from django.core.files.base import ContentFile
from django.utils.text import slugify
from rest_framework import serializers
from .models import Conversion


class GetConversionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversion
        fields = ['id', 'text', 'bold_text']


class AddConversionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversion
        fields = ['user', 'image', 'text', 'bold_text']


class ImageUploadSerializer(serializers.Serializer):
    image = serializers.ImageField(allow_null=False, required=True)
    image_url = serializers.SerializerMethodField(read_only=True)

    def create(self, validated_data):
        image_file = validated_data['image']
        img_filename, img_extension = os.path.splitext(image_file.name)

        # Generate unique filename
        filename = f"{slugify(img_filename)}-{uuid.uuid4()}{img_extension}"

        # Create ContentFile object for saving
        content_file = ContentFile(image_file.read())

        # Save the image in your desired location
        # Replace with your storage and path logic
        with open(f'uploads/{filename}', 'wb+') as f:
            f.write(content_file.read())

        # Return your desired response data (optional)
        # Assuming you use media storage
        image_url = f"./uploads/{filename}"

        # Return data with additional image_url field
        return {'message': 'Image uploaded successfully', 'image_url': image_url}

    def get_image_url(self, obj):
        # Alternatively, if your image field already stores the URL
        return obj.image.url
