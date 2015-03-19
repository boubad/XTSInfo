// baseitem.ts
/// <reference path='../../../lib/typings/qunit/qunit.d.ts'/>
//
import BaseItem = require('../../../app/data/domain/baseitem');
//
var main = ()=>{
  test("First test",()=>{
    equal(BaseItem.date_format, 'YYYY-MM-DD', 'The return should be 2.');
  });
};
var BaseItemTests = { run : main};
export = BaseItemTests;
