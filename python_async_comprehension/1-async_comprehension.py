#!/usr/bin/env python3
"""Async generator that yields random numbers between 0 and 10 every second
    10 times.
    """


import asyncio
from 0-async_generator import async_generator


async def async_comprehension():
    """Collect 10 random numbers using an async comprehension over async_generator."""
    return [i async for i in async_generator()]
