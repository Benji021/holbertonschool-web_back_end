#!/usr/bin/env python3
"""Module with the wait_n coroutine"""


import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Runs wait_random n times and returns deadlines in order of completion."""
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = []
    
    for completed in asyncio.as_completed(tasks):
        delay = await completed
        delays.append(delay)
    
    return delays
