# **Docker**

---
### Build and run development containers
    docker-compose up

---
### Stop development containers
    docker-compose down

---
### Create super user for django
    docker-compose exec backend python manage.py createsuperuser

---
### Run migrations for django
    docker-compose exec backend python manage.py makemigrations
    docker-compose exec backend python manage.py migrate