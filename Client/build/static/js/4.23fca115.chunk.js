(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{125:function(n,t,e){n.exports=e.p+"static/media/001-map-location.e3779cbc.svg"},126:function(n,t,e){n.exports=e.p+"static/media/002-time.47024ab5.svg"},127:function(n,t,e){n.exports=e.p+"static/media/003-smartphone.e75dae08.svg"},137:function(n,t,e){"use strict";e.r(t);var i=e(3),a=e(6),o=e(5),r=e(9),c=e(7),s=e(10),p=e(0),h=e.n(p),u=e(2),d=e(31),l=e(106),f=e(14),m=e.n(f),x=e(4);function w(){var n=Object(i.a)(["\n  transform: skew(-20deg);\n  margin: 0px auto;\n  text-align: left;\n  list-style: none;\n  overflow: hidden;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: ",";\n  align-items: center;\n\n  @media (max-width: ","px) {\n    letter-spacing: 1.5px;\n    margin: 0px;\n  }\n\n  @media (max-width: ","px) {\n    letter-spacing: 0px;\n    margin: 0px;\n  }\n"]);return w=function(){return n},n}function g(){var n=Object(i.a)(["\n  color: white;\n  height: 40px;\n  font-size: 30px;\n  font-weight: 200;\n  margin: 0px;\n  padding: 0px;\n  letter-spacing: 4.5px;\n\n  @media (max-width: ","px) {\n    letter-spacing: 1.5px;\n  }\n\n  @media (max-width: ","px) {\n    font-size: 18px;\n    height: 100%;\n  }\n\n  @media (max-width: ","px) {\n    font-size: 12px;\n  }\n\n  @media (max-height: 400px) {\n    font-size: 10px;\n  }\n"]);return g=function(){return n},n}function v(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  @media (max-width: ","px) {\n    justify-content: center;\n    margin: 0px;\n  }\n"]);return v=function(){return n},n}function b(){var n=Object(i.a)(["\n  margin: 0px;\n  padding: 0px auto;\n  height: 100%;\n  width: 70%;\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-end;\n  flex-direction: ",";\n  position: absolute;\n  @media (max-width: ","px) {\n    align-items: center;\n  }\n"]);return b=function(){return n},n}function y(){var n=Object(i.a)(["\n  height: 40px;\n  width: 40px;\n\n  @media (max-width: ","px) {\n    height: 30px;\n    width: 30px;\n  }\n"]);return y=function(){return n},n}function j(){var n=Object(i.a)(["\n  display: flex;\n  width: 50px;\n  height: 50px;\n  margin-right: 20px;\n  justify-content: center;\n  align-items: center;\n"]);return j=function(){return n},n}function E(){var n=Object(i.a)(["\n  font-size: 22px;\n  color: white;\n  font-weight: 200;\n  display: flex;\n  width: 100%;\n  margin: 0px auto;\n  @media (max-width: ","px) {\n    font-size: 12px;\n  }\n\n  @media (max-height: 400px) {\n    font-size: 10px;\n  }\n"]);return E=function(){return n},n}function O(){var n=Object(i.a)(["\n  margin: 15px auto;\n  height: 3px;\n  background-color: white;\n  width: 100%;\n  @media (max-width: ","px) {\n    margin: 3px auto;\n  }\n  @media (max-height: 400px) {\n    height: 1px;\n  }\n"]);return O=function(){return n},n}var k=function(n){function t(n){var e;return Object(a.a)(this,t),(e=Object(r.a)(this,Object(c.a)(t).call(this,n))).scrollDown=function(){m()(e.Group[2],{align:"top",duration:1e3,ease:"linear"})},e.updateWindowDimensions=function(){window.innerWidth<=520?e.setState({show:!0}):e.setState({show:!1})},e.Group=[],e.container=null,e.tl=new d.a,e.state={width:0,height:0,show:!1},e}return Object(s.a)(t,n),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({show:this.props.show}),this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentDidUpdate",value:function(n){var t=this,e="50vw";if(n.show!==this.props.show){this.state.show&&(e="0vw");var i=this.tl;this.props.show?(i.add(l.a.fromTo([this.props.heightContainer,this.props.byeContainer],1,{height:"20vh"},{height:"40vh",onComplete:function(){return t.scrollDown()}})),i.add(l.a.fromTo(this.props.byeContainer,1,{width:"100vw"},{width:"".concat(e)})),i.add(l.a.staggerFromTo(this.Group,.6,{y:-50,opacity:0},{y:0,opacity:1},.2))):(i.add(l.a.fromTo(this.props.byeContainer,1,{width:"".concat(e)},{width:"100vw"})),i.add(l.a.staggerFromTo(this.Group,.6,{y:-50,opacity:0},{y:0,opacity:1},.2)),i.add(l.a.fromTo([this.props.heightContainer,this.props.byeContainer],1,{height:"40vh"},{height:"20vh"})))}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){var n,t=this;return n=!(!this.props.show&&!this.state.show),h.a.createElement(D,{direction:n||void 0,ref:function(n){return t.container=n}},this.props.Info.map(function(e,i){return h.a.createElement(M,{direction:n||void 0,ref:function(n){return t.Group[i]=n},key:i},h.a.createElement(S,null,h.a.createElement(G,null,e.Info1),h.a.createElement(G,null,e.Info2)),n?h.a.createElement(C,null,h.a.createElement(T,{src:e.Icon})):h.a.createElement(h.a.Fragment,null,h.a.createElement(z,null),h.a.createElement(I,null,e.Title)))}))}}]),t}(h.a.Component),z=u.c.div(O(),x.a.landscape),I=u.c.h4(E(),x.a.portrait),C=u.c.div(j()),T=u.c.img(y(),x.a.phone),D=u.c.ul(b(),function(n){return n.direction?"column":"row"},x.a.phone),S=u.c.div(v(),x.a.landscape),G=u.c.h5(g(),x.a.desktop,x.a.landscape,x.a.portrait),M=u.c.li(w(),function(n){return n.direction?"row-reverse":"column"},x.a.desktop,x.a.landscape),W=e(125),F=e.n(W),H=e(126),L=e.n(H),A=e(127),J=[{Info1:"898 3877",Info2:"pvs@pvs.is",Title:"Tengilei\xf0ir",Icon:"".concat(e.n(A).a)},{Info1:"Gagnhei\xf0i 43",Info2:"800 Selfoss",Title:"Heimilisfang",Icon:"".concat(F.a)},{Info1:"M\xe1n - F\xf6s",Info2:"fr\xe1 08:00 - 17:00",Title:"Opnunart\xedmi",Icon:"".concat(L.a)}];function U(){var n=Object(i.a)(["\n  position: absolute;\n  font-size: 16px;\n  top: 40px;\n  right: 20px;\n  z-index: 3000;\n  border: none;\n  width: 150px;\n  height: 50px;\n  background-color: #fa5757;\n  border-radius: 30px;\n  white-space: nowrap;\n  color: white;\n  border: 2px solid white;\n  cursor: pointer;\n  &:focus,\n  &:active,\n  &:hover {\n    outline: none;\n  }\n\n  @media (max-height: 400px) {\n    top: 10px;\n    font-size: 12px;\n  }\n\n  @media (max-width: ","px) {\n    width: 100px;\n    height: 40px;\n    font-size: 10px;\n    top: 20px;\n  }\n"]);return U=function(){return n},n}function P(){var n=Object(i.a)(["\n  position: absolute;\n  transform: skew(20deg);\n  background-color: #fa5757;\n  top: 0;\n  left: -150px;\n  height: 20vh;\n  width: 100%;\n  z-index: 2000;\n  border-right: 5px solid white;\n  display: flex;\n  justify-content: space-around;\n\n  @media (max-width: ","px) {\n    left: -100px;\n  }\n"]);return P=function(){return n},n}function q(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0px auto;\n  width: 100%;\n  height: 20vh;\n  position: relative;\n  overflow: hidden;\n"]);return q=function(){return n},n}var B=h.a.lazy(function(){return Promise.all([e.e(6),e.e(5)]).then(e.bind(null,132))}),K=function(n){function t(n){var e;return Object(a.a)(this,t),(e=Object(r.a)(this,Object(c.a)(t).call(this,n))).Ani=function(){e.setState({showMap:!e.state.showMap})},e.containerEnter=null,e.state={showMap:!1},e}return Object(s.a)(t,n),Object(o.a)(t,[{key:"render",value:function(){var n=this;return h.a.createElement(N,{ref:function(t){return n.containerHeight=t}},h.a.createElement(Q,{ref:function(t){return n.containerEnter=t}},h.a.createElement(k,{drasl:this.drasl,heightContainer:this.containerHeight,byeContainer:this.containerEnter,show:this.state.showMap,Info:J})),h.a.createElement(R,{onClick:function(){return n.Ani()}}," Sj\xe1 Sta\xf0setningu"),h.a.createElement(p.Suspense,{fallback:h.a.createElement("div",null,"Loading...")},h.a.createElement(B,null)))}}]),t}(p.Component),N=(t.default=K,u.c.div(q())),Q=u.c.div(P(),x.a.desktop),R=u.c.button(U(),x.a.portrait)}}]);
//# sourceMappingURL=4.23fca115.chunk.js.map