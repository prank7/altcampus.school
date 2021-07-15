---
title: 'How to write good Git commit messages'
description: 'One of the things a lot of newbie developers overlook often is the format of their commit messages. Properly formatted commit messages can do so much more than just looking neat, such as - Provide context to the code reviewer'
date: '2020-05-22'
blurb: 'One of the things a lot of newbie developers overlook often is the format of their commit messages. Properly formatted commit messages can do so much more than just looking neat, such as - Provide context to the code reviewer'
photo: '/images/posts/how-to-write-good-git-commit-message.jpeg'
cta: true
ctaText: AltCampus helps you learn faster by inculcating these systems as part of the learning model. 🙌
author: kabir4691
---

One of the things a lot of newbie developers overlook often is the format of their commit messages. Properly formatted commit messages can do so much more than just looking neat, such as:

1. **Provide context to the code reviewer:** A good commit message provides basic information to the reviewer about what the commit achieves, without them needing to dive into the code unless they are looking for specifics. This saves up a lot of time on the review process.
2. **Help in maintaining a feature log:** While writing release notes before shipping, developers can often quickly look at the history of commit messages to have a broad idea of the features added/removed/modified since the last release.
3. **Provide knowledge transfer:** Most projects involve multiple people/teams working on different features. Each entity generally works on their local branch, which they rebase with the master at regular intervals. In such cases, having a broad idea of the code changes implemented by other collaborators via proper commit messages can save a lot of developer time spent in cross-communication.

## DOs and DONTs of commit messages

Now that we have seen the 'Why' of a good commit message, let us look at the 'How'. There are certain points to be kept in mind while crafting a commit message, which is outlined below.

### Subject in a single line

Most commit messages are short enough that they require just one line. For example,

```
Add authentication to user routes
```

But in other cases, where you feel the commit messages are too long to fit in a single line, then split your commit messages into a subject and body. Separate the subject and body by a blank line. For example,

```
Switch app architecture to MVVM

Convert components with memory management issue from MVP to MVVM arch
```

By doing so, you give other developers the option to see a git log with a detailed commit message (by using `git log`) or a log with just the subject (by using `git log --oneline`).

### Subject within 50 characters

Ensuring that the subject text remains 50 characters at maximum encourages developers to think of a brief and concise way about what their code implements. By default, in Github, you get a warning if the commit subject text is more than 50 characters. In a list view, if the subject is more than 72 characters, then Github truncates the end with an ellipsis. Hence, it's considered a good practice to aim for a subject line with 50 characters while keeping a strong check on not exceeding 72 characters.

### Begin subject with a capital letter

Begin all subject lines with a capital letter, i.e. `Fix image cropping issues` instead of `fix image cropping issues`. This tends to give your messages a much neater and uniform look in the git log.

### Do not end subject with a full stop

This is self-explanatory

### Use the imperative mood(present tense) when framing messages

Think of each commit in your code as a change that is being applied to your codebase. Each commit in your code is used to apply a change. Few examples are

1. Add a feature
2. Modify an existing feature
3. Remove a feature

Sentences written in the above tone are what is known as the imperative mood(present tense). This is different from how we are tempted to write messages, called the indicative mood(past tense). Corresponding examples are

1. Added a feature
2. Modified an existing feature
3. Removed a feature

Git commits are better written in an imperative mood since Git by default uses the imperative mood to report its actions. For example, look at commands such as `git merge master`, `git add index.html`, `git merge branch1`. Even actions performed in Github are written in an imperative mood, for example, `Merge pull request #10 from user1/user1branch`.

To avoid any confusion, try to write a subject line that satisfies this sentence:

`If applied, this commit will <subject_line>`

For example,

1. If applied, this commit will add payment integration
2. If applied, this commit will update database configurations
3. If applied, this commit will remove redundant code

Keep in mind that this rule of imperative mood applies only to the subject of the commit message. Feel free to use any tense in the body.
