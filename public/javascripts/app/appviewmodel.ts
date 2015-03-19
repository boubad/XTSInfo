//appviewmodel.ts
/// <reference path='../lib/typings/knockout/knockout.d.ts'/>
//
import ko = require('knockout');
//
class appViewModel {
  public firstName: KnockoutObservable<string>;
  public firstNameCaps: KnockoutComputed<string>;
  //
  constructor() {
    this.firstName = ko.observable('Bert');
    this.firstNameCaps = ko.computed(() => {
      return this.firstName().toUpperCase();
    }, this);
  }// constructor
}// class appViewModel
export = appViewModel;
