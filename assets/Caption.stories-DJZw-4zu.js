import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as V}from"./utils-CBfrqCZ4.js";const a=({text:t,size:g="sm",weight:f="normal",color:s="muted",lineHeight:x="normal",maxWidth:p="none",align:h="left",fontFamily:y="sans",italic:v=!1,defaultColor:c,mutedColor:m,accentColor:u,className:w,...j})=>{const b={xs:"text-xs",sm:"text-sm"},N={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},C={default:"text-foreground text-gray-900 dark:text-gray-100",muted:"text-muted-foreground text-gray-600 dark:text-gray-400",accent:"text-primary text-blue-600 dark:text-blue-400"},z={tight:"leading-4",normal:"leading-5",relaxed:"leading-6"},S={none:"",prose:"max-w-prose",sm:"max-w-sm",lg:"max-w-lg"},k={left:"text-left",center:"text-center",right:"text-right"},T={sans:"font-sans",serif:"font-serif",mono:"font-mono",inter:"font-[Inter]",montserrat:"font-[Montserrat]",poppins:"font-[Poppins]",playfair:"font-[Playfair_Display]",dancing:"font-[Dancing_Script]",greatvibes:"font-[Great_Vibes]",pacifico:"font-[Pacifico]",anton:"font-[Anton]",bebas:"font-[Bebas_Neue]",sourcecodepro:"font-[Source_Code_Pro]"};let r;s==="default"&&c?r=c:s==="muted"&&m?r=m:s==="accent"&&u&&(r=u);const I=r?{color:r}:void 0;return e.jsx("figcaption",{className:V("mt-2",b[g],N[f],C[s],z[x],S[p],k[h],T[y],v&&"italic",w),style:I,...j,children:t})};a.__docgenInfo={description:"",methods:[],displayName:"Caption",props:{text:{required:!0,tsType:{name:"string"},description:"The caption text content"},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"}]},description:"Size variant for the caption text",defaultValue:{value:"'sm'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"Font weight variant",defaultValue:{value:"'normal'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'muted' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'accent'"}]},description:"Color variant for the caption text",defaultValue:{value:"'muted'",computed:!1}},lineHeight:{required:!1,tsType:{name:"union",raw:"'tight' | 'normal' | 'relaxed'",elements:[{name:"literal",value:"'tight'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'relaxed'"}]},description:"Line height variant",defaultValue:{value:"'normal'",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"'none' | 'prose' | 'sm' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'prose'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"Maximum width constraint",defaultValue:{value:"'none'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Text alignment",defaultValue:{value:"'left'",computed:!1}},fontFamily:{required:!1,tsType:{name:"union",raw:"'sans' | 'serif' | 'mono' | 'inter' | 'playfair' | 'montserrat' | 'poppins' | 'dancing' | 'greatvibes' | 'pacifico' | 'anton' | 'bebas' | 'sourcecodepro'",elements:[{name:"literal",value:"'sans'"},{name:"literal",value:"'serif'"},{name:"literal",value:"'mono'"},{name:"literal",value:"'inter'"},{name:"literal",value:"'playfair'"},{name:"literal",value:"'montserrat'"},{name:"literal",value:"'poppins'"},{name:"literal",value:"'dancing'"},{name:"literal",value:"'greatvibes'"},{name:"literal",value:"'pacifico'"},{name:"literal",value:"'anton'"},{name:"literal",value:"'bebas'"},{name:"literal",value:"'sourcecodepro'"}]},description:"Font family",defaultValue:{value:"'sans'",computed:!1}},italic:{required:!1,tsType:{name:"boolean"},description:"Font style",defaultValue:{value:"false",computed:!1}},defaultColor:{required:!1,tsType:{name:"string"},description:"Custom color for default variant (docs only)"},mutedColor:{required:!1,tsType:{name:"string"},description:"Custom color for muted variant (docs only)"},accentColor:{required:!1,tsType:{name:"string"},description:"Custom color for accent variant (docs only)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};const A={title:"Components/Caption",component:a,parameters:{layout:"centered",docs:{story:{inline:!0,height:"auto"}}},tags:["autodocs"],argTypes:{text:{control:{type:"text"},description:"The caption text content.",table:{type:{summary:"string"}}},size:{control:"select",options:["xs","sm"],description:"Size variant for the caption text.",table:{type:{summary:"string"},defaultValue:{summary:"sm"}}},weight:{control:"select",options:["normal","medium","semibold","bold"],description:"Font weight variant.",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},color:{control:"select",options:["default","muted","accent"],description:"Color variant for the caption text.",table:{type:{summary:"string"},defaultValue:{summary:"muted"}}},lineHeight:{control:"select",options:["tight","normal","relaxed"],description:"Line height variant for readability.",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},maxWidth:{control:"select",options:["none","prose","sm","lg"],description:"Maximum width constraint for readability.",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},align:{control:"select",options:["left","center","right"],description:"Text alignment.",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},fontFamily:{control:"select",options:["sans","serif","mono","inter","playfair","montserrat","poppins","dancing","greatvibes","pacifico","anton","bebas","sourcecodepro"],description:"Font family variant.",table:{type:{summary:"string"},defaultValue:{summary:"sans"}}},italic:{control:"boolean",description:"Whether the caption text should be italicized.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultColor:{control:{type:"color"},description:"Custom color for default variant. Overrides theme default color.",table:{type:{summary:"string"},defaultValue:{summary:"#000000"}}},mutedColor:{control:{type:"color"},description:"Custom color for muted variant. Overrides theme muted color.",table:{type:{summary:"string"},defaultValue:{summary:"#6b7280"}}},accentColor:{control:{type:"color"},description:"Custom color for accent variant. Overrides theme accent color.",table:{type:{summary:"string"},defaultValue:{summary:"#3b82f6"}}},className:{control:"text",description:"Additional Tailwind CSS classes for custom styling.",table:{type:{summary:"string"}}}},args:{text:"Contemporary kitchen renovation featuring custom cabinetry and premium quartz countertops - Minnetonka Project, 2024",size:"sm",weight:"normal",color:"muted",lineHeight:"normal",maxWidth:"none",align:"left",fontFamily:"sans",italic:!1,defaultColor:"#000000",mutedColor:"#6b7280",accentColor:"#3b82f6"}},i={args:{text:"Award-winning luxury bathroom design with spa-inspired elements and custom marble vanity",size:"sm",weight:"normal",color:"muted",lineHeight:"normal",maxWidth:"none",align:"left",fontFamily:"sans",italic:!1}},l={render:t=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Single Image Caption"}),e.jsxs("figure",{className:"max-w-md",children:[e.jsx("div",{className:"w-full h-48 bg-gray-200 rounded flex items-center justify-center text-gray-500",children:"[Kitchen Image]"}),e.jsx(a,{...t,text:"Modern kitchen featuring waterfall quartz countertops and custom white oak cabinetry"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Center Aligned Caption"}),e.jsxs("figure",{className:"max-w-md",children:[e.jsx("div",{className:"w-full h-48 bg-gray-200 rounded flex items-center justify-center text-gray-500",children:"[Bathroom Image]"}),e.jsx(a,{...t,align:"center",italic:!0,text:"Luxury master bathroom with freestanding soaking tub and marble tile surround"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Gallery Caption"}),e.jsxs("figure",{className:"max-w-lg",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{className:"h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm",children:"[Before]"}),e.jsx("div",{className:"h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm",children:"[After]"})]}),e.jsx(a,{...t,align:"center",weight:"medium",text:"Before and after: Complete transformation of 1980s kitchen into contemporary culinary workspace"})]})]})]}),parameters:{layout:"padded",controls:{exclude:["text","align","italic","weight"]}}},n={render:t=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("figure",{className:"max-w-sm",children:[e.jsx("div",{className:"w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500",children:"[Project Image]"}),e.jsx(a,{...t,color:"default",weight:"normal",text:"Default color and weight for standard project documentation"})]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'color="default", weight="normal"'})]}),e.jsxs("div",{children:[e.jsxs("figure",{className:"max-w-sm",children:[e.jsx("div",{className:"w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500",children:"[Featured Image]"}),e.jsx(a,{...t,color:"muted",weight:"medium",italic:!0,text:"Muted color with medium weight and italic styling for elegant presentation"})]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'color="muted", weight="medium", italic=true'})]}),e.jsxs("div",{children:[e.jsxs("figure",{className:"max-w-sm",children:[e.jsx("div",{className:"w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500",children:"[Award Image]"}),e.jsx(a,{...t,color:"accent",weight:"semibold",text:"Accent color with semibold weight for highlighting award-winning projects"})]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'color="accent", weight="semibold"'})]})]}),parameters:{layout:"padded",controls:{exclude:["text","color","weight","italic"]}}},o={render:t=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("figure",{className:"max-w-sm",children:[e.jsx("div",{className:"w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500",children:"[Thumbnail Image]"}),e.jsx(a,{...t,size:"xs",text:"Extra small caption for thumbnail images and compact layouts in portfolio grids"})]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="xs"'})]}),e.jsxs("div",{children:[e.jsxs("figure",{className:"max-w-sm",children:[e.jsx("div",{className:"w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500",children:"[Standard Image]"}),e.jsx(a,{...t,size:"sm",text:"Standard small caption for regular image descriptions and project details in portfolios"})]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="sm" (default)'})]})]}),parameters:{layout:"padded",controls:{exclude:["text","size"]}}},d={render:t=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Project Portfolio Layout"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("figure",{children:[e.jsx("div",{className:"w-full h-48 bg-gray-200 rounded flex items-center justify-center text-gray-500",children:"[Kitchen Project]"}),e.jsx(a,{...t,weight:"medium",text:"Minnetonka Kitchen Remodel - Contemporary design with custom millwork and premium appliances"})]}),e.jsxs("figure",{children:[e.jsx("div",{className:"w-full h-48 bg-gray-200 rounded flex items-center justify-center text-gray-500",children:"[Bathroom Project]"}),e.jsx(a,{...t,italic:!0,text:"Wayzata Master Bath - Spa-inspired retreat featuring natural stone and custom vanity design"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Before/After Showcase"}),e.jsxs("figure",{className:"max-w-2xl",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{children:e.jsx("div",{className:"w-full h-40 bg-gray-300 rounded flex items-center justify-center text-gray-600",children:"BEFORE"})}),e.jsx("div",{children:e.jsx("div",{className:"w-full h-40 bg-gray-100 rounded flex items-center justify-center text-gray-600",children:"AFTER"})})]}),e.jsx(a,{...t,align:"center",weight:"medium",color:"accent",text:"Complete transformation: From dated 1990s kitchen to modern culinary masterpiece - Eden Prairie residence"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Detail Shots"}),e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsxs("figure",{children:[e.jsx("div",{className:"w-full h-24 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs",children:"[Detail 1]"}),e.jsx(a,{...t,size:"xs",align:"center",text:"Custom cabinet hardware"})]}),e.jsxs("figure",{children:[e.jsx("div",{className:"w-full h-24 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs",children:"[Detail 2]"}),e.jsx(a,{...t,size:"xs",align:"center",text:"Marble backsplash detail"})]}),e.jsxs("figure",{children:[e.jsx("div",{className:"w-full h-24 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs",children:"[Detail 3]"}),e.jsx(a,{...t,size:"xs",align:"center",text:"Integrated appliance panel"})]})]})]})]}),parameters:{layout:"padded",controls:{exclude:["text"]}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Award-winning luxury bathroom design with spa-inspired elements and custom marble vanity',
    size: 'sm',
    weight: 'normal',
    color: 'muted',
    lineHeight: 'normal',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'sans',
    italic: false
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Single Image Caption</h3>
        <figure className="max-w-md">
          <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [Kitchen Image]
          </div>
          <Caption {...args} text="Modern kitchen featuring waterfall quartz countertops and custom white oak cabinetry" />
        </figure>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Center Aligned Caption</h3>
        <figure className="max-w-md">
          <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [Bathroom Image]
          </div>
          <Caption {...args} align="center" italic={true} text="Luxury master bathroom with freestanding soaking tub and marble tile surround" />
        </figure>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Gallery Caption</h3>
        <figure className="max-w-lg">
          <div className="grid grid-cols-2 gap-2">
            <div className="h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
              [Before]
            </div>
            <div className="h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
              [After]
            </div>
          </div>
          <Caption {...args} align="center" weight="medium" text="Before and after: Complete transformation of 1980s kitchen into contemporary culinary workspace" />
        </figure>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'align', 'italic', 'weight']
    }
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-6">
      <div>
        <figure className="max-w-sm">
          <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [Project Image]
          </div>
          <Caption {...args} color="default" weight="normal" text="Default color and weight for standard project documentation" />
        </figure>
        <p className="text-xs text-muted-foreground mt-1">color="default", weight="normal"</p>
      </div>

      <div>
        <figure className="max-w-sm">
          <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [Featured Image]
          </div>
          <Caption {...args} color="muted" weight="medium" italic={true} text="Muted color with medium weight and italic styling for elegant presentation" />
        </figure>
        <p className="text-xs text-muted-foreground mt-1">color="muted", weight="medium", italic=true</p>
      </div>

      <div>
        <figure className="max-w-sm">
          <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [Award Image]
          </div>
          <Caption {...args} color="accent" weight="semibold" text="Accent color with semibold weight for highlighting award-winning projects" />
        </figure>
        <p className="text-xs text-muted-foreground mt-1">color="accent", weight="semibold"</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'color', 'weight', 'italic']
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-6">
      <div>
        <figure className="max-w-sm">
          <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [Thumbnail Image]
          </div>
          <Caption {...args} size="xs" text="Extra small caption for thumbnail images and compact layouts in portfolio grids" />
        </figure>
        <p className="text-xs text-muted-foreground mt-1">size="xs"</p>
      </div>

      <div>
        <figure className="max-w-sm">
          <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [Standard Image]
          </div>
          <Caption {...args} size="sm" text="Standard small caption for regular image descriptions and project details in portfolios" />
        </figure>
        <p className="text-xs text-muted-foreground mt-1">size="sm" (default)</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'size']
    }
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Project Portfolio Layout</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <figure>
            <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center text-gray-500">
              [Kitchen Project]
            </div>
            <Caption {...args} weight="medium" text="Minnetonka Kitchen Remodel - Contemporary design with custom millwork and premium appliances" />
          </figure>
          
          <figure>
            <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center text-gray-500">
              [Bathroom Project]
            </div>
            <Caption {...args} italic={true} text="Wayzata Master Bath - Spa-inspired retreat featuring natural stone and custom vanity design" />
          </figure>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Before/After Showcase</h3>
        <figure className="max-w-2xl">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="w-full h-40 bg-gray-300 rounded flex items-center justify-center text-gray-600">
                BEFORE
              </div>
            </div>
            <div>
              <div className="w-full h-40 bg-gray-100 rounded flex items-center justify-center text-gray-600">
                AFTER
              </div>
            </div>
          </div>
          <Caption {...args} align="center" weight="medium" color="accent" text="Complete transformation: From dated 1990s kitchen to modern culinary masterpiece - Eden Prairie residence" />
        </figure>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Detail Shots</h3>
        <div className="grid grid-cols-3 gap-3">
          <figure>
            <div className="w-full h-24 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">
              [Detail 1]
            </div>
            <Caption {...args} size="xs" align="center" text="Custom cabinet hardware" />
          </figure>
          <figure>
            <div className="w-full h-24 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">
              [Detail 2]
            </div>
            <Caption {...args} size="xs" align="center" text="Marble backsplash detail" />
          </figure>
          <figure>
            <div className="w-full h-24 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">
              [Detail 3]
            </div>
            <Caption {...args} size="xs" align="center" text="Integrated appliance panel" />
          </figure>
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text']
    }
  }
}`,...d.parameters?.docs?.source}}};const q=["Primary","WithImages","StyleVariants","SizeComparison","PortfolioExamples"];export{d as PortfolioExamples,i as Primary,o as SizeComparison,n as StyleVariants,l as WithImages,q as __namedExportsOrder,A as default};
