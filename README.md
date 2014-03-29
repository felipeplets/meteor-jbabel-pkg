meteor-jbabel.pkg
=================

jbabel v0.0.5, an i18n jQuery extension that allow you to easly and friendly translate and localize your application

## How to install 
1. `npm install -g meteorite` (if not already installed)
2. `mrt add jbabel-pkg`

Hello world
===========
To start using jbabel you shall create a *i18n* folder in your public application folder and create a JSON file named *i18n.en.json* with the following content:
```javascript
{'HELLOWORLD':'Hello world!'}
```
Now in your .html file add the following content in the body:
```html
<h1 data-i18n="HELLOWORLD"></h1>
```
Done, you are ready with jbabel!

Language Switcher
=================

In order to switch the language you just need to create a file i18n.LANGUAGE_CODE.json (e.g.: i18n.pt.json) and add the tag attribute data-i18n-switcher to the element that will be responsible for switching the language:
```html
<a href="javascript: void(0);" data-i18n-switcher="pt" data-i18n="PT"></a>
```
Note that the language is also translated using the data-i18n attribute.