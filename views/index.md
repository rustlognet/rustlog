---
layout: base
---
<section class="feed">
{% set navPages = collections.post | reverse %}

{% for item in navPages %}

<div class="feed-item">

<div class="feed-date">{{ item.data.date | date }}</div>
<div><a href="{{ item.url }}">{{ item.data.title }}</a></div>

</div>

{% endfor %}

</section>




