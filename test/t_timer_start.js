/*
 * Copyright(c) 2020 David Ward
 * MIT Licensed
 */


"use strict";

const expect = require("chai").expect;
const timer = require("../lib/timer");


describe("start function", function () 
{

      //----------------------------------------------------------------------------
   it(`timer.start method should return hrtime structure`, function () 
   {
      var start = timer.start();
      expect(start, "start invalid").to.be.an("array")
      expect(start.length, "start invalid").to.equal(2);
      expect(start[0]).to.be.a("number");
   });


});
