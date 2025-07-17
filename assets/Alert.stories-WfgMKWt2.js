import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-CAc0y5bo.js";import{a as S,c as _}from"./utils-RPSJ8ZXL.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),E=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,t,a)=>a?a.toUpperCase():t.toLowerCase()),j=r=>{const o=E(r);return o.charAt(0).toUpperCase()+o.slice(1)},N=(...r)=>r.filter((o,t,a)=>!!o&&o.trim()!==""&&a.indexOf(o)===t).join(" ").trim(),$=r=>{for(const o in r)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=c.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:t=2,absoluteStrokeWidth:a,className:d="",children:l,iconNode:w,...u},D)=>c.createElement("svg",{ref:D,...L,width:o,height:o,stroke:r,strokeWidth:a?Number(t)*24/Number(o):t,className:N("lucide",d),...!l&&!$(u)&&{"aria-hidden":"true"},...u},[...w.map(([I,W])=>c.createElement(I,W)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(r,o)=>{const t=c.forwardRef(({className:a,...d},l)=>c.createElement(M,{ref:l,iconNode:o,className:N(`lucide-${V(j(r))}`,`lucide-${r}`,a),...d}));return t.displayName=j(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],R=x("circle-alert",O);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],U=x("circle-check-big",P);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],z=x("info",q);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],H=x("triangle-alert",B);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Z=x("x",Y),K=_("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",success:"bg-green-50 text-green-900 border-green-200 [&>svg]:text-green-600 dark:bg-green-950 dark:text-green-100 dark:border-green-800",warning:"bg-yellow-50 text-yellow-900 border-yellow-200 [&>svg]:text-yellow-600 dark:bg-yellow-950 dark:text-yellow-100 dark:border-yellow-800",info:"bg-blue-50 text-blue-900 border-blue-200 [&>svg]:text-blue-600 dark:bg-blue-950 dark:text-blue-100 dark:border-blue-800",secondary:"bg-secondary text-secondary-foreground border-secondary",outline:"bg-transparent border-input hover:bg-accent hover:text-accent-foreground"}},defaultVariants:{variant:"default"}}),X={info:z,warning:H,error:R,success:U,close:Z},n=c.forwardRef(({className:r,variant:o,icon:t,iconColor:a,children:d,...l},w)=>{const u=t?X[t]:null;return e.jsxs("div",{ref:w,role:"alert",className:S(K({variant:o}),r),...l,children:[u&&e.jsx(u,{className:"h-4 w-4",style:a?{color:a}:void 0}),d]})});n.displayName="Alert";const s=c.forwardRef(({className:r,...o},t)=>e.jsx("h5",{ref:t,className:S("mb-1 font-medium leading-none tracking-tight",r),...o}));s.displayName="AlertTitle";const i=c.forwardRef(({className:r,...o},t)=>e.jsx("div",{ref:t,className:S("text-sm [&_p]:leading-relaxed",r),...o}));i.displayName="AlertDescription";n.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{icon:{required:!1,tsType:{name:"union",raw:'"info" | "warning" | "error" | "success" | "close" | null',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'},{name:"literal",value:'"close"'},{name:"null"}]},description:""},iconColor:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};s.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};i.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const Q={title:"UI/Alert",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","destructive","success","warning","info","secondary","outline"],description:"The color variant of the alert."},icon:{control:{type:"select"},options:[null,"info","warning","error","success","close"],description:"The icon to display in the alert."},backgroundColor:{control:{type:"color"},description:"Custom background color (overrides variant styling)"},textColor:{control:{type:"color"},description:"Custom text color (overrides variant styling)"},borderColor:{control:{type:"color"},description:"Custom border color (overrides variant styling)"},iconColor:{control:{type:"color"},description:"Custom icon color (overrides variant styling)"},titleText:{control:"text",description:"The text to display as the alert title."},descriptionText:{control:"text",description:"The text to display as the alert description."}},args:{variant:"default"}},p={render:r=>{const o={backgroundColor:r.backgroundColor,color:r.textColor,borderColor:r.borderColor};return e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,className:"w-[400px]",style:o,children:[e.jsx(s,{children:r.titleText}),e.jsx(i,{children:r.descriptionText})]})}},C={args:{variant:"default",icon:"info",titleText:"Information",descriptionText:"This is an informational alert with an info icon."},render:r=>{const o={backgroundColor:r.backgroundColor,color:r.textColor,borderColor:r.borderColor};return e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,className:"w-[400px]",style:o,children:[e.jsx(s,{children:r.titleText}),e.jsx(i,{children:r.descriptionText})]})}},g={args:{variant:"default",icon:"warning",titleText:"Warning",descriptionText:"This is a warning alert with a warning icon."},render:r=>{const o={backgroundColor:r.backgroundColor,color:r.textColor,borderColor:r.borderColor};return e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,className:"w-[400px]",style:o,children:[e.jsx(s,{children:r.titleText}),e.jsx(i,{children:r.descriptionText})]})}},m={args:{variant:"destructive",icon:"error",titleText:"Error",descriptionText:"This is an error alert with an error icon."},render:r=>{const o={backgroundColor:r.backgroundColor,color:r.textColor,borderColor:r.borderColor};return e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,className:"w-[400px]",style:o,children:[e.jsx(s,{children:r.titleText}),e.jsx(i,{children:r.descriptionText})]})}},b={args:{variant:"default",icon:"success",titleText:"Success",descriptionText:"This is a success alert with a success icon."},render:r=>{const o={backgroundColor:r.backgroundColor,color:r.textColor,borderColor:r.borderColor};return e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,className:"w-[400px]",style:o,children:[e.jsx(s,{children:r.titleText}),e.jsx(i,{children:r.descriptionText})]})}},T={args:{variant:"default",icon:"close",titleText:"Dismissible",descriptionText:"This alert has a close icon for dismissal."},render:r=>{const o={backgroundColor:r.backgroundColor,color:r.textColor,borderColor:r.borderColor};return e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,className:"w-[400px]",style:o,children:[e.jsx(s,{children:r.titleText}),e.jsx(i,{children:r.descriptionText})]})}},y={args:{variant:"success",icon:"success",titleText:"Success!",descriptionText:"Your changes have been saved successfully."},render:r=>{const o={backgroundColor:r.backgroundColor,color:r.textColor,borderColor:r.borderColor};return e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,className:"w-[400px]",style:o,children:[e.jsx(s,{children:r.titleText}),e.jsx(i,{children:r.descriptionText})]})}},v={args:{variant:"warning",icon:"warning",titleText:"Warning",descriptionText:"Please review your settings before continuing."},render:r=>{const o={backgroundColor:r.backgroundColor,color:r.textColor,borderColor:r.borderColor};return e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,className:"w-[400px]",style:o,children:[e.jsx(s,{children:r.titleText}),e.jsx(i,{children:r.descriptionText})]})}},h={args:{variant:"info",icon:"info",titleText:"Information",descriptionText:"Here is some helpful information for you."},render:r=>{const o={backgroundColor:r.backgroundColor,color:r.textColor,borderColor:r.borderColor};return e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,className:"w-[400px]",style:o,children:[e.jsx(s,{children:r.titleText}),e.jsx(i,{children:r.descriptionText})]})}},f={args:{variant:"secondary",icon:"info",titleText:"Secondary Alert",descriptionText:"This is a secondary styled alert."},render:r=>{const o={backgroundColor:r.backgroundColor,color:r.textColor,borderColor:r.borderColor};return e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,className:"w-[400px]",style:o,children:[e.jsx(s,{children:r.titleText}),e.jsx(i,{children:r.descriptionText})]})}},A={args:{variant:"outline",icon:"info",titleText:"Outline Alert",descriptionText:"This is an outline styled alert with transparent background."},render:r=>{const o={backgroundColor:r.backgroundColor,color:r.textColor,borderColor:r.borderColor};return e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,className:"w-[400px]",style:o,children:[e.jsx(s,{children:r.titleText}),e.jsx(i,{children:r.descriptionText})]})}},k={args:{variant:"default",icon:"info",titleText:"Custom Colored Alert",descriptionText:"Use the color picker controls to customize this alert's appearance.",backgroundColor:"#f0f9ff",textColor:"#0c4a6e",borderColor:"#0ea5e9",iconColor:"#0369a1"},render:r=>{const o={backgroundColor:r.backgroundColor,color:r.textColor,borderColor:r.borderColor};return e.jsxs(n,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,className:"w-[400px]",style:o,children:[e.jsx(s,{children:r.titleText}),e.jsx(i,{children:r.descriptionText})]})}};p.args={titleText:"Heads up!",descriptionText:"You can add components to your app using the CLI.",icon:"info"};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor
    };
    return <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>;
  }
}`,...p.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    icon: 'info',
    titleText: 'Information',
    descriptionText: 'This is an informational alert with an info icon.'
  },
  render: args => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor
    };
    return <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>;
  }
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    icon: 'warning',
    titleText: 'Warning',
    descriptionText: 'This is a warning alert with a warning icon.'
  },
  render: args => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor
    };
    return <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>;
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    icon: 'error',
    titleText: 'Error',
    descriptionText: 'This is an error alert with an error icon.'
  },
  render: args => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor
    };
    return <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>;
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    icon: 'success',
    titleText: 'Success',
    descriptionText: 'This is a success alert with a success icon.'
  },
  render: args => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor
    };
    return <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>;
  }
}`,...b.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    icon: 'close',
    titleText: 'Dismissible',
    descriptionText: 'This alert has a close icon for dismissal.'
  },
  render: args => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor
    };
    return <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>;
  }
}`,...T.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    icon: 'success',
    titleText: 'Success!',
    descriptionText: 'Your changes have been saved successfully.'
  },
  render: args => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor
    };
    return <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>;
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    icon: 'warning',
    titleText: 'Warning',
    descriptionText: 'Please review your settings before continuing.'
  },
  render: args => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor
    };
    return <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>;
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    icon: 'info',
    titleText: 'Information',
    descriptionText: 'Here is some helpful information for you.'
  },
  render: args => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor
    };
    return <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    icon: 'info',
    titleText: 'Secondary Alert',
    descriptionText: 'This is a secondary styled alert.'
  },
  render: args => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor
    };
    return <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>;
  }
}`,...f.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    icon: 'info',
    titleText: 'Outline Alert',
    descriptionText: 'This is an outline styled alert with transparent background.'
  },
  render: args => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor
    };
    return <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>;
  }
}`,...A.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    icon: 'info',
    titleText: 'Custom Colored Alert',
    descriptionText: 'Use the color picker controls to customize this alert\\'s appearance.',
    backgroundColor: '#f0f9ff',
    textColor: '#0c4a6e',
    borderColor: '#0ea5e9',
    iconColor: '#0369a1'
  },
  render: args => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor
    };
    return <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>;
  }
}`,...k.parameters?.docs?.source}}};const rr=["Default","WithInfoIcon","WithWarningIcon","WithErrorIcon","WithSuccessIcon","WithCloseIcon","SuccessVariant","WarningVariant","InfoVariant","SecondaryVariant","OutlineVariant","CustomColors"];export{k as CustomColors,p as Default,h as InfoVariant,A as OutlineVariant,f as SecondaryVariant,y as SuccessVariant,v as WarningVariant,T as WithCloseIcon,m as WithErrorIcon,C as WithInfoIcon,b as WithSuccessIcon,g as WithWarningIcon,rr as __namedExportsOrder,Q as default};
