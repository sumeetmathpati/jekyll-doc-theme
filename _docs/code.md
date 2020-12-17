---
title: Code
serial: 7
---


# Inline code

Inline code is rendered like this.

Lorem ipsum dolor sit amet, `<inline code snippet>` adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Heading with `<inline code snippet>` in it.

# Code blocks

## Code blocks with heading

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

## Code blocks without heading

{% highlight python %}
print("Hello World")
print("I am Python!")
{% endhighlight %}

## Code blocks with line numbers

{% highlight html linenos %}
<li class="ml-1 mr-1">
    <a target="_blank" href="#">
    <i class="fab fa-twitter"></i>
    </a>
</li>
{% endhighlight %}

***