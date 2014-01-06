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

$(document).ready(function(){

    /*create canvas*/
    var canvas = document.getElementById('panel');
    var context = canvas.getContext('2d');

    /*tile url map*/
    var urlMap = {'red':'https://dl.dropboxusercontent.com/u/12394869/red.jpg',
                  'green': 'https://dl.dropboxusercontent.com/u/12394869/green.jpg',
                  'blue': 'https://dl.dropboxusercontent.com/u/12394869/blue.jpg'}

    /*create a new array with n random elements selected from the current array*/
    Array.prototype.nRandom=function(n){
        var o = []
        for(var i = 0; i < n; i++){
            var idx = Math.floor(Math.random()*this.length);
            o.push(this[idx])
        };
        return o;
    };
    /*canvas height =  500 , canvas width = 500, tile height = 20, tile width = 20*/
    var tWidth = 20 // tile width
    var tHeigh = 20 // tile heigh
    var N =500/ tWidth // tile / row
    var colors =['red', 'green', 'blue'].nRandom(N*N);

    /**
     * 2 is the size of threadpool 
     * 400 is the interval to fetch new tasks. 
     */
    var threadpool = new ThreadPool(2, 400);
    //global tile
    var tileID = 0;
    function myTask(url, color)
    {
        // Execute myStaff 
        
        var self = this;
        // load image from data url
        var imageObj = new Image();
        imageObj.onload = function() {
          var x = (tWidth*tileID)%(tWidth*N), y = tHeigh*parseInt(tileID/N);
          console.log(x,y, url);
          context.drawImage(this, x, y);
          tileID += 1;
          self.complete();
        };

        imageObj.src = url;
    };
    for(var i = 0 ; i < colors.length; i++){
        var runnable = new Runnable(myTask, 1, urlMap[colors[i]], colors[i]);
        threadpool.run(runnable);
    }
    threadpool.destroy();

    function changePoolPriority(color){
        for(var i = 0; i < threadpool.pool.length; i++){
            if(threadpool.pool[i].args[1] == color){
                threadpool.pool[i].setPriority(0);
            }else{
                threadpool.pool[i].setPriority(1);
            }
        }
    }
    /*buttons handlers*/
    $('#btnred').click(function(){
        changePoolPriority('red');
    });
    $('#btnblue').click(function(){
        changePoolPriority('blue')
    });
    $('#btngreen').click(function(){
        changePoolPriority('green');
    });
    $('#btnrandom').click(function(){
        for(var i = 0; i < threadpool.pool.length; i++){
            threadpool.pool[i].setPriority(Math.floor(Math.random()*3));
        }
    });
});