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

# List of user stories
This is where we define what you can do in the application. When the amount of user stories get's large, we can potentially group them by responsibility/feature.

__User progress__ 

- Users can add things to their progress list
- Users can see a list/tiles of other members. There tiles have two responsibilities:
    - Giving a short introduction to a member, showing things like a photo, their current project, interests, past project, etc.
    - Offering a way to the member's detail view.
- Users can see each others progress lists (probably by clicking on other members tiles in some member overview).


__Domain Entities__
- Member - a member of Learn to code Utrecht (no personal information has to be given, only an email address because this makes automation for things like password reset possible, which is very convenient.)
- (Member) progress list - a list that members can add new Progress List Items for (I imagine they can be ordered, maybe through some field holding their index, maybe allowing multiple Items to be on the same index, indicating that things are being done in parallel.)
- Progress List Item - a "thing" that a member has done, or is doing (maybe a done boolean attribute?) I don't know yet if we want to have different Types of items, it could be possible to have multiple Progress List Item Types, probably with a ForeignKeyField on Progress List Item to Progress List Item Type
- Progress List Item Type - types like "tutorial", "personal project", "book", "article", "blog post", to keep this flexible, I think a ForeignKeyField on Progress Item Type is a good choice, since it allows for members to change things more easily.

__Member__
- topics of interest - as a Member I can add and change topics of interest (CRUD).
- progress_list - they are linked to their ProgressList
- email - for authentication purposes
- username - members need to know who is who
- goals ?
- plan ?
- porfolio ?
