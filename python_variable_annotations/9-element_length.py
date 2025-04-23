from typing import List, Tuple


def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    """Return a list of tuples with each string and its length."""
    return [(i, len(i)) for i in lst]
