---
title: Code
serial: 7
---


# Inline code

Inline code is rendered like this.

<div class="code-example">
<p>Lorem ipsum dolor sit amet, <code class="language-plaintext highlighter-rouge">&lt;inline code snippet&gt;</code> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<h2 id="heading-with-inline-code-snippet-in-it">Heading with <code class="language-plaintext highlighter-rouge">&lt;inline code snippet&gt;</code> in it.</h2>
</div>

{% highlight ruby %}
Lorem ipsum dolor sit amet, `<inline code snippet>` adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Heading with `<inline code snippet>` in it.
{% endhighlight %}

***

# Code blocks

## Code blocks with heading

<div class="code-example">

<div class="w3-theme-l5 codebox">
<p class=" w3-center w3-theme-l4 code-name">Header</p>

<figure class="highlight"><pre><code class="language-ruby" data-lang="ruby"><span class="k">def</span> <span class="nf">print_hi</span><span class="p">(</span><span class="nb">name</span><span class="p">)</span>
<span class="nb">puts</span> <span class="s2">"Hi, </span><span class="si">#{</span><span class="nb">name</span><span class="si">}</span><span class="s2">"</span>
<span class="k">end</span>
<span class="n">print_hi</span><span class="p">(</span><span class="s1">'Tom'</span><span class="p">)</span>
<span class="c1">#=&gt; prints 'Hi, Tom' to STDOUT.</span></code></pre></figure>

</div>

</div>

{% highlight markdown %}
{% raw %}
{% highlight markdown %}
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
{% endhighlight %}
{% endraw %}
{% endhighlight %}

## Code blocks without heading

<div class="code-example">
<figure class="highlight"><pre><code class="language-python" data-lang="python"><span class="k">print</span><span class="p">(</span><span class="s">"Hello World"</span><span class="p">)</span>
<span class="k">print</span><span class="p">(</span><span class="s">"I am Python!"</span><span class="p">)</span></code></pre></figure>
</div>

{% highlight markdown %}
{% raw %}
{% highlight python %}
print("Hello World")
print("I am Python!")
{% endhighlight %}
{% endraw %}
{% endhighlight %}



## Code blocks with line numbers

<div class="code-example">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><table class="rouge-table"><tbody><tr><td class="gutter gl"><pre class="lineno">1
2
3
4
5
</pre></td><td class="code"><pre><span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"ml-1 mr-1"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">target=</span><span class="s">"_blank"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fab fa-twitter"</span><span class="nt">&gt;&lt;/i&gt;</span>
    <span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;/li&gt;</span>
</pre></td></tr></tbody></table></code></pre></figure>
</div>

{% highlight markdown %}
{% raw %}
{% highlight html linenos %}
<li class="ml-1 mr-1">
    <a target="_blank" href="#">
    <i class="fab fa-twitter"></i>
    </a>
</li>
{% endhighlight %}
{% endraw %}
{% endhighlight %}

***