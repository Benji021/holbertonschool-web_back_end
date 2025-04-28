#!/usr/bin/env python3
"""
Module for providing stats about Nginx logs stored in MongoDB
"""


from pymongo import MongoClient


def log_stats():
    """
    Provides stats about Nginx logs stored in MongoDB.
    
    Displays:
    - Total logs
    - Methods count (GET, POST, PUT, PATCH, DELETE)
    - Status check count (path=/status)
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    logs_collection = client.logs.nginx
    
    # Count total logs
    total_logs = logs_collection.count_documents({})
    print(f"{total_logs} logs")
    
    # Count methods
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        count = logs_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")
    
    # Debugging: Find all status check logs first
    status_logs = logs_collection.find({"method": "GET", "path": "/status"})
    for log in status_logs:
        print(log)
    
    # Count status checks (method GET and path /status)
    status_checks = logs_collection.count_documents({
        "method": "GET",
        "path": "/status"
    })
    print(f"{status_checks} status check")


if __name__ == "__main__":
    log_stats()
