(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{332:function(e,n,r){"use strict";r.r(n);r(25);var t={data:function(){return{valid:!0,name:"",anony:!1,concern:"",concernRules:[function(e){return!!e||"This field is required"}],whyConcern:"",whyConcernRules:[function(e){return!!e||"This field is required"},function(e){return e&&e.length>=50||"it must be at least 50 characters"}]}},methods:{validate:function(){this.$refs.form.validate()&&this.$router.push({path:"thankyou/?name="+this.name+"&concern="+this.concern+"&why="+this.whyConcern+"&anon="+this.anony})}}},o=r(30),l=r(33),c=r.n(l),d=r(236),v=r(258),h=r(249),m=r(333),f=r(328),y=r(242),x=r(259),w=r(329),k=r(107),C=r(93),component=Object(o.a)(t,(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("v-card",[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[e._v("Form")]),e._v(" "),r("v-spacer")],1),e._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(n){e.valid=n},expression:"valid"}},[r("v-text-field",{attrs:{label:"Full Name",outlined:""},model:{value:e.name,callback:function(n){e.name=n},expression:"name"}}),e._v(" "),r("v-checkbox",{attrs:{label:"Remain Anonymous",color:"primary"},model:{value:e.anony,callback:function(n){e.anony=n},expression:"anony"}}),e._v(" "),r("v-text-field",{attrs:{rules:e.concernRules,label:"Area Of Concern",outlined:"",required:""},model:{value:e.concern,callback:function(n){e.concern=n},expression:"concern"}}),e._v(" "),r("v-textarea",{attrs:{rules:e.whyConcernRules,outlined:"",label:"Why it's a concern?",counter:50,required:""},model:{value:e.whyConcern,callback:function(n){e.whyConcern=n},expression:"whyConcern"}})],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",disabled:!e.valid,nuxt:""},on:{click:e.validate}},[e._v("Submit")])],1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.b,VCheckbox:m.a,VForm:f.a,VSpacer:y.a,VTextField:x.a,VTextarea:w.a,VToolbar:k.a,VToolbarTitle:C.a})}}]);