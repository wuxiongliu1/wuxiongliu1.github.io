(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77f98cea"],{9299:function(t,e,n){},"9ffc":function(t,e,n){"use strict";var s=n("9299"),a=n.n(s);a.a},c430:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{attrs:{id:"task-input-pane"}},[n("el-input",{attrs:{placeholder:"请选择日期","suffix-icon":"el-icon-plus"},model:{value:t.todo,callback:function(e){t.todo=e},expression:"todo"}})],1),t._v(" "),n("br"),t._v(" "),n("div",{attrs:{id:"task-list-pane"}},t._l(t.tasks,(function(e){return n("div",{key:e.id},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"text item"},[t._v("\n          "+t._s(e.todo)+"\n          "),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("删除")])],1)])],1)})),0)])},a=[],i=n("b775");function o(t){return Object(i["a"])({url:"/tasks/query",method:"post",params:t})}var c={filters:{statusFilter:function(t){var e={0:"not deleted",1:"deleted"};return e[t]}},data:function(){return{listLoading:!0,visible2:!1,todo:"",tasks:{}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,o().then((function(e){t.tasks=e.data.data.records,t.tasks.push({id:1001,todo:"sleep"}),t.tasks.push({id:1002,todo:"get up"}),t.listLoading=!1}))},createResource:function(t){},updateResource:function(t){},removeResource:function(t){var e=this;this.$confirm("此操作将永久删除该文章".concat(t,", 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){(void 0)(t).then((function(t){e.$message({type:"success",message:"删除成功!"})})).catch((function(){e.$message({type:"error",message:"删除失败"})}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}},r=c,u=(n("9ffc"),n("2877")),d=Object(u["a"])(r,s,a,!1,null,null,null);e["default"]=d.exports}}]);