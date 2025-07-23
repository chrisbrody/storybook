import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as N}from"./utils-CBfrqCZ4.js";const s=({text:t,size:u="sm",weight:x="medium",color:o="default",background:p="default",fontFamily:f="mono",defaultColor:d,mutedColor:c,accentColor:m,className:h,...g})=>{const b={xs:"text-xs",sm:"text-sm",base:"text-base"},y={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},v={default:"text-foreground text-gray-900 dark:text-gray-100",muted:"text-muted-foreground text-gray-600 dark:text-gray-400",accent:"text-primary text-blue-600 dark:text-blue-400"},C={default:"bg-muted px-[0.3rem] py-[0.2rem] rounded",subtle:"bg-muted/50 px-[0.3rem] py-[0.2rem] rounded",none:""},j={mono:"font-mono",sourcecodepro:"font-[Source_Code_Pro]",sans:"font-sans",serif:"font-serif"};let a;o==="default"&&d?a=d:o==="muted"&&c?a=c:o==="accent"&&m&&(a=m);const k=a?{color:a}:void 0;return e.jsx("code",{className:N("relative",b[u],y[x],v[o],C[p],j[f],h),style:k,...g,children:t})};s.__docgenInfo={description:"",methods:[],displayName:"InlineCode",props:{text:{required:!0,tsType:{name:"string"},description:"The code text content"},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'base'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"}]},description:"Size variant for the code text",defaultValue:{value:"'sm'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"Font weight variant",defaultValue:{value:"'medium'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'muted' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'accent'"}]},description:"Color variant for the code",defaultValue:{value:"'default'",computed:!1}},background:{required:!1,tsType:{name:"union",raw:"'default' | 'subtle' | 'none'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subtle'"},{name:"literal",value:"'none'"}]},description:"Background variant",defaultValue:{value:"'default'",computed:!1}},fontFamily:{required:!1,tsType:{name:"union",raw:"'mono' | 'sourcecodepro' | 'sans' | 'serif'",elements:[{name:"literal",value:"'mono'"},{name:"literal",value:"'sourcecodepro'"},{name:"literal",value:"'sans'"},{name:"literal",value:"'serif'"}]},description:"Font family (typically monospace)",defaultValue:{value:"'mono'",computed:!1}},defaultColor:{required:!1,tsType:{name:"string"},description:"Custom color for default variant (docs only)"},mutedColor:{required:!1,tsType:{name:"string"},description:"Custom color for muted variant (docs only)"},accentColor:{required:!1,tsType:{name:"string"},description:"Custom color for accent variant (docs only)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};const T={title:"Components/InlineCode",component:s,parameters:{layout:"centered",docs:{story:{inline:!0,height:"auto"}}},tags:["autodocs"],argTypes:{text:{control:{type:"text"},description:"The code text content.",table:{type:{summary:"string"}}},size:{control:"select",options:["xs","sm","base"],description:"Size variant for the code text.",table:{type:{summary:"string"},defaultValue:{summary:"sm"}}},weight:{control:"select",options:["normal","medium","semibold","bold"],description:"Font weight variant.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},color:{control:"select",options:["default","muted","accent"],description:"Color variant for the code.",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},background:{control:"select",options:["default","subtle","none"],description:"Background styling for the code.",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},fontFamily:{control:"select",options:["mono","sourcecodepro","sans","serif"],description:"Font family variant (typically monospace).",table:{type:{summary:"string"},defaultValue:{summary:"mono"}}},defaultColor:{control:{type:"color"},description:"Custom color for default variant. Overrides theme default color.",table:{type:{summary:"string"},defaultValue:{summary:"#000000"}}},mutedColor:{control:{type:"color"},description:"Custom color for muted variant. Overrides theme muted color.",table:{type:{summary:"string"},defaultValue:{summary:"#6b7280"}}},accentColor:{control:{type:"color"},description:"Custom color for accent variant. Overrides theme accent color.",table:{type:{summary:"string"},defaultValue:{summary:"#3b82f6"}}},className:{control:"text",description:"Additional Tailwind CSS classes for custom styling.",table:{type:{summary:"string"}}}},args:{text:"#F5F5DC",size:"sm",weight:"medium",color:"default",background:"default",fontFamily:"mono",defaultColor:"#000000",mutedColor:"#6b7280",accentColor:"#3b82f6"}},r={args:{text:'24" x 36"',size:"sm",weight:"medium",color:"default",background:"default",fontFamily:"mono"}},n={render:t=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("p",{children:["The cabinet dimensions are ",e.jsx(s,{...t,background:"default",text:'36" W x 24" D x 84" H'})," for optimal storage."]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'background="default"'})]}),e.jsxs("div",{children:[e.jsxs("p",{children:["We used paint color ",e.jsx(s,{...t,background:"subtle",text:"#F8F6F0",color:"accent"})," for the walls."]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'background="subtle"'})]}),e.jsxs("div",{children:[e.jsxs("p",{children:["The material specification includes ",e.jsx(s,{...t,background:"none",text:"Calacatta Gold Marble"})," for countertops."]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'background="none"'})]})]}),parameters:{layout:"padded",controls:{exclude:["text","background"]}}},l={render:t=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Color Codes"}),e.jsxs("p",{children:["The designer selected ",e.jsx(s,{...t,text:"#2C3E50",color:"accent"})," for the kitchen island, complemented by ",e.jsx(s,{...t,text:"#ECF0F1",color:"accent"})," for the backsplash tiles."]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Measurements"}),e.jsxs("p",{children:["Standard kitchen island dimensions: ",e.jsx(s,{...t,text:'84" L x 42" W x 36" H'}),"with ",e.jsx(s,{...t,text:'12" overhang'})," for seating."]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Material Specifications"}),e.jsxs("p",{children:["We specified ",e.jsx(s,{...t,text:"Quartz - Caesarstone 5131 Cosmopolitan White",background:"subtle"}),"for durability and ",e.jsx(s,{...t,text:"White Oak - Rift Cut",background:"subtle"}),"for the custom cabinetry."]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Model Numbers"}),e.jsxs("p",{children:["The fixtures include ",e.jsx(s,{...t,text:"KWF-36",size:"xs"})," range hood and",e.jsx(s,{...t,text:"DW-2024-SS",size:"xs"})," dishwasher for this luxury renovation."]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Room Codes"}),e.jsxs("p",{children:["Project phases: ",e.jsx(s,{...t,text:"K-01",background:"none"})," kitchen,",e.jsx(s,{...t,text:"MB-01",background:"none"})," master bath, and",e.jsx(s,{...t,text:"LR-01",background:"none"})," living room renovations."]})]})]}),parameters:{layout:"padded",controls:{exclude:["text"]}}},i={render:t=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("p",{children:["Extra Small: The tile size is ",e.jsx(s,{...t,size:"xs",text:'12" x 12"'})," for this application."]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="xs"'})]}),e.jsxs("div",{children:[e.jsxs("p",{children:["Small: Standard cabinet depth is ",e.jsx(s,{...t,size:"sm",text:'24" deep'})," for base units."]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="sm" (default)'})]}),e.jsxs("div",{children:[e.jsxs("p",{children:["Base: The room dimensions are ",e.jsx(s,{...t,size:"base",text:"16ft x 20ft"})," for the main living area."]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="base"'})]})]}),parameters:{layout:"padded",controls:{exclude:["text","size"]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: '24" x 36"',
    size: 'sm',
    weight: 'medium',
    color: 'default',
    background: 'default',
    fontFamily: 'mono'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
      <div>
        <p>The cabinet dimensions are <InlineCode {...args} background="default" text='36" W x 24" D x 84" H' /> for optimal storage.</p>
        <p className="text-xs text-muted-foreground mt-1">background="default"</p>
      </div>
      <div>
        <p>We used paint color <InlineCode {...args} background="subtle" text="#F8F6F0" color="accent" /> for the walls.</p>
        <p className="text-xs text-muted-foreground mt-1">background="subtle"</p>
      </div>
      <div>
        <p>The material specification includes <InlineCode {...args} background="none" text="Calacatta Gold Marble" /> for countertops.</p>
        <p className="text-xs text-muted-foreground mt-1">background="none"</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'background']
    }
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Color Codes</h3>
        <p>
          The designer selected <InlineCode {...args} text="#2C3E50" color="accent" /> for the kitchen island,
          complemented by <InlineCode {...args} text="#ECF0F1" color="accent" /> for the backsplash tiles.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Measurements</h3>
        <p>
          Standard kitchen island dimensions: <InlineCode {...args} text='84" L x 42" W x 36" H' /> 
          with <InlineCode {...args} text='12" overhang' /> for seating.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Material Specifications</h3>
        <p>
          We specified <InlineCode {...args} text="Quartz - Caesarstone 5131 Cosmopolitan White" background="subtle" />
          for durability and <InlineCode {...args} text="White Oak - Rift Cut" background="subtle" /> 
          for the custom cabinetry.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Model Numbers</h3>
        <p>
          The fixtures include <InlineCode {...args} text="KWF-36" size="xs" /> range hood and
          <InlineCode {...args} text="DW-2024-SS" size="xs" /> dishwasher for this luxury renovation.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Room Codes</h3>
        <p>
          Project phases: <InlineCode {...args} text="K-01" background="none" /> kitchen,
          <InlineCode {...args} text="MB-01" background="none" /> master bath, and
          <InlineCode {...args} text="LR-01" background="none" /> living room renovations.
        </p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text']
    }
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
      <div>
        <p>Extra Small: The tile size is <InlineCode {...args} size="xs" text='12" x 12"' /> for this application.</p>
        <p className="text-xs text-muted-foreground mt-1">size="xs"</p>
      </div>
      <div>
        <p>Small: Standard cabinet depth is <InlineCode {...args} size="sm" text='24" deep' /> for base units.</p>
        <p className="text-xs text-muted-foreground mt-1">size="sm" (default)</p>
      </div>
      <div>
        <p>Base: The room dimensions are <InlineCode {...args} size="base" text='16ft x 20ft' /> for the main living area.</p>
        <p className="text-xs text-muted-foreground mt-1">size="base"</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'size']
    }
  }
}`,...i.parameters?.docs?.source}}};const F=["Primary","BackgroundVariants","UseCases","SizeComparison"];export{n as BackgroundVariants,r as Primary,i as SizeComparison,l as UseCases,F as __namedExportsOrder,T as default};
