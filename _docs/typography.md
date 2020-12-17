---
title: Typography
serial: 2
---

# Headings

Headings are rendered like this:

<div class="code-example">
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
</div>

{% highlight markdown %}
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
{% endhighlight %}

# Body text

<div class="code-example">
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>

{% highlight markdown %}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{% endhighlight %}

# Inline elements

<div class="code-example">
<p>Text can be <strong>bold</strong>, <em>italic</em>, or <del>strikethrough</del>.</p>
<p><a href="{{ site.baseurl }}/">Link to another page</a>.</p>
</div>

{% highlight markdown %}
Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page]({{ site.baseurl }}/).
{% endhighlight %}


<!-- <div class="w3-theme-l5 codebox">
<p class=" w3-center w3-theme-l4 code-name">Header</p>
{% highlight ruby %}
def print_hi(name)
puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}
</div> -->