import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DETciWFE.js";import{S as b}from"./index-_lroX_8H.js";import{c as w}from"./index-CdJFUDDL.js";import{c as T}from"./utils-CBfrqCZ4.js";const k=w("flex items-center justify-center text-sm font-medium w-fit gap-1 [&_svg]:size-3.5 [&_svg]:shrink-0",{variants:{variant:{default:"bg-background border shadow-xs px-2.5 rounded-md h-7",ghost:"bg-transparent text-muted-foreground",white:"text-white"}},defaultVariants:{variant:"ghost"}});function h({className:d,variant:c,asChild:u=!1,children:g,...p}){const m=u?b:"div";return e.jsx(m,{className:T(k({variant:c,className:d})),...p,children:g})}h.__docgenInfo={description:"",methods:[],displayName:"Tagline",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};function f({tagline:d="Header section",heading:c="Short engaging headline",description:u="Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",taglineVariant:g="ghost",alignment:p="center",className:m="",background:y="default"}){const x={default:"bg-background",muted:"bg-muted",accent:"bg-accent"},v={center:"items-center text-center",left:"items-center text-center md:items-start md:text-left"};return e.jsx("section",{className:`${x[y]} section-padding-y ${m}`,"aria-labelledby":"page-heading",children:e.jsx("div",{className:"container-padding-x container mx-auto",children:e.jsx("div",{className:"section-title-gap-xl flex max-w-xl flex-1 flex-col",children:e.jsxs("div",{className:`section-title-gap-xl flex flex-col ${v[p]}`,children:[e.jsx(h,{variant:g,children:d}),e.jsx("h1",{id:"page-heading",className:"heading-xl text-foreground",children:c}),e.jsx("p",{className:"text-muted-foreground text-base lg:text-lg","aria-description":"page description",children:u})]})})})})}f.__docgenInfo={description:"",methods:[],displayName:"HeaderSection",props:{tagline:{required:!1,tsType:{name:"string"},description:"The tagline text displayed above the heading",defaultValue:{value:'"Header section"',computed:!1}},heading:{required:!1,tsType:{name:"string"},description:"The main heading text",defaultValue:{value:'"Short engaging headline"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:"The description text below the heading",defaultValue:{value:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales."',computed:!1}},taglineVariant:{required:!1,tsType:{name:"union",raw:'"default" | "ghost" | "white"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"white"'}]},description:"Tagline variant style",defaultValue:{value:'"ghost"',computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:'"center" | "left"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"left"'}]},description:"Text alignment",defaultValue:{value:'"center"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom CSS classes",defaultValue:{value:'""',computed:!1}},background:{required:!1,tsType:{name:"union",raw:'"default" | "muted" | "accent"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"accent"'}]},description:"Background color variant",defaultValue:{value:'"default"',computed:!1}}}};const q={title:"Slices/Header",component:f,parameters:{layout:"fullscreen",docs:{description:{component:"A flexible header section component perfect for landing pages and content sections. Features customizable tagline, heading, description, and styling options."}}},tags:["autodocs"],argTypes:{tagline:{control:"text",description:"The small text displayed above the main heading"},heading:{control:"text",description:"The main headline text"},description:{control:"text",description:"The descriptive text below the heading"},taglineVariant:{control:{type:"select"},options:["default","ghost","white"],description:"Visual style of the tagline component"},alignment:{control:{type:"select"},options:["center","left"],description:"Text alignment - center always centers, left centers on mobile but left-aligns on desktop"},background:{control:{type:"select"},options:["default","muted","accent"],description:"Background color variant"},className:{control:"text",description:"Additional CSS classes to apply"}},args:{tagline:"Header section",heading:"Short engaging headline",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",taglineVariant:"ghost",alignment:"center",background:"default"}},t={args:{}},a={args:{alignment:"left",tagline:"Welcome to our platform",heading:"Build amazing experiences with our tools",description:"Our comprehensive suite of tools helps you create, deploy, and scale your applications with confidence."}},n={args:{taglineVariant:"default",tagline:"New Feature",heading:"Introducing our latest innovation",description:"Discover how our new feature can transform your workflow and boost productivity."}},r={args:{taglineVariant:"white",background:"accent",tagline:"Premium",heading:"Unlock advanced features",description:"Take your experience to the next level with our premium tier and advanced capabilities."}},i={args:{background:"muted",tagline:"Getting Started",heading:"Your journey begins here",description:"Follow our step-by-step guide to get up and running in minutes."}},o={args:{tagline:"Join thousands of users",heading:"The platform that scales with you",description:"From startup to enterprise, our platform grows with your business needs and adapts to your workflow.",alignment:"center",taglineVariant:"default"}},s={args:{tagline:"Product Overview",heading:"Everything you need in one place",description:"Streamline your operations with our comprehensive suite of integrated tools and features.",alignment:"left",taglineVariant:"ghost"}},l={args:{tagline:"Custom Design",heading:"Tailored to your brand",description:"Customize every aspect of your experience to match your unique brand identity.",className:"border-t-4 border-blue-500",taglineVariant:"default"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    alignment: 'left',
    tagline: 'Welcome to our platform',
    heading: 'Build amazing experiences with our tools',
    description: 'Our comprehensive suite of tools helps you create, deploy, and scale your applications with confidence.'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    taglineVariant: 'default',
    tagline: 'New Feature',
    heading: 'Introducing our latest innovation',
    description: 'Discover how our new feature can transform your workflow and boost productivity.'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    taglineVariant: 'white',
    background: 'accent',
    tagline: 'Premium',
    heading: 'Unlock advanced features',
    description: 'Take your experience to the next level with our premium tier and advanced capabilities.'
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    background: 'muted',
    tagline: 'Getting Started',
    heading: 'Your journey begins here',
    description: 'Follow our step-by-step guide to get up and running in minutes.'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tagline: 'Join thousands of users',
    heading: 'The platform that scales with you',
    description: 'From startup to enterprise, our platform grows with your business needs and adapts to your workflow.',
    alignment: 'center',
    taglineVariant: 'default'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tagline: 'Product Overview',
    heading: 'Everything you need in one place',
    description: 'Streamline your operations with our comprehensive suite of integrated tools and features.',
    alignment: 'left',
    taglineVariant: 'ghost'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tagline: 'Custom Design',
    heading: 'Tailored to your brand',
    description: 'Customize every aspect of your experience to match your unique brand identity.',
    className: 'border-t-4 border-blue-500',
    taglineVariant: 'default'
  }
}`,...l.parameters?.docs?.source}}};const D=["Default","LeftAligned","WithDefaultTagline","WhiteTagline","MutedBackground","Marketing","Product","CustomStyling"];export{l as CustomStyling,t as Default,a as LeftAligned,o as Marketing,i as MutedBackground,s as Product,r as WhiteTagline,n as WithDefaultTagline,D as __namedExportsOrder,q as default};
