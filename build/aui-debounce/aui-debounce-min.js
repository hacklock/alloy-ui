YUI.add("aui-debounce",function(e,t){var n=e.Lang,r=e.Array,i=n.isString,s=n.isUndefined,o=[],u=function(e,t,n,i){return s(e)?t:r(e,n||0,i!==!1)};e.debounce=function(t,n,r,a){var f,l,c;i(t)&&r&&(t=e.bind(t,r)),n=n||0,a=u(arguments,o,3);var h=function(){clearInterval(f),f=null},p=function(){h();var e=t.apply(r,l||a||o);return l=null,e},d=function(e,i,h,d){c.cancel(),e=s(e)?n:e,t=d||t,r=h||r,i!==a&&(l=u(i,o,0,!1).concat(a));if(!(e>0))return p();f=setInterval(p,e)},v=function(){f&&h()},m=function(e){v(),e=e||0};return c=function(){var e=arguments.length?arguments:a;return c.delay(n,e,r||this)},c.cancel=v,c.delay=d,c.setDelay=m,c}},"3.1.0-deprecated.21");
