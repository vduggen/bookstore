"use strict";(self["webpackChunkvue_typescript"]=self["webpackChunkvue_typescript"]||[]).push([[158],{2723:function(e,t,i){i.r(t),i.d(t,{default:function(){return R}});var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("header",[i("v-btn",{attrs:{to:"/",icon:"",color:"primary"}},[i("v-icon",[e._v("mdi-arrow-left")])],1),i("v-row",[i("v-col",{staticClass:"pl-0",attrs:{cols:"2"}},[i("img",{staticClass:"elevation-7 rounded-lg",attrs:{src:e.bookData.img,alt:e.bookData.name,width:"100%"}})]),i("v-col",[i("h4",{staticClass:"text-h6"},[e._v(e._s(e.bookData.name))]),i("p",{staticClass:"subtitle-2 font-weight-light text--secondary"},[e._v(" "+e._s(e.bookData.author)+" ")]),i("p",[i("span",{staticClass:"text--secondary"},[e._v("Ano do lançamento:")]),i("span",{staticClass:"ml-2 font-weight-bold"},[e._v(e._s(e.bookData.date))])]),i("div",{staticClass:"d-flex align-center"},[i("v-rating",{attrs:{readonly:"","background-color":"primary lighten-3","half-increments":"",color:"primary"},model:{value:e.bookData.rating,callback:function(t){e.$set(e.bookData,"rating",t)},expression:"bookData.rating"}}),i("p",{staticClass:"mb-0 ml-3 subtitle-1 font-weight-light"},[e._v(" ("+e._s(e.bookData.rating)+"/5) ")])],1)])],1)],1),i("v-divider",{staticClass:"my-4"}),i("h5",{staticClass:"text-h5 font-weight-bold mb-3"},[e._v("Sinopse")]),i("p",{staticClass:"subtitle-1"},[e._v(e._s(e.bookData.description))])],1)},r=[],a=i(6133),o=i(2751),l=i(796),s=i(6035),c=i(9726),u=(i(5003),i(1539),i(1299),i(7327),i(4115)),h=i(144),d=i(5904),v=function(e,t,i,n){var r,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===("undefined"===typeof Reflect?"undefined":(0,c.Z)(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(a<3?r(o):a>3?r(t,i,o):r(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o},f=function(e){(0,l.Z)(i,e);var t=(0,s.Z)(i);function i(){return(0,a.Z)(this,i),t.apply(this,arguments)}return(0,o.Z)(i,[{key:"bookData",get:function(){var e=this.$route.params.id,t=u.filter((function(t){var i=t.id;return String(i)===e}));return t[0]}}]),i}(h.Z);f=v([d.ZP],f);var p=f,m=p,g=i(1001),y=i(3453),b=i.n(y),k=i(680),x=i(2102),C=i(9846),I=i(4367),Z=i(8085),H=Z.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:(0,I.Z)({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:(0,I.Z)({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}}),D=i(6428),$=(i(9653),i(7268),i(1249),i(172)),_=i(6952),S=h.Z.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(e,t){var i=this;this.clearDelay();var n=parseInt(this["".concat(e,"Delay")],10);this["".concat(e,"Timeout")]=setTimeout(t||function(){i.isActive={open:!0,close:!1}[e]},n)}}}),V=i(9131),w=i(6286),B=h.Z.extend({name:"rippleable",directives:{ripple:w.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),F=i(4589),T=i(3325),E=(0,T.Z)(_.Z,S,B,V.Z,Z.Z).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var e=this.$props,t=e.dark,i=e.large,n=e.light,r=e.medium,a=e.small,o=e.size,l=e.xLarge,s=e.xSmall;return{dark:t,large:i,light:n,medium:r,size:o,small:a,xLarge:l,xSmall:s}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(e){e!==this.value&&this.$emit("input",e)},value:function(e){this.internalValue=e}},methods:{createClickFn:function(e){var t=this;return function(i){if(!t.readonly){var n=t.genHoverIndex(i,e);t.clearable&&t.internalValue===n?t.internalValue=0:t.internalValue=n}}},createProps:function(e){var t={index:e,value:this.internalValue,click:this.createClickFn(e),isFilled:Math.floor(this.internalValue)>e,isHovered:Math.floor(this.hoverIndex)>e};return this.halfIncrements&&(t.isHalfHovered=!t.isHovered&&(this.hoverIndex-e)%1>0,t.isHalfFilled=!t.isFilled&&(this.internalValue-e)%1>0),t},genHoverIndex:function(e,t){var i=this.isHalfEvent(e);return this.halfIncrements&&this.$vuetify.rtl&&(i=!i),t+(i?.5:1)},getIconName:function(e){var t=this.isHovering?e.isHovered:e.isFilled,i=this.isHovering?e.isHalfHovered:e.isHalfFilled;return t?this.fullIcon:i?this.halfIcon:this.emptyIcon},getColor:function(e){if(this.isHovering){if(e.isHovered||e.isHalfHovered)return this.color}else if(e.isFilled||e.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(e){if(this.halfIncrements){var t=e.target&&e.target.getBoundingClientRect();if(t&&e.pageX-t.left<t.width/2)return!0}return!1},onMouseEnter:function(e,t){var i=this;this.runDelay("open",(function(){i.hoverIndex=i.genHoverIndex(e,t)}))},onMouseLeave:function(){var e=this;this.runDelay("close",(function(){return e.hoverIndex=-1}))},genItem:function(e){var t=this,i=this.createProps(e);if(this.$scopedSlots.item)return this.$scopedSlots.item(i);var n={click:i.click};return this.hover&&(n.mouseenter=function(i){return t.onMouseEnter(i,e)},n.mouseleave=this.onMouseLeave,this.halfIncrements&&(n.mousemove=function(i){return t.onMouseEnter(i,e)})),this.$createElement($.Z,this.setTextColor(this.getColor(i),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,e+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:n}),[this.getIconName(i)])}},render:function(e){var t=this,i=(0,F.MT)(Number(this.length)).map((function(e){return t.genItem(e)}));return e("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},i)}}),N=i(2877),M=(0,g.Z)(m,n,r,!1,null,null,null),R=M.exports;b()(M,{VBtn:k.Z,VCol:x.Z,VContainer:C.Z,VDivider:H,VIcon:D.Z,VRating:E,VRow:N.Z})}}]);
//# sourceMappingURL=booksId-legacy.40905b44.js.map