import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{I as g}from"./input-0SH3Ym8o.js";import"./iframe-C4XYm0XF.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";const P={title:"Components/Input",component:g,parameters:{layout:"centered",docs:{description:{component:"A versatile input component built on shadcn/ui foundations with variants for different states. Perfect for contact forms, consultation requests, and client information gathering in luxury interior design applications."}}},render:({borderColor:p,textColor:u,backgroundColor:m,...b})=>{const h=p||u||m?{borderColor:p,textColor:u,backgroundColor:m}:void 0;return y.jsx(g,{...b,customColors:h})},argTypes:{variant:{control:"select",options:["default","warning","danger"],description:"The input variant style"},type:{control:"select",options:["text","email","password","tel","url","search","number"],description:"The input type"},label:{control:"text",description:"Label text displayed above the input"},placeholder:{control:"text",description:"Placeholder text"},description:{control:"text",description:"Helper text displayed below the input"},error:{control:"text",description:"Error message displayed below the input (overrides description)"},disabled:{control:"boolean",description:"Whether the input is disabled"},required:{control:"boolean",description:"Whether the input is required"},borderColor:{control:"color",description:"Custom border color"},textColor:{control:"color",description:"Custom text color"},backgroundColor:{control:"color",description:"Custom background color"},className:{control:"text",description:"Additional CSS classes"}},args:{variant:"default",type:"text",placeholder:"Enter your name",disabled:!1,required:!1}},e={args:{label:"Client Name",placeholder:"Enter your name",description:"Please provide your full name for our consultation records"}},r={args:{variant:"warning",label:"Project Timeline",placeholder:"Expected completion date",description:"Please note: rushed timelines may affect material availability"}},o={args:{variant:"danger",label:"Budget Range",placeholder:"Enter project budget",error:"Budget must be at least $10,000 for interior design projects"}},t={args:{label:"Custom Styled Input",placeholder:"Luxury design consultation",description:"Input with custom brand colors",borderColor:"#8B5A3C",textColor:"#2C1810",backgroundColor:"#FEF7F0"}},a={args:{type:"email",label:"Email Address",placeholder:"your.email@example.com",description:"We'll send project updates and design previews here"}},n={args:{type:"text",label:"Design Vision",placeholder:"Describe your interior design vision",description:"Tell us about your style preferences and project goals"}},s={args:{type:"tel",label:"Phone Number",placeholder:"(555) 123-4567",description:"Preferred number for consultation scheduling"}},i={args:{type:"number",label:"Project Investment",placeholder:"Enter project budget",description:"Budget range helps us tailor our design recommendations"}},l={args:{label:"Full Name",placeholder:"Full name (required)",description:"Required for all consultation appointments",required:!0}},c={args:{label:"Design Studio",placeholder:"Currently unavailable",disabled:!0,value:"Eminent Interior Design Studio",description:"This field is automatically populated"}},d={args:{variant:"danger",label:"Project Location",placeholder:"Enter city and state",value:"Invalid location",error:"Please enter a valid city and state for service area verification"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Client Name',
    placeholder: 'Enter your name',
    description: 'Please provide your full name for our consultation records'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    label: 'Project Timeline',
    placeholder: 'Expected completion date',
    description: 'Please note: rushed timelines may affect material availability'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Budget Range',
    placeholder: 'Enter project budget',
    error: 'Budget must be at least $10,000 for interior design projects'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Styled Input',
    placeholder: 'Luxury design consultation',
    description: 'Input with custom brand colors',
    borderColor: '#8B5A3C',
    textColor: '#2C1810',
    backgroundColor: '#FEF7F0'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'email',
    label: 'Email Address',
    placeholder: 'your.email@example.com',
    description: 'We\\'ll send project updates and design previews here'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text',
    label: 'Design Vision',
    placeholder: 'Describe your interior design vision',
    description: 'Tell us about your style preferences and project goals'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'tel',
    label: 'Phone Number',
    placeholder: '(555) 123-4567',
    description: 'Preferred number for consultation scheduling'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'number',
    label: 'Project Investment',
    placeholder: 'Enter project budget',
    description: 'Budget range helps us tailor our design recommendations'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    placeholder: 'Full name (required)',
    description: 'Required for all consultation appointments',
    required: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Design Studio',
    placeholder: 'Currently unavailable',
    disabled: true,
    value: 'Eminent Interior Design Studio',
    description: 'This field is automatically populated'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Project Location',
    placeholder: 'Enter city and state',
    value: 'Invalid location',
    error: 'Please enter a valid city and state for service area verification'
  }
}`,...d.parameters?.docs?.source}}};const j=["Default","Warning","Danger","WithCustomColors","Email","ConsultationRequest","Phone","ProjectBudget","Required","Disabled","WithError"];export{n as ConsultationRequest,o as Danger,e as Default,c as Disabled,a as Email,s as Phone,i as ProjectBudget,l as Required,r as Warning,t as WithCustomColors,d as WithError,j as __namedExportsOrder,P as default};
