/**********************************************************************
# Copyright (C) 2014 Luís A. Bastião Silva and Eriksson Monteiro
#
# Authors: Luís A. Bastião Silva <bastiao@ua.pt>
           Eriksson Monteiro <eriksson.monteiro@ua.pt>

The MIT License (MIT)


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
/*********************************************************************/


/**
 * 2 is the size of threadpool 
 * 600 is the interval to fetch new tasks. 
 */
var threadpool = new ThreadPool(2, 600);

function myTask(number)
{
    // Execute myStaff 
    console.log("This is my Task, n " + number);
    // Set this taskl to be completed. 
    this.complete();
}

var runnable = new Runnable(myTask, 1, 2);
threadpool.run(runnable);
var runnable = new Runnable(myTask, 1, 3);
threadpool.run(runnable);
var runnable = new Runnable(myTask, 1, 5);
threadpool.run(runnable);
var runnable = new Runnable(myTask, 10, 6);
threadpool.run(runnable);
var runnable = new Runnable(myTask, 1, 7);
threadpool.run(runnable);
var runnable = new Runnable(myTask, 1, 8);
threadpool.run(runnable);

runnable.setPriority(10);



threadpool.destroy();
