"use strict";(self.webpackChunkfootball_leaderboard=self.webpackChunkfootball_leaderboard||[]).push([[575],{3575:(N,d,u)=>{u.r(d),u.d(d,{LEADERBOARD_ROUTES:()=>P});const g=[{name:"England",league:"Premier League",id:39},{name:"Spain",league:"La Liga",id:140},{name:"France",league:"Ligue 1",id:61},{name:"Germany",league:"Bundesliga",id:78},{name:"Italy",league:"Serie A",id:135}],h=new Map(g.map(e=>[e.name,e]));var c=u(6814),l=u(6743),t=u(4946);let f=(()=>{class e{constructor(){}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-leaderboard"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(o,a){1&o&&t._UZ(0,"router-outlet")},dependencies:[c.ez,l.lC],styles:["[_nghost-%COMP%]{display:flex;justify-content:center}"]})}return e})();var p=u(7398),m=u(9994);class x{constructor({rank:r,logo:n,teamName:o,teamId:a,gamesCount:i,winCount:s,lossesCount:L,drawsCount:S,goalDifferenceCount:F,points:k}){this.rank=r,this.logo=n,this.teamName=o,this.teamId=a,this.gamesCount=i,this.winCount=s,this.lossesCount=L,this.drawsCount=S,this.goalDifferenceCount=F,this.points=k}}const Z=function(e){return["/leaderboard","country",e]};function _(e,r){if(1&e&&(t.TgZ(0,"li")(1,"a",1),t.ALo(2,"lowercase"),t._uU(3),t.qZA()()),2&e){const n=r.$implicit;t.xp6(1),t.MGl("id","",t.lcZ(2,4,n.name),"Select"),t.Q6J("routerLink",t.VKq(6,Z,n.name))("routerLinkActive","active"),t.xp6(2),t.Oqu(n.name)}}let y=(()=>{class e{constructor(){this.countries=g}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-country-navigation"]],standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"id","routerLink","routerLinkActive"]],template:function(o,a){1&o&&(t.TgZ(0,"nav")(1,"ul"),t.YNc(2,_,4,8,"li",0),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("ngForOf",a.countries))},dependencies:[c.ez,c.sg,c.i8,l.Bz,l.rH,l.Od],styles:["[_nghost-%COMP%]{display:block}ul[_ngcontent-%COMP%]{display:flex;padding-left:0;border:1px solid #555;border-radius:8px 8px 0 0;list-style:none;justify-content:space-between;overflow:hidden}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:1}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid #555}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:10px 20px;text-align:center}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#b9dcfc}"]})}return e})();const O=function(e){return["team",e]};function T(e,r){if(1&e&&(t.TgZ(0,"tr")(1,"td",1),t._uU(2),t.qZA(),t.TgZ(3,"td",2),t._UZ(4,"img",3),t.qZA(),t.TgZ(5,"td",4)(6,"a",5),t._uU(7),t.qZA()(),t.TgZ(8,"td",6),t._uU(9),t.qZA(),t.TgZ(10,"td",7),t._uU(11),t.qZA(),t.TgZ(12,"td",8),t._uU(13),t.qZA(),t.TgZ(14,"td",9),t._uU(15),t.qZA(),t.TgZ(16,"td",10),t._uU(17),t.qZA(),t.TgZ(18,"td",11),t._uU(19),t.qZA()()),2&e){const n=r.$implicit;t.xp6(2),t.Oqu(n.rank),t.xp6(2),t.Q6J("src",n.logo,t.LSH),t.xp6(2),t.Q6J("routerLink",t.VKq(10,O,n.teamId)),t.xp6(1),t.Oqu(n.teamName),t.xp6(2),t.Oqu(n.gamesCount),t.xp6(2),t.Oqu(n.winCount),t.xp6(2),t.Oqu(n.lossesCount),t.xp6(2),t.Oqu(n.drawsCount),t.xp6(2),t.Oqu(n.goalDifferenceCount),t.xp6(2),t.Oqu(n.points)}}let b=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-standings-table"]],inputs:{standings:"standings"},standalone:!0,features:[t.jDz],decls:21,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"cell","rank"],[1,"cell","logo"],["alt","Team logo",3,"src"],[1,"cell","team"],[1,"link",3,"routerLink"],[1,"cell","games"],[1,"cell","win"],[1,"cell","loss"],[1,"cell","draw"],[1,"cell","goal-difference"],[1,"cell","points"]],template:function(o,a){1&o&&(t.TgZ(0,"table")(1,"thead")(2,"tr"),t._UZ(3,"th")(4,"th"),t.TgZ(5,"th"),t._uU(6,"Name"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Games"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"W"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"L"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"D"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Goal difference"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Points"),t.qZA()()(),t.TgZ(19,"tbody"),t.YNc(20,T,20,12,"tr",0),t.qZA()()),2&o&&(t.xp6(20),t.Q6J("ngForOf",a.standings))},dependencies:[c.ez,c.sg,l.Bz,l.rH],styles:["table[_ngcontent-%COMP%]{width:100%;table-layout:auto;border-collapse:collapse;border:1px solid #555}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px 10px;border:1px solid #555}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:800}.cell.team[_ngcontent-%COMP%]{width:28%}.cell.logo[_ngcontent-%COMP%]{text-align:center}img[_ngcontent-%COMP%]{width:30px;height:30px}a[_ngcontent-%COMP%]{display:block;padding:5px 10px}"]})}return e})(),A=(()=>{class e{constructor(n){this.activateRouteSnapshot=n,this.standings$=this.activateRouteSnapshot.data.pipe((0,p.U)(o=>o.standings))}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(l.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-country"]],standalone:!0,features:[t.jDz],decls:5,vars:3,consts:[[3,"standings"]],template:function(o,a){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Leaderboard by country"),t.qZA(),t._UZ(2,"app-country-navigation")(3,"app-standings-table",0),t.ALo(4,"async")),2&o&&(t.xp6(3),t.Q6J("standings",t.lcZ(4,1,a.standings$)))},dependencies:[y,b,c.Ov],styles:["[_nghost-%COMP%]{width:100%}h1[_ngcontent-%COMP%]{text-align:center}"]})}return e})();function M(e,r){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",1),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8,"-"),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._UZ(14,"img",2),t.qZA()()),2&e){const n=r.$implicit;t.xp6(2),t.Q6J("src",n.homeLogo,t.LSH),t.xp6(2),t.Oqu(n.homeTeamName),t.xp6(2),t.Oqu(n.homeScore),t.xp6(4),t.Oqu(n.awayScore),t.xp6(2),t.Oqu(n.awayTeamName),t.xp6(2),t.Q6J("src",n.awayLogo,t.LSH)}}let q=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-fixtures-table"]],inputs:{fixtures:"fixtures"},standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[4,"ngFor","ngForOf"],["alt","Home team logo",1,"icon",3,"src"],["alt","Away team logo",1,"icon",3,"src"]],template:function(o,a){1&o&&(t.TgZ(0,"table")(1,"tbody"),t.YNc(2,M,15,6,"tr",0),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("ngForOf",a.fixtures))},dependencies:[c.ez,c.sg],styles:["table[_ngcontent-%COMP%]{table-layout:auto;border-collapse:collapse;border:1px solid #555}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px 10px;border:1px solid #555}.icon[_ngcontent-%COMP%]{width:30px;height:30px}"]})}return e})();const v=function(){return["../../"]};let w=(()=>{class e{constructor(n){this.activateRoute=n,this.fixtures$=this.activateRoute.data.pipe((0,p.U)(o=>o.fixtures||[]))}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(l.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-team"]],standalone:!0,features:[t.jDz],decls:6,vars:6,consts:[[3,"fixtures"],[1,"button",3,"routerLink","relativeTo"]],template:function(o,a){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Last 10 games"),t.qZA(),t._UZ(2,"app-fixtures-table",0),t.ALo(3,"async"),t.TgZ(4,"a",1),t._uU(5,"Back"),t.qZA()),2&o&&(t.xp6(2),t.Q6J("fixtures",t.lcZ(3,3,a.fixtures$)),t.xp6(2),t.Q6J("routerLink",t.DdM(5,v))("relativeTo",a.activateRoute))},dependencies:[q,c.Ov,l.rH],styles:["app-fixtures-table[_ngcontent-%COMP%]{display:block;margin-bottom:20px}.button[_ngcontent-%COMP%]{display:inline-flex;padding:10px 20px;background-color:#b9dcfc;border:1px solid #5d7180;border-radius:8px}"]})}return e})();class U{constructor({homeLogo:r,homeTeamName:n,homeScore:o,awayLogo:a,awayTeamName:i,awayScore:s}){this.homeLogo=r,this.homeTeamName=n,this.homeScore=o,this.awayLogo=a,this.awayTeamName=i,this.awayScore=s}}const P=[{path:"country",component:f,children:[{path:":country",resolve:{standings:(e,r)=>{const n=(0,t.f3M)(m.z),o=e.paramMap.get("country");if(!o)return[];const a=h.get(o);return n.getStanding(a.id).pipe((0,p.U)(i=>i.map(s=>new x({rank:s.rank,teamName:s.team.name,teamId:s.team.id,drawsCount:s.all.draw,gamesCount:s.all.played,logo:s.team.logo,goalDifferenceCount:s.goalsDiff,lossesCount:s.all.lose,points:s.points,winCount:s.all.win}))))}},component:A},{path:":country/team/:teamId",component:w,resolve:{fixtures:(e,r)=>{const n=e.paramMap.get("teamId"),o=(0,t.f3M)(m.z);return n?o.getFixtures(Number(n)).pipe((0,p.U)(a=>a.map(i=>new U({awayLogo:i.teams.away.logo,awayScore:i.goals.away,awayTeamName:i.teams.away.name,homeLogo:i.teams.home.logo,homeScore:i.goals.home,homeTeamName:i.teams.home.name})))):[]}}}]},{path:"",pathMatch:"full",redirectTo:`country/${g[0].name}`}]}}]);