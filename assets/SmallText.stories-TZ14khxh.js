import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as S}from"./utils-CBfrqCZ4.js";const a=({text:t,size:c="sm",weight:u="normal",color:r="muted",lineHeight:p="normal",maxWidth:f="none",align:g="left",fontFamily:x="sans",defaultColor:o,mutedColor:m,accentColor:d,className:y,...v})=>{const h={xs:"text-xs",sm:"text-sm"},b={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},C={default:"text-foreground text-gray-900 dark:text-gray-100",muted:"text-muted-foreground text-gray-600 dark:text-gray-400",accent:"text-primary text-blue-600 dark:text-blue-400"},N={tight:"leading-4",normal:"leading-5",relaxed:"leading-6"},j={none:"",prose:"max-w-prose",sm:"max-w-sm",lg:"max-w-lg"},T={left:"text-left",center:"text-center",right:"text-right"},z={sans:"font-sans",serif:"font-serif",mono:"font-mono",inter:"font-[Inter]",montserrat:"font-[Montserrat]",poppins:"font-[Poppins]",playfair:"font-[Playfair_Display]",dancing:"font-[Dancing_Script]",greatvibes:"font-[Great_Vibes]",pacifico:"font-[Pacifico]",anton:"font-[Anton]",bebas:"font-[Bebas_Neue]",sourcecodepro:"font-[Source_Code_Pro]"};let s;r==="default"&&o?s=o:r==="muted"&&m?s=m:r==="accent"&&d&&(s=d);const w=s?{color:s}:void 0;return e.jsx("small",{className:S(h[c],b[u],C[r],N[p],j[f],T[g],z[x],y),style:w,...v,children:t})};a.__docgenInfo={description:"",methods:[],displayName:"SmallText",props:{text:{required:!0,tsType:{name:"string"},description:"The small text content"},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"}]},description:"Size variant for the small text",defaultValue:{value:"'sm'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"Font weight variant",defaultValue:{value:"'normal'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'muted' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'accent'"}]},description:"Color variant for the small text",defaultValue:{value:"'muted'",computed:!1}},lineHeight:{required:!1,tsType:{name:"union",raw:"'tight' | 'normal' | 'relaxed'",elements:[{name:"literal",value:"'tight'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'relaxed'"}]},description:"Line height variant",defaultValue:{value:"'normal'",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"'none' | 'prose' | 'sm' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'prose'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"Maximum width constraint",defaultValue:{value:"'none'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Text alignment",defaultValue:{value:"'left'",computed:!1}},fontFamily:{required:!1,tsType:{name:"union",raw:"'sans' | 'serif' | 'mono' | 'inter' | 'playfair' | 'montserrat' | 'poppins' | 'dancing' | 'greatvibes' | 'pacifico' | 'anton' | 'bebas' | 'sourcecodepro'",elements:[{name:"literal",value:"'sans'"},{name:"literal",value:"'serif'"},{name:"literal",value:"'mono'"},{name:"literal",value:"'inter'"},{name:"literal",value:"'playfair'"},{name:"literal",value:"'montserrat'"},{name:"literal",value:"'poppins'"},{name:"literal",value:"'dancing'"},{name:"literal",value:"'greatvibes'"},{name:"literal",value:"'pacifico'"},{name:"literal",value:"'anton'"},{name:"literal",value:"'bebas'"},{name:"literal",value:"'sourcecodepro'"}]},description:"Font family",defaultValue:{value:"'sans'",computed:!1}},defaultColor:{required:!1,tsType:{name:"string"},description:"Custom color for default variant (docs only)"},mutedColor:{required:!1,tsType:{name:"string"},description:"Custom color for muted variant (docs only)"},accentColor:{required:!1,tsType:{name:"string"},description:"Custom color for accent variant (docs only)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};const F={title:"Components/SmallText",component:a,parameters:{layout:"centered",docs:{story:{inline:!0,height:"auto"}}},tags:["autodocs"],argTypes:{text:{control:{type:"text"},description:"The small text content.",table:{type:{summary:"string"}}},size:{control:"select",options:["xs","sm"],description:"Size variant for the small text.",table:{type:{summary:"string"},defaultValue:{summary:"sm"}}},weight:{control:"select",options:["normal","medium","semibold","bold"],description:"Font weight variant.",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},color:{control:"select",options:["default","muted","accent"],description:"Color variant for the small text.",table:{type:{summary:"string"},defaultValue:{summary:"muted"}}},lineHeight:{control:"select",options:["tight","normal","relaxed"],description:"Line height variant for readability.",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},maxWidth:{control:"select",options:["none","prose","sm","lg"],description:"Maximum width constraint for readability.",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},align:{control:"select",options:["left","center","right"],description:"Text alignment.",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},fontFamily:{control:"select",options:["sans","serif","mono","inter","playfair","montserrat","poppins","dancing","greatvibes","pacifico","anton","bebas","sourcecodepro"],description:"Font family variant.",table:{type:{summary:"string"},defaultValue:{summary:"sans"}}},defaultColor:{control:{type:"color"},description:"Custom color for default variant. Overrides theme default color.",table:{type:{summary:"string"},defaultValue:{summary:"#000000"}}},mutedColor:{control:{type:"color"},description:"Custom color for muted variant. Overrides theme muted color.",table:{type:{summary:"string"},defaultValue:{summary:"#6b7280"}}},accentColor:{control:{type:"color"},description:"Custom color for accent variant. Overrides theme accent color.",table:{type:{summary:"string"},defaultValue:{summary:"#3b82f6"}}},className:{control:"text",description:"Additional Tailwind CSS classes for custom styling.",table:{type:{summary:"string"}}}},args:{text:"Photography by Eminent Interior Design • Minnetonka Kitchen Remodel • Completed 2024",size:"sm",weight:"normal",color:"muted",lineHeight:"normal",maxWidth:"none",align:"left",fontFamily:"sans",defaultColor:"#000000",mutedColor:"#6b7280",accentColor:"#3b82f6"}},n={args:{text:"Licensed interior designers in Minnesota • Serving Twin Cities metro area since 2010",size:"sm",weight:"normal",color:"muted",lineHeight:"normal",maxWidth:"none",align:"left",fontFamily:"sans"}},i={render:t=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Image Captions"}),e.jsxs("div",{className:"bg-gray-100 p-4 rounded",children:[e.jsx("div",{className:"w-full h-32 bg-gray-300 rounded mb-2 flex items-center justify-center text-gray-600",children:"[Kitchen Image]"}),e.jsx(a,{...t,text:"Contemporary kitchen renovation featuring custom cabinetry and premium quartz countertops"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Project Details"}),e.jsx(a,{...t,color:"default",weight:"medium",text:"Project Timeline: 6-8 weeks • Budget Range: $75,000 - $125,000 • Location: Wayzata, MN"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Fine Print"}),e.jsx(a,{...t,size:"xs",color:"muted",text:"All design consultations require a minimum 2-hour booking. Material costs and permits not included in base pricing. Licensed, bonded, and insured in Minnesota."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Copyright Notice"}),e.jsx(a,{...t,size:"xs",color:"muted",align:"center",text:"© 2024 Eminent Interior Design. All rights reserved. Unauthorized reproduction prohibited."})]})]}),parameters:{layout:"padded",controls:{exclude:["text"]}}},l={render:t=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{...t,size:"xs",text:"Extra Small (12px) - Fine print and legal disclaimers for luxury interior design services"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="xs"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,size:"sm",text:"Small (14px) - Image captions and project details for premium renovation portfolios"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="sm" (default)'})]})]}),parameters:{layout:"padded",controls:{exclude:["text","size"]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Licensed interior designers in Minnesota • Serving Twin Cities metro area since 2010',
    size: 'sm',
    weight: 'normal',
    color: 'muted',
    lineHeight: 'normal',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'sans'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Image Captions</h3>
        <div className="bg-gray-100 p-4 rounded">
          <div className="w-full h-32 bg-gray-300 rounded mb-2 flex items-center justify-center text-gray-600">
            [Kitchen Image]
          </div>
          <SmallText {...args} text="Contemporary kitchen renovation featuring custom cabinetry and premium quartz countertops" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Project Details</h3>
        <SmallText {...args} color="default" weight="medium" text="Project Timeline: 6-8 weeks • Budget Range: $75,000 - $125,000 • Location: Wayzata, MN" />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Fine Print</h3>
        <SmallText {...args} size="xs" color="muted" text="All design consultations require a minimum 2-hour booking. Material costs and permits not included in base pricing. Licensed, bonded, and insured in Minnesota." />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Copyright Notice</h3>
        <SmallText {...args} size="xs" color="muted" align="center" text="© 2024 Eminent Interior Design. All rights reserved. Unauthorized reproduction prohibited." />
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text']
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
      <div>
        <SmallText {...args} size="xs" text="Extra Small (12px) - Fine print and legal disclaimers for luxury interior design services" />
        <p className="text-xs text-muted-foreground mt-1">size="xs"</p>
      </div>
      <div>
        <SmallText {...args} size="sm" text="Small (14px) - Image captions and project details for premium renovation portfolios" />
        <p className="text-xs text-muted-foreground mt-1">size="sm" (default)</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'size']
    }
  }
}`,...l.parameters?.docs?.source}}};const P=["Primary","UseCases","SizeComparison"];export{n as Primary,l as SizeComparison,i as UseCases,P as __namedExportsOrder,F as default};
