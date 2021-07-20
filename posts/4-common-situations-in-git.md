---
title: '4 common situations while using Git and how to solve them'
description: 'Learn about some common situation while using Git such as changing the git commit message, understanding git log and more.'
date: '2020-06-09'
blurb: Learn about some common situation while using Git such as changing the git commit message, understanding git log and more.
photo: '/images/posts/4-common-situations-in-git.jpeg'
cta: true
ctaText: AltCampus helps you learn faster by inculcating these systems as part of the learning model.  🙌
author: nnnkit
---

## Change the last commit message

Often, we make typos while typing commit messages - or the message is unclear or incorrect. We need to correct them.

If the commit is on your local system and not pushed to Github or Gitlab, etc:

```bash
git commit --amend -m [your message]
```

If the commit has been pushed to Github:

- You need to change the local message, and
- Force push the commit.

```bash
git commit --amend -m [your message]
git push --force-with-lease <repository> <branch>
```

## Do more with git log

When you type `git log` to see the commit history, the standard output is not very friendly. It contains lots of information. You can customize the information using the flags below:

- `--oneline` displays one commit per line with message.
- `--stat` displays the modified files, number of lines added and removed, etc - in each commit.
- `--graph` enables you to view log as a graph.

```bash
git log --oneline
git log --stat
git log --graph
```

> TIPS: When you use these commands, the terminal opens the `vim` editor. To close it, just press **`q`** after `:`.

## Pull without making commit

Sometimes we want to pull from any branch and keep the local edits. To do this, we will use `stash` to hide your changes, then we'll use `pull` to pull the data; and then finally, we'll use `stash pop` to bring those changes back.

```bash
git stash
git pull
git stash pop
```

## Move the commit from one branch to another

This is for when you made a commit on the `master` branch. But, now you want to move those changes to a new branch named `develop`. To do this:

- Move to `develop` branch using `checkout`. Use `-b` flag to create new branch
- Use `git log --oneline` to show all the commits and get the hash of the commit you want to move.
- Use `git cherry-pick [hash]` to get the changes.

Replace the `[hash]` with the hashid

```bash
git checkout develop
git log --oneline
git cherry-pick [hash]
```
