# Watchout

## Learning Objectives

As a software engineer, one of the most powerful skills you can learn is how to elegantly and efficiently navigate uncertain terrain.

During your own projects (and on the job), a clear set of steps will rarely be provided. Often, you'll be given a vague goal, and your job will be to discover which tools you need, learn how to use them, and then chart a clear path to an [MVP](http://en.wikipedia.org/wiki/Minimum_viable_product) on your own.

95% (at least) of the code you write will depend on external modules and libraries, the majority of which are poorly documented. D3's documentation isn't bad, but there's a lot of it. You'll need to sort through the mountains of documentation and examples to learn what you'll need for this sprint. Exposing you to this is one of the main goals of this sprint.

d3's API is very well designed.  As you learn it, pay attention to the choices the implementors made.  Many similar libraries were written years earlier, but this one achieved a lot of success relatively late in the game because of the design choices made by its implementors.  Many such libraries remain to be written.  When you write code, pay attention to things that are painful and repetitive, and how you might improve those processes.

## Basic Requirements

Follow along these tutorials to help you get started with D3
- [ ] Learn about `enter`, `update`, `exit`, and `key` (fundamental aspects of D3) by working through the following tutorials:
  - [ ] [General Update Patterns I](http://bl.ocks.org/3808218)
  - [ ] [General Update Patterns II](http://bl.ocks.org/3808221)
  - [ ] [Making a Bar Chart 1](http://bost.ocks.org/mike/bar/) This tutorial is made by the founder of D3
  - [ ] [Making a Bar Chart 2](http://bost.ocks.org/mike/bar/2/)
  - [ ] [Making a Pie Chart](https://gist.github.com/enjalot/1203641)
  
Skim through the official [D3 API Reference](https://github.com/mbostock/d3/wiki/API-Reference). You'll need to reference it heavily as you work through

Unlike other sprints which are test driven, you will have the freedom to get creative with your pair in this sprint. Using your knowledge of fetching data from API's, find an API (or APIs) and visualize data from it however you'd like. You and your pair will be presenting your visualizations during the solution lecture time. 

- [ ] Find an API to fetch data from
- [ ] Using the data you fetched, build at least 3 of [these charts](https://github.com/mbostock/d3/wiki/Gallery)

Some API's you could use, but are not limited to, include:
- [Los Angeles Open Data](https://data.lacity.org/)
- [The Uber API](https://developer.uber.com/)
- [San Francisco Crimespotting API](http://sanfrancisco.crimespotting.org/api)
- [Chuck Norris Jokes API](http://www.icndb.com/api/) Great for word clouds

## Extra Credit
- [ ] Make your charts interactive. Have it respond somehow to click and/or drag events
- [ ] Create an option which allows you to live add or remove data

TODO: Here's an example of a D3 Hackathon that one of our Fellows, Ben Pevsner made in a couple days (LINK TO HIS WORK)


### Extra content material:

Learn more d3 by following along with one of the tutorials on [this page]. Recommended order:

  - [ ] This tutorial, [Manipulating data like a boss with d3], deals with how to structure your data in a way that works well with d3.  This approach applies beyond d3, but the tutorial relies on concepts from the above tutorial.
  - [ ] Or.. [Using animations and transitions effectively] - Tips for not just the code-how, but also how to use effectively for good data viz.
  - [ ] and... [Animated Pie Charts with Text] - Exactly what it says.
  - [ ] Learn how to handle SVG's for real with [this tutorial](https://www.dashingd3js.com/svg-paths-and-d3js).
    - [ ] Even more about SVG [here](http://alignedleft.com/tutorials/d3/an-svg-primer).
  - [ ] This is a serious tutorial on building a business intelligence dashboard with d3. Some sweet startup might want one of these if you were on their early engineering team: [Dashboard tutorial](http://mobiledevmemo.com/building-a-lightweight-flexible-d3-js-dashboard-part-1-of-2/).


[d3]:http://d3js.org/
[svg element]:https://developer.mozilla.org/en-US/docs/SVG
[css3 animations]:https://developer.mozilla.org/en-US/docs/CSS/Tutorials/Using_CSS_animations
[this page]:https://github.com/mbostock/d3/wiki/Tutorials
[Manipulating data like a boss with d3]:http://www.jeromecukier.net/blog/2012/05/28/manipulating-data-like-a-boss-with-d3/
[web sockets]:https://developer.mozilla.org/en-US/docs/WebSockets
[socket.io]:http://socket.io/docs/#how-to-use
[particle system]:http://en.wikipedia.org/wiki/Particle_system
[thread]:http://en.wikipedia.org/wiki/Thread_(computing)
[Using animations and transitions effectively]:http://blog.visual.ly/creating-animations-and-transitions-with-d3-js/
[Animated Pie Charts with Text]:http://blog.stephenboak.com/2011/08/07/easy-as-a-pie.html
