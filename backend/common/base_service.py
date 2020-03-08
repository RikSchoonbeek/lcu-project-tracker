from abc import ABC, abstractmethod


class BaseService(ABC):
    """
    All created services should inherit from this, so that we enforce a specific
    api for Service instances.
    """

    @abstractmethod
    def execute(self):
        pass
