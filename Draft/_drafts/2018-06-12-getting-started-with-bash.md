---
layout: post
title:  "Getting started with BASH"
image: assets/images/17.jpg
tags: [bash, linux, dbms]
---

- [ ] Hi

Bash is one of the most used <a href="https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#What-is-a-shell_003f" target="_blank">shell</a> for many different Linux distros. <a href="https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#What-is-Bash_003f" target="_blank">Bash</a> is powerfull tool and scripting engine we can use to steamline and automate Linux tasks.

# Introduction

Here we are specifically going to use GNU Bash shell. As this is introductory article; for more information you can visit official <a href="https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html" target="_blank">GNU bash reference manual.</a>

Bash script is a simple text file containing Bash shell commands. When we run this script, commands in that file will be executed sequentially as if they were typed in the shell.

The extension for Bash scripts **.sh** is completely optional. Bash scripts mush have executable permission befire they can be executed.

### 1.1 First Bash script

This is our first bash script: `hello-world.sh` .

{% highlight ruby %}
#!/bin/bash

# This script will print "Hello world!"
echo "Hello world!"
{% endhighlight %}
Let's see whats written in this file.
	
- **Line 1:** `#!` is known as shebang, and it's followed by `/bin/bash` which is the <a href="https://en.wikipedia.org/wiki/Path_(computing)#Absolute_and_relative_paths" target="_blank">absolute path</a> of the shell which we are using (in our case it's Bash).
	- So what the kernel does is, it runs the shell specified in the shebang, and passes the path of the script to that shell as an argument. 
	- Hence, it will be executed like:
		- `/bin/bash ./hello-world.sh`
- **Line 3:** It's a comment, which tells the interpreter to ignore this line. It's commonly used to write notes about the code.
- **Line 4:** Here we are using `echo` command to print text, which in this case is "Hello world!"

### 1.2 Running the bash script

For running the script, make sure you have opened termianl in the directory where 
your script is present.

#### 1.2.1 Run script as executable

To run the script as executable, you have to give executable permission to your script. To do that you can use `chmod` command. Example:

{% highlight bash %}
chmod +x ./hello-world.sh
{% endhighlight %}

From now on I will be using this method to run the script. You can choose any method you want.

#### 1.2.1 Run script by interpreter

If you have only read permission. You can run script by bash. Example:

{% highlight bash %}
bash hello-world.sh
{% endhighlight %}


### 1.3 Variables

#### 1.3.1 Variable basics

Like any other programming or scripting languages, Bash also allows us to use variables.

In Bash variables are assigned with `=` operator. Example
{% highlight bash %}
#!/bin/bash

name=Sherlock
{% endhighlight %}

Notice that, there are no spaces around the `=` sign.

We can use that variable by adding `$` as a prefix to that variable name. 
{% highlight bash %}
#!/bin/bash

name=Sherlock
echo "Hello I am $name"
{% endhighlight %}

You should see output:
{% highlight bash %}
$ ./variables.sh 
Hello I am Sherlock
{% endhighlight %}

If value of your variable has more than one word and has spaces in between, you must enclose it in single or double quotes. Otherwise the second word after the space will be considered as Bash command. Example:
{% highlight bash %}
#!/bin/bash

name=Sherlock Holmes
echo "Hello I am $name"
{% endhighlight %}

You will get error, because the word `Holmes` is interpreted as command and as it's not a valid command.
{% highlight bash %}
$ ./variables.sh 
./variables.sh: line 3: Holmes: command not found
Hello I am 
{% endhighlight %}

When we enclose it with single or double quotes; it's treated as a single literal.
{% highlight bash %}
#!/bin/bash

name="Sherlock Holmes"
echo "Hello I am $name"
{% endhighlight %}

Output:
{% highlight bash %}
$ ./variables.sh 
Hello I am Sherlock Holmes
{% endhighlight %}

#### 1.3.2 Command substitution

Using command substitution we can assign output of one command to a variable.
There are two common ways to do this,
- Place command name in "()", preceded by a"$" character:
- Place command in between backticks (`).

{% highlight bash %}
#1/bin/bash

user=$(whoami)  # Method 1
current_dir=`pwd`   # Method 2

echo "User name is $user"
echo "Currently we are in directory: $current_dir"
{% endhighlight %}

### 1.4 Arguments

Most of the time we pass arguments to many of the day to day programs. Like we pass argument `-l` as argument to `ls` program to get output in lost listing format. We also can recieve arguments in our Bash script.

| Variable name | Description                                   |
|:---------------|:-----------------------------------------------|
| $0            | The name of the Bash script                   |
| $1 -$9        | The first 9 arguments to the Bash script      | 
| $#            | Number of arguments passed to the Bash script |
| $@            | All arguments passed to the Bash script          |
| $?            | The exit status of the most recently run process |
| $$            | The process ID of the current script             |

Let's see how we can provide arguments and use all these variables.
{% highlight bash %}
#!/bin/bash

echo "The name of the file is $0"
echo "The first 9 arguments are $1 $2 $3 $4 $5 $6 $7 $8 $9"
echo "You have passed $# arguments."
{% endhighlight %}

Output:
{% highlight bash %}
$ ./main.sh 1 2 3 4 5		
The name of the file is main.sh
The first 9 arguments are 1 2 3 4 5    
You have passed 5 arguments.
{% endhighlight %}

