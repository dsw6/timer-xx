/*
 * calculate the time duration.
 *
 * Supports:
 *    - seconds
 *    - milliseconds
 *    - microseconds
 *    - nanoseconds
 *
 * useage:
 *    var start = time.start();
 *    var duration = time.elapsed_ms(start);
 *
 * Copyright(c) 2020 David Ward
 * MIT Licensed
 */


'use strict';


module.exports.start = function start()
{
   return(process.hrtime());
}


   // seconds
module.exports.elapsed_s = function(start) {
   var diff = process.hrtime(start);
   return( diff[0] + (diff[1] * 1e-9) );
}


   // milliseconds
module.exports.elapsed_ms = function(start) {
   var diff = process.hrtime(start);
   return( (diff[0] * 1e3) + (diff[1] * 1e-6) );
}


   // microseconds
module.exports.elapsed_us = function(start) {
   var diff = process.hrtime(start);
   return( (diff[0] * 1e6) + (diff[1] * 1e-3) );
}


   // nanoseconds
module.exports.elapsed_ns = function(start) {
   var diff = process.hrtime(start);
   return( (diff[0] * 1e9) + diff[1] );
}