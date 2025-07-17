import{B as d,b as p}from"./Button-DUpbUvQx.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CAc0y5bo.js";import"./utils-RPSJ8ZXL.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,h={title:"UI/Button",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"],description:"The visual style variant of the button (e.g., default, destructive, outline).",table:{type:{summary:p?.variants?.variant?Object.keys(p.variants.variant).join(" | "):"string"},defaultValue:{summary:"default"}}},className:{control:"text",description:"Additional Tailwind CSS classes to apply directly to the button.",table:{type:{summary:"string"}}},primary:{control:"boolean",description:"Sets the button to the default (primary) or secondary variant if `variant` is not explicitly set."},size:{control:"select",options:["small","medium","large"]},backgroundColor:{control:"color",description:"Custom background color for the button. Overrides variant color.",table:{type:{summary:"string"}}},textColor:{control:"color",description:"Custom text color for the button. Overrides variant color.",table:{type:{summary:"string"}}}},args:{onClick:g()}},r={args:{variant:"default",label:"Button",primary:!0}},e={args:{variant:"secondary",label:"Button",primary:!1}},a={args:{variant:"destructive",label:"Destructive Button"}},t={args:{variant:"outline",label:"Outline Button"}},o={args:{variant:"ghost",label:"Ghost Button"}},s={args:{variant:"link",label:"Link Button"}},n={args:{size:"large",label:"Large Button"}},l={args:{size:"small",label:"Small Button"}},c={args:{label:"Custom Text Color",variant:"default",className:"text-purple-600 border-purple-600 border-2 bg-white hover:bg-purple-50"}},i={args:{label:"Custom Hover",variant:"outline",className:"hover:!bg-green-200 hover:!text-green-800"}},u={args:{label:"Designers Rock!",variant:"default",backgroundColor:"#FFDDC1",textColor:"#A0522D"}},m={args:{label:"Green Machine",variant:"outline",backgroundColor:"#D1FAE5",textColor:"#065F46"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    label: 'Button',
    primary: true
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Button',
    primary: false
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Text Color',
    variant: 'default',
    className: 'text-purple-600 border-purple-600 border-2 bg-white hover:bg-purple-50'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Hover',
    variant: 'outline',
    className: 'hover:!bg-green-200 hover:!text-green-800'
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const f=["Primary","Secondary","Destructive","Outline","Ghost","Link","Large","Small","CustomFontColor","CustomHoverEffect","CustomColorsForDesigners","AnotherCustomColor"];export{m as AnotherCustomColor,u as CustomColorsForDesigners,c as CustomFontColor,i as CustomHoverEffect,a as Destructive,o as Ghost,n as Large,s as Link,t as Outline,r as Primary,e as Secondary,l as Small,f as __namedExportsOrder,h as default};
