(()=>{var yr="146";var uo=0,Cr=1,fo=2;var Ha=1,po=2,ui=3,Qn=0,yt=1,sn=2,rn=0,Jn=1,Pr=2,Rr=3,Lr=4,mo=5,qn=100,go=101,xo=102,Ir=103,Dr=104,_o=200,vo=201,yo=202,Mo=203,Ga=204,Wa=205,bo=206,wo=207,So=208,To=209,Ao=210,Eo=0,Co=1,Po=2,Hs=3,Ro=4,Lo=5,Io=6,Do=7,Xa=0,No=1,Fo=2,Wt=0,zo=1,Oo=2,Uo=3,Bo=4,ko=5,qa=300,jn=301,ei=302,Gs=303,Ws=304,ns=306,Xs=1e3,Et=1001,qs=1002,ot=1003,Nr=1004;var Fr=1005;var _t=1006,Vo=1007;var is=1008;var Mn=1009,Ho=1010,Go=1011,Ya=1012,Wo=1013,gn=1014,xn=1015,pi=1016,Xo=1017,qo=1018,$n=1020,Yo=1021,Zo=1022,Ct=1023,Jo=1024,$o=1025,vn=1026,ti=1027,Ko=1028,Qo=1029,jo=1030,el=1031,tl=1033,hs=33776,us=33777,ds=33778,fs=33779,zr=35840,Or=35841,Ur=35842,Br=35843,nl=36196,kr=37492,Vr=37496,Hr=37808,Gr=37809,Wr=37810,Xr=37811,qr=37812,Yr=37813,Zr=37814,Jr=37815,$r=37816,Kr=37817,Qr=37818,jr=37819,ea=37820,ta=37821,na=36492;var ki=2300,Vi=2301,ps=2302,ia=2400,sa=2401,ra=2402;var bn=3e3,Ve=3001,il=3200,sl=3201,rl=0,al=1;var Ht="srgb",_n="srgb-linear";var ms=7680;var ol=519,aa=35044;var oa="300 es",Ys=1035,an=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var gs=Math.PI/180,la=180/Math.PI;function xi(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(et[r&255]+et[r>>8&255]+et[r>>16&255]+et[r>>24&255]+"-"+et[e&255]+et[e>>8&255]+"-"+et[e>>16&15|64]+et[e>>24&255]+"-"+et[t&63|128]+et[t>>8&255]+"-"+et[t>>16&255]+et[t>>24&255]+et[n&255]+et[n>>8&255]+et[n>>16&255]+et[n>>24&255]).toLowerCase()}function ft(r,e,t){return Math.max(e,Math.min(t,r))}function ll(r,e){return(r%e+e)%e}function xs(r,e,t){return(1-t)*r+t*e}function ca(r){return(r&r-1)===0&&r!==0}function Zs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function _i(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ht(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ce=class{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class{constructor(){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],m=n[5],g=n[8],p=i[0],u=i[3],_=i[6],T=i[1],w=i[4],M=i[7],S=i[2],C=i[5],z=i[8];return s[0]=o*p+a*T+c*S,s[3]=o*u+a*w+c*C,s[6]=o*_+a*M+c*z,s[1]=l*p+h*T+f*S,s[4]=l*u+h*w+f*C,s[7]=l*_+h*M+f*z,s[2]=d*p+m*T+g*S,s[5]=d*u+m*w+g*C,s[8]=d*_+m*M+g*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,d=a*c-h*s,m=l*s-o*c,g=t*f+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/g;return e[0]=f*p,e[1]=(i*l-h*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(h*t-i*c)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],c=i[1],l=i[4],h=i[7];return i[0]=t*s+n*c,i[3]=t*o+n*l,i[6]=t*a+n*h,i[1]=-n*s+t*c,i[4]=-n*o+t*l,i[7]=-n*a+t*h,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};function Za(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Hi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Bi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var _s={[Ht]:{[_n]:yn},[_n]:{[Ht]:Bi}},wt={legacyMode:!0,get workingColorSpace(){return _n},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(_s[e]&&_s[e][t]!==void 0){let n=_s[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Ja={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},We={r:0,g:0,b:0},St={h:0,s:0,l:0},vi={h:0,s:0,l:0};function vs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function yi(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=_n){return this.r=e,this.g=t,this.b=n,wt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=_n){if(e=ll(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=vs(o,s,e+1/3),this.g=vs(o,s,e),this.b=vs(o,s,e-1/3)}return wt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ht){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,wt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,wt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,wt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,wt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ht){let n=Ja[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return wt.fromWorkingColorSpace(yi(this,We),e),ft(We.r*255,0,255)<<16^ft(We.g*255,0,255)<<8^ft(We.b*255,0,255)<<0}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_n){wt.fromWorkingColorSpace(yi(this,We),t);let n=We.r,i=We.g,s=We.b,o=Math.max(n,i,s),a=Math.min(n,i,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=_n){return wt.fromWorkingColorSpace(yi(this,We),t),e.r=We.r,e.g=We.g,e.b=We.b,e}getStyle(e=Ht){return wt.fromWorkingColorSpace(yi(this,We),e),e!==Ht?`color(${e} ${We.r} ${We.g} ${We.b})`:`rgb(${We.r*255|0},${We.g*255|0},${We.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(St),St.h+=e,St.s+=t,St.l+=n,this.setHSL(St.h,St.s,St.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(St),e.getHSL(vi);let n=xs(St.h,vi.h,t),i=xs(St.s,vi.s,t),s=xs(St.l,vi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};ze.NAMES=Ja;var In,Gi=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{In===void 0&&(In=Hi("canvas")),In.width=e.width,In.height=e.height;let n=In.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=In}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=yn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yn(t[n]/255)*255):t[n]=yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wi=class{constructor(e=null){this.isSource=!0,this.uuid=xi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ys(i[o].image)):s.push(ys(i[o]))}else s=ys(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function ys(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gi.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cl=0,pt=class extends an{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,n=Et,i=Et,s=_t,o=is,a=Ct,c=Mn,l=1,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cl++}),this.uuid=xi(),this.name="",this.source=new Wi(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xs:e.x=e.x-Math.floor(e.x);break;case Et:e.x=e.x<0?0:1;break;case qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xs:e.y=e.y-Math.floor(e.y);break;case Et:e.y=e.y<0?0:1;break;case qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=qa;var Be=class{constructor(e=0,t=0,n=0,i=1){Be.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],m=c[5],g=c[9],p=c[2],u=c[6],_=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-p)<.01&&Math.abs(g-u)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+p)<.1&&Math.abs(g+u)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,M=(m+1)/2,S=(_+1)/2,C=(h+d)/4,z=(f+p)/4,v=(g+u)/4;return w>M&&w>S?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=C/n,s=z/n):M>S?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=C/i,s=v/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=z/s,i=v/s),this.set(n,i,s,t),this}let T=Math.sqrt((u-g)*(u-g)+(f-p)*(f-p)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(u-g)/T,this.y=(f-p)/T,this.z=(d-h)/T,this.w=Math.acos((l+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qt=class extends an{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Be(0,0,e,t),this.scissorTest=!1,this.viewport=new Be(0,0,e,t);let i={width:e,height:t,depth:1};this.texture=new pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_t,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Wi(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xi=class extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ot,this.minFilter=ot,this.wrapR=Et,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Js=class extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ot,this.minFilter=ot,this.wrapR=Et,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var on=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3],d=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(f!==p||c!==d||l!==m||h!==g){let u=1-a,_=c*d+l*m+h*g+f*p,T=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){let S=Math.sqrt(w),C=Math.atan2(S,_*T);u=Math.sin(u*C)/S,a=Math.sin(a*C)/S}let M=a*T;if(c=c*u+d*M,l=l*u+m*M,h=h*u+g*M,f=f*u+p*M,u===1-a){let S=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=S,l*=S,h*=S,f*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*f+c*m-l*d,e[t+1]=c*g+h*d+l*f-a*m,e[t+2]=l*g+h*m+a*d-c*f,e[t+3]=h*g-a*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),f=a(s/2),d=c(n/2),m=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*f+l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f+d*m*g;break;case"YZX":this._x=d*h*f+l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f-d*m*g;break;case"XZY":this._x=d*h*f-l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ha.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ha.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,h=c*n+a*t-s*i,f=c*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=l*c+d*-s+h*-a-f*-o,this.y=h*c+d*-o+f*-s-l*-a,this.z=f*c+d*-a+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ms.copy(this).projectOnVector(e),this.sub(Ms)}reflect(e){return this.sub(Ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ms=new I,ha=new on,wn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){let h=e[c],f=e[c+1],d=e[c+2];h<t&&(t=h),f<n&&(n=f),d<i&&(i=d),h>s&&(s=h),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){let h=e.getX(c),f=e.getY(c),d=e.getZ(c);h<t&&(t=h),f<n&&(n=f),d<i&&(i=d),h>s&&(s=h),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)un.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(un)}else n.boundingBox===null&&n.computeBoundingBox(),bs.copy(n.boundingBox),bs.applyMatrix4(e.matrixWorld),this.union(bs);let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oi),Mi.subVectors(this.max,oi),Dn.subVectors(e.a,oi),Nn.subVectors(e.b,oi),Fn.subVectors(e.c,oi),Jt.subVectors(Nn,Dn),$t.subVectors(Fn,Nn),dn.subVectors(Dn,Fn);let t=[0,-Jt.z,Jt.y,0,-$t.z,$t.y,0,-dn.z,dn.y,Jt.z,0,-Jt.x,$t.z,0,-$t.x,dn.z,0,-dn.x,-Jt.y,Jt.x,0,-$t.y,$t.x,0,-dn.y,dn.x,0];return!ws(t,Dn,Nn,Fn,Mi)||(t=[1,0,0,0,1,0,0,0,1],!ws(t,Dn,Nn,Fn,Mi))?!1:(bi.crossVectors(Jt,$t),t=[bi.x,bi.y,bi.z],ws(t,Dn,Nn,Fn,Mi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return un.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(un).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ot[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ot[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ot[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ot[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ot[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ot[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ot[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ot[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ot),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ot=[new I,new I,new I,new I,new I,new I,new I,new I],un=new I,bs=new wn,Dn=new I,Nn=new I,Fn=new I,Jt=new I,$t=new I,dn=new I,oi=new I,Mi=new I,bi=new I,fn=new I;function ws(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){fn.fromArray(r,s);let a=i.x*Math.abs(fn.x)+i.y*Math.abs(fn.y)+i.z*Math.abs(fn.z),c=e.dot(fn),l=t.dot(fn),h=n.dot(fn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var hl=new wn,li=new I,Ss=new I,mi=class{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hl.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;li.subVectors(e,this.center);let t=li.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(li,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ss.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(li.copy(e.center).add(Ss)),this.expandByPoint(li.copy(e.center).sub(Ss))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ut=new I,Ts=new I,wi=new I,Kt=new I,As=new I,Si=new I,Es=new I,$s=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ut)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ut.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ut.copy(this.direction).multiplyScalar(t).add(this.origin),Ut.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ts.copy(e).add(t).multiplyScalar(.5),wi.copy(t).sub(e).normalize(),Kt.copy(this.origin).sub(Ts);let s=e.distanceTo(t)*.5,o=-this.direction.dot(wi),a=Kt.dot(this.direction),c=-Kt.dot(wi),l=Kt.lengthSq(),h=Math.abs(1-o*o),f,d,m,g;if(h>0)if(f=o*c-a,d=o*a-c,g=s*h,f>=0)if(d>=-g)if(d<=g){let p=1/h;f*=p,d*=p,m=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(wi).multiplyScalar(d).add(Ts),m}intersectSphere(e,t){Ut.subVectors(e.center,this.origin);let n=Ut.dot(this.direction),i=Ut.dot(Ut)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ut)!==null}intersectTriangle(e,t,n,i,s){As.subVectors(t,e),Si.subVectors(n,e),Es.crossVectors(As,Si);let o=this.direction.dot(Es),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kt.subVectors(this.origin,e);let c=a*this.direction.dot(Si.crossVectors(Kt,Si));if(c<0)return null;let l=a*this.direction.dot(As.cross(Kt));if(l<0||c+l>o)return null;let h=-a*Kt.dot(Es);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xe=class{constructor(){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,c,l,h,f,d,m,g,p,u){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=h,_[10]=f,_[14]=d,_[3]=m,_[7]=g,_[11]=p,_[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/zn.setFromMatrixColumn(e,0).length(),s=1/zn.setFromMatrixColumn(e,1).length(),o=1/zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=o*h,m=o*f,g=a*h,p=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+g*l,t[5]=d-p*l,t[9]=-a*c,t[2]=p-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,m=c*f,g=l*h,p=l*f;t[0]=d+p*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=p+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,m=c*f,g=l*h,p=l*f;t[0]=d-p*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=p-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,m=o*f,g=a*h,p=a*f;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+p,t[1]=c*f,t[5]=p*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*h,t[4]=p-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*f+g,t[10]=d-p*f}else if(e.order==="XZY"){let d=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+p,t[5]=o*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*h,t[10]=p*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ul,e,dl)}lookAt(e,t,n){let i=this.elements;return ut.subVectors(e,t),ut.lengthSq()===0&&(ut.z=1),ut.normalize(),Qt.crossVectors(n,ut),Qt.lengthSq()===0&&(Math.abs(n.z)===1?ut.x+=1e-4:ut.z+=1e-4,ut.normalize(),Qt.crossVectors(n,ut)),Qt.normalize(),Ti.crossVectors(ut,Qt),i[0]=Qt.x,i[4]=Ti.x,i[8]=ut.x,i[1]=Qt.y,i[5]=Ti.y,i[9]=ut.y,i[2]=Qt.z,i[6]=Ti.z,i[10]=ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],m=n[13],g=n[2],p=n[6],u=n[10],_=n[14],T=n[3],w=n[7],M=n[11],S=n[15],C=i[0],z=i[4],v=i[8],A=i[12],D=i[1],J=i[5],ne=i[9],V=i[13],N=i[2],X=i[6],Y=i[10],K=i[14],G=i[3],R=i[7],F=i[11],ee=i[15];return s[0]=o*C+a*D+c*N+l*G,s[4]=o*z+a*J+c*X+l*R,s[8]=o*v+a*ne+c*Y+l*F,s[12]=o*A+a*V+c*K+l*ee,s[1]=h*C+f*D+d*N+m*G,s[5]=h*z+f*J+d*X+m*R,s[9]=h*v+f*ne+d*Y+m*F,s[13]=h*A+f*V+d*K+m*ee,s[2]=g*C+p*D+u*N+_*G,s[6]=g*z+p*J+u*X+_*R,s[10]=g*v+p*ne+u*Y+_*F,s[14]=g*A+p*V+u*K+_*ee,s[3]=T*C+w*D+M*N+S*G,s[7]=T*z+w*J+M*X+S*R,s[11]=T*v+w*ne+M*Y+S*F,s[15]=T*A+w*V+M*K+S*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],m=e[14],g=e[3],p=e[7],u=e[11],_=e[15];return g*(+s*c*f-i*l*f-s*a*d+n*l*d+i*a*m-n*c*m)+p*(+t*c*m-t*l*d+s*o*d-i*o*m+i*l*h-s*c*h)+u*(+t*l*f-t*a*m-s*o*f+n*o*m+s*a*h-n*l*h)+_*(-i*a*h-t*c*f+t*a*d+i*o*f-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],m=e[11],g=e[12],p=e[13],u=e[14],_=e[15],T=f*u*l-p*d*l+p*c*m-a*u*m-f*c*_+a*d*_,w=g*d*l-h*u*l-g*c*m+o*u*m+h*c*_-o*d*_,M=h*p*l-g*f*l+g*a*m-o*p*m-h*a*_+o*f*_,S=g*f*c-h*p*c-g*a*d+o*p*d+h*a*u-o*f*u,C=t*T+n*w+i*M+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/C;return e[0]=T*z,e[1]=(p*d*s-f*u*s-p*i*m+n*u*m+f*i*_-n*d*_)*z,e[2]=(a*u*s-p*c*s+p*i*l-n*u*l-a*i*_+n*c*_)*z,e[3]=(f*c*s-a*d*s-f*i*l+n*d*l+a*i*m-n*c*m)*z,e[4]=w*z,e[5]=(h*u*s-g*d*s+g*i*m-t*u*m-h*i*_+t*d*_)*z,e[6]=(g*c*s-o*u*s-g*i*l+t*u*l+o*i*_-t*c*_)*z,e[7]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*m+t*c*m)*z,e[8]=M*z,e[9]=(g*f*s-h*p*s-g*n*m+t*p*m+h*n*_-t*f*_)*z,e[10]=(o*p*s-g*a*s+g*n*l-t*p*l-o*n*_+t*a*_)*z,e[11]=(h*a*s-o*f*s-h*n*l+t*f*l+o*n*m-t*a*m)*z,e[12]=S*z,e[13]=(h*p*i-g*f*i+g*n*d-t*p*d-h*n*u+t*f*u)*z,e[14]=(g*a*i-o*p*i-g*n*c+t*p*c+o*n*u-t*a*u)*z,e[15]=(o*f*i-h*a*i+h*n*c-t*f*c-o*n*d+t*a*d)*z,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,f=a+a,d=s*l,m=s*h,g=s*f,p=o*h,u=o*f,_=a*f,T=c*l,w=c*h,M=c*f,S=n.x,C=n.y,z=n.z;return i[0]=(1-(p+_))*S,i[1]=(m+M)*S,i[2]=(g-w)*S,i[3]=0,i[4]=(m-M)*C,i[5]=(1-(d+_))*C,i[6]=(u+T)*C,i[7]=0,i[8]=(g+w)*z,i[9]=(u-T)*z,i[10]=(1-(d+p))*z,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=zn.set(i[0],i[1],i[2]).length(),o=zn.set(i[4],i[5],i[6]).length(),a=zn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Tt.copy(this);let l=1/s,h=1/o,f=1/a;return Tt.elements[0]*=l,Tt.elements[1]*=l,Tt.elements[2]*=l,Tt.elements[4]*=h,Tt.elements[5]*=h,Tt.elements[6]*=h,Tt.elements[8]*=f,Tt.elements[9]*=f,Tt.elements[10]*=f,t.setFromRotationMatrix(Tt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){let a=this.elements,c=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){let a=this.elements,c=1/(t-e),l=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*l,m=(o+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},zn=new I,Tt=new Xe,ul=new I(0,0,0),dl=new I(1,1,1),Qt=new I,Ti=new I,ut=new I,ua=new Xe,da=new on,Sn=class{constructor(e=0,t=0,n=0,i=Sn.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ua.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ua,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return da.setFromEuler(this),this.setFromQuaternion(da,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};Sn.DefaultOrder="XYZ";Sn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var qi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fl=0,fa=new I,On=new on,Bt=new Xe,Ai=new I,ci=new I,pl=new I,ml=new on,pa=new I(1,0,0),ma=new I(0,1,0),ga=new I(0,0,1),gl={type:"added"},xa={type:"removed"},rt=class extends an{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fl++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DefaultUp.clone();let e=new I,t=new Sn,n=new on,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new lt}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=rt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=rt.DefaultMatrixWorldAutoUpdate,this.layers=new qi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return On.setFromAxisAngle(e,t),this.quaternion.multiply(On),this}rotateOnWorldAxis(e,t){return On.setFromAxisAngle(e,t),this.quaternion.premultiply(On),this}rotateX(e){return this.rotateOnAxis(pa,e)}rotateY(e){return this.rotateOnAxis(ma,e)}rotateZ(e){return this.rotateOnAxis(ga,e)}translateOnAxis(e,t){return fa.copy(e).applyQuaternion(this.quaternion),this.position.add(fa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pa,e)}translateY(e){return this.translateOnAxis(ma,e)}translateZ(e){return this.translateOnAxis(ga,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Bt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ai.copy(e):Ai.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bt.lookAt(ci,Ai,this.up):Bt.lookAt(Ai,ci,this.up),this.quaternion.setFromRotationMatrix(Bt),i&&(Bt.extractRotation(i.matrixWorld),On.setFromRotationMatrix(Bt),this.quaternion.premultiply(On.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xa)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(xa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Bt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,e,pl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,ml,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++){let a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};rt.DefaultUp=new I(0,1,0);rt.DefaultMatrixAutoUpdate=!0;rt.DefaultMatrixWorldAutoUpdate=!0;var At=new I,kt=new I,Cs=new I,Vt=new I,Un=new I,Bn=new I,_a=new I,Ps=new I,Rs=new I,Ls=new I,Pt=class{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),At.subVectors(e,t),i.cross(At);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){At.subVectors(i,t),kt.subVectors(n,t),Cs.subVectors(e,t);let o=At.dot(At),a=At.dot(kt),c=At.dot(Cs),l=kt.dot(kt),h=kt.dot(Cs),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);let d=1/f,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vt),Vt.x>=0&&Vt.y>=0&&Vt.x+Vt.y<=1}static getUV(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Vt),c.set(0,0),c.addScaledVector(s,Vt.x),c.addScaledVector(o,Vt.y),c.addScaledVector(a,Vt.z),c}static isFrontFacing(e,t,n,i){return At.subVectors(n,t),kt.subVectors(e,t),At.cross(kt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return At.subVectors(this.c,this.b),kt.subVectors(this.a,this.b),At.cross(kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Pt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Pt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Un.subVectors(i,n),Bn.subVectors(s,n),Ps.subVectors(e,n);let c=Un.dot(Ps),l=Bn.dot(Ps);if(c<=0&&l<=0)return t.copy(n);Rs.subVectors(e,i);let h=Un.dot(Rs),f=Bn.dot(Rs);if(h>=0&&f<=h)return t.copy(i);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Un,o);Ls.subVectors(e,s);let m=Un.dot(Ls),g=Bn.dot(Ls);if(g>=0&&m<=g)return t.copy(s);let p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Bn,a);let u=h*g-m*f;if(u<=0&&f-h>=0&&m-g>=0)return _a.subVectors(s,i),a=(f-h)/(f-h+(m-g)),t.copy(i).addScaledVector(_a,a);let _=1/(u+p+d);return o=p*_,a=d*_,t.copy(n).addScaledVector(Un,o).addScaledVector(Bn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xl=0,ni=class extends an{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Jn,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ga,this.blendDst=Wa,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Yi=class extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ge=new I,Ei=new Ce,Mt=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=aa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ei.fromBufferAttribute(this,t),Ei.applyMatrix3(e),this.setXY(t,Ei.x,Ei.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ge.fromBufferAttribute(this,t),Ge.applyMatrix3(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ge.fromBufferAttribute(this,t),Ge.applyMatrix4(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ge.fromBufferAttribute(this,t),Ge.applyNormalMatrix(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ge.fromBufferAttribute(this,t),Ge.transformDirection(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==aa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var Zi=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ji=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Xt=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var _l=0,xt=new Xe,Is=new rt,kn=new I,dt=new wn,hi=new wn,$e=new I,Yt=class extends an{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_l++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Za(e)?Ji:Zi)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xt.makeRotationFromQuaternion(e),this.applyMatrix4(xt),this}rotateX(e){return xt.makeRotationX(e),this.applyMatrix4(xt),this}rotateY(e){return xt.makeRotationY(e),this.applyMatrix4(xt),this}rotateZ(e){return xt.makeRotationZ(e),this.applyMatrix4(xt),this}translate(e,t,n){return xt.makeTranslation(e,t,n),this.applyMatrix4(xt),this}scale(e,t,n){return xt.makeScale(e,t,n),this.applyMatrix4(xt),this}lookAt(e){return Is.lookAt(e),Is.updateMatrix(),this.applyMatrix4(Is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kn).negate(),this.translate(kn.x,kn.y,kn.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];dt.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,dt.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,dt.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(dt.min),this.boundingBox.expandByPoint(dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(dt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];hi.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(dt.min,hi.min),dt.expandByPoint($e),$e.addVectors(dt.max,hi.max),dt.expandByPoint($e)):(dt.expandByPoint(hi.min),dt.expandByPoint(hi.max))}dt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)$e.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared($e));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)$e.fromBufferAttribute(a,l),c&&(kn.fromBufferAttribute(e,l),$e.add(kn)),i=Math.max(i,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let D=0;D<a;D++)l[D]=new I,h[D]=new I;let f=new I,d=new I,m=new I,g=new Ce,p=new Ce,u=new Ce,_=new I,T=new I;function w(D,J,ne){f.fromArray(i,D*3),d.fromArray(i,J*3),m.fromArray(i,ne*3),g.fromArray(o,D*2),p.fromArray(o,J*2),u.fromArray(o,ne*2),d.sub(f),m.sub(f),p.sub(g),u.sub(g);let V=1/(p.x*u.y-u.x*p.y);!isFinite(V)||(_.copy(d).multiplyScalar(u.y).addScaledVector(m,-p.y).multiplyScalar(V),T.copy(m).multiplyScalar(p.x).addScaledVector(d,-u.x).multiplyScalar(V),l[D].add(_),l[J].add(_),l[ne].add(_),h[D].add(T),h[J].add(T),h[ne].add(T))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let D=0,J=M.length;D<J;++D){let ne=M[D],V=ne.start,N=ne.count;for(let X=V,Y=V+N;X<Y;X+=3)w(n[X+0],n[X+1],n[X+2])}let S=new I,C=new I,z=new I,v=new I;function A(D){z.fromArray(s,D*3),v.copy(z);let J=l[D];S.copy(J),S.sub(z.multiplyScalar(z.dot(J))).normalize(),C.crossVectors(v,J);let V=C.dot(h[D])<0?-1:1;c[D*4]=S.x,c[D*4+1]=S.y,c[D*4+2]=S.z,c[D*4+3]=V}for(let D=0,J=M.length;D<J;++D){let ne=M[D],V=ne.start,N=ne.count;for(let X=V,Y=V+N;X<Y;X+=3)A(n[X+0]),A(n[X+1]),A(n[X+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let i=new I,s=new I,o=new I,a=new I,c=new I,l=new I,h=new I,f=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),p=e.getX(d+1),u=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,u),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,u),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(u,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$e.fromBufferAttribute(e,t),$e.normalize(),e.setXYZ(t,$e.x,$e.y,$e.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let p=0,u=c.length;p<u;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*h;for(let _=0;_<h;_++)d[g++]=l[m++]}return new Mt(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Yt,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,f=l.length;h<f;h++){let d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],f=s[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},va=new Xe,Vn=new $s,Ds=new mi,jt=new I,en=new I,tn=new I,Ns=new I,Fs=new I,zs=new I,Ci=new I,Pi=new I,Ri=new I,Li=new Ce,Ii=new Ce,Di=new Ce,Os=new I,Ni=new I,vt=class extends rt{constructor(e=new Yt,t=new Yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),e.ray.intersectsSphere(Ds)===!1)||(va.copy(s).invert(),Vn.copy(e.ray).applyMatrix4(va),n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1))return;let o,a=n.index,c=n.attributes.position,l=n.morphAttributes.position,h=n.morphTargetsRelative,f=n.attributes.uv,d=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,u=m.length;p<u;p++){let _=m[p],T=i[_.materialIndex],w=Math.max(_.start,g.start),M=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let S=w,C=M;S<C;S+=3){let z=a.getX(S),v=a.getX(S+1),A=a.getX(S+2);o=Fi(this,T,e,Vn,c,l,h,f,d,z,v,A),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{let p=Math.max(0,g.start),u=Math.min(a.count,g.start+g.count);for(let _=p,T=u;_<T;_+=3){let w=a.getX(_),M=a.getX(_+1),S=a.getX(_+2);o=Fi(this,i,e,Vn,c,l,h,f,d,w,M,S),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,u=m.length;p<u;p++){let _=m[p],T=i[_.materialIndex],w=Math.max(_.start,g.start),M=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let S=w,C=M;S<C;S+=3){let z=S,v=S+1,A=S+2;o=Fi(this,T,e,Vn,c,l,h,f,d,z,v,A),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{let p=Math.max(0,g.start),u=Math.min(c.count,g.start+g.count);for(let _=p,T=u;_<T;_+=3){let w=_,M=_+1,S=_+2;o=Fi(this,i,e,Vn,c,l,h,f,d,w,M,S),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}};function vl(r,e,t,n,i,s,o,a){let c;if(e.side===yt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side!==sn,a),c===null)return null;Ni.copy(a),Ni.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(Ni);return l<t.near||l>t.far?null:{distance:l,point:Ni.clone(),object:r}}function Fi(r,e,t,n,i,s,o,a,c,l,h,f){jt.fromBufferAttribute(i,l),en.fromBufferAttribute(i,h),tn.fromBufferAttribute(i,f);let d=r.morphTargetInfluences;if(s&&d){Ci.set(0,0,0),Pi.set(0,0,0),Ri.set(0,0,0);for(let g=0,p=s.length;g<p;g++){let u=d[g],_=s[g];u!==0&&(Ns.fromBufferAttribute(_,l),Fs.fromBufferAttribute(_,h),zs.fromBufferAttribute(_,f),o?(Ci.addScaledVector(Ns,u),Pi.addScaledVector(Fs,u),Ri.addScaledVector(zs,u)):(Ci.addScaledVector(Ns.sub(jt),u),Pi.addScaledVector(Fs.sub(en),u),Ri.addScaledVector(zs.sub(tn),u)))}jt.add(Ci),en.add(Pi),tn.add(Ri)}r.isSkinnedMesh&&(r.boneTransform(l,jt),r.boneTransform(h,en),r.boneTransform(f,tn));let m=vl(r,e,t,n,jt,en,tn,Os);if(m){a&&(Li.fromBufferAttribute(a,l),Ii.fromBufferAttribute(a,h),Di.fromBufferAttribute(a,f),m.uv=Pt.getUV(Os,jt,en,tn,Li,Ii,Di,new Ce)),c&&(Li.fromBufferAttribute(c,l),Ii.fromBufferAttribute(c,h),Di.fromBufferAttribute(c,f),m.uv2=Pt.getUV(Os,jt,en,tn,Li,Ii,Di,new Ce));let g={a:l,b:h,c:f,normal:new I,materialIndex:0};Pt.getNormal(jt,en,tn,g.normal),m.face=g}return m}var Tn=class extends Yt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],f=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(f,2));function g(p,u,_,T,w,M,S,C,z,v,A){let D=M/z,J=S/v,ne=M/2,V=S/2,N=C/2,X=z+1,Y=v+1,K=0,G=0,R=new I;for(let F=0;F<Y;F++){let ee=F*J-V;for(let q=0;q<X;q++){let te=q*D-ne;R[p]=te*T,R[u]=ee*w,R[_]=N,l.push(R.x,R.y,R.z),R[p]=0,R[u]=0,R[_]=C>0?1:-1,h.push(R.x,R.y,R.z),f.push(q/z),f.push(1-F/v),K+=1}}for(let F=0;F<v;F++)for(let ee=0;ee<z;ee++){let q=d+ee+X*F,te=d+ee+X*(F+1),oe=d+(ee+1)+X*(F+1),ve=d+(ee+1)+X*F;c.push(q,te,ve),c.push(te,oe,ve),G+=6}a.addGroup(m,G,A),m+=G,d+=K}}static fromJSON(e){return new Tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ii(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function it(r){let e={};for(let t=0;t<r.length;t++){let n=ii(r[t]);for(let i in n)e[i]=n[i]}return e}function yl(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}var Mr={clone:ii,merge:it},Ml=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bt=class extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ml,this.fragmentShader=bl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ii(e.uniforms),this.uniformsGroups=yl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$i=class extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},st=class extends $i{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Hn=90,Gn=1,Ks=class extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;let i=new st(Hn,Gn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new I(1,0,0)),this.add(i);let s=new st(Hn,Gn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(-1,0,0)),this.add(s);let o=new st(Hn,Gn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new I(0,1,0)),this.add(o);let a=new st(Hn,Gn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new I(0,-1,0)),this.add(a);let c=new st(Hn,Gn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,1)),this.add(c);let l=new st(Hn,Gn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,o,a,c,l]=this.children,h=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Wt,e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},Ki=class extends pt{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:jn,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qs=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ki(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Tn(5,5,5),s=new bt({name:"CubemapFromEquirect",uniforms:ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:rn});s.uniforms.tEquirect.value=t;let o=new vt(i,s),a=t.minFilter;return t.minFilter===is&&(t.minFilter=_t),new Ks(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},Us=new I,wl=new I,Sl=new lt,Gt=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Us.subVectors(n,t).cross(wl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(Us),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sl.getNormalMatrix(e),i=this.coplanarPoint(Us).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wn=new mi,zi=new I,Qi=class{constructor(e=new Gt,t=new Gt,n=new Gt,i=new Gt,s=new Gt,o=new Gt){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],f=n[7],d=n[8],m=n[9],g=n[10],p=n[11],u=n[12],_=n[13],T=n[14],w=n[15];return t[0].setComponents(a-i,f-c,p-d,w-u).normalize(),t[1].setComponents(a+i,f+c,p+d,w+u).normalize(),t[2].setComponents(a+s,f+l,p+m,w+_).normalize(),t[3].setComponents(a-s,f-l,p-m,w-_).normalize(),t[4].setComponents(a-o,f-h,p-g,w-T).normalize(),t[5].setComponents(a+o,f+h,p+g,w+T).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(zi.x=i.normal.x>0?e.max.x:e.min.x,zi.y=i.normal.y>0?e.max.y:e.min.y,zi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(zi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $a(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Tl(r,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let f=l.array,d=l.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,f,d),l.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,f){let d=h.array,m=h.updateRange;r.bindBuffer(f,l),m.count===-1?r.bufferSubData(f,0,d):(t?r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let f=n.get(l);f===void 0?n.set(l,i(l,h)):f.version<l.version&&(s(f.buffer,l,h),f.version=l.version)}return{get:o,remove:a,update:c}}var An=class extends Yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,f=e/a,d=t/c,m=[],g=[],p=[],u=[];for(let _=0;_<h;_++){let T=_*d-o;for(let w=0;w<l;w++){let M=w*f-s;g.push(M,-T,0),p.push(0,0,1),u.push(w/a),u.push(1-_/c)}}for(let _=0;_<c;_++)for(let T=0;T<a;T++){let w=T+l*_,M=T+l*(_+1),S=T+1+l*(_+1),C=T+1+l*_;m.push(w,M,C),m.push(M,S,C)}this.setIndex(m),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(p,3)),this.setAttribute("uv",new Xt(u,2))}static fromJSON(e){return new An(e.width,e.height,e.widthSegments,e.heightSegments)}},Al=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,El=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ll=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Il="vec3 transformed = vec3( position );",Dl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Fl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ol=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ul=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ql=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,$l=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ql="gl_FragColor = linearToOutputTexel( gl_FragColor );",jl=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ec=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ic=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ac=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,pc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,gc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,_c=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,yc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Mc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Tc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ac=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ec=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ic=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Oc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Uc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Bc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,kc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Xc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,qc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Yc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Zc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$c=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Kc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,th=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ih=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sh=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rh=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,ah=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ch=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ph=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,gh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,xh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,_h=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,vh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,yh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Mh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,bh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,wh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Th=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ch=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ph=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ih=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Oh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$h=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:Al,alphamap_pars_fragment:El,alphatest_fragment:Cl,alphatest_pars_fragment:Pl,aomap_fragment:Rl,aomap_pars_fragment:Ll,begin_vertex:Il,beginnormal_vertex:Dl,bsdfs:Nl,iridescence_fragment:Fl,bumpmap_pars_fragment:zl,clipping_planes_fragment:Ol,clipping_planes_pars_fragment:Ul,clipping_planes_pars_vertex:Bl,clipping_planes_vertex:kl,color_fragment:Vl,color_pars_fragment:Hl,color_pars_vertex:Gl,color_vertex:Wl,common:Xl,cube_uv_reflection_fragment:ql,defaultnormal_vertex:Yl,displacementmap_pars_vertex:Zl,displacementmap_vertex:Jl,emissivemap_fragment:$l,emissivemap_pars_fragment:Kl,encodings_fragment:Ql,encodings_pars_fragment:jl,envmap_fragment:ec,envmap_common_pars_fragment:tc,envmap_pars_fragment:nc,envmap_pars_vertex:ic,envmap_physical_pars_fragment:mc,envmap_vertex:sc,fog_vertex:rc,fog_pars_vertex:ac,fog_fragment:oc,fog_pars_fragment:lc,gradientmap_pars_fragment:cc,lightmap_fragment:hc,lightmap_pars_fragment:uc,lights_lambert_fragment:dc,lights_lambert_pars_fragment:fc,lights_pars_begin:pc,lights_toon_fragment:gc,lights_toon_pars_fragment:xc,lights_phong_fragment:_c,lights_phong_pars_fragment:vc,lights_physical_fragment:yc,lights_physical_pars_fragment:Mc,lights_fragment_begin:bc,lights_fragment_maps:wc,lights_fragment_end:Sc,logdepthbuf_fragment:Tc,logdepthbuf_pars_fragment:Ac,logdepthbuf_pars_vertex:Ec,logdepthbuf_vertex:Cc,map_fragment:Pc,map_pars_fragment:Rc,map_particle_fragment:Lc,map_particle_pars_fragment:Ic,metalnessmap_fragment:Dc,metalnessmap_pars_fragment:Nc,morphcolor_vertex:Fc,morphnormal_vertex:zc,morphtarget_pars_vertex:Oc,morphtarget_vertex:Uc,normal_fragment_begin:Bc,normal_fragment_maps:kc,normal_pars_fragment:Vc,normal_pars_vertex:Hc,normal_vertex:Gc,normalmap_pars_fragment:Wc,clearcoat_normal_fragment_begin:Xc,clearcoat_normal_fragment_maps:qc,clearcoat_pars_fragment:Yc,iridescence_pars_fragment:Zc,output_fragment:Jc,packing:$c,premultiplied_alpha_fragment:Kc,project_vertex:Qc,dithering_fragment:jc,dithering_pars_fragment:eh,roughnessmap_fragment:th,roughnessmap_pars_fragment:nh,shadowmap_pars_fragment:ih,shadowmap_pars_vertex:sh,shadowmap_vertex:rh,shadowmask_pars_fragment:ah,skinbase_vertex:oh,skinning_pars_vertex:lh,skinning_vertex:ch,skinnormal_vertex:hh,specularmap_fragment:uh,specularmap_pars_fragment:dh,tonemapping_fragment:fh,tonemapping_pars_fragment:ph,transmission_fragment:mh,transmission_pars_fragment:gh,uv_pars_fragment:xh,uv_pars_vertex:_h,uv_vertex:vh,uv2_pars_fragment:yh,uv2_pars_vertex:Mh,uv2_vertex:bh,worldpos_vertex:wh,background_vert:Sh,background_frag:Th,backgroundCube_vert:Ah,backgroundCube_frag:Eh,cube_vert:Ch,cube_frag:Ph,depth_vert:Rh,depth_frag:Lh,distanceRGBA_vert:Ih,distanceRGBA_frag:Dh,equirect_vert:Nh,equirect_frag:Fh,linedashed_vert:zh,linedashed_frag:Oh,meshbasic_vert:Uh,meshbasic_frag:Bh,meshlambert_vert:kh,meshlambert_frag:Vh,meshmatcap_vert:Hh,meshmatcap_frag:Gh,meshnormal_vert:Wh,meshnormal_frag:Xh,meshphong_vert:qh,meshphong_frag:Yh,meshphysical_vert:Zh,meshphysical_frag:Jh,meshtoon_vert:$h,meshtoon_frag:Kh,points_vert:Qh,points_frag:jh,shadow_vert:eu,shadow_frag:tu,sprite_vert:nu,sprite_frag:iu},j={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new lt},uv2Transform:{value:new lt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new lt}}},Dt={basic:{uniforms:it([j.common,j.specularmap,j.envmap,j.aomap,j.lightmap,j.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:it([j.common,j.specularmap,j.envmap,j.aomap,j.lightmap,j.emissivemap,j.bumpmap,j.normalmap,j.displacementmap,j.fog,j.lights,{emissive:{value:new ze(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:it([j.common,j.specularmap,j.envmap,j.aomap,j.lightmap,j.emissivemap,j.bumpmap,j.normalmap,j.displacementmap,j.fog,j.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:it([j.common,j.envmap,j.aomap,j.lightmap,j.emissivemap,j.bumpmap,j.normalmap,j.displacementmap,j.roughnessmap,j.metalnessmap,j.fog,j.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:it([j.common,j.aomap,j.lightmap,j.emissivemap,j.bumpmap,j.normalmap,j.displacementmap,j.gradientmap,j.fog,j.lights,{emissive:{value:new ze(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:it([j.common,j.bumpmap,j.normalmap,j.displacementmap,j.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:it([j.points,j.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:it([j.common,j.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:it([j.common,j.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:it([j.common,j.bumpmap,j.normalmap,j.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:it([j.sprite,j.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:it([j.common,j.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:it([j.lights,j.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};Dt.physical={uniforms:it([Dt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};function su(r,e,t,n,i,s,o){let a=new ze(0),c=s===!0?0:1,l,h,f=null,d=0,m=null;function g(u,_){let T=!1,w=_.isScene===!0?_.background:null;w&&w.isTexture&&(w=(_.backgroundBlurriness>0?t:e).get(w));let M=r.xr,S=M.getSession&&M.getSession();S&&S.environmentBlendMode==="additive"&&(w=null),w===null?p(a,c):w&&w.isColor&&(p(w,1),T=!0),(r.autoClear||T)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),w&&(w.isCubeTexture||w.mapping===ns)?(h===void 0&&(h=new vt(new Tn(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:ii(Dt.backgroundCube.uniforms),vertexShader:Dt.backgroundCube.vertexShader,fragmentShader:Dt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,z,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(f!==w||d!==w.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,f=w,d=w.version,m=r.toneMapping),h.layers.enableAll(),u.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new vt(new An(2,2),new bt({name:"BackgroundMaterial",uniforms:ii(Dt.background.uniforms),vertexShader:Dt.background.vertexShader,fragmentShader:Dt.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,f=w,d=w.version,m=r.toneMapping),l.layers.enableAll(),u.unshift(l,l.geometry,l.material,0,0,null))}function p(u,_){n.buffers.color.setClear(u.r,u.g,u.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(u,_=1){a.set(u),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(u){c=u,p(a,c)},render:g}}function ru(r,e,t,n){let i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=u(null),l=c,h=!1;function f(N,X,Y,K,G){let R=!1;if(o){let F=p(K,Y,X);l!==F&&(l=F,m(l.object)),R=_(N,K,Y,G),R&&T(N,K,Y,G)}else{let F=X.wireframe===!0;(l.geometry!==K.id||l.program!==Y.id||l.wireframe!==F)&&(l.geometry=K.id,l.program=Y.id,l.wireframe=F,R=!0)}G!==null&&t.update(G,34963),(R||h)&&(h=!1,v(N,X,Y,K),G!==null&&r.bindBuffer(34963,t.get(G).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(N){return n.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function p(N,X,Y){let K=Y.wireframe===!0,G=a[N.id];G===void 0&&(G={},a[N.id]=G);let R=G[X.id];R===void 0&&(R={},G[X.id]=R);let F=R[K];return F===void 0&&(F=u(d()),R[K]=F),F}function u(N){let X=[],Y=[],K=[];for(let G=0;G<i;G++)X[G]=0,Y[G]=0,K[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Y,attributeDivisors:K,object:N,attributes:{},index:null}}function _(N,X,Y,K){let G=l.attributes,R=X.attributes,F=0,ee=Y.getAttributes();for(let q in ee)if(ee[q].location>=0){let oe=G[q],ve=R[q];if(ve===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(ve=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(ve=N.instanceColor)),oe===void 0||oe.attribute!==ve||ve&&oe.data!==ve.data)return!0;F++}return l.attributesNum!==F||l.index!==K}function T(N,X,Y,K){let G={},R=X.attributes,F=0,ee=Y.getAttributes();for(let q in ee)if(ee[q].location>=0){let oe=R[q];oe===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor));let ve={};ve.attribute=oe,oe&&oe.data&&(ve.data=oe.data),G[q]=ve,F++}l.attributes=G,l.attributesNum=F,l.index=K}function w(){let N=l.newAttributes;for(let X=0,Y=N.length;X<Y;X++)N[X]=0}function M(N){S(N,0)}function S(N,X){let Y=l.newAttributes,K=l.enabledAttributes,G=l.attributeDivisors;Y[N]=1,K[N]===0&&(r.enableVertexAttribArray(N),K[N]=1),G[N]!==X&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,X),G[N]=X)}function C(){let N=l.newAttributes,X=l.enabledAttributes;for(let Y=0,K=X.length;Y<K;Y++)X[Y]!==N[Y]&&(r.disableVertexAttribArray(Y),X[Y]=0)}function z(N,X,Y,K,G,R){n.isWebGL2===!0&&(Y===5124||Y===5125)?r.vertexAttribIPointer(N,X,Y,G,R):r.vertexAttribPointer(N,X,Y,K,G,R)}function v(N,X,Y,K){if(n.isWebGL2===!1&&(N.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();let G=K.attributes,R=Y.getAttributes(),F=X.defaultAttributeValues;for(let ee in R){let q=R[ee];if(q.location>=0){let te=G[ee];if(te===void 0&&(ee==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),ee==="instanceColor"&&N.instanceColor&&(te=N.instanceColor)),te!==void 0){let oe=te.normalized,ve=te.itemSize,W=t.get(te);if(W===void 0)continue;let De=W.buffer,ge=W.type,ye=W.bytesPerElement;if(te.isInterleavedBufferAttribute){let ae=te.data,Fe=ae.stride,Se=te.offset;if(ae.isInstancedInterleavedBuffer){for(let pe=0;pe<q.locationSize;pe++)S(q.location+pe,ae.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let pe=0;pe<q.locationSize;pe++)M(q.location+pe);r.bindBuffer(34962,De);for(let pe=0;pe<q.locationSize;pe++)z(q.location+pe,ve/q.locationSize,ge,oe,Fe*ye,(Se+ve/q.locationSize*pe)*ye)}else{if(te.isInstancedBufferAttribute){for(let ae=0;ae<q.locationSize;ae++)S(q.location+ae,te.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ae=0;ae<q.locationSize;ae++)M(q.location+ae);r.bindBuffer(34962,De);for(let ae=0;ae<q.locationSize;ae++)z(q.location+ae,ve/q.locationSize,ge,oe,ve*ye,ve/q.locationSize*ae*ye)}}else if(F!==void 0){let oe=F[ee];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(q.location,oe);break;case 3:r.vertexAttrib3fv(q.location,oe);break;case 4:r.vertexAttrib4fv(q.location,oe);break;default:r.vertexAttrib1fv(q.location,oe)}}}}C()}function A(){ne();for(let N in a){let X=a[N];for(let Y in X){let K=X[Y];for(let G in K)g(K[G].object),delete K[G];delete X[Y]}delete a[N]}}function D(N){if(a[N.id]===void 0)return;let X=a[N.id];for(let Y in X){let K=X[Y];for(let G in K)g(K[G].object),delete K[G];delete X[Y]}delete a[N.id]}function J(N){for(let X in a){let Y=a[X];if(Y[N.id]===void 0)continue;let K=Y[N.id];for(let G in K)g(K[G].object),delete K[G];delete Y[N.id]}}function ne(){V(),h=!0,l!==c&&(l=c,m(l.object))}function V(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:ne,resetDefaultState:V,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:J,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function au(r,e,t,n){let i=n.isWebGL2,s;function o(l){s=l}function a(l,h){r.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,f){if(f===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,h,f),t.update(h,s,f)}this.setMode=o,this.render=a,this.renderInstances=c}function ou(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let z=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(z){if(z==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),u=r.getParameter(36347),_=r.getParameter(36348),T=r.getParameter(36349),w=d>0,M=o||e.has("OES_texture_float"),S=w&&M,C=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:u,maxVaryings:_,maxFragmentUniforms:T,vertexTextures:w,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:C}}function lu(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Gt,a=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){let g=f.length!==0||d||n!==0||i;return i=d,t=h(f,m,0),n=f.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(f,d,m){let g=f.clippingPlanes,p=f.clipIntersection,u=f.clipShadows,_=r.get(f);if(!i||g===null||g.length===0||s&&!u)s?h(null):l();else{let T=s?0:n,w=T*4,M=_.clippingState||null;c.value=M,M=h(g,d,w,m);for(let S=0;S!==w;++S)M[S]=t[S];_.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,m,g){let p=f!==null?f.length:0,u=null;if(p!==0){if(u=c.value,g!==!0||u===null){let _=m+p*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(u===null||u.length<_)&&(u=new Float32Array(_));for(let w=0,M=m;w!==p;++w,M+=4)o.copy(f[w]).applyMatrix4(T,a),o.normal.toArray(u,M),u[M+3]=o.constant}c.value=u,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,u}}function cu(r){let e=new WeakMap;function t(o,a){return a===Gs?o.mapping=jn:a===Ws&&(o.mapping=ei),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===Gs||a===Ws)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Qs(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var js=class extends $i{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yn=4,ya=[.125,.215,.35,.446,.526,.582],mn=20,Bs=new js,Ma=new ze,ks=null,pn=(1+Math.sqrt(5))/2,Xn=1/pn,ba=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,pn,Xn),new I(0,pn,-Xn),new I(Xn,0,pn),new I(-Xn,0,pn),new I(pn,Xn,0),new I(-pn,Xn,0)],ji=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ks=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ta(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ks),e.scissorTest=!1,Oi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jn||e.mapping===ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ks=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_t,minFilter:_t,generateMipmaps:!1,type:pi,format:Ct,encoding:bn,depthBuffer:!1},i=wa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wa(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hu(s)),this._blurMaterial=uu(s,e,t)}return i}_compileMaterial(e){let t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,Bs)}_sceneToCubeUV(e,t,n,i){let a=new st(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ma),h.toneMapping=Wt,h.autoClear=!1;let m=new Yi({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),g=new vt(new Tn,m),p=!1,u=e.background;u?u.isColor&&(m.color.copy(u),e.background=null,p=!0):(m.color.copy(Ma),p=!0);for(let _=0;_<6;_++){let T=_%3;T===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):T===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));let w=this._cubeSize;Oi(i,T*w,_>2?w:0,w,w),h.setRenderTarget(i),p&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=u}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===jn||e.mapping===ei;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ta()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sa());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Oi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Bs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ba[(i-1)%ba.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new vt(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*mn-1),p=s/g,u=isFinite(s)?1+Math.floor(h*p):mn;u>mn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${mn}`);let _=[],T=0;for(let z=0;z<mn;++z){let v=z/p,A=Math.exp(-v*v/2);_.push(A),z===0?T+=A:z<u&&(T+=2*A)}for(let z=0;z<_.length;z++)_[z]=_[z]/T;d.envMap.value=e.texture,d.samples.value=u,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;let M=this._sizeLods[i],S=3*M*(i>w-Yn?i-w+Yn:0),C=4*(this._cubeSize-M);Oi(t,S,C,3*M,2*M),c.setRenderTarget(t),c.render(f,Bs)}};function hu(r){let e=[],t=[],n=[],i=r,s=r-Yn+1+ya.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Yn?c=ya[o-r+Yn-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,p=3,u=2,_=1,T=new Float32Array(p*g*m),w=new Float32Array(u*g*m),M=new Float32Array(_*g*m);for(let C=0;C<m;C++){let z=C%3*2/3-1,v=C>2?0:-1,A=[z,v,0,z+2/3,v,0,z+2/3,v+1,0,z,v,0,z+2/3,v+1,0,z,v+1,0];T.set(A,p*g*C),w.set(d,u*g*C);let D=[C,C,C,C,C,C];M.set(D,_*g*C)}let S=new Yt;S.setAttribute("position",new Mt(T,p)),S.setAttribute("uv",new Mt(w,u)),S.setAttribute("faceIndex",new Mt(M,_)),e.push(S),i>Yn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wa(r,e,t){let n=new qt(r,e,t);return n.texture.mapping=ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oi(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function uu(r,e,t){let n=new Float32Array(mn),i=new I(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:mn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function Sa(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function Ta(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function br(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function du(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Gs||c===Ws,h=c===jn||c===ei;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new ji(r)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(l&&f&&f.height>0||h&&f&&i(f)){t===null&&(t=new ji(r));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function fu(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function pu(r,e,t,n){let i={},s=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let g in d)e.update(d[g],34962);let m=f.morphAttributes;for(let g in m){let p=m[g];for(let u=0,_=p.length;u<_;u++)e.update(p[u],34962)}}function l(f){let d=[],m=f.index,g=f.attributes.position,p=0;if(m!==null){let T=m.array;p=m.version;for(let w=0,M=T.length;w<M;w+=3){let S=T[w+0],C=T[w+1],z=T[w+2];d.push(S,C,C,z,z,S)}}else{let T=g.array;p=g.version;for(let w=0,M=T.length/3-1;w<M;w+=3){let S=w+0,C=w+1,z=w+2;d.push(S,C,C,z,z,S)}}let u=new(Za(d)?Ji:Zi)(d,1);u.version=p;let _=s.get(f);_&&e.remove(_),s.set(f,u)}function h(f){let d=s.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function mu(r,e,t,n){let i=n.isWebGL2,s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,m){r.drawElements(s,m,a,d*c),t.update(m,s,1)}function f(d,m,g){if(g===0)return;let p,u;if(i)p=r,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,m,a,d*c,g),t.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=f}function gu(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function xu(r,e){return r[0]-e[0]}function _u(r,e){return Math.abs(e[1])-Math.abs(r[1])}function vu(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,o=new Be,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,f,d){let m=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0,u=s.get(h);if(u===void 0||u.count!==p){let X=function(){V.dispose(),s.delete(h),h.removeEventListener("dispose",X)};u!==void 0&&u.texture.dispose();let w=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],v=h.morphAttributes.color||[],A=0;w===!0&&(A=1),M===!0&&(A=2),S===!0&&(A=3);let D=h.attributes.position.count*A,J=1;D>e.maxTextureSize&&(J=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);let ne=new Float32Array(D*J*4*p),V=new Xi(ne,D,J,p);V.type=xn,V.needsUpdate=!0;let N=A*4;for(let Y=0;Y<p;Y++){let K=C[Y],G=z[Y],R=v[Y],F=D*J*4*Y;for(let ee=0;ee<K.count;ee++){let q=ee*N;w===!0&&(o.fromBufferAttribute(K,ee),ne[F+q+0]=o.x,ne[F+q+1]=o.y,ne[F+q+2]=o.z,ne[F+q+3]=0),M===!0&&(o.fromBufferAttribute(G,ee),ne[F+q+4]=o.x,ne[F+q+5]=o.y,ne[F+q+6]=o.z,ne[F+q+7]=0),S===!0&&(o.fromBufferAttribute(R,ee),ne[F+q+8]=o.x,ne[F+q+9]=o.y,ne[F+q+10]=o.z,ne[F+q+11]=R.itemSize===4?o.w:1)}}u={count:p,texture:V,size:new Ce(D,J)},s.set(h,u),h.addEventListener("dispose",X)}let _=0;for(let w=0;w<m.length;w++)_+=m[w];let T=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",T),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}else{let g=m===void 0?0:m.length,p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let M=0;M<g;M++)p[M]=[M,0];n[h.id]=p}for(let M=0;M<g;M++){let S=p[M];S[0]=M,S[1]=m[M]}p.sort(_u);for(let M=0;M<8;M++)M<g&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(xu);let u=h.morphAttributes.position,_=h.morphAttributes.normal,T=0;for(let M=0;M<8;M++){let S=a[M],C=S[0],z=S[1];C!==Number.MAX_SAFE_INTEGER&&z?(u&&h.getAttribute("morphTarget"+M)!==u[C]&&h.setAttribute("morphTarget"+M,u[C]),_&&h.getAttribute("morphNormal"+M)!==_[C]&&h.setAttribute("morphNormal"+M,_[C]),i[M]=z,T+=z):(u&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),_&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}let w=h.morphTargetsRelative?1:1-T;d.getUniforms().setValue(r,"morphTargetBaseInfluence",w),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function yu(r,e,t,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,f=e.get(c,h);return i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Ka=new pt,Qa=new Xi,ja=new Js,eo=new Ki,Aa=[],Ea=[],Ca=new Float32Array(16),Pa=new Float32Array(9),Ra=new Float32Array(4);function ri(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Aa[i];if(s===void 0&&(s=new Float32Array(i),Aa[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function qe(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ye(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ss(r,e){let t=Ea[e];t===void 0&&(t=new Int32Array(e),Ea[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Mu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function bu(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qe(t,e))return;r.uniform2fv(this.addr,e),Ye(t,e)}}function wu(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qe(t,e))return;r.uniform3fv(this.addr,e),Ye(t,e)}}function Su(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qe(t,e))return;r.uniform4fv(this.addr,e),Ye(t,e)}}function Tu(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(qe(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ye(t,e)}else{if(qe(t,n))return;Ra.set(n),r.uniformMatrix2fv(this.addr,!1,Ra),Ye(t,n)}}function Au(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(qe(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ye(t,e)}else{if(qe(t,n))return;Pa.set(n),r.uniformMatrix3fv(this.addr,!1,Pa),Ye(t,n)}}function Eu(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(qe(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ye(t,e)}else{if(qe(t,n))return;Ca.set(n),r.uniformMatrix4fv(this.addr,!1,Ca),Ye(t,n)}}function Cu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Pu(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qe(t,e))return;r.uniform2iv(this.addr,e),Ye(t,e)}}function Ru(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qe(t,e))return;r.uniform3iv(this.addr,e),Ye(t,e)}}function Lu(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qe(t,e))return;r.uniform4iv(this.addr,e),Ye(t,e)}}function Iu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Du(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qe(t,e))return;r.uniform2uiv(this.addr,e),Ye(t,e)}}function Nu(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qe(t,e))return;r.uniform3uiv(this.addr,e),Ye(t,e)}}function Fu(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qe(t,e))return;r.uniform4uiv(this.addr,e),Ye(t,e)}}function zu(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ka,i)}function Ou(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ja,i)}function Uu(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||eo,i)}function Bu(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qa,i)}function ku(r){switch(r){case 5126:return Mu;case 35664:return bu;case 35665:return wu;case 35666:return Su;case 35674:return Tu;case 35675:return Au;case 35676:return Eu;case 5124:case 35670:return Cu;case 35667:case 35671:return Pu;case 35668:case 35672:return Ru;case 35669:case 35673:return Lu;case 5125:return Iu;case 36294:return Du;case 36295:return Nu;case 36296:return Fu;case 35678:case 36198:case 36298:case 36306:case 35682:return zu;case 35679:case 36299:case 36307:return Ou;case 35680:case 36300:case 36308:case 36293:return Uu;case 36289:case 36303:case 36311:case 36292:return Bu}}function Vu(r,e){r.uniform1fv(this.addr,e)}function Hu(r,e){let t=ri(e,this.size,2);r.uniform2fv(this.addr,t)}function Gu(r,e){let t=ri(e,this.size,3);r.uniform3fv(this.addr,t)}function Wu(r,e){let t=ri(e,this.size,4);r.uniform4fv(this.addr,t)}function Xu(r,e){let t=ri(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function qu(r,e){let t=ri(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Yu(r,e){let t=ri(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Zu(r,e){r.uniform1iv(this.addr,e)}function Ju(r,e){r.uniform2iv(this.addr,e)}function $u(r,e){r.uniform3iv(this.addr,e)}function Ku(r,e){r.uniform4iv(this.addr,e)}function Qu(r,e){r.uniform1uiv(this.addr,e)}function ju(r,e){r.uniform2uiv(this.addr,e)}function ed(r,e){r.uniform3uiv(this.addr,e)}function td(r,e){r.uniform4uiv(this.addr,e)}function nd(r,e,t){let n=this.cache,i=e.length,s=ss(t,i);qe(n,s)||(r.uniform1iv(this.addr,s),Ye(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ka,s[o])}function id(r,e,t){let n=this.cache,i=e.length,s=ss(t,i);qe(n,s)||(r.uniform1iv(this.addr,s),Ye(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ja,s[o])}function sd(r,e,t){let n=this.cache,i=e.length,s=ss(t,i);qe(n,s)||(r.uniform1iv(this.addr,s),Ye(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||eo,s[o])}function rd(r,e,t){let n=this.cache,i=e.length,s=ss(t,i);qe(n,s)||(r.uniform1iv(this.addr,s),Ye(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Qa,s[o])}function ad(r){switch(r){case 5126:return Vu;case 35664:return Hu;case 35665:return Gu;case 35666:return Wu;case 35674:return Xu;case 35675:return qu;case 35676:return Yu;case 5124:case 35670:return Zu;case 35667:case 35671:return Ju;case 35668:case 35672:return $u;case 35669:case 35673:return Ku;case 5125:return Qu;case 36294:return ju;case 36295:return ed;case 36296:return td;case 35678:case 36198:case 36298:case 36306:case 35682:return nd;case 35679:case 36299:case 36307:return id;case 35680:case 36300:case 36308:case 36293:return sd;case 36289:case 36303:case 36311:case 36292:return rd}}var er=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ku(t.type)}},tr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=ad(t.type)}},nr=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},Vs=/(\w+)(\])?(\[|\.)?/g;function La(r,e){r.seq.push(e),r.map[e.id]=e}function od(r,e,t){let n=r.name,i=n.length;for(Vs.lastIndex=0;;){let s=Vs.exec(n),o=Vs.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){La(t,l===void 0?new er(a,r,e):new tr(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new nr(a),La(t,f)),t=f}}}var Kn=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);od(s,o,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Ia(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var ld=0;function cd(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function hd(r){switch(r){case bn:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Da(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+cd(r.getShaderSource(e),o)}else return i}function ud(r,e){let t=hd(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function dd(r,e){let t;switch(e){case zo:t="Linear";break;case Oo:t="Reinhard";break;case Uo:t="OptimizedCineon";break;case Bo:t="ACESFilmic";break;case ko:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fd(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(di).join(`
`)}function pd(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function md(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function di(r){return r!==""}function Na(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fa(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var gd=/^[ \t]*#include +<([\w\d./]+)>/gm;function ir(r){return r.replace(gd,xd)}function xd(r,e){let t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ir(t)}var _d=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function za(r){return r.replace(_d,vd)}function vd(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Oa(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yd(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ha?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===po?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function Md(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case jn:case ei:e="ENVMAP_TYPE_CUBE";break;case ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bd(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ei:e="ENVMAP_MODE_REFRACTION";break}return e}function wd(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xa:e="ENVMAP_BLENDING_MULTIPLY";break;case No:e="ENVMAP_BLENDING_MIX";break;case Fo:e="ENVMAP_BLENDING_ADD";break}return e}function Sd(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Td(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=yd(t),l=Md(t),h=bd(t),f=wd(t),d=Sd(t),m=t.isWebGL2?"":fd(t),g=pd(s),p=i.createProgram(),u,_,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=[g].filter(di).join(`
`),u.length>0&&(u+=`
`),_=[m,g].filter(di).join(`
`),_.length>0&&(_+=`
`)):(u=[Oa(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(di).join(`
`),_=[m,Oa(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wt?"#define TONE_MAPPING":"",t.toneMapping!==Wt?be.tonemapping_pars_fragment:"",t.toneMapping!==Wt?dd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,ud("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(di).join(`
`)),o=ir(o),o=Na(o,t),o=Fa(o,t),a=ir(a),a=Na(a,t),a=Fa(a,t),o=za(o),a=za(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,u=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["#define varying in",t.glslVersion===oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let w=T+u+o,M=T+_+a,S=Ia(i,35633,w),C=Ia(i,35632,M);if(i.attachShader(p,S),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){let A=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(S).trim(),J=i.getShaderInfoLog(C).trim(),ne=!0,V=!0;if(i.getProgramParameter(p,35714)===!1){ne=!1;let N=Da(i,S,"vertex"),X=Da(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+N+`
`+X)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(D===""||J==="")&&(V=!1);V&&(this.diagnostics={runnable:ne,programLog:A,vertexShader:{log:D,prefix:u},fragmentShader:{log:J,prefix:_}})}i.deleteShader(S),i.deleteShader(C);let z;this.getUniforms=function(){return z===void 0&&(z=new Kn(i,p)),z};let v;return this.getAttributes=function(){return v===void 0&&(v=md(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=ld++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=C,this}var Ad=0,sr=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rr(e),t.set(e,n)),n}},rr=class{constructor(e){this.id=Ad++,this.code=e,this.usedTimes=0}};function Ed(r,e,t,n,i,s,o){let a=new qi,c=new sr,l=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,A,D,J,ne){let V=J.fog,N=ne.geometry,X=v.isMeshStandardMaterial?J.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||X),K=!!Y&&Y.mapping===ns?Y.image.height:null,G=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));let R=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,F=R!==void 0?R.length:0,ee=0;N.morphAttributes.position!==void 0&&(ee=1),N.morphAttributes.normal!==void 0&&(ee=2),N.morphAttributes.color!==void 0&&(ee=3);let q,te,oe,ve;if(G){let Fe=Dt[G];q=Fe.vertexShader,te=Fe.fragmentShader}else q=v.vertexShader,te=v.fragmentShader,c.update(v),oe=c.getVertexShaderID(v),ve=c.getFragmentShaderID(v);let W=r.getRenderTarget(),De=v.alphaTest>0,ge=v.clearcoat>0,ye=v.iridescence>0;return{isWebGL2:h,shaderID:G,shaderName:v.type,vertexShader:q,fragmentShader:te,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:ve,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:d,outputEncoding:W===null?r.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:bn,map:!!v.map,matcap:!!v.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:K,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===al,tangentSpaceNormalMap:v.normalMapType===rl,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ve,clearcoat:ge,clearcoatMap:ge&&!!v.clearcoatMap,clearcoatRoughnessMap:ge&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ge&&!!v.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!v.iridescenceMap,iridescenceThicknessMap:ye&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Jn,alphaMap:!!v.alphaMap,alphaTest:De,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!N.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!V,useFog:v.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ne.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ee,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:Wt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===sn,flipSided:v.side===yt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function u(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)A.push(D),A.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(_(A,v),T(A,v),A.push(r.outputEncoding)),A.push(v.customProgramCacheKey),A.join()}function _(v,A){v.push(A.precision),v.push(A.outputEncoding),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.combine),v.push(A.vertexUvs),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function T(v,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),v.push(a.mask)}function w(v){let A=g[v.type],D;if(A){let J=Dt[A];D=Mr.clone(J.uniforms)}else D=v.uniforms;return D}function M(v,A){let D;for(let J=0,ne=l.length;J<ne;J++){let V=l[J];if(V.cacheKey===A){D=V,++D.usedTimes;break}}return D===void 0&&(D=new Td(r,A,v,s),l.push(D)),D}function S(v){if(--v.usedTimes===0){let A=l.indexOf(v);l[A]=l[l.length-1],l.pop(),v.destroy()}}function C(v){c.remove(v)}function z(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:w,acquireProgram:M,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:z}}function Cd(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Pd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ua(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ba(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,m,g,p,u){let _=r[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:u},r[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=u),e++,_}function a(f,d,m,g,p,u){let _=o(f,d,m,g,p,u);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function c(f,d,m,g,p,u){let _=o(f,d,m,g,p,u);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function l(f,d){t.length>1&&t.sort(f||Pd),n.length>1&&n.sort(d||Ua),i.length>1&&i.sort(d||Ua)}function h(){for(let f=e,d=r.length;f<d;f++){let m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function Rd(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new Ba,r.set(n,[o])):i>=s.length?(o=new Ba,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ld(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ze};break;case"SpotLight":t={position:new I,direction:new I,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function Id(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var Dd=0;function Nd(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Fd(r,e){let t=new Ld,n=Id(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new I);let s=new I,o=new Xe,a=new Xe;function c(h,f){let d=0,m=0,g=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let p=0,u=0,_=0,T=0,w=0,M=0,S=0,C=0,z=0,v=0;h.sort(Nd);let A=f!==!0?Math.PI:1;for(let J=0,ne=h.length;J<ne;J++){let V=h[J],N=V.color,X=V.intensity,Y=V.distance,K=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)d+=N.r*X*A,m+=N.g*X*A,g+=N.b*X*A;else if(V.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(V.sh.coefficients[G],X);else if(V.isDirectionalLight){let G=t.get(V);if(G.color.copy(V.color).multiplyScalar(V.intensity*A),V.castShadow){let R=V.shadow,F=n.get(V);F.shadowBias=R.bias,F.shadowNormalBias=R.normalBias,F.shadowRadius=R.radius,F.shadowMapSize=R.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=V.shadow.matrix,M++}i.directional[p]=G,p++}else if(V.isSpotLight){let G=t.get(V);G.position.setFromMatrixPosition(V.matrixWorld),G.color.copy(N).multiplyScalar(X*A),G.distance=Y,G.coneCos=Math.cos(V.angle),G.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),G.decay=V.decay,i.spot[_]=G;let R=V.shadow;if(V.map&&(i.spotLightMap[z]=V.map,z++,R.updateMatrices(V),V.castShadow&&v++),i.spotLightMatrix[_]=R.matrix,V.castShadow){let F=n.get(V);F.shadowBias=R.bias,F.shadowNormalBias=R.normalBias,F.shadowRadius=R.radius,F.shadowMapSize=R.mapSize,i.spotShadow[_]=F,i.spotShadowMap[_]=K,C++}_++}else if(V.isRectAreaLight){let G=t.get(V);G.color.copy(N).multiplyScalar(X),G.halfWidth.set(V.width*.5,0,0),G.halfHeight.set(0,V.height*.5,0),i.rectArea[T]=G,T++}else if(V.isPointLight){let G=t.get(V);if(G.color.copy(V.color).multiplyScalar(V.intensity*A),G.distance=V.distance,G.decay=V.decay,V.castShadow){let R=V.shadow,F=n.get(V);F.shadowBias=R.bias,F.shadowNormalBias=R.normalBias,F.shadowRadius=R.radius,F.shadowMapSize=R.mapSize,F.shadowCameraNear=R.camera.near,F.shadowCameraFar=R.camera.far,i.pointShadow[u]=F,i.pointShadowMap[u]=K,i.pointShadowMatrix[u]=V.shadow.matrix,S++}i.point[u]=G,u++}else if(V.isHemisphereLight){let G=t.get(V);G.skyColor.copy(V.color).multiplyScalar(X*A),G.groundColor.copy(V.groundColor).multiplyScalar(X*A),i.hemi[w]=G,w++}}T>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=j.LTC_FLOAT_1,i.rectAreaLTC2=j.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=j.LTC_HALF_1,i.rectAreaLTC2=j.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;let D=i.hash;(D.directionalLength!==p||D.pointLength!==u||D.spotLength!==_||D.rectAreaLength!==T||D.hemiLength!==w||D.numDirectionalShadows!==M||D.numPointShadows!==S||D.numSpotShadows!==C||D.numSpotMaps!==z)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=T,i.point.length=u,i.hemi.length=w,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+z-v,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=v,D.directionalLength=p,D.pointLength=u,D.spotLength=_,D.rectAreaLength=T,D.hemiLength=w,D.numDirectionalShadows=M,D.numPointShadows=S,D.numSpotShadows=C,D.numSpotMaps=z,i.version=Dd++)}function l(h,f){let d=0,m=0,g=0,p=0,u=0,_=f.matrixWorldInverse;for(let T=0,w=h.length;T<w;T++){let M=h[T];if(M.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),d++}else if(M.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),g++}else if(M.isRectAreaLight){let S=i.rectArea[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),a.identity(),o.copy(M.matrixWorld),o.premultiply(_),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){let S=i.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),m++}else if(M.isHemisphereLight){let S=i.hemi[u];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(_),u++}}}return{setup:c,setupView:l,state:i}}function ka(r,e){let t=new Fd(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function zd(r,e){let t=new WeakMap;function n(s,o=0){let a=t.get(s),c;return a===void 0?(c=new ka(r,e),t.set(s,[c])):o>=a.length?(c=new ka(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var ar=class extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=il,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},or=class extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Od=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ud=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bd(r,e,t){let n=new Qi,i=new Ce,s=new Ce,o=new Be,a=new ar({depthPacking:sl}),c=new or,l={},h=t.maxTextureSize,f={0:yt,1:Qn,2:sn},d=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Od,fragmentShader:Ud}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Yt;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new vt(g,d),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ha,this.render=function(M,S,C){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||M.length===0)return;let z=r.getRenderTarget(),v=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),D=r.state;D.setBlending(rn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let J=0,ne=M.length;J<ne;J++){let V=M[J],N=V.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);let X=N.getFrameExtents();if(i.multiply(X),s.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/X.x),i.x=s.x*X.x,N.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/X.y),i.y=s.y*X.y,N.mapSize.y=s.y)),N.map===null){let K=this.type!==ui?{minFilter:ot,magFilter:ot}:{};N.map=new qt(i.x,i.y,K),N.map.texture.name=V.name+".shadowMap",N.camera.updateProjectionMatrix()}r.setRenderTarget(N.map),r.clear();let Y=N.getViewportCount();for(let K=0;K<Y;K++){let G=N.getViewport(K);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),D.viewport(o),N.updateMatrices(V,K),n=N.getFrustum(),w(S,C,N.camera,V,this.type)}N.isPointLightShadow!==!0&&this.type===ui&&_(N,C),N.needsUpdate=!1}u.needsUpdate=!1,r.setRenderTarget(z,v,A)};function _(M,S){let C=e.update(p);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new qt(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(S,null,C,d,p,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(S,null,C,m,p,null)}function T(M,S,C,z,v,A){let D=null,J=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(J!==void 0?D=J:D=C.isPointLight===!0?c:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){let ne=D.uuid,V=S.uuid,N=l[ne];N===void 0&&(N={},l[ne]=N);let X=N[V];X===void 0&&(X=D.clone(),N[V]=X),D=X}return D.visible=S.visible,D.wireframe=S.wireframe,A===ui?D.side=S.shadowSide!==null?S.shadowSide:S.side:D.side=S.shadowSide!==null?S.shadowSide:f[S.side],D.alphaMap=S.alphaMap,D.alphaTest=S.alphaTest,D.clipShadows=S.clipShadows,D.clippingPlanes=S.clippingPlanes,D.clipIntersection=S.clipIntersection,D.displacementMap=S.displacementMap,D.displacementScale=S.displacementScale,D.displacementBias=S.displacementBias,D.wireframeLinewidth=S.wireframeLinewidth,D.linewidth=S.linewidth,C.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(C.matrixWorld),D.nearDistance=z,D.farDistance=v),D}function w(M,S,C,z,v){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===ui)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);let J=e.update(M),ne=M.material;if(Array.isArray(ne)){let V=J.groups;for(let N=0,X=V.length;N<X;N++){let Y=V[N],K=ne[Y.materialIndex];if(K&&K.visible){let G=T(M,K,z,C.near,C.far,v);r.renderBufferDirect(C,null,J,G,M,Y)}}}else if(ne.visible){let V=T(M,ne,z,C.near,C.far,v);r.renderBufferDirect(C,null,J,V,M,null)}}let D=M.children;for(let J=0,ne=D.length;J<ne;J++)w(D[J],S,C,z,v)}}function kd(r,e,t){let n=t.isWebGL2;function i(){let E=!1,B=new Be,Z=null,re=new Be(0,0,0,0);return{setMask:function(ce){Z!==ce&&!E&&(r.colorMask(ce,ce,ce,ce),Z=ce)},setLocked:function(ce){E=ce},setClear:function(ce,Pe,Je,je,ln){ln===!0&&(ce*=je,Pe*=je,Je*=je),B.set(ce,Pe,Je,je),re.equals(B)===!1&&(r.clearColor(ce,Pe,Je,je),re.copy(B))},reset:function(){E=!1,Z=null,re.set(-1,0,0,0)}}}function s(){let E=!1,B=null,Z=null,re=null;return{setTest:function(ce){ce?De(2929):ge(2929)},setMask:function(ce){B!==ce&&!E&&(r.depthMask(ce),B=ce)},setFunc:function(ce){if(Z!==ce){switch(ce){case Eo:r.depthFunc(512);break;case Co:r.depthFunc(519);break;case Po:r.depthFunc(513);break;case Hs:r.depthFunc(515);break;case Ro:r.depthFunc(514);break;case Lo:r.depthFunc(518);break;case Io:r.depthFunc(516);break;case Do:r.depthFunc(517);break;default:r.depthFunc(515)}Z=ce}},setLocked:function(ce){E=ce},setClear:function(ce){re!==ce&&(r.clearDepth(ce),re=ce)},reset:function(){E=!1,B=null,Z=null,re=null}}}function o(){let E=!1,B=null,Z=null,re=null,ce=null,Pe=null,Je=null,je=null,ln=null;return{setTest:function(Ue){E||(Ue?De(2960):ge(2960))},setMask:function(Ue){B!==Ue&&!E&&(r.stencilMask(Ue),B=Ue)},setFunc:function(Ue,zt,mt){(Z!==Ue||re!==zt||ce!==mt)&&(r.stencilFunc(Ue,zt,mt),Z=Ue,re=zt,ce=mt)},setOp:function(Ue,zt,mt){(Pe!==Ue||Je!==zt||je!==mt)&&(r.stencilOp(Ue,zt,mt),Pe=Ue,Je=zt,je=mt)},setLocked:function(Ue){E=Ue},setClear:function(Ue){ln!==Ue&&(r.clearStencil(Ue),ln=Ue)},reset:function(){E=!1,B=null,Z=null,re=null,ce=null,Pe=null,Je=null,je=null,ln=null}}}let a=new i,c=new s,l=new o,h=new WeakMap,f=new WeakMap,d={},m={},g=new WeakMap,p=[],u=null,_=!1,T=null,w=null,M=null,S=null,C=null,z=null,v=null,A=!1,D=null,J=null,ne=null,V=null,N=null,X=r.getParameter(35661),Y=!1,K=0,G=r.getParameter(7938);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),Y=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Y=K>=2);let R=null,F={},ee=r.getParameter(3088),q=r.getParameter(2978),te=new Be().fromArray(ee),oe=new Be().fromArray(q);function ve(E,B,Z){let re=new Uint8Array(4),ce=r.createTexture();r.bindTexture(E,ce),r.texParameteri(E,10241,9728),r.texParameteri(E,10240,9728);for(let Pe=0;Pe<Z;Pe++)r.texImage2D(B+Pe,0,6408,1,1,0,6408,5121,re);return ce}let W={};W[3553]=ve(3553,3553,1),W[34067]=ve(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),De(2929),c.setFunc(Hs),tt(!1),Lt(Cr),De(2884),Ke(rn);function De(E){d[E]!==!0&&(r.enable(E),d[E]=!0)}function ge(E){d[E]!==!1&&(r.disable(E),d[E]=!1)}function ye(E,B){return m[E]!==B?(r.bindFramebuffer(E,B),m[E]=B,n&&(E===36009&&(m[36160]=B),E===36160&&(m[36009]=B)),!0):!1}function ae(E,B){let Z=p,re=!1;if(E)if(Z=g.get(B),Z===void 0&&(Z=[],g.set(B,Z)),E.isWebGLMultipleRenderTargets){let ce=E.texture;if(Z.length!==ce.length||Z[0]!==36064){for(let Pe=0,Je=ce.length;Pe<Je;Pe++)Z[Pe]=36064+Pe;Z.length=ce.length,re=!0}}else Z[0]!==36064&&(Z[0]=36064,re=!0);else Z[0]!==1029&&(Z[0]=1029,re=!0);re&&(t.isWebGL2?r.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function Fe(E){return u!==E?(r.useProgram(E),u=E,!0):!1}let Se={[qn]:32774,[go]:32778,[xo]:32779};if(n)Se[Ir]=32775,Se[Dr]=32776;else{let E=e.get("EXT_blend_minmax");E!==null&&(Se[Ir]=E.MIN_EXT,Se[Dr]=E.MAX_EXT)}let pe={[_o]:0,[vo]:1,[yo]:768,[Ga]:770,[Ao]:776,[So]:774,[bo]:772,[Mo]:769,[Wa]:771,[To]:775,[wo]:773};function Ke(E,B,Z,re,ce,Pe,Je,je){if(E===rn){_===!0&&(ge(3042),_=!1);return}if(_===!1&&(De(3042),_=!0),E!==mo){if(E!==T||je!==A){if((w!==qn||C!==qn)&&(r.blendEquation(32774),w=qn,C=qn),je)switch(E){case Jn:r.blendFuncSeparate(1,771,1,771);break;case Pr:r.blendFunc(1,1);break;case Rr:r.blendFuncSeparate(0,769,0,1);break;case Lr:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Jn:r.blendFuncSeparate(770,771,1,771);break;case Pr:r.blendFunc(770,1);break;case Rr:r.blendFuncSeparate(0,769,0,1);break;case Lr:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}M=null,S=null,z=null,v=null,T=E,A=je}return}ce=ce||B,Pe=Pe||Z,Je=Je||re,(B!==w||ce!==C)&&(r.blendEquationSeparate(Se[B],Se[ce]),w=B,C=ce),(Z!==M||re!==S||Pe!==z||Je!==v)&&(r.blendFuncSeparate(pe[Z],pe[re],pe[Pe],pe[Je]),M=Z,S=re,z=Pe,v=Je),T=E,A=null}function at(E,B){E.side===sn?ge(2884):De(2884);let Z=E.side===yt;B&&(Z=!Z),tt(Z),E.blending===Jn&&E.transparent===!1?Ke(rn):Ke(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.premultipliedAlpha),c.setFunc(E.depthFunc),c.setTest(E.depthTest),c.setMask(E.depthWrite),a.setMask(E.colorWrite);let re=E.stencilWrite;l.setTest(re),re&&(l.setMask(E.stencilWriteMask),l.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),l.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Ne(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?De(32926):ge(32926)}function tt(E){D!==E&&(E?r.frontFace(2304):r.frontFace(2305),D=E)}function Lt(E){E!==uo?(De(2884),E!==J&&(E===Cr?r.cullFace(1029):E===fo?r.cullFace(1028):r.cullFace(1032))):ge(2884),J=E}function Qe(E){E!==ne&&(Y&&r.lineWidth(E),ne=E)}function Ne(E,B,Z){E?(De(32823),(V!==B||N!==Z)&&(r.polygonOffset(B,Z),V=B,N=Z)):ge(32823)}function Nt(E){E?De(3089):ge(3089)}function Ft(E){E===void 0&&(E=33984+X-1),R!==E&&(r.activeTexture(E),R=E)}function b(E,B,Z){Z===void 0&&(R===null?Z=33984+X-1:Z=R);let re=F[Z];re===void 0&&(re={type:void 0,texture:void 0},F[Z]=re),(re.type!==E||re.texture!==B)&&(R!==Z&&(r.activeTexture(Z),R=Z),r.bindTexture(E,B||W[E]),re.type=E,re.texture=B)}function x(){let E=F[R];E!==void 0&&E.type!==void 0&&(r.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function U(){try{r.compressedTexImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function $(){try{r.compressedTexImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ie(){try{r.texSubImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function xe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function se(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function H(){try{r.texStorage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function de(){try{r.texStorage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function me(){try{r.texImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function le(){try{r.texImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function fe(E){te.equals(E)===!1&&(r.scissor(E.x,E.y,E.z,E.w),te.copy(E))}function he(E){oe.equals(E)===!1&&(r.viewport(E.x,E.y,E.z,E.w),oe.copy(E))}function Ee(E,B){let Z=f.get(B);Z===void 0&&(Z=new WeakMap,f.set(B,Z));let re=Z.get(E);re===void 0&&(re=r.getUniformBlockIndex(B,E.name),Z.set(E,re))}function Oe(E,B){let re=f.get(B).get(E);h.get(E)!==re&&(r.uniformBlockBinding(B,re,E.__bindingPointIndex),h.set(E,re))}function Ze(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},R=null,F={},m={},g=new WeakMap,p=[],u=null,_=!1,T=null,w=null,M=null,S=null,C=null,z=null,v=null,A=!1,D=null,J=null,ne=null,V=null,N=null,te.set(0,0,r.canvas.width,r.canvas.height),oe.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:De,disable:ge,bindFramebuffer:ye,drawBuffers:ae,useProgram:Fe,setBlending:Ke,setMaterial:at,setFlipSided:tt,setCullFace:Lt,setLineWidth:Qe,setPolygonOffset:Ne,setScissorTest:Nt,activeTexture:Ft,bindTexture:b,unbindTexture:x,compressedTexImage2D:U,compressedTexImage3D:$,texImage2D:me,texImage3D:le,updateUBOMapping:Ee,uniformBlockBinding:Oe,texStorage2D:H,texStorage3D:de,texSubImage2D:Q,texSubImage3D:ie,compressedTexSubImage2D:xe,compressedTexSubImage3D:se,scissor:fe,viewport:he,reset:Ze}}function Vd(r,e,t,n,i,s,o){let a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap,p,u=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,x){return _?new OffscreenCanvas(b,x):Hi("canvas")}function w(b,x,U,$){let Q=1;if((b.width>$||b.height>$)&&(Q=$/Math.max(b.width,b.height)),Q<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let ie=x?Zs:Math.floor,xe=ie(Q*b.width),se=ie(Q*b.height);p===void 0&&(p=T(xe,se));let H=U?T(xe,se):p;return H.width=xe,H.height=se,H.getContext("2d").drawImage(b,0,0,xe,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+xe+"x"+se+")."),H}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function M(b){return ca(b.width)&&ca(b.height)}function S(b){return a?!1:b.wrapS!==Et||b.wrapT!==Et||b.minFilter!==ot&&b.minFilter!==_t}function C(b,x){return b.generateMipmaps&&x&&b.minFilter!==ot&&b.minFilter!==_t}function z(b){r.generateMipmap(b)}function v(b,x,U,$,Q=!1){if(a===!1)return x;if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ie=x;return x===6403&&(U===5126&&(ie=33326),U===5131&&(ie=33325),U===5121&&(ie=33321)),x===33319&&(U===5126&&(ie=33328),U===5131&&(ie=33327),U===5121&&(ie=33323)),x===6408&&(U===5126&&(ie=34836),U===5131&&(ie=34842),U===5121&&(ie=$===Ve&&Q===!1?35907:32856),U===32819&&(ie=32854),U===32820&&(ie=32855)),(ie===33325||ie===33326||ie===33327||ie===33328||ie===34842||ie===34836)&&e.get("EXT_color_buffer_float"),ie}function A(b,x,U){return C(b,U)===!0||b.isFramebufferTexture&&b.minFilter!==ot&&b.minFilter!==_t?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function D(b){return b===ot||b===Nr||b===Fr?9728:9729}function J(b){let x=b.target;x.removeEventListener("dispose",J),V(x),x.isVideoTexture&&g.delete(x)}function ne(b){let x=b.target;x.removeEventListener("dispose",ne),X(x)}function V(b){let x=n.get(b);if(x.__webglInit===void 0)return;let U=b.source,$=u.get(U);if($){let Q=$[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(b),Object.keys($).length===0&&u.delete(U)}n.remove(b)}function N(b){let x=n.get(b);r.deleteTexture(x.__webglTexture);let U=b.source,$=u.get(U);delete $[x.__cacheKey],o.memory.textures--}function X(b){let x=b.texture,U=n.get(b),$=n.get(x);if($.__webglTexture!==void 0&&(r.deleteTexture($.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)r.deleteFramebuffer(U.__webglFramebuffer[Q]),U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[Q]);else{if(r.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Q=0;Q<U.__webglColorRenderbuffer.length;Q++)U.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(U.__webglColorRenderbuffer[Q]);U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Q=0,ie=x.length;Q<ie;Q++){let xe=n.get(x[Q]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(x[Q])}n.remove(x),n.remove(b)}let Y=0;function K(){Y=0}function G(){let b=Y;return b>=c&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+c),Y+=1,b}function R(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.encoding),x.join()}function F(b,x){let U=n.get(b);if(b.isVideoTexture&&Nt(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){let $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(U,b,x);return}}t.bindTexture(3553,U.__webglTexture,33984+x)}function ee(b,x){let U=n.get(b);if(b.version>0&&U.__version!==b.version){ge(U,b,x);return}t.bindTexture(35866,U.__webglTexture,33984+x)}function q(b,x){let U=n.get(b);if(b.version>0&&U.__version!==b.version){ge(U,b,x);return}t.bindTexture(32879,U.__webglTexture,33984+x)}function te(b,x){let U=n.get(b);if(b.version>0&&U.__version!==b.version){ye(U,b,x);return}t.bindTexture(34067,U.__webglTexture,33984+x)}let oe={[Xs]:10497,[Et]:33071,[qs]:33648},ve={[ot]:9728,[Nr]:9984,[Fr]:9986,[_t]:9729,[Vo]:9985,[is]:9987};function W(b,x,U){if(U?(r.texParameteri(b,10242,oe[x.wrapS]),r.texParameteri(b,10243,oe[x.wrapT]),(b===32879||b===35866)&&r.texParameteri(b,32882,oe[x.wrapR]),r.texParameteri(b,10240,ve[x.magFilter]),r.texParameteri(b,10241,ve[x.minFilter])):(r.texParameteri(b,10242,33071),r.texParameteri(b,10243,33071),(b===32879||b===35866)&&r.texParameteri(b,32882,33071),(x.wrapS!==Et||x.wrapT!==Et)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(b,10240,D(x.magFilter)),r.texParameteri(b,10241,D(x.minFilter)),x.minFilter!==ot&&x.minFilter!==_t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let $=e.get("EXT_texture_filter_anisotropic");if(x.type===xn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===pi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(r.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function De(b,x){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",J));let $=x.source,Q=u.get($);Q===void 0&&(Q={},u.set($,Q));let ie=R(x);if(ie!==b.__cacheKey){Q[ie]===void 0&&(Q[ie]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Q[ie].usedTimes++;let xe=Q[b.__cacheKey];xe!==void 0&&(Q[b.__cacheKey].usedTimes--,xe.usedTimes===0&&N(x)),b.__cacheKey=ie,b.__webglTexture=Q[ie].texture}return U}function ge(b,x,U){let $=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=35866),x.isData3DTexture&&($=32879);let Q=De(b,x),ie=x.source;t.bindTexture($,b.__webglTexture,33984+U);let xe=n.get(ie);if(ie.version!==xe.__version||Q===!0){t.activeTexture(33984+U),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);let se=S(x)&&M(x.image)===!1,H=w(x.image,se,!1,h);H=Ft(x,H);let de=M(H)||a,me=s.convert(x.format,x.encoding),le=s.convert(x.type),fe=v(x.internalFormat,me,le,x.encoding,x.isVideoTexture);W($,x,de);let he,Ee=x.mipmaps,Oe=a&&x.isVideoTexture!==!0,Ze=xe.__version===void 0||Q===!0,E=A(x,H,de);if(x.isDepthTexture)fe=6402,a?x.type===xn?fe=36012:x.type===gn?fe=33190:x.type===$n?fe=35056:fe=33189:x.type===xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===vn&&fe===6402&&x.type!==Ya&&x.type!==gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=gn,le=s.convert(x.type)),x.format===ti&&fe===6402&&(fe=34041,x.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=$n,le=s.convert(x.type))),Ze&&(Oe?t.texStorage2D(3553,1,fe,H.width,H.height):t.texImage2D(3553,0,fe,H.width,H.height,0,me,le,null));else if(x.isDataTexture)if(Ee.length>0&&de){Oe&&Ze&&t.texStorage2D(3553,E,fe,Ee[0].width,Ee[0].height);for(let B=0,Z=Ee.length;B<Z;B++)he=Ee[B],Oe?t.texSubImage2D(3553,B,0,0,he.width,he.height,me,le,he.data):t.texImage2D(3553,B,fe,he.width,he.height,0,me,le,he.data);x.generateMipmaps=!1}else Oe?(Ze&&t.texStorage2D(3553,E,fe,H.width,H.height),t.texSubImage2D(3553,0,0,0,H.width,H.height,me,le,H.data)):t.texImage2D(3553,0,fe,H.width,H.height,0,me,le,H.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Oe&&Ze&&t.texStorage3D(35866,E,fe,Ee[0].width,Ee[0].height,H.depth);for(let B=0,Z=Ee.length;B<Z;B++)he=Ee[B],x.format!==Ct?me!==null?Oe?t.compressedTexSubImage3D(35866,B,0,0,0,he.width,he.height,H.depth,me,he.data,0,0):t.compressedTexImage3D(35866,B,fe,he.width,he.height,H.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage3D(35866,B,0,0,0,he.width,he.height,H.depth,me,le,he.data):t.texImage3D(35866,B,fe,he.width,he.height,H.depth,0,me,le,he.data)}else{Oe&&Ze&&t.texStorage2D(3553,E,fe,Ee[0].width,Ee[0].height);for(let B=0,Z=Ee.length;B<Z;B++)he=Ee[B],x.format!==Ct?me!==null?Oe?t.compressedTexSubImage2D(3553,B,0,0,he.width,he.height,me,he.data):t.compressedTexImage2D(3553,B,fe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage2D(3553,B,0,0,he.width,he.height,me,le,he.data):t.texImage2D(3553,B,fe,he.width,he.height,0,me,le,he.data)}else if(x.isDataArrayTexture)Oe?(Ze&&t.texStorage3D(35866,E,fe,H.width,H.height,H.depth),t.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,me,le,H.data)):t.texImage3D(35866,0,fe,H.width,H.height,H.depth,0,me,le,H.data);else if(x.isData3DTexture)Oe?(Ze&&t.texStorage3D(32879,E,fe,H.width,H.height,H.depth),t.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,me,le,H.data)):t.texImage3D(32879,0,fe,H.width,H.height,H.depth,0,me,le,H.data);else if(x.isFramebufferTexture){if(Ze)if(Oe)t.texStorage2D(3553,E,fe,H.width,H.height);else{let B=H.width,Z=H.height;for(let re=0;re<E;re++)t.texImage2D(3553,re,fe,B,Z,0,me,le,null),B>>=1,Z>>=1}}else if(Ee.length>0&&de){Oe&&Ze&&t.texStorage2D(3553,E,fe,Ee[0].width,Ee[0].height);for(let B=0,Z=Ee.length;B<Z;B++)he=Ee[B],Oe?t.texSubImage2D(3553,B,0,0,me,le,he):t.texImage2D(3553,B,fe,me,le,he);x.generateMipmaps=!1}else Oe?(Ze&&t.texStorage2D(3553,E,fe,H.width,H.height),t.texSubImage2D(3553,0,0,0,me,le,H)):t.texImage2D(3553,0,fe,me,le,H);C(x,de)&&z($),xe.__version=ie.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ye(b,x,U){if(x.image.length!==6)return;let $=De(b,x),Q=x.source;t.bindTexture(34067,b.__webglTexture,33984+U);let ie=n.get(Q);if(Q.version!==ie.__version||$===!0){t.activeTexture(33984+U),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);let xe=x.isCompressedTexture||x.image[0].isCompressedTexture,se=x.image[0]&&x.image[0].isDataTexture,H=[];for(let B=0;B<6;B++)!xe&&!se?H[B]=w(x.image[B],!1,!0,l):H[B]=se?x.image[B].image:x.image[B],H[B]=Ft(x,H[B]);let de=H[0],me=M(de)||a,le=s.convert(x.format,x.encoding),fe=s.convert(x.type),he=v(x.internalFormat,le,fe,x.encoding),Ee=a&&x.isVideoTexture!==!0,Oe=ie.__version===void 0||$===!0,Ze=A(x,de,me);W(34067,x,me);let E;if(xe){Ee&&Oe&&t.texStorage2D(34067,Ze,he,de.width,de.height);for(let B=0;B<6;B++){E=H[B].mipmaps;for(let Z=0;Z<E.length;Z++){let re=E[Z];x.format!==Ct?le!==null?Ee?t.compressedTexSubImage2D(34069+B,Z,0,0,re.width,re.height,le,re.data):t.compressedTexImage2D(34069+B,Z,he,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(34069+B,Z,0,0,re.width,re.height,le,fe,re.data):t.texImage2D(34069+B,Z,he,re.width,re.height,0,le,fe,re.data)}}}else{E=x.mipmaps,Ee&&Oe&&(E.length>0&&Ze++,t.texStorage2D(34067,Ze,he,H[0].width,H[0].height));for(let B=0;B<6;B++)if(se){Ee?t.texSubImage2D(34069+B,0,0,0,H[B].width,H[B].height,le,fe,H[B].data):t.texImage2D(34069+B,0,he,H[B].width,H[B].height,0,le,fe,H[B].data);for(let Z=0;Z<E.length;Z++){let ce=E[Z].image[B].image;Ee?t.texSubImage2D(34069+B,Z+1,0,0,ce.width,ce.height,le,fe,ce.data):t.texImage2D(34069+B,Z+1,he,ce.width,ce.height,0,le,fe,ce.data)}}else{Ee?t.texSubImage2D(34069+B,0,0,0,le,fe,H[B]):t.texImage2D(34069+B,0,he,le,fe,H[B]);for(let Z=0;Z<E.length;Z++){let re=E[Z];Ee?t.texSubImage2D(34069+B,Z+1,0,0,le,fe,re.image[B]):t.texImage2D(34069+B,Z+1,he,le,fe,re.image[B])}}}C(x,me)&&z(34067),ie.__version=Q.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ae(b,x,U,$,Q){let ie=s.convert(U.format,U.encoding),xe=s.convert(U.type),se=v(U.internalFormat,ie,xe,U.encoding);n.get(x).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,se,x.width,x.height,x.depth,0,ie,xe,null):t.texImage2D(Q,0,se,x.width,x.height,0,ie,xe,null)),t.bindFramebuffer(36160,b),Ne(x)?d.framebufferTexture2DMultisampleEXT(36160,$,Q,n.get(U).__webglTexture,0,Qe(x)):(Q===3553||Q>=34069&&Q<=34074)&&r.framebufferTexture2D(36160,$,Q,n.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(b,x,U){if(r.bindRenderbuffer(36161,b),x.depthBuffer&&!x.stencilBuffer){let $=33189;if(U||Ne(x)){let Q=x.depthTexture;Q&&Q.isDepthTexture&&(Q.type===xn?$=36012:Q.type===gn&&($=33190));let ie=Qe(x);Ne(x)?d.renderbufferStorageMultisampleEXT(36161,ie,$,x.width,x.height):r.renderbufferStorageMultisample(36161,ie,$,x.width,x.height)}else r.renderbufferStorage(36161,$,x.width,x.height);r.framebufferRenderbuffer(36160,36096,36161,b)}else if(x.depthBuffer&&x.stencilBuffer){let $=Qe(x);U&&Ne(x)===!1?r.renderbufferStorageMultisample(36161,$,35056,x.width,x.height):Ne(x)?d.renderbufferStorageMultisampleEXT(36161,$,35056,x.width,x.height):r.renderbufferStorage(36161,34041,x.width,x.height),r.framebufferRenderbuffer(36160,33306,36161,b)}else{let $=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Q=0;Q<$.length;Q++){let ie=$[Q],xe=s.convert(ie.format,ie.encoding),se=s.convert(ie.type),H=v(ie.internalFormat,xe,se,ie.encoding),de=Qe(x);U&&Ne(x)===!1?r.renderbufferStorageMultisample(36161,de,H,x.width,x.height):Ne(x)?d.renderbufferStorageMultisampleEXT(36161,de,H,x.width,x.height):r.renderbufferStorage(36161,H,x.width,x.height)}}r.bindRenderbuffer(36161,null)}function Se(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),F(x.depthTexture,0);let $=n.get(x.depthTexture).__webglTexture,Q=Qe(x);if(x.depthTexture.format===vn)Ne(x)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,Q):r.framebufferTexture2D(36160,36096,3553,$,0);else if(x.depthTexture.format===ti)Ne(x)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,Q):r.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function pe(b){let x=n.get(b),U=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Se(x.__webglFramebuffer,b)}else if(U){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]=r.createRenderbuffer(),Fe(x.__webglDepthbuffer[$],b,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),Fe(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function Ke(b,x,U){let $=n.get(b);x!==void 0&&ae($.__webglFramebuffer,b,b.texture,36064,3553),U!==void 0&&pe(b)}function at(b){let x=b.texture,U=n.get(b),$=n.get(x);b.addEventListener("dispose",ne),b.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=x.version,o.memory.textures++);let Q=b.isWebGLCubeRenderTarget===!0,ie=b.isWebGLMultipleRenderTargets===!0,xe=M(b)||a;if(Q){U.__webglFramebuffer=[];for(let se=0;se<6;se++)U.__webglFramebuffer[se]=r.createFramebuffer()}else{if(U.__webglFramebuffer=r.createFramebuffer(),ie)if(i.drawBuffers){let se=b.texture;for(let H=0,de=se.length;H<de;H++){let me=n.get(se[H]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Ne(b)===!1){let se=ie?x:[x];U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer);for(let H=0;H<se.length;H++){let de=se[H];U.__webglColorRenderbuffer[H]=r.createRenderbuffer(),r.bindRenderbuffer(36161,U.__webglColorRenderbuffer[H]);let me=s.convert(de.format,de.encoding),le=s.convert(de.type),fe=v(de.internalFormat,me,le,de.encoding,b.isXRRenderTarget===!0),he=Qe(b);r.renderbufferStorageMultisample(36161,he,fe,b.width,b.height),r.framebufferRenderbuffer(36160,36064+H,36161,U.__webglColorRenderbuffer[H])}r.bindRenderbuffer(36161,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),Fe(U.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,$.__webglTexture),W(34067,x,xe);for(let se=0;se<6;se++)ae(U.__webglFramebuffer[se],b,x,36064,34069+se);C(x,xe)&&z(34067),t.unbindTexture()}else if(ie){let se=b.texture;for(let H=0,de=se.length;H<de;H++){let me=se[H],le=n.get(me);t.bindTexture(3553,le.__webglTexture),W(3553,me,xe),ae(U.__webglFramebuffer,b,me,36064+H,3553),C(me,xe)&&z(3553)}t.unbindTexture()}else{let se=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?se=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,$.__webglTexture),W(se,x,xe),ae(U.__webglFramebuffer,b,x,36064,se),C(x,xe)&&z(se),t.unbindTexture()}b.depthBuffer&&pe(b)}function tt(b){let x=M(b)||a,U=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let $=0,Q=U.length;$<Q;$++){let ie=U[$];if(C(ie,x)){let xe=b.isWebGLCubeRenderTarget?34067:3553,se=n.get(ie).__webglTexture;t.bindTexture(xe,se),z(xe),t.unbindTexture()}}}function Lt(b){if(a&&b.samples>0&&Ne(b)===!1){let x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],U=b.width,$=b.height,Q=16384,ie=[],xe=b.stencilBuffer?33306:36096,se=n.get(b),H=b.isWebGLMultipleRenderTargets===!0;if(H)for(let de=0;de<x.length;de++)t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,se.__webglFramebuffer),r.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,se.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,se.__webglFramebuffer);for(let de=0;de<x.length;de++){ie.push(36064+de),b.depthBuffer&&ie.push(xe);let me=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(me===!1&&(b.depthBuffer&&(Q|=256),b.stencilBuffer&&(Q|=1024)),H&&r.framebufferRenderbuffer(36008,36064,36161,se.__webglColorRenderbuffer[de]),me===!0&&(r.invalidateFramebuffer(36008,[xe]),r.invalidateFramebuffer(36009,[xe])),H){let le=n.get(x[de]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,le,0)}r.blitFramebuffer(0,0,U,$,0,0,U,$,Q,9728),m&&r.invalidateFramebuffer(36008,ie)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),H)for(let de=0;de<x.length;de++){t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+de,36161,se.__webglColorRenderbuffer[de]);let me=n.get(x[de]).__webglTexture;t.bindFramebuffer(36160,se.__webglFramebuffer),r.framebufferTexture2D(36009,36064+de,3553,me,0)}t.bindFramebuffer(36009,se.__webglMultisampledFramebuffer)}}function Qe(b){return Math.min(f,b.samples)}function Ne(b){let x=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Nt(b){let x=o.render.frame;g.get(b)!==x&&(g.set(b,x),b.update())}function Ft(b,x){let U=b.encoding,$=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Ys||U!==bn&&(U===Ve?a===!1?e.has("EXT_sRGB")===!0&&$===Ct?(b.format=Ys,b.minFilter=_t,b.generateMipmaps=!1):x=Gi.sRGBToLinear(x):($!==Ct||Q!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),x}this.allocateTextureUnit=G,this.resetTextureUnits=K,this.setTexture2D=F,this.setTexture2DArray=ee,this.setTexture3D=q,this.setTextureCube=te,this.rebindTextures=Ke,this.setupRenderTarget=at,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ne}function Hd(r,e,t){let n=t.isWebGL2;function i(s,o=null){let a;if(s===Mn)return 5121;if(s===Xo)return 32819;if(s===qo)return 32820;if(s===Ho)return 5120;if(s===Go)return 5122;if(s===Ya)return 5123;if(s===Wo)return 5124;if(s===gn)return 5125;if(s===xn)return 5126;if(s===pi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Yo)return 6406;if(s===Ct)return 6408;if(s===Jo)return 6409;if(s===$o)return 6410;if(s===vn)return 6402;if(s===ti)return 34041;if(s===Ko)return 6403;if(s===Zo)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Ys)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Qo)return 36244;if(s===jo)return 33319;if(s===el)return 33320;if(s===tl)return 36249;if(s===hs||s===us||s===ds||s===fs)if(o===Ve)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===hs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===hs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===us)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ds)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zr||s===Or||s===Ur||s===Br)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===zr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Or)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ur)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Br)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kr||s===Vr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===kr)return o===Ve?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Vr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Hr||s===Gr||s===Wr||s===Xr||s===qr||s===Yr||s===Zr||s===Jr||s===$r||s===Kr||s===Qr||s===jr||s===ea||s===ta)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Hr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$r)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ea)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ta)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===na)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===na)return o===Ve?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===$n?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var lr=class extends st{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Zn=class extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gd={type:"move"},fi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let p of e.hand.values()){let u=t.getJointPose(p,n);if(l.joints[p.jointName]===void 0){let T=new Zn;T.matrixAutoUpdate=!1,T.visible=!1,l.joints[p.jointName]=T,l.add(T)}let _=l.joints[p.jointName];u!==null&&(_.matrix.fromArray(u.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=u.radius),_.visible=u!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gd)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}},cr=class extends pt{constructor(e,t,n,i,s,o,a,c,l,h){if(h=h!==void 0?h:vn,h!==vn&&h!==ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vn&&(n=gn),n===void 0&&h===ti&&(n=$n),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ot,this.minFilter=c!==void 0?c:ot,this.flipY=!1,this.generateMipmaps=!1}},hr=class extends an{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",c=null,l=null,h=null,f=null,d=null,m=null,g=t.getContextAttributes(),p=null,u=null,_=[],T=[],w=new st;w.layers.enable(1),w.viewport=new Be;let M=new st;M.layers.enable(2),M.viewport=new Be;let S=[w,M],C=new lr;C.layers.enable(1),C.layers.enable(2);let z=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let F=_[R];return F===void 0&&(F=new fi,_[R]=F),F.getTargetRaySpace()},this.getControllerGrip=function(R){let F=_[R];return F===void 0&&(F=new fi,_[R]=F),F.getGripSpace()},this.getHand=function(R){let F=_[R];return F===void 0&&(F=new fi,_[R]=F),F.getHandSpace()};function A(R){let F=T.indexOf(R.inputSource);if(F===-1)return;let ee=_[F];ee!==void 0&&ee.dispatchEvent({type:R.type,data:R.inputSource})}function D(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",J);for(let R=0;R<_.length;R++){let F=T[R];F!==null&&(T[R]=null,_[R].disconnect(F))}z=null,v=null,e.setRenderTarget(p),d=null,f=null,h=null,i=null,u=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){s=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(R){c=R},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(R){if(i=R,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",D),i.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let F={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,F),i.updateRenderState({baseLayer:d}),u=new qt(d.framebufferWidth,d.framebufferHeight,{format:Ct,type:Mn,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let F=null,ee=null,q=null;g.depth&&(q=g.stencil?35056:33190,F=g.stencil?ti:vn,ee=g.stencil?$n:gn);let te={colorFormat:32856,depthFormat:q,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(te),i.updateRenderState({layers:[f]}),u=new qt(f.textureWidth,f.textureHeight,{format:Ct,type:Mn,depthTexture:new cr(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});let oe=e.properties.get(u);oe.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function J(R){for(let F=0;F<R.removed.length;F++){let ee=R.removed[F],q=T.indexOf(ee);q>=0&&(T[q]=null,_[q].dispatchEvent({type:"disconnected",data:ee}))}for(let F=0;F<R.added.length;F++){let ee=R.added[F],q=T.indexOf(ee);if(q===-1){for(let oe=0;oe<_.length;oe++)if(oe>=T.length){T.push(ee),q=oe;break}else if(T[oe]===null){T[oe]=ee,q=oe;break}if(q===-1)break}let te=_[q];te&&te.dispatchEvent({type:"connected",data:ee})}}let ne=new I,V=new I;function N(R,F,ee){ne.setFromMatrixPosition(F.matrixWorld),V.setFromMatrixPosition(ee.matrixWorld);let q=ne.distanceTo(V),te=F.projectionMatrix.elements,oe=ee.projectionMatrix.elements,ve=te[14]/(te[10]-1),W=te[14]/(te[10]+1),De=(te[9]+1)/te[5],ge=(te[9]-1)/te[5],ye=(te[8]-1)/te[0],ae=(oe[8]+1)/oe[0],Fe=ve*ye,Se=ve*ae,pe=q/(-ye+ae),Ke=pe*-ye;F.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(Ke),R.translateZ(pe),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();let at=ve+pe,tt=W+pe,Lt=Fe-Ke,Qe=Se+(q-Ke),Ne=De*W/tt*at,Nt=ge*W/tt*at;R.projectionMatrix.makePerspective(Lt,Qe,Ne,Nt,at,tt)}function X(R,F){F===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(F.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(i===null)return;C.near=M.near=w.near=R.near,C.far=M.far=w.far=R.far,(z!==C.near||v!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,v=C.far);let F=R.parent,ee=C.cameras;X(C,F);for(let te=0;te<ee.length;te++)X(ee[te],F);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),R.matrix.copy(C.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale);let q=R.children;for(let te=0,oe=q.length;te<oe;te++)q[te].updateMatrixWorld(!0);ee.length===2?N(C,w,M):C.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(R){f!==null&&(f.fixedFoveation=R),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=R)};let Y=null;function K(R,F){if(l=F.getViewerPose(c||o),m=F,l!==null){let ee=l.views;d!==null&&(e.setRenderTargetFramebuffer(u,d.framebuffer),e.setRenderTarget(u));let q=!1;ee.length!==C.cameras.length&&(C.cameras.length=0,q=!0);for(let te=0;te<ee.length;te++){let oe=ee[te],ve=null;if(d!==null)ve=d.getViewport(oe);else{let De=h.getViewSubImage(f,oe);ve=De.viewport,te===0&&(e.setRenderTargetTextures(u,De.colorTexture,f.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(u))}let W=S[te];W===void 0&&(W=new st,W.layers.enable(te),W.viewport=new Be,S[te]=W),W.matrix.fromArray(oe.transform.matrix),W.projectionMatrix.fromArray(oe.projectionMatrix),W.viewport.set(ve.x,ve.y,ve.width,ve.height),te===0&&C.matrix.copy(W.matrix),q===!0&&C.cameras.push(W)}}for(let ee=0;ee<_.length;ee++){let q=T[ee],te=_[ee];q!==null&&te!==void 0&&te.update(q,F,c||o)}Y&&Y(R,F),m=null}let G=new $a;G.setAnimationLoop(K),this.setAnimationLoop=function(R){Y=R},this.dispose=function(){}}};function Wd(r,e){function t(p,u){p.fogColor.value.copy(u.color),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function n(p,u,_,T,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?i(p,u):u.isMeshToonMaterial?(i(p,u),h(p,u)):u.isMeshPhongMaterial?(i(p,u),l(p,u)):u.isMeshStandardMaterial?(i(p,u),f(p,u),u.isMeshPhysicalMaterial&&d(p,u,w)):u.isMeshMatcapMaterial?(i(p,u),m(p,u)):u.isMeshDepthMaterial?i(p,u):u.isMeshDistanceMaterial?(i(p,u),g(p,u)):u.isMeshNormalMaterial?i(p,u):u.isLineBasicMaterial?(s(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?a(p,u,_,T):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function i(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.bumpMap&&(p.bumpMap.value=u.bumpMap,p.bumpScale.value=u.bumpScale,u.side===yt&&(p.bumpScale.value*=-1)),u.displacementMap&&(p.displacementMap.value=u.displacementMap,p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap),u.normalMap&&(p.normalMap.value=u.normalMap,p.normalScale.value.copy(u.normalScale),u.side===yt&&p.normalScale.value.negate()),u.specularMap&&(p.specularMap.value=u.specularMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let _=e.get(u).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let M=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*M}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity);let T;u.map?T=u.map:u.specularMap?T=u.specularMap:u.displacementMap?T=u.displacementMap:u.normalMap?T=u.normalMap:u.bumpMap?T=u.bumpMap:u.roughnessMap?T=u.roughnessMap:u.metalnessMap?T=u.metalnessMap:u.alphaMap?T=u.alphaMap:u.emissiveMap?T=u.emissiveMap:u.clearcoatMap?T=u.clearcoatMap:u.clearcoatNormalMap?T=u.clearcoatNormalMap:u.clearcoatRoughnessMap?T=u.clearcoatRoughnessMap:u.iridescenceMap?T=u.iridescenceMap:u.iridescenceThicknessMap?T=u.iridescenceThicknessMap:u.specularIntensityMap?T=u.specularIntensityMap:u.specularColorMap?T=u.specularColorMap:u.transmissionMap?T=u.transmissionMap:u.thicknessMap?T=u.thicknessMap:u.sheenColorMap?T=u.sheenColorMap:u.sheenRoughnessMap&&(T=u.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix));let w;u.aoMap?w=u.aoMap:u.lightMap&&(w=u.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uv2Transform.value.copy(w.matrix))}function s(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function a(p,u,_,T){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=T*.5,u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let w;u.map?w=u.map:u.alphaMap&&(w=u.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix))}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let _;u.map?_=u.map:u.alphaMap&&(_=u.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.roughness.value=u.roughness,p.metalness.value=u.metalness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap),u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function d(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap)),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap),u.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),p.clearcoatNormalMap.value=u.clearcoatNormalMap,u.side===yt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap)),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap)}function m(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){p.referencePosition.value.copy(u.referencePosition),p.nearDistance.value=u.nearDistance,p.farDistance.value=u.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Xd(r,e,t,n){let i={},s={},o=[],a=t.isWebGL2?r.getParameter(35375):0;function c(T,w){let M=w.program;n.uniformBlockBinding(T,M)}function l(T,w){let M=i[T.id];M===void 0&&(g(T),M=h(T),i[T.id]=M,T.addEventListener("dispose",u));let S=w.program;n.updateUBOMapping(T,S);let C=e.render.frame;s[T.id]!==C&&(d(T),s[T.id]=C)}function h(T){let w=f();T.__bindingPointIndex=w;let M=r.createBuffer(),S=T.__size,C=T.usage;return r.bindBuffer(35345,M),r.bufferData(35345,S,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,w,M),M}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let w=i[T.id],M=T.uniforms,S=T.__cache;r.bindBuffer(35345,w);for(let C=0,z=M.length;C<z;C++){let v=M[C];if(m(v,C,S)===!0){let A=v.value,D=v.__offset;typeof A=="number"?(v.__data[0]=A,r.bufferSubData(35345,D,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):A.toArray(v.__data),r.bufferSubData(35345,D,v.__data))}}r.bindBuffer(35345,null)}function m(T,w,M){let S=T.value;if(M[w]===void 0)return typeof S=="number"?M[w]=S:M[w]=S.clone(),!0;if(typeof S=="number"){if(M[w]!==S)return M[w]=S,!0}else{let C=M[w];if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(T){let w=T.uniforms,M=0,S=16,C=0;for(let z=0,v=w.length;z<v;z++){let A=w[z],D=p(A);if(A.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=M,z>0){C=M%S;let J=S-C;C!==0&&J-D.boundary<0&&(M+=S-C,A.__offset=M)}M+=D.storage}return C=M%S,C>0&&(M+=S-C),T.__size=M,T.__cache={},this}function p(T){let w=T.value,M={boundary:0,storage:0};return typeof w=="number"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function u(T){let w=T.target;w.removeEventListener("dispose",u);let M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function _(){for(let T in i)r.deleteBuffer(i[T]);o=[],i={},s={}}return{bind:c,update:l,dispose:_}}function qd(){let r=Hi("canvas");return r.style.display="block",r}function wr(r={}){this.isWebGLRenderer=!0;let e=r.canvas!==void 0?r.canvas:qd(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let f=null,d=null,m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=bn,this.physicallyCorrectLights=!1,this.toneMapping=Wt,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});let p=this,u=!1,_=0,T=0,w=null,M=-1,S=null,C=new Be,z=new Be,v=null,A=e.width,D=e.height,J=1,ne=null,V=null,N=new Be(0,0,A,D),X=new Be(0,0,A,D),Y=!1,K=new Qi,G=!1,R=!1,F=null,ee=new Xe,q=new Ce,te=new I,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return w===null?J:1}let W=t;function De(y,L){for(let O=0;O<y.length;O++){let P=y[O],k=e.getContext(P,L);if(k!==null)return k}return null}try{let y={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yr}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",Ee,!1),W===null){let L=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&L.shift(),W=De(L,y),W===null)throw De(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ge,ye,ae,Fe,Se,pe,Ke,at,tt,Lt,Qe,Ne,Nt,Ft,b,x,U,$,Q,ie,xe,se,H,de;function me(){ge=new fu(W),ye=new ou(W,ge,r),ge.init(ye),se=new Hd(W,ge,ye),ae=new kd(W,ge,ye),Fe=new gu,Se=new Cd,pe=new Vd(W,ge,ae,Se,ye,se,Fe),Ke=new cu(p),at=new du(p),tt=new Tl(W,ye),H=new ru(W,ge,tt,ye),Lt=new pu(W,tt,Fe,H),Qe=new yu(W,Lt,tt,Fe),Q=new vu(W,ye,pe),x=new lu(Se),Ne=new Ed(p,Ke,at,ge,ye,H,x),Nt=new Wd(p,Se),Ft=new Rd,b=new zd(ge,ye),$=new su(p,Ke,at,ae,Qe,h,o),U=new Bd(p,Qe,ye),de=new Xd(W,Fe,ye,ae),ie=new au(W,ge,Fe,ye),xe=new mu(W,ge,Fe,ye),Fe.programs=Ne.programs,p.capabilities=ye,p.extensions=ge,p.properties=Se,p.renderLists=Ft,p.shadowMap=U,p.state=ae,p.info=Fe}me();let le=new hr(p,W);this.xr=le,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let y=ge.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ge.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(y){y!==void 0&&(J=y,this.setSize(A,D,!1))},this.getSize=function(y){return y.set(A,D)},this.setSize=function(y,L,O){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=y,D=L,e.width=Math.floor(y*J),e.height=Math.floor(L*J),O!==!1&&(e.style.width=y+"px",e.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(A*J,D*J).floor()},this.setDrawingBufferSize=function(y,L,O){A=y,D=L,J=O,e.width=Math.floor(y*O),e.height=Math.floor(L*O),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(N)},this.setViewport=function(y,L,O,P){y.isVector4?N.set(y.x,y.y,y.z,y.w):N.set(y,L,O,P),ae.viewport(C.copy(N).multiplyScalar(J).floor())},this.getScissor=function(y){return y.copy(X)},this.setScissor=function(y,L,O,P){y.isVector4?X.set(y.x,y.y,y.z,y.w):X.set(y,L,O,P),ae.scissor(z.copy(X).multiplyScalar(J).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(y){ae.setScissorTest(Y=y)},this.setOpaqueSort=function(y){ne=y},this.setTransparentSort=function(y){V=y},this.getClearColor=function(y){return y.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(y=!0,L=!0,O=!0){let P=0;y&&(P|=16384),L&&(P|=256),O&&(P|=1024),W.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Ee,!1),Ft.dispose(),b.dispose(),Se.dispose(),Ke.dispose(),at.dispose(),Qe.dispose(),H.dispose(),de.dispose(),Ne.dispose(),le.dispose(),le.removeEventListener("sessionstart",re),le.removeEventListener("sessionend",ce),F&&(F.dispose(),F=null),Pe.stop()};function fe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),u=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),u=!1;let y=Fe.autoReset,L=U.enabled,O=U.autoUpdate,P=U.needsUpdate,k=U.type;me(),Fe.autoReset=y,U.enabled=L,U.autoUpdate=O,U.needsUpdate=P,U.type=k}function Ee(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Oe(y){let L=y.target;L.removeEventListener("dispose",Oe),Ze(L)}function Ze(y){E(y),Se.remove(y)}function E(y){let L=Se.get(y).programs;L!==void 0&&(L.forEach(function(O){Ne.releaseProgram(O)}),y.isShaderMaterial&&Ne.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,O,P,k,ue){L===null&&(L=oe);let _e=k.isMesh&&k.matrixWorld.determinant()<0,we=oo(y,L,O,P,k);ae.setMaterial(P,_e);let Me=O.index,Re=O.attributes.position;if(Me===null){if(Re===void 0||Re.count===0)return}else if(Me.count===0)return;let Te=1;P.wireframe===!0&&(Me=Lt.getWireframeAttribute(O),Te=2),H.setup(k,P,we,O,Me);let Ae,ke=ie;Me!==null&&(Ae=tt.get(Me),ke=xe,ke.setIndex(Ae));let cn=Me!==null?Me.count:Re.count,Pn=O.drawRange.start*Te,Rn=O.drawRange.count*Te,It=ue!==null?ue.start*Te:0,Le=ue!==null?ue.count*Te:1/0,Ln=Math.max(Pn,It),He=Math.min(cn,Pn+Rn,It+Le)-1,gt=Math.max(0,He-Ln+1);if(gt!==0){if(k.isMesh)P.wireframe===!0?(ae.setLineWidth(P.wireframeLinewidth*ve()),ke.setMode(1)):ke.setMode(4);else if(k.isLine){let Zt=P.linewidth;Zt===void 0&&(Zt=1),ae.setLineWidth(Zt*ve()),k.isLineSegments?ke.setMode(1):k.isLineLoop?ke.setMode(2):ke.setMode(3)}else k.isPoints?ke.setMode(0):k.isSprite&&ke.setMode(4);if(k.isInstancedMesh)ke.renderInstances(Ln,gt,k.count);else if(O.isInstancedBufferGeometry){let Zt=Math.min(O.instanceCount,O._maxInstanceCount);ke.renderInstances(Ln,gt,Zt)}else ke.render(Ln,gt)}},this.compile=function(y,L){function O(P,k,ue){P.transparent===!0&&P.side===sn?(P.side=yt,P.needsUpdate=!0,mt(P,k,ue),P.side=Qn,P.needsUpdate=!0,mt(P,k,ue),P.side=sn):mt(P,k,ue)}d=b.get(y),d.init(),g.push(d),y.traverseVisible(function(P){P.isLight&&P.layers.test(L.layers)&&(d.pushLight(P),P.castShadow&&d.pushShadow(P))}),d.setupLights(p.physicallyCorrectLights),y.traverse(function(P){let k=P.material;if(k)if(Array.isArray(k))for(let ue=0;ue<k.length;ue++){let _e=k[ue];O(_e,y,P)}else O(k,y,P)}),g.pop(),d=null};let B=null;function Z(y){B&&B(y)}function re(){Pe.stop()}function ce(){Pe.start()}let Pe=new $a;Pe.setAnimationLoop(Z),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(y){B=y,le.setAnimationLoop(y),y===null?Pe.stop():Pe.start()},le.addEventListener("sessionstart",re),le.addEventListener("sessionend",ce),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(u===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(L),L=le.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,L,w),d=b.get(y,g.length),d.init(),g.push(d),ee.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),K.setFromProjectionMatrix(ee),R=this.localClippingEnabled,G=x.init(this.clippingPlanes,R,L),f=Ft.get(y,m.length),f.init(),m.push(f),Je(y,L,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ne,V),G===!0&&x.beginShadows();let O=d.state.shadowsArray;if(U.render(O,y,L),G===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(f,y),d.setupLights(p.physicallyCorrectLights),L.isArrayCamera){let P=L.cameras;for(let k=0,ue=P.length;k<ue;k++){let _e=P[k];je(f,y,_e,_e.viewport)}}else je(f,y,L);w!==null&&(pe.updateMultisampleRenderTarget(w),pe.updateRenderTargetMipmap(w)),y.isScene===!0&&y.onAfterRender(p,y,L),H.resetDefaultState(),M=-1,S=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Je(y,L,O,P){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||K.intersectsSprite(y)){P&&te.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ee);let _e=Qe.update(y),we=y.material;we.visible&&f.push(y,_e,we,O,te.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Fe.render.frame&&(y.skeleton.update(),y.skeleton.frame=Fe.render.frame),!y.frustumCulled||K.intersectsObject(y))){P&&te.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ee);let _e=Qe.update(y),we=y.material;if(Array.isArray(we)){let Me=_e.groups;for(let Re=0,Te=Me.length;Re<Te;Re++){let Ae=Me[Re],ke=we[Ae.materialIndex];ke&&ke.visible&&f.push(y,_e,ke,O,te.z,Ae)}}else we.visible&&f.push(y,_e,we,O,te.z,null)}}let ue=y.children;for(let _e=0,we=ue.length;_e<we;_e++)Je(ue[_e],L,O,P)}function je(y,L,O,P){let k=y.opaque,ue=y.transmissive,_e=y.transparent;d.setupLightsView(O),ue.length>0&&ln(k,L,O),P&&ae.viewport(C.copy(P)),k.length>0&&Ue(k,L,O),ue.length>0&&Ue(ue,L,O),_e.length>0&&Ue(_e,L,O),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function ln(y,L,O){let P=ye.isWebGL2;F===null&&(F=new qt(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?pi:Mn,minFilter:is,samples:P&&s===!0?4:0})),p.getDrawingBufferSize(q),P?F.setSize(q.x,q.y):F.setSize(Zs(q.x),Zs(q.y));let k=p.getRenderTarget();p.setRenderTarget(F),p.clear();let ue=p.toneMapping;p.toneMapping=Wt,Ue(y,L,O),p.toneMapping=ue,pe.updateMultisampleRenderTarget(F),pe.updateRenderTargetMipmap(F),p.setRenderTarget(k)}function Ue(y,L,O){let P=L.isScene===!0?L.overrideMaterial:null;for(let k=0,ue=y.length;k<ue;k++){let _e=y[k],we=_e.object,Me=_e.geometry,Re=P===null?_e.material:P,Te=_e.group;we.layers.test(O.layers)&&zt(we,L,O,Me,Re,Te)}}function zt(y,L,O,P,k,ue){y.onBeforeRender(p,L,O,P,k,ue),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(p,L,O,P,y,ue),k.transparent===!0&&k.side===sn?(k.side=yt,k.needsUpdate=!0,p.renderBufferDirect(O,L,P,k,y,ue),k.side=Qn,k.needsUpdate=!0,p.renderBufferDirect(O,L,P,k,y,ue),k.side=sn):p.renderBufferDirect(O,L,P,k,y,ue),y.onAfterRender(p,L,O,P,k,ue)}function mt(y,L,O){L.isScene!==!0&&(L=oe);let P=Se.get(y),k=d.state.lights,ue=d.state.shadowsArray,_e=k.state.version,we=Ne.getParameters(y,k.state,ue,L,O),Me=Ne.getProgramCacheKey(we),Re=P.programs;P.environment=y.isMeshStandardMaterial?L.environment:null,P.fog=L.fog,P.envMap=(y.isMeshStandardMaterial?at:Ke).get(y.envMap||P.environment),Re===void 0&&(y.addEventListener("dispose",Oe),Re=new Map,P.programs=Re);let Te=Re.get(Me);if(Te!==void 0){if(P.currentProgram===Te&&P.lightsStateVersion===_e)return Ar(y,we),Te}else we.uniforms=Ne.getUniforms(y),y.onBuild(O,we,p),y.onBeforeCompile(we,p),Te=Ne.acquireProgram(we,Me),Re.set(Me,Te),P.uniforms=we.uniforms;let Ae=P.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ae.clippingPlanes=x.uniform),Ar(y,we),P.needsLights=co(y),P.lightsStateVersion=_e,P.needsLights&&(Ae.ambientLightColor.value=k.state.ambient,Ae.lightProbe.value=k.state.probe,Ae.directionalLights.value=k.state.directional,Ae.directionalLightShadows.value=k.state.directionalShadow,Ae.spotLights.value=k.state.spot,Ae.spotLightShadows.value=k.state.spotShadow,Ae.rectAreaLights.value=k.state.rectArea,Ae.ltc_1.value=k.state.rectAreaLTC1,Ae.ltc_2.value=k.state.rectAreaLTC2,Ae.pointLights.value=k.state.point,Ae.pointLightShadows.value=k.state.pointShadow,Ae.hemisphereLights.value=k.state.hemi,Ae.directionalShadowMap.value=k.state.directionalShadowMap,Ae.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ae.spotShadowMap.value=k.state.spotShadowMap,Ae.spotLightMatrix.value=k.state.spotLightMatrix,Ae.spotLightMap.value=k.state.spotLightMap,Ae.pointShadowMap.value=k.state.pointShadowMap,Ae.pointShadowMatrix.value=k.state.pointShadowMatrix);let ke=Te.getUniforms(),cn=Kn.seqWithValue(ke.seq,Ae);return P.currentProgram=Te,P.uniformsList=cn,Te}function Ar(y,L){let O=Se.get(y);O.outputEncoding=L.outputEncoding,O.instancing=L.instancing,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function oo(y,L,O,P,k){L.isScene!==!0&&(L=oe),pe.resetTextureUnits();let ue=L.fog,_e=P.isMeshStandardMaterial?L.environment:null,we=w===null?p.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:bn,Me=(P.isMeshStandardMaterial?at:Ke).get(P.envMap||_e),Re=P.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Te=!!P.normalMap&&!!O.attributes.tangent,Ae=!!O.morphAttributes.position,ke=!!O.morphAttributes.normal,cn=!!O.morphAttributes.color,Pn=P.toneMapped?p.toneMapping:Wt,Rn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,It=Rn!==void 0?Rn.length:0,Le=Se.get(P),Ln=d.state.lights;if(G===!0&&(R===!0||y!==S)){let ct=y===S&&P.id===M;x.setState(P,y,ct)}let He=!1;P.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Ln.state.version||Le.outputEncoding!==we||k.isInstancedMesh&&Le.instancing===!1||!k.isInstancedMesh&&Le.instancing===!0||k.isSkinnedMesh&&Le.skinning===!1||!k.isSkinnedMesh&&Le.skinning===!0||Le.envMap!==Me||P.fog===!0&&Le.fog!==ue||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==x.numPlanes||Le.numIntersection!==x.numIntersection)||Le.vertexAlphas!==Re||Le.vertexTangents!==Te||Le.morphTargets!==Ae||Le.morphNormals!==ke||Le.morphColors!==cn||Le.toneMapping!==Pn||ye.isWebGL2===!0&&Le.morphTargetsCount!==It)&&(He=!0):(He=!0,Le.__version=P.version);let gt=Le.currentProgram;He===!0&&(gt=mt(P,L,k));let Zt=!1,ai=!1,os=!1,nt=gt.getUniforms(),hn=Le.uniforms;if(ae.useProgram(gt.program)&&(Zt=!0,ai=!0,os=!0),P.id!==M&&(M=P.id,ai=!0),Zt||S!==y){if(nt.setValue(W,"projectionMatrix",y.projectionMatrix),ye.logarithmicDepthBuffer&&nt.setValue(W,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),S!==y&&(S=y,ai=!0,os=!0),P.isShaderMaterial||P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshStandardMaterial||P.envMap){let ct=nt.map.cameraPosition;ct!==void 0&&ct.setValue(W,te.setFromMatrixPosition(y.matrixWorld))}(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&nt.setValue(W,"isOrthographic",y.isOrthographicCamera===!0),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial||P.isShadowMaterial||k.isSkinnedMesh)&&nt.setValue(W,"viewMatrix",y.matrixWorldInverse)}if(k.isSkinnedMesh){nt.setOptional(W,k,"bindMatrix"),nt.setOptional(W,k,"bindMatrixInverse");let ct=k.skeleton;ct&&(ye.floatVertexTextures?(ct.boneTexture===null&&ct.computeBoneTexture(),nt.setValue(W,"boneTexture",ct.boneTexture,pe),nt.setValue(W,"boneTextureSize",ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let ls=O.morphAttributes;if((ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0&&ye.isWebGL2===!0)&&Q.update(k,O,P,gt),(ai||Le.receiveShadow!==k.receiveShadow)&&(Le.receiveShadow=k.receiveShadow,nt.setValue(W,"receiveShadow",k.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(hn.envMap.value=Me,hn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),ai&&(nt.setValue(W,"toneMappingExposure",p.toneMappingExposure),Le.needsLights&&lo(hn,os),ue&&P.fog===!0&&Nt.refreshFogUniforms(hn,ue),Nt.refreshMaterialUniforms(hn,P,J,D,F),Kn.upload(W,Le.uniformsList,hn,pe)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Kn.upload(W,Le.uniformsList,hn,pe),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&nt.setValue(W,"center",k.center),nt.setValue(W,"modelViewMatrix",k.modelViewMatrix),nt.setValue(W,"normalMatrix",k.normalMatrix),nt.setValue(W,"modelMatrix",k.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){let ct=P.uniformsGroups;for(let cs=0,ho=ct.length;cs<ho;cs++)if(ye.isWebGL2){let Er=ct[cs];de.update(Er,gt),de.bind(Er,gt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gt}function lo(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function co(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(y,L,O){Se.get(y.texture).__webglTexture=L,Se.get(y.depthTexture).__webglTexture=O;let P=Se.get(y);P.__hasExternalTextures=!0,P.__hasExternalTextures&&(P.__autoAllocateDepthBuffer=O===void 0,P.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,L){let O=Se.get(y);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,O=0){w=y,_=L,T=O;let P=!0,k=null,ue=!1,_e=!1;if(y){let Me=Se.get(y);Me.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(36160,null),P=!1):Me.__webglFramebuffer===void 0?pe.setupRenderTarget(y):Me.__hasExternalTextures&&pe.rebindTextures(y,Se.get(y.texture).__webglTexture,Se.get(y.depthTexture).__webglTexture);let Re=y.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(_e=!0);let Te=Se.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(k=Te[L],ue=!0):ye.isWebGL2&&y.samples>0&&pe.useMultisampledRTT(y)===!1?k=Se.get(y).__webglMultisampledFramebuffer:k=Te,C.copy(y.viewport),z.copy(y.scissor),v=y.scissorTest}else C.copy(N).multiplyScalar(J).floor(),z.copy(X).multiplyScalar(J).floor(),v=Y;if(ae.bindFramebuffer(36160,k)&&ye.drawBuffers&&P&&ae.drawBuffers(y,k),ae.viewport(C),ae.scissor(z),ae.setScissorTest(v),ue){let Me=Se.get(y.texture);W.framebufferTexture2D(36160,36064,34069+L,Me.__webglTexture,O)}else if(_e){let Me=Se.get(y.texture),Re=L||0;W.framebufferTextureLayer(36160,36064,Me.__webglTexture,O||0,Re)}M=-1},this.readRenderTargetPixels=function(y,L,O,P,k,ue,_e){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){ae.bindFramebuffer(36160,we);try{let Me=y.texture,Re=Me.format,Te=Me.type;if(Re!==Ct&&se.convert(Re)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ae=Te===pi&&(ge.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Te!==Mn&&se.convert(Te)!==W.getParameter(35738)&&!(Te===xn&&(ye.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-P&&O>=0&&O<=y.height-k&&W.readPixels(L,O,P,k,se.convert(Re),se.convert(Te),ue)}finally{let Me=w!==null?Se.get(w).__webglFramebuffer:null;ae.bindFramebuffer(36160,Me)}}},this.copyFramebufferToTexture=function(y,L,O=0){let P=Math.pow(2,-O),k=Math.floor(L.image.width*P),ue=Math.floor(L.image.height*P);pe.setTexture2D(L,0),W.copyTexSubImage2D(3553,O,0,0,y.x,y.y,k,ue),ae.unbindTexture()},this.copyTextureToTexture=function(y,L,O,P=0){let k=L.image.width,ue=L.image.height,_e=se.convert(O.format),we=se.convert(O.type);pe.setTexture2D(O,0),W.pixelStorei(37440,O.flipY),W.pixelStorei(37441,O.premultiplyAlpha),W.pixelStorei(3317,O.unpackAlignment),L.isDataTexture?W.texSubImage2D(3553,P,y.x,y.y,k,ue,_e,we,L.image.data):L.isCompressedTexture?W.compressedTexSubImage2D(3553,P,y.x,y.y,L.mipmaps[0].width,L.mipmaps[0].height,_e,L.mipmaps[0].data):W.texSubImage2D(3553,P,y.x,y.y,_e,we,L.image),P===0&&O.generateMipmaps&&W.generateMipmap(3553),ae.unbindTexture()},this.copyTextureToTexture3D=function(y,L,O,P,k=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ue=y.max.x-y.min.x+1,_e=y.max.y-y.min.y+1,we=y.max.z-y.min.z+1,Me=se.convert(P.format),Re=se.convert(P.type),Te;if(P.isData3DTexture)pe.setTexture3D(P,0),Te=32879;else if(P.isDataArrayTexture)pe.setTexture2DArray(P,0),Te=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,P.flipY),W.pixelStorei(37441,P.premultiplyAlpha),W.pixelStorei(3317,P.unpackAlignment);let Ae=W.getParameter(3314),ke=W.getParameter(32878),cn=W.getParameter(3316),Pn=W.getParameter(3315),Rn=W.getParameter(32877),It=O.isCompressedTexture?O.mipmaps[0]:O.image;W.pixelStorei(3314,It.width),W.pixelStorei(32878,It.height),W.pixelStorei(3316,y.min.x),W.pixelStorei(3315,y.min.y),W.pixelStorei(32877,y.min.z),O.isDataTexture||O.isData3DTexture?W.texSubImage3D(Te,k,L.x,L.y,L.z,ue,_e,we,Me,Re,It.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Te,k,L.x,L.y,L.z,ue,_e,we,Me,It.data)):W.texSubImage3D(Te,k,L.x,L.y,L.z,ue,_e,we,Me,Re,It),W.pixelStorei(3314,Ae),W.pixelStorei(32878,ke),W.pixelStorei(3316,cn),W.pixelStorei(3315,Pn),W.pixelStorei(32877,Rn),k===0&&P.generateMipmaps&&W.generateMipmap(Te),ae.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?pe.setTextureCube(y,0):y.isData3DTexture?pe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?pe.setTexture2DArray(y,0):pe.setTexture2D(y,0),ae.unbindTexture()},this.resetState=function(){_=0,T=0,w=null,ae.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var ur=class extends wr{};ur.prototype.isWebGL1Renderer=!0;var es=class extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};function nn(r,e,t){return to(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Ui(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function to(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var si=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dr=class extends si{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ia,endingEnd:ia}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case sa:s=e,a=2*t-n;break;case ra:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case sa:o=e,c=2*n-t;break;case ra:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),p=g*g,u=p*g,_=-d*u+2*d*p-d*g,T=(1+d)*u+(-1.5-2*d)*p+(-.5+d)*g+1,w=(-1-m)*u+(1.5+m)*p+.5*g,M=m*u-m*p;for(let S=0;S!==a;++S)s[S]=_*o[h+S]+T*o[l+S]+w*o[c+S]+M*o[f+S];return s}},fr=class extends si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),f=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*f+o[c+d]*h;return s}},pr=class extends si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Rt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ui(t,this.TimeBufferType),this.values=Ui(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ui(e.times,Array),values:Ui(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ki:t=this.InterpolantFactoryMethodDiscrete;break;case Vi:t=this.InterpolantFactoryMethodLinear;break;case ps:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ki;case this.InterpolantFactoryMethodLinear:return Vi;case this.InterpolantFactoryMethodSmooth:return ps}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=nn(n,s,o),this.values=nn(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&to(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=nn(this.times),t=nn(this.values),n=this.getValueSize(),i=this.getInterpolation()===ps,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let f=a*n,d=f-n,m=f+n;for(let g=0;g!==n;++g){let p=t[f+g];if(p!==t[d+g]||p!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[f+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=nn(e,0,o),this.values=nn(t,0,o*n)):(this.times=e,this.values=t),this}clone(){let e=nn(this.times,0),t=nn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Rt.prototype.TimeBufferType=Float32Array;Rt.prototype.ValueBufferType=Float32Array;Rt.prototype.DefaultInterpolation=Vi;var En=class extends Rt{};En.prototype.ValueTypeName="bool";En.prototype.ValueBufferType=Array;En.prototype.DefaultInterpolation=ki;En.prototype.InterpolantFactoryMethodLinear=void 0;En.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends Rt{};mr.prototype.ValueTypeName="color";var gr=class extends Rt{};gr.prototype.ValueTypeName="number";var xr=class extends si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)on.slerpFlat(s,0,o,l-a,o,l,c);return s}},gi=class extends Rt{InterpolantFactoryMethodLinear(e){return new xr(this.times,this.values,this.getValueSize(),e)}};gi.prototype.ValueTypeName="quaternion";gi.prototype.DefaultInterpolation=Vi;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Cn=class extends Rt{};Cn.prototype.ValueTypeName="string";Cn.prototype.ValueBufferType=Array;Cn.prototype.DefaultInterpolation=ki;Cn.prototype.InterpolantFactoryMethodLinear=void 0;Cn.prototype.InterpolantFactoryMethodSmooth=void 0;var _r=class extends Rt{};_r.prototype.ValueTypeName="vector";var ts=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Va(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Va();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Va(){return(typeof performance>"u"?Date:performance).now()}var Sr="\\[\\]\\.:\\/",Yd=new RegExp("["+Sr+"]","g"),Tr="[^"+Sr+"]",Zd="[^"+Sr.replace("\\.","")+"]",Jd=/((?:WC+[\/:])*)/.source.replace("WC",Tr),$d=/(WCOD+)?/.source.replace("WCOD",Zd),Kd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tr),Qd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tr),jd=new RegExp("^"+Jd+$d+Kd+Qd+"$"),ef=["material","materials","bones","map"],vr=class{constructor(e,t,n){let i=n||Ie.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ie=class{constructor(e,t,n){this.path=t,this.parsedPath=n||Ie.parseTrackName(t),this.node=Ie.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ie.Composite(e,t,n):new Ie(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yd,"")}static parseTrackName(e){let t=jd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);ef.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=Ie.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=vr;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var af=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yr);function nf(){let r=1.000000000000001*Math.random();return r>1?1:r}function sf(r,e){if(e==null&&(e=r??Number.MAX_VALUE,r=0),r>=e)throw new Error("Incorrect arguments.");return r+(e-r)*nf()}function no(){return parseFloat(sf(-1e4,1e4).toString().substring(0,15))}var io=`
varying vec3 vUv; 

void main() {
	vUv = position; 

	vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
	gl_Position = projectionMatrix * modelViewPosition; 
}`;var rs=class extends vt{constructor(t=new An(1,1),n=new bt){super(t,n);this._pixelResolution=100;this._light_origin=new Ce(.39,.7);this._time_speed=.1;this._rotation=0;this._lightIntensity=.1;this._seed=no();this._time=0}setShaderMaterial(t,n){if(Array.isArray(this.material))for(let o=0;o<this.material.length;o++)this.material[o].dispose();else this.material.dispose();let i={pixels:{value:this._pixelResolution},light_origin:{value:this._light_origin},time_speed:{value:this._time_speed},lightIntensity:{value:this._lightIntensity},seed:{value:this._seed},time:{value:this._time},rotation:{value:this._rotation}},s=Mr.merge([i,t]);this.material=new bt({uniforms:s,transparent:!0,vertexShader:io,fragmentShader:n})}disposeLayer(){if(this.geometry.dispose(),Array.isArray(this.material))for(let t=0;t<this.material.length;t++)this.material[t].dispose();else this.material.dispose()}update(t){if(!Array.isArray(this.material)){let n=this.material;n.uniforms.time.value=t,n.uniforms.rotation.value=this._rotation,n.uniforms.lightIntensity.value=this.lightIntensity,n.uniforms.time_speed.value=this._time_speed,n.uniforms.light_origin.value=this._light_origin,n.uniforms.pixels.value=this._pixelResolution}}get lightIntensity(){return this._lightIntensity}set lightIntensity(t){this._lightIntensity=t}get rotationVertical(){return this._rotation}set rotationVertical(t){this._rotation=t}get timeSpeed(){return this._time_speed}set timeSpeed(t){this._time_speed=t}get lightOrigin(){return this._light_origin}set lightOrigin(t){this._light_origin=t}get pixelResolution(){return this._pixelResolution}set pixelResolution(t){this._pixelResolution=t}};var so=`
varying vec3 vUv;
uniform float seed;
uniform float time;
uniform float lightIntensity;
uniform float pixels;
uniform float rotation;
uniform vec2 light_origin;
uniform float time_speed;`;var ro=`
uint hash(uint x) {
  x += (x << 10u);
  x ^= (x >> 6u);
  x += (x << 3u);
  x ^= (x >> 11u);
  x += (x << 15u);
  return x;
}

uint hash(uvec2 v) { return hash(v.x ^ hash(v.y)); }

float floatConstruct(uint m) {
  const uint ieeeMantissa = 0x007FFFFFu;  // binary32 mantissa bitmask
  const uint ieeeOne = 0x3F800000u;       // 1.0 in IEEE binary32

  m &= ieeeMantissa;  // Keep only mantissa bits (fractional part)
  m |= ieeeOne;       // Add fractional part to 1.0

  float f = uintBitsToFloat(m);  // Range [1:2]
  return f - 1.0;                // Range [0:1]
}

float random(vec2 v) { return floatConstruct(hash(floatBitsToUint(v))); }

vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

float rand(vec2 coord) {
  coord = mod(coord, vec2(1.0, 1.0) * floor(size + 0.5));
  return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 15.5453 * seed);
}

float noise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626,
                      0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p =
      permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(
      0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float fbm(vec2 coord) {
  float value = 0.0;
  float scale = 0.5;

  for (int i = 0; i < OCTAVES; i++) {
    value += noise(coord) * scale;
    coord *= 2.0;
    scale *= 0.5;
  }
  return value;
}

float circleNoise(vec2 uv) {
  float uv_y = floor(uv.y);
  uv.x += uv_y * .31;
  vec2 f = fract(uv);
  float h = rand(vec2(floor(uv.x), floor(uv_y)));
  float m = (length(f - 0.25 - (h * 0.5)));
  float r = h * 0.25;
  return smoothstep(0.0, r, m * 0.75);
}
bool dither(vec2 uv_pixel, vec2 uv_real) {
  return mod(uv_pixel.x + uv_real.y, 2.0 / pixels) <= 1.0 / pixels;
}

vec2 spherify(vec2 uv) {
  vec2 centered = uv * 2.0 - 1.0;
  float z = sqrt(1.0 - dot(centered.xy, centered.xy));
  vec2 sphere = centered / (z + 1.0);
  return sphere * 0.5 + 0.5;
}

vec2 rotate(vec2 coord, float angle) {
  coord -= 0.5;
  coord *= mat2(vec2(cos(angle), -sin(angle)), vec2(sin(angle), cos(angle)));
  return coord + 0.5;
}`;var ao=`
${so}
float dither_size = 2.0;
float light_border_1 = 0.4;
float light_border_2 = 0.6;
uniform vec4 color1;
uniform vec4 color2;
uniform vec4 color3;
float size = 10.0;
int OCTAVES = 20;
bool should_dither = true;

${ro}

void main() {
    vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;

    // check distance from center & distance to light
    float d_circle = distance(uv, vec2(0.5));
    float d_light = distance(uv , vec2(light_origin));
    // cut out a circle
    // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
    float a = step(d_circle, 0.49999);
    
    bool dith = dither(uv ,vUv.xy);
    uv = rotate(uv, rotation);

    // get a noise value with light distance added
    // this creates a moving dynamic shape
    float fbm1 = fbm(uv);
    d_light += fbm(uv*size+fbm1+vec2(time*0.1+time_speed, 0.0))*lightIntensity;
    
    // size of edge in which colors should be dithered
    float dither_border = (1.0/pixels)*dither_size;

    // now we can assign colors based on distance to light origin
    vec4 col = color1;
    if (d_light > light_border_1) {
        col = color2;
        if (d_light < light_border_1 + dither_border && (dith || !should_dither)) {
            col = color1;
        }
    }
    if (d_light > light_border_2) {
        col = color3;
        if (d_light < light_border_2 + dither_border && (dith || !should_dither)) {
            col = color2;
        }
    }
    
    gl_FragColor = vec4(col.rgb, a * col.a);
}
`;var as=class extends rs{constructor(){super();this._color=new Be(155/255,158/255,184/255,1);this._color2=new Be(71/255,97/255,124/255,1);this._color3=new Be(53/255,57/255,85/255,1);let t={pixels:{value:100},color1:{value:this._color},color2:{value:this._color2},color3:{value:this._color3}};this.setShaderMaterial(t,ao)}};var rf=()=>{let r=new es,e=new ts,t,n,i=new st(75,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=2;let s=new wr;s.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(s.domElement);let o=new as;r.add(o),o.pixelResolution=100,document.body.addEventListener("mousemove",c=>{let l=c.target.getBoundingClientRect();t=(c.clientX-l.left)/1e3,n=(c.clientY-l.top)/1e3-1});function a(){let c=e.getElapsedTime();requestAnimationFrame(a),o.update(c),o.lightOrigin=new Ce(t,-n),s.render(r,i)}a()};window.onload=rf;})();
