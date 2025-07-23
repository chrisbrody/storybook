import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as V}from"./utils-CBfrqCZ4.js";const a=({text:t,size:u="4xl",weight:p="bold",color:s="default",lineHeight:g="tight",maxWidth:f="none",align:y="left",fontFamily:h="sans",letterSpacing:v="tight",defaultColor:m,mutedColor:c,accentColor:x,className:b,...w})=>{const N={"3xl":"text-3xl","4xl":"text-4xl","5xl":"text-5xl","6xl":"text-6xl","7xl":"text-7xl","8xl":"text-8xl","9xl":"text-9xl"},j={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold",extrabold:"font-extrabold",black:"font-black"},T={default:"text-foreground text-gray-900 dark:text-gray-100",muted:"text-muted-foreground text-gray-600 dark:text-gray-400",accent:"text-primary text-blue-600 dark:text-blue-400"},S={tight:"leading-tight",normal:"leading-normal",relaxed:"leading-relaxed"},F={none:"",prose:"max-w-prose",sm:"max-w-sm",lg:"max-w-lg",xl:"max-w-xl"},z={left:"text-left",center:"text-center",right:"text-right"},C={sans:"font-sans",serif:"font-serif",mono:"font-mono",inter:"font-[Inter]",montserrat:"font-[Montserrat]",poppins:"font-[Poppins]",playfair:"font-[Playfair_Display]",dancing:"font-[Dancing_Script]",greatvibes:"font-[Great_Vibes]",pacifico:"font-[Pacifico]",anton:"font-[Anton]",bebas:"font-[Bebas_Neue]",sourcecodepro:"font-[Source_Code_Pro]"},D={tighter:"tracking-tighter",tight:"tracking-tight",normal:"tracking-normal",wide:"tracking-wide",wider:"tracking-wider",widest:"tracking-widest"};let l;s==="default"&&m?l=m:s==="muted"&&c?l=c:s==="accent"&&x&&(l=x);const k=l?{color:l}:void 0;return e.jsx("h1",{className:V("scroll-m-20",N[u],j[p],T[s],S[g],F[f],z[y],C[h],D[v],b),style:k,...w,children:t})};a.__docgenInfo={description:"",methods:[],displayName:"DisplayText",props:{text:{required:!0,tsType:{name:"string"},description:"The display text content"},size:{required:!1,tsType:{name:"union",raw:"'3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'",elements:[{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"},{name:"literal",value:"'5xl'"},{name:"literal",value:"'6xl'"},{name:"literal",value:"'7xl'"},{name:"literal",value:"'8xl'"},{name:"literal",value:"'9xl'"}]},description:"Size variant for the display text",defaultValue:{value:"'4xl'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"},{name:"literal",value:"'extrabold'"},{name:"literal",value:"'black'"}]},description:"Font weight variant",defaultValue:{value:"'bold'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'muted' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'accent'"}]},description:"Color variant for the display text",defaultValue:{value:"'default'",computed:!1}},lineHeight:{required:!1,tsType:{name:"union",raw:"'tight' | 'normal' | 'relaxed'",elements:[{name:"literal",value:"'tight'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'relaxed'"}]},description:"Line height variant",defaultValue:{value:"'tight'",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"'none' | 'prose' | 'sm' | 'lg' | 'xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'prose'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Maximum width constraint",defaultValue:{value:"'none'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Text alignment",defaultValue:{value:"'left'",computed:!1}},fontFamily:{required:!1,tsType:{name:"union",raw:"'sans' | 'serif' | 'mono' | 'inter' | 'playfair' | 'montserrat' | 'poppins' | 'dancing' | 'greatvibes' | 'pacifico' | 'anton' | 'bebas' | 'sourcecodepro'",elements:[{name:"literal",value:"'sans'"},{name:"literal",value:"'serif'"},{name:"literal",value:"'mono'"},{name:"literal",value:"'inter'"},{name:"literal",value:"'playfair'"},{name:"literal",value:"'montserrat'"},{name:"literal",value:"'poppins'"},{name:"literal",value:"'dancing'"},{name:"literal",value:"'greatvibes'"},{name:"literal",value:"'pacifico'"},{name:"literal",value:"'anton'"},{name:"literal",value:"'bebas'"},{name:"literal",value:"'sourcecodepro'"}]},description:"Font family",defaultValue:{value:"'sans'",computed:!1}},letterSpacing:{required:!1,tsType:{name:"union",raw:"'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'",elements:[{name:"literal",value:"'tighter'"},{name:"literal",value:"'tight'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'wide'"},{name:"literal",value:"'wider'"},{name:"literal",value:"'widest'"}]},description:"Letter spacing",defaultValue:{value:"'tight'",computed:!1}},defaultColor:{required:!1,tsType:{name:"string"},description:"Custom color for default variant (docs only)"},mutedColor:{required:!1,tsType:{name:"string"},description:"Custom color for muted variant (docs only)"},accentColor:{required:!1,tsType:{name:"string"},description:"Custom color for accent variant (docs only)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};const A={title:"Components/DisplayText",component:a,parameters:{layout:"centered",docs:{story:{inline:!0,height:"auto"}}},tags:["autodocs"],argTypes:{text:{control:{type:"text"},description:"The display text content.",table:{type:{summary:"string"}}},size:{control:"select",options:["3xl","4xl","5xl","6xl","7xl","8xl","9xl"],description:"Size variant for the display text.",table:{type:{summary:"string"},defaultValue:{summary:"4xl"}}},weight:{control:"select",options:["normal","medium","semibold","bold","extrabold","black"],description:"Font weight variant.",table:{type:{summary:"string"},defaultValue:{summary:"bold"}}},color:{control:"select",options:["default","muted","accent"],description:"Color variant for the display text.",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},lineHeight:{control:"select",options:["tight","normal","relaxed"],description:"Line height variant for readability.",table:{type:{summary:"string"},defaultValue:{summary:"tight"}}},maxWidth:{control:"select",options:["none","prose","sm","lg","xl"],description:"Maximum width constraint for readability.",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},align:{control:"select",options:["left","center","right"],description:"Text alignment.",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},fontFamily:{control:"select",options:["sans","serif","mono","inter","playfair","montserrat","poppins","dancing","greatvibes","pacifico","anton","bebas","sourcecodepro"],description:"Font family variant.",table:{type:{summary:"string"},defaultValue:{summary:"sans"}}},letterSpacing:{control:"select",options:["tighter","tight","normal","wide","wider","widest"],description:"Letter spacing variant.",table:{type:{summary:"string"},defaultValue:{summary:"tight"}}},defaultColor:{control:{type:"color"},description:"Custom color for default variant. Overrides theme default color.",table:{type:{summary:"string"},defaultValue:{summary:"#000000"}}},mutedColor:{control:{type:"color"},description:"Custom color for muted variant. Overrides theme muted color.",table:{type:{summary:"string"},defaultValue:{summary:"#6b7280"}}},accentColor:{control:{type:"color"},description:"Custom color for accent variant. Overrides theme accent color.",table:{type:{summary:"string"},defaultValue:{summary:"#3b82f6"}}},className:{control:"text",description:"Additional Tailwind CSS classes for custom styling.",table:{type:{summary:"string"}}}},args:{text:"Luxury Interior Design",size:"4xl",weight:"bold",color:"default",lineHeight:"tight",maxWidth:"none",align:"left",fontFamily:"sans",letterSpacing:"tight",defaultColor:"#000000",mutedColor:"#6b7280",accentColor:"#3b82f6"}},i={args:{text:"Transform Your Space",size:"4xl",weight:"bold",color:"default",lineHeight:"tight",maxWidth:"none",align:"left",fontFamily:"sans",letterSpacing:"tight"}},r={render:t=>e.jsxs("div",{className:"space-y-8 text-center",children:[e.jsxs("div",{children:[e.jsx(a,{...t,size:"3xl",text:"Elegant Spaces"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="3xl"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,size:"4xl",text:"Luxury Design"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="4xl" (default)'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,size:"5xl",text:"Transform"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="5xl"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,size:"6xl",text:"Inspire"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="6xl"'})]})]}),parameters:{layout:"padded",controls:{exclude:["text","size","align"]}}},n={render:t=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(a,{...t,weight:"normal",text:"Normal Weight"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'weight="normal"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,weight:"medium",text:"Medium Weight"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'weight="medium"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,weight:"semibold",text:"Semibold Weight"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'weight="semibold"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,weight:"bold",text:"Bold Weight"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'weight="bold" (default)'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,weight:"extrabold",text:"Extrabold Weight"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'weight="extrabold"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,weight:"black",text:"Black Weight"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'weight="black"'})]})]}),parameters:{layout:"padded",controls:{exclude:["text","weight"]}}},o={render:t=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx(a,{...t,fontFamily:"sans",text:"Modern Sans-Serif"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'fontFamily="sans" (default)'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,fontFamily:"serif",text:"Elegant Serif"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'fontFamily="serif"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,fontFamily:"playfair",text:"Playfair Display"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'fontFamily="playfair"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,fontFamily:"anton",text:"ANTON DISPLAY"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'fontFamily="anton"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,fontFamily:"bebas",text:"BEBAS NEUE"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'fontFamily="bebas"'})]})]}),parameters:{layout:"padded",controls:{exclude:["text","fontFamily"]}}},d={render:t=>e.jsxs("div",{className:"space-y-12",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Hero Section"}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg text-center",children:[e.jsx(a,{...t,size:"6xl",weight:"extrabold",align:"center",text:"Award-Winning Design"}),e.jsx("p",{className:"mt-4 text-lg text-muted-foreground",children:"Creating luxury spaces that inspire and transform lifestyles"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Service Landing"}),e.jsxs("div",{className:"border-l-4 border-primary pl-6",children:[e.jsx(a,{...t,size:"5xl",weight:"bold",color:"accent",text:"Kitchen Renovations"}),e.jsx("p",{className:"mt-2 text-muted-foreground",children:"Transform your kitchen into a culinary masterpiece"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"About Section"}),e.jsx(a,{...t,size:"4xl",weight:"semibold",fontFamily:"playfair",text:"30 Years of Excellence"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Call to Action"}),e.jsx("div",{className:"bg-primary/5 p-6 rounded-lg text-center",children:e.jsx(a,{...t,size:"5xl",weight:"black",fontFamily:"bebas",letterSpacing:"wider",align:"center",text:"START YOUR PROJECT"})})]})]}),parameters:{layout:"padded",controls:{exclude:["text"]}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Transform Your Space',
    size: '4xl',
    weight: 'bold',
    color: 'default',
    lineHeight: 'tight',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'sans',
    letterSpacing: 'tight'
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-8 text-center">
      <div>
        <DisplayText {...args} size="3xl" text="Elegant Spaces" />
        <p className="text-xs text-muted-foreground mt-1">size="3xl"</p>
      </div>
      <div>
        <DisplayText {...args} size="4xl" text="Luxury Design" />
        <p className="text-xs text-muted-foreground mt-1">size="4xl" (default)</p>
      </div>
      <div>
        <DisplayText {...args} size="5xl" text="Transform" />
        <p className="text-xs text-muted-foreground mt-1">size="5xl"</p>
      </div>
      <div>
        <DisplayText {...args} size="6xl" text="Inspire" />
        <p className="text-xs text-muted-foreground mt-1">size="6xl"</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'size', 'align']
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-6">
      <div>
        <DisplayText {...args} weight="normal" text="Normal Weight" />
        <p className="text-xs text-muted-foreground mt-1">weight="normal"</p>
      </div>
      <div>
        <DisplayText {...args} weight="medium" text="Medium Weight" />
        <p className="text-xs text-muted-foreground mt-1">weight="medium"</p>
      </div>
      <div>
        <DisplayText {...args} weight="semibold" text="Semibold Weight" />
        <p className="text-xs text-muted-foreground mt-1">weight="semibold"</p>
      </div>
      <div>
        <DisplayText {...args} weight="bold" text="Bold Weight" />
        <p className="text-xs text-muted-foreground mt-1">weight="bold" (default)</p>
      </div>
      <div>
        <DisplayText {...args} weight="extrabold" text="Extrabold Weight" />
        <p className="text-xs text-muted-foreground mt-1">weight="extrabold"</p>
      </div>
      <div>
        <DisplayText {...args} weight="black" text="Black Weight" />
        <p className="text-xs text-muted-foreground mt-1">weight="black"</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'weight']
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-8">
      <div>
        <DisplayText {...args} fontFamily="sans" text="Modern Sans-Serif" />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="sans" (default)</p>
      </div>
      <div>
        <DisplayText {...args} fontFamily="serif" text="Elegant Serif" />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="serif"</p>
      </div>
      <div>
        <DisplayText {...args} fontFamily="playfair" text="Playfair Display" />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="playfair"</p>
      </div>
      <div>
        <DisplayText {...args} fontFamily="anton" text="ANTON DISPLAY" />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="anton"</p>
      </div>
      <div>
        <DisplayText {...args} fontFamily="bebas" text="BEBAS NEUE" />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="bebas"</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text', 'fontFamily']
    }
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-12">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Hero Section</h3>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg text-center">
          <DisplayText {...args} size="6xl" weight="extrabold" align="center" text="Award-Winning Design" />
          <p className="mt-4 text-lg text-muted-foreground">
            Creating luxury spaces that inspire and transform lifestyles
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Service Landing</h3>
        <div className="border-l-4 border-primary pl-6">
          <DisplayText {...args} size="5xl" weight="bold" color="accent" text="Kitchen Renovations" />
          <p className="mt-2 text-muted-foreground">
            Transform your kitchen into a culinary masterpiece
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">About Section</h3>
        <DisplayText {...args} size="4xl" weight="semibold" fontFamily="playfair" text="30 Years of Excellence" />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Call to Action</h3>
        <div className="bg-primary/5 p-6 rounded-lg text-center">
          <DisplayText {...args} size="5xl" weight="black" fontFamily="bebas" letterSpacing="wider" align="center" text="START YOUR PROJECT" />
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['text']
    }
  }
}`,...d.parameters?.docs?.source}}};const q=["Primary","SizeVariants","WeightVariants","FontFamilyShowcase","UseCases"];export{o as FontFamilyShowcase,i as Primary,r as SizeVariants,d as UseCases,n as WeightVariants,q as __namedExportsOrder,A as default};
