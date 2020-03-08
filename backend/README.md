# Things to remember
django admin user
user: rik
pw: Zrnmwu11



# Learn to code Utrecht member progress tracker/planner

# What is this?
It would be nice to help our members with planning their journey to becoming a professional software developer.

Many of our visitors want to become professional developers, often to find a job But they often don't know what to focus on, they want to know an effective & efficient way to reach their goal.

I (Rik) am not suggesting that I know the most effective way to find a job as a self-teaching programmer, but I imagine that keeping track of the things we do to advance (tutorials we take, projects we build/tried to build, things we would like to build), this can help us track our progress and potentially inspire each other.

Also, this application itself can be something we work on together. Together we can think about what we'd like this application to be, how it can help us. We then create User Stories for the things we can to add to / change about our application, and then we can work on those User Stories. We can work with Git and GitHub, to get some experience in how it is to work as a team on a piece of software. By doing code reviews on the User Stories people finish, we get to practise understanding the code of others, and also get to learn from the ways other people do things. Other can comment on our code, which might be a bit scary at first (or not :)), but it can be valuable for your learning journey.

Edit: I am now focusing on adding project ideas first.


# How to get this project working? (on Linux)

## Prerequisites
- Python 3.7 (latest version of 3.7)
- Git

__Install Python 3.7__

- $ sudo add-apt-repository ppa:deadsnakes/ppa
- $ sudo apt-get update
- $ sudo apt-get install python3.7 python3.7-dev

__Install pip for Python 3.7__

- $ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
- $ python3.7 get-pip.py --user
- $ python3.7 -m pip install --upgrade pip setuptools wheel

__Install virtualenv and virtualenvwrapper__

The below commands are from this website:
https://vsupalov.com/developing-with-python3-8-on-ubuntu-18-04/
- $ python3.7 -m pip install virtualenv virtualenvwrapper --user

__You’ll need to add the following lines to your ~/.bashrc file to make everything work together:__

----------- ADDED CONTENT TO ~/.bashrc -----------
__add pip-installes executables accessible__
export PATH=~/.local/bin:$PATH

__virtualenvwrapper settings__
- export WORKON_HOME=~/.envs (virtual envs are stored here)
- export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3.7 (default Python version to use)
- source ~/.local/bin/virtualenvwrapper.sh
---------------------------------------------------

- Open a new terminal session (close the window and open a new one, or switch to a new tab) for the changes to take effect. You’ll see a few lines of  virtualenvwrapper creating files - that’s expected and a good thing.

__Create a new virtualenv:__
- $ mkvirtualenv <venv_name> (This will use Python version specified in the ~/.bashrc file, meaning this line: "export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3.7")

__Command to deactivate virtualenv:__
- $ deactivate

__Command to activate virtualenv:__
- $ workon <venv_name>

__Command to remove virtualenv:__
- $ rmvirtualenv <venv_name>

1 Clone GitHub Repo to your local machine (requires that Git it installed)

## Frontend

TODO add installation of node

- cd into /frontend
- run "npm install"

## Backend

- cd into /backend
- create virtual environment: "pip


