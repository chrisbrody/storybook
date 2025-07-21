import{j as O}from"./jsx-runtime-D_zvdyIk.js";import{B as F}from"./button-CGtVHHaW.js";import"./iframe-AQORyKOk.js";import"./index-ChVNftag.js";import"./utils-DEz_iieQ.js";const v=({primary:f=!1,size:d="medium",label:y,variant:b,backgroundColor:C,textColor:h,fontFamily:g,className:S,style:x,...B})=>{const D=b||(f?"default":"secondary");let p="default";d==="small"?p="sm":d==="large"&&(p="lg");const k={...x,backgroundColor:C,color:h,fontFamily:g?{Inter:'"Inter", sans-serif',Roboto:'"Roboto", sans-serif',"Open Sans":'"Open Sans", sans-serif',"Playfair Display":'"Playfair Display", serif',"Source Code Pro":'"Source Code Pro", monospace'}[g]:void 0};return O.jsx(F,{variant:D,size:p,className:S,style:k,...B,children:y})};v.__docgenInfo={description:"",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?\nIf `variant` is provided, this prop will be ignored.\nMaps to 'default' or 'secondary' variant if no `variant` is explicitly set.",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use. Overrides `variant` background color."},textColor:{required:!1,tsType:{name:"string"},description:"What text color to use. Overrides `variant` text color."},fontFamily:{required:!1,tsType:{name:"union",raw:"'Inter' | 'Roboto' | 'Open Sans' | 'Playfair Display' | 'Source Code Pro'",elements:[{name:"literal",value:"'Inter'"},{name:"literal",value:"'Roboto'"},{name:"literal",value:"'Open Sans'"},{name:"literal",value:"'Playfair Display'"},{name:"literal",value:"'Source Code Pro'"}]},description:"Font family to use for button text."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be? Maps to 'sm', 'default', or 'lg' size.",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"},variant:{required:!1,tsType:{name:"ShadcnButtonProps['variant']",raw:"ShadcnButtonProps['variant']"},description:"Explicit variant to use. Overrides `primary` prop."},className:{required:!1,tsType:{name:"string"},description:"Additional Tailwind CSS classes for custom styling."}},composes:["Omit"]};const{fn:T}=__STORYBOOK_MODULE_TEST__,L={title:"UI/Button",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"],description:"The visual style variant of the button (e.g., default, destructive, outline).",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},fontFamily:{control:{type:"select"},options:["Inter","Roboto","Open Sans","Playfair Display","Source Code Pro"],description:"Font family for button text.",table:{type:{summary:"string"},defaultValue:{summary:"Inter"}}},className:{control:"text",description:"Additional Tailwind CSS classes to apply directly to the button.",table:{type:{summary:"string"}}},primary:{control:"boolean",description:"Sets the button to the default (primary) or secondary variant if `variant` is not explicitly set."},size:{control:"select",options:["small","medium","large"]},backgroundColor:{control:"color",description:"Custom background color for the button. Overrides variant color.",table:{type:{summary:"string"}}},textColor:{control:"color",description:"Custom text color for the button. Overrides variant color.",table:{type:{summary:"string"}}}},args:{onClick:T()}},e={args:{variant:"default",label:"Button",primary:!0}},r={args:{variant:"secondary",label:"Button",primary:!1}},a={args:{variant:"destructive",label:"Destructive Button"}},t={args:{variant:"outline",label:"Outline Button"}},o={args:{variant:"ghost",label:"Ghost Button"}},s={args:{variant:"link",label:"Link Button"}},n={args:{size:"large",label:"Large Button"}},l={args:{size:"small",label:"Small Button"}},i={args:{label:"Custom Text Color",variant:"default",className:"text-purple-600 border-purple-600 border-2 bg-white hover:bg-purple-50"}},c={args:{label:"Custom Hover",variant:"outline",className:"hover:!bg-green-200 hover:!text-green-800"}},u={args:{label:"Designers Rock!",variant:"default",backgroundColor:"#FFDDC1",textColor:"#A0522D"}},m={args:{label:"Green Machine",variant:"outline",backgroundColor:"#D1FAE5",textColor:"#065F46"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    label: 'Button',
    primary: true
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Button',
    primary: false
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    label: 'Destructive Button'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    label: 'Outline Button'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    label: 'Ghost Button'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    label: 'Link Button'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Large Button'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Small Button'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Text Color',
    variant: 'default',
    className: 'text-purple-600 border-purple-600 border-2 bg-white hover:bg-purple-50'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Hover',
    variant: 'outline',
    className: 'hover:!bg-green-200 hover:!text-green-800'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Designers Rock!',
    variant: 'default',
    backgroundColor: '#FFDDC1',
    textColor: '#A0522D'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Green Machine',
    variant: 'outline',
    backgroundColor: '#D1FAE5',
    textColor: '#065F46'
  }
}`,...m.parameters?.docs?.source}}};const R=["Primary","Secondary","Destructive","Outline","Ghost","Link","Large","Small","CustomFontColor","CustomHoverEffect","CustomColorsForDesigners","AnotherCustomColor"];export{m as AnotherCustomColor,u as CustomColorsForDesigners,i as CustomFontColor,c as CustomHoverEffect,a as Destructive,o as Ghost,n as Large,s as Link,t as Outline,e as Primary,r as Secondary,l as Small,R as __namedExportsOrder,L as default};
