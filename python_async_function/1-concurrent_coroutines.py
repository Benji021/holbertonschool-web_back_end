#!/usr/bin/env python3
"""Module with the wait_n coroutine"""


import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn wait_random n times with the specified max_delay
    and return the list of delays in ascending order."""
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = [await t for t in asyncio.as_completed(tasks)]
    return sorted(delays)
