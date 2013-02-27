#!/usr/bin/env python
from django.core.management import ManagementUtility

if __name__ == "__main__":
    utility = ManagementUtility(None)
    utility.execute()
