(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1215:function(A,e,t){Promise.resolve().then(t.t.bind(t,1749,23)),Promise.resolve().then(t.t.bind(t,5250,23)),Promise.resolve().then(t.t.bind(t,345,23)),Promise.resolve().then(t.t.bind(t,6190,23)),Promise.resolve().then(t.t.bind(t,1239,23)),Promise.resolve().then(t.bind(t,7334)),Promise.resolve().then(t.t.bind(t,6,23)),Promise.resolve().then(t.t.bind(t,5610,23)),Promise.resolve().then(t.t.bind(t,4820,23)),Promise.resolve().then(t.bind(t,5849)),Promise.resolve().then(t.t.bind(t,5698,23)),Promise.resolve().then(t.t.bind(t,3114,23)),Promise.resolve().then(t.t.bind(t,2032,23)),Promise.resolve().then(t.bind(t,4680)),Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,514,23)),Promise.resolve().then(t.t.bind(t,990,23))},7334:function(A,e,t){"use strict";t.r(e),t.d(e,{Dots:function(){return c},default:function(){return u}});var n=t(7437),o=t(2265),_=t(9177),i=t.n(_),r=A=>{let{x:e,y:t,scale:o=1,dotSize:_}=A;return(0,n.jsx)("div",{className:i().dot,style:{width:"".concat(_,"px"),height:"".concat(_,"px"),left:"".concat(e,"px"),top:"".concat(t,"px"),transform:"scale(".concat(o,")")}})},s=t(4671),l=t.n(s);let a={initialScale:1,minScale:.25},c=A=>{let{dotSize:e,dotSpacing:t,height:_="100%",influenceRadius:i,interactive:s=!1}=A,c=(0,o.useRef)(null),[u,h]=(0,o.useState)([]),x=(0,o.useCallback)((A,n)=>{let o=[];for(let _=0;_<n;_+=t)for(let n=0;n<A;n+=t)o.push({x:n,y:_,scale:a.initialScale,dotSize:e});h(o)},[e,t]);(0,o.useEffect)(()=>{if(c.current){let A=new ResizeObserver(A=>{for(let e of A){let{width:A,height:t}=e.contentRect;x(A,t)}});return A.observe(c.current),()=>A.disconnect()}},[e,t,x]);let d=(A,e)=>{if(!s||void 0===i)return;let{initialScale:t,minScale:n}=a;h(u.map(o=>{let _=o.x-A,r=o.y-e,s=Math.sqrt(_*_+r*r);return{...o,scale:s<i?n+(1-n)*Math.min(s/i,1):t}}))},g=()=>{h(u.map(A=>({...A,scale:a.initialScale})))};return(0,n.jsx)("div",{ref:c,className:l().dotsContainer,onMouseMove:s?A=>{if(!c.current)return;let e=c.current.getBoundingClientRect();d(A.clientX-e.left,A.clientY-e.top)}:void 0,onTouchMove:s?A=>{if(!c.current)return;let e=A.touches[0],t=c.current.getBoundingClientRect();d(e.clientX-t.left,e.clientY-t.top)}:void 0,onMouseLeave:s?g:void 0,onTouchEnd:s?g:void 0,style:{height:_},children:u.map((A,e)=>(0,n.jsx)(r,{...A},e))})};var u=c},345:function(A){A.exports={page:"page_page__ZU32B",header:"page_header__kVzhN",main:"page_main__GlU4n",hero:"page_hero__SKW6o",benefit:"page_benefit__iNm_L"}},1239:function(A){A.exports={benefit:"benefit_benefit__n98DB",heading:"benefit_heading__hzpYF"}},2032:function(A){A.exports={benefits:"benefits_benefits__I4XHO"}},6190:function(A){A.exports={button:"button_button__dM7gR",primary:"button_primary__Y_Ksg",action:"button_action__Aitra",promo:"button_promo__9tX72",secondary:"button_secondary__Mn__I",link:"button_link___1l_R"}},4820:function(A){A.exports={copyright:"copyright_copyright__rB0gw"}},9177:function(A){A.exports={dot:"dot_dot__t3UHx"}},4671:function(A){A.exports={dotsContainer:"dots_dotsContainer__g3V9S"}},3114:function(A){A.exports={container:"flex_container__PuhJM",item:"flex_item__KJVTR",hideOnMobile:"flex_hideOnMobile__zbLpA",hideOnTablet:"flex_hideOnTablet__SFxhS"}},5610:function(A){A.exports={footer:"footer_footer__ysJQv"}},6:function(A){A.exports={header:"header_header__iAHWV"}},5698:function(A){A.exports={container:"hero_container__F8a_i",content:"hero_content__F4E3Z",imageItem:"hero_imageItem__lQhE9",imageComponent:"hero_imageComponent__reMb1",slogan:"hero_slogan__6esdx",button:"hero_button__bpL8r"}},514:function(A){A.exports={logo:"logo_logo__e7YNS"}},990:function(A){A.exports={menu:"menu_menu___PdAa",menuItem:"menu_menuItem__lN5ad",subtitle:"menu_subtitle__7Kija",wide:"menu_wide__UbhzP",hide:"menu_hide__jffzf"}},3219:function(A){A.exports={text:"text_text__IHkKq",uppercase:"text_uppercase__VYD81",xxs:"text_xxs__n7jjR",xs:"text_xs__zkCXI",s:"text_s__h2v9E",m:"text_m__lrOD2",ml:"text_ml__Q4bjp",l:"text_l__FU5sg",xl:"text_xl__XLUTM",xxl:"text_xxl__l0rlb",xxxl:"text_xxxl__RHOW8",bold:"text_bold__gK0US",light:"text_light__ajHhQ",purple:"text_purple__pxm58",green:"text_green__9IfK6",secondary:"text_secondary__2_ZGN",warning:"text_warning__Hyma9",error:"text_error__qftME"}},5849:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/hero.c0eb5f80.jpg",height:677,width:677,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGeD//EABcQAAMBAAAAAAAAAAAAAAAAAAABAhH/2gAIAQEAAQUC2Wf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAWEAEBAQAAAAAAAAAAAAAAAAAhAHH/2gAIAQEABj8CXb//xAAZEAACAwEAAAAAAAAAAAAAAAABEQAhMUH/2gAIAQEAAT8hF02edT//2gAMAwEAAgADAAAAEPP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAVEQEBAAAAAAAAAAAAAAAAAAARAP/aAAgBAgEBPxBL/8QAGhABAAEFAAAAAAAAAAAAAAAAAREAIUFRcf/aAAgBAQABPxBeQjSC/S47X//Z",blurWidth:8,blurHeight:8}},4680:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/logo.7623e61a.png",height:123,width:226,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJFBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/eFplAAAADHRSTlMAcc1g3x4kTsGUTUn8AeI4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nAXBgQEAIAjDsG4DRf3/XxMAVrlZ92VXgz2eCpxIkfQBCFoAcf/APFAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}}},function(A){A.O(0,[647,971,69,744],function(){return A(A.s=1215)}),_N_E=A.O()}]);