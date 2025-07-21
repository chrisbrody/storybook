import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-BWMD4Peh.js";import{c as N,a as _}from"./utils-DEz_iieQ.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),V=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,a,s)=>s?s.toUpperCase():a.toLowerCase()),D=r=>{const o=V(r);return o.charAt(0).toUpperCase()+o.slice(1)},I=(...r)=>r.filter((o,a,s)=>!!o&&o.trim()!==""&&s.indexOf(o)===a).join(" ").trim(),O=r=>{for(const o in r)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var R={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=c.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:d="",children:l,iconNode:j,...p},k)=>c.createElement("svg",{ref:k,...R,width:o,height:o,stroke:r,strokeWidth:s?Number(a)*24/Number(o):a,className:I("lucide",d),...!l&&!O(p)&&{"aria-hidden":"true"},...p},[...j.map(([u,S])=>c.createElement(u,S)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(r,o)=>{const a=c.forwardRef(({className:s,...d},l)=>c.createElement(E,{ref:l,iconNode:o,className:I(`lucide-${P(D(r))}`,`lucide-${r}`,s),...d}));return a.displayName=D(r),a};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],L=m("circle-alert",M);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],q=m("circle-check-big",$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],H=m("info",U);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],z=m("triangle-alert",Y);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Z=m("x",B),K=_("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",success:"bg-green-50 text-green-900 border-green-200 [&>svg]:text-green-600 dark:bg-green-950 dark:text-green-100 dark:border-green-800",warning:"bg-yellow-50 text-yellow-900 border-yellow-200 [&>svg]:text-yellow-600 dark:bg-yellow-950 dark:text-yellow-100 dark:border-yellow-800",info:"bg-blue-50 text-blue-900 border-blue-200 [&>svg]:text-blue-600 dark:bg-blue-950 dark:text-blue-100 dark:border-blue-800",secondary:"bg-secondary text-secondary-foreground border-secondary",outline:"bg-transparent border-input hover:bg-accent hover:text-accent-foreground"}},defaultVariants:{variant:"default"}}),X={info:H,warning:z,error:L,success:q,close:Z},n=c.forwardRef(({className:r,variant:o,icon:a,iconColor:s,fontFamily:d,children:l,style:j,...p},k)=>{const u=a?X[a]:null,W={...j,fontFamily:d?{Inter:'"Inter", sans-serif',Roboto:'"Roboto", sans-serif',"Open Sans":'"Open Sans", sans-serif',"Playfair Display":'"Playfair Display", serif',"Source Code Pro":'"Source Code Pro", monospace'}[d]:void 0};return e.jsxs("div",{ref:k,role:"alert",className:N(K({variant:o}),r),style:W,...p,children:[u&&e.jsx(u,{className:"h-4 w-4",style:s?{color:s}:void 0}),l]})});n.displayName="Alert";const t=c.forwardRef(({className:r,...o},a)=>e.jsx("h5",{ref:a,className:N("mb-1 font-medium leading-none tracking-tight",r),...o}));t.displayName="AlertTitle";const i=c.forwardRef(({className:r,...o},a)=>e.jsx("div",{ref:a,className:N("text-sm [&_p]:leading-relaxed",r),...o}));i.displayName="AlertDescription";n.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{icon:{required:!1,tsType:{name:"union",raw:'"info" | "warning" | "error" | "success" | "close" | null',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'},{name:"literal",value:'"close"'},{name:"null"}]},description:""},iconColor:{required:!1,tsType:{name:"string"},description:""},fontFamily:{required:!1,tsType:{name:"union",raw:"'Inter' | 'Roboto' | 'Open Sans' | 'Playfair Display' | 'Source Code Pro'",elements:[{name:"literal",value:"'Inter'"},{name:"literal",value:"'Roboto'"},{name:"literal",value:"'Open Sans'"},{name:"literal",value:"'Playfair Display'"},{name:"literal",value:"'Source Code Pro'"}]},description:""}},composes:["VariantProps"]};t.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};i.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const rr={title:"UI/Alert",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","destructive","success","warning","info","secondary","outline"],description:"The color variant of the alert."},icon:{control:{type:"select"},options:[null,"info","warning","error","success","close"],description:"The icon to display in the alert."},fontFamily:{control:{type:"select"},options:["Inter","Roboto","Open Sans","Playfair Display","Source Code Pro"],description:"Font family for alert text.",table:{type:{summary:"string"},defaultValue:{summary:"Inter"}}},iconColor:{control:{type:"color"},description:"Custom icon color (overrides variant styling)"}},args:{variant:"default"}},f={args:{variant:"default",icon:"info"},render:r=>e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(t,{children:"Heads up!"}),e.jsx(i,{children:"You can add components to your app using the CLI."})]})},g={args:{variant:"default",icon:"info"},render:r=>e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(t,{children:"Information"}),e.jsx(i,{children:"This is an informational alert with an info icon."})]})},y={args:{variant:"default",icon:"warning"},render:r=>e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(t,{children:"Warning"}),e.jsx(i,{children:"This is a warning alert with a warning icon."})]})},v={args:{variant:"destructive",icon:"error"},render:r=>e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(t,{children:"Error"}),e.jsx(i,{children:"This is an error alert with an error icon."})]})},h={args:{variant:"default",icon:"success"},render:r=>e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(t,{children:"Success"}),e.jsx(i,{children:"This is a success alert with a success icon."})]})},A={args:{variant:"default",icon:"close"},render:r=>e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(t,{children:"Dismissible"}),e.jsx(i,{children:"This alert has a close icon for dismissal."})]})},x={args:{variant:"success",icon:"success"},render:r=>e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(t,{children:"Success!"}),e.jsx(i,{children:"Your changes have been saved successfully."})]})},C={args:{variant:"warning",icon:"warning"},render:r=>e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(t,{children:"Warning"}),e.jsx(i,{children:"Please review your settings before continuing."})]})},w={args:{variant:"info",icon:"info"},render:r=>e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(t,{children:"Information"}),e.jsx(i,{children:"Here is some helpful information for you."})]})},b={args:{variant:"secondary",icon:"info"},render:r=>e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(t,{children:"Secondary Alert"}),e.jsx(i,{children:"This is a secondary styled alert."})]})},F={args:{variant:"outline",icon:"info"},render:r=>e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(t,{children:"Outline Alert"}),e.jsx(i,{children:"This is an outline styled alert with transparent background."})]})},T={args:{variant:"default",icon:"info",iconColor:"#0369a1"},render:r=>{const o={backgroundColor:"#f0f9ff",color:"#0c4a6e",borderColor:"#0ea5e9"};return e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",style:o,children:[e.jsx(t,{children:"Custom Colored Alert"}),e.jsx(i,{children:"Use the color picker controls to customize this alert's appearance."})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    icon: 'info'
  },
  render: args => <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    icon: 'info'
  },
  render: args => <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is an informational alert with an info icon.
      </AlertDescription>
    </Alert>
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    icon: 'warning'
  },
  render: args => <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        This is a warning alert with a warning icon.
      </AlertDescription>
    </Alert>
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    icon: 'error'
  },
  render: args => <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        This is an error alert with an error icon.
      </AlertDescription>
    </Alert>
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    icon: 'success'
  },
  render: args => <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        This is a success alert with a success icon.
      </AlertDescription>
    </Alert>
}`,...h.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    icon: 'close'
  },
  render: args => <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Dismissible</AlertTitle>
      <AlertDescription>
        This alert has a close icon for dismissal.
      </AlertDescription>
    </Alert>
}`,...A.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    icon: 'success'
  },
  render: args => <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    icon: 'warning'
  },
  render: args => <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Please review your settings before continuing.
      </AlertDescription>
    </Alert>
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    icon: 'info'
  },
  render: args => <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        Here is some helpful information for you.
      </AlertDescription>
    </Alert>
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    icon: 'info'
  },
  render: args => <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Secondary Alert</AlertTitle>
      <AlertDescription>
        This is a secondary styled alert.
      </AlertDescription>
    </Alert>
}`,...b.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    icon: 'info'
  },
  render: args => <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Outline Alert</AlertTitle>
      <AlertDescription>
        This is an outline styled alert with transparent background.
      </AlertDescription>
    </Alert>
}`,...F.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    icon: 'info',
    iconColor: '#0369a1'
  },
  render: args => {
    const customStyles = {
      backgroundColor: '#f0f9ff',
      color: '#0c4a6e',
      borderColor: '#0ea5e9'
    };
    return <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]" style={customStyles}>
        <AlertTitle>Custom Colored Alert</AlertTitle>
        <AlertDescription>
          Use the color picker controls to customize this alert's appearance.
        </AlertDescription>
      </Alert>;
  }
}`,...T.parameters?.docs?.source}}};const er=["Default","WithInfoIcon","WithWarningIcon","WithErrorIcon","WithSuccessIcon","WithCloseIcon","SuccessVariant","WarningVariant","InfoVariant","SecondaryVariant","OutlineVariant","CustomColors"];export{T as CustomColors,f as Default,w as InfoVariant,F as OutlineVariant,b as SecondaryVariant,x as SuccessVariant,C as WarningVariant,A as WithCloseIcon,v as WithErrorIcon,g as WithInfoIcon,h as WithSuccessIcon,y as WithWarningIcon,er as __namedExportsOrder,rr as default};
