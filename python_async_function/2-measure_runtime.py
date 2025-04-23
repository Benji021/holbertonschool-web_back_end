#!/usr/bin/env python3
"""Module to measure execution time of wait_n"""


import time
import asyncio
from typing import Callable


wait_n = __import__('1-wait_n').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measures the total execution time of wait_n
    and returns the average time per call"""
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()

    total_time = end - start
    return total_time / n
