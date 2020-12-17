---
title: Lists
serial: 6
description: "Lists."
---

# Unordered lists

Unordered lists are rendered like this.

<div class="code-example">
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<p><em>or</em></p>

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
</div>

{% highlight markdown %}
- Item 1
- Item 2
- Item 3

*or*

* Item 1
* Item 2
* Item 3
{% endhighlight %}


# Ordered list

Ordered lists are rendered like this.

<div class="code-example">
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
</div>

{% highlight markdown %}
1. Item 1
1. Item 2
1. Item 3
{% endhighlight %}

# Task list

<div class="code-example">
<ul class="task-list">
  <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled">hello, this is a todo item</li>
  <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled">hello, this is another todo item</li>
  <li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked">goodbye, this item is done</li>
</ul>
</div>

{% highlight markdown %}
- [ ] hello, this is a todo item
- [ ] hello, this is another todo item
- [x] goodbye, this item is done
{% endhighlight %}
