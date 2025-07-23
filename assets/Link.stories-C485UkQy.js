import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as V}from"./utils-CBfrqCZ4.js";const a=({text:t,href:p="#",size:f="base",weight:v="normal",color:s="accent",underline:y="hover",fontFamily:h="sans",external:c=!1,defaultColor:m,mutedColor:u,accentColor:x,className:g,onClick:b,...k})=>{const j={xs:"text-xs",sm:"text-sm",base:"text-base",lg:"text-lg",xl:"text-xl"},N={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},w={default:"text-foreground hover:text-foreground/80 text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300",muted:"text-muted-foreground hover:text-foreground text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100",accent:"text-primary hover:text-primary/80 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"},C={none:"no-underline",hover:"no-underline hover:underline",always:"underline"},L={sans:"font-sans",serif:"font-serif",mono:"font-mono",inter:"font-[Inter]",montserrat:"font-[Montserrat]",poppins:"font-[Poppins]",playfair:"font-[Playfair_Display]",dancing:"font-[Dancing_Script]",greatvibes:"font-[Great_Vibes]",pacifico:"font-[Pacifico]",anton:"font-[Anton]",bebas:"font-[Bebas_Neue]",sourcecodepro:"font-[Source_Code_Pro]"};let r;s==="default"&&m?r=m:s==="muted"&&u?r=u:s==="accent"&&x&&(r=x);const S=r?{color:r}:void 0,z=c?{target:"_blank",rel:"noopener noreferrer"}:{};return e.jsxs("a",{href:p,className:V("transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",j[f],N[v],w[s],C[y],L[h],g),style:S,onClick:b,...z,...k,children:[t,c&&e.jsx("span",{className:"ml-1 inline-block text-xs",children:"↗"})]})};a.__docgenInfo={description:"",methods:[],displayName:"Link",props:{text:{required:!0,tsType:{name:"string"},description:"The link text content"},href:{required:!1,tsType:{name:"string"},description:"The URL to link to",defaultValue:{value:"'#'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'base' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size variant for the link text",defaultValue:{value:"'base'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"Font weight variant",defaultValue:{value:"'normal'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'muted' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'accent'"}]},description:"Color variant for the link",defaultValue:{value:"'accent'",computed:!1}},underline:{required:!1,tsType:{name:"union",raw:"'none' | 'hover' | 'always'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'always'"}]},description:"Underline style",defaultValue:{value:"'hover'",computed:!1}},fontFamily:{required:!1,tsType:{name:"union",raw:"'sans' | 'serif' | 'mono' | 'inter' | 'playfair' | 'montserrat' | 'poppins' | 'dancing' | 'greatvibes' | 'pacifico' | 'anton' | 'bebas' | 'sourcecodepro'",elements:[{name:"literal",value:"'sans'"},{name:"literal",value:"'serif'"},{name:"literal",value:"'mono'"},{name:"literal",value:"'inter'"},{name:"literal",value:"'playfair'"},{name:"literal",value:"'montserrat'"},{name:"literal",value:"'poppins'"},{name:"literal",value:"'dancing'"},{name:"literal",value:"'greatvibes'"},{name:"literal",value:"'pacifico'"},{name:"literal",value:"'anton'"},{name:"literal",value:"'bebas'"},{name:"literal",value:"'sourcecodepro'"}]},description:"Font family",defaultValue:{value:"'sans'",computed:!1}},external:{required:!1,tsType:{name:"boolean"},description:"External link behavior",defaultValue:{value:"false",computed:!1}},defaultColor:{required:!1,tsType:{name:"string"},description:"Custom color for default variant (docs only)"},mutedColor:{required:!1,tsType:{name:"string"},description:"Custom color for muted variant (docs only)"},accentColor:{required:!1,tsType:{name:"string"},description:"Custom color for accent variant (docs only)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for demo purposes"}}};const U={title:"Components/Link",component:a,parameters:{layout:"centered",docs:{story:{inline:!0,height:"auto"}}},tags:["autodocs"],argTypes:{text:{control:{type:"text"},description:"The link text content.",table:{type:{summary:"string"}}},href:{control:{type:"text"},description:"The URL to link to.",table:{type:{summary:"string"},defaultValue:{summary:"#"}}},size:{control:"select",options:["xs","sm","base","lg","xl"],description:"Size variant for the link text.",table:{type:{summary:"string"},defaultValue:{summary:"base"}}},weight:{control:"select",options:["normal","medium","semibold","bold"],description:"Font weight variant.",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},color:{control:"select",options:["default","muted","accent"],description:"Color variant for the link.",table:{type:{summary:"string"},defaultValue:{summary:"accent"}}},underline:{control:"select",options:["none","hover","always"],description:"Underline style for the link.",table:{type:{summary:"string"},defaultValue:{summary:"hover"}}},fontFamily:{control:"select",options:["sans","serif","mono","inter","playfair","montserrat","poppins","dancing","greatvibes","pacifico","anton","bebas","sourcecodepro"],description:"Font family variant.",table:{type:{summary:"string"},defaultValue:{summary:"sans"}}},external:{control:"boolean",description:"Whether the link opens in a new tab/window.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultColor:{control:{type:"color"},description:"Custom color for default variant. Overrides theme default color.",table:{type:{summary:"string"},defaultValue:{summary:"#000000"}}},mutedColor:{control:{type:"color"},description:"Custom color for muted variant. Overrides theme muted color.",table:{type:{summary:"string"},defaultValue:{summary:"#6b7280"}}},accentColor:{control:{type:"color"},description:"Custom color for accent variant. Overrides theme accent color.",table:{type:{summary:"string"},defaultValue:{summary:"#3b82f6"}}},className:{control:"text",description:"Additional Tailwind CSS classes for custom styling.",table:{type:{summary:"string"}}},onClick:{action:"clicked",description:"Click handler for demo purposes."}},args:{text:"View Our Portfolio",href:"#",size:"base",weight:"normal",color:"accent",underline:"hover",fontFamily:"sans",external:!1,defaultColor:"#000000",mutedColor:"#6b7280",accentColor:"#3b82f6"}},n={args:{text:"Schedule a Design Consultation",href:"#",size:"base",weight:"normal",color:"accent",underline:"hover",fontFamily:"sans",external:!1}},o={render:t=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{...t,underline:"none",text:"No Underline - Clean minimal link style for navigation"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'underline="none"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,underline:"hover",text:"Hover Underline - Appears on hover for subtle interaction"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'underline="hover" (default)'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,underline:"always",text:"Always Underlined - Traditional link styling for accessibility"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'underline="always"'})]})]}),parameters:{layout:"padded",controls:{exclude:["text","underline"]}}},l={render:t=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{...t,color:"default",text:"Default Color - Standard text color with hover effects"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'color="default"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,color:"muted",text:"Muted Color - Subtle links that blend with secondary content"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'color="muted"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,color:"accent",text:"Accent Color - Primary brand color for important call-to-action links"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'color="accent" (default)'})]})]}),parameters:{layout:"padded",controls:{exclude:["text","color"]}}},i={render:t=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{...t,external:!1,text:"Internal Link - Stays within the same website"}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:["external=",!1," (default)"]})]}),e.jsxs("div",{children:[e.jsx(a,{...t,external:!0,href:"https://example.com",text:"External Link - Opens in new tab with security attributes"}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:["external=",!0]})]})]}),parameters:{layout:"padded",controls:{exclude:["text","external","href"]}}},d={render:t=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Navigation Links"}),e.jsxs("div",{className:"space-x-6",children:[e.jsx(a,{...t,text:"Our Services",color:"default",underline:"none"}),e.jsx(a,{...t,text:"Portfolio",color:"default",underline:"none"}),e.jsx(a,{...t,text:"About Us",color:"default",underline:"none"}),e.jsx(a,{...t,text:"Contact",color:"accent",underline:"none",weight:"medium"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"In-Content Links"}),e.jsxs("p",{className:"text-base",children:["Our award-winning ",e.jsx(a,{...t,text:"kitchen renovations",size:"base"}),"have been featured in ",e.jsx(a,{...t,text:"Architectural Digest",external:!0,size:"base"}),"and ",e.jsx(a,{...t,text:"Better Homes & Gardens",external:!0,size:"base"}),".",e.jsx(a,{...t,text:"Schedule your consultation",color:"accent",weight:"semibold",size:"base"}),"to get started."]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Footer Links"}),e.jsxs("div",{className:"space-x-4 text-sm",children:[e.jsx(a,{...t,text:"Privacy Policy",size:"sm",color:"muted"}),e.jsx(a,{...t,text:"Terms of Service",size:"sm",color:"muted"}),e.jsx(a,{...t,text:"Licensing Info",size:"sm",color:"muted"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Call-to-Action Links"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{...t,text:"View Our Complete Portfolio →",size:"lg",weight:"semibold"}),e.jsx("br",{}),e.jsx(a,{...t,text:"Book Free Design Consultation",size:"base",weight:"medium"})]})]})]}),parameters:{layout:"padded",controls:{exclude:["text"]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Schedule a Design Consultation',
    href: '#',
    size: 'base',
    weight: 'normal',
    color: 'accent',
    underline: 'hover',
    fontFamily: 'sans',
    external: false
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
      <div>
        <Link {...args} underline="none" text="No Underline - Clean minimal link style for navigation" />
        <p className="text-xs text-muted-foreground mt-1">underline="none"</p>
      </div>
      <div>
        <Link {...args} underline="hover" text="Hover Underline - Appears on hover for subtle interaction" />
        <p className="text-xs text-muted-foreground mt-1">underline="hover" (default)</p>
      </div>
      <div>
        <Link {...args} underline="always" text="Always Underlined - Traditional link styling for accessibility" />
        <p className="text-xs text-muted-foreground mt-1">underline="always"</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'underline']
    }
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
      <div>
        <Link {...args} color="default" text="Default Color - Standard text color with hover effects" />
        <p className="text-xs text-muted-foreground mt-1">color="default"</p>
      </div>
      <div>
        <Link {...args} color="muted" text="Muted Color - Subtle links that blend with secondary content" />
        <p className="text-xs text-muted-foreground mt-1">color="muted"</p>
      </div>
      <div>
        <Link {...args} color="accent" text="Accent Color - Primary brand color for important call-to-action links" />
        <p className="text-xs text-muted-foreground mt-1">color="accent" (default)</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'color']
    }
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
      <div>
        <Link {...args} external={false} text="Internal Link - Stays within the same website" />
        <p className="text-xs text-muted-foreground mt-1">external={false} (default)</p>
      </div>
      <div>
        <Link {...args} external={true} href="https://example.com" text="External Link - Opens in new tab with security attributes" />
        <p className="text-xs text-muted-foreground mt-1">external={true}</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'external', 'href']
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Navigation Links</h3>
        <div className="space-x-6">
          <Link {...args} text="Our Services" color="default" underline="none" />
          <Link {...args} text="Portfolio" color="default" underline="none" />
          <Link {...args} text="About Us" color="default" underline="none" />
          <Link {...args} text="Contact" color="accent" underline="none" weight="medium" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">In-Content Links</h3>
        <p className="text-base">
          Our award-winning <Link {...args} text="kitchen renovations" size="base" /> 
          have been featured in <Link {...args} text="Architectural Digest" external={true} size="base" />
          and <Link {...args} text="Better Homes & Gardens" external={true} size="base" />.
          <Link {...args} text="Schedule your consultation" color="accent" weight="semibold" size="base" />
          to get started.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Footer Links</h3>
        <div className="space-x-4 text-sm">
          <Link {...args} text="Privacy Policy" size="sm" color="muted" />
          <Link {...args} text="Terms of Service" size="sm" color="muted" />
          <Link {...args} text="Licensing Info" size="sm" color="muted" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Call-to-Action Links</h3>
        <div className="space-y-2">
          <Link {...args} text="View Our Complete Portfolio →" size="lg" weight="semibold" />
          <br />
          <Link {...args} text="Book Free Design Consultation" size="base" weight="medium" />
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text']
    }
  }
}`,...d.parameters?.docs?.source}}};const A=["Primary","UnderlineVariants","ColorVariants","ExternalLinks","UseCases"];export{l as ColorVariants,i as ExternalLinks,n as Primary,o as UnderlineVariants,d as UseCases,A as __namedExportsOrder,U as default};
