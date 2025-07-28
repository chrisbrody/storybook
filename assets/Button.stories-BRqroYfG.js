import{j as O}from"./jsx-runtime-D_zvdyIk.js";import{B as F}from"./button-D2SeGpkw.js";import"./iframe-8lbtTc7c.js";import"./index-Cn_L8oLb.js";import"./utils-CBfrqCZ4.js";import"./index-CdJFUDDL.js";const b=({primary:g=!1,size:e="medium",label:r,variant:v,backgroundColor:C,textColor:S,fontFamily:y,className:h,style:x,...k})=>{const B=v||(g?"default":"secondary");let f="default";e==="small"?f="sm":e==="large"&&(f="lg");const D={...x,backgroundColor:C,color:S,fontFamily:y?{Inter:'"Inter", sans-serif',Roboto:'"Roboto", sans-serif',"Open Sans":'"Open Sans", sans-serif',"Playfair Display":'"Playfair Display", serif',"Source Code Pro":'"Source Code Pro", monospace'}[y]:void 0};return O.jsx(F,{variant:B,size:f,className:h,style:D,...k,children:r})};b.__docgenInfo={description:"",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?\nIf `variant` is provided, this prop will be ignored.\nMaps to 'default' or 'secondary' variant if no `variant` is explicitly set.",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use. Overrides `variant` background color."},textColor:{required:!1,tsType:{name:"string"},description:"What text color to use. Overrides `variant` text color."},fontFamily:{required:!1,tsType:{name:"union",raw:"'Inter' | 'Roboto' | 'Open Sans' | 'Playfair Display' | 'Source Code Pro'",elements:[{name:"literal",value:"'Inter'"},{name:"literal",value:"'Roboto'"},{name:"literal",value:"'Open Sans'"},{name:"literal",value:"'Playfair Display'"},{name:"literal",value:"'Source Code Pro'"}]},description:"Font family to use for button text."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be? Maps to 'sm', 'default', or 'lg' size.",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"},variant:{required:!1,tsType:{name:"ShadcnButtonProps['variant']",raw:"ShadcnButtonProps['variant']"},description:"Explicit variant to use. Overrides `primary` prop."},className:{required:!1,tsType:{name:"string"},description:"Additional Tailwind CSS classes for custom styling."}},composes:["Omit"]};const{fn:T}=__STORYBOOK_MODULE_TEST__,R={title:"Components/Button",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"],description:"The visual style variant of the button (e.g., default, destructive, outline).",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},fontFamily:{control:{type:"select"},options:["Inter","Roboto","Open Sans","Playfair Display","Source Code Pro"],description:"Font family for button text.",table:{type:{summary:"string"},defaultValue:{summary:"Inter"}}},className:{control:"text",description:"Additional Tailwind CSS classes to apply directly to the button.",table:{type:{summary:"string"}}},primary:{control:"boolean",description:"Sets the button to the default (primary) or secondary variant if `variant` is not explicitly set."},size:{control:"select",options:["small","medium","large"]},backgroundColor:{control:"color",description:"Custom background color for the button. Overrides variant color.",table:{type:{summary:"string"},defaultValue:{summary:"#000000"}}},textColor:{control:"color",description:"Custom text color for the button. Overrides variant color.",table:{type:{summary:"string"},defaultValue:{summary:"#ffffff"}}}},args:{onClick:T()}},a={args:{variant:"default",label:"Button",primary:!0},decorators:[(g,e)=>{const r=e.args.backgroundColor;return r&&document.documentElement.style.setProperty("--base-primary",r),g()}]},t={args:{variant:"secondary",label:"Button",primary:!1}},o={args:{variant:"destructive",label:"Destructive Button"}},s={args:{variant:"outline",label:"Outline Button"}},n={args:{variant:"ghost",label:"Ghost Button"}},l={args:{variant:"link",label:"Link Button"}},i={args:{size:"large",label:"Large Button"}},c={args:{size:"small",label:"Small Button"}},u={args:{label:"Custom Text Color",variant:"default",className:"text-purple-600 border-purple-600 border-2 bg-white hover:bg-purple-50"}},m={args:{label:"Custom Hover",variant:"outline",className:"hover:!bg-green-200 hover:!text-green-800"}},d={args:{label:"Designers Rock!",variant:"outline",backgroundColor:"#FFDDC1",textColor:"#A0522D"}},p={args:{label:"Green Machine",variant:"outline",backgroundColor:"#D1FAE5",textColor:"#065F46"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    label: 'Button',
    primary: true
  },
  decorators: [(Story, context) => {
    const backgroundColor = context.args.backgroundColor;
    if (backgroundColor) {
      document.documentElement.style.setProperty('--base-primary', backgroundColor);
    }
    return Story();
  }]
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Button',
    primary: false
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    label: 'Destructive Button'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    label: 'Outline Button'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    label: 'Ghost Button'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    label: 'Link Button'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Large Button'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Small Button'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Text Color',
    variant: 'default',
    className: 'text-purple-600 border-purple-600 border-2 bg-white hover:bg-purple-50'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Hover',
    variant: 'outline',
    className: 'hover:!bg-green-200 hover:!text-green-800'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Designers Rock!',
    variant: 'outline',
    backgroundColor: '#FFDDC1',
    textColor: '#A0522D'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Green Machine',
    variant: 'outline',
    backgroundColor: '#D1FAE5',
    textColor: '#065F46'
  }
}`,...p.parameters?.docs?.source}}};const z=["Primary","Secondary","Destructive","Outline","Ghost","Link","Large","Small","CustomFontColor","CustomHoverEffect","CustomColorsForDesigners","AnotherCustomColor"];export{p as AnotherCustomColor,d as CustomColorsForDesigners,u as CustomFontColor,m as CustomHoverEffect,o as Destructive,n as Ghost,i as Large,l as Link,s as Outline,a as Primary,t as Secondary,c as Small,z as __namedExportsOrder,R as default};
