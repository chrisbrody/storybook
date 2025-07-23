import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as V}from"./utils-CBfrqCZ4.js";const a=({text:t,size:o="base",weight:s="normal",color:r="default",lineHeight:i="normal",maxWidth:n="none",align:l="left",fontFamily:j="sans",defaultColor:v,mutedColor:b,accentColor:w,className:C,...N})=>{const T={xs:"text-xs",sm:"text-sm",base:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl"},z={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},H={default:"text-foreground text-gray-900 dark:text-gray-100",muted:"text-muted-foreground text-gray-600 dark:text-gray-400",subtle:"text-muted-foreground/70 text-gray-500 dark:text-gray-500",accent:"text-primary text-blue-600 dark:text-blue-400"},W={tight:"leading-5",normal:"leading-7",relaxed:"leading-8",loose:"leading-9"},F={none:"",prose:"max-w-prose",sm:"max-w-sm",lg:"max-w-lg"},P={left:"text-left",center:"text-center",right:"text-right",justify:"text-justify"},S={sans:"font-sans",serif:"font-serif",mono:"font-mono",inter:"font-[Inter]",montserrat:"font-[Montserrat]",poppins:"font-[Poppins]",playfair:"font-[Playfair_Display]",dancing:"font-[Dancing_Script]",greatvibes:"font-[Great_Vibes]",pacifico:"font-[Pacifico]",anton:"font-[Anton]",bebas:"font-[Bebas_Neue]",sourcecodepro:"font-[Source_Code_Pro]"};let d;r==="default"&&v?d=v:r==="muted"&&b?d=b:r==="accent"&&w&&(d=w);const k=d?{color:d}:void 0;return e.jsx("p",{className:V("[&:not(:first-child)]:mt-6",T[o],z[s],H[r],W[i],F[n],P[l],S[j],C),style:k,...N,children:t})};a.__docgenInfo={description:"",methods:[],displayName:"Paragraph",props:{text:{required:!0,tsType:{name:"string"},description:"The paragraph text content"},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},description:"Size variant for the paragraph text",defaultValue:{value:"'base'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"Font weight variant",defaultValue:{value:"'normal'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'muted' | 'subtle' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'subtle'"},{name:"literal",value:"'accent'"}]},description:"Color variant for the paragraph text",defaultValue:{value:"'default'",computed:!1}},lineHeight:{required:!1,tsType:{name:"union",raw:"'tight' | 'normal' | 'relaxed' | 'loose'",elements:[{name:"literal",value:"'tight'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'relaxed'"},{name:"literal",value:"'loose'"}]},description:"Line height variant",defaultValue:{value:"'normal'",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"'none' | 'prose' | 'sm' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'prose'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"Maximum width constraint",defaultValue:{value:"'none'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"},{name:"literal",value:"'justify'"}]},description:"Text alignment",defaultValue:{value:"'left'",computed:!1}},fontFamily:{required:!1,tsType:{name:"union",raw:"'sans' | 'serif' | 'mono' | 'inter' | 'playfair' | 'montserrat' | 'poppins' | 'dancing' | 'greatvibes' | 'pacifico' | 'anton' | 'bebas' | 'sourcecodepro'",elements:[{name:"literal",value:"'sans'"},{name:"literal",value:"'serif'"},{name:"literal",value:"'mono'"},{name:"literal",value:"'inter'"},{name:"literal",value:"'playfair'"},{name:"literal",value:"'montserrat'"},{name:"literal",value:"'poppins'"},{name:"literal",value:"'dancing'"},{name:"literal",value:"'greatvibes'"},{name:"literal",value:"'pacifico'"},{name:"literal",value:"'anton'"},{name:"literal",value:"'bebas'"},{name:"literal",value:"'sourcecodepro'"}]},description:"Font family",defaultValue:{value:"'sans'",computed:!1}},defaultColor:{required:!1,tsType:{name:"string"},description:"Custom color for default variant (docs only)"},mutedColor:{required:!1,tsType:{name:"string"},description:"Custom color for muted variant (docs only)"},accentColor:{required:!1,tsType:{name:"string"},description:"Custom color for accent variant (docs only)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};const A={title:"Components/Typography/Paragraph",component:a,parameters:{layout:"centered",docs:{story:{inline:!0,height:"auto"}}},tags:["autodocs"],argTypes:{text:{control:{type:"text"},description:"The paragraph text content.",table:{type:{summary:"string"}}},size:{control:"select",options:["xs","sm","base","lg","xl","2xl"],description:"Size variant for the paragraph text.",table:{type:{summary:"string"},defaultValue:{summary:"base"}}},weight:{control:"select",options:["normal","medium","semibold","bold"],description:"Font weight variant.",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},color:{control:"select",options:["default","muted","subtle","accent"],description:"Color variant for the paragraph text.",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},lineHeight:{control:"select",options:["tight","normal","relaxed","loose"],description:"Line height variant for readability.",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},maxWidth:{control:"select",options:["none","prose","sm","lg"],description:"Maximum width constraint for readability.",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},align:{control:"select",options:["left","center","right","justify"],description:"Text alignment.",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},fontFamily:{control:"select",options:["sans","serif","mono","inter","playfair","montserrat","poppins","dancing","greatvibes","pacifico","anton","bebas","sourcecodepro"],description:"Font family variant.",table:{type:{summary:"string"},defaultValue:{summary:"sans"}}},defaultColor:{control:{type:"color"},description:"Custom color for default variant. Overrides theme default color.",table:{type:{summary:"string"},defaultValue:{summary:"#000000"}}},mutedColor:{control:{type:"color"},description:"Custom color for muted variant. Overrides theme muted color.",table:{type:{summary:"string"},defaultValue:{summary:"#6b7280"}}},accentColor:{control:{type:"color"},description:"Custom color for accent variant. Overrides theme accent color.",table:{type:{summary:"string"},defaultValue:{summary:"#3b82f6"}}},className:{control:"text",description:"Additional Tailwind CSS classes for custom styling.",table:{type:{summary:"string"}}}},args:{text:"This contemporary kitchen remodel in Minnetonka represents a complete transformation from a dated, compartmentalized space into an open, light-filled hub of the home.",size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"none",align:"left",fontFamily:"sans",defaultColor:"#000000",mutedColor:"#6b7280",accentColor:"#3b82f6"}},m={args:{text:"This is a paragraph component that can be customized with various typography controls.",size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"prose",align:"left",fontFamily:"sans",defaultColor:"#000000",mutedColor:"#6b7280",accentColor:"#3b82f6"},decorators:[(t,o)=>{const{defaultColor:s,mutedColor:r,accentColor:i}=o.args;return s&&document.documentElement.style.setProperty("--paragraph-default-color",s),r&&document.documentElement.style.setProperty("--paragraph-muted-color",r),i&&document.documentElement.style.setProperty("--paragraph-accent-color",i),t()}]},c={render:t=>e.jsx(a,{...t}),args:{text:"Our design approach focused on creating seamless flow between cooking, dining, and entertaining areas while maximizing both functionality and aesthetic appeal.",size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"none",align:"left",fontFamily:"sans"},parameters:{controls:{exclude:["defaultColor","mutedColor","accentColor","className"]}}},h={render:t=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 border border-gray-200 rounded",children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Test all controls below:"}),e.jsx(a,{...t})]}),e.jsxs("div",{className:"text-xs text-gray-500",children:[e.jsx("p",{children:e.jsx("strong",{children:"Current settings:"})}),e.jsxs("p",{children:["Size: ",t.size,", Weight: ",t.weight,", Color: ",t.color]}),e.jsxs("p",{children:["Line Height: ",t.lineHeight,", Font: ",t.fontFamily,", Align: ",t.align]})]})]}),args:{text:"Change the controls above and watch this text transform! Try different sizes, weights, colors, and alignments.",size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"none",align:"left",fontFamily:"sans"},parameters:{layout:"padded"}},u={args:{color:"default",weight:"normal",lineHeight:"normal",align:"left",fontFamily:"sans",maxWidth:"none"},render:t=>{const{color:o,weight:s,lineHeight:r,align:i,fontFamily:n,maxWidth:l}=t;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{size:"xs",color:o,weight:s,lineHeight:r,align:i,fontFamily:n,maxWidth:l,text:"Extra Small (12px) - This contemporary kitchen remodel demonstrates the xs size variant."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="xs"'})]}),e.jsxs("div",{children:[e.jsx(a,{size:"sm",color:o,weight:s,lineHeight:r,align:i,fontFamily:n,maxWidth:l,text:"Small (14px) - This luxury bathroom renovation demonstrates the sm size variant."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="sm"'})]}),e.jsxs("div",{children:[e.jsx(a,{size:"base",color:o,weight:s,lineHeight:r,align:i,fontFamily:n,maxWidth:l,text:"Base (16px) - This award-winning living space design demonstrates the base size variant, which is the default."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="base" (default)'})]}),e.jsxs("div",{children:[e.jsx(a,{size:"lg",color:o,weight:s,lineHeight:r,align:i,fontFamily:n,maxWidth:l,text:"Large (18px) - This custom millwork project demonstrates the lg size variant for emphasis."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="lg"'})]}),e.jsxs("div",{children:[e.jsx(a,{size:"xl",color:o,weight:s,lineHeight:r,align:i,fontFamily:n,maxWidth:l,text:"Extra Large (20px) - This premium material selection demonstrates the xl size variant."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="xl"'})]}),e.jsxs("div",{children:[e.jsx(a,{size:"2xl",color:o,weight:s,lineHeight:r,align:i,fontFamily:n,maxWidth:l,text:"2X Large (24px) - This sophisticated transformation demonstrates the 2xl size variant."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="2xl"'})]})]})},parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","text","className","size","maxWidth","align","fontFamily"]}}},g={args:{size:"base",weight:"normal",lineHeight:"normal",align:"left",fontFamily:"sans",maxWidth:"none",defaultColor:"#000000",mutedColor:"#6b7280",accentColor:"#3b82f6"},render:t=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{...t,color:"default",text:"Default Color - This contemporary kitchen transformation uses the default text color for primary content."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'color="default"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,color:"muted",text:"Muted Color - This luxury bathroom renovation uses muted text color for secondary content."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'color="muted"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,color:"accent",text:"Accent Color - This award-winning design uses the accent/brand color for highlighted content."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'color="accent"'})]})]}),decorators:[(t,o)=>{const{defaultColor:s,mutedColor:r,accentColor:i}=o.args;return s&&document.documentElement.style.setProperty("--paragraph-default-color",s),r&&document.documentElement.style.setProperty("--paragraph-muted-color",r),i&&document.documentElement.style.setProperty("--paragraph-accent-color",i),t()}],parameters:{layout:"padded",controls:{include:["defaultColor","mutedColor","accentColor"]}}},x={args:{size:"base",color:"default",lineHeight:"normal",align:"left",fontFamily:"sans",maxWidth:"none"},render:t=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{...t,weight:"normal",text:"Normal Weight - This contemporary kitchen transformation demonstrates normal font weight for regular text."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'weight="normal" (default)'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,weight:"medium",text:"Medium Weight - This luxury bathroom renovation demonstrates medium font weight for emphasis."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'weight="medium"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,weight:"semibold",text:"Semibold Weight - This custom millwork project demonstrates semibold font weight for strong emphasis."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'weight="semibold"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,weight:"bold",text:"Bold Weight - This award-winning design demonstrates bold font weight for maximum emphasis."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'weight="bold"'})]})]}),parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","text","className","weight","lineHeight","maxWidth","align","fontFamily"]}}},p={args:{size:"base",color:"default",weight:"normal",align:"left",fontFamily:"sans",maxWidth:"none"},render:t=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(a,{...t,lineHeight:"tight",text:"Tight Line Height - This contemporary kitchen remodel demonstrates tight line height which reduces the space between lines for a more compact appearance in luxury design presentations."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'lineHeight="tight"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,lineHeight:"normal",text:"Normal Line Height - This award-winning bathroom renovation demonstrates normal line height which provides balanced spacing between lines for good readability in premium design content."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'lineHeight="normal" (default)'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,lineHeight:"relaxed",text:"Relaxed Line Height - This custom millwork project demonstrates relaxed line height which increases the space between lines for improved readability and a more open, airy feeling in sophisticated design portfolios."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'lineHeight="relaxed"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,lineHeight:"loose",text:"Loose Line Height - This luxury living space transformation demonstrates loose line height which provides maximum space between lines for enhanced readability in high-end interior design presentations."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'lineHeight="loose"'})]})]}),parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","text","className","weight","lineHeight","maxWidth","align","fontFamily"]}}},f={args:{size:"base",color:"default",weight:"normal",lineHeight:"normal",fontFamily:"sans"},render:t=>e.jsxs("div",{className:"w-full space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Max Width Variants"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{...t,maxWidth:"none",className:"bg-muted/20 p-4",text:"No Max Width - This contemporary kitchen transformation has no width constraint and will expand to fill the full width of its container for bold design statements."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'maxWidth="none"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,maxWidth:"prose",className:"bg-muted/20 p-4",text:"Prose Width - This luxury bathroom renovation is constrained to an optimal reading width (around 65 characters) which is considered ideal for readability in sophisticated design content."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'maxWidth="prose"'})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Text Alignment"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{...t,align:"left",className:"bg-muted/20 p-4",text:"Left Aligned - This award-winning living space is aligned to the left, which is the default and most common alignment for premium design content."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'align="left" (default)'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,align:"center",className:"bg-muted/20 p-4",text:"Center Aligned - This custom millwork project is center aligned, often used for elegant headings or special design callouts."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'align="center"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,align:"right",className:"bg-muted/20 p-4",text:"Right Aligned - This luxury material selection is right aligned, less common but useful for sophisticated design layouts."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'align="right"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,align:"justify",className:"bg-muted/20 p-4",text:"Justified Text - This premium interior transformation uses justified alignment, where text is stretched to align with both left and right margins, creating even edges for formal design presentations."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'align="justify"'})]})]})]})]}),parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","text","className","weight","lineHeight","maxWidth","align","fontFamily"]}}},y={args:{size:"base",color:"default",weight:"normal",lineHeight:"normal",align:"left",maxWidth:"none"},render:t=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{...t,fontFamily:"sans",text:"Sans Serif - This contemporary kitchen remodel uses a clean, modern sans-serif font family. It's the default choice for luxury interior design content and provides excellent readability."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'fontFamily="sans" (default)'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,fontFamily:"serif",text:"Serif - This award-winning bathroom transformation uses an elegant serif font family with decorative strokes that give a sophisticated, formal feel perfect for luxury design presentations."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'fontFamily="serif"'})]}),e.jsxs("div",{children:[e.jsx(a,{...t,fontFamily:"mono",text:"Monospace - This custom millwork project uses a monospace font family where each character takes the same width. Perfect for technical specifications and precise measurements in design documentation."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'fontFamily="mono"'})]})]}),parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","text","className","weight","lineHeight","maxWidth","align","fontFamily"]}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'This is a paragraph component that can be customized with various typography controls.',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'prose',
    align: 'left',
    fontFamily: 'sans',
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
      document.documentElement.style.setProperty('--paragraph-default-color', defaultColor);
    }
    if (mutedColor) {
      document.documentElement.style.setProperty('--paragraph-muted-color', mutedColor);
    }
    if (accentColor) {
      document.documentElement.style.setProperty('--paragraph-accent-color', accentColor);
    }
    return Story();
  }]
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Paragraph {...args} />,
  args: {
    text: 'Our design approach focused on creating seamless flow between cooking, dining, and entertaining areas while maximizing both functionality and aesthetic appeal.',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'sans'
  },
  parameters: {
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'className']
    }
  }
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
      <div className="p-4 border border-gray-200 rounded">
        <h3 className="text-sm font-semibold mb-2">Test all controls below:</h3>
        <Paragraph {...args} />
      </div>
      <div className="text-xs text-gray-500">
        <p><strong>Current settings:</strong></p>
        <p>Size: {args.size}, Weight: {args.weight}, Color: {args.color}</p>
        <p>Line Height: {args.lineHeight}, Font: {args.fontFamily}, Align: {args.align}</p>
      </div>
    </div>,
  args: {
    text: 'Change the controls above and watch this text transform! Try different sizes, weights, colors, and alignments.',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'sans'
  },
  parameters: {
    layout: 'padded'
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal',
    align: 'left',
    fontFamily: 'sans',
    maxWidth: 'none'
  },
  render: args => {
    const {
      color,
      weight,
      lineHeight,
      align,
      fontFamily,
      maxWidth
    } = args;
    return <div className="space-y-4">
        <div>
          <Paragraph size="xs" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} maxWidth={maxWidth} text="Extra Small (12px) - This contemporary kitchen remodel demonstrates the xs size variant." />
          <p className="text-xs text-muted-foreground mt-1">size="xs"</p>
        </div>
        <div>
          <Paragraph size="sm" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} maxWidth={maxWidth} text="Small (14px) - This luxury bathroom renovation demonstrates the sm size variant." />
          <p className="text-xs text-muted-foreground mt-1">size="sm"</p>
        </div>
        <div>
          <Paragraph size="base" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} maxWidth={maxWidth} text="Base (16px) - This award-winning living space design demonstrates the base size variant, which is the default." />
          <p className="text-xs text-muted-foreground mt-1">size="base" (default)</p>
        </div>
        <div>
          <Paragraph size="lg" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} maxWidth={maxWidth} text="Large (18px) - This custom millwork project demonstrates the lg size variant for emphasis." />
          <p className="text-xs text-muted-foreground mt-1">size="lg"</p>
        </div>
        <div>
          <Paragraph size="xl" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} maxWidth={maxWidth} text="Extra Large (20px) - This premium material selection demonstrates the xl size variant." />
          <p className="text-xs text-muted-foreground mt-1">size="xl"</p>
        </div>
        <div>
          <Paragraph size="2xl" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} maxWidth={maxWidth} text="2X Large (24px) - This sophisticated transformation demonstrates the 2xl size variant." />
          <p className="text-xs text-muted-foreground mt-1">size="2xl"</p>
        </div>
      </div>;
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'size', 'maxWidth', 'align', 'fontFamily']
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
    weight: 'normal',
    lineHeight: 'normal',
    align: 'left',
    fontFamily: 'sans',
    maxWidth: 'none',
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6'
  },
  render: args => <div className="space-y-4">
      <div>
        <Paragraph {...args} color="default" text="Default Color - This contemporary kitchen transformation uses the default text color for primary content." />
        <p className="text-xs text-muted-foreground mt-1">color="default"</p>
      </div>
      <div>
        <Paragraph {...args} color="muted" text="Muted Color - This luxury bathroom renovation uses muted text color for secondary content." />
        <p className="text-xs text-muted-foreground mt-1">color="muted"</p>
      </div>
      <div>
        <Paragraph {...args} color="accent" text="Accent Color - This award-winning design uses the accent/brand color for highlighted content." />
        <p className="text-xs text-muted-foreground mt-1">color="accent"</p>
      </div>
    </div>,
  decorators: [(Story, context) => {
    const {
      defaultColor,
      mutedColor,
      accentColor
    } = context.args;
    if (defaultColor) {
      document.documentElement.style.setProperty('--paragraph-default-color', defaultColor);
    }
    if (mutedColor) {
      document.documentElement.style.setProperty('--paragraph-muted-color', mutedColor);
    }
    if (accentColor) {
      document.documentElement.style.setProperty('--paragraph-accent-color', accentColor);
    }
    return Story();
  }],
  parameters: {
    layout: 'padded',
    controls: {
      include: ['defaultColor', 'mutedColor', 'accentColor']
    }
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
    color: 'default',
    lineHeight: 'normal',
    align: 'left',
    fontFamily: 'sans',
    maxWidth: 'none'
  },
  render: args => <div className="space-y-4">
      <div>
        <Paragraph {...args} weight="normal" text="Normal Weight - This contemporary kitchen transformation demonstrates normal font weight for regular text." />
        <p className="text-xs text-muted-foreground mt-1">weight="normal" (default)</p>
      </div>
      <div>
        <Paragraph {...args} weight="medium" text="Medium Weight - This luxury bathroom renovation demonstrates medium font weight for emphasis." />
        <p className="text-xs text-muted-foreground mt-1">weight="medium"</p>
      </div>
      <div>
        <Paragraph {...args} weight="semibold" text="Semibold Weight - This custom millwork project demonstrates semibold font weight for strong emphasis." />
        <p className="text-xs text-muted-foreground mt-1">weight="semibold"</p>
      </div>
      <div>
        <Paragraph {...args} weight="bold" text="Bold Weight - This award-winning design demonstrates bold font weight for maximum emphasis." />
        <p className="text-xs text-muted-foreground mt-1">weight="bold"</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily']
    }
  }
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
    color: 'default',
    weight: 'normal',
    align: 'left',
    fontFamily: 'sans',
    maxWidth: 'none'
  },
  render: args => <div className="space-y-6">
      <div>
        <Paragraph {...args} lineHeight="tight" text="Tight Line Height - This contemporary kitchen remodel demonstrates tight line height which reduces the space between lines for a more compact appearance in luxury design presentations." />
        <p className="text-xs text-muted-foreground mt-1">lineHeight="tight"</p>
      </div>
      <div>
        <Paragraph {...args} lineHeight="normal" text="Normal Line Height - This award-winning bathroom renovation demonstrates normal line height which provides balanced spacing between lines for good readability in premium design content." />
        <p className="text-xs text-muted-foreground mt-1">lineHeight="normal" (default)</p>
      </div>
      <div>
        <Paragraph {...args} lineHeight="relaxed" text="Relaxed Line Height - This custom millwork project demonstrates relaxed line height which increases the space between lines for improved readability and a more open, airy feeling in sophisticated design portfolios." />
        <p className="text-xs text-muted-foreground mt-1">lineHeight="relaxed"</p>
      </div>
      <div>
        <Paragraph {...args} lineHeight="loose" text="Loose Line Height - This luxury living space transformation demonstrates loose line height which provides maximum space between lines for enhanced readability in high-end interior design presentations." />
        <p className="text-xs text-muted-foreground mt-1">lineHeight="loose"</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily']
    }
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal',
    fontFamily: 'sans'
  },
  render: args => <div className="w-full space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Max Width Variants</h3>
        <div className="space-y-4">
          <div>
            <Paragraph {...args} maxWidth="none" className="bg-muted/20 p-4" text="No Max Width - This contemporary kitchen transformation has no width constraint and will expand to fill the full width of its container for bold design statements." />
            <p className="text-xs text-muted-foreground mt-1">maxWidth="none"</p>
          </div>
          <div>
            <Paragraph {...args} maxWidth="prose" className="bg-muted/20 p-4" text="Prose Width - This luxury bathroom renovation is constrained to an optimal reading width (around 65 characters) which is considered ideal for readability in sophisticated design content." />
            <p className="text-xs text-muted-foreground mt-1">maxWidth="prose"</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Text Alignment</h3>
        <div className="space-y-4">
          <div>
            <Paragraph {...args} align="left" className="bg-muted/20 p-4" text="Left Aligned - This award-winning living space is aligned to the left, which is the default and most common alignment for premium design content." />
            <p className="text-xs text-muted-foreground mt-1">align="left" (default)</p>
          </div>
          <div>
            <Paragraph {...args} align="center" className="bg-muted/20 p-4" text="Center Aligned - This custom millwork project is center aligned, often used for elegant headings or special design callouts." />
            <p className="text-xs text-muted-foreground mt-1">align="center"</p>
          </div>
          <div>
            <Paragraph {...args} align="right" className="bg-muted/20 p-4" text="Right Aligned - This luxury material selection is right aligned, less common but useful for sophisticated design layouts." />
            <p className="text-xs text-muted-foreground mt-1">align="right"</p>
          </div>
          <div>
            <Paragraph {...args} align="justify" className="bg-muted/20 p-4" text="Justified Text - This premium interior transformation uses justified alignment, where text is stretched to align with both left and right margins, creating even edges for formal design presentations." />
            <p className="text-xs text-muted-foreground mt-1">align="justify"</p>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily']
    }
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal',
    align: 'left',
    maxWidth: 'none'
  },
  render: args => <div className="space-y-4">
      <div>
        <Paragraph {...args} fontFamily="sans" text="Sans Serif - This contemporary kitchen remodel uses a clean, modern sans-serif font family. It's the default choice for luxury interior design content and provides excellent readability." />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="sans" (default)</p>
      </div>
      <div>
        <Paragraph {...args} fontFamily="serif" text="Serif - This award-winning bathroom transformation uses an elegant serif font family with decorative strokes that give a sophisticated, formal feel perfect for luxury design presentations." />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="serif"</p>
      </div>
      <div>
        <Paragraph {...args} fontFamily="mono" text="Monospace - This custom millwork project uses a monospace font family where each character takes the same width. Perfect for technical specifications and precise measurements in design documentation." />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="mono"</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily']
    }
  }
}`,...y.parameters?.docs?.source}}};const M=["Docs","Primary","TestControls","AllSizes","ColorVariants","WeightVariants","LineHeightVariants","LayoutVariants","FontFamilyVariants"];export{u as AllSizes,g as ColorVariants,m as Docs,y as FontFamilyVariants,f as LayoutVariants,p as LineHeightVariants,c as Primary,h as TestControls,x as WeightVariants,M as __namedExportsOrder,A as default};
