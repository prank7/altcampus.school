---
title: 'Basic Unix commands that you should know'
description: Let's learn about a bunch of basic Unix commands that every beginner should know.
date: '2020-05-30'
blurb: Let's learn about a bunch of basic Unix commands that every beginner should know.
photo: '/images/posts/basic-unix-commands.jpeg'
hideCover: true
cta: true
ctaText: AltCampus helps you pick up good communication skills to get you good, first job as a software developer. 🙌
author: 'kabir4691'
---

## 1. ls

This command is used to view the list of files and directories in a particular directory.

#### Usage

`ls` - Display all the files and directories inside the current path.
`ls <path>` - Display the files and directories inside the specified path.

`ls -1` - Display all files and directories, with each entry in a separate line.

## 2. touch

This command is used to create an empty file(s).

#### Usage

`touch file1.txt` - Create a new file named file1.txt.

`touch file1.txt file2.txt file3.txt` - Create three files named file1.txt, file2.txt and file3.txt.

## 3. mkdir

This command is used to create a new directory.

#### Usage

`mkdir newfolder` - Create a new directory named newfolder.

`mkdir newfoler2 newfolder3` - Create two directories named newfolder2 and newfolder3.

`mkdir newfolder4/newfolder5` - Create a directory called newfolder5 inside the newfolder4 directory. If the parent directory in a path doesn't exist (for example, newfolder4 here), then the terminal will throw an error. In order to create parent directories too while executing mkdir, we need to use the `-p` flag like `mkdir -p newfolder4/newfolder5`

## 4. pwd

This command prints the path of your current working directory, starting from the root directory.

#### Usage

`pwd` - Print the current working directory path.

## 5. cd

This command is used to navigate the file system by switching the current working directory.

#### Usage

`cd folder2` - Switch your working directory to a folder called folder2, present inside your current working directory. You can verify the path of your new working directory by using the `pwd` command.

`cd ..` - Switch your working directory to the parent directory of the current working directory.

`cd` - Switch your working directory to the root (or home) directory.

## 6. rmdir

This command is used to delete empty directories.

#### Usage

`rmdir newfolder` - Delete a directory called newfolder. Note that this command can only delete empty directories. If you wish to delete a non-empty directory, use the `-rf` flag like `rmdir -rf newfolder`

## 7. exit

This command is used to exit the terminal window (or tab).

#### Usage

`exit` - This will close the current terminal window (or tab).

## 8. history

This command is used to get a history of the previously run commands

#### Usage

`history` - This will give a list of all the previous commands run on the machine.

Additionally, for quickly cycling through recent commands, you can press the UP or DOWN arrow keys as well.

## 9. clear

This command is used to clear your terminal screen of previous commands run and their outputs. Note that this only clears the screen and does not delete the command history.

#### Usage

`clear` - Clear the terminal screen.

## 10. less

This command is used to peek at the contents of a file in the terminal without opening it.

#### Usage

`less <file-name>` - Show the contents of the file. You can press the space bar key to proceed to next section of the contents.
