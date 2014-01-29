Light Task Queue in Javascript 
----------

This is a light threadpool library to javascript. In this threadpool you can set a priority for each task and change dynamically. Furthermore, you can also define the thread pool size. 

Example
---------

```
var threadpool = new ThreadPool(2);

function myTask(number)
{
    // Execute myStaff 
    console.log("This is my Task, n " + number);
    // Set this taskl to be completed. 
    this.complete();
}

threadpool.run(new Runnable(myTask, 1, 1));
threadpool.run(new Runnable(myTask, 1, 2));
threadpool.run(new Runnable(myTask, 1, 3));
var runnable = new Runnable(myTask, 1, 4);
threadpool.run(runnable);
threadpool.run(new Runnable(myTask, 1, 5));
runnable.setPriority(0); // burst priority 
threadpool.run(new Runnable(myTask, 1, 6));
threadpool.destroy();
```

Demos/Examples
-------
* Graphic example with multiple gets and draw in canvas: http://ossbox.github.io/taskqueuer.js/examples-canvas-draw.html
* Basic example with jquery requests: http://ossbox.github.io/taskqueuer.js/examples-jquery.html






Similar projects
----------------
* https://github.com/andywer/threadpool-js : This project allows to create threadpool in javascript. The main difference between our project is that we do not use works in Javascript. Another important issue is the priorities to the tasks. 
* https://github.com/inh3/nPool : Nice implementation, but it is for Node.JS (server side) 





Authors 
-------
* Luís A. Bastião Silva <luis.kop@gmail.com>
* Eriksson Monteiro <eriksson.monteiro@ua.pt>


License 
--------
The MIT License (MIT)

```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
