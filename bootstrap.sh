#!/usr/bin/env bash

poetry run python -c 'from django.core.management.utils import get_random_secret_key; print("DEV_SECRET_KEY=" + get_random_secret_key())' >> .env
