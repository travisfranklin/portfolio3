---
templateKey: blog-post
title: 'Testing With Jasmine'
date: 2019-08-21T20:52:00.000Z
description: ' '
featuredpost: false
featuredimage: /img/fend-project4.jpg
tags:
  - Javascript
  - Jasmine
  - Git
---

#### Udacity FEND Project 4
This project tested my ability to use [Jasmine](http://jasmine.github.io/) testing suite to validate a simple RSS feed app.

Although I would advise viewers to run this locally for testing, [here](https://travisfranklin.github.io/FEND-Project4/) is a link to the GitHub pages site for this repo.

I have included a script in the html that scrolls the viewer to the bottom of the page for easy viewing of the testing area. If you would prefer the page to not behave this way, simply remove this script from the html file:
```html
<script>
  $(document).ready(function() {
    setTimeout(function(){
    $("html, body").animate({
        scrollTop: $(
          'html, body').get(0).scrollHeight
    }, 1000)}, 900);
  });
</script>
```

#### Using Locally

To begin, open `index.html` in a browser.

You'll see your feedreader app once it loads in. The Jasmine testing suite will be visible at the bottom of the page.

Tests should be green, but if they are red, you'll know there is a problem.

#### Test Creation

It's entirely possible for you to create your own tests right in your browser. Here's an example:

```javascript
   describe('the thing', function() {
     it('should not be true', function() {
       expect(something).not.toBe(true);
     });
   });
```
#### How A Test Is Built

##### describe
Creates a group of specs (often called a suite).
Calls to describe can be nested within other calls to compose your suite as a tree.

```javascript
   describe('the thing', function() {
//   it('should not be true', function() {
//     expect(something).not.toBe(true);
//   });
   });
```

##### it
Defines a single spec. Contains one or more expectations that test the state of the code.
A spec whose expectations all succeed will be passing and a spec with any failures will fail.

```javascript
// describe('the thing', function() {
     it('should not be true', function() {
//     expect(something).not.toBe(true);
     });
// });
```

##### expect
Creates an expectation for a spec. If things don't occur as 'expected' within the spec, an error will be generated. Multiple expectations can be added for a particular spec.

```javascript
// describe('the thing', function() {
//   it('should not be true', function() {
       expect(something).not.toBe(true);
//   });
// });
```

## Dependencies

The code for this site was primarily from [Udacity](https://github.com/udacity/frontend-nanodegree-feedreader), and a few common external resources were used.

- [Google Fonts](http://handlebarsjs.com)
- [Handlebars](http://handlebarsjs.com)
- [Jasmine](https://jasmine.github.io)
- [jQuery](http://jquery.com)