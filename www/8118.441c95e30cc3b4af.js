"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8118],{8118:(y,m,n)=>{n.r(m),n.d(m,{WelcomePageModule:()=>f});var g=n(6814),d=n(95),s=n(3800),i=n(3044),u=n(5861),e=n(6242),p=n(2014);const v=[{path:"",component:(()=>{var t;class r{constructor(o,l,c,P){this.modalController=o,this.alertController=l,this.storage=c,this.router=P}ngOnInit(){var o=this;return(0,u.Z)(function*(){yield o.storage.create()})()}connection(){var o=this;return(0,u.Z)(function*(){yield(yield o.alertController.create({header:"Nom d'utilisateur",message:"Veuillez entrer votre nom d'utilisateur",inputs:[{name:"username",type:"text",placeholder:"Nom d'utilisateur"}],buttons:[{text:"Annuler",role:"cancel",cssClass:"button-cancel"},{text:"Enregistrer",cssClass:"save-button",handler:c=>{c.username&&o.saveUser(c.username)}}]})).present()})()}saveUser(o){var l=this;return(0,u.Z)(function*(){l.storage.set("username",o).then(()=>{l.router.navigate(["../tabs/tab1"])}),console.log(o)})()}}return(t=r).\u0275fac=function(o){return new(o||t)(e.Y36(s.IN),e.Y36(s.Br),e.Y36(p.K),e.Y36(i.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-welcome"]],decls:10,vars:0,consts:[["color","primary",1,"ion-padding","ion-text-center"],["src","../../assets/Yokap.png",1,"logo"],[1,"title"],[1,"ion-margin-top"],["expand","block","color","secondary","fill","outline",1,"ion-margin-top",3,"click"]],template:function(o,l){1&o&&(e.TgZ(0,"ion-content",0),e._UZ(1,"img",1),e.TgZ(2,"div",2)(3,"h2"),e._uU(4,"Bienvenue !"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"Profitez de notre exp\xe9rience..."),e.qZA()(),e.TgZ(7,"div",3)(8,"ion-button",4),e.NdJ("click",function(){return l.connection()}),e._uU(9,"CONNEXION"),e.qZA()()())},dependencies:[s.YG,s.W2],styles:["h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:var(--ion-color-secondary)}"]}),r})()}];let h=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.Bz.forChild(v),i.Bz]}),r})(),f=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.ez,d.u5,s.Pc,h]}),r})()}}]);