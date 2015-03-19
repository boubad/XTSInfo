// infodata.ts
/// <reference path='../lib/typings/q/Q.d.ts'/>
//
export interface IBaseItem {
  id: any;
  rev: any;
  type: string;
  collection_name: string;
  //
  has_id: boolean;
  has_rev: boolean;
  is_storeable: boolean;
  //
  to_insert_map: (oMap: any) => void;
  to_fetch_map: (oMap: any) => void;
}// interface IBaseItem
export interface IDescriptionItem extends IBaseItem {
  remarks: string;
  avatarid: any;
  //
  has_remarks: boolean;
  has_avatarid: boolean;
}// interface IDescriptionItem
export interface IAttachedDoc extends IBaseItem {
  mimetype: string;
  genre: string;
  name: string;
  data: number[];
  remarks: string;
  //
  has_mimetype: boolean;
  has_genre: boolean;
  has_name: boolean;
  has_data: boolean;
  has_remarks: boolean;
}// interface IAttachedDoc
export interface IPerson extends IDescriptionItem {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  roles: string[];
  departementids: any[];
  anneeids: any[];
  semestreids: any[];
  matiereids: any[];
  uniteids: any[];
  groupeids: any[];
  infoids: any[];
  //
  fullname: string;
  //
  has_username:boolean;
  has_password:boolean;
  has_firstname:boolean;
  has_lastname:boolean;
  has_fullname:boolean;
  has_email:boolean;
  has_phone:boolean;
  has_roles:boolean;
  has_departementids:boolean;
  has_anneeids:boolean;
  has_semestreids:boolean;
  has_uniteids:boolean;
  has_matiereids:boolean;
  has_groupeids:boolean;
  has_infoids:boolean;
  //
  reset_password: () => void;
  check_password: (ct: string) => boolean;
  change_password: (ct: string) => void;
  //
  hasrole: (r: string) => boolean;
  is_super: boolean;
  is_admin: boolean;
  is_oper: boolean;
  is_prof: boolean;
  is_etud: boolean;
  is_reader: boolean;
  //
  add_role :(r:string) => void;
  remove_role: (r:string) => void;
  //
  add_departementid : (id:any)=>void;
  remove_departementid : (id:any)=>void;
  add_anneeid : (id:any)=>void;
  remove_anneeid : (id:any)=>void;
  add_semestreid : (id:any)=>void;
  remove_semestreid : (id:any)=>void;
  add_uniteid : (id:any)=>void;
  remove_uniteid : (id:any)=>void;
  add_matiereid : (id:any)=>void;
  remove_matiereid : (id:any)=>void;
  add_groupeid : (id:any)=>void;
  remove_groupeid : (id:any)=>void;
  add_infoid : (id:any)=>void;
  remove_infoid : (id:any)=>void;
}// interface IPerson
export interface IProfPerson extends IPerson {

}// interface IProfPerson
export interface IOperPerson extends IPerson {

}// interface IOperPerson
export interface IAdminPerson extends IPerson {

}// interface IAdminPerson
export interface IEtudiantPerson extends IPerson {
  dossier: string;
  sexe: string;
  birthDate: Date;
  ville: string;
  etablissement: string;
  serieBac: string;
  optionBac: string;
  mentionBac: string;
  etudesSuperieures: string;
  //
  has_dossier:boolean;
  has_sexe:boolean;
  has_birthDate:boolean;
  has_ville:boolean;
  has_etablissement:boolean;
  has_serieBac:boolean;
  has_optionBac:boolean;
  has_mentionBac:boolean;
  has_etudesSuperieures:boolean;
}// interface IEtudiantPerson
export interface IDepartement extends IDescriptionItem {
  sigle: string;
  name: string;
  //
  has_sigle: boolean;
  has_name: boolean;
}// interface IDepartement
export interface IDepartementChild extends IDescriptionItem {
  departementid: any;
  has_departementid: boolean;
}// interface IDepartementChild
export interface ISigleNameItem extends IDepartementChild {
  sigle: string;
  name: string;
  //
  has_sigle: boolean;
  has_name: boolean;
}// interface ISigleNameItem
export interface IIntervalItem extends ISigleNameItem {
  startDate: Date;
  endDate: Date;
  //
  has_startDate:boolean;
  has_endDate:boolean;
}// interface ISigleNameItem
export interface IAnnee extends IIntervalItem {
}
export interface IGroupe extends ISigleNameItem {

}// interface IGroupe
export interface IUnite extends ISigleNameItem {

}// interface IUnite
export interface ISemestre extends IIntervalItem {
  anneeid: any;
  has_anneeid: boolean;
}// interface ISemestre
export interface IMatiere extends ISigleNameItem {
  uniteid: any;
  coefficient: number;
  ecs: number;
  genre: string;
  mat_module: string;
  //
  has_uniteid: boolean;
  has_coefficient:boolean;
  has_ecs:boolean;
  has_genre:boolean;
  has_mat_module:boolean
}// interface IMatiere
//
export interface IDepartementPerson extends IDescriptionItem {
  personid: any;
  departementid: any;
  has_departementid: boolean;
  has_personid: boolean;
}// interface IDepartementPerson
//
export interface IEtudiant extends IDepartementPerson {
}// interface IEtudiant
export interface IEnseignant extends IDepartementPerson {
}// interface IEnseignant
export interface IOperator extends IDepartementPerson {
}// interface IOperator
export interface IAdministrator extends IDepartementPerson {
}// interface IOperator
//
export interface IAffectation extends IDescriptionItem {
  semestreid: any;
  groupeid: any;
  departementid: any;
  anneeid: any;
  personid: any;
  startDate: Date;
  endDate: Date;
  //
  has_semestreid: boolean;
  has_groupeid: boolean;
  has_personid: boolean;
  has_startDate: boolean;
  has_endDate: boolean;
} // interface IAffectation
export interface IEtudAffectation extends IAffectation {
  etudiantid: any;
  has_etudiantid: boolean;
}// interface IEtudAffectation
export interface IProfAffectation extends IAffectation {
  uniteid: any;
  matiereid: any;
  enseignantid: any;
  //
  has_uniteid: boolean;
  has_matiereid: boolean;
  has_enseignantid: boolean;
}// interface IProfAffectation
//
export interface IBaseEvent extends IDescriptionItem {
  departementid:any;
  anneeid:any;
  semestreid: any;
  uniteid:any;
  matiereid: any;
  groupeid: any;
  personid: any;
  date: Date;
  genre: string;
  documentids: any[];
  status:string;
  //
  has_departementid:boolean;
  has_anneeid:boolean;
  has_semestreid:boolean;
  has_uniteid:boolean;
  has_matiereid:boolean;
  has_groupeid:boolean;
  has_personid:boolean;
  has_date:boolean;
  has_genre:boolean;
  has_documentids:boolean;
  has_status:boolean;
  //
  add_documentid : (id:any) => void;
  remove_documentid : (id:any) => void;
}// interface IBaseEvent
//
export interface IGroupeEvent extends IBaseEvent {
  profaffectationid: any;
  enseignantid: any;
  name: string;
  location: string;
  startTime: Date;
  endTime: Date;
  coefficient: number;
  //
  has_profaffectationid:boolean;
  has_enseignantid:boolean;
  has_name:boolean;
  has_location:boolean;
  has_startTime:boolean;
  has_endTime:boolean;
  has_coefficient:boolean;
}// interface IGroupeEvent
export interface IEtudEvent extends IBaseEvent {
  etudaffectationid: any;
  groupeeventid: any;
  note: number;
  etudiantid: any;
  //
  has_etudaffectationid:boolean;
  has_groupeeventid:boolean;
  has_note:boolean;
  has_etudiantid:boolean;
}// interface IGroupeEvent
//
export interface IHttpManager {
  perform_get: (url: string) => Q.IPromise<any>;
  perform_post: (url: string, data: any) => Q.IPromise<any>;
  perform_put: (url: string, data: any) => Q.IPromise<any>;
  perform_remove: (url: string) => Q.IPromise<any>;
}// interface IHttpManager
//
export interface IDataManager {
  create_item : (oMap:any) => IBaseItem;
  get_items_count: (item: IBaseItem) => Q.IPromise<number>;
  get_items: (item: IBaseItem, skip?: number, limit?: number) => Q.IPromise<IBaseItem[]>;
  get_one_item: (item: IBaseItem) => Q.IPromise<IBaseItem>;
  get_by_id: (item: IBaseItem) => Q.IPromise<IBaseItem>;
  insert_one_item: (item: IBaseItem) => Q.IPromise<any>;
  update_one_item: (item: IBaseItem) => Q.IPromise<any>;
  maintains_one_item: (item: IBaseItem) => Q.IPromise<any>;
  remove_one_item: (item: IBaseItem) => Q.IPromise<any>;
}// interface IDataManager
