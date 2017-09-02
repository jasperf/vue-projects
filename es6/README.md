# ES6 Babel Setup

Setup of basic JavaScript App written in ES6 and compiled to regular JavaScript using Babel. This setup is based on Jeffrey Ways's [tutorial](https://laracasts.com/series/es6-cliffsnotes/episodes/1) at Laracasts. It is useful for all just getting into ES6 and using Babel to compile it to regular JavaScript that can be used by almost any browser.

## Babel Modules
This repo has all the node modules as well. No need for that really. But did make me realize however that Babel alone uses 167 Node Modules. And that is a lot!

Here is me checking the no of modules from the command line:
```
jasper@~/webdesign/vue-projects/es6 $ ls node_modules | wc -l
     167
```

And the size is a whopping 33 MB:
```
jasper@~/webdesign/vue-projects/es6 $ du -sh node_modules
 33M	node_modules
```
