#!/usr/bin/env python3
"""Module an asynchronous coroutine"""


import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    """the function returns the waiting time."""
    return delay
