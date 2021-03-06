/*
 * Copyright(c) 2020 David Ward
 * MIT Licensed
 */


"use strict";

const util = require("util");
const expect = require("chai").expect;
const timer = require("../lib/timer");

const sleep = util.promisify(setTimeout);


describe("elapsed_ms function", function () 
{

      //----------------------------------------------------------------------------
   it(`timer.elapsed_ms method should return a number`, function () 
   {
      var start = timer.start();
      var elapsed = timer.elapsed_ms(start);
      expect(elapsed).to.be.a("number");
   });


      //----------------------------------------------------------------------------
   it(`timer.elapsed_ms method should return milliseconds`, async function () 
   {
      var start = timer.start();

      await sleep(1500);
      var elapsed = timer.elapsed_ms(start);
      expect(elapsed).to.be.greaterThan(1000);
      expect(elapsed).to.be.lessThan(2000);
   });


});
