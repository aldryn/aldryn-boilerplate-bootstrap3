from datetime import datetime, timedelta
from shop.models import Product, Order
from shop_plugnplay.models import Category
from contactform.models import ContactFormSubmission

def count_products():
    return Product.objects.count()

def count_categories():
    return Category.objects.count()

def count_new_orders():
    return Order.objects.filter(status=Order.COMPLETED).count()

def count_new_contactforms():
    a_week_ago = datetime.now() - timedelta(days=7)
    return ContactFormSubmission.objects.filter(submitted_at__gt=a_week_ago).count()