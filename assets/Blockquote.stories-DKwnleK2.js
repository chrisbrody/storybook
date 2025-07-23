import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as q}from"./utils-CBfrqCZ4.js";const o=({text:t,size:l="base",weight:a="normal",color:r="default",lineHeight:s="normal",maxWidth:i="none",align:n="left",fontFamily:d="serif",variant:B="default",borderPosition:F="left",borderColor:c="default",customBorderColor:j,defaultColor:T,mutedColor:P,accentColor:k,className:W,...z})=>{const V={sm:"text-sm",base:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl"},H={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},S={default:"text-foreground text-gray-900 dark:text-gray-100",muted:"text-muted-foreground text-gray-600 dark:text-gray-400",subtle:"text-muted-foreground/70 text-gray-500 dark:text-gray-500",accent:"text-primary text-blue-600 dark:text-blue-400"},A={tight:"leading-5",normal:"leading-7",relaxed:"leading-8",loose:"leading-9"},E={none:"",prose:"max-w-prose",sm:"max-w-sm",lg:"max-w-lg"},D={left:"text-left",center:"text-center",right:"text-right"},L={sans:"font-sans",serif:"font-serif",mono:"font-mono",inter:"font-[Inter]",montserrat:"font-[Montserrat]",poppins:"font-[Poppins]",playfair:"font-[Playfair_Display]",dancing:"font-[Dancing_Script]",greatvibes:"font-[Great_Vibes]",pacifico:"font-[Pacifico]",anton:"font-[Anton]",bebas:"font-[Bebas_Neue]",sourcecodepro:"font-[Source_Code_Pro]"},N={default:"border-border",primary:"border-primary",secondary:"border-secondary",accent:"border-accent",muted:"border-muted-foreground",custom:""},M={left:`border-l-4 ${N[c]} pl-6`,top:`border-t-4 ${N[c]} pt-6`,none:""},_=`border-l-2 ${N[c]} pl-6 italic`;let m;r==="default"&&T?m=T:r==="muted"&&P?m=P:r==="accent"&&k&&(m=k);const u={};m&&(u.color=m),c==="custom"&&j&&(u.borderColor=j);const O=()=>B==="sidebar"?_:q("mt-6 italic",M[F]);return e.jsx("blockquote",{className:q(O(),V[l],H[a],S[r],A[s],E[i],D[n],L[d],W),style:Object.keys(u).length>0?u:void 0,...z,children:t})};o.__docgenInfo={description:"",methods:[],displayName:"Blockquote",props:{text:{required:!0,tsType:{name:"string"},description:"The blockquote text content"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'base' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},description:"Size variant for the blockquote text",defaultValue:{value:"'base'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"Font weight variant",defaultValue:{value:"'normal'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'muted' | 'subtle' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'subtle'"},{name:"literal",value:"'accent'"}]},description:"Color variant for the blockquote text",defaultValue:{value:"'default'",computed:!1}},lineHeight:{required:!1,tsType:{name:"union",raw:"'tight' | 'normal' | 'relaxed' | 'loose'",elements:[{name:"literal",value:"'tight'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'relaxed'"},{name:"literal",value:"'loose'"}]},description:"Line height variant",defaultValue:{value:"'normal'",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"'none' | 'prose' | 'sm' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'prose'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"Maximum width constraint",defaultValue:{value:"'none'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Text alignment",defaultValue:{value:"'left'",computed:!1}},fontFamily:{required:!1,tsType:{name:"union",raw:"'sans' | 'serif' | 'mono' | 'inter' | 'playfair' | 'montserrat' | 'poppins' | 'dancing' | 'greatvibes' | 'pacifico' | 'anton' | 'bebas' | 'sourcecodepro'",elements:[{name:"literal",value:"'sans'"},{name:"literal",value:"'serif'"},{name:"literal",value:"'mono'"},{name:"literal",value:"'inter'"},{name:"literal",value:"'playfair'"},{name:"literal",value:"'montserrat'"},{name:"literal",value:"'poppins'"},{name:"literal",value:"'dancing'"},{name:"literal",value:"'greatvibes'"},{name:"literal",value:"'pacifico'"},{name:"literal",value:"'anton'"},{name:"literal",value:"'bebas'"},{name:"literal",value:"'sourcecodepro'"}]},description:"Font family",defaultValue:{value:"'serif'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'sidebar'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'sidebar'"}]},description:"Border/sidebar style variant",defaultValue:{value:"'default'",computed:!1}},borderPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'top' | 'none'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'top'"},{name:"literal",value:"'none'"}]},description:"Border position (for default variant)",defaultValue:{value:"'left'",computed:!1}},borderColor:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'accent' | 'muted' | 'custom'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'custom'"}]},description:"Border/sidebar color",defaultValue:{value:"'default'",computed:!1}},customBorderColor:{required:!1,tsType:{name:"string"},description:"Custom border color (when borderColor is 'custom')"},defaultColor:{required:!1,tsType:{name:"string"},description:"Custom color for default variant (docs only)"},mutedColor:{required:!1,tsType:{name:"string"},description:"Custom color for muted variant (docs only)"},accentColor:{required:!1,tsType:{name:"string"},description:"Custom color for accent variant (docs only)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};const $={title:"Components/Typography/Blockquote",component:o,parameters:{layout:"centered",docs:{story:{inline:!0,height:"auto"}}},tags:["autodocs"],argTypes:{text:{control:{type:"text"},description:"The blockquote text content.",table:{type:{summary:"string"}}},size:{control:"select",options:["sm","base","lg","xl","2xl"],description:"Size variant for the blockquote text.",table:{type:{summary:"string"},defaultValue:{summary:"base"}}},weight:{control:"select",options:["normal","medium","semibold","bold"],description:"Font weight variant.",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},color:{control:"select",options:["default","muted","subtle","accent"],description:"Color variant for the blockquote text.",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},lineHeight:{control:"select",options:["tight","normal","relaxed","loose"],description:"Line height variant for readability.",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},maxWidth:{control:"select",options:["none","prose","sm","lg"],description:"Maximum width constraint for readability.",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},align:{control:"select",options:["left","center","right"],description:"Text alignment.",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},fontFamily:{control:"select",options:["sans","serif","mono","inter","playfair","montserrat","poppins","dancing","greatvibes","pacifico","anton","bebas","sourcecodepro"],description:"Font family variant.",table:{type:{summary:"string"},defaultValue:{summary:"serif"}}},variant:{control:"select",options:["default","sidebar"],description:"Style variant - default uses configurable borders, sidebar uses shadcn/ui style.",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},borderPosition:{control:"select",options:["left","top","none"],description:"Position of the decorative border (applies to default variant only).",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},borderColor:{control:"select",options:["default","primary","secondary","accent","muted","custom"],description:"Color of the border/sidebar.",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},customBorderColor:{control:{type:"color"},description:'Custom border color (when borderColor is set to "custom").',table:{type:{summary:"string"},defaultValue:{summary:"#3b82f6"}}},defaultColor:{control:{type:"color"},description:"Custom color for default variant. Overrides theme default color.",table:{type:{summary:"string"},defaultValue:{summary:"#000000"}}},mutedColor:{control:{type:"color"},description:"Custom color for muted variant. Overrides theme muted color.",table:{type:{summary:"string"},defaultValue:{summary:"#6b7280"}}},accentColor:{control:{type:"color"},description:"Custom color for accent variant. Overrides theme accent color.",table:{type:{summary:"string"},defaultValue:{summary:"#3b82f6"}}},className:{control:"text",description:"Additional Tailwind CSS classes for custom styling.",table:{type:{summary:"string"}}}},args:{text:`"The transformation of this Minnetonka residence exemplifies our commitment to creating spaces that seamlessly blend luxury with functionality, resulting in an environment that truly reflects our clients' sophisticated lifestyle."`,size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"none",align:"left",fontFamily:"serif",variant:"default",borderPosition:"left",borderColor:"default",customBorderColor:"#3b82f6",defaultColor:"#000000",mutedColor:"#6b7280",accentColor:"#3b82f6"}},f={args:{text:'"This blockquote component showcases testimonials and highlighted quotes with elegant typography and customizable styling options."',size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"prose",align:"left",fontFamily:"serif",variant:"default",borderPosition:"left",borderColor:"default",customBorderColor:"#3b82f6",defaultColor:"#000000",mutedColor:"#6b7280",accentColor:"#3b82f6"},decorators:[(t,l)=>{const{defaultColor:a,mutedColor:r,accentColor:s}=l.args;return a&&document.documentElement.style.setProperty("--blockquote-default-color",a),r&&document.documentElement.style.setProperty("--blockquote-muted-color",r),s&&document.documentElement.style.setProperty("--blockquote-accent-color",s),t()}]},x={render:t=>e.jsx(o,{...t}),args:{text:'"Working with Eminent Interior Design transformed not just our space, but our entire lifestyle. Their attention to detail and understanding of luxury living is unmatched."',size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"none",align:"left",fontFamily:"serif",variant:"default",borderPosition:"left",borderColor:"default",customBorderColor:"#3b82f6"},parameters:{controls:{exclude:["defaultColor","mutedColor","accentColor","className"]}}},p={render:t=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 border border-gray-200 rounded",children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Test all controls below:"}),e.jsx(o,{...t})]}),e.jsxs("div",{className:"text-xs text-gray-500",children:[e.jsx("p",{children:e.jsx("strong",{children:"Current settings:"})}),e.jsxs("p",{children:["Size: ",t.size,", Weight: ",t.weight,", Color: ",t.color]}),e.jsxs("p",{children:["Line Height: ",t.lineHeight,", Font: ",t.fontFamily,", Align: ",t.align]}),e.jsxs("p",{children:["Variant: ",t.variant,", Border Position: ",t.borderPosition,", Border Color: ",t.borderColor]})]})]}),args:{text:'"Change the controls above and watch this blockquote transform! Try different variants, sizes, weights, colors, and border options."',size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"none",align:"left",fontFamily:"serif",variant:"default",borderPosition:"left",borderColor:"default",customBorderColor:"#3b82f6"},parameters:{layout:"padded"}},h={args:{color:"default",weight:"normal",lineHeight:"normal",align:"left",fontFamily:"serif",borderPosition:"left",maxWidth:"none"},render:t=>{const{color:l,weight:a,lineHeight:r,align:s,fontFamily:i,borderPosition:n,maxWidth:d}=t;return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(o,{size:"sm",color:l,weight:a,lineHeight:r,align:s,fontFamily:i,borderPosition:n,maxWidth:d,text:'"Small (14px) - This luxury bathroom renovation exceeded our expectations in every way."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="sm"'})]}),e.jsxs("div",{children:[e.jsx(o,{size:"base",color:l,weight:a,lineHeight:r,align:s,fontFamily:i,borderPosition:n,maxWidth:d,text:'"Base (16px) - The contemporary kitchen transformation perfectly balances style and functionality for our family."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="base" (default)'})]}),e.jsxs("div",{children:[e.jsx(o,{size:"lg",color:l,weight:a,lineHeight:r,align:s,fontFamily:i,borderPosition:n,maxWidth:d,text:'"Large (18px) - This award-winning living space design has become the heart of our home."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="lg"'})]}),e.jsxs("div",{children:[e.jsx(o,{size:"xl",color:l,weight:a,lineHeight:r,align:s,fontFamily:i,borderPosition:n,maxWidth:d,text:'"Extra Large (20px) - The custom millwork and premium materials showcase true craftsmanship."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="xl"'})]}),e.jsxs("div",{children:[e.jsx(o,{size:"2xl",color:l,weight:a,lineHeight:r,align:s,fontFamily:i,borderPosition:n,maxWidth:d,text:'"2X Large (24px) - A sophisticated transformation that reflects our luxury lifestyle."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="2xl"'})]})]})},parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","text","className","size","maxWidth","align","fontFamily","borderPosition"]}}},g={args:{size:"base",weight:"normal",lineHeight:"normal",align:"left",fontFamily:"serif",borderPosition:"left",maxWidth:"none",defaultColor:"#000000",mutedColor:"#6b7280",accentColor:"#3b82f6"},render:t=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(o,{...t,color:"default",text:'"Default Color - This contemporary kitchen transformation showcases our commitment to excellence in luxury design."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'color="default"'})]}),e.jsxs("div",{children:[e.jsx(o,{...t,color:"muted",text:'"Muted Color - The attention to detail in this bathroom renovation is simply remarkable and sophisticated."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'color="muted"'})]}),e.jsxs("div",{children:[e.jsx(o,{...t,color:"accent",text:'"Accent Color - This award-winning design has transformed our home into a true masterpiece of luxury living."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'color="accent"'})]})]}),decorators:[(t,l)=>{const{defaultColor:a,mutedColor:r,accentColor:s}=l.args;return a&&document.documentElement.style.setProperty("--blockquote-default-color",a),r&&document.documentElement.style.setProperty("--blockquote-muted-color",r),s&&document.documentElement.style.setProperty("--blockquote-accent-color",s),t()}],parameters:{layout:"padded",controls:{include:["defaultColor","mutedColor","accentColor"]}}},y={args:{size:"base",color:"default",weight:"normal",lineHeight:"normal",align:"left",fontFamily:"serif",maxWidth:"none",borderColor:"default",customBorderColor:"#3b82f6"},render:t=>e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Style Variants"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(o,{...t,variant:"default",borderPosition:"left",text:'"Default Variant - This contemporary kitchen transformation uses the traditional blockquote style with customizable border positions and colors."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'variant="default"'})]}),e.jsxs("div",{children:[e.jsx(o,{...t,variant:"sidebar",text:'"Sidebar Variant - This luxury bathroom renovation uses the shadcn/ui inspired sidebar style with a clean left border."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'variant="sidebar"'})]})]})]})}),parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","text","className","variant","borderPosition"]}}},b={args:{size:"base",color:"default",weight:"normal",lineHeight:"normal",align:"left",fontFamily:"serif",variant:"sidebar",maxWidth:"none",customBorderColor:"#8b5cf6"},render:t=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(o,{...t,borderColor:"default",text:'"Default Border - This contemporary kitchen uses the theme default border color for subtle emphasis."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'borderColor="default"'})]}),e.jsxs("div",{children:[e.jsx(o,{...t,borderColor:"primary",text:'"Primary Border - This luxury renovation uses the primary theme color for brand consistency."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'borderColor="primary"'})]}),e.jsxs("div",{children:[e.jsx(o,{...t,borderColor:"accent",text:'"Accent Border - This award-winning design uses the accent color for highlighted testimonials."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'borderColor="accent"'})]}),e.jsxs("div",{children:[e.jsx(o,{...t,borderColor:"muted",text:'"Muted Border - This sophisticated transformation uses a muted border for understated elegance."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'borderColor="muted"'})]}),e.jsxs("div",{children:[e.jsx(o,{...t,borderColor:"custom",text:'"Custom Border - This premium project showcases a custom purple border color for unique branding."'}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:['borderColor="custom" (customBorderColor="',t.customBorderColor,'")']})]})]}),parameters:{layout:"padded",controls:{include:["customBorderColor"]}}},v={args:{size:"base",color:"default",weight:"normal",lineHeight:"normal",align:"left",fontFamily:"serif",maxWidth:"none"},render:t=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx(o,{...t,borderPosition:"left",text:'"Left Border - This contemporary kitchen remodel features an elegant left border that frames the testimonial beautifully."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'borderPosition="left" (default)'})]}),e.jsxs("div",{children:[e.jsx(o,{...t,borderPosition:"top",text:'"Top Border - This luxury bathroom transformation uses a top border design that creates a sophisticated header effect."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'borderPosition="top"'})]}),e.jsxs("div",{children:[e.jsx(o,{...t,borderPosition:"none",text:'"No Border - This award-winning living space design stands elegantly on its own without decorative borders."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'borderPosition="none"'})]})]}),parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","text","className","borderPosition","lineHeight","maxWidth","align","fontFamily"]}}},C={args:{size:"base",color:"default",weight:"normal",lineHeight:"normal",align:"left",borderPosition:"left",maxWidth:"none"},render:t=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(o,{...t,fontFamily:"serif",text:'"Serif Font - This contemporary kitchen transformation uses elegant serif typography that conveys sophistication and timeless luxury."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'fontFamily="serif" (default)'})]}),e.jsxs("div",{children:[e.jsx(o,{...t,fontFamily:"sans",text:'"Sans Serif Font - This award-winning bathroom renovation uses clean, modern sans-serif typography for contemporary appeal."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'fontFamily="sans"'})]}),e.jsxs("div",{children:[e.jsx(o,{...t,fontFamily:"playfair",text:'"Playfair Display - This luxury living space transformation uses elegant Playfair Display for a refined, editorial feel."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'fontFamily="playfair"'})]})]}),parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","text","className","weight","lineHeight","maxWidth","align","fontFamily","borderPosition"]}}},w={args:{size:"base",color:"default",weight:"normal",lineHeight:"normal",fontFamily:"serif",borderPosition:"left"},render:t=>e.jsxs("div",{className:"w-full space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Text Alignment"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(o,{...t,align:"left",className:"bg-muted/20 p-4",text:'"Left Aligned - This award-winning kitchen design testimonial uses left alignment, which is the standard for most luxury design content."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'align="left" (default)'})]}),e.jsxs("div",{children:[e.jsx(o,{...t,align:"center",className:"bg-muted/20 p-4",text:'"Center Aligned - This elegant bathroom transformation quote is center aligned for dramatic emphasis and visual impact."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'align="center"'})]}),e.jsxs("div",{children:[e.jsx(o,{...t,align:"right",className:"bg-muted/20 p-4",text:'"Right Aligned - This sophisticated living space testimonial uses right alignment for unique layout compositions."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'align="right"'})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Max Width Variants"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(o,{...t,maxWidth:"none",className:"bg-muted/20 p-4",text:'"No Max Width - This contemporary transformation testimonial has no width constraint and expands to fill the available space for bold design statements."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'maxWidth="none"'})]}),e.jsxs("div",{children:[e.jsx(o,{...t,maxWidth:"prose",className:"bg-muted/20 p-4",text:'"Prose Width - This luxury renovation quote is constrained to optimal reading width (around 65 characters) for enhanced readability and elegant presentation."'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'maxWidth="prose"'})]})]})]})]}),parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","text","className","weight","lineHeight","maxWidth","align","fontFamily","borderPosition"]}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    text: '"This blockquote component showcases testimonials and highlighted quotes with elegant typography and customizable styling options."',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'prose',
    align: 'left',
    fontFamily: 'serif',
    variant: 'default',
    borderPosition: 'left',
    borderColor: 'default',
    customBorderColor: '#3b82f6',
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
      document.documentElement.style.setProperty('--blockquote-default-color', defaultColor);
    }
    if (mutedColor) {
      document.documentElement.style.setProperty('--blockquote-muted-color', mutedColor);
    }
    if (accentColor) {
      document.documentElement.style.setProperty('--blockquote-accent-color', accentColor);
    }
    return Story();
  }]
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Blockquote {...args} />,
  args: {
    text: '"Working with Eminent Interior Design transformed not just our space, but our entire lifestyle. Their attention to detail and understanding of luxury living is unmatched."',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'serif',
    variant: 'default',
    borderPosition: 'left',
    borderColor: 'default',
    customBorderColor: '#3b82f6'
  },
  parameters: {
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'className']
    }
  }
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
      <div className="p-4 border border-gray-200 rounded">
        <h3 className="text-sm font-semibold mb-2">Test all controls below:</h3>
        <Blockquote {...args} />
      </div>
      <div className="text-xs text-gray-500">
        <p><strong>Current settings:</strong></p>
        <p>Size: {args.size}, Weight: {args.weight}, Color: {args.color}</p>
        <p>Line Height: {args.lineHeight}, Font: {args.fontFamily}, Align: {args.align}</p>
        <p>Variant: {args.variant}, Border Position: {args.borderPosition}, Border Color: {args.borderColor}</p>
      </div>
    </div>,
  args: {
    text: '"Change the controls above and watch this blockquote transform! Try different variants, sizes, weights, colors, and border options."',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal',
    maxWidth: 'none',
    align: 'left',
    fontFamily: 'serif',
    variant: 'default',
    borderPosition: 'left',
    borderColor: 'default',
    customBorderColor: '#3b82f6'
  },
  parameters: {
    layout: 'padded'
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal',
    align: 'left',
    fontFamily: 'serif',
    borderPosition: 'left',
    maxWidth: 'none'
  },
  render: args => {
    const {
      color,
      weight,
      lineHeight,
      align,
      fontFamily,
      borderPosition,
      maxWidth
    } = args;
    return <div className="space-y-6">
        <div>
          <Blockquote size="sm" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} borderPosition={borderPosition} maxWidth={maxWidth} text='"Small (14px) - This luxury bathroom renovation exceeded our expectations in every way."' />
          <p className="text-xs text-muted-foreground mt-1">size="sm"</p>
        </div>
        <div>
          <Blockquote size="base" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} borderPosition={borderPosition} maxWidth={maxWidth} text='"Base (16px) - The contemporary kitchen transformation perfectly balances style and functionality for our family."' />
          <p className="text-xs text-muted-foreground mt-1">size="base" (default)</p>
        </div>
        <div>
          <Blockquote size="lg" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} borderPosition={borderPosition} maxWidth={maxWidth} text='"Large (18px) - This award-winning living space design has become the heart of our home."' />
          <p className="text-xs text-muted-foreground mt-1">size="lg"</p>
        </div>
        <div>
          <Blockquote size="xl" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} borderPosition={borderPosition} maxWidth={maxWidth} text='"Extra Large (20px) - The custom millwork and premium materials showcase true craftsmanship."' />
          <p className="text-xs text-muted-foreground mt-1">size="xl"</p>
        </div>
        <div>
          <Blockquote size="2xl" color={color} weight={weight} lineHeight={lineHeight} align={align} fontFamily={fontFamily} borderPosition={borderPosition} maxWidth={maxWidth} text='"2X Large (24px) - A sophisticated transformation that reflects our luxury lifestyle."' />
          <p className="text-xs text-muted-foreground mt-1">size="2xl"</p>
        </div>
      </div>;
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'size', 'maxWidth', 'align', 'fontFamily', 'borderPosition']
    }
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
    weight: 'normal',
    lineHeight: 'normal',
    align: 'left',
    fontFamily: 'serif',
    borderPosition: 'left',
    maxWidth: 'none',
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6'
  },
  render: args => <div className="space-y-6">
      <div>
        <Blockquote {...args} color="default" text='"Default Color - This contemporary kitchen transformation showcases our commitment to excellence in luxury design."' />
        <p className="text-xs text-muted-foreground mt-1">color="default"</p>
      </div>
      <div>
        <Blockquote {...args} color="muted" text='"Muted Color - The attention to detail in this bathroom renovation is simply remarkable and sophisticated."' />
        <p className="text-xs text-muted-foreground mt-1">color="muted"</p>
      </div>
      <div>
        <Blockquote {...args} color="accent" text='"Accent Color - This award-winning design has transformed our home into a true masterpiece of luxury living."' />
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
      document.documentElement.style.setProperty('--blockquote-default-color', defaultColor);
    }
    if (mutedColor) {
      document.documentElement.style.setProperty('--blockquote-muted-color', mutedColor);
    }
    if (accentColor) {
      document.documentElement.style.setProperty('--blockquote-accent-color', accentColor);
    }
    return Story();
  }],
  parameters: {
    layout: 'padded',
    controls: {
      include: ['defaultColor', 'mutedColor', 'accentColor']
    }
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal',
    align: 'left',
    fontFamily: 'serif',
    maxWidth: 'none',
    borderColor: 'default',
    customBorderColor: '#3b82f6'
  },
  render: args => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Style Variants</h3>
        <div className="space-y-6">
          <div>
            <Blockquote {...args} variant="default" borderPosition="left" text='"Default Variant - This contemporary kitchen transformation uses the traditional blockquote style with customizable border positions and colors."' />
            <p className="text-xs text-muted-foreground mt-1">variant="default"</p>
          </div>
          <div>
            <Blockquote {...args} variant="sidebar" text='"Sidebar Variant - This luxury bathroom renovation uses the shadcn/ui inspired sidebar style with a clean left border."' />
            <p className="text-xs text-muted-foreground mt-1">variant="sidebar"</p>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'variant', 'borderPosition']
    }
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal',
    align: 'left',
    fontFamily: 'serif',
    variant: 'sidebar',
    maxWidth: 'none',
    customBorderColor: '#8b5cf6'
  },
  render: args => <div className="space-y-6">
      <div>
        <Blockquote {...args} borderColor="default" text='"Default Border - This contemporary kitchen uses the theme default border color for subtle emphasis."' />
        <p className="text-xs text-muted-foreground mt-1">borderColor="default"</p>
      </div>
      <div>
        <Blockquote {...args} borderColor="primary" text='"Primary Border - This luxury renovation uses the primary theme color for brand consistency."' />
        <p className="text-xs text-muted-foreground mt-1">borderColor="primary"</p>
      </div>
      <div>
        <Blockquote {...args} borderColor="accent" text='"Accent Border - This award-winning design uses the accent color for highlighted testimonials."' />
        <p className="text-xs text-muted-foreground mt-1">borderColor="accent"</p>
      </div>
      <div>
        <Blockquote {...args} borderColor="muted" text='"Muted Border - This sophisticated transformation uses a muted border for understated elegance."' />
        <p className="text-xs text-muted-foreground mt-1">borderColor="muted"</p>
      </div>
      <div>
        <Blockquote {...args} borderColor="custom" text='"Custom Border - This premium project showcases a custom purple border color for unique branding."' />
        <p className="text-xs text-muted-foreground mt-1">borderColor="custom" (customBorderColor="{args.customBorderColor}")</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      include: ['customBorderColor']
    }
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal',
    align: 'left',
    fontFamily: 'serif',
    maxWidth: 'none'
  },
  render: args => <div className="space-y-8">
      <div>
        <Blockquote {...args} borderPosition="left" text='"Left Border - This contemporary kitchen remodel features an elegant left border that frames the testimonial beautifully."' />
        <p className="text-xs text-muted-foreground mt-1">borderPosition="left" (default)</p>
      </div>
      <div>
        <Blockquote {...args} borderPosition="top" text='"Top Border - This luxury bathroom transformation uses a top border design that creates a sophisticated header effect."' />
        <p className="text-xs text-muted-foreground mt-1">borderPosition="top"</p>
      </div>
      <div>
        <Blockquote {...args} borderPosition="none" text='"No Border - This award-winning living space design stands elegantly on its own without decorative borders."' />
        <p className="text-xs text-muted-foreground mt-1">borderPosition="none"</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'borderPosition', 'lineHeight', 'maxWidth', 'align', 'fontFamily']
    }
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal',
    align: 'left',
    borderPosition: 'left',
    maxWidth: 'none'
  },
  render: args => <div className="space-y-6">
      <div>
        <Blockquote {...args} fontFamily="serif" text='"Serif Font - This contemporary kitchen transformation uses elegant serif typography that conveys sophistication and timeless luxury."' />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="serif" (default)</p>
      </div>
      <div>
        <Blockquote {...args} fontFamily="sans" text='"Sans Serif Font - This award-winning bathroom renovation uses clean, modern sans-serif typography for contemporary appeal."' />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="sans"</p>
      </div>
      <div>
        <Blockquote {...args} fontFamily="playfair" text='"Playfair Display - This luxury living space transformation uses elegant Playfair Display for a refined, editorial feel."' />
        <p className="text-xs text-muted-foreground mt-1">fontFamily="playfair"</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily', 'borderPosition']
    }
  }
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal',
    fontFamily: 'serif',
    borderPosition: 'left'
  },
  render: args => <div className="w-full space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Text Alignment</h3>
        <div className="space-y-6">
          <div>
            <Blockquote {...args} align="left" className="bg-muted/20 p-4" text='"Left Aligned - This award-winning kitchen design testimonial uses left alignment, which is the standard for most luxury design content."' />
            <p className="text-xs text-muted-foreground mt-1">align="left" (default)</p>
          </div>
          <div>
            <Blockquote {...args} align="center" className="bg-muted/20 p-4" text='"Center Aligned - This elegant bathroom transformation quote is center aligned for dramatic emphasis and visual impact."' />
            <p className="text-xs text-muted-foreground mt-1">align="center"</p>
          </div>
          <div>
            <Blockquote {...args} align="right" className="bg-muted/20 p-4" text='"Right Aligned - This sophisticated living space testimonial uses right alignment for unique layout compositions."' />
            <p className="text-xs text-muted-foreground mt-1">align="right"</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Max Width Variants</h3>
        <div className="space-y-6">
          <div>
            <Blockquote {...args} maxWidth="none" className="bg-muted/20 p-4" text='"No Max Width - This contemporary transformation testimonial has no width constraint and expands to fill the available space for bold design statements."' />
            <p className="text-xs text-muted-foreground mt-1">maxWidth="none"</p>
          </div>
          <div>
            <Blockquote {...args} maxWidth="prose" className="bg-muted/20 p-4" text='"Prose Width - This luxury renovation quote is constrained to optimal reading width (around 65 characters) for enhanced readability and elegant presentation."' />
            <p className="text-xs text-muted-foreground mt-1">maxWidth="prose"</p>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily', 'borderPosition']
    }
  }
}`,...w.parameters?.docs?.source}}};const X=["Docs","Primary","TestControls","AllSizes","ColorVariants","VariantComparison","BorderColorVariants","BorderVariants","FontFamilyVariants","LayoutVariants"];export{h as AllSizes,b as BorderColorVariants,v as BorderVariants,g as ColorVariants,f as Docs,C as FontFamilyVariants,w as LayoutVariants,x as Primary,p as TestControls,y as VariantComparison,X as __namedExportsOrder,$ as default};
