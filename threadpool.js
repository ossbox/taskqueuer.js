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



/********************************************************************
****** ThreadPool ***************************************************
*********************************************************************/



function ThreadPoll(size, timeout) {
    var TIMEOUT = 600; 
    this.poolSize = size;
    this.pool = [];
    this.die = false;

    if (timeout === undefined)
    {
        this.timeout = TIMEOUT; 
    };

    this._init();



};

ThreadPoll.prototype = { 
    run : function(runnable) {
        this.pool.push(runnable);

    },

    _init : function(){
        var self =  this; // This is very nice advise by Eriksson Monteiro! :D 
        this.poolHandler = setInterval(function() { 
            if (self.pool.length == 0 && self.die)
            {
                clearInterval(self.poolHandler) // this code remmember me Python.
                return; 
            };
            self.pool = self.pool.sort(function (x, y) {
                return x.priority < y.priority;
            } );
            for (var i = 0; i < self.poolSize && i < self.pool.length ; i++){
                var r = self.pool.shift();
                r.run();
            }
            

        }, this.timeout);
    },

    destroy : function() {
        this.die = true;
    },
};


/********************************************************************
****** Runnable *****************************************************
*********************************************************************/


function Runnable(fRun, priority ){
    /**
    @fRun: the function that execute tasks 
    @priority: priority of the task, priority is defined by the user. 1 is default.
    */
    if (priority===undefined)
    {
        priority = 1; 
    }
    this.args = Array.prototype.slice.call(arguments,2);
    


    this.priority = priority;
    this.fRun = fRun;
    this.completed = false; 
}


Runnable.prototype = { 
    complete : function() {
        this.completed = true;
    },
    isCompleted : function() {
        return this.completed;
    },
    setPriority : function(priority) {
        this.priority = priority;
    },
    run : function(){
        var self = this;
        setTimeout(function(){
            self.fRun.call(self, self.args);
        }, 0);

    },

};