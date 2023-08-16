from rest_framework.serializers import ModelSerializer
from rest_framework.exceptions import ValidationError

from user.models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "first_name", "email", "password"]
        extra_kwargs = {"password": {"write_only": True, "required": False}}

    def validate_password(self, value):
        print(value)
        if not self.instance and not value:
            return ValidationError("Password Required")
        return value

    def create(self, validated_data):
        user = super().create(validated_data)
        user.set_password(validated_data.get("password"))
        user.save()
        return user

    def update(self, instance, validated_data):
        user = super().update(instance, validated_data)
        password = validated_data.get("password")
        if password:
            user.set_password(password)
            user.save()
        return user
