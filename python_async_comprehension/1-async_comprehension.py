#!/usr/bin/env python3
"""Async generator that yields random numbers between 0 and 10 every second
    10 times.
    """


import asyncio
from importlib import import_module


async_generator = import_module('0-async_generator').async_generator


async def async_comprehension():
    """Collect 10 random numbers using an async comprehension over async_generator."""
    return [i async for i in async_generator()]
