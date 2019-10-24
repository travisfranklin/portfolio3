---
templateKey: blog-post
title: 'Udacity Front End Nanodegree [Project 5]'
date: 2019-10-01T20:52:00.000Z
description: ' '
featuredpost: false
featuredimage: /img/fend-project5.jpg
tags:
  - HTML/CSS
  - Javascript
  - Mapbox
  - Leaflet JS
  - A11y
  - S Workers
  - Git
---
```grid|3
![gourmet logo](/img/gourmet_logo.svg)
```
The Consummate Culinary Collection for Caloric Connoisseurs

#### Intro
This project tests everything I have learned in the 3 months of my studies in the front-end-nanodegree program. Here's a breakdown of the features!

#### ES6 Syntax
This web app utilizes modern ES6 syntax for it's Javascript.

#### Responsive Design
This web app is built to responsively resize itself to any device on which it is used. It has been tested to function on the most popular phones and tablets on the market as well as traditional desktop resolutions.

```grid|1
![desktop](/img/fend5_desktop.jpg)
```
```grid|2
![ipad](/img/fend5_ipad.jpg)
![iphone](/img/fend5_iphone.jpg)
```

On top of this, I've implemented a system for serving images that are the most appropriate for their size in the context of where they're being served.

#### API Handling
This web app utilizes [Mapbox's API](https://docs.mapbox.com/api/) along with [Leaflet JS](https://leafletjs.com/) for displaying styled fully-interactive maps on its pages.
If the user attempts to visit the site offline, the site will detect their lack of access to the map's api and replace the map's content dynamically.

```grid|2
![map disconnect](/img/mapdisconnect.jpg)
```

#### A11y
This web app implements the latest accessibility standards provided to us by [W3C](https://www.w3.org/standards/webdesign/accessibility). It has been blind-tested for useability with screenreaders.

#### Service Workers
This web app caches requests to the site's assets. Not only does this allow the site to load much more quickly when one re-visits pages, if no connection is available, a majority of the site will load normally sans content that requires api access.

---

#### Resources

* Images provided by [Udacity](http://www.Udacity.com)
* Logo design by me _(yay)_
* SVG optimization provided by [Jake Archibald's SVGOMG](https://jakearchibald.github.io/svgomg/)
* [Mapbox](https://mapbox.com/)
* [Leaflet JS](https://leafletjs.com/)
* Special thanks to [Matt Gaunt](https://www.gauntface.com/blog/) for his [Service Workers Guide](https://developers.google.com/web/fundamentals/primers/service-workers/)
* Special thanks to [Alexandro Perez](https://github.com/AlexandroPerez) for his [Project Guide](MWS Restaurant Reviews Project). It definitely helped me get out of a couple sticky situations.
