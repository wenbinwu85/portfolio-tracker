import logging
from .cjs import CJS

logger = logging.getLogger('ahben')
logger.setLevel('DEBUG')


def load_data_from(file):
    """"""
    return CJS().load(file)


def dump_data_to(data, file):
    """"""
    CJS().dump(data, file)
