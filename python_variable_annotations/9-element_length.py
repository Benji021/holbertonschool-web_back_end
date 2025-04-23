#!/usr/bin/env python3
"""Module that takes a list of strings as argument and returns a list
of tuples where each tuple contains a string and its length in int form"""


from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list of tuples with each string and its length."""
    return [(i, len(i)) for i in lst]
