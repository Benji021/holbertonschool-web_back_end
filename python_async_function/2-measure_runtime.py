#!/usr/bin/env python3
"""Module to measure execution time of wait_n"""


import time
import asyncio


wait_n = __import__('1-concurrent_coroutines.py').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measures the total execution time of wait_n
    and returns the average time per call"""
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    return (end - start) / n
