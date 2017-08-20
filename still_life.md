---
title: Still Life, etc.
keywords: map illustration, illustrated maps, maps, Lina Chesak, Lina Liberace, Lina Chesak-Liberace, map drawings
description: Lina Chesak-Liberace's portfoio of illustrated stylized maps for clients such as National Geographic Traveler, Busch Gardens, and American Airlines.
layout: page
---

{% for i in site.data.still_life %}
  <div class="image">
    <img src="/images/still_life/thumbs/{{ i.filename }}"/>
	<p>{{ i.title }}</p>
	<p>{{ i.description }}</p>
  </div>
{% endfor %}
