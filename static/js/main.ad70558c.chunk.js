(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),s=a.n(r),o=(a(11),a(1)),i=a.n(o),l=a(4),u=a(5);a(13);var m={container:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},cover:{width:"100%",height:"".concat(60,"%"),display:"flex",justifyContent:"space-evenly",alignItems:"center",flexDirection:"column"}},d=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){document.querySelector("body").classList.add("bg-dark"),document.querySelector("body").classList.add("text-white"),function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,n,c,s,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,fetch("https://covid19.mathdro.id/api/daily").then((function(e){return e.json()})).then((function(e){return t=e})).catch((function(e){return console.log({message:e})}));case 3:return e.next=5,[];case 5:a=e.sent,t.forEach((function(e){return a.push(e.totalConfirmed)})),n=t[t.length-1].totalConfirmed,c=t[t.length-2].totalConfirmed,s=t[t.length-1].reportDate,o=t[t.length-2].reportDate,l="".concat(((n-c)/n*100).toFixed(2),"%"),r({recentCases:n,previousCases:c,recentDate:s,previousDate:o,upBy:l});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var s=function(e){e=e.toString();for(var t=/(-?\d+)(\d{3})/;t.test(e);)e=e.replace(t,"$1,$2");return e};return c.a.createElement("div",{className:"container",style:m.container},c.a.createElement("main",{className:"cover",style:m.cover},c.a.createElement("h1",{className:"text-center text-info"},"Total Recent COVID19 Cases Increase Rate"),c.a.createElement("h2",{className:"display-3 text-success"},a.upBy),c.a.createElement("h3",{className:"text-center text-muted"},"COVID19 total confirmed cases went up by ",a.upBy," from"," ",c.a.createElement("span",{className:"text-warning"},a.previousDate)," to"," ",c.a.createElement("span",{className:"text-warning"},a.recentDate)),c.a.createElement("div",{className:"text-muted"},c.a.createElement("h3",{className:"text-center"},a.previousDate,":"," ",c.a.createElement("span",{className:"text-danger"},a.previousCases&&s(a.previousCases))," cases"),c.a.createElement("h3",{className:"text-center"},a.recentDate,":"," ",c.a.createElement("span",{className:"text-danger"},a.recentCases&&s(a.recentCases))," cases"))))};a(14);s.a.render(c.a.createElement(d,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.ad70558c.chunk.js.map