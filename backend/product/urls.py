from product import views
from rest_framework.routers import DefaultRouter

app_name = "product"

router = DefaultRouter()
router.register("", views.ProductViewSet, basename="product")
urlpatterns = []

urlpatterns += router.urls
