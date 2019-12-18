(this["webpackJsonppath-find-visualizer"]=this["webpackJsonppath-find-visualizer"]||[]).push([[0],{21:function(e,t,a){e.exports=a(36)},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);a(22),a(23);var n=a(0),o=a.n(n),r=a(15),i=a.n(r),c=(a(30),a(20)),s=a(16),l=a(1),u=a(2),d=a(4),h=a(3),p=a(5),f=(a(9),function(e){var t=e.node,a=e.onMouseDown,n=e.onMouseEnter,r=e.onMouseLeave,i=e.onMouseUp,c=t.visited?"visited":"",s=t.isPath?"path":"",l=t.isVisited?"":t.isWall?"wall":"";return o.a.createElement("div",{id:"node-".concat(t.row,"-").concat(t.col),className:"node ".concat(c," ").concat(s," ").concat(l),onMouseDown:function(){return a(t)},onMouseEnter:function(){return n(t)},onMouseLeave:function(){return r(t)},onMouseUp:function(){return i()}},o.a.createElement("strong",null,t.isStart?"S":t.isGoal?"G":""),2===t.weight?o.a.createElement("img",{className:"dice",src:"../../public/dice_2.png",unselectable:"on"}):3===t.weight?o.a.createElement("img",{className:"dice",src:"../../public/dice_3.png",unselectable:"on"}):"")}),g=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.grid,a=e.onMouseDown,n=e.onMouseEnter,r=e.onMouseLeave,i=e.onMouseUp;return o.a.createElement("div",{className:"grid"},t.map((function(e,t){return o.a.createElement("div",{className:"row",key:t},e.map((function(e,t){return o.a.createElement(f,{node:e,key:t,onMouseDown:a,onMouseEnter:n,onMouseLeave:r,onMouseUp:i})})))})))}}]),t}(n.Component),m=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.algoChosen,a=e.handleAlgoDropdown,n=e.handleNodeFeatureDropdown,r=e.activateSearch,i=e.clearWalls,c=e.clearWeight,s=e.animationActivated,l=""===t?"btn-dark":s?"btn-danger":"btn-success",u=""===t?"Choose An Algorithm":s?"Searching":"Activate "+t,d="Dijkstra"!==t&&"A*"!==t,h="Add "+e.addNodeFeature;return o.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},o.a.createElement("a",{className:"navbar-brand",href:"#"},"Path Searching Visualizer"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"dropdown nav-item"},o.a.createElement("button",{className:"btn btn-dark dropdown-toggle",type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},o.a.createElement("strong",null,"Algorithms"),o.a.createElement("span",{className:"caret"})),o.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu2"},["BFS","DFS","Dijkstra","A*"].map((function(e){return o.a.createElement("button",{className:"dropdown-item",key:e,onClick:function(){return a(e)}},e)}))),o.a.createElement("button",{className:"btn ".concat(l),type:"button",onClick:function(){return r()}},o.a.createElement("strong",null,u))),o.a.createElement("li",{className:"nav-item dropdown"},o.a.createElement("button",{className:"btn btn-dark dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},o.a.createElement("strong",null,h)),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},o.a.createElement("button",{className:"dropdown-item ",onClick:function(){return n("Wall")}},"Wall"),o.a.createElement("button",{className:"dropdown-item ",disabled:d,onClick:function(){return n("Weight 2")}},"Weight 2"),o.a.createElement("button",{className:"dropdown-item",disabled:d,onClick:function(){return n("Weight 3")}},"Weight 3"))),o.a.createElement("button",{className:"btn btn-dark",type:"button",onClick:function(){return i()}},o.a.createElement("strong",null,"Clear Walls")),o.a.createElement("button",{className:"btn btn-dark",disabled:d,type:"button",onClick:function(){return c()}},o.a.createElement("strong",null,"Clear Weight")))))}}]),t}(n.Component),w=function(){function e(){Object(l.a)(this,e),this.nodes=[],this.startNode=null,this.goalNode=null,this.open=[],this.closed=[]}return Object(u.a)(e,[{key:"initializeGraph",value:function(){this.nodes=[];for(var e=0;e<25;e++){for(var t=[],a=0;a<50;a++)t.push(this.createNode(e,a));this.nodes.push(t)}}},{key:"createNode",value:function(e,t){return{row:e,col:t,parent:null,children:[],isStart:!1,isGoal:!1,isWall:!1,visited:!1,depth:0,weight:1,g:0,h:0,f:0}}},{key:"checkOpen",value:function(e){return this.open.includes(e)}},{key:"checkClosed",value:function(e){return this.closed.includes(e)}},{key:"resetGraph",value:function(){this.nodes.forEach((function(e){e.forEach((function(e){e.parent=null,e.f=0,e.g=0,e.h=0,e.depth=0,e.visited=!1,e.isPath=!1}))})),this.closed=[],this.open=[]}}]),e}(),v=function(e,t,a){e.parent=t,e.g=t.g+a,e.f=e.g+e.h},b=function(e,t){var a=e.row,n=e.col,o=[];return a>0&&o.push(t.nodes[a-1][n]),n<t.nodes[0].length-1&&o.push(t.nodes[a][n+1]),a<t.nodes.length-1&&o.push(t.nodes[a+1][n]),n>0&&o.push(t.nodes[a][n-1]),o},k=function(e,t,a){a.checkOpen(t)||(v(t,e,1),a.open.push(t))},E=function(e,t,a){v(t,e,1),a.checkOpen(t)&&(console.log("yeyeyeye"),a.open.splice(a.open.indexOf(t),1)),a.open.unshift(t)},N=function(e,t,a){a.checkOpen(t)?e.g+t.weight+t.h<t.f&&v(t,e,t.weight):(v(t,e,t.weight),a.open.push(t))},y=function(e,t){return Math.abs(e.col-t.col)+Math.abs(e.row-t.row)},S=function(e,t){console.log(e);var a=e.startNode,n=e.goalNode;v(a,a,0);var o=e.open,r=e.closed;o.push(a);var i,c=!1;for("A*"===t&&(a.h=y(a,n));o.length;){if(i=o.shift(),r.push(i),i.isGoal){c=!0;break}b(i,e).forEach((function(a){if(!a.isWall&&!e.checkClosed(a))switch(t){case"BFS":k(i,a,e);break;case"DFS":E(i,a,e);break;default:"A*"===t&&(a.h=y(a,n)),N(i,a,e)}})),"Dijkstra"!==t&&"A*"!==t||o.sort((function(e,t){return e.f<t.f?-1:1}))}var s="";if(c){for(i=n;i.parent!==i;)s="-node("+i.row+","+i.col+")"+s,i=i.parent;s="node("+i.row+","+i.col+")"+s}i.isStart?console.log(s):console.log("NO PATH")},A=a(17),O=a.n(A);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=12,D=15,G=12,C=35,F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){var e=new w;e.initializeGraph();var t=e.nodes[j][D];e.startNode=t,t.isStart=!0;var n=e.nodes[G][C];e.goalNode=n,n.isGoal=!0,a.setState({graph:e})},a.handleAlgoDropdown=function(e){"Dijkstra"!==e||"A*"!==e?a.setState({algoChosen:e,addNodeFeature:"Wall"}):a.setState({algoChosen:e})},a.handleNodeFeatureDropdown=function(e){a.setState({addNodeFeature:e})},a.copyGraph=function(e){return O.a.cloneDeep(e.graph)},a.onMouseDown=function(e){if(!a.state.animationActivated){a.setState({clickAction:e.isStart?"start":e.isGoal?"goal":"normal"});var t=a.copyGraph(a.state);e.isStart||e.isGoal||("Wall"===a.state.addNodeFeature&&1===t.nodes[e.row][e.col].weight?t.nodes[e.row][e.col].isWall=!e.isWall:"Weight 2"!==a.state.addNodeFeature||t.nodes[e.row][e.col].isWall?"Weight 3"!==a.state.addNodeFeature||t.nodes[e.row][e.col].isWall||(t.nodes[e.row][e.col].weight=3):t.nodes[e.row][e.col].weight=2),a.setState({graph:t})}},a.onMouseEnter=function(e){""!==a.state.clickAction&&a.setState((function(t,n){var o=a.copyGraph(t);return"start"===t.clickAction?(o.startNode=o.nodes[e.row][e.col],o.nodes[e.row][e.col].isStart=!0):"goal"===t.clickAction?(o.goalNode=o.nodes[e.row][e.col],o.nodes[e.row][e.col].isGoal=!0):"normal"!==t.clickAction||e.isStart||e.isGoal||"Wall"!==a.state.addNodeFeature?"normal"!==t.clickAction||e.isStart||e.isGoal||"Weight 2"!==a.state.addNodeFeature?"normal"!==t.clickAction||e.isStart||e.isGoal||"Weight 3"!==a.state.addNodeFeature||(3!==o.nodes[e.row][e.col].weight?o.nodes[e.row][e.col].weight=3:o.nodes[e.row][e.col].weight=1):2!==o.nodes[e.row][e.col].weight?o.nodes[e.row][e.col].weight=2:o.nodes[e.row][e.col].weight=1:o.nodes[e.row][e.col].isWall=!e.isWall,M({},t,{graph:o})}))},a.onMouseLeave=function(e){""!==a.state.clickAction&&a.setState((function(t,n){var o=a.copyGraph(t);return"start"===a.state.clickAction?o.nodes[e.row][e.col].isStart=!1:"goal"===a.state.clickAction&&(o.nodes[e.row][e.col].isGoal=!1),M({},t,{graph:o})}))},a.onMouseUp=function(){""!==a.state.clickAction&&a.setState({clickAction:""})},a.activateSearch=function(){""===a.state.algoChosen||a.state.animationActivated||(a.setState((function(e,t){var n=a.copyGraph(e);return n.resetGraph(),S(n,e.algoChosen),{graph:n,animationActivated:!0}})),setTimeout((function(){return a.animateSearch()}),100))},a.animateSearch=function(){var e;a.state.graph.closed.forEach((function(t,n){e=n,setTimeout((function(){a.setState((function(e,n){var o=a.copyGraph(e);return o.nodes[t.row][t.col].visited=!0,{graph:o}}))}),100*n)})),console.log(e),setTimeout((function(){return a.animatePath()}),100*(e+1))},a.animatePath=function(){for(var e,t=a.state.graph.goalNode,n=[];t.parent!==t&&null!==t.parent;)n.unshift({row:t.row,col:t.col}),t=t.parent;n.unshift({row:t.row,col:t.col}),console.log("coordinates"),console.log(n),t.parent===t&&(n.forEach((function(t,n){e=n,setTimeout((function(){a.setState((function(e,n){var o=a.copyGraph(e);return o.nodes[t.row][t.col].isPath=!0,{graph:o}}))}),100*n)})),setTimeout((function(){a.setState({animationActivated:!1})}),100*e))},a.clearWalls=function(){if(!a.state.animationActivated){var e=a.copyGraph(a.state);e.nodes.forEach((function(e){e.forEach((function(e){e.isWall=!1}))})),a.setState({graph:e})}},a.clearWeight=function(){if(!a.state.animationActivated){var e=a.copyGraph(a.state);e.nodes.forEach((function(e){e.forEach((function(e){e.weight=1}))})),a.setState({graph:e})}},a.state={graph:new w,algorithms:[{name:"bfs"},{name:"dfs"}],algoChosen:"",animationActivated:!1,clickAction:"",addNodeFeature:"Wall"},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{algoChosen:this.state.algoChosen,handleAlgoDropdown:this.handleAlgoDropdown,handleNodeFeatureDropdown:this.handleNodeFeatureDropdown,activateSearch:this.activateSearch,resetGraph:this.resetGraph,clearWalls:this.clearWalls,clearWeight:this.clearWeight,animationActivated:this.state.animationActivated,addNodeFeature:this.state.addNodeFeature}),o.a.createElement(g,{grid:this.state.graph.nodes,onMouseDown:this.onMouseDown,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onMouseUp:this.onMouseUp}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(c.a,{basename:"/path-find-visualizer"},console.log("/path-find-visualizer"),o.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){}},[[21,1,2]]]);
//# sourceMappingURL=main.418f3f20.chunk.js.map