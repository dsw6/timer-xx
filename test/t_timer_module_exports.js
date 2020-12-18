/*
 * Copyright(c) 2020 David Ward
 * MIT Licensed
 */


"use strict";

const expect = require("chai").expect;
const timer = require("../lib/timer");


describe("Module Exports", function () 
{

      //----------------------------------------------------------------------------
   it(`start method should be exported`, function () 
   {
      expect(timer.start).to.be.an("function");
   });

      //----------------------------------------------------------------------------
   it(`elapsed_s method should be exported`, function () 
   {
      expect(timer.elapsed_s).to.be.an("function");
   });

      //----------------------------------------------------------------------------
   it(`elapsed_ms method should be exported`, function () 
   {
      expect(timer.elapsed_ms).to.be.an("function");
   });

      //----------------------------------------------------------------------------
   it(`elapsed_us method should be exported`, function () 
   {
      expect(timer.elapsed_us).to.be.an("function");
   });

      //----------------------------------------------------------------------------
   it(`elapsed_ns method should be exported`, function () 
   {
      expect(timer.elapsed_ns).to.be.an("function");
   });

});
