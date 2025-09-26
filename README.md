# Personal website

Under development until \[unknown time]

Made with React

## Known Problems

### Projects list fails to animate/has blank spots/animates twice

This is a problem that seems to be from an interaction between react motion and react query—for a brief moment, the `Projects` page uses _stale_ data from the react query cache, and the project list would begin to animate using said data.

However, when the fresh data comes, then it causes a rerender of the project items, interrupting the prior animation and breaking everything.

I tried to find ways to fix this but it seemed like only two main options exist:

1. A react query solution where I make the `ProjectList` show a loading spinner on _every fetch_, so the animation only starts with fresh data—quite a big cost for little benefit
2. A motion solution where I make the animations tied to the data itself (via adding a `key`), at the cost of making the animation replay from the beginning on fresh data fetched

After thinking about it for a bit, I realized what the hell it's not like I'll update it that much anyways, and the probability that someone is using this the moment I updated something was very low. And you just need to refresh/change pages to fix it. So what's even the point?

I chose to use the second option because like i'm not going to bother. It's just a second of inconvenience.

## Stuff to do

- Delete image on project delete if no projects refer to the image
- ~~Add support for uploading own image in project editor~~
- pagination for projects (much much later)
- sorting + filter projects
- about page
- blog post comments
- moderation tools (bulk delete comments)
- blog post pagination
- code syntax highlighting support
- tab support in blog editor
- cleanup dead code
- anon users only pull published posts from database
