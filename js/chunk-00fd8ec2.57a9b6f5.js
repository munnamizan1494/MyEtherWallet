(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00fd8ec2"],{"55e2":function(e,s,t){"use strict";t.d(s,"a",(function(){return l}));var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"verify-content-container"},[t("div",{staticClass:"send-form"},[t("div",{staticClass:"title-container"},[t("div",{staticClass:"title"},[t("h4",[e._v(e._s(e.$t("common.signature"))+":")]),t("div",{staticClass:"copy-buttons"},[t("span",{on:{click:e.deleteInput}},[e._v(e._s(e.$t("common.clear")))]),t("span",{on:{click:e.copyToClipboard}},[e._v(e._s(e.$t("common.copy")))])])])]),t("div",{staticClass:"the-form signature"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],ref:"signature",staticClass:"custom-textarea-1",attrs:{placeholder:e.verifyMessageLabel,name:"signature"},domProps:{value:e.message},on:{input:function(s){s.target.composing||(e.message=s.target.value)}}})]),t("div",[""!==e.message&&!0===e.showMessage?t("p",{staticClass:"success-message"},[e._v(" "+e._s(JSON.parse(e.message).address)+" "+e._s(e.$t("verifyMessage.message.address-signed"))+": "),JSON.parse(e.message).msg.length>20?t("br"):e._e(),t("b",[e._v(e._s(JSON.parse(e.message).msg))])]):e._e(),e.errors.has("signature")?t("p",[e._v(" "+e._s(e.$t("verifyMessage.message.validation-fail"))+" ")]):e._e()])]),t("div",{staticClass:"submit-button-container"},[t("div",{staticClass:"buttons"},[t("button",{class:[e.errors.has("signature")||""===e.message?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:e.verifyMessage}},[e._v(" "+e._s(e.$t("verifyMessage.title"))+" ")])])])])},n=[],i=t("6850"),r=i["a"],c=(t("b999"),t("2877")),o=Object(c["a"])(r,a,n,!1,null,"671b698e",null),l=o.exports},6850:function(e,s,t){"use strict";(function(e){t("fb6a"),t("d3b7"),t("ac1f"),t("25f0"),t("5319");var a=t("f3f3"),n=t("ce96"),i=t("2f62"),r=t("b671");s["a"]={props:{signature:{type:String,default:""}},data:function(){return{message:this.signature,showMessage:!1,verifyMessageLabel:'\n      {\n        "address": "0xdecaf9cd2367cdbb726e904cd6397edfcae6068d",\n        "msg": "no one is giving away free ETH",\n        "sig":\n          "0xfd53681a1bbbdbd6074a884e628540f129c57\n          634c055f91d45615c943db446fb0acc35ef34bf9\n          05a78b634d4a88769b80432b4714ba2b19e2fda9\n          814a95a1dbb1b",\n        "version": "3",\n        "signer": "MEW"\n      }\n    '}},computed:Object(a["a"])({},Object(i["c"])("main",["web3"])),watch:{message:function(e){this.message=e},signature:function(e){this.message=e}},methods:{copyToClipboard:function(){this.$refs.signature.select(),document.execCommand("copy"),window.getSelection().removeAllRanges()},deleteInput:function(){this.showMessage=!1,this.message=""},verifyMessage:function(){try{var s=JSON.parse(this.message),t=Object(r["hashPersonalMessage"])(n["d"].toBuffer(s.msg)),a=e.from(s.sig.replace("0x",""),"hex");if(65!==a.length)return void n["e"].responseHandler("".concat(this.$t("errorsGlobal.something-went-wrong")),n["e"].ERROR);a[64]=0===a[64]||1===a[64]?a[64]+27:a[64],"1"===s.version&&(t=this.web3.utils.sha3(s.msg));var i=Object(r["ecrecover"])(t,a[64],a.slice(0,32),a.slice(32,64));s.address.replace("0x","")!==Object(r["pubToAddress"])(i).toString("hex")?(this.deleteInput(),this.showMessage=!1,n["e"].responseHandler("".concat(this.$t("errorsGlobal.signer-address-different")),n["e"].ERROR)):this.showMessage=!0}catch(c){this.deleteInput(),n["e"].responseHandler(c,n["e"].ERROR)}}}}}).call(this,t("1c35").Buffer)},"922a":function(e,s,t){"use strict";var a=t("bd1a"),n=t.n(a);n.a},"9c51":function(e,s,t){},b999:function(e,s,t){"use strict";var a=t("9c51"),n=t.n(a);n.a},bb65:function(e,s,t){"use strict";t.r(s),t.d(s,"default",(function(){return g}));var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"sign-message-container"},[t("interface-container-title",{attrs:{title:e.$t("verifyMessage.title")}}),t("verify-message-input"),t("div",{staticClass:"content-container"},[t("div",{staticClass:"submit-button-container"},[t("interface-bottom-text",{attrs:{"link-text":e.$t("common.help-center"),question:e.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)])],1)},n=[],i=t("539d"),r=t("55c1"),c=t("55e2"),o={name:"VerifyMessage",components:{"interface-bottom-text":i["a"],"interface-container-title":r["a"],"verify-message-input":c["a"]}},l=o,d=(t("922a"),t("2877")),u=Object(d["a"])(l,a,n,!1,null,"977a0ce8",null),g=u.exports},bd1a:function(e,s,t){}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-00fd8ec2.57a9b6f5.js.map