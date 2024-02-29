from .cjs import CJS


def load_data_from(path):
    """"""
    return CJS().load(path)


def dump_data_to(data, path):
    """"""
    CJS().dump(data, path)
