import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as B}from"./utils-CBfrqCZ4.js";const a=({items:t,variant:n="unordered",size:i="base",weight:o="normal",color:r="default",lineHeight:v="normal",maxWidth:S="none",fontFamily:b="sans",markerStyle:C="disc",orderStyle:j="decimal",itemSpacing:N="normal",indent:w="base",defaultColor:f,mutedColor:y,accentColor:h,className:k,...L})=>{const z={sm:"text-sm",base:"text-base",lg:"text-lg",xl:"text-xl"},T={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},V={default:"text-foreground text-gray-900 dark:text-gray-100",muted:"text-muted-foreground text-gray-600 dark:text-gray-400",accent:"text-primary text-blue-600 dark:text-blue-400"},F={tight:"leading-5",normal:"leading-7",relaxed:"leading-8",loose:"leading-9"},P={none:"",prose:"max-w-prose",sm:"max-w-sm",lg:"max-w-lg"},q={sans:"font-sans",serif:"font-serif",mono:"font-mono",inter:"font-[Inter]",montserrat:"font-[Montserrat]",poppins:"font-[Poppins]",playfair:"font-[Playfair_Display]",dancing:"font-[Dancing_Script]",greatvibes:"font-[Great_Vibes]",pacifico:"font-[Pacifico]",anton:"font-[Anton]",bebas:"font-[Bebas_Neue]",sourcecodepro:"font-[Source_Code_Pro]"},H={disc:"list-disc",circle:"list-circle",square:"list-square",none:"list-none"},W={decimal:"list-decimal","lower-alpha":"list-lower-alpha","upper-alpha":"list-upper-alpha","lower-roman":"list-lower-roman","upper-roman":"list-upper-roman"},E={tight:"[&>li]:mt-1",normal:"[&>li]:mt-2",relaxed:"[&>li]:mt-3"},I={none:"",sm:"ml-4",base:"ml-6",lg:"ml-8"};let s;r==="default"&&f?s=f:r==="muted"&&y?s=y:r==="accent"&&h&&(s=h);const M=s?{color:s}:void 0,A=n==="ordered"?W[j]:H[C],D=n==="ordered"?"ol":"ul";return e.jsx(D,{className:B("my-6",A,I[w],E[N],z[i],T[o],V[r],F[v],P[S],q[b],k),style:M,...L,children:t.map((O,_)=>e.jsx("li",{children:O},_))})};a.__docgenInfo={description:"",methods:[],displayName:"List",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The list items as an array of strings"},variant:{required:!1,tsType:{name:"union",raw:"'unordered' | 'ordered'",elements:[{name:"literal",value:"'unordered'"},{name:"literal",value:"'ordered'"}]},description:"List type variant",defaultValue:{value:"'unordered'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'base' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size variant for the list text",defaultValue:{value:"'base'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"Font weight variant",defaultValue:{value:"'normal'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'muted' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'accent'"}]},description:"Color variant for the list text",defaultValue:{value:"'default'",computed:!1}},lineHeight:{required:!1,tsType:{name:"union",raw:"'tight' | 'normal' | 'relaxed' | 'loose'",elements:[{name:"literal",value:"'tight'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'relaxed'"},{name:"literal",value:"'loose'"}]},description:"Line height variant",defaultValue:{value:"'normal'",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"'none' | 'prose' | 'sm' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'prose'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"Maximum width constraint",defaultValue:{value:"'none'",computed:!1}},fontFamily:{required:!1,tsType:{name:"union",raw:"'sans' | 'serif' | 'mono' | 'inter' | 'playfair' | 'montserrat' | 'poppins' | 'dancing' | 'greatvibes' | 'pacifico' | 'anton' | 'bebas' | 'sourcecodepro'",elements:[{name:"literal",value:"'sans'"},{name:"literal",value:"'serif'"},{name:"literal",value:"'mono'"},{name:"literal",value:"'inter'"},{name:"literal",value:"'playfair'"},{name:"literal",value:"'montserrat'"},{name:"literal",value:"'poppins'"},{name:"literal",value:"'dancing'"},{name:"literal",value:"'greatvibes'"},{name:"literal",value:"'pacifico'"},{name:"literal",value:"'anton'"},{name:"literal",value:"'bebas'"},{name:"literal",value:"'sourcecodepro'"}]},description:"Font family",defaultValue:{value:"'sans'",computed:!1}},markerStyle:{required:!1,tsType:{name:"union",raw:"'disc' | 'circle' | 'square' | 'none'",elements:[{name:"literal",value:"'disc'"},{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"},{name:"literal",value:"'none'"}]},description:"List marker style for unordered lists",defaultValue:{value:"'disc'",computed:!1}},orderStyle:{required:!1,tsType:{name:"union",raw:"'decimal' | 'lower-alpha' | 'upper-alpha' | 'lower-roman' | 'upper-roman'",elements:[{name:"literal",value:"'decimal'"},{name:"literal",value:"'lower-alpha'"},{name:"literal",value:"'upper-alpha'"},{name:"literal",value:"'lower-roman'"},{name:"literal",value:"'upper-roman'"}]},description:"List marker style for ordered lists",defaultValue:{value:"'decimal'",computed:!1}},itemSpacing:{required:!1,tsType:{name:"union",raw:"'tight' | 'normal' | 'relaxed'",elements:[{name:"literal",value:"'tight'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'relaxed'"}]},description:"Spacing between list items",defaultValue:{value:"'normal'",computed:!1}},indent:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'base' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"}]},description:"Left margin/indentation",defaultValue:{value:"'base'",computed:!1}},defaultColor:{required:!1,tsType:{name:"string"},description:"Custom color for default variant (docs only)"},mutedColor:{required:!1,tsType:{name:"string"},description:"Custom color for muted variant (docs only)"},accentColor:{required:!1,tsType:{name:"string"},description:"Custom color for accent variant (docs only)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};const R={title:"Components/List",component:a,parameters:{layout:"centered",docs:{story:{inline:!0,height:"auto"}}},tags:["autodocs"],argTypes:{items:{control:{type:"object"},description:"Array of list items as strings.",table:{type:{summary:"string[]"}}},variant:{control:"select",options:["unordered","ordered"],description:"List type - unordered (ul) or ordered (ol).",table:{type:{summary:"string"},defaultValue:{summary:"unordered"}}},size:{control:"select",options:["sm","base","lg","xl"],description:"Size variant for the list text.",table:{type:{summary:"string"},defaultValue:{summary:"base"}}},weight:{control:"select",options:["normal","medium","semibold","bold"],description:"Font weight variant.",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},color:{control:"select",options:["default","muted","accent"],description:"Color variant for the list text.",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},lineHeight:{control:"select",options:["tight","normal","relaxed","loose"],description:"Line height variant for readability.",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},maxWidth:{control:"select",options:["none","prose","sm","lg"],description:"Maximum width constraint for readability.",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},fontFamily:{control:"select",options:["sans","serif","mono","inter","playfair","montserrat","poppins","dancing","greatvibes","pacifico","anton","bebas","sourcecodepro"],description:"Font family variant.",table:{type:{summary:"string"},defaultValue:{summary:"sans"}}},markerStyle:{control:"select",options:["disc","circle","square","none"],description:"List marker style for unordered lists.",table:{type:{summary:"string"},defaultValue:{summary:"disc"}}},orderStyle:{control:"select",options:["decimal","lower-alpha","upper-alpha","lower-roman","upper-roman"],description:"List marker style for ordered lists.",table:{type:{summary:"string"},defaultValue:{summary:"decimal"}}},itemSpacing:{control:"select",options:["tight","normal","relaxed"],description:"Spacing between list items.",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},indent:{control:"select",options:["none","sm","base","lg"],description:"Left margin/indentation for the list.",table:{type:{summary:"string"},defaultValue:{summary:"base"}}},defaultColor:{control:{type:"color"},description:"Custom color for default variant. Overrides theme default color.",table:{type:{summary:"string"},defaultValue:{summary:"#000000"}}},mutedColor:{control:{type:"color"},description:"Custom color for muted variant. Overrides theme muted color.",table:{type:{summary:"string"},defaultValue:{summary:"#6b7280"}}},accentColor:{control:{type:"color"},description:"Custom color for accent variant. Overrides theme accent color.",table:{type:{summary:"string"},defaultValue:{summary:"#3b82f6"}}},className:{control:"text",description:"Additional Tailwind CSS classes for custom styling.",table:{type:{summary:"string"}}}},args:{items:["Contemporary kitchen design with premium finishes","Luxury bathroom renovation with spa-like features","Custom millwork and built-in storage solutions","Award-winning living space transformation"],variant:"unordered",size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"none",fontFamily:"sans",markerStyle:"disc",orderStyle:"decimal",itemSpacing:"normal",indent:"base",defaultColor:"#000000",mutedColor:"#6b7280",accentColor:"#3b82f6"}},l={args:{items:["This list component showcases design services with customizable typography","Perfect for displaying project features, benefits, or service offerings","Supports both ordered and unordered list variants with full control"],variant:"unordered",size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"prose",fontFamily:"sans",markerStyle:"disc",orderStyle:"decimal",itemSpacing:"normal",indent:"base",defaultColor:"#000000",mutedColor:"#6b7280",accentColor:"#3b82f6"},decorators:[(t,n)=>{const{defaultColor:i,mutedColor:o,accentColor:r}=n.args;return i&&document.documentElement.style.setProperty("--list-default-color",i),o&&document.documentElement.style.setProperty("--list-muted-color",o),r&&document.documentElement.style.setProperty("--list-accent-color",r),t()}]},d={render:t=>e.jsx(a,{...t}),args:{items:["Space planning and design consultation","Custom furniture selection and sourcing","Premium material and finish specifications","Project management and installation oversight"],variant:"unordered",size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"none",fontFamily:"sans",markerStyle:"disc",orderStyle:"decimal",itemSpacing:"normal",indent:"base"},parameters:{controls:{exclude:["defaultColor","mutedColor","accentColor","className"]}}},m={render:t=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 border border-gray-200 rounded",children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Test all controls below:"}),e.jsx(a,{...t})]}),e.jsxs("div",{className:"text-xs text-gray-500",children:[e.jsx("p",{children:e.jsx("strong",{children:"Current settings:"})}),e.jsxs("p",{children:["Variant: ",t.variant,", Size: ",t.size,", Weight: ",t.weight,", Color: ",t.color]}),e.jsxs("p",{children:["Marker: ",t.variant==="unordered"?t.markerStyle:t.orderStyle,", Spacing: ",t.itemSpacing,", Indent: ",t.indent]})]})]}),args:{items:["Change the controls above and watch this list transform!","Try different variants, sizes, weights, and marker styles","Experiment with spacing and indentation options"],variant:"unordered",size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"none",fontFamily:"sans",markerStyle:"disc",orderStyle:"decimal",itemSpacing:"normal",indent:"base"},parameters:{layout:"padded"}},c={args:{size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"none",fontFamily:"sans",itemSpacing:"normal",indent:"base"},render:t=>e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"List Variants"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(a,{...t,variant:"unordered",markerStyle:"disc",items:["Unordered List - Contemporary kitchen design concepts","Luxury bathroom renovation planning","Custom millwork and cabinetry solutions"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'variant="unordered"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,variant:"ordered",orderStyle:"decimal",items:["Ordered List - Initial design consultation","Space planning and concept development","Material selection and project execution"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'variant="ordered"'})]})]})]})}),parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","items","className","variant","markerStyle","orderStyle"]}}},u={args:{variant:"unordered",size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"none",fontFamily:"sans",itemSpacing:"normal",indent:"base"},render:t=>e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Unordered List Markers"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{...t,markerStyle:"disc",items:["Disc markers for luxury kitchen designs","Premium bathroom renovations","Custom living spaces"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'markerStyle="disc"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,markerStyle:"circle",items:["Circle markers for contemporary projects","Modern interior transformations","Sophisticated material selections"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'markerStyle="circle"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,markerStyle:"square",items:["Square markers for minimalist designs","Clean architectural elements","Geometric design principles"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'markerStyle="square"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,markerStyle:"none",items:["No markers for clean layouts","Minimal design aesthetics","Streamlined content presentation"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'markerStyle="none"'})]})]})]})}),parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","items","className","markerStyle","variant","orderStyle"]}}},p={args:{variant:"ordered",size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"none",fontFamily:"sans",itemSpacing:"normal",indent:"base"},render:t=>e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Ordered List Styles"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{...t,orderStyle:"decimal",items:["Initial design consultation","Space planning phase","Implementation and styling"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'orderStyle="decimal"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,orderStyle:"lower-alpha",items:["Kitchen renovation steps","Bathroom design process","Living space transformation"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'orderStyle="lower-alpha"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,orderStyle:"upper-alpha",items:["Premium material selection","Custom furniture sourcing","Final installation details"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'orderStyle="upper-alpha"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,orderStyle:"lower-roman",items:["Traditional design elements","Classical architectural features","Timeless luxury finishes"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'orderStyle="lower-roman"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,orderStyle:"upper-roman",items:["Formal presentation guidelines","Executive office designs","Corporate interior standards"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'orderStyle="upper-roman"'})]})]})]})}),parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","items","className","orderStyle","variant","markerStyle"]}}},g={args:{variant:"unordered",size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"none",fontFamily:"sans",markerStyle:"disc"},render:t=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Item Spacing"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(a,{...t,itemSpacing:"tight",indent:"base",items:["Tight spacing for compact layouts","Efficient use of vertical space","Dense information presentation"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'itemSpacing="tight"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,itemSpacing:"normal",indent:"base",items:["Normal spacing for standard readability","Balanced vertical rhythm","Comfortable content consumption"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'itemSpacing="normal" (default)'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,itemSpacing:"relaxed",indent:"base",items:["Relaxed spacing for enhanced readability","Generous vertical breathing room","Premium content presentation"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'itemSpacing="relaxed"'})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Indentation Levels"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(a,{...t,itemSpacing:"normal",indent:"none",items:["No indentation for flush alignment","Clean minimal presentation","Direct content hierarchy"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'indent="none"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,itemSpacing:"normal",indent:"sm",items:["Small indentation for subtle offset","Gentle visual separation","Compact design approach"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'indent="sm"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,itemSpacing:"normal",indent:"base",items:["Base indentation for standard lists","Classic typography spacing","Familiar reading experience"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'indent="base" (default)'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,itemSpacing:"normal",indent:"lg",items:["Large indentation for emphasis","Clear content separation","Sophisticated layout design"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'indent="lg"'})]})]})]})]}),parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","items","className","itemSpacing","indent","orderStyle"]}}},x={args:{variant:"unordered",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"none",fontFamily:"sans",markerStyle:"disc",itemSpacing:"normal",indent:"base"},render:t=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(a,{...t,size:"sm",items:["Small (14px) - Compact luxury service details","Premium finishes and materials","Sophisticated design elements"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="sm"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,size:"base",items:["Base (16px) - Standard interior design services","Contemporary kitchen transformations","Award-winning bathroom renovations"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="base" (default)'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,size:"lg",items:["Large (18px) - Featured design offerings","Custom millwork and built-ins","Luxury living space concepts"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="lg"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,size:"xl",items:["Extra Large (20px) - Premium service highlights","Exclusive design consultations","High-end project management"]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="xl"'})]})]}),parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","items","className","size","orderStyle"]}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: ['This list component showcases design services with customizable typography', 'Perfect for displaying project features, benefits, or service offerings', 'Supports both ordered and unordered list variants with full control'],
    variant: 'unordered',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'prose',
    fontFamily: 'sans',
    markerStyle: 'disc',
    orderStyle: 'decimal',
    itemSpacing: 'normal',
    indent: 'base',
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6'
  },
  decorators: [(Story, context) => {
    const {
      defaultColor,
      mutedColor,
      accentColor
    } = context.args;
    if (defaultColor) {
      document.documentElement.style.setProperty('--list-default-color', defaultColor);
    }
    if (mutedColor) {
      document.documentElement.style.setProperty('--list-muted-color', mutedColor);
    }
    if (accentColor) {
      document.documentElement.style.setProperty('--list-accent-color', accentColor);
    }
    return Story();
  }]
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <List {...args} />,
  args: {
    items: ['Space planning and design consultation', 'Custom furniture selection and sourcing', 'Premium material and finish specifications', 'Project management and installation oversight'],
    variant: 'unordered',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    fontFamily: 'sans',
    markerStyle: 'disc',
    orderStyle: 'decimal',
    itemSpacing: 'normal',
    indent: 'base'
  },
  parameters: {
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'className']
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
      <div className="p-4 border border-gray-200 rounded">
        <h3 className="text-sm font-semibold mb-2">Test all controls below:</h3>
        <List {...args} />
      </div>
      <div className="text-xs text-gray-500">
        <p><strong>Current settings:</strong></p>
        <p>Variant: {args.variant}, Size: {args.size}, Weight: {args.weight}, Color: {args.color}</p>
        <p>Marker: {args.variant === 'unordered' ? args.markerStyle : args.orderStyle}, Spacing: {args.itemSpacing}, Indent: {args.indent}</p>
      </div>
    </div>,
  args: {
    items: ['Change the controls above and watch this list transform!', 'Try different variants, sizes, weights, and marker styles', 'Experiment with spacing and indentation options'],
    variant: 'unordered',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    fontFamily: 'sans',
    markerStyle: 'disc',
    orderStyle: 'decimal',
    itemSpacing: 'normal',
    indent: 'base'
  },
  parameters: {
    layout: 'padded'
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    fontFamily: 'sans',
    itemSpacing: 'normal',
    indent: 'base'
  },
  render: args => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">List Variants</h3>
        <div className="space-y-6">
          <div>
            <List {...args} variant="unordered" markerStyle="disc" items={['Unordered List - Contemporary kitchen design concepts', 'Luxury bathroom renovation planning', 'Custom millwork and cabinetry solutions']} />
            <p className="text-xs text-muted-foreground mt-1">variant="unordered"</p>
          </div>
          <div>
            <List {...args} variant="ordered" orderStyle="decimal" items={['Ordered List - Initial design consultation', 'Space planning and concept development', 'Material selection and project execution']} />
            <p className="text-xs text-muted-foreground mt-1">variant="ordered"</p>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'items', 'className', 'variant', 'markerStyle', 'orderStyle']
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'unordered',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    fontFamily: 'sans',
    itemSpacing: 'normal',
    indent: 'base'
  },
  render: args => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Unordered List Markers</h3>
        <div className="space-y-4">
          <div>
            <List {...args} markerStyle="disc" items={['Disc markers for luxury kitchen designs', 'Premium bathroom renovations', 'Custom living spaces']} />
            <p className="text-xs text-muted-foreground mt-1">markerStyle="disc"</p>
          </div>
          <div>
            <List {...args} markerStyle="circle" items={['Circle markers for contemporary projects', 'Modern interior transformations', 'Sophisticated material selections']} />
            <p className="text-xs text-muted-foreground mt-1">markerStyle="circle"</p>
          </div>
          <div>
            <List {...args} markerStyle="square" items={['Square markers for minimalist designs', 'Clean architectural elements', 'Geometric design principles']} />
            <p className="text-xs text-muted-foreground mt-1">markerStyle="square"</p>
          </div>
          <div>
            <List {...args} markerStyle="none" items={['No markers for clean layouts', 'Minimal design aesthetics', 'Streamlined content presentation']} />
            <p className="text-xs text-muted-foreground mt-1">markerStyle="none"</p>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'items', 'className', 'markerStyle', 'variant', 'orderStyle']
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ordered',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    fontFamily: 'sans',
    itemSpacing: 'normal',
    indent: 'base'
  },
  render: args => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Ordered List Styles</h3>
        <div className="space-y-4">
          <div>
            <List {...args} orderStyle="decimal" items={['Initial design consultation', 'Space planning phase', 'Implementation and styling']} />
            <p className="text-xs text-muted-foreground mt-1">orderStyle="decimal"</p>
          </div>
          <div>
            <List {...args} orderStyle="lower-alpha" items={['Kitchen renovation steps', 'Bathroom design process', 'Living space transformation']} />
            <p className="text-xs text-muted-foreground mt-1">orderStyle="lower-alpha"</p>
          </div>
          <div>
            <List {...args} orderStyle="upper-alpha" items={['Premium material selection', 'Custom furniture sourcing', 'Final installation details']} />
            <p className="text-xs text-muted-foreground mt-1">orderStyle="upper-alpha"</p>
          </div>
          <div>
            <List {...args} orderStyle="lower-roman" items={['Traditional design elements', 'Classical architectural features', 'Timeless luxury finishes']} />
            <p className="text-xs text-muted-foreground mt-1">orderStyle="lower-roman"</p>
          </div>
          <div>
            <List {...args} orderStyle="upper-roman" items={['Formal presentation guidelines', 'Executive office designs', 'Corporate interior standards']} />
            <p className="text-xs text-muted-foreground mt-1">orderStyle="upper-roman"</p>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'items', 'className', 'orderStyle', 'variant', 'markerStyle']
    }
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'unordered',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    fontFamily: 'sans',
    markerStyle: 'disc'
  },
  render: args => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Item Spacing</h3>
        <div className="space-y-6">
          <div>
            <List {...args} itemSpacing="tight" indent="base" items={['Tight spacing for compact layouts', 'Efficient use of vertical space', 'Dense information presentation']} />
            <p className="text-xs text-muted-foreground mt-1">itemSpacing="tight"</p>
          </div>
          <div>
            <List {...args} itemSpacing="normal" indent="base" items={['Normal spacing for standard readability', 'Balanced vertical rhythm', 'Comfortable content consumption']} />
            <p className="text-xs text-muted-foreground mt-1">itemSpacing="normal" (default)</p>
          </div>
          <div>
            <List {...args} itemSpacing="relaxed" indent="base" items={['Relaxed spacing for enhanced readability', 'Generous vertical breathing room', 'Premium content presentation']} />
            <p className="text-xs text-muted-foreground mt-1">itemSpacing="relaxed"</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Indentation Levels</h3>
        <div className="space-y-6">
          <div>
            <List {...args} itemSpacing="normal" indent="none" items={['No indentation for flush alignment', 'Clean minimal presentation', 'Direct content hierarchy']} />
            <p className="text-xs text-muted-foreground mt-1">indent="none"</p>
          </div>
          <div>
            <List {...args} itemSpacing="normal" indent="sm" items={['Small indentation for subtle offset', 'Gentle visual separation', 'Compact design approach']} />
            <p className="text-xs text-muted-foreground mt-1">indent="sm"</p>
          </div>
          <div>
            <List {...args} itemSpacing="normal" indent="base" items={['Base indentation for standard lists', 'Classic typography spacing', 'Familiar reading experience']} />
            <p className="text-xs text-muted-foreground mt-1">indent="base" (default)</p>
          </div>
          <div>
            <List {...args} itemSpacing="normal" indent="lg" items={['Large indentation for emphasis', 'Clear content separation', 'Sophisticated layout design']} />
            <p className="text-xs text-muted-foreground mt-1">indent="lg"</p>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'items', 'className', 'itemSpacing', 'indent', 'orderStyle']
    }
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'unordered',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    fontFamily: 'sans',
    markerStyle: 'disc',
    itemSpacing: 'normal',
    indent: 'base'
  },
  render: args => <div className="space-y-6">
      <div>
        <List {...args} size="sm" items={['Small (14px) - Compact luxury service details', 'Premium finishes and materials', 'Sophisticated design elements']} />
        <p className="text-xs text-muted-foreground mt-1">size="sm"</p>
      </div>
      <div>
        <List {...args} size="base" items={['Base (16px) - Standard interior design services', 'Contemporary kitchen transformations', 'Award-winning bathroom renovations']} />
        <p className="text-xs text-muted-foreground mt-1">size="base" (default)</p>
      </div>
      <div>
        <List {...args} size="lg" items={['Large (18px) - Featured design offerings', 'Custom millwork and built-ins', 'Luxury living space concepts']} />
        <p className="text-xs text-muted-foreground mt-1">size="lg"</p>
      </div>
      <div>
        <List {...args} size="xl" items={['Extra Large (20px) - Premium service highlights', 'Exclusive design consultations', 'High-end project management']} />
        <p className="text-xs text-muted-foreground mt-1">size="xl"</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'items', 'className', 'size', 'orderStyle']
    }
  }
}`,...x.parameters?.docs?.source}}};const K=["Docs","Primary","TestControls","VariantComparison","MarkerStyles","OrderStyles","SpacingAndIndentation","SizeVariants"];export{l as Docs,u as MarkerStyles,p as OrderStyles,d as Primary,x as SizeVariants,g as SpacingAndIndentation,m as TestControls,c as VariantComparison,K as __namedExportsOrder,R as default};
