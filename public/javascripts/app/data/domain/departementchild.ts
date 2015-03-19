// departementchild.ts
import InfoData = require('../../infodata');
import DescriptionItem = require('./descriptionitem');
//
class DepartementChildItem extends DescriptionItem implements InfoData.IDepartementChild {
  private _departementid: any;
  //
  constructor(oMap?: any) {
    super(oMap);
    if ((oMap != undefined) && (oMap != null)) {
      if (oMap.departementid != undefined) {
        this.departementid = oMap.departementid;
      }
    }// oMap
  }// constructor
  public get departementid(): any {
    return (this._departementid != undefined) ? this._departementid : null;
  }
  public set departementid(s: any) {
    if ((s != undefined) && (s != null) && (s.toString().trim().length > 0)) {
      this._departementid = s;
    } else {
      this._departementid = null;
    }
  }
  public get has_departementid(): boolean {
    return (this.departementid != null);
  }
  public get is_storeable(): boolean {
    return (this.type != null) && (this.collection_name != null) &&
      this.has_departementid;
  }
  public to_insert_map(oMap: any) : void {
    super.to_insert_map(oMap);
    if (this.has_departementid) {
      oMap.departementid = this.departementid;
    }
  }// to_insert_map
}// class DepartementChildItem
export = DepartementChildItem;
