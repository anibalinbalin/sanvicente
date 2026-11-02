// Runs in <head> before first paint. In auto mode it picks light/dark from
// Montevideo's sunrise and sunset (same formula as suncalc, which
// useAutoTheme uses later) and stores it where next-themes reads it, so the
// right photos load first instead of after hydration.
export const themeScript = `(function(){try{
if((localStorage.getItem('theme-mode')||'auto')!=='auto')return;
var r=Math.PI/180,D=864e5,J0=9e-4,now=Date.now(),lw=r*54.9544,phi=r*-34.9011,e=r*23.4397,P=2*Math.PI;
var d=now/D-0.5+2440588-2451545,n=Math.round(d-J0-lw/P),ds=J0+lw/P+n;
var M=r*(357.5291+0.98560028*ds),L=M+r*(1.9148*Math.sin(M)+0.02*Math.sin(2*M)+3e-4*Math.sin(3*M))+r*102.9372+Math.PI;
var dec=Math.asin(Math.sin(e)*Math.sin(L)),k=0.0053*Math.sin(M)-0.0069*Math.sin(2*L),noon=ds+k;
var w=Math.acos((Math.sin(-0.833*r)-Math.sin(phi)*Math.sin(dec))/(Math.cos(phi)*Math.cos(dec)));
var set=J0+(w+lw)/P+n+k,rise=noon-(set-noon);
var toMs=function(j){return(j+2451545+0.5-2440588)*D};
localStorage.setItem('theme',now>toMs(set)||now<toMs(rise)?'dark':'light');
}catch(_){}})();`;
