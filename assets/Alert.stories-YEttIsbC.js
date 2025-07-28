import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./iframe-VyjpNP5k.js";import{c as k}from"./index-CdJFUDDL.js";import{c as C}from"./utils-CBfrqCZ4.js";import{X as I}from"./x-BHYsgynI.js";import{c as x}from"./createLucideIcon-RqrQQh3q.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],_=x("circle-alert",W);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],P=x("circle-check-big",V);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],R=x("info",O);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],E=x("triangle-alert",M),q=k("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground border-border",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",success:"bg-green-50 text-green-900 border-green-200 [&>svg]:text-green-600 dark:bg-green-950 dark:text-green-100 dark:border-green-800",warning:"bg-yellow-50 text-yellow-900 border-yellow-200 [&>svg]:text-yellow-600 dark:bg-yellow-950 dark:text-yellow-100 dark:border-yellow-800",info:"bg-blue-50 text-blue-900 border-blue-200 [&>svg]:text-blue-600 dark:bg-blue-950 dark:text-blue-100 dark:border-blue-800",secondary:"bg-secondary text-secondary-foreground border-secondary",outline:"bg-transparent border-input hover:bg-accent hover:text-accent-foreground"}},defaultVariants:{variant:"default"}}),z={info:R,warning:E,error:_,success:P,close:I},o=A.forwardRef(({className:r,variant:i,icon:t,iconColor:w,fontFamily:b,children:T,style:j,...N},S)=>{const F=t?z[t]:null,D={...j,fontFamily:b?{Inter:'"Inter", sans-serif',Roboto:'"Roboto", sans-serif',"Open Sans":'"Open Sans", sans-serif',"Playfair Display":'"Playfair Display", serif',"Source Code Pro":'"Source Code Pro", monospace'}[b]:void 0};return e.jsxs("div",{ref:S,role:"alert",className:C(q({variant:i}),r),style:D,...N,children:[F&&e.jsx(F,{className:"h-4 w-4",style:w?{color:w}:void 0}),T]})});o.displayName="Alert";const a=A.forwardRef(({className:r,...i},t)=>e.jsx("h5",{ref:t,className:C("mb-1 font-medium leading-none tracking-tight",r),...i}));a.displayName="AlertTitle";const n=A.forwardRef(({className:r,...i},t)=>e.jsx("div",{ref:t,className:C("text-sm [&_p]:leading-relaxed",r),...i}));n.displayName="AlertDescription";o.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{icon:{required:!1,tsType:{name:"union",raw:'"info" | "warning" | "error" | "success" | "close" | null',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'},{name:"literal",value:'"close"'},{name:"null"}]},description:""},iconColor:{required:!1,tsType:{name:"string"},description:""},fontFamily:{required:!1,tsType:{name:"union",raw:"'Inter' | 'Roboto' | 'Open Sans' | 'Playfair Display' | 'Source Code Pro'",elements:[{name:"literal",value:"'Inter'"},{name:"literal",value:"'Roboto'"},{name:"literal",value:"'Open Sans'"},{name:"literal",value:"'Playfair Display'"},{name:"literal",value:"'Source Code Pro'"}]},description:""}},composes:["VariantProps"]};a.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};n.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const G={title:"Components/Alert",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","destructive","success","warning","info","secondary","outline"],description:"The color variant of the alert."},icon:{control:{type:"select"},options:[null,"info","warning","error","success","close"],description:"The icon to display in the alert."},fontFamily:{control:{type:"select"},options:["Inter","Roboto","Open Sans","Playfair Display","Source Code Pro"],description:"Font family for alert text.",table:{type:{summary:"string"},defaultValue:{summary:"Inter"}}},iconColor:{control:{type:"color"},description:"Custom icon color (overrides variant styling)"}},args:{variant:"default"}},s={args:{variant:"default",icon:"info"},render:r=>e.jsxs(o,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(a,{children:"Heads up!"}),e.jsx(n,{children:"You can add components to your app using the CLI."})]})},l={args:{variant:"default",icon:"info"},render:r=>e.jsxs(o,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(a,{children:"Information"}),e.jsx(n,{children:"This is an informational alert with an info icon."})]})},c={args:{variant:"default",icon:"warning"},render:r=>e.jsxs(o,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(a,{children:"Warning"}),e.jsx(n,{children:"This is a warning alert with a warning icon."})]})},d={args:{variant:"destructive",icon:"error"},render:r=>e.jsxs(o,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(a,{children:"Error"}),e.jsx(n,{children:"This is an error alert with an error icon."})]})},m={args:{variant:"default",icon:"success"},render:r=>e.jsxs(o,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(a,{children:"Success"}),e.jsx(n,{children:"This is a success alert with a success icon."})]})},p={args:{variant:"default",icon:"close"},render:r=>e.jsxs(o,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(a,{children:"Dismissible"}),e.jsx(n,{children:"This alert has a close icon for dismissal."})]})},u={args:{variant:"success",icon:"success"},render:r=>e.jsxs(o,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(a,{children:"Success!"}),e.jsx(n,{children:"Your changes have been saved successfully."})]})},f={args:{variant:"warning",icon:"warning"},render:r=>e.jsxs(o,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(a,{children:"Warning"}),e.jsx(n,{children:"Please review your settings before continuing."})]})},g={args:{variant:"info",icon:"info"},render:r=>e.jsxs(o,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(a,{children:"Information"}),e.jsx(n,{children:"Here is some helpful information for you."})]})},y={args:{variant:"secondary",icon:"info"},render:r=>e.jsxs(o,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(a,{children:"Secondary Alert"}),e.jsx(n,{children:"This is a secondary styled alert."})]})},v={args:{variant:"outline",icon:"info"},render:r=>e.jsxs(o,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",children:[e.jsx(a,{children:"Outline Alert"}),e.jsx(n,{children:"This is an outline styled alert with transparent background."})]})},h={args:{variant:"default",icon:"info",iconColor:"#0369a1"},render:r=>{const i={backgroundColor:"#f0f9ff",color:"#0c4a6e",borderColor:"#0ea5e9"};return e.jsxs(o,{variant:r.variant,icon:r.icon,iconColor:r.iconColor,fontFamily:r.fontFamily,className:"w-[400px]",style:i,children:[e.jsx(a,{children:"Custom Colored Alert"}),e.jsx(n,{children:"Use the color picker controls to customize this alert's appearance."})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const J=["Default","WithInfoIcon","WithWarningIcon","WithErrorIcon","WithSuccessIcon","WithCloseIcon","SuccessVariant","WarningVariant","InfoVariant","SecondaryVariant","OutlineVariant","CustomColors"];export{h as CustomColors,s as Default,g as InfoVariant,v as OutlineVariant,y as SecondaryVariant,u as SuccessVariant,f as WarningVariant,p as WithCloseIcon,d as WithErrorIcon,l as WithInfoIcon,m as WithSuccessIcon,c as WithWarningIcon,J as __namedExportsOrder,G as default};
