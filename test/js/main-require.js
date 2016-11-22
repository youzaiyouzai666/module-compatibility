/**
 * Created by caoyi on 2016/11/22.
 */
console.log('加载main.js');
debugger;
require.config({
     baseUrl: "sea-module"
    ,path: {
        "A":"A"
        ,"B":"B"
     }
});

require(['A','B'],function(a,b){
    console.log(a.getName());
    console.log(b.getName());
});