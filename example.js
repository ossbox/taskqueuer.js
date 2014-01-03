/**********************************************************************
# Copyright (C) 2014 Luís A. Bastião Silva and Eriksson Monteiro
#
# Authors: Luís A. Bastião Silva <bastiao@ua.pt>
           Eriksson Monteiro <eriksson.monteiro@ua.pt>
#
# This program are free  to use for non-commercial purposes 
# under the Creative Commons Attribution-NonCommercial license.
#
/*********************************************************************/



var threadpool = new ThreadPoll(2, 600);

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
