function jlatexmath(){var Jb='',Kb=0,Lb='gwt.codesvr=',Mb='gwt.hosted=',Nb='gwt.hybrid',Ob='jlatexmath',Pb='__gwt_marker_jlatexmath',Qb='<script id="',Rb='"><\/script>',Sb='SCRIPT',Tb='#',Ub='?',Vb='/',Wb=1,Xb='base',Yb='img',Zb='clear.cache.gif',$b='meta',_b='name',ac='gwt:property',bc='content',cc='=',dc='gwt:onPropertyErrorFn',ec='Bad handler "',fc='" for "gwt:onPropertyErrorFn"',gc='gwt:onLoadErrorFn',hc='" for "gwt:onLoadErrorFn"',ic='user.agent',jc='webkit',kc='safari',lc='msie',mc=10,nc=11,oc='ie10',pc=9,qc='ie9',rc=8,sc='ie8',tc='gecko',uc='gecko1_8',vc=2,wc=3,xc=4,yc='Single-script hosted mode not yet implemented. See issue ',zc='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',Ac='DECB23D890B43E1F4879C072160D65DB',Bc=':1',Cc=':2',Dc=':3',Ec=':4',Fc=':',Gc='DOMContentLoaded',Hc=50;var k=Jb,l=Kb,m=Lb,n=Mb,o=Nb,p=Ob,q=Pb,r=Qb,s=Rb,t=Sb,u=Tb,v=Ub,w=Vb,A=Wb,B=Xb,C=Yb,D=Zb,F=$b,G=_b,H=ac,I=bc,J=cc,K=dc,L=ec,M=fc,N=gc,O=hc,P=ic,Q=jc,R=kc,S=lc,T=mc,U=nc,V=oc,W=pc,X=qc,Y=rc,Z=sc,$=tc,_=uc,ab=vc,bb=wc,cb=xc,db=yc,eb=zc,fb=Ac,gb=Bc,hb=Cc,ib=Dc,jb=Ec,kb=Fc,lb=Gc,mb=Hc;var nb=window,ob=document,pb,qb,rb=k,sb={},tb=[],ub=[],vb=[],wb=l,xb,yb;if(!nb.__gwt_stylesLoaded){nb.__gwt_stylesLoaded={}}if(!nb.__gwt_scriptsLoaded){nb.__gwt_scriptsLoaded={}}function zb(){var b=false;try{var c=nb.location.search;return (c.indexOf(m)!=-1||(c.indexOf(n)!=-1||nb.external&&nb.external.gwtOnLoad))&&c.indexOf(o)==-1}catch(a){}zb=function(){return b};return b}
function Ab(){if(pb&&qb){pb(xb,p,rb,wb)}}
function Bb(){var e,f=q,g;ob.write(r+f+s);g=ob.getElementById(f);e=g&&g.previousSibling;while(e&&e.tagName!=t){e=e.previousSibling}function h(a){var b=a.lastIndexOf(u);if(b==-1){b=a.length}var c=a.indexOf(v);if(c==-1){c=a.length}var d=a.lastIndexOf(w,Math.min(c,b));return d>=l?a.substring(l,d+A):k}
;if(e&&e.src){rb=h(e.src)}if(rb==k){var i=ob.getElementsByTagName(B);if(i.length>l){rb=i[i.length-A].href}else{rb=h(ob.location.href)}}else if(rb.match(/^\w+:\/\//)){}else{var j=ob.createElement(C);j.src=rb+D;rb=h(j.src)}if(g){g.parentNode.removeChild(g)}}
function Cb(){var b=document.getElementsByTagName(F);for(var c=l,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(G),g;if(f){if(f==H){g=e.getAttribute(I);if(g){var h,i=g.indexOf(J);if(i>=l){f=g.substring(l,i);h=g.substring(i+A)}else{f=g;h=k}sb[f]=h}}else if(f==K){g=e.getAttribute(I);if(g){try{yb=eval(g)}catch(a){alert(L+g+M)}}}else if(f==N){g=e.getAttribute(I);if(g){try{xb=eval(g)}catch(a){alert(L+g+O)}}}}}}
__gwt_isKnownPropertyValue=function(a,b){return b in tb[a]};__gwt_getMetaProperty=function(a){var b=sb[a];return b==null?null:b};function Db(a,b){var c=vb;for(var d=l,e=a.length-A;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function Eb(a){var b=ub[a](),c=tb[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(yb){yb(a,d,b)}throw null}
ub[P]=function(){var a=navigator.userAgent.toLowerCase();var b=ob.documentMode;if(function(){return a.indexOf(Q)!=-1}())return R;if(function(){return a.indexOf(S)!=-1&&(b>=T&&b<U)}())return V;if(function(){return a.indexOf(S)!=-1&&(b>=W&&b<U)}())return X;if(function(){return a.indexOf(S)!=-1&&(b>=Y&&b<U)}())return Z;if(function(){return a.indexOf($)!=-1||b>=U}())return _;return k};tb[P]={'gecko1_8':l,'ie10':A,'ie8':ab,'ie9':bb,'safari':cb};jlatexmath.onScriptLoad=function(a){jlatexmath=null;pb=a;Ab()};if(zb()){alert(db+eb);return}Bb();Cb();try{var Fb;Db([_],fb);Db([V],fb+gb);Db([Z],fb+hb);Db([X],fb+ib);Db([R],fb+jb);Fb=vb[Eb(P)];var Gb=Fb.indexOf(kb);if(Gb!=-1){wb=Number(Fb.substring(Gb+A))}}catch(a){return}var Hb;function Ib(){if(!qb){qb=true;Ab();if(ob.removeEventListener){ob.removeEventListener(lb,Ib,false)}if(Hb){clearInterval(Hb)}}}
if(ob.addEventListener){ob.addEventListener(lb,function(){Ib()},false)}var Hb=setInterval(function(){if(/loaded|complete/.test(ob.readyState)){Ib()}},mb)}
jlatexmath();(function () {var $gwt_version = "2.8.1";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {$wnd.__gwtStatsEvent(a)} : null;var $strongName = 'DECB23D890B43E1F4879C072160D65DB';function U(){}
function Ue(){}
function Fe(){}
function Qv(){}
function Nv(){}
function tb(){}
function vb(){}
function xd(){}
function Hd(){}
function Od(){}
function of(){}
function ew(){}
function Mw(){}
function xx(){}
function Ax(){}
function Dx(){}
function Gx(){}
function Jx(){}
function _y(){}
function cz(){}
function cA(){}
function LA(){}
function PC(){}
function RC(){}
function TC(){}
function VC(){}
function NE(){}
function iZ(){}
function K$(){}
function M$(){}
function O$(){}
function Q$(){}
function S$(){}
function U$(){}
function W$(){}
function Y$(){}
function $$(){}
function a_(){}
function c_(){}
function e_(){}
function g_(){}
function i_(){}
function u6(){}
function P6(){}
function n7(){}
function p7(){}
function t8(){}
function l9(){}
function E9(){}
function O9(){}
function hw(a){}
function RB(a){}
function pF(a){}
function q$(a){}
function dbb(){}
function fbb(){}
function hbb(){}
function jbb(){}
function lbb(){}
function nbb(){}
function pbb(){}
function rbb(){}
function tbb(){}
function vbb(){}
function xbb(){}
function zbb(){}
function Bbb(){}
function Dbb(){}
function Fbb(){}
function Hbb(){}
function Jbb(){}
function Lbb(){}
function Nbb(){}
function Pbb(){}
function Rbb(){}
function Tbb(){}
function Vbb(){}
function Xbb(){}
function Zbb(){}
function _bb(){}
function bcb(){}
function dcb(){}
function fcb(){}
function hcb(){}
function jcb(){}
function lcb(){}
function ncb(){}
function pcb(){}
function rcb(){}
function tcb(){}
function vcb(){}
function xcb(){}
function zcb(){}
function Bcb(){}
function Dcb(){}
function Fcb(){}
function Hcb(){}
function Jcb(){}
function Lcb(){}
function Ncb(){}
function Pcb(){}
function Rcb(){}
function Tcb(){}
function Vcb(){}
function Xcb(){}
function Zcb(){}
function _cb(){}
function bdb(){}
function ddb(){}
function fdb(){}
function hdb(){}
function jdb(){}
function ldb(){}
function ndb(){}
function pdb(){}
function rdb(){}
function tdb(){}
function vdb(){}
function xdb(){}
function zdb(){}
function Bdb(){}
function Ddb(){}
function pjb(){}
function xjb(){}
function Flb(){}
function Jlb(){}
function Llb(){}
function emb(){}
function gmb(){}
function imb(){}
function kmb(){}
function mmb(){}
function omb(){}
function qmb(){}
function smb(){}
function umb(){}
function ee(){Ud()}
function je(){Ud()}
function le(){Ud()}
function pe(){Ud()}
function bx(){Sw()}
function hx(){Sw()}
function ex(){cx()}
function qx(){px()}
function rx(){px()}
function sx(){px()}
function tx(){px()}
function Jy(){vy()}
function fH(){dH()}
function S1(){R1()}
function c7(){H9()}
function Vw(a){pw()}
function Cc(a){Bc=a}
function Y6(a){T6=a}
function $6(){V6(T6)}
function a7(){W6(T6)}
function b7(){X6(T6)}
function _eb(){_eb=Nv}
function we(a,b){a.b=b}
function te(a,b){a.d=b}
function ve(a,b){a.a=b}
function Tv(a,b){a.a=b}
function Uv(a,b){a.b=b}
function db(a,b){a.e=b}
function jC(a,b){a.e=b}
function jA(a,b){a.n=b}
function kA(a,b){a.p=b}
function kx(a,b){a.a=b}
function kC(a,b){a.f=b}
function $_(a,b){a.f=b}
function X_(a,b){a.a=b}
function ZE(a,b){a.a=b}
function Z_(a,b){a.e=b}
function Y_(a,b){a.b=b}
function __(a,b){a.i=b}
function _8(a,b){a.e=b}
function w8(a,b){a.a=b}
function b2(a,b){a.a=b}
function c2(a,b){a.c=b}
function CZ(a,b){a.c=b}
function lA(a,b){a.r=b}
function MH(a,b){a.d=b}
function a0(a,b){a.j=b}
function x8(a,b){a.b=b}
function $c(a){this.b=a}
function dd(a){this.c=a}
function k0(a){this.c=a}
function Ze(a){this.a=a}
function gf(a){this.a=a}
function sf(a){this.a=a}
function Ef(a){this.a=a}
function aw(a){this.a=a}
function gw(a){this.a=a}
function Px(a){this.a=a}
function jD(a){this.a=a}
function w7(a){this.a=a}
function x7(a){this.a=a}
function J7(a){this.a=a}
function q8(a){this.a=a}
function L8(a){this.a=a}
function y9(a){this.a=a}
function C9(a){this.a=a}
function D9(a){this.a=a}
function v9(a){this.b=a}
function Xeb(a){this.a=a}
function afb(a){this.a=a}
function Wfb(a){this.a=a}
function fgb(a){this.a=a}
function Rhb(a){this.a=a}
function mib(a){this.a=a}
function qib(a){this.a=a}
function gib(a){this.c=a}
function _ib(a){this.c=a}
function Hjb(a){this.b=a}
function Ujb(a){this.b=a}
function ckb(a){this.b=a}
function ekb(a){this.a=a}
function hkb(a){this.a=a}
function Ie(){this.a={}}
function Bmb(a,b){a.a=b}
function Ib(b,a){b.font=a}
function cf(a){return a.a}
function kf(a){return a.a}
function xf(a){return a.a}
function Jf(a){return a.a}
function Xf(a){return a.a}
function qv(a){return a.e}
function rf(){return null}
function Qf(){return null}
function tz(a){a.f=new ulb}
function wZ(a){a.a=new ulb}
function bA(a,b){a.a|=1<<b}
function hA(a,b){nlb(a.k,b)}
function z0(a,b){uz(a.d,b)}
function f8(a){Y7(a.a,a.b)}
function Cd(a){Bd();Ad.R(a)}
function mb(){mb=Nv;px()}
function s0(){s0=Nv;tB()}
function Rc(){Rc=Nv;Qc=$wnd}
function jx(){jx=Nv;new Ckb}
function rA(){cz.call(this)}
function FB(){cz.call(this)}
function kD(){cz.call(this)}
function $E(){cz.call(this)}
function xF(){cz.call(this)}
function SF(){cz.call(this)}
function _Y(){cz.call(this)}
function Y1(){cz.call(this)}
function l7(){cz.call(this)}
function UE(){NE.call(this)}
function iF(){nA.call(this)}
function DH(){nA.call(this)}
function $eb(){xc.call(this)}
function Jfb(){xc.call(this)}
function Rfb(){xc.call(this)}
function Tfb(){xc.call(this)}
function qgb(){xc.call(this)}
function ghb(){xc.call(this)}
function rkb(){xc.call(this)}
function Nlb(){xc.call(this)}
function Pib(){Jib(this)}
function Ckb(){Ihb(this)}
function $F(a,b){mlb(a.b,b)}
function Z7(a,b){Nib(a.c,b)}
function J9(a,b){Hhb(G9,a,b)}
function gA(a,b){Dib(a.k,0,b)}
function Wc(a,b){Rc();a.src=b}
function QD(a,b){return a.q*b}
function RD(a,b){return a.u*b}
function SD(a,b){return a.D*b}
function Jb(b,a){b.lineCap=a}
function Kb(b,a){b.lineJoin=a}
function r7(a){a!=null&&a()}
function bb(a){return pw(),a.e}
function Hb(b,a){b.fillStyle=a}
function Lb(b,a){b.lineWidth=a}
function q7(){this.a=new bhb}
function Fkb(){this.a=new Ckb}
function zmb(){this.a=new Ckb}
function Ec(){Ec=Nv;Dc=new U}
function ud(){ud=Nv;td=new xd}
function nf(){nf=Nv;mf=new of}
function $v(){$v=Nv;Zv=new ew}
function P7(){P7=Nv;O7=new $7}
function Q9(){Q9=Nv;M9=new O9}
function Ac(a){yc.call(this,a)}
function lf(a){yc.call(this,a)}
function Mx(a){yc.call(this,a)}
function Tx(a){Px.call(this,a)}
function Wx(a){Tx.call(this,a)}
function Xx(a){Tx.call(this,a)}
function Yx(a){Xx.call(this,a)}
function $x(a){Yx.call(this,a)}
function ay(a){Xx.call(this,a)}
function ey(a){Tx.call(this,a)}
function fy(a){Tx.call(this,a)}
function iy(a){Tx.call(this,a)}
function sy(a){Tx.call(this,a)}
function ky(a){Px.call(this,a)}
function py(a){ky.call(this,a)}
function Xe(a){Ve.call(this,a)}
function iw(a){hw.call(this,a)}
function cD(a){$C.call(this,a)}
function rH(a){$C.call(this,a)}
function g$(a){$C.call(this,a)}
function y6(a){yc.call(this,a)}
function A6(a){y6.call(this,a)}
function C6(a){A6.call(this,a)}
function G6(a){C6.call(this,a)}
function I6(a){y6.call(this,a)}
function K6(a){y6.call(this,a)}
function Df(){Ef.call(this,{})}
function H7(){this.a=(P7(),O7)}
function He(a,b){a.a['load']=b}
function Xc(a,b){Rc();a.text=b}
function ME(a,b,c){a.i=b;a.e=c}
function e8(a,b){T7(a.a,b,a.b)}
function Z8(a,b,c){r9(a.d,b,c)}
function d9(a,b,c){t9(a.d,b,c)}
function Fmb(a,b){!!b&&(a.c=b)}
function Ge(a,b){return a.a[b]}
function ogb(a){return 0>a?0:a}
function Nf(a){return new sf(a)}
function Pf(a){return new Sf(a)}
function rw(a){pw();return true}
function Ww(a){Sw();pw();return}
function ad(a,b){a.a=b;return a}
function cd(a,b){a.d=b;return a}
function I_(a,b){a.c=b;return a}
function h0(a,b){a.a=b;return a}
function Dw(a,b){a.__listener=b}
function Mb(b,a){b.miterLimit=a}
function Sfb(a){yc.call(this,a)}
function Ufb(a){yc.call(this,a)}
function Vfb(a){yc.call(this,a)}
function rgb(a){yc.call(this,a)}
function hhb(a){yc.call(this,a)}
function ejb(a){Umb(a);this.a=a}
function _mb(a){Umb(a);return a}
function Wkb(){Wkb=Nv;Vkb=Ykb()}
function JD(){JD=Nv;ID=new Ckb}
function e1(){e1=Nv;d1=new Ckb}
function y0(){y0=Nv;x0=new Gkb}
function jd(){jd=Nv;!!(Bd(),Ad)}
function qb(a){db(this,(pw(),a))}
function uw(a){pw();nw.db(a,hob)}
function sw(a,b){pw();nw.db(a,b)}
function Zf(a,b){return zfb(a,b)}
function Cb(c,a,b){c.lineTo(a,b)}
function Eb(c,a,b){c.moveTo(a,b)}
function xZ(a,b){!!b&&mlb(a.a,b)}
function TD(a,b){a.b=b==-1?a.f:b}
function VD(a,b){a.g=b==-1?a.f:b}
function YD(a,b){a.r=b==-1?a.f:b}
function ZD(a,b){a.v=b==-1?a.f:b}
function $D(a,b){a.A=b==-1?a.f:b}
function Nb(b,a){b.strokeStyle=a}
function bd(a){a.b=true;return a}
function y8(a){this.a=0;this.b=a}
function Xy(){Wy();Ry.call(this)}
function Hv(){Fv==null&&(Fv=[])}
function Fdb(){Fdb=Nv;R9=new dbb}
function Gdb(){Gdb=Nv;S9=new zbb}
function Hdb(){Hdb=Nv;T9=new Vbb}
function Odb(){Odb=Nv;$9=new fbb}
function Kdb(){Kdb=Nv;W9=new fdb}
function Ldb(){Ldb=Nv;X9=new zdb}
function Mdb(){Mdb=Nv;Y9=new Bdb}
function Ndb(){Ndb=Nv;Z9=new Ddb}
function Idb(){Idb=Nv;U9=new pcb}
function Jdb(){Jdb=Nv;V9=new Lcb}
function Pdb(){Pdb=Nv;_9=new hbb}
function Gkb(){this.a=new Dkb(6)}
function bhb(){Xeb.call(this,'')}
function chb(){Xeb.call(this,'')}
function ehb(a){Vfb.call(this,a)}
function zgb(a){Sfb.call(this,a)}
function okb(a){Kjb.call(this,a)}
function xmb(a,b){Hhb(a.a,b.b,b)}
function pgb(a,b){return a<b?a:b}
function gy(a,b){return xy(a.a,b)}
function ib(a,b){!!a.d&&Ke(a.d,b)}
function pb(a){(pw(),a.e).width=1}
function pfb(a){ofb(a);return a.j}
function qfb(a){ofb(a);return a.g}
function Ay(a){vy();return a.data}
function Ey(a){vy();return a.name}
function Eg(a){return a.l|a.m<<22}
function Zc(a){a.a=false;return a}
function sd(){ed!=0&&(ed=0);hd=-1}
function Qdb(){Qdb=Nv;aab=new jbb}
function Rdb(){Rdb=Nv;bab=new lbb}
function Sdb(){Sdb=Nv;cab=new nbb}
function Tdb(){Tdb=Nv;dab=new pbb}
function Udb(){Udb=Nv;eab=new rbb}
function Vdb(){Vdb=Nv;fab=new tbb}
function Wdb(){Wdb=Nv;gab=new vbb}
function Xdb(){Xdb=Nv;hab=new xbb}
function Ydb(){Ydb=Nv;iab=new Bbb}
function Zdb(){Zdb=Nv;jab=new Dbb}
function $db(){$db=Nv;kab=new Fbb}
function _db(){_db=Nv;lab=new Hbb}
function aeb(){aeb=Nv;mab=new Jbb}
function beb(){beb=Nv;nab=new Lbb}
function ceb(){ceb=Nv;oab=new Nbb}
function deb(){deb=Nv;pab=new Pbb}
function eeb(){eeb=Nv;qab=new Rbb}
function feb(){feb=Nv;rab=new Tbb}
function geb(){geb=Nv;sab=new Xbb}
function heb(){heb=Nv;tab=new Zbb}
function ieb(){ieb=Nv;uab=new _bb}
function jeb(){jeb=Nv;vab=new bcb}
function keb(){keb=Nv;wab=new dcb}
function leb(){leb=Nv;xab=new fcb}
function meb(){meb=Nv;yab=new hcb}
function neb(){neb=Nv;zab=new jcb}
function oeb(){oeb=Nv;Aab=new lcb}
function peb(){peb=Nv;Bab=new ncb}
function qeb(){qeb=Nv;Cab=new rcb}
function reb(){reb=Nv;Dab=new tcb}
function seb(){seb=Nv;Eab=new vcb}
function teb(){teb=Nv;Fab=new xcb}
function ueb(){ueb=Nv;Gab=new zcb}
function veb(){veb=Nv;Hab=new Bcb}
function web(){web=Nv;Iab=new Dcb}
function xeb(){xeb=Nv;Jab=new Fcb}
function yeb(){yeb=Nv;Kab=new Hcb}
function zeb(){zeb=Nv;Lab=new Jcb}
function Aeb(){Aeb=Nv;Mab=new Ncb}
function Beb(){Beb=Nv;Nab=new Pcb}
function Ceb(){Ceb=Nv;Oab=new Rcb}
function Deb(){Deb=Nv;Pab=new Tcb}
function Eeb(){Eeb=Nv;Qab=new Vcb}
function Feb(){Feb=Nv;Rab=new Xcb}
function Geb(){Geb=Nv;Sab=new Zcb}
function Heb(){Heb=Nv;Tab=new _cb}
function Ieb(){Ieb=Nv;Uab=new bdb}
function Jeb(){Jeb=Nv;Vab=new ddb}
function Keb(){Keb=Nv;Wab=new hdb}
function Leb(){Leb=Nv;Xab=new jdb}
function Meb(){Meb=Nv;Yab=new ldb}
function Neb(){Neb=Nv;Zab=new ndb}
function Oeb(){Oeb=Nv;$ab=new pdb}
function Peb(){Peb=Nv;_ab=new rdb}
function Qeb(){Qeb=Nv;abb=new tdb}
function Reb(){Reb=Nv;bbb=new vdb}
function Seb(){Seb=Nv;cbb=new xdb}
function wjb(){wjb=Nv;vjb=new xjb}
function ljb(){ljb=Nv;kjb=new pjb}
function Kjb(a){this.b=a;this.a=a}
function Ob(a,b){this.e=a;this.f=b}
function zc(a,b){rc.call(this,a,b)}
function vx(a,b){rc.call(this,a,b)}
function BA(a,b){Ob.call(this,a,b)}
function lF(a,b){oA.call(this,a,b)}
function lG(a,b){this.a=a;this.b=b}
function bE(a,b){this.a=a;this.b=b}
function uv(a,b){return rv(a,b)==0}
function Mf(a){return ff(),a?ef:df}
function $y(a){throw qv(new cy(a))}
function JG(a){a.b=new x_(0,0,0,0)}
function ZF(a,b){!!b&&Dib(a.b,0,b)}
function z6(a,b){zc.call(this,a,b)}
function B6(a,b){z6.call(this,a,b)}
function L6(a,b){z6.call(this,a,b)}
function F6(a,b){B6.call(this,a,b)}
function g8(a,b){this.a=a;this.b=b}
function h9(a,b){this.a=a;this.b=b}
function Jhb(a){return a.a.c+a.b.c}
function ob(a){(pw(),a.e).height=1}
function Xw(a){(Ud(),Td).X(a);Yw(a)}
function Ud(){Ud=Nv;Td=Qg(kv(),79)}
function pw(){pw=Nv;nw=Qg(lv(),80)}
function vy(){vy=Nv;uy=Qg(ov(),124)}
function aB(){aB=Nv;_A=new Ckb;iB()}
function H9(){H9=Nv;G9=new Ckb;L9()}
function cx(){cx=Nv;Sw();Pw[kob]=Ww}
function i0(a){a.b=cgb(0);return a}
function s1(a){a.a.o=a.o;return a.a}
function Dy(a){vy();return a.length}
function $kb(){Wkb();return new Vkb}
function Ekb(a,b){return Chb(a.a,b)}
function Teb(a,b){return Egb(a.a,b)}
function Veb(a,b){return Pgb(a.a,b)}
function alb(a,b){return a.a.get(b)}
function Hmb(a){return ymb(Amb(),a)}
function Rd(a){return (Ud(),Td).Z(a)}
function ah(a){return a==null?null:a}
function Gy(a){vy();return a.tagName}
function rd(a){$wnd.clearTimeout(a)}
function ZA(a,b){$A.call(this,a,b,b)}
function _U(){rO.call(this,bqb,25,1)}
function JW(){rO.call(this,Qpb,47,1)}
function _W(){rO.call(this,'u',55,1)}
function bX(){rO.call(this,'v',56,1)}
function dX(){rO.call(this,'H',57,1)}
function fX(){rO.call(this,'r',58,1)}
function jX(){rO.call(this,'U',59,1)}
function lX(){rO.call(this,'T',60,1)}
function nX(){rO.call(this,'t',61,1)}
function LX(){rO.call(this,Qqb,72,1)}
function _F(){cz.call(this);YF(this)}
function BG(){cz.call(this);wG(this)}
function s$(){cz.call(this);q$(this)}
function OZ(a,b){PZ.call(this,a,b,b)}
function dF(a,b){hF(a,b);nlb(a.k,b)}
function tgb(a,b){this.b=a;this.a=b}
function zib(a,b){this.a=a;this.b=b}
function Pgb(a,b){return a.substr(b)}
function nlb(a,b){olb(a,b,a.c.b,a.c)}
function Nmb(a,b,c){a.splice(b,c)}
function Lmb(a,b,c){a.splice(b,0,c)}
function Ygb(a,b){a.a+=''+b;return a}
function Zgb(a,b){a.a+=''+b;return a}
function $gb(a,b){a.a+=''+b;return a}
function j0(a,b){a.d=cgb(b);return a}
function jy(a,b){return Ux(Hy(a.a,b))}
function oy(a,b){return Ux(Hy(a.a,b))}
function jg(a){return kg(a.l,a.m,a.h)}
function JA(a){return new ZA(a.a,a.c)}
function aA(a,b){return (a.a>>b&1)==1}
function dA(a){cz.call(this);this.a=a}
function GA(a){cz.call(this);this.a=a}
function oD(a){cz.call(this);this.a=a}
function DD(a){LA.call(this);this.a=a}
function wE(a){nA.call(this);this.t=a}
function uF(a){cz.call(this);this.a=a}
function AF(a){cz.call(this);this.a=a}
function PF(a){cz.call(this);this.a=a}
function oH(a){cz.call(this);this.a=a}
function lC(a){QB();RB(this);this.g=a}
function Le(a){this.a=new Te;this.b=a}
function De(){De=Nv;Ce=new Be(new Fe)}
function Ox(){Ox=Nv;Nx=(vy(),vy(),uy)}
function C8(){B8(this,0,0,0,0,0,0)}
function vO(){sO.call(this,frb,0,2,2)}
function BS(){sO.call(this,krb,1,2,2)}
function ZP(){rO.call(this,grb,136,0)}
function _P(){rO.call(this,hrb,137,0)}
function VS(){rO.call(this,brb,207,0)}
function XS(){rO.call(this,crb,208,0)}
function bT(){rO.call(this,drb,210,0)}
function zV(){rO.call(this,srb,270,0)}
function BV(){rO.call(this,trb,271,0)}
function bV(){rO.call(this,$qb,259,0)}
function TU(){rO.call(this,Xqb,255,0)}
function XU(){rO.call(this,Yqb,257,0)}
function ZU(){rO.call(this,Zqb,258,0)}
function TV(){rO.call(this,zpb,279,1)}
function LS(){rO.call(this,'k',202,1)}
function rS(){rO.call(this,'c',194,1)}
function ZV(){rO.call(this,'bf',29,0)}
function tW(){rO.call(this,'sf',39,0)}
function hW(){rO.call(this,'it',34,0)}
function lW(){rO.call(this,'rm',36,0)}
function xW(){rO.call(this,'tt',41,0)}
function nA(){oA.call(this,null,null)}
function n$(a){cz.call(this);this.a=a}
function n_(a){cz.call(this);this.a=a}
function k_(a){cz.call(this);this.a=a}
function P_(a){cz.call(this);this.a=a}
function fZ(a){cz.call(this);this.a=a}
function j1(a){cz.call(this);this.a=a}
function p1(a){cz.call(this);this.a=a}
function V1(a){cz.call(this);this.a=a}
function e2(a){cz.call(this);this.b=a}
function Qkb(a){this.a=$kb();this.b=a}
function clb(a){this.a=$kb();this.b=a}
function j8(){this.a=null;this.b=true}
function inb(){inb=Nv;fnb={};hnb={}}
function Ggb(a,b){return Umb(a),a===b}
function Igb(a,b){return a.indexOf(b)}
function Plb(a){return a!=null?$(a):0}
function xhb(a){return !a?null:a.pc()}
function kc(a){a.j=bg(Wt,vnb,75,0,0,1)}
function cF(a,b){hF(a,b);Dib(a.k,0,b)}
function v8(a,b,c,d){u8(this,a,c,b,d)}
function A8(a,b,c,d){z8(this,a,b,c,d)}
function Gb(e,a,b,c,d){e.rect(a,b,c,d)}
function dD(a,b,c){_C.call(this,a,b,c)}
function sH(a,b,c){_C.call(this,a,b,c)}
function dW(){rO.call(this,'cal',32,1)}
function FW(){rO.call(this,'Bbb',45,1)}
function hX(){rO.call(this,'llap',5,1)}
function DX(){rO.call(this,'rlap',6,1)}
function tX(){rO.call(this,'hat',64,1)}
function TX(){rO.call(this,'dot',76,1)}
function LV(){rO.call(this,'st',276,1)}
function HU(){rO.call(this,'sc',249,0)}
function pP(){rO.call(this,'cr',119,0)}
function tS(){rO.call(this,'IJ',195,0)}
function vS(){rO.call(this,'ij',196,0)}
function RX(){rO.call(this,'vec',75,1)}
function ZX(){rO.call(this,'clap',7,1)}
function h$(a,b,c){_C.call(this,a,b,c)}
function C7(a,b,c){B7.call(this,a,b,c)}
function U8(a,b,c,d,e){Bb(a.d,b,c,d,e)}
function a9(a,b){a.f=b;Ib(a.d,y7(a.f))}
function W8(a){a.b>0||!!a.e&&r7(a.e.a)}
function Jib(a){a.a=bg(Ut,vnb,1,0,5,1)}
function ZG(){ZG=Nv;YG=new D$(1,0,1,0)}
function q6(a){this.a=a;Hhb(o6,a,this)}
function Bw(a){if(!zw){a.cb();zw=true}}
function yy(a){vy();return a.attributes}
function zy(a){vy();return a.childNodes}
function Cy(a,b){vy();return uy.jb(a,b)}
function bnb(a,b){return parseInt(a,b)}
function Wgb(a){return Xgb(a,a.length)}
function wkb(a){return a<10?'0'+a:''+a}
function kg(a,b,c){return {l:a,m:b,h:c}}
function zb(d,a,b,c){d.drawImage(a,b,c)}
function Ab(d,a,b,c){d.drawImage(a,b,c)}
function Sd(c,a,b){c.setAttribute(a,b)}
function zz(a,b){sz();Az.call(this,a,b)}
function uE(a,b){sE();this.b=a;this.a=b}
function jG(a,b){hG();this.b=a;this.c=b}
function Ry(){vy();this.a=new DOMParser}
function vQ(){rO.call(this,'Set',147,1)}
function FQ(){rO.call(this,'big',151,1)}
function HQ(){rO.call(this,'Big',152,1)}
function VQ(){rO.call(this,'over',15,0)}
function LR(){rO.call(this,'atop',17,0)}
function XX(){rO.call(this,'nbsp',78,0)}
function FU(){rO.call(this,'mbox',24,1)}
function FX(){rO.call(this,'ddot',69,1)}
function DW(){rO.call(this,'frak',44,1)}
function JP(){rO.call(this,'frac',12,2)}
function x9(a){v9.call(this,a);this.a=a}
function B9(a){v9.call(this,a);this.a=a}
function xc(){kc(this);mc(this);this.P()}
function g9(a){j9(a.b);a.a.b-=1;W8(a.a)}
function Ee(a){Ab(a.a.d,bb(a.b),a.c,a.d)}
function gD(a,b){a.b=false;a.c=-1;a.a=b}
function Wg(a,b){return a!=null&&Pg(a,b)}
function Qd(a,b){return (Ud(),Td).Y(a,b)}
function Web(a,b,c){return Qgb(a.a,b,c)}
function Db(b,a){return b.measureText(a)}
function Mmb(a,b){Kmb(b,0,a,0,b.length)}
function Iy(a){var b=a.gb();return b.xml}
function jP(){rO.call(this,'left',117,1)}
function bQ(){rO.call(this,'fbox',138,1)}
function dQ(){rO.call(this,'sfrac',13,2)}
function JQ(){rO.call(this,'bigg',153,1)}
function LQ(){rO.call(this,'Bigg',154,1)}
function PQ(){rO.call(this,'Bigl',156,1)}
function NQ(){rO.call(this,'bigl',155,1)}
function XQ(){rO.call(this,'bigr',159,1)}
function ZQ(){rO.call(this,'Bigr',160,1)}
function dV(){rO.call(this,'quad',260,0)}
function jV(){rO.call(this,'surd',263,0)}
function jT(){rO.call(this,'huge',214,0)}
function lT(){rO.call(this,'Huge',215,0)}
function tT(){rO.call(this,'brace',21,0)}
function PT(){rO.call(this,'brack',22,0)}
function RV(){rO.call(this,'binom',27,2)}
function lV(){rO.call(this,'iint',264,0)}
function xV(){rO.call(this,'oint',269,0)}
function TS(){rO.call(this,'tiny',206,0)}
function NS(){rO.call(this,'cong',203,0)}
function tU(){rO.call(this,'kern',243,1)}
function NX(){rO.call(this,'breve',73,1)}
function BX(){rO.call(this,'grave',68,1)}
function xX(){rO.call(this,'tilde',66,1)}
function zX(){rO.call(this,'acute',67,1)}
function PX(){rO.call(this,'check',74,1)}
function NW(){rO.call(this,'vspace',4,1)}
function rW(){rO.call(this,'hspace',3,1)}
function XV(){sO.call(this,'rule',2,2,1)}
function TZ(){TZ=Nv;SZ=new D$(3,0.5,0,0)}
function Te(){this.d=new Ckb;this.c=false}
function hy(a,b){return new ky(Cy(a.a,b))}
function Pz(a,b){return Qg(Eib(a.a,b),31)}
function Egb(a,b){return a.charCodeAt(b)}
function hD(a){return a.c>=0?a.c:a.a.tb()}
function Ic(a){return a==null?null:a.name}
function tg(a){return a.l+a.m*$nb+a.h*_nb}
function Yg(a){return typeof a==='number'}
function wv(a){return typeof a==='number'}
function $g(a){return typeof a==='string'}
function DQ(){rO.call(this,'LaTeX',150,0)}
function XO(){rO.call(this,'ddots',110,0)}
function VO(){rO.call(this,'vdots',109,0)}
function DS(){rO.call(this,'choose',19,0)}
function fQ(){rO.call(this,'boxed',139,1)}
function RQ(){rO.call(this,'biggl',157,1)}
function TQ(){rO.call(this,'Biggl',158,1)}
function _Q(){rO.call(this,'biggr',161,1)}
function bR(){rO.call(this,'Biggr',162,1)}
function fT(){rO.call(this,'Large',212,0)}
function dT(){rO.call(this,'large',211,0)}
function ZS(){rO.call(this,'bangle',20,0)}
function RS(){rO.call(this,'hline',205,0)}
function PS(){rO.call(this,'doteq',204,0)}
function _S(){rO.call(this,'small',209,0)}
function hT(){rO.call(this,'LARGE',213,0)}
function DT(){rO.call(this,'ratio',223,0)}
function zO(){rO.call(this,'mathop',99,1)}
function VV(){rO.call(this,'mathbf',28,1)}
function _V(){rO.call(this,'mathbb',30,1)}
function fW(){rO.call(this,'mathit',33,1)}
function jW(){rO.call(this,'mathrm',35,1)}
function pW(){rO.call(this,'mathsf',38,1)}
function vW(){rO.call(this,'mathtt',40,1)}
function BW(){rO.call(this,'mathds',43,1)}
function xU(){rO.call(this,'roman',245,1)}
function zU(){rO.call(this,'Roman',246,1)}
function fV(){rO.call(this,'qquad',261,0)}
function nV(){rO.call(this,'iiint',265,0)}
function HV(){rO.call(this,'above',274,0)}
function pX(){rO.call(this,'accent',62,2)}
function HY(){sO.call(this,'sqrt',95,1,1)}
function dhb(a){Xeb.call(this,(Umb(a),a))}
function Rjb(a){Hjb.call(this,a);this.a=a}
function DZ(){vZ();cz.call(this);wZ(this)}
function Q8(a,b){var c;c=Xgb(b,1);S8(a,c)}
function T8(a,b){Bb(a.d,b.c,b.d,b.b,b.a)}
function H$(a,b){z$();return x$[a].Eb(b)}
function Jgb(a,b){return a.lastIndexOf(b)}
function A9(a,b){return new D9(hy(a.a,b))}
function enb(a){return a.$H||(a.$H=++dnb)}
function hfb(a){return a>=56320&&a<=57343}
function Xg(a){return typeof a==='boolean'}
function Zb(a){Xb();return Tb((ac(),_b),a)}
function gc(a){ec();return Tb((jc(),ic),a)}
function Fd(a){Bd();return parseInt(a)||-1}
function Jz(a){sz();return Dhb(mz,a)!=null}
function re(a){return (Ud(),Td).U(a,'img')}
function xO(){rO.call(this,'mathrlap',9,1)}
function ZO(){rO.call(this,'iddots',111,0)}
function bP(){rO.call(this,'limits',113,0)}
function dP(){rO.call(this,'normal',114,0)}
function lP(){rO.call(this,'middle',118,1)}
function nP(){sO.call(this,'cfrac',11,2,1)}
function zQ(){rO.call(this,'genfrac',14,6)}
function tQ(){rO.call(this,'Braket',146,1)}
function jS(){rO.call(this,'cancel',190,1)}
function FS(){rO.call(this,'Lcaron',199,0)}
function HS(){rO.call(this,'tcaron',200,0)}
function JS(){rO.call(this,'lcaron',201,0)}
function rT(){rO.call(this,'hstrok',218,0)}
function vT(){rO.call(this,'Hstrok',219,0)}
function xT(){rO.call(this,'dstrok',220,0)}
function zT(){rO.call(this,'Dstrok',221,0)}
function pV(){rO.call(this,'iiiint',266,0)}
function FV(){rO.call(this,'jlmXML',273,1)}
function DU(){rO.call(this,'textsc',248,1)}
function nW(){rO.call(this,'mathscr',37,1)}
function bW(){rO.call(this,'mathcal',31,1)}
function vX(){rO.call(this,'widehat',65,1)}
function HX(){rO.call(this,'cyrddot',70,1)}
function tY(){rO.call(this,'mathllap',8,1)}
function Bb(e,a,b,c,d){e.fillRect(a,b,c,d)}
function Qgb(a,b,c){return a.substr(b,c-b)}
function Fgb(a,b){return bfb(a,b,a.length)}
function cnb(b,c,d){try{b[c]=d}catch(a){}}
function Rmb(a){if(!a){throw qv(new $eb)}}
function Smb(a){if(!a){throw qv(new Nlb)}}
function Xmb(a){if(!a){throw qv(new Tfb)}}
function $mb(a){if(!a){throw qv(new Jfb)}}
function ofb(a){if(a.j!=null){return}Dfb(a)}
function plb(a){Smb(a.b!=0);return a.a.a.c}
function qlb(a){Smb(a.b!=0);return a.c.b.c}
function iC(a){var b;b=JB[a];return b.u>Wob}
function Rg(a){$mb(a==null||Yg(a));return a}
function Tg(a){$mb(a==null||$g(a));return a}
function FF(a,b){DF.call(this,a,0);this.a=b}
function wD(a,b,c){xD.call(this,a,b,null,c)}
function gE(a,b,c){hE.call(this,a,b,!c,2,0)}
function CG(a,b,c){vG();DG.call(this,a,b,c)}
function DO(){rO.call(this,'mathord',101,1)}
function FO(){rO.call(this,'mathrel',102,1)}
function JO(){rO.call(this,'mathbin',104,1)}
function TO(){rO.call(this,'mathclap',10,1)}
function RO(){sO.call(this,'smash',108,1,1)}
function PO(){rO.call(this,'joinrel',107,0)}
function rQ(){rO.call(this,'overset',145,2)}
function lR(){rO.call(this,'sideset',167,3)}
function HR(){rO.call(this,'phantom',177,1)}
function DR(){rO.call(this,'ovalbox',175,1)}
function ZR(){rO.call(this,'bgcolor',185,2)}
function XR(){rO.call(this,'fgcolor',184,2)}
function HT(){rO.call(this,'geoprop',225,0)}
function xS(){rO.call(this,'TStroke',197,0)}
function zS(){rO.call(this,'tStroke',198,0)}
function lS(){rO.call(this,'bcancel',191,1)}
function nS(){rO.call(this,'xcancel',192,1)}
function NV(){rO.call(this,'fcscore',277,1)}
function hV(){rO.call(this,'longdiv',262,2)}
function JY(){rO.call(this,'sqrtsign',96,1)}
function LY(){rO.call(this,'overline',97,1)}
function JX(){rO.call(this,'mathring',71,1)}
function zW(){rO.call(this,'mathfrak',42,1)}
function _Z(a,b,c){aB();cB.call(this,a,b,c)}
function s8(a,b,c,d){return new v8(a,c,b,d)}
function V7(a,b){return Qg(Ehb(a.b,b),82).a}
function L7(a,b){if(b){a9(b,a.a);S8(b,a.c)}}
function pc(a,b){a.e=b;b!=null&&cnb(b,ynb,a)}
function Hc(a){return a==null?null:a.message}
function Ug(a){return String.fromCharCode(a)}
function kd(a,b,c){return a.apply(b,c);var d}
function Je(a,b,c){return Ne(a.a,b,c),new Ue}
function By(a){vy();return a.documentElement}
function dH(){dH=Nv;bH=new Ckb;cH=new Ckb}
function hG(){hG=Nv;gG=new Dkb(300);new Ckb}
function TE(){TE=Nv;RE=N_(Apb);SE=new C$(1)}
function LO(){rO.call(this,'mathopen',105,1)}
function _O(){rO.call(this,'nolimits',112,0)}
function BT(){rO.call(this,'dotminus',222,0)}
function NT(){rO.call(this,'simcolon',228,0)}
function lU(){rO.call(this,'colonsim',239,0)}
function hS(){rO.call(this,'colorbox',189,2)}
function xQ(){rO.call(this,'underset',148,2)}
function vV(){rO.call(this,'intertext',26,1)}
function rV(){rO.call(this,'idotsint',267,0)}
function rX(){rO.call(this,'grkaccent',63,2)}
function VX(){rO.call(this,'widetilde',77,1)}
function xY(){rO.call(this,'overbrace',90,1)}
function BY(){rO.call(this,'overbrack',92,1)}
function FY(){rO.call(this,'overparen',94,1)}
function NY(){rO.call(this,'underline',98,1)}
function JR(){rO.call(this,'hphantom',178,1)}
function NR(){rO.call(this,'vphantom',179,1)}
function RU(){rO.call(this,'medspace',254,0)}
function tV(){tO.call(this,'_int',268,rrb,0)}
function oZ(a,b,c){mZ.call(this,a,b,c.a,c.b)}
function nZ(a,b,c){oZ.call(this,a,b,pZ(a,c))}
function X0(a,b){y0();Y0.call(this,a,b,true)}
function B$(){z$();cz.call(this);this.a=true}
function Yb(a,b,c){Ob.call(this,a,b);this.a=c}
function fc(a,b,c){Ob.call(this,a,b);this.a=c}
function $A(a,b,c){this.b=a;this.c=b;this.a=c}
function EF(a,b,c){DF.call(this,a,b);this.a=c}
function UG(a,b){PG.call(this,a,b,b);this.a=b}
function BO(){rO.call(this,'mathpunct',100,1)}
function HO(){rO.call(this,'mathinner',103,1)}
function NO(){rO.call(this,'mathclose',106,1)}
function RP(){rO.call(this,'shoveleft',132,1)}
function lQ(){rO.call(this,'accentset',142,2)}
function fR(){rO.call(this,'textstyle',164,0)}
function nR(){rO.call(this,'prescript',168,3)}
function xR(){rO.call(this,'resizebox',172,3)}
function BR(){rO.call(this,'shadowbox',174,1)}
function FR(){rO.call(this,'doublebox',176,1)}
function VR(){rO.call(this,'textcolor',183,2)}
function _R(){rO.call(this,'cellcolor',186,1)}
function dS(){rO.call(this,'jlmcursor',188,1)}
function pS(){rO.call(this,'fcolorbox',193,3)}
function jU(){rO.call(this,'underscore',23,0)}
function vU(){tO.call(this,'_char',244,qrb,1)}
function PU(){rO.call(this,'thinspace',253,0)}
function DV(){tO.call(this,'_dash',272,'-',0)}
function RW(){tO.call(this,'_quote',50,'"',1)}
function ZW(){tO.call(this,'_tilda',54,'~',1)}
function vY(){rO.call(this,'underbrace',89,1)}
function zY(){rO.call(this,'underbrack',91,1)}
function DY(){rO.call(this,'underparen',93,1)}
function U6(a){!a.a&&(a.a=new H7);return a.a}
function V6(a){!a.b&&(a.b=new t8);return a.b}
function W6(a){!a.c&&(a.c=new l9);return a.c}
function X6(a){!a.d&&(a.d=new E9);return a.d}
function tkb(a){this.a=new $wnd.Date(Bv(a))}
function Qib(a){Jib(this);Mmb(this.a,a.bc())}
function N7(a,b,c){this.c=a;this.a=b;this.b=c}
function g7(a,b,c){this.a=a;this.c=b;this.b=c}
function B7(a,b,c){this.c=a;this.e=b;this.d=c}
function Kgb(a,b,c){return a.lastIndexOf(b,c)}
function xy(a,b){vy();return a.getAttribute(b)}
function LF(a,b,c){KF();MF.call(this,a,b,c,JF)}
function Q7(a,b){Mib(a.c,b,0)!=-1||Kib(a.c,b)}
function eb(a){(pw(),a.e).style[qnb]='1px'}
function fb(a){(pw(),a.e).style['width']='1px'}
function qkb(a){var b;b=a[Vrb]|0;a[Vrb]=b+1}
function Oe(a,b,c,d){var e;e=Qe(a,b,c);e.Zb(d)}
function qe(a){return (Ud(),Td).U(a,'canvas')}
function Zeb(){yc.call(this,'divide by zero')}
function pQ(){rO.call(this,'undertilde',144,1)}
function PP(){rO.call(this,'shoveright',131,1)}
function tR(){rO.call(this,'reflectbox',170,1)}
function vR(){sO.call(this,'scalebox',171,2,2)}
function zR(){sO.call(this,'raisebox',173,2,2)}
function jQ(){sO.call(this,'stackbin',141,2,1)}
function hQ(){sO.call(this,'stackrel',140,2,1)}
function tP(){sO.call(this,'hdotsfor',121,1,1)}
function BQ(){rO.call(this,'boldsymbol',149,1)}
function XT(){rO.call(this,'coloncolon',232,0)}
function JT(){rO.call(this,'minuscolon',226,0)}
function bU(){rO.call(this,'colonminus',235,0)}
function LU(){tO.call(this,'_colon',251,':',0)}
function JU(){tO.call(this,'_comma',250,',',0)}
function VU(){tO.call(this,'_pling',256,'!',0)}
function XW(){tO.call(this,'_period',53,'.',1)}
function VW(){tO.call(this,'_equals',52,'=',1)}
function KG(a){cz.call(this);JG(this);this.a=a}
function t$(a){cz.call(this);q$(this);this.a=a}
function RH(a){cz.call(this);this.a=a;this.n=0}
function M1(a){cz.call(this);this.a=a;this.n=0}
function ilb(a,b,c){this.a=a;this.b=b;this.c=c}
function Alb(a,b,c){this.d=a;this.b=c;this.a=b}
function z8(a,b,c,d,e){a.c=b;a.d=c;a.b=d;a.a=e}
function u8(a,b,c,d,e){a.a=b;a.b=d;a.c=c;a.d=e}
function eE(a,b,c,d){hE.call(this,a,b,true,c,d)}
function gz(a,b){fz.call(this,a,b);this.d=false}
function Me(a,b){!a.a&&(a.a=new Pib);Kib(a.a,b)}
function iD(a,b){Wg(a.a,142)&&Qg(a.a,142).Bb(b)}
function Qg(a,b){$mb(a==null||Pg(a,b));return a}
function jE(a){if(a==0||a==1){return a}return 2}
function Pmb(a,b){if(!a){throw qv(new Sfb(b))}}
function Pfb(a){return Yg(a)?(Umb(a),a):a.Wb()}
function YF(a){a.b=new ulb;a.d=new D$(1,0,0,0)}
function Ilb(){Ilb=Nv;Glb=new Jlb;Hlb=new Llb}
function rP(){rO.call(this,'multicolumn',120,3)}
function TR(){rO.call(this,'definecolor',182,3)}
function TT(){rO.call(this,'approxcolon',230,0)}
function ZT(){rO.call(this,'equalscolon',233,0)}
function fU(){rO.call(this,'colonequals',237,0)}
function pU(){rO.call(this,'colonapprox',241,0)}
function BU(){rO.call(this,'textcircled',247,1)}
function nQ(){rO.call(this,'underaccent',143,2)}
function HW(){rO.call(this,'oldstylenums',46,1)}
function hR(){rO.call(this,'scriptstyle',165,0)}
function rR(){sO.call(this,'rotatebox',169,2,1)}
function pY(){sO.call(this,'xleftarrow',87,1,1)}
function Uz(a,b){cz.call(this);this.a=a;this.b=b}
function yB(a,b){cz.call(this);this.a=a;this.b=b}
function NA(a,b){LA.call(this);this.a=a;this.c=b}
function ED(a,b){LA.call(this);this.a=a;this.d=b}
function _E(a,b){cz.call(this);this.b=a;this.a=b}
function DF(a,b){cz.call(this);this.b=a;this.c=b}
function VF(a,b){cz.call(this);this.a=a;this.b=b}
function EG(a,b){vG();FG.call(this,a,b,'',false)}
function Vc(a){Rc();a.parentNode.removeChild(a)}
function Cv(a){if(wv(a)){return a|0}return Eg(a)}
function slb(a){Smb(a.b!=0);return tlb(a,a.c.b)}
function Kib(a,b){a.a[a.a.length]=b;return true}
function f0(){this.a='SansSerif';this.b='Serif'}
function VY(a){cz.call(this);this.n=a.n;this.a=a}
function A_(a,b){cz.call(this);this.b=a;this.a=b}
function K_(a,b){LA.call(this);this.a=b;this.b=a}
function dR(){rO.call(this,'displaystyle',163,0)}
function bS(){rO.call(this,'jlmselection',187,1)}
function fY(){rO.call(this,'overleftarrow',82,1)}
function rY(){sO.call(this,'xrightarrow',88,1,1)}
function TW(){tO.call(this,'_backtick',51,'`',1)}
function FT(){rO.call(this,'smallfrowneq',224,0)}
function m1(a,b){cz.call(this);this.b=b;this.a=a}
function wfb(a,b){var c;c=tfb(a,b);c.e=2;return c}
function I0(a){var b;b=a.d.g;a.d.g=null;return b}
function bz(a,b){b.n=a.n;b.o=a.o;b.k=a.k;return b}
function mlb(a,b){olb(a,b,a.c.b,a.c);return true}
function Dv(a){if(wv(a)){return ''+a}return Fg(a)}
function _f(a,b,c,d,e,f){return ag(a,b,c,d,e,0,f)}
function VG(a,b,c,d){PG.call(this,a,b,c);this.a=d}
function pR(){rO.call(this,'overwithdelims',16,2)}
function fS(){rO.call(this,'atopwithdelims',18,2)}
function dY(){rO.call(this,'overrightarrow',81,1)}
function lY(){rO.call(this,'underleftarrow',85,1)}
function RT(){rO.call(this,'simcoloncolon',229,0)}
function nU(){rO.call(this,'coloncolonsim',240,0)}
function xz(){sz();tz(this);new Y0('',this,false)}
function Y0(a,b,c){y0();a1.call(this,false,a,b,c)}
function Lib(a,b){Tmb(b,a.a.length);return a.a[b]}
function fhb(){fhb=Nv;new iw(null);new iw(null)}
function mfb(){mfb=Nv;lfb=bg(Dt,vnb,57,128,0,1)}
function ngb(){ngb=Nv;mgb=bg(Pt,vnb,104,256,0,1)}
function egb(){egb=Nv;dgb=bg(Nt,pqb,48,256,0,1)}
function OG(a,b){return new PZ(a.b.qb(b),a.c,a.d)}
function dg(a){return Array.isArray(a)&&a.tc===Qv}
function Vg(a){return !Array.isArray(a)&&a.tc===Qv}
function Zg(a){return a!=null&&_g(a)&&!(a.tc===Qv)}
function R7(a,b,c,d){return W7(a,b,c),new m8(c,d)}
function Fb(e,a,b,c,d){e.quadraticCurveTo(a,b,c,d)}
function Sv(a){if(a.b){return a.b}return amb(),Tlb}
function yd(a,b){!a&&(a=[]);a[a.length]=b;return a}
function $G(a,b,c){ZG();this.b=a;this.a=b;this.c=c}
function yc(a){kc(this);this.g=a;mc(this);this.P()}
function VZ(a,b,c){TZ();this.b=a;this.c=b;this.d=c}
function kw(a){iw.call(this,new hw(null));this.a=a}
function VP(){rO.call(this,'newenvironment',134,3)}
function jY(){rO.call(this,'underrightarrow',84,1)}
function LW(){tO.call(this,'_circumflex',48,'^',1)}
function PW(){tO.call(this,'_apostrophe',49,"'",1)}
function NU(){tO.call(this,'_semicolon',252,';',0)}
function TP(){tO.call(this,'_backslash',133,'\\',0)}
function RR(){tO.call(this,'sp_hat',181,'sp@hat',0)}
function LT(){rO.call(this,'minuscoloncolon',227,0)}
function dU(){rO.call(this,'coloncolonminus',236,0)}
function JV(){rO.call(this,'abovewithdelims',275,2)}
function n0(){o0.call(this,I9((new c7,Eq),Brb),Brb)}
function Cmb(a){this.c=a;this.b=(fhb(),vv(Omb()))}
function Gmb(a){this.b=a;this.d=true;this.a=new Pib}
function wG(a){a.g=new Ckb;a.e=new Pib;a.a=new Pib}
function sE(){sE=Nv;var a;a=new BE;rE=a.b;qE=zE(a)}
function ff(){ff=Nv;df=new gf(false);ef=new gf(true)}
function Z6(){this.a=U6(T6);this.b=new J7(this.a.a)}
function _C(a,b,c){$C.call(this,a);this.b=b;this.c=c}
function $8(a,b){a.c=b;Nb(a.d,a.c.a);Hb(a.d,a.c.a)}
function Gg(a,b){return kg(a.l^b.l,a.m^b.m,a.h^b.h)}
function Qfb(a){return Yg(a)?bh((Umb(a),a)):a.Xb()}
function _kb(a,b){return !(a.a.get(b)===undefined)}
function _g(a){return typeof a===nnb||typeof a===onb}
function Uc(a){Rc();return a.createElement('script')}
function jv(){if(iv==2){return new vb}return new tb}
function XP(){rO.call(this,'renewenvironment',135,3)}
function _T(){rO.call(this,'equalscoloncolon',234,0)}
function VT(){rO.call(this,'approxcoloncolon',231,0)}
function hU(){rO.call(this,'coloncolonequals',238,0)}
function rU(){rO.call(this,'coloncolonapprox',242,0)}
function nT(){rO.call(this,'jlatexmathcumsup',216,1)}
function pT(){rO.call(this,'jlatexmathcumsub',217,1)}
function fP(){tO.call(this,'_parenthesis',115,'(',0)}
function J8(a,b,c){this.a='rgb('+a+','+b+','+c+')'}
function F8(a,b){this.d=a;this.a=0;this.b=0;this.c=b}
function i9(a,b){this.a=a;this.b=b;this.c=0;this.d=0}
function Sf(a){if(a==null){throw qv(new qgb)}this.a=a}
function VE(a,b){TE();OE.call(this,a,'c',RE);this.a=b}
function jF(a){nA.call(this);hF(this,a);nlb(this.k,a)}
function jR(){rO.call(this,'scriptscriptstyle',166,0)}
function hY(){rO.call(this,'overleftrightarrow',83,1)}
function pd(a){$wnd.setTimeout(function(){throw a},0)}
function X8(a){o9(a.d);a9(a,a.f);$8(a,a.c);b9(a,a.a)}
function Kz(a){mlb(Qg(Eib(a.a,a.d),31),a.g);a.g=null}
function N8(a,b){Gb(a.d,b.c,b.d,b.b,b.a);a.d.stroke()}
function eF(a,b){!a.a&&(a.a=new Pib);Kib(a.a,cgb(b))}
function Jmb(a,b){var c;c=a.slice(0,b);return gg(c,a)}
function Bf(a,b,c){var d;d=zf(a,b);Cf(a,b,c);return d}
function ufb(a,b,c){var d;d=tfb(a,b);Hfb(c,d);return d}
function tfb(a,b){var c;c=new rfb;c.f=a;c.d=b;return c}
function yD(a,b){var c,d;c=a.p;d=c+a.n;a.r=-(d/2-c)-b}
function Ogb(a,b){return Ggb(a.substr(0,b.length),b)}
function Chb(a,b){return $g(b)?Fhb(a,b):!!Okb(a.a,b)}
function aE(a){JD();return LD(Qg(Dhb(ID,cgb(a)),118))}
function C$(a){z$();cz.call(this);this.a=true;this.b=a}
function rO(a,b,c){Ob.call(this,a,b);this.a=c;this.d=1}
function Xz(a,b,c){this.a=a;this.e=b;this.d=c;this.n=1}
function lH(a,b){this.a=!a?new kD:a;this.b=!b?new kD:b}
function vH(a){mE.call(this,a.d,a.i,a.g);this.a=new C8}
function hP(){tO.call(this,'_squarebracket',116,'[',0)}
function PR(){tO.call(this,'sp_breve',180,'sp@breve',0)}
function PV(){rO.call(this,'imagebasesixtyfour',278,3)}
function nY(){rO.call(this,'underleftrightarrow',86,1)}
function Vv(){Tv(this,new gw(true));Uv(this,(amb(),Tlb))}
function Dhb(a,b){return $g(b)?Ehb(a,b):xhb(Okb(a.a,b))}
function Bkb(a,b){return ah(a)===ah(b)||a!=null&&W(a,b)}
function Olb(a,b){return ah(a)===ah(b)||a!=null&&W(a,b)}
function HC(a,b){wC();var c;c=new Z6;return I7(c.b,a,b)}
function IC(a){wC();var b;return b=new Z6,I7(b.b,null,a)}
function Fy(a){vy();var b=a.nodeType;return b==null?-1:b}
function eg(a,b,c){Rmb(c==null||Yf(a,c));return a[b]=c}
function Umb(a){if(a==null){throw qv(new qgb)}return a}
function pkb(a,b){if(b[Vrb]!=a[Vrb]){throw qv(new rkb)}}
function lnb(){if(gnb==256){fnb=hnb;hnb={};gnb=0}++gnb}
function xfb(a,b){var c;c=tfb('',a);c.i=b;c.e=1;return c}
function OA(a,b,c,d){NA.call(this,a,b);this.d=c;this.b=d}
function nD(a,b,c,d){this.d=a;this.b=b;this.c=c;this.a=d}
function h7(a,b,c,d){this.d=a;this.b=b;this.a=c;this.c=d}
function KA(a,b,c,d){this.b=b;this.c=c;this.a=a;this.d=d}
function Y8(a,b,c,d){t9(a.d,c,d);p9(a.d,b);t9(a.d,-c,-d)}
function Ghb(a,b,c){return $g(b)?Hhb(a,b,c):Pkb(a.a,b,c)}
function A7(a,b){return Ggb(a.c,b.c)&&a.e==b.e&&a.d==b.d}
function ffb(a){return /\d/.test(String.fromCharCode(a))}
function Tgb(a){return String.fromCharCode.apply(null,a)}
function Nkb(a,b){var c;c=a.a.get(b);return c==null?[]:c}
function az(a,b,c){this.a=a;this.d=b;this.c=null;this.b=c}
function Qz(a,b,c){return Qg(Eib(Qg(Eib(a.a,b),31),c),11)}
function SB(a){return new mC(a.g,a.a,a.b,a.d,a.e,a.f,a.c)}
function bw(a){a.a=ymb(Amb(),'');a.a.d=false;dw();cw(a.a)}
function Zw(a){var b;b=(Ud(),Td).V(a);b[vob]=a.type;Yw(a)}
function px(){px=Nv;ox=Qg(mv(),102);Wg(ox,141)?new qx:ox}
function Bd(){Bd=Nv;var a,b;b=!Gd();a=new Od;Ad=b?new Hd:a}
function g1(){e1();h1.call(this,I9((new c7,Iq),Uob),Uob)}
function e9(a){f9.call(this,(pw(),a.e).getContext('2d'))}
function LG(a,b){cz.call(this);JG(this);this.a=a;this.b=b}
function Agb(a,b,c){this.a=Fnb;this.d=a;this.b=b;this.c=c}
function hb(a,b,c){return Je(!a.d?(a.d=new Le(a)):a.d,c,b)}
function Ev(a,b){return sv(Gg(wv(a)?Av(a):a,wv(b)?Av(b):b))}
function $b(){Xb();return fg(Zf(lh,1),vnb,105,0,[Ub,Vb,Wb])}
function hc(){ec();return fg(Zf(mh,1),vnb,106,0,[bc,cc,dc])}
function CA(){AA();return fg(Zf(lj,1),vnb,122,0,[zA,xA,yA])}
function Xv(){Tv(this,new gw(false));Uv(this,(amb(),Tlb))}
function yb(a){return !!a&&!!a.hashCode?a.hashCode():enb(a)}
function mc(a){if(a.n){a.e!==xnb&&a.P();a.j=null}return a}
function Sg(a){$mb(a==null||_g(a)&&!(a.tc===Qv));return a}
function z9(a,b){var c;c=gy(a.a,b);c=c==null?'':c;return c}
function PA(a,b,c){LA.call(this);this.a=a;this.c=c;this.b=b}
function d2(a,b,c){cz.call(this);this.a=a;this.c=b;this.b=c}
function h2(a,b,c){cz.call(this);this.b=a;this.c=b;this.a=c}
function $0(a,b,c,d){y0();b1.call(this,a,b,c,d);this.a=true}
function WZ(a,b,c,d){TZ();VZ.call(this,a,b,c);d||(this.a=1)}
function V8(a,b,c,d){var e;e=a.f.Ib();e.Kb(b,c,d,a.f.d,a.d)}
function wI(a,b,c){aI();return new DA((new zz(a,b[1])).g,c)}
function Fhb(a,b){return b==null?!!Okb(a.a,null):_kb(a.b,b)}
function qc(a,b){var c;c=pfb(a.rc);return b==null?c:c+': '+b}
function U7(a,b){var c;c=Qg(Ehb(a.b,b),82);return !!c&&!c.b}
function J$(a){z$();var b;b=Qg(Ehb(y$,a),48);return !b?2:b.a}
function E$(a){z$();if(a<0||a>=x$.length){throw qv(new J6)}}
function vP(){tO.call(this,'array__env',122,'array@@env',2)}
function xP(){tO.call(this,'align__env',123,'align@@env',2)}
function bY(){tO.call(this,'matrix__env',80,'matrix@@env',1)}
function cy(a){Mx.call(this,Pob+Qgb(a,0,pgb(a.length,128)))}
function nE(a,b,c,d,e){mE.call(this,a,b,c);this.e=d;this.c=e}
function b1(a,b,c,d){y0();a1.call(this,a,b,c,false);this.f=d}
function rc(a,b){kc(this);this.f=b;this.g=a;mc(this);this.P()}
function Skb(a){this.e=a;this.b=this.e.a.entries();this.a=[]}
function $C(a){if(!a){this.a=new DZ}else{this.a=a;this.n=a.n}}
function OE(a,b,c){this.g=a>=1?a:1;this.f=c;this.c=LE(this,b)}
function Z0(a,b,c){y0();a1.call(this,a,b,c,false);this.a=true}
function _gb(a,b,c){a.a=Qgb(a.a,0,b)+''+Pgb(a.a,c);return a}
function Bfb(a){if(a.Vb()){return null}var b=a.i;return Kv[b]}
function zf(a,b){if(b==null){throw qv(new qgb)}return Af(a,b)}
function Ov(a){function b(){}
;b.prototype=a||{};return new b}
function gfb(a){return /[A-Z]/i.test(String.fromCharCode(a))}
function uhb(a,b){return b===a?'(this Map)':b==null?Cnb:Pv(b)}
function Ehb(a,b){return b==null?xhb(Okb(a.a,null)):alb(a.b,b)}
function ojb(a){ljb();return Wg(a,179)?new okb(a):new Kjb(a)}
function cw(a){var b,c;b=new Vv;Kib(a.a,b);c=new Xv;Kib(a.a,c)}
function m7(a){Y6(new p7);a.a=new q7;a.b=(P7(),O7);o7(a.a,a.b)}
function B8(a,b,c,d,e,f,g){a.e=b;a.f=c;a.d=d;a.c=e;a.b=f;a.a=g}
function kG(a,b,c){hG();jG.call(this,a,b);this.d=c;this.a=true}
function oA(a,b){this.k=new ulb;this.o=a;this.j=b;new $6;new a7}
function Nc(a,b){var c=Mc[a.charCodeAt(0)];return c==null?a:c}
function zfb(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.Qb(b))}
function ix(a,b){for(var c in a){a.hasOwnProperty(c)&&b(c,a[c])}}
function Hhb(a,b,c){return b==null?Pkb(a.a,null,c):blb(a.b,b,c)}
function xb(a,b){return !!a&&!!a.equals?a.equals(b):ah(a)===ah(b)}
function wz(a,b){if(!a.g){return new x_(0,0,0,0)}return a.g.qb(b)}
function Bv(a){var b;if(wv(a)){b=a;return b==-0.?0:b}return Dg(a)}
function Cw(a){var b=a.__listener;return !Zg(b)&&Wg(b,183)?b:null}
function LP(){tO.call(this,'gather__env',129,'gather@@env',2)}
function NP(){tO.call(this,'gathered__env',130,'gathered@@env',2)}
function zP(){tO.call(this,'aligned__env',124,'aligned@@env',2)}
function DP(){tO.call(this,'alignat__env',126,'alignat@@env',2)}
function BP(){tO.call(this,'flalign__env',125,'flalign@@env',2)}
function HP(){tO.call(this,'multline__env',128,'multline@@env',2)}
function r6(){q6.call(this,'PHAGS_PA');Hhb(o6,'PHAGS-PA',this)}
function _0(a,b,c){y0();Y0.call(this,b,c,false);this.i=a;D0(this)}
function sO(a,b,c,d){Ob.call(this,a,b);this.a=c;this.b=d;this.d=2}
function tO(a,b,c,d){Ob.call(this,a,b);this.a=d;this.c=c;this.d=1}
function jib(a,b){this.a=a;gib.call(this,a);Wmb(b,a.ac());this.b=b}
function ahb(a,b,c,d){a.a=Qgb(a.a,0,b)+(''+d)+Pgb(a.a,c);return a}
function vfb(a,b,c,d){var e;e=tfb(a,b);Hfb(c,e);e.e=d?8:0;return e}
function Fz(a,b){sz();var c;c=new o0(a,b);l0(c,qz,rz);m0(c,pz,rz)}
function Hy(a,b){vy();if(b>=a.length){return null}return a.item(b)}
function $ib(a){Smb(a.a<a.c.a.length);a.b=a.a++;return a.c.a[a.b]}
function zlb(a){Smb(a.b.b!=a.d.a);a.c=a.b=a.b.b;--a.a;return a.c.c}
function AZ(a){if(a.a.b==0){return 0}return Qg(Eib(a.a,0),11).sb()}
function Lgb(a,b,c){c=Vgb(c);return a.replace(new RegExp(b,'g'),c)}
function Q0(a,b,c,d){ahb(a.n,b,c,d);a.j=a.n.a.length;a.o=b;a.g=true}
function hz(a,b,c,d,e){this.c=a;this.b=b;this.d=c;this.a=d;this.e=e}
function iE(a,b,c){gE.call(this,a,b,true);this.f=jE(c);this.c=jE(2)}
function FP(){tO.call(this,'alignedat__env',127,'alignedat@@env',2)}
function Rv(){$wnd.setTimeout(mnb(ux));tw();$v();_v();m7(new n7)}
function m8(a,b){B7.call(this,a,0,b);this.b=(P7(),O7);this.a=new Pib}
function Qhb(a,b){if(Wg(b,63)){return rhb(a.a,Qg(b,63))}return false}
function tc(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
function y7(a){var b;b='';b+=z7(a)+' ';b+=a.d+'px ';b+=a.c;return b}
function ylb(a){Smb(a.b!=a.d.c);a.c=a.b;a.b=a.b.a;++a.a;return a.c.c}
function Cf(d,a,b){if(b){var c=b.$();d.a[a]=c(b)}else{delete d.a[a]}}
function Ymb(a){if(!a){throw qv(new Ufb("Can't overwrite cause"))}}
function CE(a,b,c,d){if(a==null){throw qv(new E6(cqb,b,c,dqb+d+Vob))}}
function gH(a,b,c){dH();Hhb(bH,a,b);Hhb((hG(),gG),a,new jG(new fH,c))}
function ac(){ac=Nv;_b=Pb((Xb(),fg(Zf(lh,1),vnb,105,0,[Ub,Vb,Wb])))}
function jc(){jc=Nv;ic=Pb((ec(),fg(Zf(mh,1),vnb,106,0,[bc,cc,dc])))}
function Okb(a,b){var c;return Mkb(b,Nkb(a,b==null?0:(c=$(b),c|0)))}
function r$(a,b){var c;c=a.a.qb(b);a.c&&(c.p=0);a.b&&(c.n=0);return c}
function LD(a){!a.e&&(!a.a?(a.e=IC(a.p)):(a.e=HC(a.a,a.p)));return a.e}
function H_(a){var b;b=new K_(a.b,a.a);b.c=a.c;b.d=a.d;return bz(a,b)}
function Dz(a){var b;sz();tz(this);this.i=null;b=new X0(a,this);T0(b)}
function t1(a,b,c){cz.call(this);this.b=a;this.c=b;this.a=c;this.o=c.o}
function A1(a,b,c,d){cz.call(this);this.a=a;this.c=b;this.d=c;this.b=d}
function x_(a,b,c,d){nA.call(this);this.t=a;this.p=b;this.n=c;this.r=d}
function PG(a,b,c){cz.call(this);this.n=a.n;this.b=a;this.c=b;this.d=c}
function FE(a,b,c){this.b=new g7(c,a,b);this.c=this.b.c;this.a=this.b.b}
function DA(a,b){if(!a){this.a=new DZ}else{this.a=a;this.n=a.n}this.b=b}
function m9(){this.a=rb();fb(this.a);eb(this.a);ob(this.a);pb(this.a)}
function elb(a){this.d=a;this.b=this.d.a.entries();this.a=this.b.next()}
function _X(){tO.call(this,'smallmatrix__env',79,'smallmatrix@@env',1)}
function n2(){n2=Nv;l2=N_(Uqb);k2=N_('leftarrow');m2=N_('rightarrow')}
function od(a){a&&wd((ud(),td));--ed;if(a){if(hd!=-1){rd(hd);hd=-1}}}
function bh(a){return Math.max(Math.min(a,2147483647),-2147483648)|0}
function md(b){jd();return function(){return nd(b,this,arguments);var a}}
function Lc(){if(Date.now){return Date.now()}return (new Date).getTime()}
function BZ(a){if(a.a.b==0){return 0}return Qg(Eib(a.a,a.a.b-1),11).tb()}
function a2(a,b){var c;if(a.b!=0){c=YB(b.i);return c*(3*a.b-2)}return 0}
function Emb(a,b,c){var d;amb();d=new Cmb(b);d.d=c;Bmb(d,a.b);Dmb(a,d)}
function Dib(a,b,c){var d;d=rlb(a,b);olb(d.d,c,d.b.b,d.b);++d.a;d.c=null}
function olb(a,b,c,d){var e;e=new Flb;e.c=b;e.b=c;e.a=d;d.b=c.a=e;++a.b}
function Imb(a,b,c,d){Array.prototype.splice.apply(a,[b,c].concat(d))}
function r9(c,a,b){c.m00_*=a;c.m10_*=a;c.m01_*=b;c.m11_*=b;c.scale(a,b)}
function z1(a,b,c){cz.call(this);this.a=a;this.c=b;this.d=c;this.b=false}
function y1(a,b){cz.call(this);this.a=a;this.d=b;this.b=true;this.c=false}
function Yz(a,b,c,d,e){Xz.call(this,a,b,c);this.b=d;this.c=true;this.c=e}
function cB(a,b,c){aB();cz.call(this);this.c=new EZ(a);this.a=b;this.b=c}
function Rlb(a,b){this.b=', ';this.d=a;this.e=b;this.c=this.d+(''+this.e)}
function Qlb(a,b){!a.a?(a.a=new dhb(a.d)):$gb(a.a,a.b);Ygb(a.a,b);return a}
function Ihb(a){var b;a.a=new Qkb(a);a.b=new clb(a);b=a[Vrb]|0;a[Vrb]=b+1}
function M7(a){var b,c;c=K8(a.b,a.c,a.a);b=a.a.d;return new A8(0,-b,c,b)}
function ig(a){var b,c,d;b=a&Xnb;c=a>>22&Xnb;d=a<0?Ynb:0;return kg(b,c,d)}
function Mgb(a,b){var c;b=Vgb(b);c=new RegExp('\\|');return a.replace(c,b)}
function Qy(a){var b=a.gb();return (new XMLSerializer).serializeToString(b)}
function Omb(){if(Date.now){return Date.now()}return (new Date).getTime()}
function zZ(a){if(a.a.b!=0){return Qg(slb(a.a),11)}return new D$(3,0,0,0)}
function KD(a,b){if(!a.C){return a.d[b]}return a.d[Qg(Dhb(a.C,kfb(b)),57).a]}
function OD(a,b){if(!a.C){return a.n[b]}return a.n[Qg(Dhb(a.C,kfb(b)),57).a]}
function PD(a,b){if(!a.C){return a.o[b]}return a.o[Qg(Dhb(a.C,kfb(b)),57).a]}
function Wmb(a,b){if(a<0||a>b){throw qv(new Vfb('Index: '+a+', Size: '+b))}}
function Yw(a){var b;b=$w(a);if(!b){return}qw(a,b.nodeType!=1?null:b,Cw(b))}
function _v(){var a;bw(Zv);if(!Bc){a=Hmb((ofb(ci),ci.j));Cc(new aw(a))}}
function sC(a){QB();var b,c;b=a.wb();for(c=0;c<b.length;c++){Ghb(NB,b[c],a)}}
function qC(a){QB();var b;b=Ehb(MB,a);if(b==null){return 0}return _mb(Rg(b))}
function yv(a){var b;if(wv(a)){b=0-a;if(!isNaN(b)){return b}}return sv(yg(a))}
function Ez(a){sz();var b;tz(this);this.i=null;b=new Y0(a,this,false);T0(b)}
function e0(a,b){this.i=a;this.n=b;this.a=null;this.b=null;this.c=1;this.d=1}
function IG(a,b,c,d,e,f){this.e=a*e;this.b=b*e;this.a=c*e;this.c=d*e;this.d=f}
function bg(a,b,c,d,e,f){var g;g=cg(e,d);e!=10&&fg(Zf(a,f),b,c,e,g);return g}
function gg(a,b){$f(b)!=10&&fg(Y(b),b.sc,b.__elementTypeId$,$f(b),a);return a}
function aC(a,b){var c;if(a.c==b.c){c=JB[a.c];return ND(c,a.b,b.b)}return null}
function M8(a,b){a.d.beginPath();Eb(a.d,b.a,b.c);Cb(a.d,b.b,b.d);a.d.stroke()}
function Mz(a){mlb(Qg(Eib(a.a,a.d),31),a.g);a.g=null;mlb(a.a,new ulb);++a.d}
function yw(){var a;a=$wnd.location.search;if(!ww||!Ggb(vw,a)){ww=xw(a);vw=a}}
function lx(){jx();kx(this,new nx(this));(pw(),this.e).className='gwt-Image'}
function aG(a){YF(this);!!a&&(Wg(a,52)?ihb(this.b,Qg(a,52).b):mlb(this.b,a))}
function u9(a,b,c,d,e,f){this.a=a;this.d=b;this.b=c;this.e=d;this.c=e;this.f=f}
function Tc(a,b){Rc();(a.head||a.getElementsByTagName('head')[0]).appendChild(b)}
function Tmb(a,b){if(a<0||a>=b){throw qv(new Vfb('Index: '+a+', Size: '+b))}}
function Vmb(a){if(!a){throw qv(new rgb('Cannot suppress a null exception.'))}}
function K9(a){if(Zq==a){return 'cyrillic/'}if(jr==a){return 'greek/'}return ''}
function hlb(a){if(a.a.d!=a.c){return alb(a.a,a.b.value[0])}return a.b.value[1]}
function Zz(a,b){if(!!a&&$wnd.Math.abs(b-a.t)>Wob){return new kF(a,b,2)}return a}
function H1(a,b){if(!!a&&$wnd.Math.abs(b-a.t)>Wob){return new kF(a,b,2)}return a}
function vz(a,b,c){var d;if(c!=null&&c.length!=0){d=new _0(b,c,a);T0(d)}return a}
function Mib(a,b,c){for(;c<a.a.length;++c){if(Olb(b,a.a[c])){return c}}return -1}
function Whb(a){var b;pkb(a.d,a);Smb(a.b);b=Qg(a.a.hc(),63);a.b=Vhb(a);return b}
function $w(a){var b;b=(Ud(),Td).V(a);while(!!b&&!Cw(b)){b=b.parentNode}return b}
function Vd(a){var b=a.firstChild;while(b&&b.nodeType!=1)b=b.nextSibling;return b}
function YY(a){nA.call(this);this.a=a;this.t=a.t;this.p=a.p;this.n=a.n;this.r=a.r}
function J_(a,b,c){F_();LA.call(this);this.b=a;this.n=b;b==1&&(this.o=0);this.a=c}
function EZ(a){vZ();wZ(this);!!a&&(Wg(a,17)?ihb(this.a,Qg(a,17).a):mlb(this.a,a))}
function L0(a){var b;b=a.d.g;if(Wg(b,17)){return zZ(Qg(b,17))}a.d.g=null;return b}
function Dg(a){if(vg(a,(Lg(),Kg))<0){return -tg(yg(a))}return a.l+a.m*$nb+a.h*_nb}
function N6(a){y6.call(this,"There's no symbol with the name '"+a+Grb+Cpb+Vob)}
function Qmb(a,b){if(!a){throw qv(new Sfb(anb('Enum constant undefined: %s',b)))}}
function R0(a,b){return /[A-Z]/i.test(String.fromCharCode(b))||a.b!=0&&b==64}
function $f(a){return a.__elementTypeCategory$==null?10:a.__elementTypeCategory$}
function R1(){R1=Nv;Q1=new D$(0,xpb,0,0);P1=new D$(0,0.05999999865889549,0,0)}
function KF(){KF=Nv;IF=new e9((new a7,new m9).a);new Z6;JF=new C7('Serif',0,10)}
function Lg(){Lg=Nv;Hg=kg(Xnb,Xnb,524287);Ig=kg(0,0,Znb);Jg=ig(1);ig(2);Kg=ig(0)}
function lz(){lz=Nv;fg(Zf(Yq,1),vnb,9,0,[(p6(),T3),U3]);fg(Zf(Yq,1),vnb,9,0,[u3])}
function Tb(a,b){var c;Umb(b);c=a[':'+b];Qmb(!!c,fg(Zf(Ut,1),vnb,1,5,[b]));return c}
function K8(a,b,c){var d,e;d=a.a.f;a9(a.a,c);e=Db(a.a.d,b).width;a9(a.a,d);return e}
function Iz(a){sz();var b;b=Qg(Dhb(mz,a),108);if(!b){b=new f0;Ghb(mz,a,b)}return b}
function Amb(){var a;if(!wmb){wmb=new zmb;a=new Gmb('');amb();xmb(wmb,a)}return wmb}
function wd(a){var b,c;if(a.b){c=null;do{b=a.b;a.b=null;c=zd(b,c)}while(a.b);a.b=c}}
function vd(a){var b,c;if(a.a){c=null;do{b=a.a;a.a=null;c=zd(b,c)}while(a.a);a.a=c}}
function zH(a,b){nlb(a.k,b);if(a.k.b==1){a.p=b.p;a.n=b.n}else{a.n+=b.p+b.n}CH(a,b)}
function Rgb(a,b){return b==(Ilb(),Ilb(),Hlb)?a.toLocaleUpperCase():a.toUpperCase()}
function cb(a,b){var c=a.parentNode;if(!c){return}c.insertBefore(b,a);c.removeChild(a)}
function H8(a){switch(a.f){default:case 0:return 0;case 1:return 1;case 2:return 2;}}
function I8(a){switch(a.f){default:case 0:return 2;case 1:return 0;case 2:return 1;}}
function Ye(a){if(null==a){throw qv(new rgb('encodedURLComponent cannot be null'))}}
function Gv(){Hv();var a=Fv;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function N_(a){F_();var b;b=Ehb(D_,a);if(b==null){throw qv(new N6(a))}return Qg(b,23)}
function yz(a){tz(this);!!a&&!!a.g&&(Wg(a.g,17)?uz(this,new EZ(a.g)):uz(this,a.g))}
function d$(a){nA.call(this);this.a=a;mlb(this.k,a);this.t=a.t;this.p=a.p;this.n=a.n}
function hE(a,b,c,d,e){E$(d);this.g=a;this.d=b;this.e=c;this.i=e;this.j=d;this.n=7}
function VH(a,b,c,d){!a?(this.b=new DZ):(this.b=new EZ(a));this.d=b;this.c=c;this.a=d}
function b9(a,b){a.a=b;Jb(a.d,D8(a.a).a);Kb(a.d,E8(a.a).a);Lb(a.d,a.a.d);Mb(a.d,a.a.c)}
function b0(a){var b;b=new d0(a.i,a.f,a.n,a.a,a.b,a.j,a.g);b.i=2*(a.i/4|0)+4+1;return b}
function tlb(a,b){var c;c=b.c;b.a.b=b.b;b.b.a=b.a;b.a=b.b=null;b.c=null;--a.b;return c}
function Hfb(a,b){var c;if(!a){return}b.i=a;var d=Bfb(b);if(!d){Kv[a]=[b];return}d.rc=b}
function pv(a){var b;if(Wg(a,24)){return a}b=a&&a[ynb];if(!b){b=new Gc(a);Cd(b)}return b}
function YE(a,b){var c,d,e;d=YB(b.i);c=new rF(d,a.b,a.a);e=new DH;zH(e,c);e.s=13;return e}
function dC(a,b){var c,d;c=JB[a.c];d=c.t;if(d==-1){return 0}return _B(a,new ZA(d,a.c),b)}
function MD(a,b,c,d){var e;e=Dhb(a.j,new bE(b,c));if(e==null){return 0}return _mb(Rg(e))*d}
function r_(a,b){var c;for(c=0;c<a.b.length;c++){if(a.b[c]==b){return true}}return false}
function tE(a,b){var c;c=cC(b.i,Qfb(Qg(Ehb((QB(),KB),Bpb),13)));return new wE(a.b/18*c)}
function Ed(a){var b=/function(?:\s+([\w$]+))?\s*\(/;var c=b.exec(a);return c&&c[1]||Dnb}
function agb(a){var b,c;if(a==0){return 32}else{c=0;for(b=1;(b&a)==0;b<<=1){++c}return c}}
function W_(a){var b;b=new d0(a.i,a.f,a.n,a.a,a.b,a.j,a.g);b.i=a.i%2==1?a.i:a.i+1;return b}
function $hb(a,b){var c,d;for(c=0,d=a.ac();c<d;++c){if(Olb(b,a.jc(c))){return c}}return -1}
function yf(e,a){var b=e.a;var c=0;for(var d in b){b.hasOwnProperty(d)&&(a[c++]=d)}return a}
function ov(){switch(iv){case 0:case 1:return new Ry;case 4:return new Xy;}return new Jy}
function Tz(){sz();xz.call(this);this.a=new ulb;this.c=new ulb;mlb(this.a,new ulb);this.d=0}
function IE(a,b,c,d){nA.call(this);this.a=a;this.t=b;this.p=c;this.b=1/d;this.n=0;this.r=0}
function OH(a,b,c,d,e){cz.call(this);this.n=7;this.a=a;this.d=b;this.e=c;this.b=d;this.c=e}
function bG(a,b,c,d,e){cz.call(this);YF(this);this.b=a;this.d=b;this.a=c;this.e=d;this.c=e}
function LZ(a,b,c,d,e,f){cz.call(this);this.f=a;this.b=c;this.d=e;this.e=b;this.a=d;this.c=f}
function FG(a,b,c,d){vG();wG(this);this.b=a;this.c=b;this.n=0;this.f=d;AG(this,new dhb(c))}
function qF(a,b,c){nA.call(this);pF(this);this.p=a;this.t=b;this.r=c;this.a=new A8(0,0,0,0)}
function yH(a,b,c){Dib(a.k,b,c);if(b==0){a.n+=c.n+a.p;a.p=c.p}else{a.n+=c.p+c.n}CH(a,c)}
function t9(c,a,b){c.m02_+=a*c.m00_+b*c.m01_;c.m12_+=a*c.m10_+b*c.m11_;c.translate(a,b)}
function V_(a,b){var c;c=new d0(a.i,a.f,b,a.a,a.b,a.j,a.g);c.k=a.k;c.c=a.c;c.d=a.d;return c}
function c0(a){var b;b=new d0(a.i,a.f,a.n,a.a,a.b,a.j,a.g);b.i=2*(a.i/4|0)+4+a.i%2;return b}
function T7(a,b,c){var d,e;for(e=new _ib(a.c);e.a<e.c.a.length;){d=Qg($ib(e),745);k8(d,b,c)}}
function s6(a,b){var c,d,e;q6.call(this,a);for(d=0,e=b.length;d<e;++d){c=b[d];Hhb(o6,c,this)}}
function ux(){var a,b,c;b=Qg(nv(),126);a=b.eb();c=b.fb();if(!Ggb(a,c)){throw qv(new wx(a,c))}}
function EE(a,b){var c;c=z9(b,a);if(Ggb('',c)){throw qv(new E6(cqb,Gy(b.a.a),a,null))}return c}
function q_(a){var b,c;b=0;c=a.a;while(c<a.g){c=v_(a,c);if(c>=a.g)break;c=t_(a,c);++b}return b}
function i1(a,b){var c;c=z9(b,a);if(Ggb('',c)){throw qv(new E6(Uob,Gy(b.a.a),a,null))}return c}
function s7(a,b,c,d){var e,f;e=new Dz(a);f=g0(h0(j0(i0(new k0(e)),c),b));u0(f,d,false);return f}
function vE(a,b,c){sE();var d,e,f;e=a>7?0:a;f=b>7?0:b;d=qE[e][f][c.i/2|0];return tE(rE[d],c)}
function qw(a,b,c){pw();var d;d=mw;mw=a;b==ow&&Aw((Ud(),a).type)==8192&&(ow=null);c.J(a);mw=d}
function Jv(a,b){typeof window===nnb&&typeof window['$gwt']===nnb&&(window['$gwt'][a]=b)}
function Zmb(a,b){if(a>b||a<0){throw qv(new ehb('fromIndex: 0, toIndex: '+a+', length: '+b))}}
function vv(a){if(aob<a&&a<_nb){return a<0?$wnd.Math.ceil(a):$wnd.Math.floor(a)}return sv(wg(a))}
function sv(a){var b;b=a.h;if(b==0){return a.l+a.m*$nb}if(b==Ynb){return a.l+a.m*$nb-_nb}return a}
function c9(a,b){var c;c=a.d.ggbDevicePixelRatio||1;s9(a.d,b.a*c,b.d*c,b.b*c,b.e*c,b.c*c,b.f*c)}
function CH(a,b){a.a=$wnd.Math.min(a.a,b.r);a.b=$wnd.Math.max(a.b,b.r+(b.t>0?b.t:0));a.t=a.b-a.a}
function k$(a,b){mE.call(this,a.d,a.i,a.g);this.b=b;this.n+=b;this.t+=b;this.a=new A8(0,0,0,0)}
function CB(a,b,c){oA.call(this,c,null);this.a=a;mlb(this.k,a);this.t=0;this.p=a.p*b;this.n=a.n*b}
function D6(a){A6.call(this,'DefaultTeXFont.xml: the required <'+a+'>-element is not found!')}
function M6(a){y6.call(this,"No mapping found for the symbol '"+a+"'! "+Hrb+Upb+Irb+Cpb+"'.")}
function O6(a){y6.call(this,"No mapping found for the text style '"+a+"'! "+Hrb+Ppb+Irb+Cpb+"'.")}
function H6(a){y6.call(this,"There's no predefined TeXFormula with the name '"+a+Grb+Cpb+Vob)}
function A0(a){if(!a.a){throw qv(new K6('You can add a row only in array mode !'))}Mz(Qg(a.d,50))}
function bI(a,b){aI();var c;c=(new Cz(a,b[1])).g;if(!Wg(c,23)){return c}return new Uz(Qg(c,23),2)}
function cI(a,b){aI();var c;c=(new Cz(a,b[1])).g;if(!Wg(c,23)){return c}return new Uz(Qg(c,23),4)}
function oI(a,b){aI();var c;c=(new Cz(a,b[1])).g;if(!Wg(c,23)){return c}return new Uz(Qg(c,23),1)}
function pI(a,b){aI();var c;c=(new Cz(a,b[1])).g;if(!Wg(c,23)){return c}return new Uz(Qg(c,23),3)}
function UB(a,b,c,d){var e;e=Ehb(PB,c);if(e==null){throw qv(new O6(c))}return VB(a,b,Qg(e,180),d)}
function JC(a,b){wC();var c;c=z9(b,a);if(Ggb('',c)){throw qv(new E6(Cpb,Gy(b.a.a),a,null))}return c}
function Yc(a){var b,c,d;d=(Rc(),window);b=d.document;c=Uc(b);Xc(c,a.b);Tc(b,c);a.a&&Vc(c);return c}
function gF(a){var b,c;b=-1;for(c=rlb(a.k,a.k.b);b==-1&&c.b.b!=c.d.a;){b=Qg(zlb(c),25).zb()}return b}
function BH(a){var b,c;b=-1;for(c=rlb(a.k,a.k.b);b==-1&&c.b.b!=c.d.a;){b=Qg(zlb(c),25).zb()}return b}
function Av(a){var b,c,d,e;e=a;d=0;if(e<0){e+=_nb;d=Ynb}c=bh(e/$nb);b=bh(e-c*$nb);return kg(b,c,d)}
function thb(a,b){var c,d;Umb(b);for(d=new Xhb((new Rhb(b)).a);d.b;){c=Whb(d);Ghb(a,c.oc(),c.pc())}}
function nC(b){QB();try{!!b&&oC(b.ub(),b.wb(),b.vb())}catch(a){a=pv(a);if(!Wg(a,157))throw qv(a)}}
function Ueb(a){var b;b=a.a.length;0<b?(a.a=a.a.substr(0,0)):0>b&&(a.a+=Wgb(bg(dh,bpb,41,-b,15,1)))}
function Cg(a,b){var c,d,e;c=a.l-b.l;d=a.m-b.m+(c>>22);e=a.h-b.h+(d>>22);return kg(c&Xnb,d&Xnb,e&Ynb)}
function ND(a,b,c){var d;d=Dhb(a.k,new bE(b,c));if(d==null){return null}return new ZA(Qg(d,57).a,a.f)}
function kfb(a){var b;if(a<128){b=(mfb(),lfb)[a];!b&&(b=lfb[a]=new afb(a));return b}return new afb(a)}
function mv(){switch(iv){case 0:return new sx;case 1:return new qx;case 4:return new tx;}return new rx}
function lv(){switch(iv){case 2:return new Mw;case 0:return new ex;case 4:return new hx;}return new bx}
function kv(){switch(iv){case 2:return new ee;case 4:return new pe;case 0:return new le;}return new je}
function z7(a){switch(a.e){default:case 0:return 'normal';case 2:return 'italic';case 1:return Qpb;}}
function D8(a){switch(a.a){default:case 0:return Xb(),Ub;case 1:return Xb(),Vb;case 2:return Xb(),Wb;}}
function E8(a){switch(a.b){default:case 2:return ec(),bc;case 0:return ec(),cc;case 1:return ec(),dc;}}
function Vhb(a){if(a.a.gc()){return true}if(a.a!=a.c){return false}a.a=new Skb(a.d.a);return a.a.gc()}
function Nib(a,b){var c;c=Mib(a,b,0);if(c==-1){return false}Tmb(c,a.a.length);Nmb(a.a,c,1);return true}
function khb(a,b){var c,d;Umb(b);for(d=b.Yb();d.gc();){c=d.hc();if(!a.$b(c)){return false}}return true}
function Mkb(a,b){var c,d,e;for(d=0,e=b.length;d<e;++d){c=b[d];if(Bkb(a,c.oc())){return c}}return null}
function mjb(a){ljb();var b,c,d;d=0;for(c=a.Yb();c.gc();){b=c.hc();d=d+(b!=null?$(b):0);d=d|0}return d}
function fg(a,b,c,d,e){e.rc=a;e.sc=b;e.tc=Qv;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function mC(a,b,c,d,e,f,g){RB(this);this.g=a;this.a=b;this.b=c;this.d=d;this.e=e;this.f=f;this.c=g}
function QY(a,b,c,d,e,f,g){cz.call(this);this.a=a;this.g=b;this.f=c;this.e=d;this.d=e;this.c=f;this.b=g}
function D$(a,b,c,d){z$();cz.call(this);E$(a);this.g=a;this.e=a;this.c=a;this.i=b;this.f=c;this.d=d}
function rF(a,b,c){nA.call(this);pF(this);this.p=a;this.t=b;this.r=0;this.b=c;this.a=new A8(0,0,0,0)}
function NH(a,b,c){cz.call(this);this.n=7;this.a=a;this.d=null;this.e=b;this.b=new D$(1,0,0,0);this.c=c}
function u$(a,b){cz.call(this);q$(this);this.a=a;Ggb('t',b)?(this.b=false):Ggb('b',b)&&(this.c=false)}
function rfb(){++nfb;this.j=null;this.g=null;this.f=null;this.d=null;this.b=null;this.i=null;this.a=null}
function fE(a,b,c,d,e,f,g,h,i){eE.call(this,a,b,c,d);this.f=jE(e);this.c=jE(f);this.a=g;this.b=h;this.e=i}
function w_(a){this.a=0;this.i=-1;this.d=false;this.k=a;this.g=a.length;this.c=';,';this.j=false;u_(this)}
function Dkb(a){Pmb(a>=0,'Negative initial capacity');Pmb(true,'Non-positive load factor');Ihb(this)}
function kb(a,b){a.b&&(pw(),a.e.__listener=null,undefined);!!a.e&&cb(a.e,b);a.e=b;a.b&&(pw(),Dw(a.e,a))}
function mA(a,b,c,d){a.q=b.c;if(a.j){$8(b,a.j);T8(b,new A8(c,d-a.p,a.t,a.p+a.n))}!a.o?$8(b,a.q):$8(b,a.o)}
function AA(){AA=Nv;zA=new BA('SLASH',0);xA=new BA('BACKSLASH',1);yA=new BA('CROSS',2)}
function Xb(){Xb=Nv;Ub=new Yb('BUTT',0,'butt');Vb=new Yb('ROUND',1,'round');Wb=new Yb('SQUARE',2,'square')}
function ec(){ec=Nv;bc=new fc('BEVEL',0,'bevel');cc=new fc('MITER',1,'miter');dc=new fc('ROUND',2,'round')}
function Lf(){Lf=Nv;Kf={'boolean':Mf,'number':Nf,'string':Pf,'object':Of,'function':Of,'undefined':Qf}}
function rg(a){var b,c;c=_fb(a.h);if(c==32){b=_fb(a.m);return b==32?_fb(a.l)+32:b+20-10}else{return c-12}}
function yg(a){var b,c,d;b=~a.l+1&Xnb;c=~a.m+(b==0?1:0)&Xnb;d=~a.h+(b==0&&c==0?1:0)&Ynb;return kg(b,c,d)}
function qg(a){var b,c,d;b=~a.l+1&Xnb;c=~a.m+(b==0?1:0)&Xnb;d=~a.h+(b==0&&c==0?1:0)&Ynb;a.l=b;a.m=c;a.h=d}
function njb(a){ljb();var b,c,d;d=1;for(c=a.Yb();c.gc();){b=c.hc();d=31*d+(b!=null?$(b):0);d=d|0}return d}
function cjb(a){var b,c,d,e;e=1;for(c=0,d=a.length;c<d;++c){b=a[c];e=31*e+(b!=null?$(b):0);e=e|0}return e}
function Pb(a){var b,c,d,e;b={};for(d=0,e=a.length;d<e;++d){c=a[d];b[':'+(c.e!=null?c.e:''+c.f)]=c}return b}
function X7(a,b,c){var d;d=Qgb(b,0,b.length-3);d=d+'js';_c(ad(bd(cd((Rc(),new dd(d)),Qc)),new g8(a,c)))}
function ng(a,b,c,d,e){var f;f=Ag(a,b);c&&qg(f);if(e){a=pg(a,b);d?(hg=yg(a)):(hg=kg(a.l,a.m,a.h))}return f}
function rv(a,b){var c;if(wv(a)&&wv(b)){c=a-b;if(!isNaN(c)){return c}}return vg(wv(a)?Av(a):a,wv(b)?Av(b):b)}
function uB(a){tB();var b,c,d;d=cgb((b=Lfb(a),Nfb(b.a,b.b)));c=d.a;return new J8(c>>16&255,c>>8&255,c&255)}
function nx(a){kb(a,re($doc));uw((pw(),a.e));a.c==-1?sw(a.e,133398655|(a.e.__eventBits||0)):(a.c|=133398655)}
function Y(a){return $g(a)?Zt:Yg(a)?Gt:Xg(a)?Ct:Vg(a)?a.rc:dg(a)?a.rc:a.rc||Array.isArray(a)&&Zf(ph,1)||ph}
function ZB(a){return a<2?1:a<4?Pfb(Qg(Ehb(KB,Xob),13)):a<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13))}
function Lz(a,b){var c;mlb(Qg(Eib(a.a,a.d),31),a.g);for(c=1;c<b-1;c++){mlb(Qg(Eib(a.a,a.d),31),null)}a.g=null}
function u0(a,b,c){a.b=b;if(!c){a.b.d+=bh(lpb*a.c);a.b.a+=bh(lpb*a.c);a.b.b+=bh(lpb*a.c);a.b.c+=bh(lpb*a.c)}}
function S_(a,b,c){nA.call(this);this.b=a;this.c=b;this.a=c;mlb(this.k,a);this.t=a.t;this.p=a.p;this.n=a.n}
function d0(a,b,c,d,e,f,g){this.i=a;this.f=b;this.n=c;this.j=f;this.g=g;this.a=d;this.b=e;this.c=1;this.d=1}
function ulb(){this.a=new Flb;this.c=new Flb;this.a.a=this.c;this.c.b=this.a;this.a.b=this.c.a=null;this.b=0}
function Xhb(a){var b;this.d=a;this.c=new elb(this.d.b);this.a=this.c;this.b=Vhb(this);b=a[Vrb];this[Vrb]=b}
function dI(a,b){aI();var c,d;c=(new Cz(a,b[1])).g;if(!Wg(c,23)){return c}d=new Uz(Qg(c,23),4);d.n=4;return d}
function eI(a,b){aI();var c,d;c=(new Cz(a,b[1])).g;if(!Wg(c,23)){return c}d=new Uz(Qg(c,23),4);d.n=5;return d}
function gI(a,b){aI();var c,d;c=(new Cz(a,b[1])).g;if(!Wg(c,23)){return c}d=new Uz(Qg(c,23),2);d.n=5;return d}
function fI(a,b){aI();var c,d;c=(new Cz(a,b[1])).g;if(!Wg(c,23)){return c}d=new Uz(Qg(c,23),2);d.n=4;return d}
function qI(a,b){aI();var c,d;c=(new Cz(a,b[1])).g;if(!Wg(c,23)){return c}d=new Uz(Qg(c,23),3);d.n=4;return d}
function rI(a,b){aI();var c,d;c=(new Cz(a,b[1])).g;if(!Wg(c,23)){return c}d=new Uz(Qg(c,23),3);d.n=5;return d}
function tI(a,b){aI();var c,d;c=(new Cz(a,b[1])).g;if(!Wg(c,23)){return c}d=new Uz(Qg(c,23),1);d.n=5;return d}
function sI(a,b){aI();var c,d;c=(new Cz(a,b[1])).g;if(!Wg(c,23)){return c}d=new Uz(Qg(c,23),1);d.n=4;return d}
function bB(a,b){var c;c=new d0(b.i,b.f,b.n,b.a,b.b,b.j,b.g);!!a.a&&X_(c,a.a);!!a.b&&Y_(c,a.b);return yZ(a.c,c)}
function W(a,b){return $g(a)?Ggb(a,b):Yg(a)?(Umb(a),a===b):Xg(a)?(Umb(a),a===b):Vg(a)?a.F(b):dg(a)?a===b:xb(a,b)}
function $(a){return $g(a)?knb(a):Yg(a)?bh((Umb(a),a)):Xg(a)?(Umb(a),a)?1231:1237:Vg(a)?a.H():dg(a)?enb(a):yb(a)}
function qd(a){jd();var b;b=Bc;if(b){if(b==fd){return}Emb(b.a,(amb(),a.O()),a);return}pd(Wg(a,90)?Qg(a,90).Q():a)}
function Pv(a){if(Array.isArray(a)&&a.tc===Qv){return pfb(Y(a))+'@'+($(a)>>>0).toString(16)}return a.toString()}
function VI(a){aI();var b,c;c=I0(a);b=(new Cz(a,O0(a))).g;if(!c||!b){throw qv(new K6(Pqb))}return new gE(c,b,true)}
function JI(a){aI();if(!a.a){throw qv(new K6('The macro \\hline is only available in array mode !'))}return new $E}
function B0(a,b){if(!a.a){throw qv(new K6('You can use cellcolor only in array mode !'))}Nz(Qg(a.d,50),b)}
function Rf(a){Lf();throw qv(new lf("Unexpected typeof result '"+a+"'; please report this bug to the GWT team"))}
function rC(a){QB();return a<2?1:a<4?Pfb(Qg(Ehb(KB,Xob),13)):a<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13))}
function lI(a){aI();var b,c;c=I0(a);b=(new Cz(a,O0(a))).g;if(!c||!b){throw qv(new K6(Pqb))}return new gE(c,b,false)}
function xv(a,b){var c;if(wv(a)&&wv(b)){c=a*b;if(aob<c&&c<_nb){return c}}return sv(xg(wv(a)?Av(a):a,wv(b)?Av(b):b))}
function zv(a,b){var c;if(wv(a)&&wv(b)){c=a-b;if(aob<c&&c<_nb){return c}}return sv(Cg(wv(a)?Av(a):a,wv(b)?Av(b):b))}
function Wy(){var a;Wy=Nv;vy();(a=/ AppleWebKit\/([\d]+)/.exec(navigator.userAgent),(a?parseInt(a[1]):0)||0)<=420}
function Be(a){var b;this.b=++ye;this.a=a;!ue&&(ue=new Ie);b=Qg(ue.a['load'],56);if(!b){b=new Pib;He(ue,b)}b.Zb(this)}
function G8(a,b,c,d){this.d=a;this.a=H8(Zb(b.toLocaleUpperCase()));this.b=I8(gc(c.toLocaleUpperCase()));this.c=d}
function G1(a,b,c,d,e,f,g,h){cz.call(this);this.a=a;this.f=b;this.i=d;this.g=g;this.b=c;this.e=f;this.d=e;this.c=h}
function s9(g,a,b,c,d,e,f){g.m00_=a;g.m10_=b;g.m01_=c;g.m11_=d;g.m02_=e;g.m12_=f;g.setTransform(a,b,c,d,e,f)}
function P8(a,b,c){q9(a.d);a.d.beginPath();t9(a.d,b,c);r9(a.d,5,5);a.d.arc(1,1,1,0,360,false);o9(a.d);a.d.stroke()}
function hF(a,b){a.t+=b.t;a.p=$wnd.Math.max(a.k.b==0?fqb:a.p,b.p-b.r);a.n=$wnd.Math.max(a.k.b==0?fqb:a.n,b.n+b.r)}
function S8(a,b){var c,d;if(a.f.Jb()){d=a.f.Ib();d.Kb(b,0,0,a.f.d,a.d)}else{c=new k9(a,b);a.b+=1;a.f.Hb(new h9(a,c))}}
function jhb(a,b){var c,d;for(d=a.Yb();d.gc();){c=d.hc();if(ah(b)===ah(c)||b!=null&&W(b,c)){return true}}return false}
function jb(a,b){var c;switch(pw(),Aw((Ud(),b).type)){case 16:case 32:c=Td.W(b);if(!!c&&Qd(a.e,c)){return}}xe(b,a,a.e)}
function ihb(a,b){var c,d,e;Umb(b);c=false;for(e=rlb(b,0);e.b!=e.d.c;){d=ylb(e);c=c|(olb(a,d,a.c.b,a.c),true)}return c}
function AH(a,b,c,d){var e,f,g;g=d-a.p;for(f=rlb(a.k,0);f.b!=f.d.c;){e=Qg(ylb(f),25);g+=e.p;e.yb(b,c+e.r-a.a,g);g+=e.n}}
function W0(a){var b;while(a.o<a.j){b=Teb(a.n,a.o);if(b!=32&&b!=9&&b!=10&&b!=13){break}if(b==10){++a.k;a.c=a.o}++a.o}}
function cgb(a){var b,c;if(a>-129&&a<128){b=a+128;c=(egb(),dgb)[b];!c&&(c=dgb[b]=new Wfb(a));return c}return new Wfb(a)}
function Xgb(a,b){var c,d,e;Zmb(b,a.length);e='';for(d=0;d<b;){c=d+10000<b?d+10000:b;e+=Tgb(a.slice(d,c));d=c}return e}
function S7(a,b){var c,d,e;Qg(Ehb(a.b,b),82);c=new Qib(a.c);for(e=new _ib(c);e.a<e.c.a.length;){d=Qg($ib(e),745);l8(d,b)}}
function IH(a,b,c){DH.call(this);zH(this,new x_(0,c,0,0));zH(this,new qF(c,a.t,0));zH(this,new x_(0,b,0,0));zH(this,a)}
function E6(a,b,c,d){A6.call(this,a+': invalid <'+b+">-element found: attribute '"+c+"' "+(d==null?'is required!':d))}
function xD(a,b,c,d){!a?(this.a=new DZ):(this.a=a);(!b||!Ggb(b.b,Zpb))&&(this.b=b);(!d||!Ggb(d.b,Zpb))&&(this.d=d);this.c=c}
function blb(a,b,c){var d;d=a.a.get(b);a.a.set(b,c===undefined?null:c);if(d===undefined){++a.c;qkb(a.b)}else{++a.d}return d}
function pC(a,b){var c,d;c=JB[a.c];d=OD(c,a.b);if(d==null){return new IG(1,1,0,0,b,b)}return new IG(d[0],d[1],d[2],d[3],b,b)}
function Sz(a,b,c){if(a.c.b<=b){return null}if(Qg(Eib(a.c,b),31).b<=c){return null}return Qg(Eib(Qg(Eib(a.c,b),31),c),235)}
function TB(a){return qC(Epb)*(a<2?1:a<4?Pfb(Qg(Ehb(KB,Xob),13)):a<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13)))}
function YB(a){return qC(Gpb)*(a<2?1:a<4?Pfb(Qg(Ehb(KB,Xob),13)):a<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13)))}
function fC(a){return qC('subdrop')*(a<2?1:a<4?Pfb(Qg(Ehb(KB,Xob),13)):a<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13)))}
function gC(a){return qC('supdrop')*(a<2?1:a<4?Pfb(Qg(Ehb(KB,Xob),13)):a<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13)))}
function ifb(a){return String.fromCharCode(a).toLowerCase().charCodeAt(0)==a&&/[A-Z]/i.test(String.fromCharCode(a))}
function Hgb(a){Umb(a);if(Ggb(a,aqb)){return true}return a.length==aqb.length&&Ggb(a.toLowerCase(),aqb.toLowerCase())}
function nv(){switch(iv){case 1:return new Ax;case 4:return new Jx;case 0:return new xx;case 2:return new Dx;}return new Gx}
function J6(){y6.call(this,"The delimiter type was not valid! Use one of the unit constants from the class 'TeXConstants'.")}
function uA(a,b,c){nA.call(this);this.a=a;this.t=a.t;this.p=a.p;this.n=a.n;this.r=a.r;this.e=b;this.b=c;this.c=new v8(0,0,0,0)}
function E1(a,b,c,d,e,f,g){cz.call(this);E$(5);E$(5);this.a=a;this.f=b;this.i=c;this.g=d;this.b=e;this.e=5;this.d=f;this.c=g}
function Gc(a){Ec();kc(this);mc(this);this.e=a;a!=null&&cnb(a,ynb,this);this.g=a==null?Cnb:Pv(a);this.a='';this.b=a;this.a=''}
function dy(a,b){Mx.call(this,Pob+Qgb(a,0,pgb(a.length,128)));Ymb(!this.f);Pmb(b!=this,'Self-causation not permitted');this.f=b}
function Lv(){Kv={};!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'})}
function mg(a,b){if(a.h==Znb&&a.m==0&&a.l==0){b&&(hg=kg(0,0,0));return jg((Lg(),Jg))}b&&(hg=kg(a.l,a.m,a.h));return kg(0,0,0)}
function rb(){mb();var a;!nb&&(nb=Qg(jv(),139));if(!nb.K()){return null}a=qe($doc);if(!a.getContext){return null}return new qb(a)}
function FI(a,b){aI();var c,d;d=new Cz(a,b[1]);c=new Cz(a,b[2]);if(!d.g||!c.g){throw qv(new K6(Pqb))}return new gE(d.g,c.g,true)}
function cJ(a,b){aI();if(b[2]==null){return new lH((new Cz(a,b[1])).g,null)}return new lH((new Cz(a,b[1])).g,(new Cz(a,b[2])).g)}
function cC(a,b){var c;c=JB[b];return QD(c,a<2?1:a<4?Pfb(Qg(Ehb(KB,Xob),13)):a<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13)))}
function hC(a,b){var c;c=JB[b];return SD(c,a<2?1:a<4?Pfb(Qg(Ehb(KB,Xob),13)):a<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13)))}
function t0(a,b,c,d,e){var f;q9(c.d);f=c.c;Z8(c,a.c,a.c);$8(c,b.a);a.a.yb(c,(d+a.b.b)/a.c,(e+a.b.d)/a.c+a.a.p);X8(c);$8(c,f)}
function j9(a){var b,c;c=a.c.f;b=a.c.c;q9(a.c.d);a9(a.c,a.b);$8(a.c,a.a);c9(a.c,a.e);V8(a.c,a.d,a.f,a.g);X8(a.c);a9(a.c,c);$8(a.c,b)}
function _c(a){var b,c,d;d=!a.d?(Rc(),window):a.d;b=(Rc(),d.document);c=Uc(b);(!!a.a||a.b)&&Sc(c,a.a,a.b);Wc(c,a.c);Tc(b,c);return c}
function Se(a){var b,c;if(a.a){try{for(c=new _ib(a.a);c.a<c.c.a.length;){b=Qg($ib(c),798);Oe(b.a,b.d,b.c,b.b)}}finally{a.a=null}}}
function fF(a,b,c,d){var e,f,g;mA(a,b,c,d);g=c;for(f=rlb(a.k,0);f.b!=f.d.c;){e=Qg(ylb(f),25);e.yb(b,g,d+e.r);g+=e.t}$8(b,a.q)}
function Qe(a,b,c){var d,e;e=Qg(Dhb(a.d,b),113);if(!e){e=new Ckb;Ghb(a.d,b,e)}d=Qg(e.ec(c),56);if(!d){d=new Pib;e.fc(c,d)}return d}
function ZC(a,b){var c,d,e;c=a.a.qb(b);d=YB(b.i);e=(z$(),0.65*x$[0].Eb(b));if(!a.b){return new mE(c,d,e)}return new nE(c,d,e,a.c,a.b)}
function wy(b,c){var d;try{return Qg(Ux(b.kb(c)),800)}catch(a){a=pv(a);if(Wg(a,90)){d=a;throw qv(new dy(c,d))}else throw qv(a)}}
function l0(a,b,c){var d;d=new B9(Qg((new v9(jy(A9(a.a,'CharacterToSymbolMappings').a,0))).b,34));!d.a||q0(new D9(hy(d.a,'Map')),b,c)}
function dw(){var a,b,c;b=(yw(),c=Qg(ww.ec('logLevel'),56),!c?null:Tg(c.jc(c.ac()-1)));a=b==null?null:cmb(b);if(a);else{amb()}}
function amb(){amb=Nv;Tlb=new emb;Ulb=new gmb;Vlb=new imb;Wlb=new kmb;Xlb=new mmb;Ylb=new omb;Zlb=new qmb;$lb=new smb;_lb=new umb}
function tD(a,b,c,d,e){nA.call(this);this.a=a;this.t=a*(c+d)+2*d;this.p=b;this.n=0;this.d=e;this.c=d;this.e=c;this.b=new v8(0,0,0,0)}
function F_(){F_=Nv;D_=f1(new g1);E_=new cA;E_.a|=1<<0;E_.a|=1<<1;E_.a|=1<<2;E_.a|=1<<3;E_.a|=1<<4;E_.a|=1<<5;E_.a|=1<<6;E_.a|=1<<10}
function ld(){var a;if(ed!=0){a=Lc();if(a-gd>2000){gd=a;hd=$wnd.setTimeout(sd,10)}}if(ed++==0){vd((ud(),td));return true}return false}
function lgb(a){var b,c;if(rv(a,-129)>0&&rv(a,128)<0){b=Cv(a)+128;c=(ngb(),mgb)[b];!c&&(c=mgb[b]=new fgb(a));return c}return new fgb(a)}
function M0(a){var b,c;if(a.o==a.j){return null}b=0;W0(a);c=a.o;while(a.o<a.j&&b!=32){b=Teb(a.n,a.o++)}W0(a);return I$(Web(a.n,c,a.o-1))}
function Gd(){if(Error.stackTraceLimit>0){$wnd.Error.stackTraceLimit=Error.stackTraceLimit=64;return true}return 'stack' in new Error}
function Kw(){var a=false;for(var b=0;b<$wnd.__gwt_globalEventArray.length;b++){!$wnd.__gwt_globalEventArray[b]()&&(a=true)}return !a}
function Gfb(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function shb(a,b){var c,d,e;for(d=new Xhb((new Rhb(a)).a);d.b;){c=Whb(d);e=c.oc();if(ah(b)===ah(e)||b!=null&&W(b,e)){return c}}return null}
function Re(a,b){var c,d;d=Qg(Dhb(a.d,b),113);if(!d){return ljb(),ljb(),kjb}c=Qg(d.ec(null),56);if(!c){return ljb(),ljb(),kjb}return c}
function bfb(a,b,c){var d,e;d=Egb(a,b++);if(d>=55296&&d<=56319&&b<c&&hfb(e=a.charCodeAt(b))){return job+((d&1023)<<10)+(e&1023)}return d}
function oc(a,b,c){var d,e,f,g,h;for(e=(a.j==null&&(a.j=(Bd(),h=Ad.S(a),Dd(h))),a.j),f=0,g=e.length;f<g;++f){d=e[f];b.ab(c+'\tat '+d)}}
function m0(a,b,c){var d;d=new B9(Qg((new v9(jy(A9(a.a,'CharacterToFormulaMappings').a,0))).b,34));!d.a||p0(new D9(hy(d.a,'Map')),b,c)}
function Af(f,a){var b=f.a;var c;a=String(a);b.hasOwnProperty(a)&&(c=b[a]);var d=(Lf(),Kf)[typeof c];var e=d?d(c):Rf(typeof c);return e}
function knb(a){inb();var b,c,d;c=':'+a;d=hnb[c];if(!(d===undefined)){return d}d=fnb[c];b=d===undefined?jnb(a):d;lnb();hnb[c]=b;return b}
function xI(b,c){aI();var d;try{B0(b,fB(c[1]));return null}catch(a){a=pv(a);if(Wg(a,36)){d=a;throw qv(new K6(qc(d,d.g)))}else throw qv(a)}}
function Eib(b,c){var d;d=rlb(b,c);try{return ylb(d)}catch(a){a=pv(a);if(Wg(a,96)){throw qv(new Vfb("Can't get element "+c))}else throw qv(a)}}
function fz(a,b){this.c=a;Wg(a,39)?(this.e=Qg(a,39).e):(this.e=a);if(!Wg(b,23)){throw qv(new I6('Invalid accent'))}this.b=Qg(b,23);this.a=true}
function k9(a,b){this.c=a;this.d=b;this.f=0;this.g=0;this.e=new u9(a.d.m00_,a.d.m10_,a.d.m01_,a.d.m11_,a.d.m02_,a.d.m12_);this.b=a.f;this.a=a.c}
function VA(a){nA.call(this);this.a=bg(dh,bpb,41,1,15,1);this.b=new ZA(a.a,a.c);this.d=a.d.d;this.t=a.d.e;this.p=a.d.b;this.n=a.d.a;this.c=a.d.c}
function mE(a,b,c){nA.call(this);this.d=a;this.t=a.t+2*b+2*c;this.p=a.p+b+c;this.n=a.n+b+c;this.r=a.r;this.i=b;this.g=c;this.f=new A8(0,0,0,0)}
function a1(a,b,c,d){y0();this.d=c;this.i=a;if(b!=null){this.n=new dhb(b);this.j=b.length;this.o=0;d&&D0(this)}else{this.n=null;this.o=0;this.j=0}}
function H0(a){var b,c;c=a.o;do{b=Teb(a.n,a.o++);b==92&&++a.o}while(a.o<a.j&&b!=36);if(b==36){return Web(a.n,c,a.o-1)}return Web(a.n,c,a.o)}
function s_(a){var b;a.a=a.i>=0&&!a.d?a.i:v_(a,a.a);a.d=false;a.i=-1;if(a.a>=a.g)throw qv(new Nlb);b=a.a;a.a=t_(a,a.a);return Qgb(a.k,b,a.a)}
function rlb(a,b){var c,d;Wmb(b,a.b);if(b>=a.b>>1){d=a.c;for(c=a.b;c>b;--c){d=d.b}}else{d=a.a.a;for(c=0;c<b;++c){d=d.a}}return new Alb(a,b,d)}
function UA(a,b,c,d){var e;q9(b.d);t9(b.d,c,d);e=aE(a.b.c);a.d!=1&&Z8(b,a.d,a.d);A7(b.f,e)||(b.f=e,Ib(b.d,y7(b.f)));a.a[0]=a.b.b;Q8(b,a.a);X8(b)}
function Pg(a,b){if($g(a)){return !!Og[b]}else if(a.sc){return !!a.sc[b]}else if(Yg(a)){return !!Ng[b]}else if(Xg(a)){return !!Mg[b]}return false}
function Kmb(a,b,c,d,e){var f,g,h;if(a===c){a=a.slice(b,b+e);b=0}for(g=b,h=b+e;g<h;){f=g+10000<h?g+10000:h;e=f-g;Imb(c,d,0,a.slice(g,f));g=f;d+=e}}
function lc(a,b){Vmb(b);Pmb(b!=a,'Exception can not suppress itself.');if(a.i){return}a.k==null?(a.k=fg(Zf($t,1),vnb,24,0,[b])):(a.k[a.k.length]=b)}
function NI(a){aI();var b;b=I$(a[1]);if(b.length==1){throw qv(new K6('Error in getting kern in \\kern command !'))}return new D$(bh(b[0]),b[1],0,0)}
function vZ(){vZ=Nv;tZ=new cA;bA(tZ,2);bA(tZ,1);bA(tZ,3);bA(tZ,4);bA(tZ,6);uZ=new cA;bA(uZ,0);bA(uZ,1);bA(uZ,2);bA(uZ,3);bA(uZ,4);bA(uZ,5);bA(uZ,6)}
function Oib(a,b){var c,d,e;e=a.a.length;b.length<e&&(b=(d=new Array(e),gg(d,b)));for(c=0;c<e;++c){eg(b,c,a.a[c])}b.length>e&&eg(b,e,null);return b}
function djb(a,b){var c,d,e;e=a.a.length;b.length<e&&(b=(d=new Array(e),gg(d,b)));for(c=0;c<e;++c){eg(b,c,a.a[c])}b.length>e&&eg(b,e,null);return b}
function _6(a,b,c){var d,e,f;f=Cv(vv($wnd.Math.round(a*255)));e=Cv(vv($wnd.Math.round(b*255)));d=Cv(vv($wnd.Math.round(c*255)));return new J8(f,e,d)}
function I7(a,b,c){var d,e,f,g;e=K7(c);f=(g='',Zq==b?(g='cyrillic/'):jr==b&&(g='greek/'),'font/'+g)+c;d=R7(a.a,f,e,Cv(vv($wnd.Math.round(1))));return d}
function LC(b,c){wC();var d,e;d=JC(b,c);try{e=Nfb(d,10)}catch(a){a=pv(a);if(Wg(a,36)){throw qv(new E6(Cpb,Gy(c.a.a),b,Vpb))}else throw qv(a)}return e}
function GI(a,b){aI();var c,d;c=new Tz;d=new Z0(a.i,b[1],c);T0(d);Oz(c);if(c.b>1){throw qv(new K6(Tqb))}if(c.b==0){return null}return new $G(a.i,c,1)}
function HI(a,b){aI();var c,d;c=new Tz;d=new Z0(a.i,b[1],c);T0(d);Oz(c);if(c.b>1){throw qv(new K6(Tqb))}if(c.b==0){return null}return new $G(a.i,c,2)}
function SI(a,b){aI();var c,d;c=new Tz;d=new Z0(a.i,b[1],c);T0(d);Oz(c);if(c.b>1){throw qv(new K6(Tqb))}if(c.b==0){return null}return new $G(a.i,c,0)}
function t6(a){p6();var b,c,d,e;d=a>>>16;if(d>=17){throw qv(new Rfb)}b=0;e=m6.length;c=e/2|0;while(e-b>1){a>=m6[c]?(b=c):(e=c);c=(e+b)/2|0}return n6[c]}
function pg(a,b){var c,d,e;if(b<=22){c=a.l&(1<<b)-1;d=e=0}else if(b<=44){c=a.l;d=a.m&(1<<b-22)-1;e=0}else{c=a.l;d=a.m;e=a.h&(1<<b-44)-1}return kg(c,d,e)}
function UD(a,b,c){var d;if(!a.C){a.d[b]=c}else if(Chb(a.C,kfb(b))){a.d[Qg(Dhb(a.C,kfb(b)),57).a]=c}else{d=Jhb(a.C)&Fpb;Ghb(a.C,kfb(b),kfb(d));a.d[d]=c}}
function WD(a,b,c){var d;if(!a.C){a.n[b]=c}else if(Chb(a.C,kfb(b))){a.n[Qg(Dhb(a.C,kfb(b)),57).a]=c}else{d=Jhb(a.C)&Fpb;Ghb(a.C,kfb(b),kfb(d));a.n[d]=c}}
function vG(){vG=Nv;pG=new D$(0,1,0,0);rG=new D$(0,0.5,0,0);uG=new D$(1,0,1,0);tG=new D$(1,0,iqb,0);sG=new D$(1,0,iqb,0);qG=new x_(0,0,0,0);oG=new C$(2)}
function l8(a,b){var c,d;if(!Ggb(b,a.c)){return}Z7(a.b,a);for(d=new _ib(a.a);d.a<d.c.a.length;){c=Qg($ib(d),746);g9(c)}a.a.a=bg(Ut,vnb,1,0,5,1);a.a=null}
function Sgb(a){var b,c,d;c=a.length;d=0;while(d<c&&a.charCodeAt(d)<=32){++d}b=c;while(b>d&&a.charCodeAt(b-1)<=32){--b}return d>0||b<c?a.substr(d,b-d):a}
function cg(a,b){var c=new Array(b);var d;switch(a){case 14:case 15:d=0;break;case 16:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function DI(a){aI();var b,c,d,e,f;c=Nfb(a[1],10);if(c>5){d=c/5|0;e=c%5;f=new DZ;for(b=0;b<d;b++){xZ(f,new oD(5))}xZ(f,new oD(e));return f}return new oD(c)}
function ymb(a,b){var c,d,e,f;c=Qg(Ehb(a.a,b),128);if(!c){d=new Gmb(b);e=d.b;f=Qgb(e,0,ogb(Jgb(e,Ugb(46))));Fmb(d,ymb(a,f));Hhb(a.a,d.b,d);return d}return c}
function RI(){aI();var a,b;a=new EZ(N_(Uqb));xZ(a,new D$(0,Vqb,0,0));b=new F1(N_(Zpb),N_(Zpb),5,Wqb,false,true);mlb(a.a,b);mlb(a.a,b);return new t1(3,3,a)}
function Ne(a,b,c){var d;if(!b){throw qv(new rgb('Cannot add a handler with a null type'))}a.b>0?Me(a,new az(a,b,c)):(d=Qe(a,b,null),d.Zb(c));return new _y}
function eC(a){var b,c;c=Qfb(Qg(Ehb(KB,Hpb),13));b=JB[c];return RD(b,a<2?1:a<4?Pfb(Qg(Ehb(KB,Xob),13)):a<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13)))}
function Vgb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b)+'$'+Pgb(a,++b)):(a=a.substr(0,b)+(''+Pgb(a,++b)))}return a}
function R8(a,b){var c,d,e;if(b){c=b.a;e=new lx;Sd((pw(),e.e),'src',c);hb(e,new i9(a,e),(De(),De(),Ce));Ab(a.d,e.e,0,0)}else{d=(pw(),null.vc);zb(a.d,d,0,0)}}
function ug(a,b){var c,d,e;e=a.h-b.h;if(e<0){return false}c=a.l-b.l;d=a.m-b.m+(c>>22);e+=d>>22;if(e<0){return false}a.l=c&Xnb;a.m=d&Xnb;a.h=e&Ynb;return true}
function o0(b,c){var d,e;try{this.a=(d=F9((new b7,b)),new B9(Qg(Ux(By(d.a.a)),34)))}catch(a){a=pv(a);if(Wg(a,26)){e=a;throw qv(new F6(c,e))}else throw qv(a)}}
function nI(b,c){aI();var d;try{return new cB((new zz(b,c[2])).g,fB(c[1]),null)}catch(a){a=pv(a);if(Wg(a,36)){d=a;throw qv(new K6(qc(d,d.g)))}else throw qv(a)}}
function EI(b,c){aI();var d;try{return new cB((new zz(b,c[2])).g,null,fB(c[1]))}catch(a){a=pv(a);if(Wg(a,36)){d=a;throw qv(new K6(qc(d,d.g)))}else throw qv(a)}}
function BI(b){aI();var c;try{return new yB(new J8((W6(T6),f7),e7,d7),Mfb(b[1]))}catch(a){a=pv(a);if(Wg(a,36)){c=a;throw qv(new K6(qc(c,c.g)))}else throw qv(a)}}
function F9(b){var c,d;try{return new y9((Ox(),wy(Nx,b)))}catch(a){a=pv(a);if(Wg(a,140)){c=a;d=new B6('Could not parse resource',c);throw qv(d)}else throw qv(a)}}
function _I(b,c){aI();var d;try{return new _Z((new zz(b,c[1])).g,fB('#CCCCFF'),null)}catch(a){a=pv(a);if(Wg(a,36)){d=a;throw qv(new K6(qc(d,d.g)))}else throw qv(a)}}
function Ve(a){var b,c,d;zc.call(this,We(a),a._b()?null:Qg(a.Yb().hc(),24));this.a=a;d=0;for(c=a.Yb();c.gc();){b=Qg(c.hc(),24);if(d++==0){continue}lc(this,b)}}
function YI(a,b){aI();var c,d;d=b[1];if(!S0(a,d)){throw qv(new K6(_qb+d))}b[3]==null?(c=new Wfb(0)):(c=cgb(Nfb(b[3],10)));iH(d.substr(1),b[2],c.a);return null}
function AI(a){aI();var b,c;if(a.a){A0(a)}else{b=new Tz;uz(b,a.d.g);Mz(b);c=new $0(a.i,Veb(a.n,a.o),b,a.f);T0(c);Oz(b);a.o=a.n.a.length;a.d.g=Rz(b)}return null}
function tv(a,b){var c;if(wv(a)&&wv(b)){c=a/b;if(aob<c&&c<_nb){return c<0?$wnd.Math.ceil(c):$wnd.Math.floor(c)}}return sv(lg(wv(a)?Av(a):a,wv(b)?Av(b):b,false))}
function Rz(a){var b,c,d,e,f;f=new _F;f.a=true;for(e=rlb(a.a,0);e.b!=e.d.c;){d=Qg(ylb(e),31);for(c=rlb(d,0);c.b!=c.d.c;){b=Qg(ylb(c),11);!!b&&mlb(f.b,b)}}return f}
function vg(a,b){var c,d,e,f,g,h,i,j;i=a.h>>19;j=b.h>>19;if(i!=j){return j-i}e=a.h;h=b.h;if(e!=h){return e-h}d=a.m;g=b.m;if(d!=g){return d-g}c=a.l;f=b.l;return c-f}
function wx(a,b){vx.call(this,yob+a+') '+zob+b+Aob+Bob==null?Cnb:Pv(yob+a+') '+zob+b+Aob+Bob),Wg(yob+a+') '+zob+b+Aob+Bob,24)?Qg(yob+a+') '+zob+b+Aob+Bob,24):null)}
function _B(a,b,c){var d;if(a.c==b.c){d=JB[a.c];return MD(d,a.b,b.b,c<2?1:c<4?Pfb(Qg(Ehb(KB,Xob),13)):c<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13)))}return 0}
function cfb(a,b){if(b<2||b>36){return -1}if(a>=48&&a<48+(b<10?b:10)){return a-48}if(a>=97&&a<b+97-10){return a-97+10}if(a>=65&&a<b+65-10){return a-65+10}return -1}
function Cz(b,c){sz();var d,e;tz(this);this.i=null;this.e=b.d.e;d=b.i;e=new a1(d,c,this,false);if(d){try{T0(e)}catch(a){a=pv(a);if(!Wg(a,26))throw qv(a)}}else{T0(e)}}
function Hz(a){sz();var b,c,d;c=Qg(Ehb(nz,a),10);if(!c){b=Tg(Ehb(oz,a));if(b==null){throw qv(new H6(a))}d=new Dz(b);Wg(d.g,17)||Hhb(nz,a,d);return d}return new yz(c)}
function iA(a,b,c){var d,e;for(e=0;e<c;e++){b.a+='  '}Wg(a,35)?$gb(b,a.I()):$gb(b,Lgb(qfb(a.rc),'Box',''));b.a+='\n';for(d=0;d<a.k.b;d++){iA(Qg(Eib(a.k,d),25),b,c+1)}}
function iH(a,b,c){dH();if(Ehb(bH,a)==null){throw qv(new K6('Command '+a+' is not defined ! Use newcommand instead ...'))}Hhb(bH,a,b);Hhb((hG(),gG),a,new jG(new fH,c))}
function kH(a,b,c,d){dH();if(Ehb(bH,a+qqb)==null){throw qv(new K6('Environment '+a+'is not defined ! Use newenvironment instead ...'))}iH(a+qqb,b+' #'+(d+1)+' '+c,d+1)}
function W7(a,b,c){var d,e;if(Ehb(a.b,c)!=null){e=Qg(Ehb(a.b,c),82);if(!!e&&e.b);else{d=Qg(Ehb(a.b,c),82);!!d&&!d.b&&S7(a,c)}}else{d=new j8;Hhb(a.b,c,d);X7(a,a.a+b,c)}}
function Iv(b,c,d,e){Hv();var f=Fv;$moduleName=c;$moduleBase=d;iv=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{mnb(g)()}catch(a){b(c,a)}}else{mnb(g)()}}
function Fib(b,c,d){var e,f;e=rlb(b,c);try{f=ylb(e);Xmb(!!e.c);e.c.c=d;return f}catch(a){a=pv(a);if(Wg(a,96)){throw qv(new Vfb("Can't set element "+c))}else throw qv(a)}}
function NC(b,c,d){wC();var e,f;e=z9(c,b);if(Ggb('',e)){return d}try{f=Nfb(e,10)}catch(a){a=pv(a);if(Wg(a,36)){throw qv(new E6(Cpb,Gy(c.a.a),b,Vpb))}else throw qv(a)}return f}
function KC(b,c){wC();var d,e;d=JC(b,c);try{e=Mfb(d)}catch(a){a=pv(a);if(Wg(a,36)){throw qv(new E6(Cpb,Gy(c.a.a),b,'has an invalid real value!'))}else throw qv(a)}return e}
function Dd(a){var b,c,d,e;b='Cd';c='vc';e=pgb(a.length,5);for(d=e-1;d>=0;d--){if(Ggb(a[d].d,b)||Ggb(a[d].d,c)){a.length>=d+1&&(a.splice(0,d+1),undefined);break}}return a}
function ag(a,b,c,d,e,f,g){var h,i,j,k,l;k=e[f];j=f==g-1;h=j?d:0;l=cg(h,k);d!=10&&fg(Zf(a,g-f),b[f],c[f],h,l);if(!j){++f;for(i=0;i<k;++i){l[i]=ag(a,b,c,d,e,f,g)}}return l}
function k8(a,b,c){var d,e;if(!Ggb(c,a.c)){return}Pv(b);Z7(a.b,a);for(e=new _ib(a.a);e.a<e.c.a.length;){d=Qg($ib(e),746);d.a.b-=1;W8(d.a)}a.a.a=bg(Ut,vnb,1,0,5,1);a.a=null}
function zd(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].uc()&&(c=yd(c,g)):g[0].uc()}catch(a){a=pv(a);if(Wg(a,24)){d=a;qd(d)}else throw qv(a)}}return c}
function Gz(a,b){sz();var c;c=new lC(a);b==0&&(c.e=false);(b&8)!=0&&(c.d=true);(b&16)!=0&&(c.f=true);(b&1)!=0&&(c.e=true);(b&4)!=0&&(c.c=true);(b&2)!=0&&(c.b=true);return c}
function XB(a,b,c){var d,e,f;f=Ehb(OB,b);if(f==null){for(e=new Xhb((new Rhb(OB)).a);e.b;){d=Whb(e);fhb();Tg(d.oc())+' , '+d.pc()}throw qv(new M6(b))}return WB(a,Qg(f,42),c)}
function Mfb(a){Kfb==null&&(Kfb=/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/);if(!Kfb.test(a)){throw qv(new zgb(Trb+a+'"'))}return parseFloat(a)}
function Ykb(){function b(){try{return (new Map).entries().next().done}catch(a){return false}}
if(typeof Map===onb&&Map.prototype.entries&&b()){return Map}else{return Zkb()}}
function Fc(a){var b;if(a.c==null){b=ah(a.b)===ah(Dc)?null:a.b;a.d=b==null?Cnb:Zg(b)?Ic(Sg(b)):$g(b)?'String':pfb(Y(b));a.a=a.a+': '+(Zg(b)?Hc(Sg(b)):b+'');a.c='('+a.d+') '+a.a}}
function JH(a,b,c,d,e){nA.call(this);this.a=a;this.b=b;this.e=c;this.c=d;this.d=e;this.t=a.t;this.p=a.p+(e?b.t:0)+(e&&!!c?c.p+c.n+d:0);this.n=a.n+(e?0:b.t)+(!e&&!!c?c.p+c.n+d:0)}
function nd(b,c,d){var e,f;e=ld();try{if(Bc){try{return kd(b,c,d)}catch(a){a=pv(a);if(Wg(a,24)){f=a;qd(f);return undefined}else throw qv(a)}}else{return kd(b,c,d)}}finally{od(e)}}
function Tw(){Qw=mnb(Yw);Rw=mnb(Zw);var c=ix;var d=Nw;c(d,function(a,b){d[a]=mnb(b)});var e=Pw;c(e,function(a,b){e[a]=mnb(b)});c(e,function(a,b){$wnd.addEventListener(a,b,true)})}
function GC(b,c,d){wC();var e,f;this.a=b;new c7;new b7;try{this.c=(e=F9(c),new B9(Qg(Ux(By(e.a.a)),34)))}catch(a){a=pv(a);if(Wg(a,26)){f=a;throw qv(new F6(d,f))}else throw qv(a)}}
function FC(){wC();var b,c,d;new c7;new b7;d=I9(Dj,Cpb);try{this.c=(b=F9(d),new B9(Qg(Ux(By(b.a.a)),34)))}catch(a){a=pv(a);if(Wg(a,26)){c=a;throw qv(new F6(Cpb,c))}else throw qv(a)}}
function FZ(a,b,c){var d,e;e=a.c>=0?a.c:a.a.sb();if(e==2&&(!b||aA(tZ,b.c>=0?b.c:b.a.tb())||!c)){a.c=0}else if(!!c&&(a.c>=0?a.c:a.a.tb())==2){d=c.sb();(d==3||d==5||d==6)&&(a.c=0)}}
function q9(b){!b.ggbTransformCache&&(b.ggbTransformCache=[]);var a=[b.m00_,b.m10_,b.m01_,b.m11_,b.m02_,b.m12_];b.ggbTransformCache.push([a[0],a[1],a[2],a[3],a[4],a[5]]);b.save()}
function MF(a,b,c,d){KF();var e;nA.call(this);this.a=c;this.b=new N7(a,new C7(d.c,b,d.d),new L8(IF));e=M7(this.b);this.p=-e.d*c/10;this.n=e.a*c/10-this.p;this.t=(e.b+e.c+iqb)*c/10}
function U0(a,b){var c,d,e,f;d=Qg(Ehb((hG(),gG),b),15);e=0;d.a&&(e=d.d);c=N0(a,d.c,e);c[0]=b;dH();if(Fhb(bH,b)){f=Tg(iG(d,a,c));Q0(a,a.p,a.o,f);return null}return Qg(iG(d,a,c),11)}
function hI(a){aI();var b,c,d;d=I0(a);c=M0(a);b=(new Cz(a,O0(a))).g;if(c==null||c.length!=2){throw qv(new K6(Oqb))}if(!d||!b){throw qv(new K6(Pqb))}return new eE(d,b,bh(c[0]),c[1])}
function iG(b,c,d){var e;try{return b.b.Db(c,d)}catch(a){a=pv(a);if(Wg(a,26)){e=a;throw qv(new K6('Problem with command '+d[0]+nqb+c.k+':'+(c.o-c.c-1)+'\n'+e.O()))}else throw qv(a)}}
function $7(){var a,b;this.a=(jd(),a='__gwtDevModeHook:'+$moduleName+':moduleBase',b=$wnd||self,b[a]||$moduleBase);Yc(Zc((Rc(),new $c((Q9(),M9,N9())))));this.c=new Pib;this.b=new Ckb}
function xe(a,b,c){var d,e,f,g,h;if(ue){h=Qg(Ge(ue,(Ud(),a).type),56);if(h){for(g=h.Yb();g.gc();){f=Qg(g.hc(),176);d=f.a.a;e=f.a.b;ve(f.a,a);we(f.a,c);ib(b,f.a);ve(f.a,d);we(f.a,e)}}}}
function n9(a){if(!a){return}!a.ggbDevicePixelRatio&&(a.ggbDevicePixelRatio=1);a.m00_=1;a.m10_=0;a.m01_=0;a.m11_=1;a.m02_=0;a.m12_=0;a.setTransform(1,0,0,1,0,0);a.ggbTransformCache=[]}
function Az(b,c){var d,e;tz(this);this.i=null;this.e=b.d.e;d=b.i;e=new _0(d,c,this);if(d){try{T0(e)}catch(a){a=pv(a);if(Wg(a,26)){!this.g&&(this.g=new kD)}else throw qv(a)}}else{T0(e)}}
function Bz(b,c,d,e){sz();var f,g;tz(this);this.i=d;this.e=b.d.e;f=b.i;g=new b1(f,c,this,e);if(f){try{T0(g)}catch(a){a=pv(a);if(Wg(a,26)){!this.g&&(this.g=new kD)}else throw qv(a)}}else{T0(g)}}
function Nz(a,b){while(a.c.b<a.d+1){mlb(a.c,new ulb)}while(Qg(Eib(a.c,a.d),31).b<Qg(Eib(a.a,a.d),31).b+1){mlb(Qg(Eib(a.c,a.d),31),null)}Fib(Qg(Eib(a.c,a.d),31),Qg(Eib(a.a,a.d),31).b,b)}
function XD(a,b,c,d){var e;if(!a.C){a.o[b]=new ZA(c,d)}else if(Chb(a.C,kfb(b))){a.o[Qg(Dhb(a.C,kfb(b)),57).a]=new ZA(c,d)}else{e=Jhb(a.C)&Fpb;Ghb(a.C,kfb(b),kfb(e));a.o[e]=new ZA(c,d)}}
function o9(c){var a=c.ggbDevicePixelRatio;var b=c.ggbTransformCache.pop();if(!b){c.restore();return}c.m00_=b[0];c.m10_=b[1];c.m01_=b[2];c.m11_=b[3];c.m02_=b[4];c.m12_=b[5];c.restore()}
function hH(a,b,c,d){dH();if(Ehb(bH,a)!=null){throw qv(new K6('Command '+a+' already exists ! Use renewcommand instead ...'))}Hhb(bH,a,b);Hhb(cH,a,d);Hhb((hG(),gG),a,new kG(new fH,c,1))}
function Ugb(a){var b,c;if(a>=job){b=55296+(a-job>>10&1023)&Fpb;c=56320+(a-job&1023)&Fpb;return String.fromCharCode(b)+(''+String.fromCharCode(c))}else{return String.fromCharCode(a&Fpb)}}
function Y7(f,a){var b=f;var c=$wnd.__JLM_GWT_FONTS__[a];var d=b.Lb(c);var e=opentype.parse(d);if(!e.supported){b.Nb('Parse error: font not supported',a)}else{b.Pb(a,e);b.Mb(e.familyName)}}
function v0(a,b,c){s0();this.b=new h7(0,0,0,0);this.a=a;r0!=0?(this.c=b*$wnd.Math.abs(r0)):(this.c=b);if(!c){this.b.d+=bh(lpb*b);this.b.a+=bh(lpb*b);this.b.b+=bh(lpb*b);this.b.c+=bh(lpb*b)}}
function Akb(){Akb=Nv;ykb=fg(Zf(Zt,1),Wnb,2,6,['Sun','Mon','Tue','Wed','Thu','Fri','Sat']);zkb=fg(Zf(Zt,1),Wnb,2,6,['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])}
function MC(b,c){var d,e;d=z9(c,b);if(Ggb('',d)){return 0}try{e=Mfb(d)}catch(a){a=pv(a);if(Wg(a,36)){throw qv(new E6(Cpb,Gy(c.a.a),b,'has an invalid double value!'))}else throw qv(a)}return e}
function kI(a,b){aI();var c,d,e;c=new Tz;e=new Z0(a.i,b[2],c);T0(e);Oz(c);d=Nfb(b[1],10);if(c.b!=2*d){throw qv(new K6('Bad number of equations in alignat environment !'))}return new CG(a.i,c,3)}
function K7(a){var b,c;if(a==null){return null}b=Jgb(a,Ugb(46));c=Jgb(a,Ugb(92));c==-1&&(c=Jgb(a,Ugb(47)));c=c>-1?c:0;if(b>c){return a.substr(c>0?c+1:0,b-(c>0?c+1:0))}return a.substr(c>0?c+1:0)}
function zg(a,b){var c,d,e;b&=63;if(b<22){c=a.l<<b;d=a.m<<b|a.l>>22-b;e=a.h<<b|a.m>>22-b}else if(b<44){c=0;d=a.l<<b-22;e=a.m<<b-22|a.l>>44-b}else{c=0;d=0;e=a.l<<b-44}return kg(c&Xnb,d&Xnb,e&Ynb)}
function Bg(a,b){var c,d,e,f;b&=63;c=a.h&Ynb;if(b<22){f=c>>>b;e=a.m>>b|c<<22-b;d=a.l>>b|a.m<<22-b}else if(b<44){f=0;e=c>>>b-22;d=a.m>>b-22|a.h<<44-b}else{f=0;e=0;d=c>>>b-44}return kg(d&Xnb,e&Xnb,f&Ynb)}
function I9(a,b){var c;c=K9(a)+b;if(!Fhb(G9,c)){throw qv(new A6('Resource not found, please regenerate XmlResource file and ResourceLoader.getResource() methods'+c))}return Qg(Ehb(G9,c),18).bb()}
function rhb(a,b){var c,d,e;c=b.oc();e=b.pc();d=$g(c)?Ehb(a,c):xhb(Okb(a.a,c));if(!(ah(e)===ah(d)||e!=null&&W(e,d))){return false}if(d==null&&!($g(c)?Fhb(a,c):!!Okb(a.a,c))){return false}return true}
function UI(a,b){aI();var c,d;d=b[1];if(!S0(a,d)){throw qv(new K6(_qb+d))}b[3]==null?(c=new Wfb(0)):(c=cgb(Nfb(b[3],10)));b[4]==null?gH(d.substr(1),b[2],c.a):hH(d.substr(1),b[2],c.a,b[4]);return null}
function Ke(b,c){var d,e;!c.c||(c.c=false,c.d=null);e=c.d;te(c,b.b);try{Pe(b.a,c)}catch(a){a=pv(a);if(Wg(a,125)){d=a;throw qv(new Xe(d.a))}else throw qv(a)}finally{e==null?(c.c=true,c.d=null):(c.d=e)}}
function nc(a,b,c,d){var e,f,g,h,i;b.ab(d+c+a);oc(a,b,d);for(f=(a.k==null&&(a.k=bg($t,vnb,24,0,0,1)),a.k),g=0,h=f.length;g<h;++g){e=f[g];nc(e,b,'Suppressed: ','\t'+d)}i=a.f;!!i&&nc(i,b,'Caused by: ',d)}
function QI(b){aI();var c,d;try{c=lgb(Ofb(b[1])).a;d=lgb(Ofb(b[2])).a;return new fG(d,c)}catch(a){a=pv(a);if(Wg(a,36)){throw qv(new K6('Divisor and dividend must be integer numbers'))}else throw qv(a)}}
function vB(a,b,c){var d;if(Wg(a,74)){d=Qg(a,74);this.a=d.a;xZ(d.c,c);xZ(d.b,b);this.c=d.c;this.b=d.b}else{!a?(this.a=new VH(new NA(77,zpb),false,true,true)):(this.a=a);this.c=new EZ(c);this.b=new EZ(b)}}
function uz(a,b){var c,d;if(b){Wg(b,112)&&mlb(a.f,Qg(b,112));if(!a.g){a.g=b}else{Wg(a.g,17)||(a.g=new EZ(a.g));xZ(Qg(a.g,17),b);if(Wg(b,27)){d=Qg(b,27);c=d.c;(c==2||c==3)&&xZ(Qg(a.g,17),new rA)}}}return a}
function v_(a,b){var c,d;if(a.c==null)throw qv(new qgb);d=b;while(!a.j&&d<a.g){if(a.e){c=Fgb(a.k,d);if(c>a.f||!r_(a,c)){break}d+=c>=job?2:1}else{c=Egb(a.k,d);if(c>a.f||Igb(a.c,Ugb(c))<0)break;++d}}return d}
function F1(a,b,c,d,e,f){cz.call(this);E$(c);this.a=a;if(f){this.f=null;this.i=0;this.g=false;this.b=b;this.e=c;this.d=d;this.c=e}else{this.f=b;this.i=d;this.g=e;this.d=0;this.b=null;this.e=0;this.c=false}}
function yI(a,b){aI();var c,d,e,f,g;c=2;Ggb('r',b[3])?(c=1):Ggb('l',b[3])&&(c=0);f=new Cz(a,b[1]);d=new Cz(a,b[2]);if(!f.g||!d.g){throw qv(new K6(Pqb))}e=new iE(f.g,d.g,c);g=new DZ;xZ(g,new A_(0,e));return g}
function de(a,b){if(a.nodeType!=1&&a.nodeType!=9){return a==b}if(b.nodeType!=1){b=b.parentNode;if(!b){return false}}if(a.nodeType==9){return a===b||a.body&&a.body.contains(b)}else{return a===b||a.contains(b)}}
function fw(a,b){var c,d,e;c=new bhb;$gb(c,(d=new tkb(b.b),e=new bhb,$gb(e,skb(d)),e.a+=' ',$gb(e,b.a),e.a+='\n',e.a+=eob,e.a+=': ',e.a));$gb(c,b.c);if(a.a&&!!b.d){c.a+='\n';nc(b.d,new kw(c),'','')}return c.a}
function Pkb(a,b,c){var d,e,f,g,h;h=b==null?0:(g=$(b),g|0);e=(d=a.a.get(h),d==null?[]:d);if(e.length==0){a.a.set(h,e)}else{f=Mkb(b,e);if(f){return f.qc(c)}}eg(e,e.length,new zib(b,c));++a.c;qkb(a.b);return null}
function jnb(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=a.charCodeAt(c+3)+31*(a.charCodeAt(c+2)+31*(a.charCodeAt(c+1)+31*(a.charCodeAt(c)+31*b)));b=b|0;c+=4}while(c<d){b=b*31+Egb(a,c++)}b=b|0;return b}
function f9(a){this.d=a;n9(this.d);this.a=new G8(this.d.lineWidth,this.d.lineCap,this.d.lineJoin,this.d.miterLimit);this.c=new J8(0,0,0);Nb(this.d,this.c.a);this.f=new C7(this.d.font,0,Cv(vv($wnd.Math.round(1))))}
function iz(a,b){this.b=N_(b);if(this.b.n==10){this.c=a;Wg(a,39)?(this.e=Qg(a,39).e):(this.e=a)}else{throw qv(new I6("The symbol with the name '"+b+"' is not defined as an accent ("+'type'+"='acc') in '"+Uob+Vob))}}
function aZ(a,b,c,d){var e,f;this.n=a.n;this.a=a;this.d=d;f=I$(b==null?'':b);e=I$(c==null?'':c);if(f.length!=2){this.f=-1}else{this.f=bh(f[0]);this.e=f[1]}if(e.length!=2){this.c=-1}else{this.c=bh(e[0]);this.b=e[1]}}
function We(a){var b,c,d,e,f;c=a.ac();if(c==0){return null}b=new dhb(c==1?'Exception caught: ':c+' exceptions caught: ');d=true;for(f=a.Yb();f.gc();){e=Qg(f.hc(),24);d?(d=false):(b.a+='; ',b);$gb(b,e.O())}return b.a}
function Of(a){if(!a){return nf(),mf}var b=a.valueOf?a.valueOf():a;if(b!==a){var c=Kf[typeof b];return c?c(b):Rf(typeof b)}else if(a instanceof Array||a instanceof $wnd.Array){return new Ze(a)}else{return new Ef(a)}}
function vI(a,b,c){aI();var d,e;e=I0(a);d=(new Cz(a,O0(a))).g;if(!e||!d){throw qv(new K6("Both numerator and denominator of choose can't be empty!"))}return new wD(new gE(e,d,false),new J_(b,4,true),new J_(c,5,true))}
function uI(a,b){aI();var c,d;d=new Cz(a,b[1]);c=new Cz(a,b[2]);if(!d.g||!c.g){throw qv(new K6('Both binomial coefficients must be not empty !!'))}return new wD(new gE(d.g,c.g,false),new J_(Rqb,4,true),new J_(Sqb,5,true))}
function _1(a,b){var c,d,e,f,g;if(a.b!=0){d=YB(b.i);c=new qF(a.a,d,a.c);g=new x_(2*d,0,0,0);e=new iF;for(f=0;f<a.b-1;f++){hF(e,c);nlb(e.k,c);hF(e,g);nlb(e.k,g)}a.b>0&&(hF(e,c),nlb(e.k,c));return e}return new x_(0,0,0,0)}
function UH(a){var b,c,d,e,f;c=new Ckb;if(a==null||a.length==0){return c}f=Ngb(a,',',0);for(b=0;b<f.length;b++){e=Sgb(f[b]);d=Ngb(e,'=',0);d.length==2?Hhb(c,Sgb(d[0]),Sgb(d[1])):d.length==1&&Ghb(c,Sgb(d[0]),null)}return c}
function bC(a,b){var c,d,e;d=JB[a.c];c=PD(d,a.a);e=JB[c.c];return new KA(c.b,(!e.e&&(!e.a?(e.e=IC(e.p)):(e.e=HC(e.a,e.p))),e.e),c.c,pC(c,b<2?1:b<4?Pfb(Qg(Ehb(KB,Xob),13)):b<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13))))}
function yG(a,b,c,d,e,f){var g,h,i,j,k,l;l=0;j=Qg(Qz(a.c,e,f),71);k=j.g;for(i=f;i<f+k-1;i++){l+=d[i]+c[i+1].t;a.g.ec(cgb(i+1))!=null&&(l+=a2(Qg(a.g.ec(cgb(i+1)),100),b))}l+=d[i];g=j.qb(b);h=g.t;h>l&&(l=0);j.j=l;g=j.qb(b);return g}
function _fb(a){var b,c,d;if(a<0){return 0}else if(a==0){return 32}else{d=-(a>>16);b=d>>16&16;c=16-b;a=a>>b;d=a-256;b=d>>16&8;c+=b;a<<=b;d=a-4096;b=d>>16&4;c+=b;a<<=b;d=a-iob;b=d>>16&2;c+=b;a<<=b;d=a>>14;b=d&~(d>>1);return c+2-b}}
function EH(a,b,c){var d;DH.call(this);zH(this,a);if(c==2){d=new x_(0,b/2,0,0);Dib(this.k,0,d);this.p+=b/2;this.n+=b/2;nlb(this.k,d)}else if(c==3){this.n+=b;hA(this,new x_(0,b,0,0))}else if(c==4){this.p+=b;gA(this,new x_(0,b,0,0))}}
function Oc(b){var c=(!Mc&&(Mc=Pc()),Mc);var d=b.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g,function(a){return Nc(a,c)});return '"'+d+'"'}
function F0(a){var b,c,d;d=++a.o;b=0;while(a.o<a.j){b=Teb(a.n,a.o);if((b<97||b>122)&&(b<65||b>90)&&(a.b==0||b!=64)){break}++a.o}if(b==0){return ''}a.o==d&&++a.o;c=Web(a.n,d,a.o);Ggb('cr',c)&&a.o<a.j&&Teb(a.n,a.o)==32&&++a.o;return c}
function w9(a){switch(a){case 2:return 2;case 4:return 4;case 8:return 8;case 11:return 11;case 9:return 9;case 10:return 10;case 1:return 1;case 6:return 6;case 5:return 5;case 12:return 12;case 7:return 7;default:case 3:return 3;}}
function A$(a,b){var c,d;if(a.a){if(a.b==0){return new x_(eC(b.i)*b.n.a,0,0,0)}d=a.b<0?-a.b:a.b;d==1?(c=vE(7,1,b)):d==2?(c=vE(2,1,b)):(c=vE(3,1,b));a.b<0&&(c.t=-c.t);return c}return new x_(a.i*H$(a.g,b),a.f*H$(a.e,b),a.d*H$(a.c,b),0)}
function BC(a){var b,c;c=new Ckb;b=new B9(Qg((new v9(jy(A9(a.c,Dpb).a,0))).b,34));if(!b.a){throw qv(new D6(Dpb))}Hhb(c,Bpb,cgb(Mib(tC,JC(Bpb,b),0)));Hhb(c,Hpb,cgb(Mib(tC,JC(Hpb,b),0)));Hhb(c,Yob,KC(Yob,b));Hhb(c,Zob,KC(Zob,b));return c}
function Mv(a,b,c){var d=Kv,h;var e=d[a];var f=e instanceof Array?e[0]:null;if(e&&!f){_=e}else{_=(h=b&&b.prototype,!h&&(h=Kv[b]),Ov(h));_.sc=c;!b&&(_.tc=Qv);d[a]=_}for(var g=3;g<arguments.length;++g){arguments[g].prototype=_}f&&(_.rc=f)}
function eJ(){eJ=Nv;var a,b,c,d;for(b=uO(),c=0,d=b.length;c<d;++c){a=b[c];switch(a.d){case 1:Hhb((hG(),gG),a.c==null?a.e!=null?a.e:''+a.f:a.c,new jG(a,a.a));break;case 2:Hhb((hG(),gG),a.c==null?a.e!=null?a.e:''+a.f:a.c,new kG(a,a.a,a.b));}}}
function Ag(a,b){var c,d,e,f,g;b&=63;c=a.h;d=(c&Znb)!=0;d&&(c|=-1048576);if(b<22){g=c>>b;f=a.m>>b|c<<22-b;e=a.l>>b|a.m<<22-b}else if(b<44){g=d?Ynb:0;f=c>>b-22;e=a.m>>b-22|c<<44-b}else{g=d?Ynb:0;f=d?Xnb:0;e=c>>b-44}return kg(e&Xnb,f&Xnb,g&Ynb)}
function i7(a){var b,c,d;if(a==null){throw qv(new K6('null argument'))}if(Igb(a,Ugb(92))==-1&&Igb(a,Ugb(36))==-1){return a}d=new bhb;for(c=0;c<a.length;c++){b=a.charCodeAt(c);(b==92||b==36)&&(d.a+='\\',d);d.a+=String.fromCharCode(b)}return d.a}
function oC(a,b,c){var d,e,f,g,h;d=false;for(f=0;!d&&f<b.length;f++){d=Mib(LB,b[f],0)!=-1||d}if(!d){y0();w0=true;g=I9((new c7,a),c);fhb();h=new GC(a,g,c);JB=zC(h,JB);yC(h);thb(PB,h.b);thb(OB,EC(h));for(e=0;e<b.length;e++){Kib(LB,b[e])}w0=false}}
function yC(a){var b,c,d,e;d=new B9(Qg((new v9(jy(A9(a.c,'TeXSymbols').a,0))).b,34));if(d.a){b=JC(Lpb,d);F_();e=new h1(I9(a.a,b),b);thb(D_,f1(e))}c=new B9(Qg((new v9(jy(A9(a.c,'FormulaSettings').a,0))).b,34));if(c.a){b=JC(Lpb,c);Fz(I9(a.a,b),b)}}
function eH(a){var b,c,d,e,f;b=Tg(Ehb(bH,a[0]));e=a.length-11;c=0;if(a[e+1]!=null){c=1;f=i7(a[e+1]);b=Lgb(b,'#1',f)}else if(Ehb(cH,a[0])!=null){c=1;f=i7(Tg(Ehb(cH,a[0])));b=Lgb(b,'#1',f)}for(d=1;d<=e;d++){f=i7(a[d]);b=Lgb(b,'#'+(d+c),f)}return b}
function MA(a,b,c,d){var e;e=a.a;d&&ifb(a.a)&&(e=String.fromCharCode(a.a).toLocaleUpperCase().charCodeAt(0));if(a.c==null){return e>=48&&e<=57?UB(b,e,(QB(),IB)[0],c):e>=97&&e<=122?UB(b,e,(QB(),IB)[2],c):UB(b,e,(QB(),IB)[1],c)}return UB(b,e,a.c,c)}
function CC(a){var b,c,d,e,f;f=new Ckb;e=new B9(Qg((new v9(jy(A9(a.c,Opb).a,0))).b,34));if(!e.a){throw qv(new D6(Opb))}c=new C9(new py(yy(e.a.a)));for(b=0;b<Dy(c.a.a);b++){d=Ey((new x9(Qg((new v9(oy(c.a,b))).b,799))).a.a);Hhb(f,d,KC(d,e))}return f}
function wC(){wC=Nv;tC=new Pib;vC=new Ckb;uC=new Ckb;Hhb(vC,'numbers',cgb(0));Hhb(vC,'capitals',cgb(1));Hhb(vC,'small',cgb(2));Hhb(vC,'unicode',cgb(3));Hhb(uC,'Kern',new RC);Hhb(uC,'Lig',new TC);Hhb(uC,'NextLarger',new VC);Hhb(uC,'Extension',new PC)}
function Dfb(a){if(a.Ub()){var b=a.c;b.Vb()?(a.j='['+b.i):!b.Ub()?(a.j='[L'+b.Sb()+';'):(a.j='['+b.Sb());a.b=b.Rb()+'[]';a.g=b.Tb()+'[]';return}var c=a.f;var d=a.d;d=d.split('/');a.j=Gfb('.',[c,Gfb('$',d)]);a.b=Gfb('.',[c,Gfb('.',d)]);a.g=d[d.length-1]}
function LI(a,b){aI();var c,d;if(!a.a){throw qv(new K6('Bad environment for \\intertext command !'))}d=Lgb(b[1],'\\^\\{\\\\prime\\}',"'");d=Lgb(d,'\\^\\{\\\\prime\\\\prime\\}',"''");c=new fZ((new Bz(a,d,zpb,false)).g);c.n=11;uz(a.d,c);A0(a);return null}
function sz(){sz=Nv;var b;nz=new Dkb(150);oz=new Dkb(150);qz=bg(Zt,Wnb,2,job,6,1);rz=bg(Zt,Wnb,2,job,6,1);pz=bg(Zt,Wnb,2,job,6,1);mz=new Ckb;b=new n0;l0(b,qz,rz);eJ();PY();aI();m0(b,pz,rz);try{sC(new u6);sC(new P6)}catch(a){a=pv(a);if(!Wg(a,26))throw qv(a)}}
function PZ(a,b,c){nA.call(this);this.a=a;this.b=isNaN(b)||!isNaN(b)&&!isFinite(b)?0:b;this.c=isNaN(c)||!isNaN(c)&&!isFinite(c)?0:c;this.t=a.t*$wnd.Math.abs(this.b);this.p=this.c>0?a.p*this.c:-a.n*this.c;this.n=this.c>0?a.n*this.c:-a.p*this.c;this.r=a.r*this.c}
function XC(a,b,c){var d,e,f,g,h,i,j,k;if(c>4){return G_(a,b)}k=b.n;j=b.i;f=XB(k,a.b,j);for(g=1;g<=c&&(i=(QB(),JB)[f.c],!!PD(i,f.a));g++){f=bC(f,j)}if(g<=c&&(h=(QB(),JB)[f.c],!PD(h,f.a))){d=new VA(UB(k,65,zpb,j));e=YC(a.b,b,c*(d.p+d.n));return e}return new VA(f)}
function Dmb(a,b){var c,d,e,f,g,h,i,j;for(e=Qg(Oib(a.a,bg(Wu,Zrb,117,a.a.a.length,0,1)),178),g=0,i=e.length;g<i;++g){c=e[g];c._(b)}j=a.d?a.c:null;while(j){for(d=Qg(Oib(j.a,bg(Wu,Zrb,117,j.a.a.length,0,1)),178),f=0,h=d.length;f<h;++f){c=d[f];c._(b)}j=j.d?j.c:null}}
function TI(a){aI();var b;b=0;Ggb(a[0],',')?(b=1):Ggb(a[0],':')?(b=2):Ggb(a[0],';')?(b=3):Ggb(a[0],'thinspace')?(b=1):Ggb(a[0],'medspace')?(b=2):Ggb(a[0],Xqb)?(b=3):Ggb(a[0],'!')?(b=-1):Ggb(a[0],Yqb)?(b=-1):Ggb(a[0],Zqb)?(b=-2):Ggb(a[0],$qb)&&(b=-3);return new C$(b)}
function zC(a,b){var c,d,e,f,g;c=b;d=new B9(Qg((new v9(jy(A9(a.c,'FontDescriptions').a,0))).b,34));if(d.a){g=new D9(hy(d.a,'Metrics'));for(e=0;e<Dy(g.a.a);e++){f=JC(Lpb,new B9(Qg((new v9(jy(g.a,e))).b,34)));!a.a?(c=AC(a,c,I9(Dj,f),f)):(c=AC(a,c,I9(a.a,f),f))}}return c}
function S0(a,b){var c,d,e;if(b==null||Ggb('',b)){return false}c=0;if(b.charCodeAt(0)==92){e=1;d=b.length;while(e<d){c=b.charCodeAt(e);if(!/[A-Z]/i.test(String.fromCharCode(c))&&(a.b==0||c!=64)){break}++e}}else{return false}return /[A-Z]/i.test(String.fromCharCode(c))}
function anb(a,b){var c,d,e,f;a=a;c=new chb;f=0;d=0;while(d<b.length){e=a.indexOf('%s',f);if(e==-1){break}$gb(c,a.substr(f,e-f));Zgb(c,b[d++]);f=e+2}$gb(c,a.substr(f));if(d<b.length){c.a+=' [';Zgb(c,b[d++]);while(d<b.length){c.a+=', ';Zgb(c,b[d++])}c.a+=']'}return c.a}
function sg(a){var b,c,d;c=a.l;if((c&c-1)!=0){return -1}d=a.m;if((d&d-1)!=0){return -1}b=a.h;if((b&b-1)!=0){return -1}if(b==0&&d==0&&c==0){return -1}if(b==0&&d==0&&c!=0){return agb(c)}if(b==0&&d!=0&&c==0){return agb(d)+22}if(b!=0&&d==0&&c==0){return agb(b)+44}return -1}
function DG(a,b,c){var d;wG(this);this.b=a;this.c=b;this.n=c;this.f=false;if(c!=1&&c!=5){this.d=bg(fh,Ypb,41,this.c.b,15,1);for(d=0;d<this.c.b;d+=2){this.d[d]=1;d+1<this.c.b&&(this.d[d+1]=0)}}else{this.d=bg(fh,Ypb,41,this.c.b,15,1);for(d=0;d<this.c.b;d++){this.d[d]=2}}}
function VB(a,b,c,d){var e,f;if(b>=48&&b<=57){e=0;f=b-48}else if(b>=97&&b<=122){e=2;f=b-97}else if(b>=65&&b<=90){e=1;f=b-65}else{e=3;f=b}if(!c[e]){return b>=48&&b<=57?UB(a,b,IB[0],d):b>=97&&b<=122?UB(a,b,IB[2],d):UB(a,b,IB[1],d)}return WB(a,new ZA(c[e].b+f&Fpb,c[e].c),d)}
function g0(a){var b,c,d,e;if(!a.b){throw qv(new Ufb('A style is required. Use setStyle()'))}if(a.a==null){throw qv(new Ufb('A size is required. Use setStyle()'))}c=!a.d?new lC(_mb(a.a)):Gz(_mb(a.a),a.d.a);d=new e0(a.b.a,c);b=wz(a.c,d);e=new v0(b,_mb(a.a),false);return e}
function u_(a){var b,c,d,e,f,g;if(a.c==null){a.f=0;return}g=0;c=0;for(e=0;e<a.c.length;e+=b>=job?2:1){b=Egb(a.c,e);if(b>=55296&&b<=57343){b=Fgb(a.c,e);a.e=true}g<b&&(g=b);++c}a.f=g;if(a.e){a.b=bg(fh,Ypb,41,c,15,1);for(d=0,f=0;d<c;++d,f+=b>=job?2:1){b=Fgb(a.c,f);a.b[d]=b}}}
function E0(a){var b,c,d,e,f;W0(a);if(a.o<a.j){d=Teb(a.n,a.o)}else{return new kD}if(d==123){f=new xz;e=a.d;a.d=f;++a.o;++a.e;T0(a);a.d=e;if(!a.d.g){c=new DZ;xZ(c,f.g);return c}return f.g}if(d==92){c=V0(a);if(a.g){a.g=false;return E0(a)}return c}b=C0(a,d,true);++a.o;return b}
function zI(a,b){aI();var c,d,e;d=b[1];e=10;if(Ggb(d.substr(0,2),'0x')||Ggb(d.substr(0,2),'0X')){d=d.substr(2);e=16}else if(Ggb(d.substr(0,1),'x')||Ggb(d.substr(0,1),'X')){d=d.substr(1);e=16}else if(Ggb(d.substr(0,1),'0')){d=d.substr(1);e=8}c=Nfb(d,e);return C0(a,c&Fpb,true)}
function Ux(a){var b;if(!a){return null}b=Fy(a);switch(b){case 2:return new Wx(a);case 4:return new $x(a);case 8:return new ay(a);case 11:return new ey(a);case 9:return new fy(a);case 1:return new iy(a);case 7:return new sy(a);case 3:return new Yx(a);default:return new Tx(a);}}
function wg(a){var b,c,d,e,f;if(isNaN(a)){return Lg(),Kg}if(a<-9223372036854775808){return Lg(),Ig}if(a>=9223372036854775807){return Lg(),Hg}e=false;if(a<0){e=true;a=-a}d=0;if(a>=_nb){d=bh(a/_nb);a-=d*_nb}c=0;if(a>=$nb){c=bh(a/$nb);a-=c*$nb}b=bh(a);f=kg(b,c,d);e&&qg(f);return f}
function LE(a,b){var c,d,e,f,g;g=0;f=b.length;c=2;e=true;while(g<f){d=b.charCodeAt(g);switch(d){case 108:c=0;e=false;break;case 114:c=1;e=false;break;case 99:c=2;e=false;break;case 124:e?(a.d=1):(a.b=1);while(++g<f){d=b.charCodeAt(g);if(d!=124){--g;break}e?++a.d:++a.b}}++g}return c}
function t_(a,b){var c,d;d=b;while(d<a.g){if(a.e){c=Fgb(a.k,d);if(c<=a.f&&r_(a,c))break;d+=c>=job?2:1}else{c=Egb(a.k,d);if(c<=a.f&&Igb(a.c,Ugb(c))>=0)break;++d}}if(a.j&&b==d){if(a.e){c=Fgb(a.k,d);c<=a.f&&r_(a,c)&&(d+=c>=job?2:1)}else{c=Egb(a.k,d);c<=a.f&&Igb(a.c,Ugb(c))>=0&&++d}}return d}
function OI(a,b){aI();var c,d,e,f,g;c=K0(a,'\\left','\\right');d=(new Cz(a,b[1])).g;Wg(d,33)&&(d=Qg(d,33).a);f=E0(a);Wg(f,33)&&(f=Qg(f,33).a);if(Wg(d,23)&&Wg(f,23)){g=new Cz(a,c);return new xD(g.g,Qg(d,23),g.f,Qg(f,23))}e=new DZ;!!d&&mlb(e.a,d);xZ(e,(new Cz(a,c)).g);!!f&&mlb(e.a,f);return e}
function Sw(){Sw=Nv;Nw={_default_:Yw,dragenter:Xw,dragover:Xw};Pw={click:Ww,dblclick:Ww,mousedown:Ww,mouseup:Ww,mousemove:Ww,mouseover:Ww,mouseout:Ww,mousewheel:Ww,keydown:Vw,keyup:Vw,keypress:Vw,touchstart:Ww,touchend:Ww,touchmove:Ww,touchcancel:Ww,gesturestart:Ww,gestureend:Ww,gesturechange:Ww}}
function Sc(b,c,d){Rc();function e(){b.onerror=b.onreadystatechange=b.onload=null;d&&Vc(b)}
b.onload=mnb(function(){e();c&&c.M(null)});b.onerror=mnb(function(){e();if(c){var a=new Ac('onerror() called.');c.L(a)}});b.onreadystatechange=mnb(function(){/loaded|complete/.test(b.readyState)&&b.onload()})}
function J0(a,b,c){var d,e,f;if(a.o==a.j){return null}d=Teb(a.n,a.o);if(a.o<a.j&&d==b){e=1;f=a.o;while(a.o<a.j-1&&e!=0){++a.o;d=Teb(a.n,a.o);d==b?++e:d==c?--e:d==92&&a.o!=a.j-1&&++a.o}++a.o;if(e!=0){return Web(a.n,f+1,a.o)}return Web(a.n,f+1,a.o-1)}throw qv(new K6("missing '"+String.fromCharCode(b)+Vob))}
function QB(){QB=Nv;var a,b;JB=bg(Pj,{748:1,3:1,8:1},118,0,0,1);LB=new Pib;NB=new Ckb;b=new FC;Kib(LB,(p6(),t6(97)));JB=zC(b,JB);MB=CC(b);PB=b.b;IB=xC(b);OB=EC(b);KB=BC(b);Hhb(KB,Xob,cgb(1));a=Qfb(Qg(Ehb(KB,Bpb),13));if(a<0||a>=JB.length||!JB[a]){throw qv(new E6(Cpb,Dpb,Bpb,'contains an unknown font id!'))}}
function f1(a){var b,c,d,e,f,g,h,i,j;g=new Ckb;e=A9(a.a,'Symbol');for(c=0;c<Dy(e.a.a);c++){h=new B9(Qg((new v9(jy(e.a,c))).b,34));f=i1(Npb,h);i=i1('type',h);b=z9(h,'del');d=b!=null&&Ggb('true',b);j=Ehb(d1,i);if(j==null){throw qv(new E6(Uob,'Symbol','type',dqb+i+Vob))}Hhb(g,f,new J_(f,Qg(j,48).a,d))}return g}
function _D(a,b,c,d,e,f,g,h,i,j,k,l){JD();var m;this.k=new Ckb;this.j=new Ckb;this.f=a;this.a=b;this.p=c;this.D=e;this.u=f;this.q=g;this.c=h;this.s=i;this.w=j;this.B=k;this.i=l;m=256;if(d!=0){this.C=new Dkb(d);m=d}this.n=bg(eh,vnb,72,m,0,2);this.o=bg(rj,Rpb,42,m,0,1);this.d=bg(fh,$pb,67,m,0,2);Ghb(ID,cgb(a),this)}
function dJ(a,b){aI();var c,d,e;e=b[0];if(Ggb('frak',b[0])){e='mathfrak'}else if(Ggb('Bbb',b[0])){e='mathbb'}else if(Ggb(Qpb,b[0])){return new dA((new Cz(a,b[1])).g)}else Ggb('cal',b[0])&&(e='mathcal');d=Qg(Dhb((sz(),mz),(p6(),J2)),108);!!d&&Ghb(mz,J2,null);c=(new Cz(a,b[1])).g;!!d&&Ghb(mz,J2,d);return new m1(c,e)}
function jZ(a,b,c){var d,e,f;this.n=a.n;this.b=a;this.a=b;d=UH(c);if(_kb(d.b,'origin')){this.c=sZ(Tg(d.b.a.get('origin')))}else{if(_kb(d.b,'x')){e=I$(Tg(d.b.a.get('x')));this.e=bh(e[0]);this.d=e[1]}else{this.e=3;this.d=0}if(_kb(d.b,'y')){f=I$(Tg(d.b.a.get('y')));this.g=bh(f[0]);this.f=f[1]}else{this.g=3;this.f=0}}}
function $B(a,b){var c,d,e,f,g,h,i;d=a.b;e=a.c;i=b<2?1:b<4?Pfb(Qg(Ehb(KB,Xob),13)):b<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13));g=JB[e];c=KD(g,a.a);h=bg(tj,vnb,119,c.length,0,1);for(f=0;f<c.length;f++){c[f]==-1?(h[f]=null):(h[f]=new KA(c[f]&Fpb,d,e,pC(new ZA(c[f]&Fpb,e),i)))}return new nD(h[0],h[1],h[2],h[3])}
function skb(a){var b,c,d;d=-a.a.getTimezoneOffset();b=(d>=0?'+':'')+(d/60|0);c=(d<0?-d:d)%60<10?'0'+(d<0?-d:d)%60:''+(d<0?-d:d)%60;return (Akb(),ykb)[a.a.getDay()]+' '+zkb[a.a.getMonth()]+' '+wkb(a.a.getDate())+' '+wkb(a.a.getHours())+':'+wkb(a.a.getMinutes())+':'+wkb(a.a.getSeconds())+' GMT'+b+c+' '+a.a.getFullYear()}
function I$(b){z$();var c,d,e;if(b==null){return fg(Zf(eh,1),Wpb,41,15,[2,0])}d=0;for(;d<b.length&&!gfb(b.charCodeAt(d));d++);try{c=Mfb(b.substr(0,d))}catch(a){a=pv(a);if(Wg(a,36)){return fg(Zf(eh,1),Wpb,41,15,[NaN])}else throw qv(a)}d!=b.length?(e=J$(b.substr(d).toLowerCase())):(e=2);return fg(Zf(eh,1),Wpb,41,15,[e,c])}
function Lfb(a){var b,c;if(Ggb(a.substr(0,1),'-')){b=true;a=a.substr(1)}else{b=false;Ggb(a.substr(0,1),'+')&&(a=a.substr(1))}if(Ggb(a.substr(0,2),'0x')||Ggb(a.substr(0,2),'0X')){a=a.substr(2);c=16}else if(Ggb(a.substr(0,1),'#')){a=a.substr(1);c=16}else Ggb(a.substr(0,1),'0')?(c=8):(c=10);b&&(a='-'+a);return new tgb(c,a)}
function cmb(a){amb();var b;b=Rgb(a,(Ilb(),Glb));switch(b){case 'ALL':return Tlb;case 'CONFIG':return Ulb;case 'FINE':return Vlb;case 'FINER':return Wlb;case 'FINEST':return Xlb;case 'INFO':return Ylb;case 'OFF':return Zlb;case eob:return $lb;case 'WARNING':return _lb;default:throw qv(new Sfb('Invalid level "'+a+'"'));}}
function Xkb(){if(!Object.create||!Object.getOwnPropertyNames){return false}var a='__proto__';var b=Object.create(null);if(b[a]!==undefined){return false}var c=Object.getOwnPropertyNames(b);if(c.length!=0){return false}b[a]=42;if(b[a]!==42){return false}if(Object.getOwnPropertyNames(b).length==0){return false}return true}
function Fg(a){var b,c,d,e,f;if(a.l==0&&a.m==0&&a.h==0){return '0'}if(a.h==Znb&&a.m==0&&a.l==0){return '-9223372036854775808'}if(a.h>>19!=0){return '-'+Fg(yg(a))}c=a;d='';while(!(c.l==0&&c.m==0&&c.h==0)){e=ig(1000000000);c=lg(c,e,true);b=''+Eg(hg);if(!(c.l==0&&c.m==0&&c.h==0)){f=9-b.length;for(;f>0;f--){b='0'+b}}d=b+d}return d}
function ZI(a){aI();var b,c,d,e,f;e=fg(Zf(fh,1),Ypb,41,15,[1000,900,500,400,100,90,50,40,10,9,5,4,1]);c=fg(Zf(Zt,1),Wnb,2,6,['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']);f='';d=Nfb(Sgb(a[1]),10);for(b=0;b<e.length;b++){while(d>=e[b]){f+=''+c[b];d-=e[b]}}a[0].charCodeAt(0)==114&&(f=f.toLowerCase());return (new Ez(f)).g}
function G0(a,b){var c,d,e,f,g,h,i;if(Ggb('left',b)){return K0(a,'\\left','\\right')}f=Qg(Ehb((hG(),gG),b),15);if(f){i=0;f.a&&(i=f.d);h=N0(a,f.c,i);g=new dhb('\\');g.a+=''+b;for(e=0;e<f.d;e++){c=h[f.c+e+1];c!=null&&$gb($gb((g.a+='[',g),c),']')}for(d=0;d<f.c;d++){c=h[d+1];c!=null&&$gb($gb((g.a+='{',g),c),'}')}return g.a}return '\\'+b}
function h1(b,c){e1();var d,e;try{this.a=(d=F9((new b7,b)),new B9(Qg(Ux(By(d.a.a)),34)));Hhb(d1,'ord',cgb(0));Hhb(d1,'op',cgb(1));Hhb(d1,'bin',cgb(2));Hhb(d1,'rel',cgb(3));Hhb(d1,'open',cgb(4));Hhb(d1,'close',cgb(5));Hhb(d1,'punct',cgb(6));Hhb(d1,'acc',cgb(10))}catch(a){a=pv(a);if(Wg(a,26)){e=a;throw qv(new F6(c,e))}else throw qv(a)}}
function DE(b,c){var d,e,f,g,h;f=fg(Zf(Zt,1),Wnb,2,6,['space','stretch','shrink']);h=bg(eh,Wpb,41,f.length,15,1);for(e=0;e<f.length;e++){g=0;d=null;try{d=z9(b,f[e]);Ggb('',d)||(g=Mfb(d))}catch(a){a=pv(a);if(Wg(a,36)){throw qv(new E6(cqb,'GlueType',f[e],"has an invalid real value '"+d+Vob))}else throw qv(a)}h[e]=g}return new uE(h[0],c)}
function WI(a,b){aI();var c,d,e,f,g;e=I0(a);c=(new Cz(a,O0(a))).g;if(!e||!c){throw qv(new K6(Pqb))}d=(new Cz(a,b[1])).g;Wg(d,33)&&(d=Qg(d,33).a);g=(new Cz(a,b[2])).g;Wg(g,33)&&(g=Qg(g,33).a);if(Wg(d,23)&&Wg(g,23)){return new wD(new gE(e,c,true),Qg(d,23),Qg(g,23))}f=new DZ;!!d&&mlb(f.a,d);xZ(f,new gE(e,c,true));!!g&&mlb(f.a,g);return f}
function mI(a,b){aI();var c,d,e,f,g;e=I0(a);c=(new Cz(a,O0(a))).g;if(!e||!c){throw qv(new K6(Pqb))}d=(new Cz(a,b[1])).g;Wg(d,33)&&(d=Qg(d,33).a);g=(new Cz(a,b[2])).g;Wg(g,33)&&(g=Qg(g,33).a);if(Wg(d,23)&&Wg(g,23)){return new wD(new gE(e,c,false),Qg(d,23),Qg(g,23))}f=new DZ;!!d&&mlb(f.a,d);xZ(f,new gE(e,c,false));!!g&&mlb(f.a,g);return f}
function MI(a,b){aI();var c,d,e,f,g,h,i;e=a.d.e;h=b[1];c=new bhb;while((f=h.indexOf('$'))!=-1){if(f<h.length-1){g=f;while(++g<h.length&&gfb(h.charCodeAt(g)));d=h.substr(f+1,g-(f+1));i=Tg(e.ec(d));if(i!=null){$gb(c,h.substr(0,f));c.a+=''+i}else{$gb(c,h.substr(0,g))}h=h.substr(g)}else{c.a+=''+h;h=''}}c.a+=''+h;h=c.a;return (new zz(a,h)).g}
function XI(a,b){aI();var c,d,e;e=I$(b[1]);if(e.length==1){throw qv(new K6('Error in getting raise in \\raisebox command !'))}d=I$(b[3]);c=I$(b[4]);(d.length==1||d[1]==0)&&(d=fg(Zf(eh,1),Wpb,41,15,[-1,0]));(c.length==1||c[1]==0)&&(c=fg(Zf(eh,1),Wpb,41,15,[-1,0]));return new QY((new zz(a,b[2])).g,bh(e[0]),e[1],bh(d[0]),d[1],bh(c[0]),c[1])}
function dx(){$wnd.addEventListener(Inb,mnb(function(a){var b=(Sw(),Ow);if(b&&!a.relatedTarget){if('html'==a.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,null);b.dispatchEvent(c)}}}),true)}
function tB(){tB=Nv;W6(T6);qB=new J8(255,0,0);kB=new J8(0,0,0);rB=new J8(255,255,255);lB=new J8(0,0,255);oB=new J8(0,255,0);nB=new J8(0,255,255);pB=new J8(255,0,255);sB=new J8(255,255,0);mB=new Ckb;Hhb(mB,'RED',qB);Hhb(mB,'BLACK',kB);Hhb(mB,'WHITE',rB);Hhb(mB,'BLUE',lB);Hhb(mB,'GREEN',oB);Hhb(mB,'CYAN',nB);Hhb(mB,'MAGENTA',pB);Hhb(mB,'YELLOW',sB)}
function Pe(b,c){var d,e,f,g,h,i;if(!c){throw qv(new rgb('Cannot fire null event'))}try{++b.b;h=(e=Re(b,(De(),Ce)),e);d=null;i=b.c?h.lc(h.ac()):h.kc();while(b.c?i.mc():i.gc()){g=b.c?i.nc():i.hc();try{Ee(Qg(g,797))}catch(a){a=pv(a);if(Wg(a,24)){f=a;!d&&(d=new Fkb);Ghb(d.a,f,d)}else throw qv(a)}}if(d){throw qv(new Ve(d))}}finally{--b.b;b.b==0&&Se(b)}}
function Oz(a){var b,c,d,e;Qg(qlb(a.a),31).b!=0?Mz(a):!!a.g&&Mz(a);a.d=a.a.b-1;a.b=Qg(Eib(a.a,0),31).b;for(c=1;c<a.d;c++){Qg(Eib(a.a,c),31).b>a.b&&(a.b=Qg(Eib(a.a,c),31).b)}for(b=0;b<a.d;b++){d=Qg(Eib(a.a,b),31).b;if(d!=a.b&&Eib(Qg(Eib(a.a,b),31),0)!=null&&Qg(Eib(Qg(Eib(a.a,b),31),0),11).n!=11){e=Qg(Eib(a.a,b),31);for(;d<a.b;d++){olb(e,null,e.c.b,e.c)}}}}
function $I(a){aI();var b,c,d;d=I$(a[1]);if(d.length==1){throw qv(new K6('Error in getting width in \\rule command !'))}b=I$(a[2]);if(b.length==1){throw qv(new K6('Error in getting height in \\rule command !'))}c=I$(a[3]);if(c.length==1){throw qv(new K6('Error in getting raise in \\rule command !'))}return new LZ(bh(d[0]),d[1],bh(b[0]),b[1],bh(c[0]),-c[1])}
function eG(a,b){var c,d,e,f,g,h,i;i=new Pib;g=tv(b,a);i.a[i.a.length]=''+Dv(g);i.a[i.a.length]=''+Dv(b);while(rv(g,0)!=0){e=$wnd.Math.floor($wnd.Math.log(Bv(g))*$wnd.Math.LOG10E);f=$wnd.Math.pow(10,e);c=vv($wnd.Math.floor(Bv(g)/f)*f);d=xv(c,a);i.a[i.a.length]=''+Dv(d);b=zv(b,d);i.a[i.a.length]=''+Dv(b);g=zv(g,c)}h=bg(Zt,Wnb,2,i.a.length,6,1);return Qg(Oib(i,h),12)}
function bJ(a,b){aI();var c;c=1;Ggb('tiny',b[0])?(c=0.5):Ggb(brb,b[0])?(c=xpb):Ggb(crb,b[0])?(c=apb):Ggb('small',b[0])?(c=0.8999999761581421):Ggb(drb,b[0])?(c=1):Ggb('large',b[0])?(c=1.2000000476837158):Ggb('Large',b[0])?(c=1.399999976158142):Ggb('LARGE',b[0])?(c=1.7999999523162842):Ggb('huge',b[0])?(c=2):Ggb('Huge',b[0])&&(c=2.5);return new UG((new Bz(a,O0(a),null,a.f)).g,c)}
function KI(b){aI();var c,d,e,f;for(e=0;e<b[1].length&&!gfb(b[1].charCodeAt(e));e++);try{d=Mfb(b[1].substr(0,e-0))}catch(a){a=pv(a);if(Wg(a,36)){c=a;throw qv(new K6(qc(c,c.g)))}else throw qv(a)}e!=b[1].length?(f=J$(b[1].substr(e).toLowerCase())):(f=3);if(f==-1){throw qv(new K6('Unknown unit "'+b[1].substr(e)+'" !'))}return b[0].charCodeAt(0)==104?new D$(f,d,0,0):new D$(f,0,d,0)}
function og(a,b,c,d,e,f){var g,h,i,j,k,l,m;j=rg(b)-rg(a);g=zg(b,j);i=kg(0,0,0);while(j>=0){h=ug(a,g);if(h){j<22?(i.l|=1<<j,undefined):j<44?(i.m|=1<<j-22,undefined):(i.h|=1<<j-44,undefined);if(a.l==0&&a.m==0&&a.h==0){break}}k=g.m;l=g.h;m=g.l;g.h=l>>>1;g.m=k>>>1|(l&1)<<21;g.l=m>>>1|(k&1)<<21;--j}c&&qg(i);if(f){if(d){hg=yg(a);e&&(hg=Cg(hg,(Lg(),Jg)))}else{hg=kg(a.l,a.m,a.h)}}return i}
function q0(a,b,c){var d,e,f,g,h;for(e=0;e<Dy(a.a.a);e++){f=new B9(Qg((new v9(jy(a.a,e))).b,34));d=z9(f,qrb);g=z9(f,'symbol');h=z9(f,bqb);if(Ggb('',d)){throw qv(new E6(Brb,Gy(f.a.a),qrb,null))}else if(Ggb('',g)){throw qv(new E6(Brb,Gy(f.a.a),'symbol',null))}if(d.length==1){b[d.charCodeAt(0)]=g}else{throw qv(new E6(Brb,Gy(f.a.a),qrb,Crb))}c!=null&&!Ggb('',h)&&(c[d.charCodeAt(0)]=h)}}
function p0(a,b,c){var d,e,f,g,h;for(f=0;f<Dy(a.a.a);f++){g=new B9(Qg((new v9(jy(a.a,f))).b,34));d=z9(g,qrb);e=z9(g,'formula');h=z9(g,bqb);if(Ggb('',d)){throw qv(new E6(Brb,Gy(g.a.a),qrb,null))}else if(Ggb('',e)){throw qv(new E6(Brb,Gy(g.a.a),'formula',null))}if(d.length==1){b[d.charCodeAt(0)]=e}else{throw qv(new E6(Brb,Gy(g.a.a),qrb,Crb))}c!=null&&!Ggb('',h)&&(c[d.charCodeAt(0)]=h)}}
function D1(a,b){var c,d,e,f,g,h,i;c=!a.a?new x_(0,0,0,0):a.a.qb(b);g=null;h=null;f=c.t;if(a.b){g=a.b.qb(a.c?b0(b):b);f=$wnd.Math.max(f,g.t)}if(a.f){h=a.f.qb(a.g?b0(b):b);f=$wnd.Math.max(f,h.t)}i=new DH;Z_(b,c.zb());if(a.b){zH(i,H1(g,f));zH(i,A$(new D$(a.e,0,a.d,0),b))}d=H1(c,f);zH(i,d);e=i.p+i.n-d.n;if(a.f){zH(i,A$(new D$(a.e,0,a.i,0),b));zH(i,H1(h,f))}jA(i,i.p+i.n-e);i.p=e;return i}
function O8(a,b){var c,d,e,f,g,h,i;h=b.e;i=b.f;g=b.d;e=b.c;d=b.b;c=b.a;if($wnd.Math.abs(d-c)<0.01){f=d/2;a.d.beginPath();Eb(a.d,h+f,i);Cb(a.d,h+g-f,i);Fb(a.d,h+g,i,h+g,i+f);Cb(a.d,h+g,i+e-f);Fb(a.d,h+g,i+e,h+g-f,i+e);Cb(a.d,h+f,i+e);Fb(a.d,h,i+e,h,i+e-f);Cb(a.d,h,i+f);Fb(a.d,h,i,h+f,i);a.d.closePath(),undefined;a.d.stroke(),undefined}else{throw qv(new hhb('ArcW and ArcH must be equal.'))}}
function V0(c){var d;c.p=c.o;d=F0(c);if(d.length==0){return new kD}if(Ehb((hG(),gG),d)!=null){return U0(c,d)}try{return Hz(d).g}catch(b){b=pv(b);if(Wg(b,154)){try{return N_(d)}catch(a){a=pv(a);if(!Wg(a,130))throw qv(a)}}else throw qv(b)}if(!c.i){throw qv(new K6("Unknown symbol or command or predefined TeXFormula: '"+d+"'"))}return new cB(new fZ((new Dz('\\backslash '+d)).g),null,(tB(),qB))}
function p9(f,a){var b=Math.sin(a);if(b==1){var c=f.m00_;f.m00_=f.m01_;f.m01_=-c;c=f.m10_;f.m10_=f.m11_;f.m11_=-c}else if(b==-1){var c=f.m00_;f.m00_=-f.m01_;f.m01_=c;c=f.m10_;f.m10_=-f.m11_;f.m11_=c}else{var d=Math.cos(a);if(d==-1){f.m00_=-f.m00_;f.m11_=-f.m11_}else if(d!=1){var c,e;c=f.m00_;e=f.m01_;f.m00_=d*c+b*e;f.m01_=-b*c+d*e;c=f.m10_;e=f.m11_;f.m10_=d*c+b*e;f.m11_=-b*c+d*e}}f.rotate(a)}
function Ngb(a,b,c){var d,e,f,g,h,i,j;d=new RegExp(b,'g');i=bg(Zt,Wnb,2,0,6,1);e=0;j=a;g=null;while(true){h=d.exec(j);if(h==null||j==''||e==c-1&&c>0){i[e]=j;break}else{i[e]=Qgb(j,0,h.index);j=Qgb(j,h.index+h[0].length,j.length);d.lastIndex=0;if(g==j){i[e]=j.substr(0,1);j=j.substr(1)}g=j;++e}}if(c==0&&a.length>0){f=i.length;while(f>0&&i[f-1]==''){--f}f<i.length&&(i.length=f,undefined)}return i}
function kF(a,b,c){var d,e;nA.call(this);if(b!=gqb){d=b-a.t;if(d>0){if(c==2||c==5){e=new x_(d/2,0,0,0);hF(this,e);nlb(this.k,e);hF(this,a);nlb(this.k,a);hF(this,e);nlb(this.k,e)}else if(c==0){hF(this,a);nlb(this.k,a);dF(this,new x_(d,0,0,0))}else if(c==1){dF(this,new x_(d,0,0,0));hF(this,a);nlb(this.k,a)}else{hF(this,a);nlb(this.k,a)}}else{hF(this,a);nlb(this.k,a)}}else{hF(this,a);nlb(this.k,a)}}
function iI(a,b){aI();var c,d,e,f,g,h;f=I0(a);d=M0(a);c=(new Cz(a,O0(a))).g;if(d==null||d.length!=2){throw qv(new K6(Oqb))}if(!f||!c){throw qv(new K6(Pqb))}e=(new Cz(a,b[1])).g;Wg(e,33)&&(e=Qg(e,33).a);h=(new Cz(a,b[2])).g;Wg(h,33)&&(h=Qg(h,33).a);if(Wg(e,23)&&Wg(h,23)){return new wD(new eE(f,c,bh(d[0]),d[1]),Qg(e,23),Qg(h,23))}g=new DZ;!!e&&mlb(g.a,e);xZ(g,new gE(f,c,true));!!h&&mlb(g.a,h);return g}
function sZ(a){var b;if(a==null||a.length==0){return 6}b=a;a.length==1&&(b+='c');return Ggb('bl',b)||Ggb('lb',b)?0:Ggb('bc',b)||Ggb('cb',b)?1:Ggb('br',b)||Ggb('rb',b)?2:Ggb('cl',b)||Ggb('lc',b)?9:Ggb('cc',b)?10:Ggb('cr',b)||Ggb('cr',b)?11:Ggb('tl',b)||Ggb('lt',b)?3:Ggb('tc',b)||Ggb('ct',b)?4:Ggb('tr',b)||Ggb('rt',b)?5:Ggb('Bl',b)||Ggb('lB',b)?6:Ggb('Bc',b)||Ggb('cB',b)?8:Ggb('Br',b)||Ggb('rB',b)?7:6}
function Yf(a,b){var c;switch($f(a)){case 6:return $g(b);case 7:return Yg(b);case 8:return Xg(b);case 3:return Array.isArray(b)&&(c=$f(b),!(c>=14&&c<=16));case 11:return b!=null&&typeof b===onb;case 12:return b!=null&&(typeof b===nnb||typeof b==onb);case 0:return Pg(b,a.__elementTypeId$);case 2:return _g(b)&&!(b.tc===Qv);case 1:return _g(b)&&!(b.tc===Qv)||Pg(b,a.__elementTypeId$);default:return true;}}
function Nfb(a,b){var c,d,e,f,g;if(a==null){throw qv(new zgb(Cnb))}if(b<2||b>36){throw qv(new zgb('radix '+b+' out of range'))}e=a.length;f=e>0&&(a.charCodeAt(0)==45||a.charCodeAt(0)==43)?1:0;for(c=f;c<e;c++){if(cfb(a.charCodeAt(c),b)==-1){throw qv(new zgb(Trb+a+'"'))}}g=parseInt(a,b);d=g<-2147483648;if(isNaN(g)){throw qv(new zgb(Trb+a+'"'))}else if(d||g>2147483647){throw qv(new zgb(Trb+a+'"'))}return g}
function jI(a,b){aI();var c;c='';switch(b[0].charCodeAt(0)){case 126:c='tilde';break;case 39:c='acute';break;case 94:c='hat';break;case 34:c='ddot';break;case 96:c='grave';break;case 61:c=Qqb;break;case 46:c='dot';break;case 117:c='breve';break;case 118:c='check';break;case 72:c='doubleacute';break;case 116:c='tie';break;case 114:c='mathring';break;case 85:c='cyrbreve';}return new iz((new Cz(a,b[1])).g,c)}
function G_(b,c){var d,e,f,g,h,i,j;j=c.n;i=c.i;d=XB(j,b.b,i);e=new VA(d);if(c.g&&b.c!=0&&ifb(b.c)){try{e=new PZ(new VA(XB(j,(sz(),rz)[String.fromCharCode(b.c).toLocaleUpperCase().charCodeAt(0)],i)),0.8,0.8)}catch(a){a=pv(a);if(!Wg(a,158))throw qv(a)}}if(b.n==1){i<2&&(h=(QB(),JB)[d.c],!!PD(h,d.a))&&(d=bC(d,i));e=new VA(d);lA(e,-(e.p+e.n)/2-TB(c.i));f=d.d.c;g=new jF(e);f>Wob&&dF(g,new x_(f,0,0,0));return g}return e}
function o2(a,b){n2();var c,d,e,f,g,h,i,j,k;f=G_(k2,a);i=G_(m2,a);j=f.t+i.t;if(b<j){d=new jF(f);dF(d,new x_(-$wnd.Math.min(j-b,f.t),0,0,0));hF(d,i);nlb(d.k,i);return d}g=r$(new u$(l2,''),a);e=A$(new D$(5,nrb,0,0),a);h=g.t+e.t;j+=2*e.t;c=new iF;for(k=0;k<b-j-h;k+=h){hF(c,g);nlb(c.k,g);hF(c,e);nlb(c.k,e)}dF(c,new PZ(g,(b-j-k)/g.t,1));hF(c,e);Dib(c.k,0,e);hF(c,f);Dib(c.k,0,f);hF(c,e);nlb(c.k,e);hF(c,i);nlb(c.k,i);return c}
function Ny(){try{return new ActiveXObject('Msxml2.DOMDocument')}catch(a){}try{return new ActiveXObject('MSXML.DOMDocument')}catch(a){}try{return new ActiveXObject('MSXML3.DOMDocument')}catch(a){}try{return new ActiveXObject('Microsoft.XmlDom')}catch(a){}try{return new ActiveXObject('Microsoft.DOMDocument')}catch(a){}throw new Error('XMLParserImplIE6.createDocumentImpl: Could not find appropriate version of DOMDocument.')}
function OC(a,b){var c,d,e,f,g,h,i;c=LC(Jpb,a)&Fpb;g=bg(eh,Wpb,41,4,15,1);g[0]=MC('width',a);g[1]=MC(qnb,a);g[2]=MC('depth',a);g[3]=MC('italic',a);WD(b,c,g);f=new D9(new ky(zy(a.a.a)));for(e=0;e<Dy(f.a.a);e++){h=new v9(jy(f.a,e));if(w9(Fy(h.b.a))!=3){d=new B9(Qg(h.b,34));i=Ehb(uC,Gy(d.a.a));if(i==null){throw qv(new C6("DefaultTeXFont.xml: a <Char>-element has an unknown child element '"+Gy(d.a.a)+Vob))}Qg(i,181).Cb(d,c,b)}}}
function ygb(){ygb=Nv;var a;ugb=fg(Zf(fh,1),Ypb,41,15,[-1,-1,30,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5]);vgb=bg(fh,Ypb,41,37,15,1);wgb=fg(Zf(fh,1),Ypb,41,15,[-1,-1,63,40,32,28,25,23,21,20,19,19,18,18,17,17,16,16,16,15,15,15,15,14,14,14,14,14,14,13,13,13,13,13,13,13,13]);xgb=bg(gh,bpb,41,37,14,1);for(a=2;a<=36;a++){vgb[a]=bh($wnd.Math.pow(a,ugb[a]));xgb[a]=tv({l:Xnb,m:Xnb,h:524287},vgb[a])}}
function aJ(a,b){aI();var c,d,e,f,g,h,i,j,k,l;e=new Cz(a,b[1]);d=new Cz(a,b[2]);if(!e.g||!d.g){throw qv(new K6(Pqb))}g=0.75;h=0.75;f=tpb;i=kqb;j=hqb;k=N_('slash');if(!a.f){g=0.6;h=0.5;f=0.75;i=arb;j=arb;k=new aG(new PG(N_('textfractionsolidus'),1.25,0.65));Qg(k,52).d=new D$(1,iqb,0,0)}l=new aG(new PG(e.g,g,h));l.d=new D$(1,f,0,0);c=new EZ(l);xZ(c,new D$(0,i,0,0));!!k&&mlb(c.a,k);xZ(c,new D$(0,j,0,0));xZ(c,new PG(d.g,g,h));return c}
function II(a,b){aI();var c,d,e,f,g,h,i,j,k,l,m;g=new Cz(a,b[1]);c=null;d=null;Wg(g.g,23)&&(c=Qg(g.g,23));j=new Cz(a,b[2]);Wg(j.g,23)&&(d=Qg(j.g,23));k=true;m=I$(b[3]);if(b[3]==null||b[3].length==0||m.length==1){m=fg(Zf(eh,1),Wpb,41,15,[0,0]);k=false}l=0;b[4].length!=0&&(l=Nfb(b[4],10));h=new Cz(a,b[5]);f=new Cz(a,b[6]);if(!h.g||!f.g){throw qv(new K6(Pqb))}e=new hE(h.g,f.g,k,bh(m[0]),m[1]);i=new DZ;xZ(i,new A_(l*2,new wD(e,c,d)));return i}
function WB(a,b,c){var d,e,f,g,h;f=c<2?1:c<4?Pfb(Qg(Ehb(KB,Xob),13)):c<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13));g=a.b?b.a:b.c;h=JB[g];d=b;if(a.b&&b.c==b.a){g=h.b;h=JB[g];d=new $A(b.b,g,c)}if(a.d){g=h.r;h=JB[g];d=new $A(d.b,g,c)}if(a.e){g=h.v;h=JB[g];d=new $A(d.b,g,c)}if(a.f){g=h.A;h=JB[g];d=new $A(d.b,g,c)}if(a.c){g=h.g;h=JB[g];d=new $A(d.b,g,c)}e=(!h.e&&(!h.a?(h.e=IC(h.p)):(h.e=HC(h.a,h.p))),h.e);return new KA(d.b,e,g,pC(d,a.a*f))}
function p2(a,b,c){n2();var d,e,f,g,h,i,j,k,l,m;d=a?G_(k2,b):G_(m2,b);f=d.p;e=d.n;l=d.t;if(c<=l){d.n=e/2;return d}i=r$(new u$(l2,''),b);h=A$(new D$(5,-4,0,0),b);j=i.t+h.t;l+=h.t;g=new iF;for(m=0;m<c-l-j;m+=j){hF(g,i);nlb(g.k,i);hF(g,h);nlb(g.k,h)}k=(c-l-m)/i.t;dF(g,A$(new D$(5,-2*k,0,0),b));dF(g,OG(new PG(l2,k,1),b));if(a){cF(g,A$(new D$(5,-3.5,0,0),b));hF(g,d);Dib(g.k,0,d)}else{dF(g,A$(new D$(5,-2*k-2,0,0),b));hF(g,d);nlb(g.k,d)}g.n=e/2;g.p=f;return g}
function xw(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;k=new Ckb;if(b!=null&&b.length>1){l=b.substr(1);for(h=Ngb(l,'&',0),i=0,j=h.length;i<j;++i){g=h[i];f=Ngb(g,'=',2);e=f[0];if(e.length==0){continue}m=f.length>1?f[1]:'';try{m=(Ye(m),o=/\+/g,decodeURIComponent(m.replace(o,'%20')))}catch(a){a=pv(a);if(!Wg(a,90))throw qv(a)}n=Qg(k.ec(e),56);if(!n){n=new Pib;k.fc(e,n)}n.Zb(m)}}for(d=k.dc().Yb();d.gc();){c=Qg(d.hc(),63);c.qc(ojb(Qg(c.pc(),56)))}k=(ljb(),new Ujb(k));return k}
function O0(a){var b,c,d,e;if(a.o==a.j){return null}c=1;b=0;d=a.o;while(a.o<a.j&&c!=0){b=Teb(a.n,a.o);switch(b){case 123:++c;break;case 38:c==1&&--c;break;case 125:--c;break;case 92:++a.o;if(a.o<a.j&&Teb(a.n,a.o)==92&&c==1){--c;--a.o}else if(a.o<a.j-1&&Teb(a.n,a.o)==99&&Teb(a.n,a.o+1)==114&&c==1){--c;--a.o}}++a.o}if(c>=2){throw qv(new K6("Illegal end,  missing '}' !"))}if(c==0){e=Web(a.n,d,a.o-1)}else{e=Web(a.n,d,a.o);b=0}(b==38||b==92||b==125)&&--a.o;return e}
function pZ(a,b){var c;c=new y8((new $6,-a.n));switch(b){case 0:c.a=0;x8(c,-a.n);break;case 2:w8(c,a.t);x8(c,-a.n);break;case 1:w8(c,a.t/2);x8(c,-a.n);break;case 3:c.a=0;x8(c,a.p);break;case 5:w8(c,a.t);x8(c,a.p);break;case 4:w8(c,a.t/2);x8(c,a.p);break;case 6:c.a=0;c.b=0;break;case 7:w8(c,a.t);c.b=0;break;case 8:w8(c,a.t/2);c.b=0;break;case 9:c.a=0;x8(c,(a.p-a.n)/2);break;case 11:w8(c,a.t);x8(c,(a.p-a.n)/2);break;case 10:w8(c,a.t/2);x8(c,(a.p-a.n)/2);}return c}
function AE(a){var b,c,d,e,f,g,h,i,j,k,l;d=new Pib;l=new B9(Qg((new v9(jy(A9(a.c,'GlueTypes').a,0))).b,34));b=-1;g=0;if(l.a){h=new D9(hy(l.a,'GlueType'));for(f=0;f<Dy(h.a.a);f++){k=new B9(Qg((new v9(jy(h.a,f))).b,34));i=EE(Npb,k);c=DE(k,i);Hgb(i)&&(b=g);d.a[d.a.length]=c;++g}}if(b<0){b=g;Kib(d,new uE(0,aqb))}a.b=Qg(Oib(d,bg(Uj,{750:1,3:1,8:1},132,d.a.length,0,1)),750);if(b>0){j=a.b[b];eg(a.b,b,a.b[0]);eg(a.b,0,j)}for(e=0;e<a.b.length;e++){Hhb(a.a,a.b[e].a,cgb(e))}}
function YC(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;l=b.n;k=b.i;d=XB(l,a,k);h=d.d;m=h.b+h.a;while(m<c&&(g=(QB(),JB)[d.c],!!PD(g,d.a))){d=bC(d,k);h=d.d;m=h.b+h.a}if(m>=c){return new VA(d)}else{f=(QB(),JB)[d.c];if(KD(f,d.a)!=null){n=new DH;e=$B(d,k);if(e.d){d=e.d;zH(n,new VA(d))}i=!!e.b;if(i){d=e.b;zH(n,new VA(d))}if(e.a){d=e.a;zH(n,new VA(d))}d=e.c;j=new VA(d);while(n.p+n.n<=c){if(!!e.d&&!!e.a){yH(n,1,j);i&&yH(n,n.k.b-1,j)}else e.a?yH(n,0,j):zH(n,j)}return n}else{return new VA(d)}}}
function z$(){z$=Nv;y$=new Ckb;Hhb(y$,'em',cgb(0));Hhb(y$,'ex',cgb(1));Hhb(y$,'px',cgb(2));Hhb(y$,'pix',cgb(2));Hhb(y$,'pixel',cgb(2));Hhb(y$,'pt',cgb(10));Hhb(y$,'bp',cgb(3));Hhb(y$,'pica',cgb(4));Hhb(y$,'pc',cgb(4));Hhb(y$,'mu',cgb(5));Hhb(y$,'cm',cgb(6));Hhb(y$,'mm',cgb(7));Hhb(y$,'in',cgb(8));Hhb(y$,'sp',cgb(9));Hhb(y$,'dd',cgb(11));Hhb(y$,'cc',cgb(12));x$=fg(Zf(rq,1),vnb,64,0,[new K$,new W$,new Y$,new $$,new a_,new c_,new e_,new g_,new i_,new M$,new O$,new Q$,new S$,new U$])}
function P0(a,b){var c,d,e,f;++a.o;d=E0(a);f=null;e=0;a.o<a.j&&(e=Teb(a.n,a.o));if(b==94&&e==94){f=d;d=null}else if(b==95&&e==94){++a.o;f=E0(a)}else if(b==94&&e==95){++a.o;f=d;d=E0(a)}else if(b==94&&e!=95){f=d;d=null}if(Wg(a.d.g,17)){c=zZ(Qg(a.d.g,17))}else if(!a.d.g){c=new VH(new NA(77,zpb),false,true,true)}else{c=a.d.g;a.d.g=null}if(c.tb()==1){return new Xz(c,d,f)}else if(Wg(c,65)){if(Qg(c,65).c){if(f){MH(Qg(c,65),f);return new VZ(c,d,null)}}else if(d){MH(Qg(c,65),d);return new VZ(c,null,f)}}return new VZ(c,d,f)}
function fG(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;_F.call(this);this.c=1;this.e=true;l=eG(a,b);n=new LZ(1,0,1,2.5999999046325684,1,0.5);for(f=0;f<l.length;++f){g=(new Dz(l[f])).g;if(f%2==0){i=new EZ(g);mlb(i.a,n);f==0?mlb(this.b,i):$F(this,new M1(i))}else if(f==1){e=''+Dv(a);m=N_((sz(),qz)[41]);d=new Uz(m,1);h=new VH(d,false,true,true);i=new EZ(h);k=new QY(d,13,3.5,13,0,13,0);xZ(i,new t$(k));!!g&&mlb(i.a,g);c=new RH(i);j=new EZ((new Dz(e)).g);xZ(j,new C$(1));mlb(j.a,c);mlb(this.b,j)}else{i=new EZ(g);mlb(i.a,n);mlb(this.b,i)}}}
function BE(){var b,c,d;this.e=new Ckb;this.a=new Ckb;this.d=new Ckb;try{Hhb(this.e,'ord',cgb(0));Hhb(this.e,'op',cgb(1));Hhb(this.e,'bin',cgb(2));Hhb(this.e,'rel',cgb(3));Hhb(this.e,'open',cgb(4));Hhb(this.e,'close',cgb(5));Hhb(this.e,'punct',cgb(6));Hhb(this.e,'inner',cgb(7));Hhb(this.d,'display',cgb(0));Hhb(this.d,bqb,cgb(1));Hhb(this.d,'script',cgb(2));Hhb(this.d,'script_script',cgb(3));new b7;new c7;d=I9(Tj,cqb);this.c=(b=F9(d),new B9(Qg(Ux(By(b.a.a)),34)));AE(this)}catch(a){a=pv(a);if(Wg(a,26)){c=a;throw qv(new F6(cqb,c))}else throw qv(a)}}
function xg(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;c=a.l&8191;d=a.l>>13|(a.m&15)<<9;e=a.m>>4&8191;f=a.m>>17|(a.h&255)<<5;g=(a.h&1048320)>>8;h=b.l&8191;i=b.l>>13|(b.m&15)<<9;j=b.m>>4&8191;k=b.m>>17|(b.h&255)<<5;l=(b.h&1048320)>>8;B=c*h;C=d*h;D=e*h;F=f*h;G=g*h;if(i!=0){C+=c*i;D+=d*i;F+=e*i;G+=f*i}if(j!=0){D+=c*j;F+=d*j;G+=e*j}if(k!=0){F+=c*k;G+=d*k}l!=0&&(G+=c*l);n=B&Xnb;o=(C&511)<<13;m=n+o;q=B>>22;r=C>>9;s=(D&262143)<<4;t=(F&31)<<17;p=q+r+s+t;v=D>>18;w=F>>5;A=(G&4095)<<8;u=v+w+A;p+=m>>22;m&=Xnb;u+=p>>22;p&=Xnb;u&=Ynb;return kg(m,p,u)}
function lg(a,b,c){var d,e,f,g,h,i;if(b.l==0&&b.m==0&&b.h==0){throw qv(new Zeb)}if(a.l==0&&a.m==0&&a.h==0){c&&(hg=kg(0,0,0));return kg(0,0,0)}if(b.h==Znb&&b.m==0&&b.l==0){return mg(a,c)}i=false;if(b.h>>19!=0){b=yg(b);i=true}g=sg(b);f=false;e=false;d=false;if(a.h==Znb&&a.m==0&&a.l==0){e=true;f=true;if(g==-1){a=jg((Lg(),Hg));d=true;i=!i}else{h=Ag(a,g);i&&qg(h);c&&(hg=kg(0,0,0));return h}}else if(a.h>>19!=0){f=true;a=yg(a);d=true;i=!i}if(g!=-1){return ng(a,g,i,f,c)}if(vg(a,b)<0){c&&(f?(hg=yg(a)):(hg=kg(a.l,a.m,a.h)));return kg(0,0,0)}return og(d?a:kg(a.l,a.m,a.h),b,i,f,e,c)}
function Kd(a,b){var c,d,e,f,g,h,i,j,k;if(b.length==0){return a.T(Fnb,Dnb,-1,-1)}k=Sgb(b);Ggb(k.substr(0,3),'at ')&&(k=k.substr(3));k=k.replace(/\[.*?\]/g,'');g=k.indexOf('(');if(g==-1){g=k.indexOf('@');if(g==-1){j=k;k=''}else{j=Sgb(k.substr(g+1));k=Sgb(k.substr(0,g))}}else{c=k.indexOf(')',g);j=k.substr(g+1,c-(g+1));k=Sgb(k.substr(0,g))}g=Igb(k,Ugb(46));g!=-1&&(k=k.substr(g+1));(k.length==0||Ggb(k,'Anonymous function'))&&(k=Dnb);h=Jgb(j,Ugb(58));e=Kgb(j,Ugb(58),h-1);i=-1;d=-1;f=Fnb;if(h!=-1&&e!=-1){f=j.substr(0,e);i=Fd(j.substr(e+1,h-(e+1)));d=Fd(j.substr(h+1))}return a.T(f,k,i,d)}
function CI(a){aI();var b,c,d,e,f,g,h,i,j;if(Ggb('gray',a[2])){e=Mfb(a[3]);d=_6(e,e,e)}else if(Ggb('rgb',a[2])){j=Ngb(a[3],',|;',0);if(j.length!=3){throw qv(new K6('The color definition must have three components !'))}i=Mfb(Sgb(j[0]));f=Mfb(Sgb(j[1]));b=Mfb(Sgb(j[2]));d=_6(i,f,b)}else if(Ggb('cmyk',a[2])){j=Ngb(a[3],',|;',0);if(j.length!=4){throw qv(new K6('The color definition must have four components !'))}c=bg(eh,Wpb,41,4,15,1);for(g=0;g<4;g++){c[g]=Mfb(Sgb(j[g]))}h=1-c[3];d=_6(h*(1-c[0]),h*(1-c[1]),h*(1-c[2]))}else{throw qv(new K6('The color model is incorrect !'))}Hhb((aB(),_A),a[1],d);return null}
function zE(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;l=Jhb(a.e);p=_f(fh,[vnb,$pb,Ypb],[749,67,41],15,[l,l,Jhb(a.d)],3);c=new B9(Qg((new v9(jy(A9(a.c,'GlueTable').a,0))).b,34));if(c.a){h=new D9(hy(c.a,_pb));for(d=0;d<Dy(h.a.a);d++){b=new B9(Qg((new v9(jy(h.a,d))).b,34));g=EE('lefttype',b);k=EE('righttype',b);q=EE('gluetype',b);i=new D9(hy(b.a,'Style'));for(e=0;e<Dy(i.a.a);e++){n=new B9(Qg((new v9(jy(i.a,e))).b,34));o=EE(Npb,n);f=Ehb(a.e,g);j=Ehb(a.e,k);m=Ehb(a.d,o);r=Ehb(a.a,q);CE(f,_pb,'lefttype',g);CE(j,_pb,'righttype',k);CE(r,_pb,'gluetype',q);CE(m,'Style',Npb,o);p[Qg(f,48).a][Qg(j,48).a][Qg(m,48).a]=Qg(r,48).a}}}return p}
function xC(a){var b,c,d,e,f,g,h,i,j,k,l;j=bg(Zt,Wnb,2,4,6,1);e=new B9(Qg((new v9(jy(A9(a.c,'DefaultTextStyleMapping').a,0))).b,34));if(!e.a){return j}h=new D9(hy(e.a,Ipb));for(f=0;f<Dy(h.a.a);f++){i=new B9(Qg((new v9(jy(h.a,f))).b,34));c=JC(Jpb,i);d=Ehb(vC,c);if(d==null){throw qv(new E6(Cpb,Ipb,Jpb,Kpb+c+Vob))}l=JC('textStyle',i);k=Ehb(a.b,l);if(k==null){throw qv(new E6(Cpb,Ipb,'textStyle',"contains an unknown text style '"+l+Vob))}b=Qg(Ehb(a.b,l),180);g=Qg(d,48).a;if(!b[g]){throw qv(new C6("DefaultTeXFont.xml: the default text style mapping '"+l+"' for the range '"+c+"' contains no mapping for that range!"))}j[g]=l}return j}
function N0(b,c,d){var e,f,g;e=bg(Zt,Wnb,2,c+10+1,6,1);if(c!=0){if(d==1){g=c+1;try{for(;g<c+11;g++){W0(b);e[g]=J0(b,91,93)}}catch(a){a=pv(a);if(Wg(a,22)){e[g]=null}else throw qv(a)}}W0(b);try{e[1]=J0(b,123,125)}catch(a){a=pv(a);if(Wg(a,22)){if(Teb(b.n,b.o)!=92){e[1]=''+Ug(Teb(b.n,b.o));++b.o}else{e[1]=G0(b,F0(b))}}else throw qv(a)}if(d==2){g=c+1;try{for(;g<c+11;g++){W0(b);e[g]=J0(b,91,93)}}catch(a){a=pv(a);if(Wg(a,22)){e[g]=null}else throw qv(a)}}for(f=2;f<=c;f++){W0(b);try{e[f]=J0(b,123,125)}catch(a){a=pv(a);if(Wg(a,22)){if(Teb(b.n,b.o)!=92){e[f]=''+Ug(Teb(b.n,b.o));++b.o}else{e[f]=G0(b,F0(b))}}else throw qv(a)}}b.f&&W0(b)}return e}
function DC(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;o=new Ckb;p=new B9(Qg((new v9(jy(A9(b.c,'TextStyleMappings').a,0))).b,34));if(!p.a){return o}k=new D9(hy(p.a,Ppb));for(i=0;i<Dy(k.a.a);i++){n=new B9(Qg((new v9(jy(k.a,i))).b,34));q=JC(Npb,n);c=null;try{c=JC(Qpb,n)}catch(a){a=pv(a);if(!Wg(a,54))throw qv(a)}m=new D9(hy(n.a,'MapRange'));e=bg(rj,Rpb,42,4,0,1);for(j=0;j<Dy(m.a.a);j++){l=new B9(Qg((new v9(jy(m.a,j))).b,34));h=JC(Spb,l);d=LC('start',l);f=JC(Jpb,l);g=Ehb(vC,f);if(g==null){throw qv(new E6(Cpb,'MapRange',Jpb,Kpb+f+Vob))}else c==null?(e[Qg(g,48).a]=new ZA(d&Fpb,Mib(tC,h,0))):(e[Qg(g,48).a]=new $A(d&Fpb,Mib(tC,h,0),Mib(tC,c,0)))}q==null?Pkb(o.a,null,e):blb(o.b,q,e)}return o}
function mZ(a,b,c,d){var e,f;nA.call(this);this.b=a;this.a=b*3.141592653589793/180;this.p=a.p;this.n=a.n;this.t=a.t;f=$wnd.Math.sin(this.a);e=$wnd.Math.cos(this.a);this.c=c*(1-e)+d*f;this.d=d*(1-e)-c*f;this.e=$wnd.Math.max(-this.p*f,$wnd.Math.max(this.n*f,$wnd.Math.max(this.t*e+this.n*f,this.t*e-this.p*f)))+this.c;this.f=$wnd.Math.min(-this.p*f,$wnd.Math.min(this.n*f,$wnd.Math.min(this.t*e+this.n*f,this.t*e-this.p*f)))+this.c;this.g=$wnd.Math.max(this.p*e,$wnd.Math.max(-this.n*e,$wnd.Math.max(this.t*f-this.n*e,this.t*f+this.p*e)));this.i=$wnd.Math.min(this.p*e,$wnd.Math.min(-this.n*e,$wnd.Math.min(this.t*f-this.n*e,this.t*f+this.p*e)));this.t=this.e-this.f;this.p=this.g+this.d;this.n=-this.i-this.d}
function EC(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;o=new Ckb;p=new B9(Qg((new v9(jy(A9(b.c,Tpb).a,0))).b,34));if(!p.a){throw qv(new D6(Tpb))}k=new D9(hy(p.a,'Mapping'));for(h=0;h<Dy(k.a.a);h++){i=JC(Lpb,new B9(Qg((new v9(jy(k.a,h))).b,34)));try{!b.a?(m=(f=F9(I9(Dj,i)),new B9(Qg(Ux(By(f.a.a)),34)))):(m=(e=F9(I9(b.a,i)),new B9(Qg(Ux(By(e.a.a)),34))))}catch(a){a=pv(a);if(Wg(a,26)){throw qv(new C6(Mpb+i+'!'))}else throw qv(a)}l=new D9(hy(m.a,Upb));for(j=0;j<Dy(l.a.a);j++){n=new B9(Qg((new v9(jy(l.a,j))).b,34));q=JC(Npb,n);d=LC('ch',n);g=JC(Spb,n);c=null;try{c=JC('boldId',n)}catch(a){a=pv(a);if(!Wg(a,54))throw qv(a)}c==null?Hhb(o,q,new ZA(d&Fpb,Mib(tC,g,0))):Hhb(o,q,new $A(d&Fpb,Mib(tC,g,0),Mib(tC,c,0)))}}return o}
function Ofb(a){var b,c,d,e,f,g,h,i,j,k,l;if(a==null){throw qv(new zgb(Cnb))}j=a;f=a.length;i=false;if(f>0){b=a.charCodeAt(0);if(b==45||b==43){a=a.substr(1);--f;i=b==45}}if(f==0){throw qv(new zgb(Trb+j+'"'))}while(a.length>0&&a.charCodeAt(0)==48){a=a.substr(1);--f}if(f>(ygb(),wgb)[10]){throw qv(new zgb(Trb+j+'"'))}for(e=0;e<f;e++){if(cfb(a.charCodeAt(e),10)==-1){throw qv(new zgb(Trb+j+'"'))}}l=0;g=ugb[10];k=vgb[10];h=yv(xgb[10]);c=true;d=f%g;if(d>0){l=-bnb(a.substr(0,d),10);a=a.substr(d);f-=d;c=false}while(f>=g){d=bnb(a.substr(0,g),10);a=a.substr(g);f-=g;if(c){c=false}else{if(rv(l,h)<0){throw qv(new zgb(Trb+j+'"'))}l=xv(l,k)}l=zv(l,d)}if(rv(l,0)>0){throw qv(new zgb(Trb+j+'"'))}if(!i){l=yv(l);if(rv(l,0)<0){throw qv(new zgb(Trb+j+'"'))}}return l}
function Aw(a){switch(a){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return hob;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case Inb:return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return iob;case 'error':return job;case kob:case 'mousewheel':return lob;case 'contextmenu':return mob;case 'paste':return Znb;case 'touchstart':return nob;case 'touchmove':return 2097152;case 'touchend':return $nb;case 'touchcancel':return 8388608;case 'gesturestart':return oob;case 'gesturechange':return pob;case 'gestureend':return qob;default:return -1;}}
function o7(p,q){if($wnd.jlmlib){$wnd.console.log('JLM already installed');return}$wnd.jlmlib={};$wnd.jlmlib.initWith=mnb(function(a){p.Gb(a)});$wnd.jlmlib.SERIF=0;$wnd.jlmlib.SANSSERIF=1;$wnd.jlmlib.BOLD=2;$wnd.jlmlib.ITALIC=4;$wnd.jlmlib.ROMAN=8;$wnd.jlmlib.TYPEWRITER=16;$wnd.jlmlib.drawLatex=mnb(function(a){if(!a.context){throw 'drawLatex(opts): opts.context must not be null'}if(!(typeof a.latex=='string')){throw 'drawLatex(opts): opts.latex must be of type string.'}var b=a.context,c=a.latex,d=a.size||12,e=a.type||0,f=a.x||0,g=a.y||0,h=a.insets||{top:0,bottom:0,left:0,right:0},i=h.top||0,j=h.bottom||0,k=h.left||0,l=h.right||0,m=a.foregroundColor||'#000000',n=a.backgroundColor,o=a.callback;return p.Fb(b,c,d,e,f,g,i,k,j,l,m,n,o)});$wnd.jlmlib.setFontBaseUrl=mnb(function(a){q.Ob(a)})}
function Iw(a,b){var c=(a.__eventBits||0)^b;a.__eventBits=b;if(!c)return;c&1&&(a.onclick=b&1?Fw:null);c&3&&(a.ondblclick=b&3?Ew:null);c&4&&(a.onmousedown=b&4?Fw:null);c&8&&(a.onmouseup=b&8?Fw:null);c&16&&(a.onmouseover=b&16?Fw:null);c&32&&(a.onmouseout=b&32?Fw:null);c&64&&(a.onmousemove=b&64?Fw:null);c&128&&(a.onkeydown=b&128?Fw:null);c&256&&(a.onkeypress=b&256?Fw:null);c&512&&(a.onkeyup=b&512?Fw:null);c&1024&&(a.onchange=b&1024?Fw:null);c&2048&&(a.onfocus=b&2048?Fw:null);c&4096&&(a.onblur=b&4096?Fw:null);c&8192&&(a.onlosecapture=b&8192?Fw:null);c&iob&&(a.onscroll=b&iob?Fw:null);c&hob&&(a.nodeName=='IFRAME'?b&hob?a.attachEvent('onload',Gw):a.detachEvent('onload',Gw):(a.onload=b&hob?Hw:null));c&job&&(a.onerror=b&job?Fw:null);c&lob&&(a.onmousewheel=b&lob?Fw:null);c&mob&&(a.oncontextmenu=b&mob?Fw:null);c&Znb&&(a.onpaste=b&Znb?Fw:null)}
function K0(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;i=1;m=b.length;h=c.length;k=R0(a,b.charCodeAt(m-1));j=R0(a,c.charCodeAt(h-1));l=0;g=0;o=0;n=0;d=new bhb;while(a.o<a.j&&i!=0){e=Teb(a.n,a.o);if(n!=92&&e==32){while(a.o<a.j&&Teb(a.n,a.o++)==32){d.a+=' '}e=Teb(a.n,--a.o);(/[A-Z]/i.test(String.fromCharCode(n))||a.b!=0&&n==64)&&(/[A-Z]/i.test(String.fromCharCode(e))||a.b!=0&&e==64)&&(l=g=0)}e==b.charCodeAt(l)?++l:(l=0);if(e==c.charCodeAt(g)){g==0&&(o=a.o);++g}else{g=0}if(a.o+1<a.j){f=Teb(a.n,a.o+1);if(l==m){(!k||!(/[A-Z]/i.test(String.fromCharCode(f))||a.b!=0&&f==64))&&++i;l=0}if(g==h){(!j||!(/[A-Z]/i.test(String.fromCharCode(f))||a.b!=0&&f==64))&&--i;g=0}}else{if(l==m){++i;l=0}if(g==h){--i;g=0}}n=e;d.a+=String.fromCharCode(e);++a.o}if(i!=0){if(a.i){return d.a}throw qv(new K6('The token '+b+' must be closed by '+c))}return Web(d,0,d.a.length-a.o+o)}
function t7(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;j=new f9(b);k=(l=document.createElement('canvas'),m=l.getContext('2d'),devicePixelRatio=$wnd.devicePixelRatio||1,backingStorePixelRatio=m.webkitBackingStorePixelRatio||m.mozBackingStorePixelRatio||m.msBackingStorePixelRatio||m.oBackingStorePixelRatio||m.backingStorePixelRatio||1,devicePixelRatio/backingStorePixelRatio);b.ggbDevicePixelRatio=k;b.scale(k,k);if(f!=null&&!Ggb(f,'')){h=uB(f);$8(j,h);U8(j,c,d,bh(a.a.t*a.c+0.99+a.b.b+a.b.c),bh(a.a.p*a.c+0.99+a.b.d)+bh(a.a.n*a.c+0.99+a.b.a))}_8(j,new w7(g));i=uB(e);t0(a,new x7(i),j,c,d);j.b>0||!!j.e&&r7(j.e.a);return n=new Df,Bf(n,'width',new sf(bh(a.a.t*a.c+0.99+a.b.b+a.b.c))),Bf(n,qnb,new sf(bh(a.a.p*a.c+0.99+a.b.d)+bh(a.a.n*a.c+0.99+a.b.a))),Bf(n,'baseline',new sf((a.a.p*a.c+0.99+a.b.d)/((a.a.p+a.a.n)*a.c+0.99+a.b.d+a.b.a))),Bf(n,'pixelRatio',new sf(k)),n.a}
function Zkb(){function e(){this.obj=this.createObject()}
;e.prototype.createObject=function(a){return Object.create(null)};e.prototype.get=function(a){return this.obj[a]};e.prototype.set=function(a,b){this.obj[a]=b};e.prototype['delete']=function(a){delete this.obj[a]};e.prototype.keys=function(){return Object.getOwnPropertyNames(this.obj)};e.prototype.entries=function(){var b=this.keys();var c=this;var d=0;return {next:function(){if(d>=b.length)return {done:true};var a=b[d++];return {value:[a,c.get(a)],done:false}}}};if(!Xkb()){e.prototype.createObject=function(){return {}};e.prototype.get=function(a){return this.obj[':'+a]};e.prototype.set=function(a,b){this.obj[':'+a]=b};e.prototype['delete']=function(a){delete this.obj[':'+a]};e.prototype.keys=function(){var a=[];for(var b in this.obj){b.charCodeAt(0)==58&&a.push(b.substring(1))}return a}}return e}
function AG(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;j=b.a.length;n=0;k=new Pib;while(n<j){e=Egb(b.a,n);switch(e){case 108:Kib(k,cgb(0));break;case 114:Kib(k,cgb(1));break;case 99:Kib(k,cgb(2));break;case 124:l=1;while(++n<j){e=Egb(b.a,n);if(e!=124){--n;break}++l}a.g.fc(cgb(k.a.length),new e2(l));break;case 64:++n;q=new xz;r=new a1(a.b,Pgb(b.a,n),q,false);d=E0(r);++a.c.b;for(h=0;h<a.c.d;h++){Dib(Pz(a.c,h),k.a.length,d)}Kib(k,cgb(5));n+=r.o;--n;break;case 42:++n;q=new xz;r=new a1(a.b,Pgb(b.a,n),q,false);c=N0(r,2,0);n+=r.o;m=Nfb(c[1],10);o='';for(i=0;i<m;i++){o+=c[2]}b.a=Qgb(b.a,0,n)+o+Pgb(b.a,n);j=b.a.length;--n;break;case 32:case 9:break;default:Kib(k,cgb(2));}++n}for(g=k.a.length;g<a.c.b;g++){Kib(k,cgb(2))}if(k.a.length!=0){p=Qg(Oib(k,bg(Nt,pqb,48,0,0,1)),744);a.d=bg(fh,Ypb,41,p.length,15,1);for(f=0;f<p.length;f++){a.d[f]=p[f].a}}else{a.d=fg(Zf(fh,1),Ypb,41,15,[2])}}
function uO(){qO();return fg(Zf(Mp,1),vnb,4,0,[DM,bN,jN,sL,kO,QL,eN,DK,dM,lM,ZL,AK,gL,qN,kL,LM,UM,cK,dK,CK,eK,tK,uK,dO,rM,MN,CL,pK,WL,hK,VL,YL,xK,cM,DL,mM,fN,nM,oM,pN,pM,VN,aM,_L,hL,fJ,JM,qK,FJ,BJ,OJ,DJ,JJ,MJ,RJ,WN,gO,oJ,ZM,AJ,yJ,JN,UJ,nL,oL,lO,TN,WJ,mL,RK,QK,kM,fK,vK,BK,iO,VK,mO,zM,zN,qM,SM,OM,PM,cO,$N,_N,oO,pO,YN,MM,ZN,NM,bO,RM,DN,EN,QM,aO,fM,iM,hM,jM,bM,XL,gM,$L,JL,AN,hO,SK,vL,FM,PL,GM,LJ,QJ,OL,uM,PK,xM,pL,bK,XJ,ZJ,eL,YJ,$J,yM,iL,jL,tN,sN,CJ,EM,cN,TL,UL,aL,sK,HN,GN,VJ,XN,fO,TM,mJ,xJ,eO,rK,tJ,jK,gJ,kK,hJ,nK,kJ,lK,iJ,oK,lJ,mK,jJ,UK,QN,oN,mN,uN,WM,iN,aN,lN,dN,$M,rN,KM,YK,VM,rL,jO,BN,CN,TK,ON,dL,iK,zK,IL,HL,NK,yK,gK,nO,bL,wK,rJ,AL,zJ,KN,vJ,LN,NL,KL,OK,WK,qL,UN,nN,fL,xN,HM,ML,uJ,sJ,uL,qJ,FL,EL,tL,pJ,ZK,nJ,XK,_M,yN,lL,vM,wM,vN,wN,_J,aK,FK,$K,_K,LK,IK,KK,HK,MK,JK,EK,GK,LL,EJ,hN,wJ,NN,PN,kN,HJ,GJ,PJ,SN,sM,RN,NJ,CM,AM,BM,YM,XM,SL,IN,zL,yL,xL,wL,KJ,IM,RL,gN,IJ,GL,SJ,TJ,FN,cL,BL,eM])}
function yZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;q=b.n;h=new lF(b.b,b.a);b.b=null;b.a=null;for(i=rlb(a.a,0);i.b!=i.d.c;){c=Qg(ylb(i),11);m=false;while(Wg(c,109)){m||(m=true);if(i.b!=i.d.c){c=Qg(ylb(i),11)}else{break}}d=new jD(c);o=null;if(i.b!=i.d.c){o=Qg(ylb(i),11);zlb(i)}FZ(d,a.c,o);j=0;while(i.b!=i.d.c&&(d.c>=0?d.c:d.a.tb())==0&&Wg(d.a,45)){n=Qg(ylb(i),11);if(Wg(n,45)&&aA(uZ,n.sb())){d.b=true;k=Qg(d.a,45).Ab(q);p=Qg(n,45).Ab(q);l=aC(k,p);if(!l){j=_B(k,p,b.i);zlb(i);break}gD(d,new DD(l))}else{zlb(i);break}}if(i.a-1!=0&&!!a.c&&!Wg(a.c.a,14)&&!Wg(d.a,14)){g=vE(hD(a.c),d.c>=0?d.c:d.a.sb(),b);hF(h,g);nlb(h.k,g)}iD(d,a.c);e=(d.b&&(Qg(d.a,45).d=true),r=d.a.qb(b),d.b&&(Qg(d.a,45).d=false),r);if(Wg(d.a,58)&&Qg(d.a,58).b&&Wg(e,35)){f=Qg(e,35);f.t+=f.c;f.c=0}(m||Wg(c,58)&&ffb(Qg(c,58).a))&&eF(h,h.k.b);hF(h,e);nlb(h.k,e);Z_(b,e.zb());$wnd.Math.abs(j)>Wob&&dF(h,new x_(j,0,0,0));Wg(d.a,14)||(a.c=d)}a.c=null;return h}
function c1(a){if(a==1643){return 46}else if(1632<=a&&a<=1641){return a-1584&Fpb}else if(1776<=a&&a<=1785){return a-1728&Fpb}else if(2406<=a&&a<=2415){return a-2358&Fpb}else if(2534<=a&&a<=2543){return a-2486&Fpb}else if(2662<=a&&a<=2671){return a-2614&Fpb}else if(2790<=a&&a<=2799){return a-2742&Fpb}else if(2918<=a&&a<=2927){return a-2870&Fpb}else if(3174<=a&&a<=3183){return a-3126&Fpb}else if(3430<=a&&a<=3439){return a-3382&Fpb}else if(3664<=a&&a<=3673){return a-3616&Fpb}else if(3792<=a&&a<=3801){return a-3744&Fpb}else if(3872<=a&&a<=3881){return a-3728&Fpb}else if(4160<=a&&a<=4169){return a-4112&Fpb}else if(6112<=a&&a<=6121){return a-6064&Fpb}else if(6160<=a&&a<=6169){return a-6112&Fpb}else if(6992<=a&&a<=7001){return a-6944&Fpb}else if(7088<=a&&a<=7097){return a-7040&Fpb}else if(7232<=a&&a<=7241){return a-7184&Fpb}else if(7248<=a&&a<=7257){return a-7200&Fpb}else if(43216<=a&&a<=43225){return a-43168&Fpb}return a}
function zG(a,b,c){var d,e,f,g,h,i,j,k,l;h=a.c.b;g=bg(jj,oqb,25,h+1,0,1);l=b.k;(a.n==6||a.n==7)&&(l=gqb);switch(a.n){case 0:k=1;if(a.d[0]==5){g[1]=new x_(0,0,0,0);k=2}a.f?(g[0]=A$(rG,b)):(g[0]=new x_(0,0,0,0));g[h]=g[0];f=A$(pG,b);for(;k<h;k++){if(a.d[k]==5){g[k]=new x_(0,0,0,0);g[k+1]=g[k];++k}else{g[k]=f}}return g;case 1:case 5:g[0]=qG;g[h]=g[0];f=A$(pG,b);for(k=1;k<h;k++){g[k]=f}return g;case 6:case 2:d=A$(oG,b);if(l!=gqb){j=$wnd.Math.max((l-c-(h/2|0)*d.t)/$wnd.Math.floor((h+3)/2|0),0);e=new x_(j,0,0,0)}else{e=A$(pG,b)}g[h]=e;for(k=0;k<h;k++){k%2==0?(g[k]=e):(g[k]=d)}break;case 7:case 3:l!=gqb?(j=$wnd.Math.max((l-c)/2,0)):(j=0);d=A$(oG,b);i=qG;g[0]=new x_(j,0,0,0);g[h]=g[0];for(k=1;k<h;k++){k%2==0?(g[k]=i):(g[k]=d)}break;case 4:d=A$(oG,b);if(l!=gqb){j=$wnd.Math.max((l-c-(h/2|0)*d.t)/$wnd.Math.floor((h-1)/2|0),0);e=new x_(j,0,0,0)}else{e=A$(pG,b)}g[0]=qG;g[h]=g[0];for(k=1;k<h;k++){k%2==0?(g[k]=e):(g[k]=d)}}if(l==gqb){g[0]=qG;g[h]=g[0]}return g}
function tw(){var a,b,c;b=$doc.compatMode;a=fg(Zf(Zt,1),Wnb,2,6,[gob]);for(c=0;c<a.length;c++){if(Ggb(a[c],b)){return}}a.length==1&&Ggb(gob,a[0])&&Ggb('BackCompat',b)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\""+b+'"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' "+b+"').<br>Modify your application's host HTML page doctype, or update your custom "+"'document.compatMode' configuration property settings."}
function Pc(){var a=['\\u0000','\\u0001','\\u0002','\\u0003','\\u0004','\\u0005','\\u0006','\\u0007','\\b','\\t','\\n','\\u000B','\\f','\\r','\\u000E','\\u000F','\\u0010','\\u0011','\\u0012','\\u0013','\\u0014','\\u0015','\\u0016','\\u0017','\\u0018','\\u0019','\\u001A','\\u001B','\\u001C','\\u001D','\\u001E','\\u001F'];a[34]='\\"';a[92]='\\\\';a[173]='\\u00ad';a[1536]='\\u0600';a[1537]='\\u0601';a[1538]='\\u0602';a[1539]='\\u0603';a[1757]='\\u06dd';a[1807]='\\u070f';a[6068]='\\u17b4';a[6069]='\\u17b5';a[8203]='\\u200b';a[8204]='\\u200c';a[8205]='\\u200d';a[8206]='\\u200e';a[8207]='\\u200f';a[8232]='\\u2028';a[8233]='\\u2029';a[8234]='\\u202a';a[8235]='\\u202b';a[8236]='\\u202c';a[8237]='\\u202d';a[8238]='\\u202e';a[8288]='\\u2060';a[8289]='\\u2061';a[8290]='\\u2062';a[8291]='\\u2063';a[8292]='\\u2064';a[8298]='\\u206a';a[8299]='\\u206b';a[8300]='\\u206c';a[8301]='\\u206d';a[8302]='\\u206e';a[8303]='\\u206f';a[65279]='\\ufeff';a[65529]='\\ufff9';a[65530]='\\ufffa';a[65531]='\\ufffb';return a}
function Uw(a,b){var c=(a.__eventBits||0)^b;a.__eventBits=b;if(!c)return;c&1&&(a.onclick=b&1?Qw:null);c&2&&(a.ondblclick=b&2?Qw:null);c&4&&(a.onmousedown=b&4?Qw:null);c&8&&(a.onmouseup=b&8?Qw:null);c&16&&(a.onmouseover=b&16?Qw:null);c&32&&(a.onmouseout=b&32?Qw:null);c&64&&(a.onmousemove=b&64?Qw:null);c&128&&(a.onkeydown=b&128?Qw:null);c&256&&(a.onkeypress=b&256?Qw:null);c&512&&(a.onkeyup=b&512?Qw:null);c&1024&&(a.onchange=b&1024?Qw:null);c&2048&&(a.onfocus=b&2048?Qw:null);c&4096&&(a.onblur=b&4096?Qw:null);c&8192&&(a.onlosecapture=b&8192?Qw:null);c&iob&&(a.onscroll=b&iob?Qw:null);c&hob&&(a.onload=b&hob?Rw:null);c&job&&(a.onerror=b&job?Qw:null);c&lob&&(a.onmousewheel=b&lob?Qw:null);c&mob&&(a.oncontextmenu=b&mob?Qw:null);c&Znb&&(a.onpaste=b&Znb?Qw:null);c&nob&&(a.ontouchstart=b&nob?Qw:null);c&2097152&&(a.ontouchmove=b&2097152?Qw:null);c&$nb&&(a.ontouchend=b&$nb?Qw:null);c&8388608&&(a.ontouchcancel=b&8388608?Qw:null);c&oob&&(a.ongesturestart=b&oob?Qw:null);c&pob&&(a.ongesturechange=b&pob?Qw:null);c&qob&&(a.ongestureend=b&qob?Qw:null)}
function T0(a){var b,c,d,e,f,g;if(a.j!=0){while(a.o<a.j){d=Teb(a.n,a.o);switch(d){case 10:++a.k;a.c=a.o;case 9:case 13:++a.o;break;case 32:++a.o;if(!a.f){uz(a.d,new B$);uz(a.d,new rA);while(a.o<a.j){d=Teb(a.n,a.o);break}}break;case 36:++a.o;if(!a.f){g=2;f=false;if(Teb(a.n,a.o)==36){g=0;f=true;++a.o}e=new Cz(a,H0(a));!e.g&&(e=new Cz(a,'\\textcolor{red}{?}'));uz(a.d,new lG(e.g,g));f&&Teb(a.n,a.o)==36&&++a.o}break;case 92:b=V0(a);uz(a.d,b);a.a&&Wg(b,110)&&Mz(Qg(a.d,50));a.g&&(a.g=false);break;case 123:c=E0(a);!!c&&(c.n=0);uz(a.d,c);break;case 125:--a.e;++a.o;if(a.e==-1){throw qv(new K6("Found a closing '}' without an opening '{'!"))}return;case 94:uz(a.d,P0(a,94));break;case 95:if(a.f){uz(a.d,P0(a,95))}else{uz(a.d,new S1);++a.o}break;case 38:if(!a.a){throw qv(new K6(Tqb))}Kz(Qg(a.d,50));++a.o;break;case 39:a.f?uz(a.d,new vB(L0(a),null,N_('prime'))):uz(a.d,C0(a,39,true));++a.o;break;case 8245:a.f?uz(a.d,new vB(L0(a),null,N_('backprime'))):uz(a.d,C0(a,8245,true));++a.o;break;case 34:if(a.f){uz(a.d,new vB(L0(a),null,N_('prime')));uz(a.d,new vB(L0(a),null,N_('prime')))}else{uz(a.d,C0(a,39,true));uz(a.d,C0(a,39,true))}++a.o;break;default:uz(a.d,C0(a,d,false));++a.o;}}}!a.d.g&&!a.a&&uz(a.d,new kD)}
function AC(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D;if(d==null){return c}t=new Qib(new ejb(c));try{j=(g=F9(d),new B9(Qg(Ux(By(g.a.a)),34)))}catch(a){a=pv(a);if(Wg(a,26)){h=a;throw qv(new C6(Mpb+e+'!'+qc(h,h.O())))}else throw qv(a)}l=JC(Npb,j);k=JC('id',j);if(Mib(tC,k,0)<0){Kib(tC,k)}else{throw qv(new G6('Font '+k+' is already loaded !'))}w=KC('space',j);D=KC('xHeight',j);s=KC('quad',j);v=NC('skewChar',j,-1);C=NC('unicode',j,0);f=null;try{f=JC('boldVersion',j)}catch(a){a=pv(a);if(!Wg(a,54))throw qv(a)}u=null;try{u=JC('romanVersion',j)}catch(a){a=pv(a);if(!Wg(a,54))throw qv(a)}A=null;try{A=JC('ssVersion',j)}catch(a){a=pv(a);if(!Wg(a,54))throw qv(a)}B=null;try{B=JC('ttVersion',j)}catch(a){a=pv(a);if(!Wg(a,54))throw qv(a)}o=null;try{o=JC('itVersion',j)}catch(a){a=pv(a);if(!Wg(a,54))throw qv(a)}r=Qgb(e,0,e.lastIndexOf('/')+1)+(''+l);n=new _D(Mib(tC,k,0),b.a,r,C,D,w,s,f,u,A,B,o);v!=-1&&(n.t=v&Fpb,undefined);q=new D9(hy(j.a,'Char'));for(p=0;p<Dy(q.a.a);p++){OC(new B9(Qg((new v9(jy(q.a,p))).b,34)),n)}t.a[t.a.length]=n;for(m=0;m<t.a.length;m++){i=(Tmb(m,t.a.length),Qg(t.a[m],118));TD(i,Mib(tC,i.c,0));YD(i,Mib(tC,i.s,0));ZD(i,Mib(tC,i.w,0));$D(i,Mib(tC,i.B,0));VD(i,Mib(tC,i.i,0))}b.b=DC(b);return Qg(Oib(t,c),748)}
function C0(b,c,d){var e,f,g,h,i,j,k,l,m;if(b.f){if(c>=945&&c<=969){return N_((sz(),qz)[c])}else if(c>=913&&c<=937){return (new Dz((sz(),pz)[c])).g}}f=c1(c);if((f<48||f>57)&&(f<97||f>122)&&(f<65||f>90)){e=(p6(),t6(f));!w0&&Mib((QB(),LB),e,0)==-1&&nC(Qg(Dhb((QB(),NB),e),747));m=(sz(),qz)[f];if(m==null&&(pz==null||pz[f]==null)){j=null;k=J2==e;(k&&Jz(J2)||!k)&&(j=Iz(e));if(j){if(d){return new FF(String.fromCharCode(f),j)}l=b.o++;h=b.j-1;while(b.o<b.j){f=Teb(b.n,b.o);if(t6(f)!=e){h=--b.o;break}++b.o}return new FF(Web(b.n,l,h+1),j)}if(!b.i){throw qv(new K6("Unknown character : '"+String.fromCharCode(f)+"' (or "+f+')'))}return new cB(new fZ((new Dz('\\text{(Unknown char '+f+')}')).g),null,(tB(),qB))}if(!b.f){if(rz[f]!=null){return I_(N_(rz[f]),f)}}if(pz!=null&&pz[f]!=null){return (new Dz(pz[f])).g}try{return N_(m)}catch(a){a=pv(a);if(Wg(a,130)){g=a;throw qv(new L6("The character '"+String.fromCharCode(f)+"' was mapped to an unknown symbol with the name '"+m+Vob,g))}else throw qv(a)}}i=Qg(Dhb((sz(),mz),(p6(),J2)),108);if(i){if(d){return new FF(String.fromCharCode(f),i)}l=b.o++;h=b.j-1;while(b.o<b.j){f=Teb(b.n,b.o);if((f<48||f>57)&&(f<97||f>122)&&(f<65||f>90)){h=--b.o;break}++b.o}return new FF(Web(b.n,l,h+1),i)}return new PA(f,b.f,b.d.i)}
function fB(b){aB();var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;new a7;if(b!=null){b=Sgb(b);if(b.length>=1){if(b.charCodeAt(0)==35){return uB(b)}else if(Igb(b,Ugb(44))!=-1||Igb(b,Ugb(59))!=-1){r=new w_(b);p=q_(r);if(p==3){try{e=Sgb(s_(r));d=Sgb(s_(r));c=Sgb(s_(r));q=Mfb(e);i=Mfb(d);f=Mfb(c);if(q==bh(q)&&i==bh(i)&&f==bh(f)&&Igb(e,Ugb(46))==-1&&Igb(d,Ugb(46))==-1&&Igb(c,Ugb(46))==-1){l=bh($wnd.Math.min(255,$wnd.Math.max(0,q)));k=bh($wnd.Math.min(255,$wnd.Math.max(0,i)));j=bh($wnd.Math.min(255,$wnd.Math.max(0,f)));return new J8(l,k,j)}q=$wnd.Math.min(1,$wnd.Math.max(0,q));i=$wnd.Math.min(1,$wnd.Math.max(0,i));f=$wnd.Math.min(1,$wnd.Math.max(0,f));return _6(q,i,f)}catch(a){a=pv(a);if(Wg(a,36)){return tB(),kB}else throw qv(a)}}else if(p==4){try{h=Mfb(Sgb(s_(r)));o=Mfb(Sgb(s_(r)));s=Mfb(Sgb(s_(r)));m=Mfb(Sgb(s_(r)));h=$wnd.Math.min(1,$wnd.Math.max(0,h));o=$wnd.Math.min(1,$wnd.Math.max(0,o));s=$wnd.Math.min(1,$wnd.Math.max(0,s));m=$wnd.Math.min(1,$wnd.Math.max(0,m));return n=1-m,_6((new a7,n*(1-h)),n*(1-o),n*(1-s))}catch(a){a=pv(a);if(Wg(a,36)){return tB(),kB}else throw qv(a)}}}g=Qg(Ehb(_A,b.toLowerCase()),235);if(g){return g}if(Igb(b,Ugb(46))!=-1){try{i=$wnd.Math.min(1,$wnd.Math.max(Mfb(b),0));return _6(i,i,i)}catch(a){a=pv(a);if(!Wg(a,36))throw qv(a)}}return uB('#'+b)}}return tB(),kB}
function xG(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;b.e.a=bg(Ut,vnb,1,0,5,1);b.a.a=bg(Ut,vnb,1,0,5,1);L=b.c.d;k=b.c.b;i=_f(jj,[vnb,oqb],[236,25],0,[L,k],2);C=bg(eh,Wpb,41,L,15,1);D=bg(eh,Wpb,41,L,15,1);M=bg(eh,Wpb,41,k,15,1);G=0;l=YB(c.i);m=c;if(b.n==5){m=new d0(c.i,c.f,c.n,c.a,c.b,c.j,c.g);m.i=4}F=new Pib;for(r=0;r<L;r++){C[r]=0;D[r]=0;for(u=0;u<k;u++){f=null;try{f=Qz(b.c,r,u)}catch(a){a=pv(a);if(Wg(a,26)){i[r][u-1].s=11;u=k-1}else throw qv(a)}eg(i[r],u,!f?qG:f.qb(m));C[r]=$wnd.Math.max(i[r][u].n,C[r]);D[r]=$wnd.Math.max(i[r][u].p,D[r]);if(i[r][u].s!=12){M[u]=$wnd.Math.max(i[r][u].t,M[u])}else{ME(Qg(f,71),r,u);Kib(F,Qg(f,71))}}}for(s=0;s<F.a.length;s++){I=(Tmb(s,F.a.length),Qg(F.a[s],71));j=I.e;K=I.i;J=I.g;T=0;for(u=j;u<j+J;u++){T+=M[u]}if(i[K][j].t>T){n=(i[K][j].t-T)/J;for(v=j;v<j+J;v++){M[v]+=n}}}for(w=0;w<k;w++){G+=M[w]}d=zG(b,m,G);for(A=0;A<k+1;A++){G+=d[A].t;b.g.ec(cgb(A))!=null&&(G+=a2(Qg(b.g.ec(cgb(A)),100),m))}S=new DH;e=A$(uG,m);zH(S,A$(tG,m));for(q=0;q<L;q++){p=new iF;for(t=0;t<k;t++){switch(i[q][t].s){case -1:case 12:if(t==0){if(b.g.ec(cgb(0))!=null){Q=Qg(b.g.ec(cgb(0)),100);b2(Q,D[q]+C[q]+e.p);c2(Q,C[q]+e.p/2);R=_1(Q,m);dF(p,new kF(R,d[0].t+R.t,0))}else{dF(p,d[0])}}B=true;if(i[q][t].s==-1){if(Sz(b.c,q,t)){Kib(b.a,Sz(b.c,q,t));N=t==0?2*d[0].t:d[t].t;O=YB(m.i);Kib(b.e,new A8((V6(T6),p.t-N/2),S.p+S.n-e.p-O/2,M[t]+N+O,D[q]+C[q]+e.p))}dF(p,new kF(i[q][t],M[t],b.d[t]))}else{h=yG(b,m,d,M,q,t);H=Qg(Qz(b.c,q,t),71);t+=H.g-1;hF(p,h);nlb(p.k,h);B=H.b!=0}if(B&&b.g.ec(cgb(t+1))!=null){Q=Qg(b.g.ec(cgb(t+1)),100);b2(Q,D[q]+C[q]+e.p);c2(Q,C[q]+e.p/2);R=_1(Q,m);t<k-1?dF(p,new kF(R,d[t+1].t+R.t,2)):dF(p,new kF(R,d[t+1].t+R.t,1))}else{dF(p,d[t+1])}break;case 11:o=m.k;o=o==gqb?M[t]:o;p=new kF(i[q][t],o,0);t=k-1;break;case 13:f=Qg(Qz(b.c,q,t),110);f.b=G;if(q>=1&&Wg(Qz(b.c,q-1,t),110)){dF(p,new x_(0,2*l,0,0));ZE(f,-e.p/2+l)}else{ZE(f,-e.p/2)}dF(p,YE(f,m));t=k;}}if(i[q][0].s!=13){p.p=D[q];p.n=C[q];zH(S,p);q<L-1&&zH(S,e)}else{zH(S,p)}}zH(S,A$(sG,m));P=S.p+S.n;g=TB(m.i);S.p=P/2+g;S.n=P/2-g;return new S_(S,b.e,b.a)}
function UZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H;c=!a.b?new x_(0,0,0,0):a.b.qb(b);h=new x_(0,0,0,0);if(!a.c&&!a.d){return c}C=b.n;u=b.i;if(a.b.o==2||a.b.o==0&&u==0){return D1(new F1(new F1(a.b,a.c,3,gpb,true,false),a.d,3,3,true,true),b)}j=new jF(c);o=c.zb();o==-1&&(o=Qfb(Qg(Ehb((QB(),KB),Bpb),13)));w=b0(b);B=c0(b);g=0;if(Wg(a.b,39)){d=Qg(a.b,39).c.qb(W_(b));t=d.p-gC(B.i);s=d.n+fC(w.i)}else if(Wg(a.b,23)&&a.b.n==1){e=XB(C,Qg(a.b,23).b,u);u<2&&(l=(QB(),JB)[e.c],!!PD(l,e.a))&&(e=bC(e,u));G=new VA(e);lA(G,-(G.p+G.n)/2-TB(b.i));j=new jF(G);g=e.d.c;h=A$(new C$(2),b);g>Wob&&!a.c&&dF(j,new x_(g,0,0,0));t=j.p-gC(B.i);s=j.n+fC(w.i)}else if(Wg(a.b,45)){t=s=0;f=Qg(a.b,45).Ab(C);(!Qg(a.b,45).d||!iC(f.c))&&(g=WB(C,f,u).d.c);if(g>Wob&&!a.c){dF(j,new x_(g,0,0,0));g=0}}else{t=c.p-gC(B.i);s=c.n+fC(w.i)}if(!a.d){G=a.c.qb(w);lA(G,$wnd.Math.max($wnd.Math.max(s,qC('sub1')*(u<2?1:u<4?Pfb(Qg(Ehb((QB(),KB),Xob),13)):u<6?Pfb(Qg(Ehb((QB(),KB),Yob),13)):Pfb(Qg(Ehb((QB(),KB),Zob),13)))),G.p-4*$wnd.Math.abs((l=(QB(),JB)[o],SD(l,u<2?1:u<4?Pfb(Qg(Ehb(KB,Xob),13)):u<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13)))))/5));hF(j,G);nlb(j.k,G);hF(j,h);nlb(j.k,h);return j}F=a.d.qb(B);p=F.t;!!a.c&&a.a==1&&(p=$wnd.Math.max(p,a.c.qb(w).t));A=new kF(F,p,a.a);dF(A,A$(SZ,b));u==0?(q=qC('sup1')):W_(b).i==u?(q=qC('sup3')*(u<2?1:u<4?Pfb(Qg(Ehb((QB(),KB),Xob),13)):u<6?Pfb(Qg(Ehb((QB(),KB),Yob),13)):Pfb(Qg(Ehb((QB(),KB),Zob),13)))):(q=qC('sup2')*(u<2?1:u<4?Pfb(Qg(Ehb((QB(),KB),Xob),13)):u<6?Pfb(Qg(Ehb((QB(),KB),Yob),13)):Pfb(Qg(Ehb((QB(),KB),Zob),13))));t=$wnd.Math.max($wnd.Math.max(t,q),F.n+$wnd.Math.abs((m=(QB(),JB)[o],SD(m,u<2?1:u<4?Pfb(Qg(Ehb(KB,Xob),13)):u<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13)))))/4);if(!a.c){A.r=-t;hF(j,A);nlb(j.k,A)}else{H=a.c.qb(w);v=new kF(H,p,a.a);dF(v,A$(SZ,b));s=$wnd.Math.max(s,qC('sub2')*(u<2?1:u<4?Pfb(Qg(Ehb(KB,Xob),13)):u<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13))));i=qC(Gpb)*(u<2?1:u<4?Pfb(Qg(Ehb(KB,Xob),13)):u<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13)));n=t-F.n+s-H.p;if(n<4*i){t+=4*i-n;r=4*$wnd.Math.abs((k=JB[o],SD(k,u<2?1:u<4?Pfb(Qg(Ehb(KB,Xob),13)):u<6?Pfb(Qg(Ehb(KB,Yob),13)):Pfb(Qg(Ehb(KB,Zob),13)))))/5-(t-F.n);if(r>0){t+=r;s-=r}}D=new DH;A.r=g;zH(D,A);n=t-F.n+s-H.p;zH(D,new x_(0,n,0,0));zH(D,v);kA(D,t+F.p);jA(D,s+H.n);hF(j,D);nlb(j.k,D)}hF(j,h);nlb(j.k,h);return j}
function qO(){qO=Nv;DM=new vO;bN=new BS;jN=new XV;sL=new rW;kO=new NW;QL=new hX;eN=new DX;DK=new ZX;dM=new tY;lM=new xO;ZL=new TO;AK=new nP;gL=new JP;qN=new dQ;kL=new zQ;LM=new VQ;UM=new pR;cK=new LR;dK=new fS;CK=new DS;eK=new ZS;tK=new tT;uK=new PT;dO=new jU;rM=new FU;MN=new _U;CL=new vV;pK=new RV;WL=new VV;hK=new ZV;VL=new _V;YL=new bW;xK=new dW;cM=new fW;DL=new hW;mM=new jW;fN=new lW;nM=new nW;oM=new pW;pN=new tW;pM=new vW;VN=new xW;aM=new zW;_L=new BW;hL=new DW;fJ=new FW;JM=new HW;qK=new JW;FJ=new LW;BJ=new PW;OJ=new RW;DJ=new TW;JJ=new VW;MJ=new XW;RJ=new ZW;WN=new _W;gO=new bX;oJ=new dX;ZM=new fX;AJ=new jX;yJ=new lX;JN=new nX;UJ=new pX;nL=new rX;oL=new tX;lO=new vX;TN=new xX;WJ=new zX;mL=new BX;RK=new FX;QK=new HX;kM=new JX;fK=new LX;vK=new NX;BK=new PX;iO=new RX;VK=new TX;mO=new VX;zM=new XX;zN=new _X;qM=new bY;SM=new dY;OM=new fY;PM=new hY;cO=new jY;$N=new lY;_N=new nY;oO=new pY;pO=new rY;YN=new vY;MM=new xY;ZN=new zY;NM=new BY;bO=new DY;RM=new FY;DN=new HY;EN=new JY;QM=new LY;aO=new NY;fM=new zO;iM=new BO;hM=new DO;jM=new FO;bM=new HO;XL=new JO;gM=new LO;$L=new NO;JL=new PO;AN=new RO;hO=new VO;SK=new XO;vL=new ZO;FM=new _O;PL=new bP;GM=new dP;LJ=new fP;QJ=new hP;OL=new jP;uM=new lP;PK=new pP;xM=new rP;pL=new tP;bK=new vP;XJ=new xP;ZJ=new zP;eL=new BP;YJ=new DP;$J=new FP;yM=new HP;iL=new LP;jL=new NP;tN=new PP;sN=new RP;CJ=new TP;EM=new VP;cN=new XP;TL=new ZP;UL=new _P;aL=new bQ;sK=new fQ;HN=new hQ;GN=new jQ;VJ=new lQ;XN=new nQ;fO=new pQ;TM=new rQ;mJ=new tQ;xJ=new vQ;eO=new xQ;rK=new BQ;tJ=new DQ;jK=new FQ;gJ=new HQ;kK=new JQ;hJ=new LQ;nK=new NQ;kJ=new PQ;lK=new RQ;iJ=new TQ;oK=new XQ;lJ=new ZQ;mK=new _Q;jJ=new bR;UK=new dR;QN=new fR;oN=new hR;mN=new jR;uN=new lR;WM=new nR;iN=new rR;aN=new tR;lN=new vR;dN=new xR;$M=new zR;rN=new BR;KM=new DR;YK=new FR;VM=new HR;rL=new JR;jO=new NR;BN=new PR;CN=new RR;TK=new TR;ON=new VR;dL=new XR;iK=new ZR;zK=new _R;IL=new bS;HL=new dS;NK=new hS;yK=new jS;gK=new lS;nO=new nS;bL=new pS;wK=new rS;rJ=new tS;AL=new vS;zJ=new xS;KN=new zS;vJ=new FS;LN=new HS;NL=new JS;KL=new LS;OK=new NS;WK=new PS;qL=new RS;UN=new TS;nN=new VS;fL=new XS;xN=new _S;HM=new bT;ML=new dT;uJ=new fT;sJ=new hT;uL=new jT;qJ=new lT;FL=new nT;EL=new pT;tL=new rT;pJ=new vT;ZK=new xT;nJ=new zT;XK=new BT;_M=new DT;yN=new FT;lL=new HT;vM=new JT;wM=new LT;vN=new NT;wN=new RT;_J=new TT;aK=new VT;FK=new XT;$K=new ZT;_K=new _T;LK=new bU;IK=new dU;KK=new fU;HK=new hU;MK=new lU;JK=new nU;EK=new pU;GK=new rU;LL=new tU;EJ=new vU;hN=new xU;wJ=new zU;NN=new BU;PN=new DU;kN=new HU;HJ=new JU;GJ=new LU;PJ=new NU;SN=new PU;sM=new RU;RN=new TU;NJ=new VU;CM=new XU;AM=new ZU;BM=new bV;YM=new dV;XM=new fV;SL=new hV;IN=new jV;zL=new lV;yL=new nV;xL=new pV;wL=new rV;KJ=new tV;IM=new xV;RL=new zV;gN=new BV;IJ=new DV;GL=new FV;SJ=new HV;TJ=new JV;FN=new LV;cL=new NV;BL=new PV;eM=new TV}
function L9(){J9('cyrillic/fonts/jlm_cyrillic.map.xml',(Udb(),eab));J9('cyrillic/fonts/jlm_wnbx10.xml',(ceb(),oab));J9('cyrillic/fonts/jlm_wnbxti10.xml',(deb(),pab));J9('cyrillic/fonts/jlm_wnr10.xml',(eeb(),qab));J9('cyrillic/fonts/jlm_wnss10.xml',(feb(),rab));J9('cyrillic/fonts/jlm_wnssbx10.xml',(geb(),sab));J9('cyrillic/fonts/jlm_wnssi10.xml',(heb(),tab));J9('cyrillic/fonts/jlm_wnti10.xml',(ieb(),uab));J9('cyrillic/fonts/jlm_wntt10.xml',(jeb(),vab));J9('cyrillic/fonts/language_cyrillic.xml',(keb(),wab));J9('cyrillic/fonts/mappings_cyrillic.xml',(meb(),yab));J9('cyrillic/fonts/symbols_cyrillic.xml',(oeb(),Aab));J9(Cpb,(Fdb(),R9));J9('fonts/base/jlm_amsfonts.map.xml',(Jdb(),V9));J9('fonts/base/jlm_amssymb.map.xml',(Kdb(),W9));J9('fonts/base/jlm_base.map.xml',(Ldb(),X9));J9('fonts/base/jlm_cmex10.xml',(Mdb(),Y9));J9('fonts/base/jlm_cmmi10.xml',(Ndb(),Z9));J9('fonts/base/jlm_cmmi10_unchanged.xml',(Odb(),$9));J9('fonts/base/jlm_cmmib10.xml',(Pdb(),_9));J9('fonts/base/jlm_cmmib10_unchanged.xml',(Qdb(),aab));J9('fonts/base/jlm_moustache.xml',(Rdb(),bab));J9('fonts/euler/jlm_eufb10.xml',(Sdb(),cab));J9('fonts/euler/jlm_eufm10.xml',(Tdb(),dab));J9('fonts/latin/jlm_cmr10.xml',(qeb(),Cab));J9('fonts/latin/jlm_jlmbi10.xml',(reb(),Dab));J9('fonts/latin/jlm_jlmbx10.xml',(seb(),Eab));J9('fonts/latin/jlm_jlmi10.xml',(teb(),Fab));J9('fonts/latin/jlm_jlmr10.xml',(ueb(),Gab));J9('fonts/latin/jlm_jlmr10_unchanged.xml',(veb(),Hab));J9('fonts/latin/jlm_jlmsb10.xml',(web(),Iab));J9('fonts/latin/jlm_jlmsbi10.xml',(xeb(),Jab));J9('fonts/latin/jlm_jlmsi10.xml',(yeb(),Kab));J9('fonts/latin/jlm_jlmss10.xml',(zeb(),Lab));J9('fonts/latin/jlm_jlmtt10.xml',(Aeb(),Mab));J9('fonts/latin/optional/jlm_cmbx10.xml',(Keb(),Wab));J9('fonts/latin/optional/jlm_cmbxti10.xml',(Leb(),Xab));J9('fonts/latin/optional/jlm_cmss10.xml',(Meb(),Yab));J9('fonts/latin/optional/jlm_cmssbx10.xml',(Neb(),Zab));J9('fonts/latin/optional/jlm_cmssi10.xml',(Oeb(),$ab));J9('fonts/latin/optional/jlm_cmti10.xml',(Peb(),_ab));J9('fonts/latin/optional/jlm_cmti10_unchanged.xml',(Qeb(),abb));J9('fonts/latin/optional/jlm_cmtt10.xml',(Reb(),bbb));J9('fonts/maths/jlm_cmbsy10.xml',(Beb(),Nab));J9('fonts/maths/jlm_cmsy10.xml',(Ceb(),Oab));J9('fonts/maths/jlm_msam10.xml',(Deb(),Pab));J9('fonts/maths/jlm_msbm10.xml',(Eeb(),Qab));J9('fonts/maths/jlm_rsfs10.xml',(Feb(),Rab));J9('fonts/maths/jlm_special.map.xml',(Heb(),Tab));J9('fonts/maths/jlm_special.xml',(Geb(),Sab));J9('fonts/maths/jlm_stmary10.xml',(Ieb(),Uab));J9('fonts/maths/jlm_stmaryrd.map.xml',(Jeb(),Vab));J9('fonts/maths/optional/jlm_dsrom10.xml',(Seb(),cbb));J9(cqb,(Gdb(),S9));J9('greek/fonts/jlm_fcmbipg.xml',(Vdb(),fab));J9('greek/fonts/jlm_fcmbpg.xml',(Wdb(),gab));J9('greek/fonts/jlm_fcmripg.xml',(Xdb(),hab));J9('greek/fonts/jlm_fcmrpg.xml',(Ydb(),iab));J9('greek/fonts/jlm_fcsbpg.xml',(Zdb(),jab));J9('greek/fonts/jlm_fcsropg.xml',($db(),kab));J9('greek/fonts/jlm_fcsrpg.xml',(_db(),lab));J9('greek/fonts/jlm_fctrpg.xml',(aeb(),mab));J9('greek/fonts/jlm_greek.map.xml',(beb(),nab));J9('greek/fonts/language_greek.xml',(leb(),xab));J9('greek/fonts/mappings_greek.xml',(neb(),zab));J9('greek/fonts/symbols_greek.xml',(peb(),Bab));J9(Brb,(Hdb(),T9));J9(Uob,(Idb(),U9))}
function iB(){Hhb(_A,'black',(tB(),kB));Hhb(_A,'white',rB);Hhb(_A,'red',qB);Hhb(_A,'green',oB);Hhb(_A,'blue',lB);Hhb(_A,'cyan',nB);Hhb(_A,'magenta',pB);Hhb(_A,'yellow',sB);Hhb(_A,'greenyellow',_6((new a7,0.8499999940395355),1,cpb));Hhb(_A,'goldenrod',_6((new a7,1),0.8999999985098839,dpb));Hhb(_A,'dandelion',_6((new a7,1),0.7100000083446503,dpb));Hhb(_A,'apricot',_6((new a7,1),epb,fpb));Hhb(_A,'peach',_6((new a7,1),0.5,gpb));Hhb(_A,'melon',_6((new a7,1),0.5399999916553497,0.5));Hhb(_A,'yelloworange',_6((new a7,1),hpb,0));Hhb(_A,'orange',_6((new a7,1),0.38999998569488525,ipb));Hhb(_A,'burntorange',_6((new a7,1),0.49000000953674316,0));Hhb(_A,'bittersweet',_6((new a7,0.760000005364418),0.1900000013411045,0));Hhb(_A,'redorange',_6((new a7,1),0.23000001907348633,ipb));Hhb(_A,'mahogany',_6((new a7,0.6500000059604645),0.09749998539686189,0.08449999767541883));Hhb(_A,'maroon',_6((new a7,epb),0.08839999768733975,0.2175999974250793));Hhb(_A,'brickred',_6((new a7,0.7199999988079071),0.07920001016855238,0.04320000164508819));Hhb(_A,'orangered',_6((new a7,1),0,0.5));Hhb(_A,'rubinered',_6((new a7,1),0,jpb));Hhb(_A,'wildstrawberry',_6((new a7,1),kpb,0.6100000143051147));Hhb(_A,'salmon',_6((new a7,1),0.4700000286102295,0.6200000047683716));Hhb(_A,'carnationpink',_6((new a7,1),0.3700000047683716,1));Hhb(_A,'magenta',_6((new a7,1),0,1));Hhb(_A,'violetred',_6((new a7,1),0.1899999976158142,1));Hhb(_A,'rhodamine',_6((new a7,1),lpb,1));Hhb(_A,'mulberry',_6((new a7,mpb),0.09800002340972425,npb));Hhb(_A,'redviolet',_6((new a7,0.6137999964773655),0.06600001537799827,0.6599999964237213));Hhb(_A,'fuchsia',_6((new a7,0.4876000020444393),0.08279997603297229,0.9200000017881393));Hhb(_A,'lavender',_6((new a7,1),0.5200000107288361,1));Hhb(_A,'thistle',_6((new a7,opb),0.4100000262260437,1));Hhb(_A,'orchid',_6((new a7,epb),0.36000001430511475,1));Hhb(_A,'darkorchid',_6((new a7,ppb),0.19999998807907104,qpb));Hhb(_A,'purple',_6((new a7,rpb),0.13999998569488525,1));Hhb(_A,'plum',_6((new a7,0.5),0,1));Hhb(_A,'violet',_6((new a7,0.20999997854232788),0.12000000476837158,1));Hhb(_A,'royalpurple',_6((new a7,0.25),0.10000002384185791,1));Hhb(_A,'blueviolet',_6((new a7,0.13439998639225958),0.0863999749034643,0.9600000008940697));Hhb(_A,'periwinkle',_6((new a7,spb),tpb,1));Hhb(_A,'cadetblue',_6((new a7,upb),spb,0.7699999958276749));Hhb(_A,'cornflowerblue',_6((new a7,0.3500000238418579),jpb,1));Hhb(_A,'midnightblue',_6((new a7,0.011399988985061782),0.49589999649524685,0.5699999928474426));Hhb(_A,'navyblue',_6((new a7,vpb),0.4599999785423279,1));Hhb(_A,'royalblue',_6((new a7,0),0.5,1));Hhb(_A,'cerulean',_6((new a7,vpb),0.8900000005960464,1));Hhb(_A,'processblue',_6((new a7,kpb),1,1));Hhb(_A,'skyblue',_6((new a7,upb),1,opb));Hhb(_A,'turquoise',_6((new a7,wpb),1,qpb));Hhb(_A,'tealblue',_6((new a7,0.13719998604357242),npb,mpb));Hhb(_A,'aquamarine',_6((new a7,lpb),1,xpb));Hhb(_A,'bluegreen',_6((new a7,wpb),1,0.6699999868869781));Hhb(_A,'emerald',_6((new a7,0),1,0.5));Hhb(_A,'junglegreen',_6((new a7,0.009999990463256836),1,fpb));Hhb(_A,'seagreen',_6((new a7,cpb),1,0.5));Hhb(_A,'forestgreen',_6((new a7,0.07919997716248028),opb,0.10560000451803209));Hhb(_A,'pinegreen',_6((new a7,0.0599999874830246),0.75,0.3075000196695328));Hhb(_A,'limegreen',_6((new a7,0.5),1,0));Hhb(_A,'yellowgreen',_6((new a7,0.5600000023841858),1,0.25999999046325684));Hhb(_A,'springgreen',_6((new a7,0.7400000095367432),1,0.24000000953674316));Hhb(_A,'olivegreen',_6((new a7,0.21600000643730155),ppb,0.030000006854534078));Hhb(_A,'rawsienna',_6((new a7,rpb),0.15399998760223355,0));Hhb(_A,'sepia',_6((new a7,gpb),0.05100000703334828,0));Hhb(_A,'brown',_6((new a7,0.3999999761581421),0.07599999451637274,0));Hhb(_A,'tan',_6((new a7,0.8599999994039536),hpb,0.4399999976158142));Hhb(_A,'gray',_6((new a7,0.5),0.5,0.5))}
function D0(b){var c,d,e,f,g,h,i,j,k,l,m;if(b.j!=0){while(b.o<b.j){d=Teb(b.n,b.o);switch(d){case 92:m=b.o;f=F0(b);if(Ggb(frb,f)||Ggb(krb,f)){c=N0(b,2,2);k=Qg(Ehb((hG(),gG),f),15);try{iG(k,b,c)}catch(a){a=pv(a);if(Wg(a,22)){g=a;if(!b.i){throw qv(g)}}else throw qv(a)}_gb(b.n,m,b.o);b.j=b.n.a.length;b.o=m}else{dH();if(Fhb(bH,f)){k=Qg(Ehb((hG(),gG),f),15);c=N0(b,k.c,k.a?1:0);c[0]=f;try{ahb(b.n,m,b.o,Tg(iG(k,b,c)))}catch(a){a=pv(a);if(Wg(a,22)){g=a;if(!b.i){throw qv(g)}m+=f.length+1}else throw qv(a)}b.j=b.n.a.length;b.o=m}else if(Ggb('begin',f)){c=N0(b,1,0);k=Qg(Ehb((hG(),gG),c[1]+qqb),15);if(!k){if(!b.i){throw qv(new K6('Unknown environment: '+c[1]+nqb+b.k+':'+(b.o-b.c-1)))}}else{try{l=N0(b,k.c-1,0);i=K0(b,'\\begin{'+c[1]+'}','\\end{'+c[1]+'}');h='{\\makeatletter \\'+c[1]+qqb;for(j=1;j<=k.c-1;j++){h+='{'+l[j]+'}'}h+='{'+i+'}\\makeatother}';ahb(b.n,m,b.o,h);b.j=b.n.a.length;b.o=m}catch(a){a=pv(a);if(Wg(a,22)){g=a;if(!b.i){throw qv(g)}}else throw qv(a)}}}else Ggb(grb,f)?++b.b:Ggb(hrb,f)?--b.b:Ekb(x0,f)&&N0(b,1,0)}break;case 37:m=b.o++;while(b.o<b.j){e=Teb(b.n,b.o++);if(e==13||e==10){break}}b.o<b.j&&--b.o;ahb(b.n,m,b.o,'');b.j=b.n.a.length;b.o=m;break;case 176:ahb(b.n,b.o,b.o+1,'^{\\circ}');b.j=b.n.a.length;++b.o;break;case 178:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsup{2}');b.j=b.n.a.length;++b.o;break;case 179:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsup{3}');b.j=b.n.a.length;++b.o;break;case 185:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsup{1}');b.j=b.n.a.length;++b.o;break;case 8304:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsup{0}');b.j=b.n.a.length;++b.o;break;case 8308:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsup{4}');b.j=b.n.a.length;++b.o;break;case 8309:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsup{5}');b.j=b.n.a.length;++b.o;break;case 8310:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsup{6}');b.j=b.n.a.length;++b.o;break;case 8311:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsup{7}');b.j=b.n.a.length;++b.o;break;case 8312:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsup{8}');b.j=b.n.a.length;++b.o;break;case 8313:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsup{9}');b.j=b.n.a.length;++b.o;break;case 8314:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsup{+}');b.j=b.n.a.length;++b.o;break;case 8315:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsup{-}');b.j=b.n.a.length;++b.o;break;case 8316:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsup{=}');b.j=b.n.a.length;++b.o;break;case 8317:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsup{(}');b.j=b.n.a.length;++b.o;break;case 8318:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsup{)}');b.j=b.n.a.length;++b.o;break;case 8319:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsup{n}');b.j=b.n.a.length;++b.o;break;case 8322:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsub{2}');b.j=b.n.a.length;++b.o;break;case 8323:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsub{3}');b.j=b.n.a.length;++b.o;break;case 8321:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsub{1}');b.j=b.n.a.length;++b.o;break;case 8320:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsub{0}');b.j=b.n.a.length;++b.o;break;case 8324:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsub{4}');b.j=b.n.a.length;++b.o;break;case 8325:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsub{5}');b.j=b.n.a.length;++b.o;break;case 8326:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsub{6}');b.j=b.n.a.length;++b.o;break;case 8327:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsub{7}');b.j=b.n.a.length;++b.o;break;case 8328:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsub{8}');b.j=b.n.a.length;++b.o;break;case 8329:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsub{9}');b.j=b.n.a.length;++b.o;break;case 8330:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsub{+}');b.j=b.n.a.length;++b.o;break;case 8331:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsub{-}');b.j=b.n.a.length;++b.o;break;case 8332:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsub{=}');b.j=b.n.a.length;++b.o;break;case 8333:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsub{(}');b.j=b.n.a.length;++b.o;break;case 8334:ahb(b.n,b.o,b.o+1,'\\jlatexmathcumsub{)}');b.j=b.n.a.length;++b.o;break;default:++b.o;}}b.o=0;b.j=b.n.a.length}}
function aI(){aI=Nv;new a7;dH();Hhb(bH,'array@env',sqb);Hhb((hG(),gG),'array@env',new jG(new fH,2));Hhb(bH,tqb,sqb);Hhb(gG,tqb,new jG(new fH,2));Hhb(bH,uqb,'\\matrix@@env{ #1 }');Hhb(gG,uqb,new jG(new fH,1));Hhb(bH,vqb,'\\smallmatrix@@env{ #1 }');Hhb(gG,vqb,new jG(new fH,1));Hhb(bH,wqb,'\\left(\\begin{matrix} #1 \\end{matrix}\\right)');Hhb(gG,wqb,new jG(new fH,1));Hhb(bH,xqb,'\\left[\\begin{matrix} #1 \\end{matrix}\\right]');Hhb(gG,xqb,new jG(new fH,1));Hhb(bH,yqb,'\\left\\{\\begin{matrix} #1 \\end{matrix}\\right\\}');Hhb(gG,yqb,new jG(new fH,1));Hhb(bH,zqb,'\\left|\\begin{matrix} #1 \\end{matrix}\\right|');Hhb(gG,zqb,new jG(new fH,1));Hhb(bH,Aqb,'\\left\\|\\begin{matrix} #1 \\end{matrix}\\right\\|');Hhb(gG,Aqb,new jG(new fH,1));Hhb(bH,Bqb,'\\begin{array}{rcl} #1 \\end{array}');Hhb(gG,Bqb,new jG(new fH,1));Hhb(bH,'align@env','\\align@@env{ #1 }');Hhb(gG,'align@env',new jG(new fH,1));Hhb(bH,Cqb,'\\flalign@@env{ #1 }');Hhb(gG,Cqb,new jG(new fH,1));Hhb(bH,Dqb,'\\alignat@@env{#1}{ #2 }');Hhb(gG,Dqb,new jG(new fH,2));Hhb(bH,Eqb,'\\aligned@@env{ #1 }');Hhb(gG,Eqb,new jG(new fH,1));Hhb(bH,Fqb,'\\alignedat@@env{#1}{ #2 }');Hhb(gG,Fqb,new jG(new fH,2));Hhb(bH,Gqb,'\\multline@@env{ #1 }');Hhb(gG,Gqb,new jG(new fH,1));Hhb(bH,'cases@env','\\left\\{\\begin{array}{l@{\\!}l} #1 \\end{array}\\right.');Hhb(gG,'cases@env',new jG(new fH,1));Hhb(bH,'split@env','\\begin{array}{rl} #1 \\end{array}');Hhb(gG,'split@env',new jG(new fH,1));Hhb(bH,Hqb,'\\gather@@env{ #1 }');Hhb(gG,Hqb,new jG(new fH,1));Hhb(bH,Iqb,'\\gathered@@env{ #1 }');Hhb(gG,Iqb,new jG(new fH,1));Hhb(bH,'math@env','\\( #1 \\)');Hhb(gG,'math@env',new jG(new fH,1));Hhb(bH,Jqb,'\\[ #1 \\]');Hhb(gG,Jqb,new jG(new fH,1));Hhb(bH,Kqb,'\\mathop{\\mathrm{#1}}\\nolimits ');Hhb(gG,Kqb,new jG(new fH,1));Hhb(bH,Lqb,'\\newcommand{#1}{\\mathop{\\mathrm{#2}}\\nolimits}');Hhb(gG,Lqb,new jG(new fH,2));Hhb(bH,'substack','{\\scriptstyle\\begin{array}{c}#1\\end{array}}');Hhb(gG,'substack',new jG(new fH,1));Hhb(bH,'dfrac','\\genfrac{}{}{}{}{#1}{#2}');Hhb(gG,'dfrac',new jG(new fH,2));Hhb(bH,'tfrac','\\genfrac{}{}{}{1}{#1}{#2}');Hhb(gG,'tfrac',new jG(new fH,2));Hhb(bH,'dbinom','\\genfrac{(}{)}{0pt}{}{#1}{#2}');Hhb(gG,'dbinom',new jG(new fH,2));Hhb(bH,'tbinom','\\genfrac{(}{)}{0pt}{1}{#1}{#2}');Hhb(gG,'tbinom',new jG(new fH,2));Hhb(bH,'pmod','\\qquad\\mathbin{(\\mathrm{mod}\\ #1)}');Hhb(gG,'pmod',new jG(new fH,1));Hhb(bH,'mod','\\qquad\\mathbin{\\mathrm{mod}\\ #1}');Hhb(gG,'mod',new jG(new fH,1));Hhb(bH,'pod','\\qquad\\mathbin{(#1)}');Hhb(gG,'pod',new jG(new fH,1));Hhb(bH,'dddot','\\mathop{#1}\\limits^{...}');Hhb(gG,'dddot',new jG(new fH,1));Hhb(bH,'ddddot','\\mathop{#1}\\limits^{....}');Hhb(gG,'ddddot',new jG(new fH,1));Hhb(bH,'spdddot','^{\\mathrm{...}}');Hhb(gG,'spdddot',new jG(new fH,0));Hhb(bH,'spbreve','^{\\makeatletter\\sp@breve\\makeatother}');Hhb(gG,'spbreve',new jG(new fH,0));Hhb(bH,'sphat','^{\\makeatletter\\sp@hat\\makeatother}');Hhb(gG,'sphat',new jG(new fH,0));Hhb(bH,'spddot','^{\\displaystyle..}');Hhb(gG,'spddot',new jG(new fH,0));Hhb(bH,'spcheck','^{\\vee}');Hhb(gG,'spcheck',new jG(new fH,0));Hhb(bH,'sptilde','^{\\sim}');Hhb(gG,'sptilde',new jG(new fH,0));Hhb(bH,'spdot','^{\\displaystyle.}');Hhb(gG,'spdot',new jG(new fH,0));Hhb(bH,'d','\\underaccent{\\dot}{#1}');Hhb(gG,'d',new jG(new fH,1));Hhb(bH,'b','\\underaccent{\\bar}{#1}');Hhb(gG,'b',new jG(new fH,1));Hhb(bH,'Bra','\\left\\langle{#1}\\right\\vert');Hhb(gG,'Bra',new jG(new fH,1));Hhb(bH,'Ket','\\left\\vert{#1}\\right\\rangle');Hhb(gG,'Ket',new jG(new fH,1));Hhb(bH,Mqb,'{}^{\\text{#1}}');Hhb(gG,Mqb,new jG(new fH,1));Hhb(bH,Nqb,'{}_{\\text{#1}}');Hhb(gG,Nqb,new jG(new fH,1));Hhb(bH,'textit','\\mathit{\\text{#1}}');Hhb(gG,'textit',new jG(new fH,1));Hhb(bH,'textbf','\\mathbf{\\text{#1}}');Hhb(gG,'textbf',new jG(new fH,1));Hhb(bH,'textsf','\\mathsf{\\text{#1}}');Hhb(gG,'textsf',new jG(new fH,1));Hhb(bH,'texttt','\\mathtt{\\text{#1}}');Hhb(gG,'texttt',new jG(new fH,1));Hhb(bH,'textrm','\\text{#1}');Hhb(gG,'textrm',new jG(new fH,1));Hhb(bH,'degree','^\\circ');Hhb(gG,'degree',new jG(new fH,0));Hhb(bH,'with','\\mathbin{\\&}');Hhb(gG,'with',new jG(new fH,0));Hhb(bH,'parr','\\mathbin{\\rotatebox[origin=c]{180}{\\&}}');Hhb(gG,'parr',new jG(new fH,0));Hhb(bH,'copyright','\\textcircled{\\raisebox{0.2ex}{c}}');Hhb(gG,'copyright',new jG(new fH,0));Hhb(bH,'L','\\mathrm{\\polishlcross L}');Hhb(gG,'L',new jG(new fH,0));Hhb(bH,'l','\\mathrm{\\polishlcross l}');Hhb(gG,'l',new jG(new fH,0));Hhb(bH,'Join','\\mathop{\\rlap{\\ltimes}\\rtimes}');Hhb(gG,'Join',new jG(new fH,0));Hhb(bH,'questeq','{\\stackrel{?}{=}}');Hhb(gG,'questeq',new jG(new fH,0))}
function PY(){PY=Nv;Hhb((sz(),oz),'space','\\ ');Hhb(oz,'dollar',urb);Hhb(oz,' ','\\nbsp');Hhb(oz,'ne',vrb);Hhb(oz,'neq',vrb);Hhb(oz,'ldots','\\mathinner{\\ldotp\\ldotp\\ldotp}');Hhb(oz,'dotsc',wrb);Hhb(oz,'dots',wrb);Hhb(oz,'cdots','\\mathinner{\\cdotp\\cdotp\\cdotp}');Hhb(oz,'dotsb','\\cdots');Hhb(oz,'dotso',wrb);Hhb(oz,'dotsi','\\!\\cdots');Hhb(oz,'bowtie','\\mathrel\\triangleright\\joinrel\\mathrel\\triangleleft');Hhb(oz,'models','\\mathrel|\\joinrel\\equals');Hhb(oz,'Doteq',xrb);Hhb(oz,'{','\\lbrace');Hhb(oz,'}','\\rbrace');Hhb(oz,'|',yrb);Hhb(oz,'&','\\textampersand');Hhb(oz,'%','\\textpercent');Hhb(oz,'_','\\underscore');Hhb(oz,'$',urb);Hhb(oz,'@','\\jlatexmatharobase');Hhb(oz,'#','\\jlatexmathsharp');Hhb(oz,'relbar','\\mathrel{\\smash-}');Hhb(oz,'hookrightarrow','\\lhook\\joinrel\\joinrel\\joinrel\\rightarrow');Hhb(oz,'hookleftarrow','\\leftarrow\\joinrel\\joinrel\\joinrel\\rhook');Hhb(oz,'Longrightarrow','\\Relbar\\joinrel\\Rightarrow');Hhb(oz,'longrightarrow','\\relbar\\joinrel\\rightarrow');Hhb(oz,'Longleftarrow','\\Leftarrow\\joinrel\\Relbar');Hhb(oz,'longleftarrow','\\leftarrow\\joinrel\\relbar');Hhb(oz,'Longleftrightarrow','\\Leftarrow\\joinrel\\Rightarrow');Hhb(oz,'longleftrightarrow','\\leftarrow\\joinrel\\rightarrow');Hhb(oz,'iff','\\;\\Longleftrightarrow\\;');Hhb(oz,'implies','\\;\\Longrightarrow\\;');Hhb(oz,'impliedby','\\;\\Longleftarrow\\;');Hhb(oz,'mapsto','\\mapstochar\\rightarrow');Hhb(oz,'longmapsto','\\mapstochar\\longrightarrow');Hhb(oz,'log','\\mathop{\\mathrm{log}}\\nolimits');Hhb(oz,'lg','\\mathop{\\mathrm{lg}}\\nolimits');Hhb(oz,'ln',zrb);Hhb(oz,'ln',zrb);Hhb(oz,'lim','\\mathop{\\mathrm{lim}}');Hhb(oz,'limsup','\\mathop{\\mathrm{lim\\,sup}}');Hhb(oz,'liminf','\\mathop{\\mathrm{lim\\,inf}}');Hhb(oz,'injlim','\\mathop{\\mathrm{inj\\,lim}}');Hhb(oz,'projlim','\\mathop{\\mathrm{proj\\,lim}}');Hhb(oz,'varinjlim','\\mathop{\\underrightarrow{\\mathrm{lim}}}');Hhb(oz,'varprojlim','\\mathop{\\underleftarrow{\\mathrm{lim}}}');Hhb(oz,'varliminf','\\mathop{\\underline{\\mathrm{lim}}}');Hhb(oz,'varlimsup','\\mathop{\\overline{\\mathrm{lim}}}');Hhb(oz,'sin','\\mathop{\\mathrm{sin}}\\nolimits');Hhb(oz,'arcsin','\\mathop{\\mathrm{arcsin}}\\nolimits');Hhb(oz,'sinh','\\mathop{\\mathrm{sinh}}\\nolimits');Hhb(oz,'cos','\\mathop{\\mathrm{cos}}\\nolimits');Hhb(oz,'arccos','\\mathop{\\mathrm{arccos}}\\nolimits');Hhb(oz,'cot','\\mathop{\\mathrm{cot}}\\nolimits');Hhb(oz,'arccot','\\mathop{\\mathrm{arccot}}\\nolimits');Hhb(oz,'cosh','\\mathop{\\mathrm{cosh}}\\nolimits');Hhb(oz,'tan','\\mathop{\\mathrm{tan}}\\nolimits');Hhb(oz,'arctan','\\mathop{\\mathrm{arctan}}\\nolimits');Hhb(oz,'tanh','\\mathop{\\mathrm{tanh}}\\nolimits');Hhb(oz,'coth','\\mathop{\\mathrm{coth}}\\nolimits');Hhb(oz,'sec','\\mathop{\\mathrm{sec}}\\nolimits');Hhb(oz,'arcsec','\\mathop{\\mathrm{arcsec}}\\nolimits');Hhb(oz,'arccsc','\\mathop{\\mathrm{arccsc}}\\nolimits');Hhb(oz,'sech','\\mathop{\\mathrm{sech}}\\nolimits');Hhb(oz,'csc','\\mathop{\\mathrm{csc}}\\nolimits');Hhb(oz,'csch','\\mathop{\\mathrm{csch}}\\nolimits');Hhb(oz,'max','\\mathop{\\mathrm{max}}');Hhb(oz,'min','\\mathop{\\mathrm{min}}');Hhb(oz,'sup','\\mathop{\\mathrm{sup}}');Hhb(oz,'inf','\\mathop{\\mathrm{inf}}');Hhb(oz,'arg','\\mathop{\\mathrm{arg}}\\nolimits');Hhb(oz,'ker','\\mathop{\\mathrm{ker}}\\nolimits');Hhb(oz,'dim','\\mathop{\\mathrm{dim}}\\nolimits');Hhb(oz,'hom','\\mathop{\\mathrm{hom}}\\nolimits');Hhb(oz,'det','\\mathop{\\mathrm{det}}');Hhb(oz,'exp','\\mathop{\\mathrm{exp}}\\nolimits');Hhb(oz,'Pr','\\mathop{\\mathrm{Pr}}');Hhb(oz,'gcd','\\mathop{\\mathrm{gcd}}');Hhb(oz,'deg','\\mathop{\\mathrm{deg}}\\nolimits');Hhb(oz,'bmod','\\:\\mathbin{\\mathrm{mod}}\\:');Hhb(oz,'JLaTeXMath','\\mathbb{J}\\LaTeX Math');Hhb(oz,'Mapsto','\\Mapstochar\\Rightarrow');Hhb(oz,'mapsfrom','\\leftarrow\\mapsfromchar');Hhb(oz,'Mapsfrom','\\Leftarrow\\Mapsfromchar');Hhb(oz,'Longmapsto','\\Mapstochar\\Longrightarrow');Hhb(oz,'longmapsfrom','\\longleftarrow\\mapsfromchar');Hhb(oz,'Longmapsfrom','\\Longleftarrow\\Mapsfromchar');Hhb(oz,'arrowvert','\\vert');Hhb(oz,'Arrowvert',yrb);Hhb(oz,'aa','\\mathring{a}');Hhb(oz,'AA','\\mathring{A}');Hhb(oz,'ddag','\\ddagger');Hhb(oz,'dag','\\dagger');Hhb(oz,'Doteq',xrb);Hhb(oz,'doublecup','\\Cup');Hhb(oz,'doublecap','\\Cap');Hhb(oz,'llless','\\lll');Hhb(oz,'gggtr','\\ggg');Hhb(oz,'Alpha','\\mathord{\\mathrm{A}}');Hhb(oz,'Beta','\\mathord{\\mathrm{B}}');Hhb(oz,'Epsilon','\\mathord{\\mathrm{E}}');Hhb(oz,'Zeta','\\mathord{\\mathrm{Z}}');Hhb(oz,'Eta','\\mathord{\\mathrm{H}}');Hhb(oz,'Iota','\\mathord{\\mathrm{I}}');Hhb(oz,'Kappa','\\mathord{\\mathrm{K}}');Hhb(oz,'Mu','\\mathord{\\mathrm{M}}');Hhb(oz,'Nu','\\mathord{\\mathrm{N}}');Hhb(oz,'Omicron','\\mathord{\\mathrm{O}}');Hhb(oz,'Rho','\\mathord{\\mathrm{P}}');Hhb(oz,'Tau','\\mathord{\\mathrm{T}}');Hhb(oz,'Chi','\\mathord{\\mathrm{X}}');Hhb(oz,'hdots',wrb);Hhb(oz,'restriction','\\upharpoonright');Hhb(oz,'celsius','\\mathord{{}^\\circ\\mathrm{C}}');Hhb(oz,'micro','\\textmu');Hhb(oz,'marker','\\kern{0.25ex}\\rule{0.5ex}{1.2ex}\\kern{0.25ex}');Hhb(oz,'hybull','\\rule[0.6ex]{1ex}{0.2ex}');Hhb(oz,'block','\\rule{1ex}{1.2ex}');Hhb(oz,'uhblk','\\rule[0.6ex]{1ex}{0.6ex}');Hhb(oz,'lhblk','\\rule{1ex}{0.6ex}');Hhb(oz,'notin','\\not\\in');Hhb(oz,'rVert',yrb);Hhb(oz,'lVert',yrb)}
function p6(){p6=Nv;o6=new Dkb(256);J2=new s6('BASIC_LATIN',fg(Zf(Zt,1),Wnb,2,6,['BASIC LATIN','BASICLATIN']));y4=new s6('LATIN_1_SUPPLEMENT',fg(Zf(Zt,1),Wnb,2,6,['LATIN-1 SUPPLEMENT','LATIN-1SUPPLEMENT']));z4=new s6('LATIN_EXTENDED_A',fg(Zf(Zt,1),Wnb,2,6,['LATIN EXTENDED-A','LATINEXTENDED-A']));B4=new s6('LATIN_EXTENDED_B',fg(Zf(Zt,1),Wnb,2,6,['LATIN EXTENDED-B','LATINEXTENDED-B']));k4=new s6('IPA_EXTENSIONS',fg(Zf(Zt,1),Wnb,2,6,['IPA EXTENSIONS','IPAEXTENSIONS']));D5=new s6('SPACING_MODIFIER_LETTERS',fg(Zf(Zt,1),Wnb,2,6,['SPACING MODIFIER LETTERS','SPACINGMODIFIERLETTERS']));i3=new s6('COMBINING_DIACRITICAL_MARKS',fg(Zf(Zt,1),Wnb,2,6,['COMBINING DIACRITICAL MARKS','COMBININGDIACRITICALMARKS']));T3=new s6('GREEK',fg(Zf(Zt,1),Wnb,2,6,['GREEK AND COPTIC','GREEKANDCOPTIC']));u3=new q6('CYRILLIC');D2=new q6('ARMENIAN');c4=new q6('HEBREW');z2=new q6('ARABIC');z3=new q6('DEVANAGARI');L2=new q6('BENGALI');W3=new q6('GURMUKHI');V3=new q6('GUJARATI');m5=new q6('ORIYA');W5=new q6('TAMIL');X5=new q6('TELUGU');q4=new q6('KANNADA');O4=new q6('MALAYALAM');Z5=new q6('THAI');x4=new q6('LAO');$5=new q6('TIBETAN');P3=new q6('GEORGIAN');Z3=new s6('HANGUL_JAMO',fg(Zf(Zt,1),Wnb,2,6,['HANGUL JAMO','HANGULJAMO']));A4=new s6('LATIN_EXTENDED_ADDITIONAL',fg(Zf(Zt,1),Wnb,2,6,['LATIN EXTENDED ADDITIONAL','LATINEXTENDEDADDITIONAL']));U3=new s6('GREEK_EXTENDED',fg(Zf(Zt,1),Wnb,2,6,['GREEK EXTENDED','GREEKEXTENDED']));N3=new s6('GENERAL_PUNCTUATION',fg(Zf(Zt,1),Wnb,2,6,['GENERAL PUNCTUATION','GENERALPUNCTUATION']));G5=new s6('SUPERSCRIPTS_AND_SUBSCRIPTS',fg(Zf(Zt,1),Wnb,2,6,['SUPERSCRIPTS AND SUBSCRIPTS','SUPERSCRIPTSANDSUBSCRIPTS']));s3=new s6('CURRENCY_SYMBOLS',fg(Zf(Zt,1),Wnb,2,6,['CURRENCY SYMBOLS','CURRENCYSYMBOLS']));l3=new s6('COMBINING_MARKS_FOR_SYMBOLS',fg(Zf(Zt,1),Wnb,2,6,['COMBINING DIACRITICAL MARKS FOR SYMBOLS','COMBININGDIACRITICALMARKSFORSYMBOLS','COMBINING MARKS FOR SYMBOLS','COMBININGMARKSFORSYMBOLS']));F4=new s6('LETTERLIKE_SYMBOLS',fg(Zf(Zt,1),Wnb,2,6,['LETTERLIKE SYMBOLS','LETTERLIKESYMBOLS']));e5=new s6('NUMBER_FORMS',fg(Zf(Zt,1),Wnb,2,6,['NUMBER FORMS','NUMBERFORMS']));E2=new q6('ARROWS');R4=new s6('MATHEMATICAL_OPERATORS',fg(Zf(Zt,1),Wnb,2,6,['MATHEMATICAL OPERATORS','MATHEMATICALOPERATORS']));Y4=new s6('MISCELLANEOUS_TECHNICAL',fg(Zf(Zt,1),Wnb,2,6,['MISCELLANEOUS TECHNICAL','MISCELLANEOUSTECHNICAL']));n3=new s6('CONTROL_PICTURES',fg(Zf(Zt,1),Wnb,2,6,['CONTROL PICTURES','CONTROLPICTURES']));l5=new s6('OPTICAL_CHARACTER_RECOGNITION',fg(Zf(Zt,1),Wnb,2,6,['OPTICAL CHARACTER RECOGNITION','OPTICALCHARACTERRECOGNITION']));F3=new s6('ENCLOSED_ALPHANUMERICS',fg(Zf(Zt,1),Wnb,2,6,['ENCLOSED ALPHANUMERICS','ENCLOSEDALPHANUMERICS']));P2=new s6('BOX_DRAWING',fg(Zf(Zt,1),Wnb,2,6,['BOX DRAWING','BOXDRAWING']));M2=new s6('BLOCK_ELEMENTS',fg(Zf(Zt,1),Wnb,2,6,['BLOCK ELEMENTS','BLOCKELEMENTS']));O3=new s6('GEOMETRIC_SHAPES',fg(Zf(Zt,1),Wnb,2,6,['GEOMETRIC SHAPES','GEOMETRICSHAPES']));V4=new s6('MISCELLANEOUS_SYMBOLS',fg(Zf(Zt,1),Wnb,2,6,['MISCELLANEOUS SYMBOLS','MISCELLANEOUSSYMBOLS']));B3=new q6('DINGBATS');c3=new s6('CJK_SYMBOLS_AND_PUNCTUATION',fg(Zf(Zt,1),Wnb,2,6,['CJK SYMBOLS AND PUNCTUATION','CJKSYMBOLSANDPUNCTUATION']));f4=new q6('HIRAGANA');r4=new q6('KATAKANA');N2=new q6('BOPOMOFO');Y3=new s6('HANGUL_COMPATIBILITY_JAMO',fg(Zf(Zt,1),Wnb,2,6,['HANGUL COMPATIBILITY JAMO','HANGULCOMPATIBILITYJAMO']));o4=new q6('KANBUN');H3=new s6('ENCLOSED_CJK_LETTERS_AND_MONTHS',fg(Zf(Zt,1),Wnb,2,6,['ENCLOSED CJK LETTERS AND MONTHS','ENCLOSEDCJKLETTERSANDMONTHS']));Y2=new s6('CJK_COMPATIBILITY',fg(Zf(Zt,1),Wnb,2,6,['CJK COMPATIBILITY','CJKCOMPATIBILITY']));d3=new s6('CJK_UNIFIED_IDEOGRAPHS',fg(Zf(Zt,1),Wnb,2,6,['CJK UNIFIED IDEOGRAPHS','CJKUNIFIEDIDEOGRAPHS']));a4=new s6('HANGUL_SYLLABLES',fg(Zf(Zt,1),Wnb,2,6,['HANGUL SYLLABLES','HANGULSYLLABLES']));u5=new s6('PRIVATE_USE_AREA',fg(Zf(Zt,1),Wnb,2,6,['PRIVATE USE AREA','PRIVATEUSEAREA']));$2=new s6('CJK_COMPATIBILITY_IDEOGRAPHS',fg(Zf(Zt,1),Wnb,2,6,['CJK COMPATIBILITY IDEOGRAPHS','CJKCOMPATIBILITYIDEOGRAPHS']));v2=new s6('ALPHABETIC_PRESENTATION_FORMS',fg(Zf(Zt,1),Wnb,2,6,['ALPHABETIC PRESENTATION FORMS','ALPHABETICPRESENTATIONFORMS']));A2=new s6('ARABIC_PRESENTATION_FORMS_A',fg(Zf(Zt,1),Wnb,2,6,['ARABIC PRESENTATION FORMS-A','ARABICPRESENTATIONFORMS-A']));k3=new s6('COMBINING_HALF_MARKS',fg(Zf(Zt,1),Wnb,2,6,['COMBINING HALF MARKS','COMBININGHALFMARKS']));Z2=new s6('CJK_COMPATIBILITY_FORMS',fg(Zf(Zt,1),Wnb,2,6,['CJK COMPATIBILITY FORMS','CJKCOMPATIBILITYFORMS']));C5=new s6('SMALL_FORM_VARIANTS',fg(Zf(Zt,1),Wnb,2,6,['SMALL FORM VARIANTS','SMALLFORMVARIANTS']));B2=new s6('ARABIC_PRESENTATION_FORMS_B',fg(Zf(Zt,1),Wnb,2,6,['ARABIC PRESENTATION FORMS-B','ARABICPRESENTATIONFORMS-B']));X3=new s6('HALFWIDTH_AND_FULLWIDTH_FORMS',fg(Zf(Zt,1),Wnb,2,6,['HALFWIDTH AND FULLWIDTH FORMS','HALFWIDTHANDFULLWIDTHFORMS']));E5=new q6('SPECIALS');O5=new q6('SYRIAC');Y5=new q6('THAANA');B5=new q6('SINHALA');a5=new q6('MYANMAR');J3=new q6('ETHIOPIC');X2=new q6('CHEROKEE');c6=new s6('UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS',fg(Zf(Zt,1),Wnb,2,6,['UNIFIED CANADIAN ABORIGINAL SYLLABICS','UNIFIEDCANADIANABORIGINALSYLLABICS']));f5=new q6('OGHAM');x5=new q6('RUNIC');v4=new q6('KHMER');$4=new q6('MONGOLIAN');R2=new s6('BRAILLE_PATTERNS',fg(Zf(Zt,1),Wnb,2,6,['BRAILLE PATTERNS','BRAILLEPATTERNS']));a3=new s6('CJK_RADICALS_SUPPLEMENT',fg(Zf(Zt,1),Wnb,2,6,['CJK RADICALS SUPPLEMENT','CJKRADICALSSUPPLEMENT']));p4=new s6('KANGXI_RADICALS',fg(Zf(Zt,1),Wnb,2,6,['KANGXI RADICALS','KANGXIRADICALS']));g4=new s6('IDEOGRAPHIC_DESCRIPTION_CHARACTERS',fg(Zf(Zt,1),Wnb,2,6,['IDEOGRAPHIC DESCRIPTION CHARACTERS','IDEOGRAPHICDESCRIPTIONCHARACTERS']));O2=new s6('BOPOMOFO_EXTENDED',fg(Zf(Zt,1),Wnb,2,6,['BOPOMOFO EXTENDED','BOPOMOFOEXTENDED']));e3=new s6('CJK_UNIFIED_IDEOGRAPHS_EXTENSION_A',fg(Zf(Zt,1),Wnb,2,6,['CJK UNIFIED IDEOGRAPHS EXTENSION A','CJKUNIFIEDIDEOGRAPHSEXTENSIONA']));l6=new s6('YI_SYLLABLES',fg(Zf(Zt,1),Wnb,2,6,['YI SYLLABLES','YISYLLABLES']));k6=new s6('YI_RADICALS',fg(Zf(Zt,1),Wnb,2,6,['YI RADICALS','YIRADICALS']));x3=new s6('CYRILLIC_SUPPLEMENTARY',fg(Zf(Zt,1),Wnb,2,6,['CYRILLIC SUPPLEMENTARY','CYRILLICSUPPLEMENTARY','CYRILLIC SUPPLEMENT','CYRILLICSUPPLEMENT']));P5=new q6('TAGALOG');b4=new q6('HANUNOO');T2=new q6('BUHID');Q5=new q6('TAGBANWA');G4=new q6('LIMBU');S5=new s6('TAI_LE',fg(Zf(Zt,1),Wnb,2,6,['TAI LE','TAILE']));w4=new s6('KHMER_SYMBOLS',fg(Zf(Zt,1),Wnb,2,6,['KHMER SYMBOLS','KHMERSYMBOLS']));r5=new s6('PHONETIC_EXTENSIONS',fg(Zf(Zt,1),Wnb,2,6,['PHONETIC EXTENSIONS','PHONETICEXTENSIONS']));T4=new s6('MISCELLANEOUS_MATHEMATICAL_SYMBOLS_A',fg(Zf(Zt,1),Wnb,2,6,['MISCELLANEOUS MATHEMATICAL SYMBOLS-A','MISCELLANEOUSMATHEMATICALSYMBOLS-A']));H5=new s6('SUPPLEMENTAL_ARROWS_A',fg(Zf(Zt,1),Wnb,2,6,['SUPPLEMENTAL ARROWS-A','SUPPLEMENTALARROWS-A']));I5=new s6('SUPPLEMENTAL_ARROWS_B',fg(Zf(Zt,1),Wnb,2,6,['SUPPLEMENTAL ARROWS-B','SUPPLEMENTALARROWS-B']));U4=new s6('MISCELLANEOUS_MATHEMATICAL_SYMBOLS_B',fg(Zf(Zt,1),Wnb,2,6,['MISCELLANEOUS MATHEMATICAL SYMBOLS-B','MISCELLANEOUSMATHEMATICALSYMBOLS-B']));J5=new s6('SUPPLEMENTAL_MATHEMATICAL_OPERATORS',fg(Zf(Zt,1),Wnb,2,6,['SUPPLEMENTAL MATHEMATICAL OPERATORS','SUPPLEMENTALMATHEMATICALOPERATORS']));W4=new s6('MISCELLANEOUS_SYMBOLS_AND_ARROWS',fg(Zf(Zt,1),Wnb,2,6,['MISCELLANEOUS SYMBOLS AND ARROWS','MISCELLANEOUSSYMBOLSANDARROWS']));s4=new s6('KATAKANA_PHONETIC_EXTENSIONS',fg(Zf(Zt,1),Wnb,2,6,['KATAKANA PHONETIC EXTENSIONS','KATAKANAPHONETICEXTENSIONS']));j6=new s6('YIJING_HEXAGRAM_SYMBOLS',fg(Zf(Zt,1),Wnb,2,6,['YIJING HEXAGRAM SYMBOLS','YIJINGHEXAGRAMSYMBOLS']));f6=new s6('VARIATION_SELECTORS',fg(Zf(Zt,1),Wnb,2,6,['VARIATION SELECTORS','VARIATIONSELECTORS']));I4=new s6('LINEAR_B_SYLLABARY',fg(Zf(Zt,1),Wnb,2,6,['LINEAR B SYLLABARY','LINEARBSYLLABARY']));H4=new s6('LINEAR_B_IDEOGRAMS',fg(Zf(Zt,1),Wnb,2,6,['LINEAR B IDEOGRAMS','LINEARBIDEOGRAMS']));t2=new s6('AEGEAN_NUMBERS',fg(Zf(Zt,1),Wnb,2,6,['AEGEAN NUMBERS','AEGEANNUMBERS']));g5=new s6('OLD_ITALIC',fg(Zf(Zt,1),Wnb,2,6,['OLD ITALIC','OLDITALIC']));S3=new q6('GOTHIC');b6=new q6('UGARITIC');y3=new q6('DESERET');A5=new q6('SHAVIAN');n5=new q6('OSMANYA');t3=new s6('CYPRIOT_SYLLABARY',fg(Zf(Zt,1),Wnb,2,6,['CYPRIOT SYLLABARY','CYPRIOTSYLLABARY']));U2=new s6('BYZANTINE_MUSICAL_SYMBOLS',fg(Zf(Zt,1),Wnb,2,6,['BYZANTINE MUSICAL SYMBOLS','BYZANTINEMUSICALSYMBOLS']));_4=new s6('MUSICAL_SYMBOLS',fg(Zf(Zt,1),Wnb,2,6,['MUSICAL SYMBOLS','MUSICALSYMBOLS']));V5=new s6('TAI_XUAN_JING_SYMBOLS',fg(Zf(Zt,1),Wnb,2,6,['TAI XUAN JING SYMBOLS','TAIXUANJINGSYMBOLS']));Q4=new s6('MATHEMATICAL_ALPHANUMERIC_SYMBOLS',fg(Zf(Zt,1),Wnb,2,6,['MATHEMATICAL ALPHANUMERIC SYMBOLS','MATHEMATICALALPHANUMERICSYMBOLS']));f3=new s6('CJK_UNIFIED_IDEOGRAPHS_EXTENSION_B',fg(Zf(Zt,1),Wnb,2,6,['CJK UNIFIED IDEOGRAPHS EXTENSION B','CJKUNIFIEDIDEOGRAPHSEXTENSIONB']));_2=new s6('CJK_COMPATIBILITY_IDEOGRAPHS_SUPPLEMENT',fg(Zf(Zt,1),Wnb,2,6,['CJK COMPATIBILITY IDEOGRAPHS SUPPLEMENT','CJKCOMPATIBILITYIDEOGRAPHSSUPPLEMENT']));R5=new q6('TAGS');g6=new s6('VARIATION_SELECTORS_SUPPLEMENT',fg(Zf(Zt,1),Wnb,2,6,['VARIATION SELECTORS SUPPLEMENT','VARIATIONSELECTORSSUPPLEMENT']));L5=new s6('SUPPLEMENTARY_PRIVATE_USE_AREA_A',fg(Zf(Zt,1),Wnb,2,6,['SUPPLEMENTARY PRIVATE USE AREA-A','SUPPLEMENTARYPRIVATEUSEAREA-A']));M5=new s6('SUPPLEMENTARY_PRIVATE_USE_AREA_B',fg(Zf(Zt,1),Wnb,2,6,['SUPPLEMENTARY PRIVATE USE AREA-B','SUPPLEMENTARYPRIVATEUSEAREA-B']));e4=new s6('HIGH_SURROGATES',fg(Zf(Zt,1),Wnb,2,6,['HIGH SURROGATES','HIGHSURROGATES']));d4=new s6('HIGH_PRIVATE_USE_SURROGATES',fg(Zf(Zt,1),Wnb,2,6,['HIGH PRIVATE USE SURROGATES','HIGHPRIVATEUSESURROGATES']));K4=new s6('LOW_SURROGATES',fg(Zf(Zt,1),Wnb,2,6,['LOW SURROGATES','LOWSURROGATES']));C2=new s6('ARABIC_SUPPLEMENT',fg(Zf(Zt,1),Wnb,2,6,['ARABIC SUPPLEMENT','ARABICSUPPLEMENT']));d5=new q6('NKO');y5=new q6('SAMARITAN');P4=new q6('MANDAIC');M3=new s6('ETHIOPIC_SUPPLEMENT',fg(Zf(Zt,1),Wnb,2,6,['ETHIOPIC SUPPLEMENT','ETHIOPICSUPPLEMENT']));d6=new s6('UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS_EXTENDED',fg(Zf(Zt,1),Wnb,2,6,['UNIFIED CANADIAN ABORIGINAL SYLLABICS EXTENDED','UNIFIEDCANADIANABORIGINALSYLLABICSEXTENDED']));c5=new s6('NEW_TAI_LUE',fg(Zf(Zt,1),Wnb,2,6,['NEW TAI LUE','NEWTAILUE']));S2=new q6('BUGINESE');T5=new s6('TAI_THAM',fg(Zf(Zt,1),Wnb,2,6,['TAI THAM','TAITHAM']));G2=new q6('BALINESE');F5=new q6('SUNDANESE');K2=new q6('BATAK');E4=new q6('LEPCHA');k5=new s6('OL_CHIKI',fg(Zf(Zt,1),Wnb,2,6,['OL CHIKI','OLCHIKI']));h6=new s6('VEDIC_EXTENSIONS',fg(Zf(Zt,1),Wnb,2,6,['VEDIC EXTENSIONS','VEDICEXTENSIONS']));s5=new s6('PHONETIC_EXTENSIONS_SUPPLEMENT',fg(Zf(Zt,1),Wnb,2,6,['PHONETIC EXTENSIONS SUPPLEMENT','PHONETICEXTENSIONSSUPPLEMENT']));j3=new s6('COMBINING_DIACRITICAL_MARKS_SUPPLEMENT',fg(Zf(Zt,1),Wnb,2,6,['COMBINING DIACRITICAL MARKS SUPPLEMENT','COMBININGDIACRITICALMARKSSUPPLEMENT']));R3=new q6('GLAGOLITIC');C4=new s6('LATIN_EXTENDED_C',fg(Zf(Zt,1),Wnb,2,6,['LATIN EXTENDED-C','LATINEXTENDED-C']));o3=new q6('COPTIC');Q3=new s6('GEORGIAN_SUPPLEMENT',fg(Zf(Zt,1),Wnb,2,6,['GEORGIAN SUPPLEMENT','GEORGIANSUPPLEMENT']));_5=new q6('TIFINAGH');K3=new s6('ETHIOPIC_EXTENDED',fg(Zf(Zt,1),Wnb,2,6,['ETHIOPIC EXTENDED','ETHIOPICEXTENDED']));v3=new s6('CYRILLIC_EXTENDED_A',fg(Zf(Zt,1),Wnb,2,6,['CYRILLIC EXTENDED-A','CYRILLICEXTENDED-A']));K5=new s6('SUPPLEMENTAL_PUNCTUATION',fg(Zf(Zt,1),Wnb,2,6,['SUPPLEMENTAL PUNCTUATION','SUPPLEMENTALPUNCTUATION']));b3=new s6('CJK_STROKES',fg(Zf(Zt,1),Wnb,2,6,['CJK STROKES','CJKSTROKES']));J4=new q6('LISU');e6=new q6('VAI');w3=new s6('CYRILLIC_EXTENDED_B',fg(Zf(Zt,1),Wnb,2,6,['CYRILLIC EXTENDED-B','CYRILLICEXTENDED-B']));H2=new q6('BAMUM');Z4=new s6('MODIFIER_TONE_LETTERS',fg(Zf(Zt,1),Wnb,2,6,['MODIFIER TONE LETTERS','MODIFIERTONELETTERS']));D4=new s6('LATIN_EXTENDED_D',fg(Zf(Zt,1),Wnb,2,6,['LATIN EXTENDED-D','LATINEXTENDED-D']));N5=new s6('SYLOTI_NAGRI',fg(Zf(Zt,1),Wnb,2,6,['SYLOTI NAGRI','SYLOTINAGRI']));m3=new s6('COMMON_INDIC_NUMBER_FORMS',fg(Zf(Zt,1),Wnb,2,6,['COMMON INDIC NUMBER FORMS','COMMONINDICNUMBERFORMS']));o5=new r6;z5=new q6('SAURASHTRA');A3=new s6('DEVANAGARI_EXTENDED',fg(Zf(Zt,1),Wnb,2,6,['DEVANAGARI EXTENDED','DEVANAGARIEXTENDED']));t4=new s6('KAYAH_LI',fg(Zf(Zt,1),Wnb,2,6,['KAYAH LI','KAYAHLI']));v5=new q6('REJANG');$3=new s6('HANGUL_JAMO_EXTENDED_A',fg(Zf(Zt,1),Wnb,2,6,['HANGUL JAMO EXTENDED-A','HANGULJAMOEXTENDED-A']));l4=new q6('JAVANESE');W2=new q6('CHAM');b5=new s6('MYANMAR_EXTENDED_A',fg(Zf(Zt,1),Wnb,2,6,['MYANMAR EXTENDED-A','MYANMAREXTENDED-A']));U5=new s6('TAI_VIET',fg(Zf(Zt,1),Wnb,2,6,['TAI VIET','TAIVIET']));L3=new s6('ETHIOPIC_EXTENDED_A',fg(Zf(Zt,1),Wnb,2,6,['ETHIOPIC EXTENDED-A','ETHIOPICEXTENDED-A']));S4=new s6('MEETEI_MAYEK',fg(Zf(Zt,1),Wnb,2,6,['MEETEI MAYEK','MEETEIMAYEK']));_3=new s6('HANGUL_JAMO_EXTENDED_B',fg(Zf(Zt,1),Wnb,2,6,['HANGUL JAMO EXTENDED-B','HANGULJAMOEXTENDED-B']));i6=new s6('VERTICAL_FORMS',fg(Zf(Zt,1),Wnb,2,6,['VERTICAL FORMS','VERTICALFORMS']));x2=new s6('ANCIENT_GREEK_NUMBERS',fg(Zf(Zt,1),Wnb,2,6,['ANCIENT GREEK NUMBERS','ANCIENTGREEKNUMBERS']));y2=new s6('ANCIENT_SYMBOLS',fg(Zf(Zt,1),Wnb,2,6,['ANCIENT SYMBOLS','ANCIENTSYMBOLS']));p5=new s6('PHAISTOS_DISC',fg(Zf(Zt,1),Wnb,2,6,['PHAISTOS DISC','PHAISTOSDISC']));L4=new q6('LYCIAN');V2=new q6('CARIAN');h5=new s6('OLD_PERSIAN',fg(Zf(Zt,1),Wnb,2,6,['OLD PERSIAN','OLDPERSIAN']));h4=new s6('IMPERIAL_ARAMAIC',fg(Zf(Zt,1),Wnb,2,6,['IMPERIAL ARAMAIC','IMPERIALARAMAIC']));q5=new q6('PHOENICIAN');M4=new q6('LYDIAN');u4=new q6('KHAROSHTHI');i5=new s6('OLD_SOUTH_ARABIAN',fg(Zf(Zt,1),Wnb,2,6,['OLD SOUTH ARABIAN','OLDSOUTHARABIAN']));F2=new q6('AVESTAN');j4=new s6('INSCRIPTIONAL_PARTHIAN',fg(Zf(Zt,1),Wnb,2,6,['INSCRIPTIONAL PARTHIAN','INSCRIPTIONALPARTHIAN']));i4=new s6('INSCRIPTIONAL_PAHLAVI',fg(Zf(Zt,1),Wnb,2,6,['INSCRIPTIONAL PAHLAVI','INSCRIPTIONALPAHLAVI']));j5=new s6('OLD_TURKIC',fg(Zf(Zt,1),Wnb,2,6,['OLD TURKIC','OLDTURKIC']));w5=new s6('RUMI_NUMERAL_SYMBOLS',fg(Zf(Zt,1),Wnb,2,6,['RUMI NUMERAL SYMBOLS','RUMINUMERALSYMBOLS']));Q2=new q6('BRAHMI');m4=new q6('KAITHI');q3=new q6('CUNEIFORM');r3=new s6('CUNEIFORM_NUMBERS_AND_PUNCTUATION',fg(Zf(Zt,1),Wnb,2,6,['CUNEIFORM NUMBERS AND PUNCTUATION','CUNEIFORMNUMBERSANDPUNCTUATION']));D3=new s6('EGYPTIAN_HIEROGLYPHS',fg(Zf(Zt,1),Wnb,2,6,['EGYPTIAN HIEROGLYPHS','EGYPTIANHIEROGLYPHS']));I2=new s6('BAMUM_SUPPLEMENT',fg(Zf(Zt,1),Wnb,2,6,['BAMUM SUPPLEMENT','BAMUMSUPPLEMENT']));n4=new s6('KANA_SUPPLEMENT',fg(Zf(Zt,1),Wnb,2,6,['KANA SUPPLEMENT','KANASUPPLEMENT']));w2=new s6('ANCIENT_GREEK_MUSICAL_NOTATION',fg(Zf(Zt,1),Wnb,2,6,['ANCIENT GREEK MUSICAL NOTATION','ANCIENTGREEKMUSICALNOTATION']));p3=new s6('COUNTING_ROD_NUMERALS',fg(Zf(Zt,1),Wnb,2,6,['COUNTING ROD NUMERALS','COUNTINGRODNUMERALS']));N4=new s6('MAHJONG_TILES',fg(Zf(Zt,1),Wnb,2,6,['MAHJONG TILES','MAHJONGTILES']));C3=new s6('DOMINO_TILES',fg(Zf(Zt,1),Wnb,2,6,['DOMINO TILES','DOMINOTILES']));t5=new s6('PLAYING_CARDS',fg(Zf(Zt,1),Wnb,2,6,['PLAYING CARDS','PLAYINGCARDS']));G3=new s6('ENCLOSED_ALPHANUMERIC_SUPPLEMENT',fg(Zf(Zt,1),Wnb,2,6,['ENCLOSED ALPHANUMERIC SUPPLEMENT','ENCLOSEDALPHANUMERICSUPPLEMENT']));I3=new s6('ENCLOSED_IDEOGRAPHIC_SUPPLEMENT',fg(Zf(Zt,1),Wnb,2,6,['ENCLOSED IDEOGRAPHIC SUPPLEMENT','ENCLOSEDIDEOGRAPHICSUPPLEMENT']));X4=new s6('MISCELLANEOUS_SYMBOLS_AND_PICTOGRAPHS',fg(Zf(Zt,1),Wnb,2,6,['MISCELLANEOUS SYMBOLS AND PICTOGRAPHS','MISCELLANEOUSSYMBOLSANDPICTOGRAPHS']));E3=new q6('EMOTICONS');a6=new s6('TRANSPORT_AND_MAP_SYMBOLS',fg(Zf(Zt,1),Wnb,2,6,['TRANSPORT AND MAP SYMBOLS','TRANSPORTANDMAPSYMBOLS']));u2=new s6('ALCHEMICAL_SYMBOLS',fg(Zf(Zt,1),Wnb,2,6,['ALCHEMICAL SYMBOLS','ALCHEMICALSYMBOLS']));g3=new s6('CJK_UNIFIED_IDEOGRAPHS_EXTENSION_C',fg(Zf(Zt,1),Wnb,2,6,['CJK UNIFIED IDEOGRAPHS EXTENSION C','CJKUNIFIEDIDEOGRAPHSEXTENSIONC']));h3=new s6('CJK_UNIFIED_IDEOGRAPHS_EXTENSION_D',fg(Zf(Zt,1),Wnb,2,6,['CJK UNIFIED IDEOGRAPHS EXTENSION D','CJKUNIFIEDIDEOGRAPHSEXTENSIOND']));m6=fg(Zf(fh,1),Ypb,41,15,[0,128,256,384,592,688,768,880,1024,1280,1328,1424,1536,1792,1872,1920,1984,2048,2112,2144,2304,2432,2560,2688,2816,2944,3072,3200,3328,3456,3584,3712,3840,4096,4256,4352,4608,4992,5024,5120,5760,5792,5888,5920,5952,5984,6016,6144,6320,6400,6480,6528,6624,6656,6688,6832,6912,7040,7104,7168,7248,7296,7376,7424,7552,7616,7680,7936,8192,8304,8352,8400,8448,8528,8592,8704,8960,9216,9280,9312,9472,9600,9632,9728,9984,10176,10224,10240,10496,10624,10752,11008,11264,11360,11392,11520,11568,11648,11744,11776,11904,12032,12256,12272,12288,12352,12448,12544,12592,12688,12704,12736,12784,12800,13056,13312,19904,19968,40960,42128,42192,42240,42560,42656,42752,42784,43008,43056,43072,43136,43232,43264,43312,43360,43392,43488,43520,43616,43648,43744,43776,43824,43968,44032,55216,55296,56192,56320,57344,63744,64256,64336,65024,65040,65056,65072,65104,65136,65280,65520,job,65664,65792,65856,65936,66000,66048,66176,66208,66272,66304,66352,66384,66432,66464,66528,66560,66640,66688,66736,67584,67648,67680,67840,67872,67904,68096,68192,68224,68352,68416,68448,68480,68608,68688,69216,69248,69632,69760,69840,73728,74752,74880,77824,78896,92160,92736,110592,110848,118784,119040,119296,119376,119552,119648,119680,119808,120832,126976,127024,127136,127232,127488,127744,128512,128592,128640,128768,128896,lob,173792,173824,177984,178208,194560,195104,917504,917632,917760,918000,983040,nob]);n6=fg(Zf(Yq,1),vnb,9,0,[J2,y4,z4,B4,k4,D5,i3,T3,u3,x3,D2,c4,z2,O5,C2,Y5,d5,y5,P4,null,z3,L2,W3,V3,m5,W5,X5,q4,O4,B5,Z5,x4,$5,a5,P3,Z3,J3,M3,X2,c6,f5,x5,P5,b4,T2,Q5,v4,$4,d6,G4,S5,c5,w4,S2,T5,null,G2,F5,K2,E4,k5,null,h6,r5,s5,j3,A4,U3,N3,G5,s3,l3,F4,e5,E2,R4,Y4,n3,l5,F3,P2,M2,O3,V4,B3,T4,H5,R2,I5,U4,J5,W4,R3,C4,o3,Q3,_5,K3,v3,K5,a3,p4,null,g4,c3,f4,r4,N2,Y3,o4,O2,b3,s4,H3,Y2,e3,j6,d3,l6,k6,J4,e6,w3,H2,Z4,D4,N5,m3,o5,z5,A3,t4,v5,$3,l4,null,W2,b5,U5,null,L3,null,S4,a4,_3,e4,d4,K4,u5,$2,v2,A2,f6,i6,k3,Z2,C5,B2,X3,E5,I4,H4,t2,x2,y2,p5,null,L4,V2,null,g5,S3,null,b6,h5,null,y3,A5,n5,null,t3,h4,null,q5,M4,null,u4,i5,null,F2,j4,i4,null,j5,null,w5,null,Q2,m4,null,q3,r3,null,D3,null,I2,null,n4,null,U2,_4,w2,null,V5,p3,null,Q4,null,N4,C3,t5,G3,I3,X4,E3,null,a6,u2,null,f3,null,g3,h3,null,_2,null,R5,null,g6,null,L5,M5])}
function N9(){var a;a=new bhb;a.a+='(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define("opentype",[],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.opentype = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module \'"+o+"\'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){\r\n"use strict";exports.argument=function(r,t){if(!r)throw new Error(t)},exports.assert=exports.argument;\r\n\r\n\r\n},{}],2:[function(require,module,exports){\r\n"use strict";function line(e,i,n,o,t){e.beginPath(),e.moveTo(i,n),e.lineTo(o,t),e.stroke()}exports.line=line;\r\n\r\n\r\n},{}],3:[function(require,module,exports){\r\n"use strict";function DefaultEncoding(e){this.font=e}function CmapEncoding(e){this.cmap=e}function CffEncoding(e,l){this.encoding=e,this.charset=l}function GlyphNames(e){var l;switch(e.version){case 1:this.names=exports.standardNames.slice();break;case 2:for(this.names=new Array(e.numberOfGlyphs),l=0;l<e.numberOfGlyphs;l++)this.names[l]=e.glyphNameIndex[l]<exports.standardNames.length?exports.standardNames[e.glyphNameIndex[l]]:e.names[e.glyphNameIndex[l]-exports.standardNames.length];break;case 2.5:for(this.names=new Array(e.numberOfGlyphs),l=0;l<e.numberOfGlyphs;l++)this.names[l]=exports.standardNames[l+e.glyphNameIndex[l]];break;case 3:this.names=[]}}function addGlyphNames(e){for(var l,r=e.tables.cmap.glyphIndexMap,a=Object.keys(r),s=0;s<a.length;s+=1){var i=a[s],o=r[i];l=e.glyphs[o],l.addUnicode(parseInt(i))}for(s=0;s<e.glyphs.length;s+=1)l=e.glyphs[s],l.name=e.cffEncoding?e.cffEncoding.charset[s]:e.glyphNames.glyphIndexToName(s)}var cffStandardStrings=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],cffStandardEncoding=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],cffExpertEncoding=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],standardNames=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];DefaultEncoding.prototype.charToGlyphIndex=function(e){var l=e.charCodeAt(0),r=this.font.glyphs;if(!r)return null;for(var a=0;a<r.length;a+=1)for(var s=r[a],i=0;i<s.unicodes.length;i+=1)if(s.unicodes[i]===l)return a},CmapEncoding.prototype.charToGlyphIndex=function(e){return this.cmap.glyphIndexMap[e.charCodeAt(0)]||0},CffEncoding.prototype.charToGlyphIndex=function(e){var l=e.charCodeAt(0),r=this.encoding[l];return this.charset.indexOf(r)},GlyphNames.prototype.nameToGlyphIndex=function(e){return this.names.indexOf(e)},GlyphNames.prototype.glyphIndexToName=function(e){return this.names[e]},exports.cffStandardStrings=cffStandardStrings,exports.cffStandardEncoding=cffStandardEncoding,exports.cffExpertEncoding=cffExpertEncoding,exports.standardNames=standardNames,exports.DefaultEncoding=DefaultEncoding,exports.CmapEncoding=CmapEncoding,exports.CffEncoding=CffEncoding,exports.GlyphNames=GlyphNames,exports.addGlyphNames=addGlyphNames;\r\n\r\n\r\n},{}],4:[function(require,module,exports){\r\n"use strict";function Font(t){t=t||{},this.familyName=t.familyName||" ",this.styleName=t.styleName||" ",this.designer=t.designer||" ",this.designerURL=t.designerURL||" ",this.manufacturer=t.manufacturer||" ",this.manufacturerURL=t.manufacturerURL||" ",this.license=t.license||" ",this.licenseURL=t.licenseURL||" ",this.version=t.version||"Version 0.1",this.description=t.description||" ",this.copyright=t.copyright||" ",this.trademark=t.trademark||" ",this.unitsPerEm=t.unitsPerEm||1e3,this.ascender=t.ascender,this.descender=t.descender,this.supported=!0,this.glyphs=t.glyphs||[],this.encoding=new encoding.DefaultEncoding(this),this.tables={}}var path=require("./path"),sfnt=require("./tables/sfnt"),encoding=require("./encoding");Font.prototype.hasChar=function(t){return null!==this.encoding.charToGlyphIndex(t)},Font.prototype.charToGlyphIndex=function(t){return this.encoding.charToGlyphIndex(t)},Font.prototype.charToGlyph=function(t){var e=this.charToGlyphIndex(t),n=this.glyphs[e];return n||(n=this.glyphs[0]),n},Font.prototype.stringToGlyphs=function(t){for(var e=[],n=0;n<t.length;n+=1){var i=t[n];e.push(this.charToGlyph(i))}return e},Font.prototype.nameToGlyphIndex=function(t){return this.glyphNames.nameToGlyphIndex(t)},Font.prototype.nameToGlyph=function(t){var e=this.nametoGlyphIndex(t),n=this.glyphs[e];return n||(n=this.glyphs[0]),n},Font.prototype.glyphIndexToName=function(t){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(t):""},Font.prototype.getKerningValue=function(t,e){t=t.index||t,e=e.index||e;var n=this.getGposKerningValue;return n?n(t,e):this.kerningPairs[t+","+e]||0},Font.prototype.forEachGlyph=function(t,e,n,i,o,r){if(this.supported){e=void 0!==e?e:0,n=void 0!==n?n:0,i=void 0!==i?i:72,o=o||{};for(var s=void 0===o.kerning?!0:o.kerning,h=1/this.unitsPerEm*i,a=this.stringToGlyphs(t),p=0;p<a.length;p+=1){var c=a[p];if(r(c,e,n,i,o),c.advanceWidth&&(e+=c.advanceWidth*h),s&&p<a.length-1){var u=this.getKerningValue(c,a[p+1]);e+=u*h}}}},Font.prototype.getPath=function(t,e,n,i,o){var r=new path.Path;return this.forEachGlyph(t,e,n,i,o,function(t,e,n,i){var o=t.getPath(e,n,i);r.extend(o)}),r},Font.prototype.draw=function(t,e,n,i,o,r){this.getPath(e,n,i,o,r).draw(t)},Font.prototype.drawPoints=function(t,e,n,i,o,r){this.forEachGlyph(e,n,i,o,r,function(e,n,i,o){e.drawPoints(t,n,i,o)})},Font.prototype.drawMetrics=function(t,e,n,i,o,r){this.forEachGlyph(e,n,i,o,r,function(e,n,i,o){e.drawMetrics(t,n,i,o)})},Font.prototype.validate=function(){function t(t,e){t||n.push(e)}function e(e){t(i[e]&&i[e].trim().length>0,"No "+e+" specified.")}v';a.a+='ar n=[],i=this;e("familyName"),e("weightName"),e("manufacturer"),e("copyright"),e("version"),t(this.unitsPerEm>0,"No unitsPerEm specified.")},Font.prototype.toTables=function(){return sfnt.fontToTable(this)},Font.prototype.toBuffer=function(){for(var t=this.toTables(),e=t.encode(),n=new ArrayBuffer(e.length),i=new Uint8Array(n),o=0;o<e.length;o++)i[o]=e[o];return n},Font.prototype.download=function(){var t=this.familyName.replace(/\\s/g,"")+"-"+this.styleName+".otf",e=this.toBuffer();window.requestFileSystem=window.requestFileSystem||window.webkitRequestFileSystem,window.requestFileSystem(window.TEMPORARY,e.byteLength,function(n){n.root.getFile(t,{create:!0},function(t){t.createWriter(function(n){var i=new DataView(e),o=new Blob([i],{type:"font/opentype"});n.write(o),n.addEventListener("writeend",function(){location.href=t.toURL()},!1)})})},function(t){throw t})},exports.Font=Font;\r\n\r\n\r\n},{"./encoding":3,"./path":8,"./tables/sfnt":23}],5:[function(require,module,exports){\r\n"use strict";function Glyph(t){this.font=t.font||null,this.index=t.index||0,this.name=t.name||null,this.unicode=t.unicode||void 0,this.unicodes=t.unicodes||void 0!==t.unicode?[t.unicode]:[],this.xMin=t.xMin||0,this.yMin=t.yMin||0,this.xMax=t.xMax||0,this.yMax=t.yMax||0,this.advanceWidth=t.advanceWidth||0,this.path=t.path||null}var check=require("./check"),draw=require("./draw"),path=require("./path");Glyph.prototype.addUnicode=function(t){0===this.unicodes.length&&(this.unicode=t),this.unicodes.push(t)},Glyph.prototype.getPath=function(t,i,e){t=void 0!==t?t:0,i=void 0!==i?i:0,e=void 0!==e?e:72;for(var n=1/this.font.unitsPerEm*e,h=new path.Path,a=this.path.commands,o=0;o<a.length;o+=1){var r=a[o];"M"===r.type?h.moveTo(t+r.x*n,i+-r.y*n):"L"===r.type?h.lineTo(t+r.x*n,i+-r.y*n):"Q"===r.type?h.quadraticCurveTo(t+r.x1*n,i+-r.y1*n,t+r.x*n,i+-r.y*n):"C"===r.type?h.curveTo(t+r.x1*n,i+-r.y1*n,t+r.x2*n,i+-r.y2*n,t+r.x*n,i+-r.y*n):"Z"===r.type&&h.closePath()}return h},Glyph.prototype.getContours=function(){if(void 0===this.points)return[];for(var t=[],i=[],e=0;e<this.points.length;e+=1){var n=this.points[e];i.push(n),n.lastPointOfContour&&(t.push(i),i=[])}return check.argument(0===i.length,"There are still points left in the current contour."),t},Glyph.prototype.getMetrics=function(){for(var t=this.path.commands,i=[],e=[],n=0;n<t.length;n+=1){var h=t[n];"Z"!==h.type&&(i.push(h.x),e.push(h.y)),("Q"===h.type||"C"===h.type)&&(i.push(h.x1),e.push(h.y1)),"C"===h.type&&(i.push(h.x2),e.push(h.y2))}var a={xMin:Math.min.apply(null,i),yMin:Math.min.apply(null,e),xMax:Math.max.apply(null,i),yMax:Math.max.apply(null,e),leftSideBearing:0};return a.rightSideBearing=this.advanceWidth-a.leftSideBearing-(a.xMax-a.xMin),a},Glyph.prototype.draw=function(t,i,e,n){this.getPath(i,e,n).draw(t)},Glyph.prototype.drawPoints=function(t,i,e,n){function h(i,e,n,h){var a=2*Math.PI;t.beginPath();for(var o=0;o<i.length;o+=1)t.moveTo(e+i[o].x*h,n+i[o].y*h),t.arc(e+i[o].x*h,n+i[o].y*h,2,0,a,!1);t.closePath(),t.fill()}i=void 0!==i?i:0,e=void 0!==e?e:0,n=void 0!==n?n:24;for(var a=1/this.font.unitsPerEm*n,o=[],r=[],s=this.path,l=0;l<s.commands.length;l+=1){var p=s.commands[l];void 0!==p.x&&o.push({x:p.x,y:-p.y}),void 0!==p.x1&&r.push({x:p.x1,y:-p.y1}),void 0!==p.x2&&r.push({x:p.x2,y:-p.y2})}t.fillStyle="blue",h(o,i,e,a),t.fillStyle="red",h(r,i,e,a)},Glyph.prototype.drawMetrics=function(t,i,e,n){var h;i=void 0!==i?i:0,e=void 0!==e?e:0,n=void 0!==n?n:24,h=1/this.font.unitsPerEm*n,t.lineWidth=1,t.strokeStyle="black",draw.line(t,i,-1e4,i,1e4),draw.line(t,-1e4,e,1e4,e),t.strokeStyle="blue",draw.line(t,i+this.xMin*h,-1e4,i+this.xMin*h,1e4),draw.line(t,i+this.xMax*h,-1e4,i+this.xMax*h,1e4),draw.line(t,-1e4,e+-this.yMin*h,1e4,e+-this.yMin*h),draw.line(t,-1e4,e+-this.yMax*h,1e4,e+-this.yMax*h),t.strokeStyle="green",draw.line(t,i+this.advanceWidth*h,-1e4,i+this.advanceWidth*h,1e4)},exports.Glyph=Glyph;\r\n\r\n\r\n},{"./check":1,"./draw":2,"./path":8}],6:[function(require,module,exports){\r\n"use strict";function toArrayBuffer(e){for(var a=new ArrayBuffer(e.length),r=new Uint8Array(a),s=0;s<e.length;s+=1)r[s]=e[s];return a}function loadFromFile(e,a){var r=require("fs");r.readFile(e,function(e,r){return e?a(e.message):void a(null,toArrayBuffer(r))})}function loadFromUrl(e,a){var r=new XMLHttpRequest;r.open("get",e,!0),r.responseType="arraybuffer",r.onload=function(){return 200!==r.status?a("Font could not be loaded: "+r.statusText):a(null,r.response)},r.send()}function parseBuffer(e){var a,r,s,t,n,o,p,l=new _font.Font,i=new DataView(e,0),u=parse.getFixed(i,0);if(1===u)l.outlinesFormat="truetype";else{if(u=parse.getTag(i,0),"OTTO"!==u)throw new Error("Unsupported OpenType version "+u);l.outlinesFormat="cff"}for(var c=parse.getUShort(i,4),f=12,h=0;c>h;h+=1){var d=parse.getTag(i,f),m=parse.getULong(i,f+8);switch(d){case"cmap":l.tables.cmap=cmap.parse(i,m),l.encoding=new encoding.CmapEncoding(l.tables.cmap),l.encoding||(l.supported=!1);break;case"head":l.tables.head=head.parse(i,m),l.unitsPerEm=l.tables.head.unitsPerEm,a=l.tables.head.indexToLocFormat;break;case"hhea":l.tables.hhea=hhea.parse(i,m),l.ascender=l.tables.hhea.ascender,l.descender=l.tables.hhea.descender,l.numberOfHMetrics=l.tables.hhea.numberOfHMetrics;break;case"hmtx":r=m;break;case"maxp":l.tables.maxp=maxp.parse(i,m),l.numGlyphs=l.tables.maxp.numGlyphs;break;case"name":l.tables.name=_name.parse(i,m),l.familyName=l.tables.name.fontFamily,l.styleName=l.tables.name.fontSubfamily;break;case"OS/2":l.tables.os2=os2.parse(i,m);break;case"post":l.tables.post=post.parse(i,m),l.glyphNames=new encoding.GlyphNames(l.tables.post);break;case"glyf":s=m;break;case"loca":t=m;break;case"CFF ":n=m;break;case"kern":o=m;break;case"GPOS":p=m}f+=16}if(s&&t){var b=0===a,g=loca.parse(i,t,l.numGlyphs,b);l.glyphs=glyf.parse(i,s,g,l),hmtx.parse(i,r,l.numberOfHMetrics,l.numGlyphs,l.glyphs),encoding.addGlyphNames(l)}else n?(cff.parse(i,n,l),encoding.addGlyphNames(l)):l.supported=!1;return l.supported&&(l.kerningPairs=o?kern.parse(i,o):{},p&&gpos.parse(i,p,l)),l}function load(e,a){var r="undefined"==typeof window,s=r?loadFromFile:loadFromUrl;s(e,function(e,r){if(e)return a(e);var s=parseBuffer(r);return s.supported?a(null,s):a("Font is not supported (is this a Postscript font?)")})}var encoding=require("./encoding"),_font=require("./font"),glyph=require("./glyph"),parse=require("./parse"),path=require("./path"),cmap=require("./tables/cmap"),cff=require("./tables/cff"),glyf=require("./tables/glyf"),gpos=require("./tables/gpos"),head=require("./tables/head"),hhea=require("./tables/hhea"),hmtx=require("./tables/hmtx"),kern=require("./tables/kern"),loca=require("./tables/loca"),maxp=require("./tables/maxp"),_name=require("./tables/name"),os2=require("./tables/os2"),post=require("./tables/post");exports._parse=parse,exports.Font=_font.Font,exports.Glyph=glyph.Glyph,exports.Path=path.Path,exports.parse=parseBuffer,exports.load=load;\r\n},{"./encoding":3,"./font":4,"./glyph":5,"./parse":7,"./path":8,"./tables/cff":10,"./tables/cmap":11,"./tables/glyf":12,"./tables/gpos":13,"./tables/head":14,"./tables/hhea":15,"./tables/hmtx":16,"./tables/kern":17,"./tables/loca":18,"./tables/maxp":19,"./tables/name":20,"./tables/os2":21,"./tables/post":22,"fs":undefined}],7:[function(require,module,exports){\r\n"use strict";function Parser(t,e){this.data=t,this.offset=e,this.relativeOffset=0}exports.getByte=function(t,e){return t.getUint8(e)},exports.getCard8=exports.getByte,exports.getUShort=function(t,e){return t.getUint16(e,!1)},exports.getCard16=exports.getUShort,exports.getShort=function(t,e){return t.getInt16(e,!1)},exports.getULong=function(t,e){return t.getUint32(e,!1)},exports.getFixed=function(t,e){var r=t.getInt16(e,!1),s=t.getUint16(e+2,!1);return r+s/65535},exports.getTag=function(t,e){for(var r="",s=e;e+4>s;s+=1)r+=String.fromCharCode(t.getInt8(s));return r},exports.getOffset=function(t,e,r){for(var s=0,o=0;r>o;o+=1)s<<=8,s+=t.getUint8(e+o);return s},exports.getBytes=function(t,e,r){for(var s=[],o=e;r>o;o+=1)s.push(t.getUint8(o));return s},exports.bytesToString=function(t){for(var e="",r=0;r<t.length;r+=1)e+=String.fromCharCode(t[r]);return e};var typeOffsets={"byte":1,uShort:2,"short":2,uLong:4,fixed:4,longDateTime:8,tag:4};Parser.prototype.parseByte=function(){var t=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,t},Parser.prototype.parseChar=function(){var t=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,t},Parser.prototype.parseCard8=Parser.prototype.parseByte,Parser.prototype.parseUShort=function(){var t=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,t},Parser.prototype.parseCard16=Parser.prototype.parseUShort,Parser.prototype.parseSID=Parser.prototype.parseUShort,Parser.prototype.parseOffset16=Parser.prototype.parseUShort,Parser.prototype.parseShort=function(){var t=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,t},Parser.prototype.parseF2Dot14=function(){var t=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,t},Parser.prototype.parseULong=function(){var t=exports.getULong(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,t},Parser.prototype.parseFixed=function(){var t=exports.getFixed(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,t},Parser.prototype.parseOffset16List=Parser.prototype.parseUShortList=function(t){for(var e=new Array(t),r=this.data,s=this.offset+this.relativeOffset,o=0;t>o;o++)e[o]=exports.getUShort(r,s),s+=2;return this.relativeOffset+=2*t,e},Parser.prototype.parseString=function(t){var e=this.data,r=this.offset+this.relativeOffset,s="";this.relativeOffset+=t;for(var o=0;t>o;o++)s+=String.fromCharCode(e.getUint8(r+o));return s},Parser.prototype.parseTag=function(){return this.parseString(4)},Parser.prototype.parseLongDateTime=function(){var t=exports.getULong(this.data,this.offset+this.relativeOffset+4);return this.relativeOffset+=8,t},Parser.prototype.parseFixed=function(){var t=exports.getULong(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,t/65536},Parser.prototype.parseVersion=function(){var t=exports.getUShort(this.data,this.offset+this.relativeOffset),e=exports.getUShort(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,t+e/4096/10},Parser.prototype.skip=function(t,e){void 0===e&&(e=1),this.relativeOffset+=typeOffsets[t]*e},exports.Parser=Parser;\r\n\r\n\r\n},{}],8:[function(require,module,exports){\r\n"use strict";function Path(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}Path.prototype.moveTo=function(t,o){this.commands.push({type:"M",x:t,y:o})},Path.prototype.lineTo=function(t,o){this.commands.push({type:"L",x:t,y:o})},Path.prototype.curveTo=Path.prototype.bezierCurveTo=function(t,o,e,i,s,h){this.commands.push({type:"C",x1:t,y1:o,x2:e,y2:i,x:s,y:h})},Path.prototype.quadTo=Path.prototype.quadraticCurveTo=function(t,o,e,i){this.commands.push({type:"Q",x1:t,y1:o,x:e,y:i})},Path.prototype.close=Path.prototype.closePath=function(){this.commands.push({type:"Z"})},Path.prototype.extend=function(t){t.commands&&(t=t.commands),Array.prototype.push.apply(this.commands,t)},Path.prototype.draw=function(t){t.beginPath();for(var o=0;o<this.commands.length;o+=1){var e=this.commands[o];"M"===e.type?t.moveTo(e.x,e.y):"L"===e.type?t.lineTo(e.x,e.y):"C"===e.type?t.bezierCurveTo(e.x1,e.y1,e.x2,e.y2,e.x,e.y):"Q"===e.type?t.quadraticCurveTo(e.x1,e.y1,e.x,e.y):"Z"===e.type&&t.closePath()}this.fill&&(t.fillStyle=this.fill,t.fill()),this.stroke&&(t.strokeStyle=this.stroke,t.lineWidth=this.strokeWidth,t.stroke())},Path.prototype.toPathData=function(t){function o(o){return Math.round(o)===o?""+Math.round(o):o.toFixed(t)}function e(){for(var t="",e=0;e<arguments.length;e+=1){var i=arguments[e];i>=0&&e>0&&(t+=" "),t+=o(i)}return t}t=void 0!==t?t:2;for(var i="",s=0;s<this.commands.length;s+=1){var h=this.commands[s];"M"===h.type?i+="M"+e(h.x,h.y):"L"===h.type?i+="L"+e(h.x,h.y):"C"===h.type?i+="C"+e(h.x1,h.y1,h.x2,h.y2,h.x,h.y):"Q"===h.type?i+="Q"+e(h.x1,h.y1,h.x,h.y):"Z"===h.type&&(i+="Z")}return i},Path.prototype.toSVG=function(t){var o=\'<path d="\';return o+=this.toPathData(t),o+=\'"\',this.fill&"black"!==this.fill&&(o+=null===this.fill?\' fill="none"\':\' fill="\'+this.fill+\'"\'),this.stroke&&(o+=\' stroke="\'+this.stroke+\'" stroke-width="\'+this.strokeWidth+\'"\'),o+="/>"},exports.Path=Path;\r\n\r\n\r\n},{}],9:[function(require,module,exports){\r\n"use strict";function Table(e,t,i){var s;for(s=0;s<t.length;s+=1){var r=t[s];this[r.name]=r.value}if(this.tableName=e,this.fields=t,i){var f=Object.keys(i);for(s=0;s<f.length;s+=1){var n=f[s],o=i[n];void 0!==this[n]&&(this[n]=o)}}}var check=require("./check"),encode=require("./types").encode,sizeOf=require("./types").sizeOf;Table.prototype.sizeOf=function(){for(var e=0,t=0;t<this.fields.length;t+=1){var i=this.fields[t],s=this[i.name];if(void 0===s&&(s=i.value),"function"==typeof s.sizeOf)e+=s.sizeOf();else{var r=sizeOf[i.type];check.assert("function"==typeof r,"Could not find sizeOf function for field"+i.name),e+=r(s)}}return e},Table.prototype.encode=function(){return encode.TABLE(this)},exports.Table=Table;\r\n\r\n\r\n},{"./check":1,"./types":24}],10:[function(require,module,exports){\r\n"use strict";function equals(e,t){if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(var a=0;a<e.length;a+=1)if(!equals(e[a],t[a]))return!1;return!0}return!1}function parseCFFIndex(e,t,a){var r,n,s,i=[],h=[],o=parse.getCard16(e,t);if(0!==o){var f=parse.getByte(e,t+2);n=t+(o+1)*f+2;var p=t+3;for(r=0;o+1>r;r+=1)i.push(parse.getOffset(e,p,f)),p+=f;s=n+i[o]}else s=t+2;for(r=0;r<i.length-1;r+=1){var u=parse.getBytes(e,n+i[r],n+i[r+1]);a&&(u=a(u)),h.push(u)}return{objects:h,startOffset:t,endOffset:s}}function parseFloatOperand(e){for(var t="",a=15,r=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var n=e.parseByte(),s=n>>4,i=15&n;if(s===a)break;if(t+=r[s],i===a)break;t+=r[i]}return parseFloat(t)}function parseOperand(e,t){var a,r,n,s;if(28===t)return a=e.parseByte(),r=e.parseByte(),a<<8|r;if(29===t)return a=e.parseByte(),r=e.parseByte(),n=e.parseByte(),s=e.parseByte(),a<<24|r<<16|n<<8|s;if(30===t)return parseFloatOperand(e);if(t>=32&&246>=t)return t-139;if(t>=247&&250>=t)return a=e.parseByte(),256*(t-247)+a+108;if(t>=251&&254>=t)return a=e.parseByte(),256*-(t-251)-a-108;throw new Error("Invalid b0 "+t)}function entriesToObject(e){for(var t={},a=0;a<e.length;a+=1){var r,n=e[a][0],s=e[a][1];if(r=1===s.length?s[0]:s,t.hasOwnProperty(n))throw new Error("Object "+t+" already has key "+n);t[n]=r}return t}function parseCFFDict(e,t,a){t=void 0!==t?t:0;var r=new parse.Parser(e,t),n=[],s=[];for(a=void 0!==a?a:e.length;r.relativeOffset<a;){var i=r.parseByte();21>=i?(12===i&&(i=1200+r.parseByte()),n.push([i,s]),s=[]):s.push(parseOperand(r,i))}return entriesToObject(n)}function getCFFString(e,t){return t=390>=t?encoding.cffStandardStrings[t]:e[t-391]}function interpretDict(e,t,a){for(var r={},n=0;n<t.length;n+=1){var s=t[n],i=e[s.op];void 0===i&&(i=void 0!==s.value?s.value:null),"SID"===s.type&&(i=getCFFString(a,i)),r[s.name]=i}return r}function parseCFFHeader(e,t){var a={};return a.formatMajor=parse.getCard8(e,t),a.formatMinor=parse.getCard8(e,t+1),a.size=parse.getCard8(e,t+2),a.offsetSize=parse.getCard8(e,t+3),a.startOffset=t,a.endOffset=t+4,a}function parseCFFTopDict(e,t){var a=parseCFFDict(e,0,e.byteLength);return interpretDict(a,TOP_DICT_META,t)}function parseCFFPrivateDict(e,t,a,r){var n=parseCFFDict(e,t,a);return interpretDict(n,PRIVATE_DICT_META,r)}function parseCFFCharset(e,t,a,r){var n,s,i,h=new parse.Parser(e,t);a-=1;var o=[".notdef"],f=h.parseCard8();if(0===f)for(n=0;a>n;n+=1)s=h.parseSID(),o.push(getCFFString(r,s));else if(1===f)for(;o.length<=a;)for(s=h.parseSID(),i=h.parseCard8(),n=0;i>=n;n+=1)o.push(getCFFString(r,s)),s+=1;else{if(2!==f)throw new Error("Unknown charset format "+f);for(;o.length<=a;)for(s=h.parseSID(),i=h.parseCard16(),n=0;i>=n;n+=1)o.push(getCFFString(r,s)),s+=1}return o}function parseCFFEncoding(e,t,a){var r,n,s={},i=new parse.Parser(e,t),h=i.parseCard8();if(0===h){var o=i.parseCard8();for(r=0;o>r;r+=1)n=i.parseCard8(),s[n]=r}else{if(1!==h)throw new Error("Unknown encoding format "+h);var f=i.parseCard8();for(n=1,r=0;f>r;r+=1)for(var p=i.parseCard8(),u=i.parseCard8(),l=p;p+u>=';a.a+='l;l+=1)s[l]=n,n+=1}return new encoding.CffEncoding(s,a)}function parseCFFCharstring(e,t,a){function r(e,t){v&&p.closePath(),p.moveTo(e,t),v=!0}function n(){var e;e=u.length%2!==0,e&&!c&&(d=u.shift()+t.nominalWidthX),l+=u.length>>1,u.length=0,c=!0}function s(e){for(var y,b,T,C,I,F,D,x,k,S,E,B,w=0;w<e.length;){var M=e[w];switch(w+=1,M){case 1:n();break;case 3:n();break;case 4:u.length>1&&!c&&(d=u.shift()+t.nominalWidthX,c=!0),g+=u.pop(),r(m,g);break;case 5:for(;u.length>0;)m+=u.shift(),g+=u.shift(),p.lineTo(m,g);break;case 6:for(;u.length>0&&(m+=u.shift(),p.lineTo(m,g),0!==u.length);)g+=u.shift(),p.lineTo(m,g);break;case 7:for(;u.length>0&&(g+=u.shift(),p.lineTo(m,g),0!==u.length);)m+=u.shift(),p.lineTo(m,g);break;case 8:for(;u.length>0;)i=m+u.shift(),h=g+u.shift(),o=i+u.shift(),f=h+u.shift(),m=o+u.shift(),g=f+u.shift(),p.curveTo(i,h,o,f,m,g);break;case 10:I=u.pop()+t.subrsBias,F=t.subrs[I],F&&s(F);break;case 11:return;case 12:switch(M=e[w],w+=1,M){case 35:i=m+u.shift(),h=g+u.shift(),o=i+u.shift(),f=h+u.shift(),D=o+u.shift(),x=f+u.shift(),k=D+u.shift(),S=x+u.shift(),E=k+u.shift(),B=S+u.shift(),m=E+u.shift(),g=B+u.shift(),u.shift(),p.curveTo(i,h,o,f,D,x),p.curveTo(k,S,E,B,m,g);break;case 34:i=m+u.shift(),h=g,o=i+u.shift(),f=h+u.shift(),D=o+u.shift(),x=f,k=D+u.shift(),S=f,E=k+u.shift(),B=g,m=E+u.shift(),p.curveTo(i,h,o,f,D,x),p.curveTo(k,S,E,B,m,g);break;case 36:i=m+u.shift(),h=g+u.shift(),o=i+u.shift(),f=h+u.shift(),D=o+u.shift(),x=f,k=D+u.shift(),S=f,E=k+u.shift(),B=S+u.shift(),m=E+u.shift(),p.curveTo(i,h,o,f,D,x),p.curveTo(k,S,E,B,m,g);break;case 37:i=m+u.shift(),h=g+u.shift(),o=i+u.shift(),f=h+u.shift(),D=o+u.shift(),x=f+u.shift(),k=D+u.shift(),S=x+u.shift(),E=k+u.shift(),B=S+u.shift(),Math.abs(E-m)>Math.abs(B-g)?m=E+u.shift():g=B+u.shift(),p.curveTo(i,h,o,f,D,x),p.curveTo(k,S,E,B,m,g);break;default:console.log("Glyph "+a+": unknown operator 1200"+M),u.length=0}break;case 14:u.length>0&&!c&&(d=u.shift()+t.nominalWidthX,c=!0),v&&(p.closePath(),v=!1);break;case 18:n();break;case 19:case 20:n(),w+=l+7>>3;break;case 21:u.length>2&&!c&&(d=u.shift()+t.nominalWidthX,c=!0),g+=u.pop(),m+=u.pop(),r(m,g);break;case 22:u.length>1&&!c&&(d=u.shift()+t.nominalWidthX,c=!0),m+=u.pop(),r(m,g);break;case 23:n();break;case 24:for(;u.length>2;)i=m+u.shift(),h=g+u.shift(),o=i+u.shift(),f=h+u.shift(),m=o+u.shift(),g=f+u.shift(),p.curveTo(i,h,o,f,m,g);m+=u.shift(),g+=u.shift(),p.lineTo(m,g);break;case 25:for(;u.length>6;)m+=u.shift(),g+=u.shift(),p.lineTo(m,g);i=m+u.shift(),h=g+u.shift(),o=i+u.shift(),f=h+u.shift(),m=o+u.shift(),g=f+u.shift(),p.curveTo(i,h,o,f,m,g);break;case 26:for(u.length%2&&(m+=u.shift());u.length>0;)i=m,h=g+u.shift(),o=i+u.shift(),f=h+u.shift(),m=o,g=f+u.shift(),p.curveTo(i,h,o,f,m,g);break;case 27:for(u.length%2&&(g+=u.shift());u.length>0;)i=m+u.shift(),h=g,o=i+u.shift(),f=h+u.shift(),m=o+u.shift(),g=f,p.curveTo(i,h,o,f,m,g);break;case 28:y=e[w],b=e[w+1],u.push((y<<24|b<<16)>>16),w+=2;break;case 29:I=u.pop()+t.gsubrsBias,F=t.gsubrs[I],F&&s(F);break;case 30:for(;u.length>0&&(i=m,h=g+u.shift(),o=i+u.shift(),f=h+u.shift(),m=o+u.shift(),g=f+(1===u.length?u.shift():0),p.curveTo(i,h,o,f,m,g),0!==u.length);)i=m+u.shift(),h=g,o=i+u.shift(),f=h+u.shift(),g=f+u.shift(),m=o+(1===u.length?u.shift():0),p.curveTo(i,h,o,f,m,g);break;case 31:for(;u.length>0&&(i=m+u.shift(),h=g,o=i+u.shift(),f=h+u.shift(),g=f+u.shift(),m=o+(1===u.length?u.shift():0),p.curveTo(i,h,o,f,m,g),0!==u.length);)i=m,h=g+u.shift(),o=i+u.shift(),f=h+u.shift(),m=o+u.shift(),g=f+(1===u.length?u.shift():0),p.curveTo(i,h,o,f,m,g);break;default:32>M?console.log("Glyph "+a+": unknown operator "+M):247>M?u.push(M-139):251>M?(y=e[w],w+=1,u.push(256*(M-247)+y+108)):255>M?(y=e[w],w+=1,u.push(256*-(M-251)-y-108)):(y=e[w],b=e[w+1],T=e[w+2],C=e[w+3],w+=4,u.push((y<<24|b<<16|T<<8|C)/65536))}}}var i,h,o,f,p=new path.Path,u=[],l=0,c=!1,d=t.defaultWidthX,v=!1,m=0,g=0;s(e);var y=new _glyph.Glyph({font:t,index:a});return y.path=p,y.advanceWidth=d,y}function calcCFFSubroutineBias(e){var t;return t=e.length<1240?107:e.length<33900?1131:32768}function parseCFFTable(e,t,a){a.tables.cff={};var r=parseCFFHeader(e,t),n=parseCFFIndex(e,r.endOffset,parse.bytesToString),s=parseCFFIndex(e,n.endOffset),i=parseCFFIndex(e,s.endOffset,parse.bytesToString),h=parseCFFIndex(e,i.endOffset);a.gsubrs=h.objects,a.gsubrsBias=calcCFFSubroutineBias(a.gsubrs);var o=new DataView(new Uint8Array(s.objects[0]).buffer),f=parseCFFTopDict(o,i.objects);a.tables.cff.topDict=f;var p=t+f["private"][1],u=parseCFFPrivateDict(e,p,f["private"][0],i.objects);if(a.defaultWidthX=u.defaultWidthX,a.nominalWidthX=u.nominalWidthX,0!==u.subrs){var l=p+u.subrs,c=parseCFFIndex(e,l);a.subrs=c.objects,a.subrsBias=calcCFFSubroutineBias(a.subrs)}else a.subrs=[],a.subrsBias=0;var d=parseCFFIndex(e,t+f.charStrings);a.nGlyphs=d.objects.length;var v=parseCFFCharset(e,t+f.charset,a.nGlyphs,i.objects);a.cffEncoding=0===f.encoding?new encoding.CffEncoding(encoding.cffStandardEncoding,v):1===f.encoding?new encoding.CffEncoding(encoding.cffExpertEncoding,v):parseCFFEncoding(e,t+f.encoding,v),a.encoding=a.encoding||a.cffEncoding,a.glyphs=[];for(var m=0;m<a.nGlyphs;m+=1){var g=d.objects[m];a.glyphs.push(parseCFFCharstring(g,a,m))}}function encodeString(e,t){var a,r=encoding.cffStandardStrings.indexOf(e);return r>=0&&(a=r),r=t.indexOf(e),r>=0?a=r+encoding.cffStandardStrings.length:(a=encoding.cffStandardStrings.length+t.length,t.push(e)),a}function makeHeader(){return new table.Table("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function makeNameIndex(e){var t=new table.Table("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);t.names=[];for(var a=0;a<e.length;a+=1)t.names.push({name:"name_"+a,type:"NAME",value:e[a]});return t}function makeDict(e,t,a){for(var r={},n=0;n<e.length;n+=1){var s=e[n],i=t[s.name];void 0===i||equals(i,s.value)||("SID"===s.type&&(i=encodeString(i,a)),r[s.op]={name:s.name,type:s.type,value:i})}return r}function makeTopDict(e,t){var a=new table.Table("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return a.dict=makeDict(TOP_DICT_META,e,t),a}function makeTopDictIndex(e){var t=new table.Table("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return t.topDicts=[{name:"topDict_0",type:"TABLE",value:e}],t}function makeStringIndex(e){var t=new table.Table("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);t.strings=[];for(var a=0;a<e.length;a+=1)t.strings.push({name:"string_"+a,type:"STRING",value:e[a]});return t}function makeGlobalSubrIndex(){return new table.Table("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function makeCharsets(e,t){for(var a=new table.Table("Charsets",[{name:"format",type:"Card8",value:0}]),r=0;r<e.length;r+=1){var n=e[r],s=encodeString(n,t);a.fields.push({name:"glyph_"+r,type:"SID",value:s})}return a}function glyphToOps(e){var t=[],a=e.path;t.push({name:"width",type:"NUMBER",value:e.advanceWidth});for(var r=0,n=0,s=0;s<a.commands.length;s+=1){var i,h,o=a.commands[s];if("Q"===o.type){var f=1/3,p=2/3;o={type:"C",x:o.x,y:o.y,x1:f*r+p*o.x1,y1:f*n+p*o.y1,x2:f*o.x+p*o.x1,y2:f*o.y+p*o.y1}}if("M"===o.type)i=Math.round(o.x-r),h=Math.round(o.y-n),t.push({name:"dx",type:"NUMBER",value:i}),t.push({name:"dy",type:"NUMBER",value:h}),t.push({name:"rmoveto",type:"OP",value:21}),r=Math.round(o.x),n=Math.round(o.y);else if("L"===o.type)i=Math.round(o.x-r),h=Math.round(o.y-n),t.push({name:"dx",type:"NUMBER",value:i}),t.push({name:"dy",type:"NUMBER",value:h}),t.push({name:"rlineto",type:"OP",value:5}),r=Math.round(o.x),n=Math.round(o.y);else if("C"===o.type){var u=Math.round(o.x1-r),l=Math.round(o.y1-n),c=Math.round(o.x2-o.x1),d=Math.round(o.y2-o.y1);i=Math.round(o.x-o.x2),h=Math.round(o.y-o.y2),t.push({name:"dx1",type:"NUMBER",value:u}),t.push({name:"dy1",type:"NUMBER",value:l}),t.push({name:"dx2",type:"NUMBER",value:c}),t.push({name:"dy2",type:"NUMBER",value:d}),t.push({name:"dx",type:"NUMBER",value:i}),t.push({name:"dy",type:"NUMBER",value:h}),t.push({name:"rrcurveto",type:"OP",value:8}),r=Math.round(o.x),n=Math.round(o.y)}}return t.push({name:"endchar",type:"OP",value:14}),t}function makeCharStringsIndex(e){for(var t=new table.Table("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),a=0;a<e.length;a+=1){var r=e[a],n=glyphToOps(r);t.charStrings.push({name:r.name,type:"CHARSTRING",value:n})}return t}function makePrivateDict(e,t){var a=new table.Table("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return a.dict=makeDict(PRIVATE_DICT_META,e,t),a}function makePrivateDictIndex(e){var t=new table.Table("Private DICT INDEX",[{name:"privateDicts",type:"INDEX",value:[]}]);return t.privateDicts=[{name:"privateDict_0",type:"TABLE",value:e}],t}function makeCFFTable(e,t){for(var a=new table.Table("CFF ",[{name:"header",type:"TABLE"},{name:"nameIndex",type:"TABLE"},{name:"topDictIndex",type:"TABLE"},{name:"stringIndex",type:"TABLE"},{name:"globalSubrIndex",type:"TABLE"},{name:"charsets",type:"TABLE"},{name:"charStringsIndex",type:"TABLE"},{name:"privateDictIndex",type:"TABLE"}]),r=1/t.unitsPerEm,n={version:t.version,fullName:t.fullName,familyName:t.familyName,weight:t.weightName,fontMatrix:[r,0,0,r,0,0],charset:999,encoding:0,charStrings:999,"private":[0,999]},s={},i=[],h=1;h<e.length;h+=1)i.push(e[h].name);var o=[];a.header=makeHeader(),a.nameIndex=makeNameIndex([t.postScriptName]);var f=makeTopDict(n,o);a.topDictIndex=makeTopDictIndex(f),a.globalSubrIndex=makeGlobalSubrIndex(),a.charsets=makeCharsets(i,o),a.charStringsIndex=makeCharStringsIndex(e);var p=makePrivateDict(s,o);a.privateDictIndex=makePrivateDictIndex(p),a.stringIndex=makeStringIndex(o);var u=a.header.sizeOf()+a.nameIndex.sizeOf()+a.topDictIndex.sizeOf()+a.stringIndex.sizeOf()+a.globalSubrIndex.sizeOf();return n.charset=u,n.encoding=0,n.charStrings=n.charset+a.charsets.sizeOf(),n.private[1]=n.charStrings+a.charStringsIndex.sizeOf(),f=makeTopDict(n,o),a.topDictIndex=makeTopDictIndex(f),a}var encoding=require("../encoding"),_glyph=require("../glyph"),parse=require("../parse"),path=require("../path"),table=require("../table"),TOP_DICT_META=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]}],PRIVATE_DICT_META=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];exports.parse=parseCFFTable,exports.make=makeCFFTable;\r\n\r\n\r\n},{"../encoding":3,"../glyph":5,"../parse":7,"../path":8,"../table":9}],11:[function(require,module,exports){\r\n"use strict";function parseCmapTable(e,a){var t,r={};r.version=parse.getUShort(e,a),check.argument(0===r.version,"cmap table version should be 0."),r.numTables=parse.getUShort(e,a+2);var n=-1;for(t=0;t<r.numTables;t+=1){var s=parse.getUShort(e,a+4+8*t),l=parse.getUShort(e,a+4+8*t+2);if(3===s&&(1===l||0===l)){n=parse.getULong(e,a+4+8*t+4);break}}if(-1===n)return null;var o=new parse.Parser(e,a+n);r.format=o.parseUShort(),check.argument(4===r.format,"Only format 4 cmap tables are supported."),r.length=o.parseUShort(),r.language=o.parseUShort();var p;r.segCount=p=o.parseUShort()>>1,o.skip("uShort",3),r.glyphIndexMap={};var g=new parse.Parser(e,a+n+14),m=new parse.Parser(e,a+n+16+2*p),u=new parse.Parser(e,a+n+16+4*p),h=new parse.Parser(e,a+n+16+6*p),c=a+n+16+8*p;for(t=0;p-1>t;t+=1)for(var f,d=g.parseUShort(),S=m.parseUShort(),i=u.parseShort(),v=h.parseUShort(),U=S;d>=U;U+=1)0!==v?(c=h.offset+h.relativeOffset-2,c+=v,c+=2*(U-S),f=parse.getUShort(e,c),0!==f&&(f=f+i&65535)):f=U+i&65535,r.glyphIndexMap[U]=f;return r}function addSegment(e,a,t){e.segments.push({end:a,start:a,delta:-(a-t),offset:0})}function addTerminatorSegment(e){e.segments.push({end:65535,start:65535,delta:1,offset:0})}function makeCmapTable(e){var a,t=new table.Table("cmap",[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:1},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:12},{name:"format",type:"USHORT",value:4},{name:"length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);for(t.segments=[],a=0;a<e.length;a+=1){for(var r=e[a],n=0;n<r.unicodes.length;n+=1)addSegment(t,r.unicodes[n],a);t.segments=t.segments.sort(function(e,a){return e.start-a.start})}addTerminatorSegment(t);var s;s=t.segments.length,t.segCountX2=2*s,t.searchRange=2*Math.pow(2,Math.floor(Math.log(s)/Math.log(2))),t.entrySelector=Math.log(t.searchRange/2)/Math.log(2),t.rangeShift=t.segCountX2-t.searchRange;var l=[],o=[],p=[],g=[],m=[];for(a=0;s>a;a+=1){var u=t.segments[a];l=l.concat({name:"end_"+a,type:"USHORT",value:u.end}),o=o.concat({name:"start_"+a,type:"USHORT",value:u.start}),p=p.concat({name:"idDelta_"+a,type:"SHORT",value:u.delta}),g=g.concat({name:"idRangeOffset_"+a,type:"USHORT",value:u.offset}),void 0!==u.glyphId&&(m=m.concat({name:"glyph_"+a,type:"USHORT",value:u.glyphId}))}return t.fields=t.fields.concat(l),t.fields.push({name:"reservedPad",type:"USHORT",value:0}),t.fields=t.fields.concat(o),t.fields=t.fields.concat(p),t.fields=t.fields.concat(g),t.fields=t.fields.concat(m),t.length=14+2*l.length+2+2*o.length+2*p.length+2*g.length+2*m.length,t}var check=require("../check"),parse=require("../parse"),table=require("../table");exports.parse=parseCmapTable,exports.make=makeCmapTable;\r\n\r\n\r\n},{"../check":1,"../parse":7,"../table":9}],12:[function(require,module,exports){\r\n"use strict";function parseGlyphCoordinate(r,e,t,o,n){var a;return(e&o)>0?(a=r.parseByte(),0===(e&n)&&(a=-a),a=t+a):a=(e&n)>0?t:t+r.parseShort(),a}function parseGlyph(r,e,t,o){var n=new parse.Parser(r,e),a=new _glyph.Glyph({font:o,index:t});a.numberOfContours=n.parseShort(),a.xMin=n.parseShort(),a.yMin=n.parseShort(),a.xMax=n.parseShort(),a.yMax=n.parseShort();var s,p;if(a.numberOfContours>0){var u,i=a.endPointIndices=[];for(u=0;u<a.numberOfContours;u+=1)i.push(n.parseUShort());for(a.instructionLength=n.parseUShort(),a.instructions=[],u=0;u<a.instructionLength;u+=1)a.instructions.push(n.parseByte());var l=i[i.length-1]+1;for(s=[],u=0;l>u;u+=1)if(p=n.parseByte(),s.push(p),(8&p)>0)for(var h=n.parseByte(),f=0;h>f;f+=1)s.push(p),u+=1;if(check.argument(s.length===l,"Bad flags."),i.length>0){var y,c=[];if(l>0){for(u=0;l>u;u+=1)p=s[u],y={},y.onCurve=!!(1&p),y.lastPointOfContour=i.indexOf(u)>=0,c.push(y);var v=0;for(u=0;l>u;u+=1)p=s[u],y=c[u],y.x=parseGlyphCoordinate(n,p,v,2,16),v=y.x;var x=0;for(u=0;l>u;u+=1)p=s[u],y=c[u],y.y=parseGlyphCoordinate(n,p,x,4,32),x=y.y}a.points=c}else a.points=[]}else if(0===a.numberOfContours)a.points=[];else{a.isComposite=!0,a.points=[],a.components=[];for(var C=!0;C;){s=n.parseUShort();var g={glyphIndex:n.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(1&s)>0?(g.dx=n.parseShort(),g.dy=n.parseShort()):(g.dx=n.parseChar(),g.dy=n.parseChar()),(8&s)>0?g.xScale=g.yScale=n.parseF2Dot14():(64&s)>0?(g.xScale=n.parseF2Dot14(),g.yScale=n.parseF2Dot14()):(128&s)>0&&(g.xScale=n.parseF2Dot14(),g.scale01=n.parseF2Dot14(),g.scale10=n.parseF2Dot14(),g.yScale=n.parseF2Dot14()),a.components.push(g),C=!!(32&s)}}return a}function transformPoints(r,e){for(var t=[],o=0;o<r.length;o+=1){var n=r[o],a={x:e.xScale*n.x+e.scale01*n.y+e.dx,y:e.scale10*n.x+e.yScale*n.y+e.dy,onCurve:';a.a+='n.onCurve,lastPointOfContour:n.lastPointOfContour};t.push(a)}return t}function getContours(r){for(var e=[],t=[],o=0;o<r.length;o+=1){var n=r[o];t.push(n),n.lastPointOfContour&&(e.push(t),t=[])}return check.argument(0===t.length,"There are still points left in the current contour."),e}function getPath(r){var e=new path.Path;if(!r)return e;for(var t=getContours(r),o=0;o<t.length;o+=1){var n,a,s=t[o],p=s[0],u=s[s.length-1];p.onCurve?(n=null,a=!0):(p=u.onCurve?u:{x:(p.x+u.x)/2,y:(p.y+u.y)/2},n=p,a=!1),e.moveTo(p.x,p.y);for(var i=a?1:0;i<s.length;i+=1){var l=s[i],h=0===i?p:s[i-1];if(h.onCurve&&l.onCurve)e.lineTo(l.x,l.y);else if(h.onCurve&&!l.onCurve)n=l;else if(h.onCurve||l.onCurve){if(h.onCurve||!l.onCurve)throw new Error("Invalid state.");e.quadraticCurveTo(n.x,n.y,l.x,l.y),n=null}else{var f={x:(h.x+l.x)/2,y:(h.y+l.y)/2};e.quadraticCurveTo(h.x,h.y,f.x,f.y),n=l}}p!==u&&(n?e.quadraticCurveTo(n.x,n.y,p.x,p.y):e.lineTo(p.x,p.y))}return e.closePath(),e}function parseGlyfTable(r,e,t,o){var n,a=[];for(n=0;n<t.length-1;n+=1){var s=t[n],p=t[n+1];a.push(s!==p?parseGlyph(r,e+s,n,o):new _glyph.Glyph({font:o,index:n}))}for(n=0;n<a.length;n+=1){var u=a[n];if(u.isComposite)for(var i=0;i<u.components.length;i+=1){var l=u.components[i],h=a[l.glyphIndex];if(h.points){var f=transformPoints(h.points,l);u.points=u.points.concat(f)}}u.path=getPath(u.points)}return a}var check=require("../check"),_glyph=require("../glyph"),parse=require("../parse"),path=require("../path");exports.parse=parseGlyfTable;\r\n\r\n\r\n},{"../check":1,"../glyph":5,"../parse":7,"../path":8}],13:[function(require,module,exports){\r\n"use strict";function parseTaggedListTable(r,e){for(var a=new parse.Parser(r,e),s=a.parseUShort(),t=[],o=0;s>o;o++)t[a.parseTag()]={offset:a.parseUShort()};return t}function parseCoverageTable(r,e){var a=new parse.Parser(r,e),s=a.parseUShort(),t=a.parseUShort();if(1===s)return a.parseUShortList(t);if(2===s){for(var o=[];t--;)for(var p=a.parseUShort(),n=a.parseUShort(),f=a.parseUShort(),i=p;n>=i;i++)o[f++]=i;return o}}function parseClassDefTable(r,e){var a=new parse.Parser(r,e),s=a.parseUShort();if(1===s){var t=a.parseUShort(),o=a.parseUShort(),p=a.parseUShortList(o);return function(r){return p[r-t]||0}}if(2===s){for(var n=a.parseUShort(),f=[],i=[],h=[],S=0;n>S;S++)f[S]=a.parseUShort(),i[S]=a.parseUShort(),h[S]=a.parseUShort();return function(r){for(var e=0,a=f.length-1;a>e;){var s=e+a+1>>1;r<f[s]?a=s-1:e=s}return f[e]<=r&&r<=i[e]?h[e]||0:0}}}function parsePairPosSubTable(r,e){var a,s,t=new parse.Parser(r,e),o=t.parseUShort(),p=t.parseUShort(),n=parseCoverageTable(r,e+p),f=t.parseUShort(),i=t.parseUShort();if(4===f&&0===i){var h={};if(1===o){for(var S=t.parseUShort(),u=[],v=t.parseOffset16List(S),U=0;S>U;U++){var l=v[U],g=h[l];if(!g){g={},t.relativeOffset=l;for(var T=t.parseUShort();T--;){var c=t.parseUShort();f&&(a=t.parseShort()),i&&(s=t.parseShort()),g[c]=a}}u[n[U]]=g}return function(r,e){var a=u[r];return a?a[e]:void 0}}if(2===o){for(var b=t.parseUShort(),P=t.parseUShort(),L=t.parseUShort(),k=t.parseUShort(),d=parseClassDefTable(r,e+b),w=parseClassDefTable(r,e+P),O=[],C=0;L>C;C++)for(var G=O[C]=[],K=0;k>K;K++)f&&(a=t.parseShort()),i&&(s=t.parseShort()),G[K]=a;var V={};for(C=0;C<n.length;C++)V[n[C]]=1;return function(r,e){if(V[r]){var a=d(r),s=w(e),t=O[a];return t?t[s]:void 0}}}}}function parseLookupTable(r,e){var a=new parse.Parser(r,e),s=a.parseUShort(),t=a.parseUShort(),o=16&t,p=a.parseUShort(),n=a.parseOffset16List(p),f={lookupType:s,lookupFlag:t,markFilteringSet:o?a.parseUShort():-1};if(2===s){for(var i=[],h=0;p>h;h++)i.push(parsePairPosSubTable(r,e+n[h]));f.getKerningValue=function(r,e){for(var a=i.length;a--;){var s=i[a](r,e);if(void 0!==s)return s}return 0}}return f}function parseGposTable(r,e,a){var s=new parse.Parser(r,e),t=s.parseFixed();check.argument(1===t,"Unsupported GPOS table version."),parseTaggedListTable(r,e+s.parseUShort()),parseTaggedListTable(r,e+s.parseUShort());var o=s.parseUShort();s.relativeOffset=o;for(var p=s.parseUShort(),n=s.parseOffset16List(p),f=e+o,i=0;p>i;i++){var h=parseLookupTable(r,f+n[i]);2!==h.lookupType||a.getGposKerningValue||(a.getGposKerningValue=h.getKerningValue)}}var check=require("../check"),parse=require("../parse");exports.parse=parseGposTable;\r\n\r\n\r\n},{"../check":1,"../parse":7}],14:[function(require,module,exports){\r\n"use strict";function parseHeadTable(e,a){var r={},t=new parse.Parser(e,a);return r.version=t.parseVersion(),r.fontRevision=Math.round(1e3*t.parseFixed())/1e3,r.checkSumAdjustment=t.parseULong(),r.magicNumber=t.parseULong(),check.argument(1594834165===r.magicNumber,"Font header has wrong magic number."),r.flags=t.parseUShort(),r.unitsPerEm=t.parseUShort(),r.created=t.parseLongDateTime(),r.modified=t.parseLongDateTime(),r.xMin=t.parseShort(),r.yMin=t.parseShort(),r.xMax=t.parseShort(),r.yMax=t.parseShort(),r.macStyle=t.parseUShort(),r.lowestRecPPEM=t.parseUShort(),r.fontDirectionHint=t.parseShort(),r.indexToLocFormat=t.parseShort(),r.glyphDataFormat=t.parseShort(),r}function makeHeadTable(e){return new table.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:0},{name:"modified",type:"LONGDATETIME",value:0},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],e)}var check=require("../check"),parse=require("../parse"),table=require("../table");exports.parse=parseHeadTable,exports.make=makeHeadTable;\r\n\r\n\r\n},{"../check":1,"../parse":7,"../table":9}],15:[function(require,module,exports){\r\n"use strict";function parseHheaTable(e,a){var r={},t=new parse.Parser(e,a);return r.version=t.parseVersion(),r.ascender=t.parseShort(),r.descender=t.parseShort(),r.lineGap=t.parseShort(),r.advanceWidthMax=t.parseUShort(),r.minLeftSideBearing=t.parseShort(),r.minRightSideBearing=t.parseShort(),r.xMaxExtent=t.parseShort(),r.caretSlopeRise=t.parseShort(),r.caretSlopeRun=t.parseShort(),r.caretOffset=t.parseShort(),t.relativeOffset+=8,r.metricDataFormat=t.parseShort(),r.numberOfHMetrics=t.parseUShort(),r}function makeHheaTable(e){return new table.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],e)}var parse=require("../parse"),table=require("../table");exports.parse=parseHheaTable,exports.make=makeHheaTable;\r\n\r\n\r\n},{"../parse":7,"../table":9}],16:[function(require,module,exports){\r\n"use strict";function parseHmtxTable(e,a,r,t,s){for(var i,l,n=new parse.Parser(e,a),p=0;t>p;p+=1){r>p&&(i=n.parseUShort(),l=n.parseShort());var d=s[p];d.advanceWidth=i,d.leftSideBearing=l}}function makeHmtxTable(e){for(var a=new table.Table("hmtx",[]),r=0;r<e.length;r+=1){var t=e[r],s=t.advanceWidth||0,i=t.leftSideBearing||0;a.fields.push({name:"advanceWidth_"+r,type:"USHORT",value:s}),a.fields.push({name:"leftSideBearing_"+r,type:"SHORT",value:i})}return a}var parse=require("../parse"),table=require("../table");exports.parse=parseHmtxTable,exports.make=makeHmtxTable;\r\n\r\n\r\n},{"../parse":7,"../table":9}],17:[function(require,module,exports){\r\n"use strict";function parseKernTable(r,e){var a={},s=new parse.Parser(r,e),p=s.parseUShort();check.argument(0===p,"Unsupported kern table version."),s.skip("uShort",1);var t=s.parseUShort();check.argument(0===t,"Unsupported kern sub-table version."),s.skip("uShort",2);var o=s.parseUShort();s.skip("uShort",3);for(var n=0;o>n;n+=1){var h=s.parseUShort(),u=s.parseUShort(),c=s.parseShort();a[h+","+u]=c}return a}var check=require("../check"),parse=require("../parse");exports.parse=parseKernTable;\r\n\r\n\r\n},{"../check":1,"../parse":7}],18:[function(require,module,exports){\r\n"use strict";function parseLocaTable(r,a,e,s){for(var p=new parse.Parser(r,a),o=s?p.parseUShort:p.parseULong,t=[],c=0;e+1>c;c+=1){var n=o.call(p);s&&(n*=2),t.push(n)}return t}var parse=require("../parse");exports.parse=parseLocaTable;\r\n\r\n\r\n},{"../parse":7}],19:[function(require,module,exports){\r\n"use strict";function parseMaxpTable(e,a){var r={},s=new parse.Parser(e,a);return r.version=s.parseVersion(),r.numGlyphs=s.parseUShort(),1===r.version&&(r.maxPoints=s.parseUShort(),r.maxContours=s.parseUShort(),r.maxCompositePoints=s.parseUShort(),r.maxCompositeContours=s.parseUShort(),r.maxZones=s.parseUShort(),r.maxTwilightPoints=s.parseUShort(),r.maxStorage=s.parseUShort(),r.maxFunctionDefs=s.parseUShort(),r.maxInstructionDefs=s.parseUShort(),r.maxStackElements=s.parseUShort(),r.maxSizeOfInstructions=s.parseUShort(),r.maxComponentElements=s.parseUShort(),r.maxComponentDepth=s.parseUShort()),r}function makeMaxpTable(e){return new table.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:e}])}var parse=require("../parse"),table=require("../table");exports.parse=parseMaxpTable,exports.make=makeMaxpTable;\r\n\r\n\r\n},{"../parse":7,"../table":9}],20:[function(require,module,exports){\r\n"use strict";function parseNameTable(e,a){var r={},n=new parse.Parser(e,a);r.format=n.parseUShort();for(var t=n.parseUShort(),s=n.offset+n.parseUShort(),o=0,m=0;t>m;m++){var l=n.parseUShort(),p=n.parseUShort(),u=n.parseUShort(),i=n.parseUShort(),d=nameTableNames[i],c=n.parseUShort(),f=n.parseUShort();if(3===l&&1===p&&1033===u){for(var h=[],T=c/2,g=0;T>g;g++,f+=2)h[g]=parse.getShort(e,s+f);var S=String.fromCharCode.apply(null,h);d?r[d]=S:(o++,r["unknown"+o]=S)}}return 1===r.format&&(r.langTagCount=n.parseUShort()),r}function makeNameRecord(e,a,r,n,t,s){return new table.Table("NameRecord",[{name:"platformID",type:"USHORT",value:e},{name:"encodingID",type:"USHORT",value:a},{name:"languageID",type:"USHORT",value:r},{name:"nameID",type:"USHORT",value:n},{name:"length",type:"USHORT",value:t},{name:"offset",type:"USHORT",value:s}])}function addMacintoshNameRecord(e,a,r,n){var t=encode.STRING(r);return e.records.push(makeNameRecord(1,0,0,a,t.length,n)),e.strings.push(t),n+=t.length}function addWindowsNameRecord(e,a,r,n){var t=encode.UTF16(r);return e.records.push(makeNameRecord(3,1,1033,a,t.length,n)),e.strings.push(t),n+=t.length}function makeNameTable(e){var a=new table.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:0},{name:"stringOffset",type:"USHORT",value:0}]);a.records=[],a.strings=[];var r,n,t=0;for(r=0;r<nameTableNames.length;r+=1)void 0!==e[nameTableNames[r]]&&(n=e[nameTableNames[r]],t=addMacintoshNameRecord(a,r,n,t));for(r=0;r<nameTableNames.length;r+=1)void 0!==e[nameTableNames[r]]&&(n=e[nameTableNames[r]],t=addWindowsNameRecord(a,r,n,t));for(a.count=a.records.length,a.stringOffset=6+12*a.count,r=0;r<a.records.length;r+=1)a.fields.push({name:"record_"+r,type:"TABLE",value:a.records[r]});for(r=0;r<a.strings.length;r+=1)a.fields.push({name:"string_"+r,type:"LITERAL",value:a.strings[r]});return a}var encode=require("../types").encode,parse=require("../parse"),table=require("../table"),nameTableNames=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","licence","licenceURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"];exports.parse=parseNameTable,exports.make=makeNameTable;\r\n\r\n\r\n},{"../parse":7,"../table":9,"../types":24}],21:[function(require,module,exports){\r\n"use strict";function getUnicodeRange(e){for(var n=0;n<unicodeRanges.length;n+=1){var a=unicodeRanges[n];if(e>=a.begin&&e<a.end)return n}return-1}function parseOS2Table(e,n){var a={},i=new parse.Parser(e,n);a.version=i.parseUShort(),a.xAvgCharWidth=i.parseShort(),a.usWeightClass=i.parseUShort(),a.usWidthClass=i.parseUShort(),a.fsType=i.parseUShort(),a.ySubscriptXSize=i.parseShort(),a.ySubscriptYSize=i.parseShort(),a.ySubscriptXOffset=i.parseShort(),a.ySubscriptYOffset=i.parseShort(),a.ySuperscriptXSize=i.parseShort(),a.ySuperscriptYSize=i.parseShort(),a.ySuperscriptXOffset=i.parseShort(),a.ySuperscriptYOffset=i.parseShort(),a.yStrikeoutSize=i.parseShort(),a.yStrikeoutPosition=i.parseShort(),a.sFamilyClass=i.parseShort(),a.panose=[];for(var t=0;10>t;t++)a.panose[t]=i.parseByte();return a.ulUnicodeRange1=i.parseULong(),a.ulUnicodeRange2=i.parseULong(),a.ulUnicodeRange3=i.parseULong(),a.ulUnicodeRange4=i.parseULong(),a.achVendID=String.fromCharCode(i.parseByte(),i.parseByte(),i.parseByte(),i.parseByte()),a.fsSelection=i.parseUShort(),a.usFirstCharIndex=i.parseUShort(),a.usLastCharIndex=i.parseUShort(),a.sTypoAscender=i.parseShort(),a.sTypoDescender=i.parseShort(),a.sTypoLineGap=i.parseShort(),a.usWinAscent=i.parseUShort(),a.usWinDescent=i.parseUShort(),a.version>=1&&(a.ulCodePageRange1=i.parseULong(),a.ulCodePageRange2=i.parseULong()),a.version>=2&&(a.sxHeight=i.parseShort(),a.sCapHeight=i.parseShort(),a.usDefaultChar=i.parseUShort(),a.usBreakChar=i.parseUShort(),a.usMaxContent=i.parseUShort()),a}function makeOS2Table(e){return new table.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],e)}var parse=require("../parse"),table=require("../table"),unicodeRanges=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:';a.a+='1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];exports.unicodeRanges=unicodeRanges,exports.getUnicodeRange=getUnicodeRange,exports.parse=parseOS2Table,exports.make=makeOS2Table;\r\n\r\n\r\n},{"../parse":7,"../table":9}],22:[function(require,module,exports){\r\n"use strict";function parsePostTable(e,a){var r,n={},s=new parse.Parser(e,a);switch(n.version=s.parseVersion(),n.italicAngle=s.parseFixed(),n.underlinePosition=s.parseShort(),n.underlineThickness=s.parseShort(),n.isFixedPitch=s.parseULong(),n.minMemType42=s.parseULong(),n.maxMemType42=s.parseULong(),n.minMemType1=s.parseULong(),n.maxMemType1=s.parseULong(),n.version){case 1:n.names=encoding.standardNames.slice();break;case 2:for(n.numberOfGlyphs=s.parseUShort(),n.glyphNameIndex=new Array(n.numberOfGlyphs),r=0;r<n.numberOfGlyphs;r++)n.glyphNameIndex[r]=s.parseUShort();for(n.names=[],r=0;r<n.numberOfGlyphs;r++)if(n.glyphNameIndex[r]>=encoding.standardNames.length){var p=s.parseChar();n.names.push(s.parseString(p))}break;case 2.5:for(n.numberOfGlyphs=s.parseUShort(),n.offset=new Array(n.numberOfGlyphs),r=0;r<n.numberOfGlyphs;r++)n.offset[r]=s.parseChar()}return n}function makePostTable(){return new table.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}var encoding=require("../encoding"),parse=require("../parse"),table=require("../table");exports.parse=parsePostTable,exports.make=makePostTable;\r\n\r\n\r\n},{"../encoding":3,"../parse":7,"../table":9}],23:[function(require,module,exports){\r\n"use strict";function log2(e){return Math.log(e)/Math.log(2)|0}function computeCheckSum(e){for(;e.length%4!==0;)e.push(0);for(var a=0,n=0;n<e.length;n+=4)a+=(e[n]<<24)+(e[n+1]<<16)+(e[n+2]<<8)+e[n+3];return a%=Math.pow(2,32)}function makeTableRecord(e,a,n,r){return new table.Table("Table Record",[{name:"tag",type:"TAG",value:void 0!==e?e:""},{name:"checkSum",type:"ULONG",value:void 0!==a?a:0},{name:"offset",type:"ULONG",value:void 0!==n?n:0},{name:"length",type:"ULONG",value:void 0!==r?r:0}])}function makeSfntTable(e){var a=new table.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);a.tables=e,a.numTables=e.length;var n=Math.pow(2,log2(a.numTables));a.searchRange=16*n,a.entrySelector=log2(n),a.rangeShift=16*a.numTables-a.searchRange;for(var r=[],t=[],i=a.sizeOf()+makeTableRecord().sizeOf()*a.numTables;i%4!==0;)i+=1,t.push({name:"padding",type:"BYTE",value:0});for(var l=0;l<e.length;l+=1){var s=e[l];check.argument(4===s.tableName.length,"Table name"+s.tableName+" is invalid.");var m=s.sizeOf(),u=makeTableRecord(s.tableName,computeCheckSum(s.encode()),i,m);for(r.push({name:u.tag+" Table Record",type:"TABLE",value:u}),t.push({name:s.tableName+" table",type:"TABLE",value:s}),i+=m,check.argument(!isNaN(i),"Something went wrong calculating the offset.");i%4!==0;)i+=1,t.push({name:"padding",type:"BYTE",value:0})}return r.sort(function(e,a){return e.value.tag>a.value.tag?1:-1}),a.fields=a.fields.concat(r),a.fields=a.fields.concat(t),a}function metricsForChar(e,a,n){for(var r=0;r<a.length;r+=1){var t=e.charToGlyphIndex(a[r]);if(t>0){var i=e.glyphs[t];return i.getMetrics()}}return n}function average(e){for(var a=0,n=0;n<e.length;n+=1)a+=e[n];return a/e.length}function fontToSfntTable(e){for(var a=[],n=[],r=[],t=[],i=[],l=[],s=[],m=null,u=0,c=0,h=0,o=0,d=0,p=0;p<e.glyphs.length;p+=1){var f=e.glyphs[p],g=0|f.unicode;(m>g||null===m)&&(m=g),g>u&&(u=g);var y=os2.getUnicodeRange(g);if(32>y)c|=1<<y;else if(64>y)h|=1<<y-32;else if(96>y)o|=1<<y-64;else{if(!(123>y))throw new Error("Unicode ranges bits > 123 are reserved for internal usage");d|=1<<y-96}if(".notdef"!==f.name){var v=f.getMetrics();a.push(v.xMin),n.push(v.yMin),r.push(v.xMax),t.push(v.yMax),l.push(v.leftSideBearing),s.push(v.rightSideBearing),i.push(f.advanceWidth)}}var x={xMin:Math.min.apply(null,a),yMin:Math.min.apply(null,n),xMax:Math.max.apply(null,r),yMax:Math.max.apply(null,t),advanceWidthMax:Math.max.apply(null,i),advanceWidthAvg:average(i),minLeftSideBearing:Math.min.apply(null,l),maxLeftSideBearing:Math.max.apply(null,l),minRightSideBearing:Math.min.apply(null,s)};x.ascender=void 0!==e.ascender?e.ascender:x.yMax,x.descender=void 0!==e.descender?e.descender:x.yMin;var M=head.make({unitsPerEm:e.unitsPerEm,xMin:x.xMin,yMin:x.yMin,xMax:x.xMax,yMax:x.yMax}),T=hhea.make({ascender:x.ascender,descender:x.descender,advanceWidthMax:x.advanceWidthMax,minLeftSideBearing:x.minLeftSideBearing,minRightSideBearing:x.minRightSideBearing,xMaxExtent:x.maxLeftSideBearing+(x.xMax-x.xMin),numberOfHMetrics:e.glyphs.length}),S=maxp.make(e.glyphs.length),b=os2.make({xAvgCharWidth:Math.round(x.advanceWidthAvg),usWeightClass:500,usWidthClass:5,usFirstCharIndex:m,usLastCharIndex:u,ulUnicodeRange1:c,ulUnicodeRange2:h,ulUnicodeRange3:o,ulUnicodeRange4:d,sTypoAscender:x.ascender,sTypoDescender:x.descender,sTypoLineGap:0,usWinAscent:x.ascender,usWinDescent:-x.descender,sxHeight:metricsForChar(e,"xyvw",{yMax:0}).yMax,sCapHeight:metricsForChar(e,"HIKLEFJMNTZBDPRAGOQSUVWXY",x).yMax,usBreakChar:e.hasChar(" ")?32:0}),k=hmtx.make(e.glyphs),R=cmap.make(e.glyphs),N=e.familyName+" "+e.styleName,U=e.familyName.replace(/\\s/g,"")+"-"+e.styleName,L=_name.make({copyright:e.copyright,fontFamily:e.familyName,fontSubfamily:e.styleName,uniqueID:e.manufacturer+":"+N,fullName:N,version:e.version,postScriptName:U,trademark:e.trademark,manufacturer:e.manufacturer,designer:e.designer,description:e.description,manufacturerURL:e.manufacturerURL,designerURL:e.designerURL,license:e.license,licenseURL:e.licenseURL,preferredFamily:e.familyName,preferredSubfamily:e.styleName}),C=post.make(),B=cff.make(e.glyphs,{version:e.version,fullName:N,familyName:e.familyName,weightName:e.styleName,postScriptName:U,unitsPerEm:e.unitsPerEm}),O=[M,T,S,b,L,R,C,B,k],w=makeSfntTable(O),q=w.encode(),E=computeCheckSum(q),W=w.fields,A=!1;for(p=0;p<W.length;p+=1)if("head table"===W[p].name){W[p].value.checkSumAdjustment=2981146554-E,A=!0;break}if(!A)throw new Error("Could not find head table with checkSum to adjust.");return w}var check=require("../check"),table=require("../table"),cmap=require("./cmap"),cff=require("./cff"),head=require("./head"),hhea=require("./hhea"),hmtx=require("./hmtx"),maxp=require("./maxp"),_name=require("./name"),os2=require("./os2"),post=require("./post");exports.computeCheckSum=computeCheckSum,exports.make=makeSfntTable,exports.fontToTable=fontToSfntTable;\r\n\r\n\r\n},{"../check":1,"../table":9,"./cff":10,"./cmap":11,"./head":14,"./hhea":15,"./hmtx":16,"./maxp":19,"./name":20,"./os2":21,"./post":22}],24:[function(require,module,exports){\r\n"use strict";function constant(e){return function(){return e}}var check=require("./check"),LIMIT16=32768,LIMIT32=2147483648,decode={},encode={},sizeOf={};encode.BYTE=function(e){return check.argument(e>=0&&255>=e,"Byte value should be between 0 and 255."),[e]},sizeOf.BYTE=constant(1),encode.CHAR=function(e){return[e.charCodeAt(0)]},sizeOf.BYTE=constant(1),encode.CHARARRAY=function(e){for(var n=[],t=0;t<e.length;t+=1)n.push(e.charCodeAt(t));return n},sizeOf.CHARARRAY=function(e){return e.length},encode.USHORT=function(e){return[e>>8&255,255&e]},sizeOf.USHORT=constant(2),encode.SHORT=function(e){return e>=LIMIT16&&(e=-(2*LIMIT16-e)),[e>>8&255,255&e]},sizeOf.SHORT=constant(2),encode.UINT24=function(e){return[e>>16&255,e>>8&255,255&e]},sizeOf.UINT24=constant(3),encode.ULONG=function(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]},sizeOf.ULONG=constant(4),encode.LONG=function(e){return e>=LIMIT32&&(e=-(2*LIMIT32-e)),[e>>24&255,e>>16&255,e>>8&255,255&e]},sizeOf.LONG=constant(4),encode.FIXED=encode.ULONG,sizeOf.FIXED=sizeOf.ULONG,encode.FWORD=encode.SHORT,sizeOf.FWORD=sizeOf.SHORT,encode.UFWORD=encode.USHORT,sizeOf.UFWORD=sizeOf.USHORT,encode.LONGDATETIME=function(){return[0,0,0,0,0,0,0,0]},sizeOf.LONGDATETIME=constant(8),encode.TAG=function(e){return check.argument(4===e.length,"Tag should be exactly 4 ASCII characters."),[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]},sizeOf.TAG=constant(4),encode.Card8=encode.BYTE,sizeOf.Card8=sizeOf.BYTE,encode.Card16=encode.USHORT,sizeOf.Card16=sizeOf.USHORT,encode.OffSize=encode.BYTE,sizeOf.OffSize=sizeOf.BYTE,encode.SID=encode.USHORT,sizeOf.SID=sizeOf.USHORT,encode.NUMBER=function(e){return e>=-107&&107>=e?[e+139]:e>=108&&1131>=e?(e-=108,[(e>>8)+247,255&e]):e>=-1131&&-108>=e?(e=-e-108,[(e>>8)+251,255&e]):e>=-32768&&32767>=e?encode.NUMBER16(e):encode.NUMBER32(e)},sizeOf.NUMBER=function(e){return encode.NUMBER(e).length},encode.NUMBER16=function(e){return[28,e>>8&255,255&e]},sizeOf.NUMBER16=constant(2),encode.NUMBER32=function(e){return[29,e>>24&255,e>>16&255,e>>8&255,255&e]},sizeOf.NUMBER32=constant(4),encode.REAL=function(e){var n=e.toString(),t=/\\.(\\d*?)(?:9{5,20}|0{5,20})\\d{0,2}(?:e(.+)|$)/.exec(n);if(t){var o=parseFloat("1e"+((t[2]?+t[2]:0)+t[1].length));n=(Math.round(e*o)/o).toString()}var c,r,f="";for(c=0,r=n.length;r>c;c+=1){var d=n[c];f+="e"===d?"-"===n[++c]?"c":"b":"."===d?"a":"-"===d?"e":d}f+=1&f.length?"f":"ff";var i=[30];for(c=0,r=f.length;r>c;c+=2)i.push(parseInt(f.substr(c,2),16));return i},sizeOf.REAL=function(e){return encode.REAL(e).length},encode.NAME=encode.CHARARRAY,sizeOf.NAME=sizeOf.CHARARRAY,encode.STRING=encode.CHARARRAY,sizeOf.STRING=sizeOf.CHARARRAY,encode.UTF16=function(e){for(var n=[],t=0;t<e.length;t+=1)n.push(0),n.push(e.charCodeAt(t));return n},sizeOf.UTF16=function(e){return 2*e.length},encode.INDEX=function(e){var n,t=1,o=[t],c=[],r=0;for(n=0;n<e.length;n+=1){var f=encode.OBJECT(e[n]);Array.prototype.push.apply(c,f),r+=f.length,t+=f.length,o.push(t)}if(0===c.length)return[0,0];var d=[],i=1+Math.floor(Math.log(r)/Math.log(2))/8|0,a=[void 0,encode.BYTE,encode.USHORT,encode.UINT24,encode.ULONG][i];for(n=0;n<o.length;n+=1){var u=a(o[n]);Array.prototype.push.apply(d,u)}return Array.prototype.concat(encode.Card16(e.length),encode.OffSize(i),d,c)},sizeOf.INDEX=function(e){return encode.INDEX(e).length},encode.DICT=function(e){for(var n=[],t=Object.keys(e),o=t.length,c=0;o>c;c+=1){var r=parseInt(t[c],0),f=e[r];n=n.concat(encode.OPERAND(f.value,f.type)),n=n.concat(encode.OPERATOR(r))}return n},sizeOf.DICT=function(e){return encode.DICT(e).length},encode.OPERATOR=function(e){return 1200>e?[e]:[12,e-1200]},encode.OPERAND=function(e,n){var t=[];if(Array.isArray(n))for(var o=0;o<n.length;o+=1)check.argument(e.length===n.length,"Not enough arguments given for type"+n),t=t.concat(encode.OPERAND(e[o],n[o]));else if("SID"===n)t=t.concat(encode.NUMBER(e));else if("offset"===n)t=t.concat(encode.NUMBER32(e));else if("number"===n)t=t.concat(encode.NUMBER(e));else{if("real"!==n)throw new Error("Unknown operand type "+n);t=t.concat(encode.REAL(e))}return t},encode.OP=encode.BYTE,sizeOf.OP=sizeOf.BYTE;var wmm="function"==typeof WeakMap&&new WeakMap;encode.CHARSTRING=function(e){if(wmm&&wmm.has(e))return wmm.get(e);for(var n=[],t=e.length,o=0;t>o;o+=1){var c=e[o];n=n.concat(encode[c.type](c.value))}return wmm&&wmm.set(e,n),n},sizeOf.CHARSTRING=function(e){return encode.CHARSTRING(e).length},encode.OBJECT=function(e){var n=encode[e.type];return check.argument(void 0!==n,"No encoding function for type "+e.type),n(e.value)},encode.TABLE=function(e){for(var n=[],t=e.fields.length,o=0;t>o;o+=1){var c=e.fields[o],r=encode[c.type];check.argument(void 0!==r,"No encoding function for field type "+c.type);var f=e[c.name];void 0===f&&(f=c.value);var d=r(f);n=n.concat(d)}return n},encode.LITERAL=function(e){return e},sizeOf.LITERAL=function(e){return e.length},exports.decode=decode,exports.encode=encode,exports.sizeOf=sizeOf;\r\n\r\n\r\n},{"./check":1}]},{},[6])(6)\r\n});';return a.a}