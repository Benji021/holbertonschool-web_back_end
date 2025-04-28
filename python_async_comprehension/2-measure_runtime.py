#!/usr/bin/env python3
"""Async generator that yields random numbers between 0 and 10 every second
    10 times.
    """


import asyncio
import time
from typing import List

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Measure the total runtime of running async_comprehension four times in parallel."""
    start_time = time.time()
    
    # Run async_comprehension four times in parallel
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    
    end_time = time.time()
    return end_time - start_time
