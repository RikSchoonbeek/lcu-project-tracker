from .models import ProgressList


def list_progress_lists(filter_instructions={}):
    """
    Service that returns a list of ProgressList objects. Accepts filter 
    instructions as how to filter the list of ProgressList objects.

    :param filter_instructions (dict): contains the instructions on how to filter 
    the list of ProgressLists
    """
    return ProgressList.objects.all()


def retrieve_progress_list(progress_list_pk):
    """
    Service that returns a single ProgressList object (for detail view). Accepts 
    filter instructions as how to filter the list of ProgressList objects.

    :param filter_instructions (dict): contains the instructions on how to filter 
    the list of ProgressLists
    """
    raise NotImplementedError
