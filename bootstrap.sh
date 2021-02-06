#!/usr/bin/env bash

pipenv run python -c 'from django.core.management.utils import get_random_secret_key; print("SECRET_KEY = \"" + get_random_secret_key() + "\"")' >> ./django_react_tailwindcss/settings.py
