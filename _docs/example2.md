---
title: "Example 2: Things you can do with markdown."
serial: 9
toc: true
---

There are lots of powerful things you can do with the Markdown editor. If you've gotten pretty comfortable with writing in Markdown, then you may enjoy some more advanced tips about the types of things you can do with Markdown!

# Notes

London is the most populous city in the United Kingdom, with a metropolitan area of over 9 million inhabitants.
{: .note}

London is the most populous city in the United Kingdom, with a metropolitan area of over 9 million inhabitants.
{: .info}

London is the most populous city in the United Kingdom, with a metropolitan area of over 9 million inhabitants.
{: .warning}

As with the last post about the editor, you'll want to be actually editing this post as you read it so that you can see all the Markdown code we're using.

# Special formatting

As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:

+ ~~strike through~~
+ ==highlight==
+ \*escaped characters\*


# Writing code blocks

There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block. Inline code is formatted by wrapping any word or words in back-ticks, `like this`. Larger snippets of code can be displayed across multiple lines using triple back ticks:

<div class="w3-theme-l5 codebox">
<p class=" w3-center w3-theme-l4 code-name">Header</p>
{% highlight ruby %}
def print_hi(name)
puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}
</div>

### HTML

{% highlight html linenos %}
<li class="ml-1 mr-1">
    <a target="_blank" href="#">
    <i class="fab fa-twitter"></i>
    </a>
</li>
{% endhighlight %}

### Python

{% highlight python %}
print("Hello World")
{% endhighlight %}

### C

{% highlight c %}
printf("Hello World");
{% endhighlight %}


![walking](https://wowthemesnet.github.io/mediumish-theme-jekyll/assets/images/16.jpg)

# Table

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

# Full HTML

Perhaps the best part of Markdown is that you're never limited to just Markdown. You can write HTML directly in the Markdown editor and it will just work as HTML usually does. No limits! Here's a standard YouTube embed code as an example:

<!-- <p><iframe style="width:100%;" height="315" src="https://www.youtube.com/embed/Cniqsc9QfDo?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></p> -->

<iframe height="315px" src="https://www.youtube.com/embed/YE7VzlLtp-4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

