!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("webjack",[],e):"object"==typeof exports?exports.webjack=e():t.webjack=e()}(window,function(){return(window.webpackJsonpwebjack=window.webpackJsonpwebjack||[]).push([[0],{"+caQ":function(t,e,n){"use strict";var a=n("kSoj");n.n(a).a},"/7QA":function(t,e,n){"use strict";n.r(e);var a,i=n("nOdg"),o=n.n(i),s=n("ZHQY");!function(t){t.local="local",t.training="training"}(a||(a={}));var c={name:"Menu",methods:{joinLocalTable:function(){this.$store.dispatch("joinLocalTable")},joinTrainingTable:function(){this.$store.dispatch("joinTrainingTable")}}},l=(n("+caQ"),n("psIG")),r={components:{Menu:Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"full-height centered main-menu"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"row top-space-20"},[n("div",{staticClass:"col-xs-12 text-center"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.joinLocalTable}},[t._v("\n                    Play offline\n                ")]),t._v(" "),n("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.joinTrainingTable}},[t._v("\n                    Practice basic strategy\n                ")])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 text-center"},[e("p",{staticClass:"title"},[this._v("Webjack")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 text-center"},[e("p",{staticClass:"subtitle"},[this._v("Cashless multiplayer blackjack")])])])}],!1,null,null,null).exports,LocalTable:s.LocalTable,TrainingTable:s.TrainingTable},data:function(){return{GameModes:a}},computed:{gameMode:function(){return this.$store.state.gameMode},serverUrl:function(){return"/webjack/api/{endpoint}"}},methods:{exitTable:function(){this.$store.dispatch("exitTable")}}},u=(n("A0++"),Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"full-height",attrs:{id:"app"}},[t.gameMode?t._e():n("Menu"),t._v(" "),n("LocalTable",{attrs:{renderCondition:t.gameMode===t.GameModes.local},on:{TableExited:t.exitTable}}),t._v(" "),n("TrainingTable",{attrs:{renderCondition:t.gameMode===t.GameModes.training},on:{TableExited:t.exitTable}})],1)},[],!1,null,null,null).exports),d=n("lOrp");o.a.use(d.a);n("Obzq");o.a.config.productionTip=!1,new o.a({el:"#app",render:function(t){return t(u)},store:new d.a.Store({state:{gameMode:void 0},actions:{exitTable:function(t){t.commit("gameMode",void 0)},joinLocalTable:function(t){t.commit("gameMode",a.local)},joinTrainingTable:function(t){t.commit("gameMode",a.training)}},mutations:{gameMode:function(t,e){t.gameMode=e}}})})},"A0++":function(t,e,n){"use strict";var a=n("DNjg");n.n(a).a},DNjg:function(t,e,n){},kSoj:function(t,e,n){}},[["/7QA",9,7,1,2,3,5,4,6,8]]])});