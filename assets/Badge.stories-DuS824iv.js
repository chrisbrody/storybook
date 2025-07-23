import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as j}from"./utils-CBfrqCZ4.js";const t=({text:a,size:m="base",variant:c="default",weight:x="medium",fontFamily:u="sans",accentColor:d,className:g,...v})=>{const p={sm:"text-xs px-2 py-0.5",base:"text-sm px-2.5 py-0.5",lg:"text-base px-3 py-1"},f={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},y={default:"bg-primary text-primary-foreground hover:bg-primary/80 bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",outline:"text-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground border-gray-200 bg-white text-gray-900 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100 dark:hover:bg-gray-900",accent:"bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",success:"bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600",warning:"bg-yellow-600 text-white hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-600",error:"bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"},b={sans:"font-sans",serif:"font-serif",mono:"font-mono",inter:"font-[Inter]",montserrat:"font-[Montserrat]",poppins:"font-[Poppins]",playfair:"font-[Playfair_Display]",dancing:"font-[Dancing_Script]",greatvibes:"font-[Great_Vibes]",pacifico:"font-[Pacifico]",anton:"font-[Anton]",bebas:"font-[Bebas_Neue]",sourcecodepro:"font-[Source_Code_Pro]"},h=c==="accent"&&d?{backgroundColor:d,color:"white"}:void 0;return e.jsx("span",{className:j("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",p[m],f[x],y[c],b[u],g),style:h,...v,children:a})};t.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{text:{required:!0,tsType:{name:"string"},description:"The badge text content"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'base' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"}]},description:"Size variant for the badge",defaultValue:{value:"'base'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'secondary' | 'outline' | 'accent' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Style variant for the badge",defaultValue:{value:"'default'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"Font weight variant",defaultValue:{value:"'medium'",computed:!1}},fontFamily:{required:!1,tsType:{name:"union",raw:"'sans' | 'serif' | 'mono' | 'inter' | 'playfair' | 'montserrat' | 'poppins' | 'dancing' | 'greatvibes' | 'pacifico' | 'anton' | 'bebas' | 'sourcecodepro'",elements:[{name:"literal",value:"'sans'"},{name:"literal",value:"'serif'"},{name:"literal",value:"'mono'"},{name:"literal",value:"'inter'"},{name:"literal",value:"'playfair'"},{name:"literal",value:"'montserrat'"},{name:"literal",value:"'poppins'"},{name:"literal",value:"'dancing'"},{name:"literal",value:"'greatvibes'"},{name:"literal",value:"'pacifico'"},{name:"literal",value:"'anton'"},{name:"literal",value:"'bebas'"},{name:"literal",value:"'sourcecodepro'"}]},description:"Font family",defaultValue:{value:"'sans'",computed:!1}},accentColor:{required:!1,tsType:{name:"string"},description:"Custom color for accent variant (docs only)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};const B={title:"Components/Badge",component:t,parameters:{layout:"centered",docs:{story:{inline:!0,height:"auto"}}},tags:["autodocs"],argTypes:{text:{control:{type:"text"},description:"The badge text content.",table:{type:{summary:"string"}}},size:{control:"select",options:["sm","base","lg"],description:"Size variant for the badge.",table:{type:{summary:"string"},defaultValue:{summary:"base"}}},variant:{control:"select",options:["default","secondary","outline","accent","success","warning","error"],description:"Style variant for the badge.",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},weight:{control:"select",options:["normal","medium","semibold","bold"],description:"Font weight variant.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},fontFamily:{control:"select",options:["sans","serif","mono","inter","playfair","montserrat","poppins","dancing","greatvibes","pacifico","anton","bebas","sourcecodepro"],description:"Font family variant.",table:{type:{summary:"string"},defaultValue:{summary:"sans"}}},accentColor:{control:{type:"color"},description:"Custom color for accent variant.",table:{type:{summary:"string"},defaultValue:{summary:"#3b82f6"}}},className:{control:"text",description:"Additional Tailwind CSS classes for custom styling.",table:{type:{summary:"string"}}}},args:{text:"Kitchen Remodel",size:"base",variant:"default",weight:"medium",fontFamily:"sans",accentColor:"#3b82f6"}},s={args:{text:"Luxury Design",size:"base",variant:"default",weight:"medium",fontFamily:"sans"}},r={render:a=>e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(t,{...a,variant:"default",text:"Default"}),e.jsx(t,{...a,variant:"secondary",text:"Secondary"}),e.jsx(t,{...a,variant:"outline",text:"Outline"}),e.jsx(t,{...a,variant:"accent",text:"Accent"}),e.jsx(t,{...a,variant:"success",text:"Success"}),e.jsx(t,{...a,variant:"warning",text:"Warning"}),e.jsx(t,{...a,variant:"error",text:"Error"})]}),parameters:{layout:"padded",controls:{exclude:["text","variant"]}}},n={render:a=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(t,{...a,size:"sm",text:"Small Badge"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="sm"'})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(t,{...a,size:"base",text:"Base Badge"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="base" (default)'})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(t,{...a,size:"lg",text:"Large Badge"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="lg"'})]})]}),parameters:{layout:"padded",controls:{exclude:["text","size"]}}},i={render:a=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Project Types"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(t,{...a,variant:"accent",text:"Kitchen Remodel"}),e.jsx(t,{...a,variant:"accent",text:"Bathroom Renovation"}),e.jsx(t,{...a,variant:"accent",text:"Living Room"}),e.jsx(t,{...a,variant:"accent",text:"Custom Millwork"}),e.jsx(t,{...a,variant:"accent",text:"Whole Home"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Project Status"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(t,{...a,variant:"warning",text:"In Planning"}),e.jsx(t,{...a,variant:"default",text:"In Progress"}),e.jsx(t,{...a,variant:"success",text:"Completed"}),e.jsx(t,{...a,variant:"secondary",text:"On Hold"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Service Areas"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(t,{...a,variant:"outline",text:"Minneapolis",size:"sm"}),e.jsx(t,{...a,variant:"outline",text:"St. Paul",size:"sm"}),e.jsx(t,{...a,variant:"outline",text:"Minnetonka",size:"sm"}),e.jsx(t,{...a,variant:"outline",text:"Wayzata",size:"sm"}),e.jsx(t,{...a,variant:"outline",text:"Eden Prairie",size:"sm"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Awards & Recognition"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(t,{...a,variant:"success",text:"Best of Houzz 2024",size:"sm",weight:"semibold"}),e.jsx(t,{...a,variant:"success",text:"ASID Award Winner",size:"sm",weight:"semibold"}),e.jsx(t,{...a,variant:"success",text:"Featured in AD",size:"sm",weight:"semibold"})]})]})]}),parameters:{layout:"padded",controls:{exclude:["text"]}}},l={render:a=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Custom Accent Colors"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(t,{...a,variant:"accent",accentColor:"#8B5CF6",text:"Purple Brand"}),e.jsx(t,{...a,variant:"accent",accentColor:"#EF4444",text:"Red Alert"}),e.jsx(t,{...a,variant:"accent",accentColor:"#10B981",text:"Green Success"}),e.jsx(t,{...a,variant:"accent",accentColor:"#F59E0B",text:"Gold Premium"}),e.jsx(t,{...a,variant:"accent",accentColor:"#6366F1",text:"Indigo Luxury"})]})]})}),parameters:{layout:"padded",controls:{include:["accentColor"]}}},o={render:a=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Portfolio Card"}),e.jsxs("div",{className:"border rounded-lg p-4 space-y-3",children:[e.jsx("div",{className:"w-full h-32 bg-gray-200 rounded"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"font-semibold",children:"Minnetonka Kitchen Transformation"}),e.jsx(t,{...a,variant:"success",text:"Completed",size:"sm"})]}),e.jsxs("div",{className:"flex flex-wrap gap-1",children:[e.jsx(t,{...a,variant:"outline",text:"Kitchen",size:"sm"}),e.jsx(t,{...a,variant:"outline",text:"Custom Cabinetry",size:"sm"}),e.jsx(t,{...a,variant:"outline",text:"Quartz Counters",size:"sm"})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Service List"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"Complete Kitchen Renovation"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{...a,variant:"accent",text:"Popular",size:"sm"}),e.jsx(t,{...a,variant:"secondary",text:"6-8 weeks",size:"sm"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"Luxury Bathroom Design"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{...a,variant:"warning",text:"Limited Slots",size:"sm"}),e.jsx(t,{...a,variant:"secondary",text:"4-6 weeks",size:"sm"})]})]})]})]})]}),parameters:{layout:"padded",controls:{exclude:["text"]}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Luxury Design',
    size: 'base',
    variant: 'default',
    weight: 'medium',
    fontFamily: 'sans'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-3">
      <Badge {...args} variant="default" text="Default" />
      <Badge {...args} variant="secondary" text="Secondary" />
      <Badge {...args} variant="outline" text="Outline" />
      <Badge {...args} variant="accent" text="Accent" />
      <Badge {...args} variant="success" text="Success" />
      <Badge {...args} variant="warning" text="Warning" />
      <Badge {...args} variant="error" text="Error" />
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'variant']
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-4">
      <div className="text-center">
        <Badge {...args} size="sm" text="Small Badge" />
        <p className="text-xs text-muted-foreground mt-1">size="sm"</p>
      </div>
      <div className="text-center">
        <Badge {...args} size="base" text="Base Badge" />
        <p className="text-xs text-muted-foreground mt-1">size="base" (default)</p>
      </div>
      <div className="text-center">
        <Badge {...args} size="lg" text="Large Badge" />
        <p className="text-xs text-muted-foreground mt-1">size="lg"</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'size']
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Project Types</h3>
        <div className="flex flex-wrap gap-2">
          <Badge {...args} variant="accent" text="Kitchen Remodel" />
          <Badge {...args} variant="accent" text="Bathroom Renovation" />
          <Badge {...args} variant="accent" text="Living Room" />
          <Badge {...args} variant="accent" text="Custom Millwork" />
          <Badge {...args} variant="accent" text="Whole Home" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Project Status</h3>
        <div className="flex flex-wrap gap-2">
          <Badge {...args} variant="warning" text="In Planning" />
          <Badge {...args} variant="default" text="In Progress" />
          <Badge {...args} variant="success" text="Completed" />
          <Badge {...args} variant="secondary" text="On Hold" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Service Areas</h3>
        <div className="flex flex-wrap gap-2">
          <Badge {...args} variant="outline" text="Minneapolis" size="sm" />
          <Badge {...args} variant="outline" text="St. Paul" size="sm" />
          <Badge {...args} variant="outline" text="Minnetonka" size="sm" />
          <Badge {...args} variant="outline" text="Wayzata" size="sm" />
          <Badge {...args} variant="outline" text="Eden Prairie" size="sm" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Awards & Recognition</h3>
        <div className="flex flex-wrap gap-2">
          <Badge {...args} variant="success" text="Best of Houzz 2024" size="sm" weight="semibold" />
          <Badge {...args} variant="success" text="ASID Award Winner" size="sm" weight="semibold" />
          <Badge {...args} variant="success" text="Featured in AD" size="sm" weight="semibold" />
        </div>
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
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Custom Accent Colors</h3>
        <div className="flex flex-wrap gap-3">
          <Badge {...args} variant="accent" accentColor="#8B5CF6" text="Purple Brand" />
          <Badge {...args} variant="accent" accentColor="#EF4444" text="Red Alert" />
          <Badge {...args} variant="accent" accentColor="#10B981" text="Green Success" />
          <Badge {...args} variant="accent" accentColor="#F59E0B" text="Gold Premium" />
          <Badge {...args} variant="accent" accentColor="#6366F1" text="Indigo Luxury" />
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      include: ['accentColor']
    }
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Portfolio Card</h3>
        <div className="border rounded-lg p-4 space-y-3">
          <div className="w-full h-32 bg-gray-200 rounded"></div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Minnetonka Kitchen Transformation</h4>
              <Badge {...args} variant="success" text="Completed" size="sm" />
            </div>
            <div className="flex flex-wrap gap-1">
              <Badge {...args} variant="outline" text="Kitchen" size="sm" />
              <Badge {...args} variant="outline" text="Custom Cabinetry" size="sm" />
              <Badge {...args} variant="outline" text="Quartz Counters" size="sm" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Service List</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Complete Kitchen Renovation</span>
            <div className="flex gap-2">
              <Badge {...args} variant="accent" text="Popular" size="sm" />
              <Badge {...args} variant="secondary" text="6-8 weeks" size="sm" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>Luxury Bathroom Design</span>
            <div className="flex gap-2">
              <Badge {...args} variant="warning" text="Limited Slots" size="sm" />
              <Badge {...args} variant="secondary" text="4-6 weeks" size="sm" />
            </div>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text']
    }
  }
}`,...o.parameters?.docs?.source}}};const z=["Primary","VariantShowcase","SizeComparison","ProjectCategories","CustomColors","InContext"];export{l as CustomColors,o as InContext,s as Primary,i as ProjectCategories,n as SizeComparison,r as VariantShowcase,z as __namedExportsOrder,B as default};
