import{_ as a,c as o,I as n,V as l,o as t,J as e}from"./chunks/framework.2730b14e.js";const h=JSON.parse('{"title":"/get_table_by_scope","description":"","frontmatter":{"title":"/get_table_by_scope","deploy":["staging","mainnet"]},"headers":[],"relativePath":"api/REST/get-table-by-scope.md","lastUpdated":1686261083000}'),p={name:"api/REST/get-table-by-scope.md"},r=l("",13);function c(F,y,D,i,u,d){const s=e("DemoApi");return t(),o("div",null,[r,n(s,{type:"POST",query:"/v1/chain/get_table_by_scope",body:[{key:"code",value:"eosio.token"},{key:"table",value:"accounts"},{key:"limit",value:10}]},null,8,["body"])])}const b=a(p,[["render",c]]);export{h as __pageData,b as default};