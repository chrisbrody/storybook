import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{S as c}from"./index-CHwLKRCS.js";import"./iframe-GmFyfI-B.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";import"./index-BCgtr0Xo.js";import"./index-Cw81SuZ1.js";import"./index-CiPAgFYt.js";import"./index-DmtSfvaN.js";import"./index-Cggi_Ipk.js";import"./index-g7PYI-s1.js";const C={title:"Components/Slider",component:c,parameters:{layout:"fullscreen",docs:{description:{component:"A before/after slider section component for showcasing interior design transformations. Features an interactive slider control below the image to reveal the transformation results."}}},decorators:[(l,{args:e})=>s.jsxs("div",{style:{"--background":e.backgroundColor||"#ffffff","--foreground":e.headerColor||"#000000","--muted-foreground":e.textColor||"#666666",backgroundColor:e.backgroundColor||"#ffffff",minHeight:"100vh",width:"100%",padding:0,margin:0},children:[s.jsx("style",{children:`
            .text-foreground { color: ${e.headerColor||"#000000"} !important; }
            .text-muted-foreground { color: ${e.textColor||"#666666"} !important; }
          `}),s.jsx(l,{})]})],tags:["autodocs"],argTypes:{backgroundColor:{control:{type:"color"},description:"Background color for the story canvas"},headerColor:{control:{type:"color"},description:"Color for the main heading text"},textColor:{control:{type:"color"},description:"Color for tagline and paragraph text"},variant:{control:{type:"select"},options:["default","dark","minimal"],description:"Visual variant of the slider section"},size:{control:{type:"select"},options:["sm","md","lg","xl","full"],description:"Size variant controlling slider width"},tagline:{control:"text",description:"The small text displayed above the main heading"},heading:{control:"text",description:"The main heading text"},description:{control:"text",description:"The descriptive text below the heading"},projectTitle:{control:"text",description:"The project title shown on the image overlay"},className:{control:"text",description:"Additional CSS classes to apply"},beforeImage:{control:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp"},description:"Upload before image (PNG, JPG, JPEG, GIF, WebP)"},afterImage:{control:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp"},description:"Upload after image (PNG, JPG, JPEG, GIF, WebP)"}},args:{backgroundColor:"#ffffff",headerColor:"#000000",textColor:"#666666",variant:"default",size:"lg",tagline:"Transformation Gallery",heading:"Before & After Reveals",description:"Discover the dramatic transformations of our interior design projects. Drag the slider to reveal the stunning before and after results of our work.",projectTitle:"Kitchen Transformation - Minnetonka",beforeImage:void 0,afterImage:void 0}},r={args:{variant:"default",size:"lg"}},o={args:{variant:"dark",backgroundColor:"#111827",headerColor:"#FFFFFF",textColor:"#D1D5DB",tagline:"Project Transformations",heading:"Stunning Before & After Results",description:"Witness the remarkable transformations that showcase our expertise in luxury interior design and space planning."}},t={args:{variant:"minimal",backgroundColor:"#F9FAFB",tagline:"Design Showcase",heading:"Transformation Portfolio",description:"Explore how we transform ordinary spaces into extraordinary environments through thoughtful design and premium materials."}},n={args:{size:"sm",tagline:"Featured Project",heading:"Kitchen Renovation",description:"A detailed look at our award-winning Minnetonka kitchen transformation project.",projectTitle:"Modern Kitchen Design - Minnetonka"}},a={args:{size:"xl",tagline:"Signature Projects",heading:"Complete Home Transformations",description:"Our comprehensive approach to interior design delivers stunning results that exceed client expectations and create lasting value."}},i={args:{size:"full",tagline:"Portfolio Highlight",heading:"Award-Winning Design Excellence",description:"Experience our full-width showcase featuring our most celebrated interior design transformations, demonstrating our commitment to luxury and sophistication."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'lg'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dark',
    backgroundColor: '#111827',
    headerColor: '#FFFFFF',
    textColor: '#D1D5DB',
    tagline: 'Project Transformations',
    heading: 'Stunning Before & After Results',
    description: 'Witness the remarkable transformations that showcase our expertise in luxury interior design and space planning.'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'minimal',
    backgroundColor: '#F9FAFB',
    tagline: 'Design Showcase',
    heading: 'Transformation Portfolio',
    description: 'Explore how we transform ordinary spaces into extraordinary environments through thoughtful design and premium materials.'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    tagline: 'Featured Project',
    heading: 'Kitchen Renovation',
    description: 'A detailed look at our award-winning Minnetonka kitchen transformation project.',
    projectTitle: 'Modern Kitchen Design - Minnetonka'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    tagline: 'Signature Projects',
    heading: 'Complete Home Transformations',
    description: 'Our comprehensive approach to interior design delivers stunning results that exceed client expectations and create lasting value.'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'full',
    tagline: 'Portfolio Highlight',
    heading: 'Award-Winning Design Excellence',
    description: 'Experience our full-width showcase featuring our most celebrated interior design transformations, demonstrating our commitment to luxury and sophistication.'
  }
}`,...i.parameters?.docs?.source}}};const b=["Default","Dark","Minimal","Small","Large","FullWidth"];export{o as Dark,r as Default,i as FullWidth,a as Large,t as Minimal,n as Small,b as __namedExportsOrder,C as default};
