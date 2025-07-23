import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as V}from"./utils-CBfrqCZ4.js";const r=({text:a,size:t="base",weight:s="normal",color:o="default",lineHeight:i="normal",maxWidth:v="none",align:b="left",fontFamily:w="sans",defaultColor:x,mutedColor:f,accentColor:y,className:C,...N})=>{const j={xs:"text-xs",sm:"text-sm",base:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl"},z={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},T={default:"text-foreground",muted:"text-muted-foreground",subtle:"text-muted-foreground/70",accent:"text-primary"},P={tight:"leading-5",normal:"leading-7",relaxed:"leading-8",loose:"leading-9"},H={none:"",prose:"max-w-prose",sm:"max-w-sm",lg:"max-w-lg"},W={left:"text-left",center:"text-center",right:"text-right",justify:"text-justify"},F={sans:"font-sans",serif:"font-serif",mono:"font-mono"};let l;o==="default"&&x?l=x:o==="muted"&&f?l=f:o==="accent"&&y&&(l=y);const S=l?{color:l}:void 0;return e.jsx("p",{className:V("leading-7 [&:not(:first-child)]:mt-6",j[t],z[s],T[o],P[i],H[v],W[b],F[w],C),style:S,...N,children:a})};r.__docgenInfo={description:"",methods:[],displayName:"Paragraph",props:{text:{required:!0,tsType:{name:"string"},description:"The paragraph text content"},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},description:"Size variant for the paragraph text",defaultValue:{value:"'base'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"Font weight variant",defaultValue:{value:"'normal'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'muted' | 'subtle' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'subtle'"},{name:"literal",value:"'accent'"}]},description:"Color variant for the paragraph text",defaultValue:{value:"'default'",computed:!1}},lineHeight:{required:!1,tsType:{name:"union",raw:"'tight' | 'normal' | 'relaxed' | 'loose'",elements:[{name:"literal",value:"'tight'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'relaxed'"},{name:"literal",value:"'loose'"}]},description:"Line height variant",defaultValue:{value:"'normal'",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"'none' | 'prose' | 'sm' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'prose'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"Maximum width constraint",defaultValue:{value:"'none'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"},{name:"literal",value:"'justify'"}]},description:"Text alignment",defaultValue:{value:"'left'",computed:!1}},fontFamily:{required:!1,tsType:{name:"union",raw:"'sans' | 'serif' | 'mono'",elements:[{name:"literal",value:"'sans'"},{name:"literal",value:"'serif'"},{name:"literal",value:"'mono'"}]},description:"Font family",defaultValue:{value:"'sans'",computed:!1}},defaultColor:{required:!1,tsType:{name:"string"},description:"Custom color for default variant (docs only)"},mutedColor:{required:!1,tsType:{name:"string"},description:"Custom color for muted variant (docs only)"},accentColor:{required:!1,tsType:{name:"string"},description:"Custom color for accent variant (docs only)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};const k={title:"Components/Typography/Paragraph",component:r,parameters:{layout:"centered",docs:{story:{inline:!0,height:"auto"}}},tags:["autodocs"],argTypes:{text:{control:{type:"text"},description:"The paragraph text content.",table:{type:{summary:"string"}}},size:{control:"select",options:["xs","sm","base","lg","xl","2xl"],description:"Size variant for the paragraph text.",table:{type:{summary:"string"},defaultValue:{summary:"base"}}},weight:{control:"select",options:["normal","medium","semibold","bold"],description:"Font weight variant.",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},color:{control:"select",options:["default","muted","subtle","accent"],description:"Color variant for the paragraph text.",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},lineHeight:{control:"select",options:["tight","normal","relaxed","loose"],description:"Line height variant for readability.",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},maxWidth:{control:"select",options:["none","prose","sm","lg"],description:"Maximum width constraint for readability.",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},align:{control:"select",options:["left","center","right","justify"],description:"Text alignment.",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},fontFamily:{control:"select",options:["sans","serif","mono"],description:"Font family variant.",table:{type:{summary:"string"},defaultValue:{summary:"sans"}}},defaultColor:{control:{type:"color"},description:"Custom color for default variant. Overrides theme default color.",table:{type:{summary:"string"},defaultValue:{summary:"#000000"}}},mutedColor:{control:{type:"color"},description:"Custom color for muted variant. Overrides theme muted color.",table:{type:{summary:"string"},defaultValue:{summary:"#6b7280"}}},accentColor:{control:{type:"color"},description:"Custom color for accent variant. Overrides theme accent color.",table:{type:{summary:"string"},defaultValue:{summary:"#3b82f6"}}},className:{control:"text",description:"Additional Tailwind CSS classes for custom styling.",table:{type:{summary:"string"}}}},args:{text:"This is a sample paragraph demonstrating the typography component. It shows how text appears with different styling options and can be customized using the various controls available in Storybook.",size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"none",align:"left",fontFamily:"sans",defaultColor:"#000000",mutedColor:"#6b7280",accentColor:"#3b82f6"}},n={args:{text:"This is a paragraph component that can be customized with various typography controls.",size:"base",weight:"normal",color:"default",lineHeight:"normal",maxWidth:"prose",align:"left",fontFamily:"sans",defaultColor:"#000000",mutedColor:"#6b7280",accentColor:"#3b82f6"},decorators:[(a,t)=>{const{defaultColor:s,mutedColor:o,accentColor:i}=t.args;return s&&document.documentElement.style.setProperty("--paragraph-default-color",s),o&&document.documentElement.style.setProperty("--paragraph-muted-color",o),i&&document.documentElement.style.setProperty("--paragraph-accent-color",i),a()}]},d={args:{text:"This is a paragraph component that demonstrates the core typography controls available for designers.",size:"base",weight:"normal",color:"default",lineHeight:"normal"},parameters:{controls:{exclude:["defaultColor","mutedColor","accentColor","className"]}}},c={args:{color:"default",weight:"normal",lineHeight:"normal"},render:({color:a,weight:t,lineHeight:s})=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(r,{size:"xs",color:a,weight:t,lineHeight:s,children:"Extra Small (12px) - This paragraph demonstrates the xs size variant."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="xs"'})]}),e.jsxs("div",{children:[e.jsx(r,{size:"sm",color:a,weight:t,lineHeight:s,children:"Small (14px) - This paragraph demonstrates the sm size variant."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="sm"'})]}),e.jsxs("div",{children:[e.jsx(r,{size:"base",color:a,weight:t,lineHeight:s,children:"Base (16px) - This paragraph demonstrates the base size variant, which is the default."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="base" (default)'})]}),e.jsxs("div",{children:[e.jsx(r,{size:"lg",color:a,weight:t,lineHeight:s,children:"Large (18px) - This paragraph demonstrates the lg size variant for emphasis."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="lg"'})]}),e.jsxs("div",{children:[e.jsx(r,{size:"xl",color:a,weight:t,lineHeight:s,children:"Extra Large (20px) - This paragraph demonstrates the xl size variant."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="xl"'})]}),e.jsxs("div",{children:[e.jsx(r,{size:"2xl",color:a,weight:t,lineHeight:s,children:"2X Large (24px) - This paragraph demonstrates the 2xl size variant."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'size="2xl"'})]})]}),parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","text","className","size","maxWidth","align","fontFamily"]}}},m={args:{defaultColor:"#000000",mutedColor:"#6b7280",accentColor:"#3b82f6"},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(r,{color:"default",size:"base",children:"Default Color - This paragraph uses the default text color for primary content."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'color="default"'})]}),e.jsxs("div",{children:[e.jsx(r,{color:"muted",size:"base",children:"Muted Color - This paragraph uses muted text color for secondary content."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'color="muted"'})]}),e.jsxs("div",{children:[e.jsx(r,{color:"subtle",size:"base",children:"Subtle Color - This paragraph uses an even more subtle color for tertiary content."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'color="subtle"'})]}),e.jsxs("div",{children:[e.jsx(r,{color:"accent",size:"base",children:"Accent Color - This paragraph uses the accent/brand color for highlighted content."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'color="accent"'})]})]}),decorators:[(a,t)=>{const{defaultColor:s,mutedColor:o,accentColor:i}=t.args;return s&&document.documentElement.style.setProperty("--paragraph-default-color",s),o&&document.documentElement.style.setProperty("--paragraph-muted-color",o),i&&document.documentElement.style.setProperty("--paragraph-accent-color",i),a()}],parameters:{layout:"padded",controls:{include:["defaultColor","mutedColor","accentColor"]}}},h={render:({size:a="base",color:t="default"})=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(r,{size:a,color:t,weight:"normal",children:"Normal Weight - This paragraph demonstrates normal font weight for regular text."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'weight="normal" (default)'})]}),e.jsxs("div",{children:[e.jsx(r,{size:a,color:t,weight:"medium",children:"Medium Weight - This paragraph demonstrates medium font weight for emphasis."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'weight="medium"'})]}),e.jsxs("div",{children:[e.jsx(r,{size:a,color:t,weight:"semibold",children:"Semibold Weight - This paragraph demonstrates semibold font weight for strong emphasis."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'weight="semibold"'})]}),e.jsxs("div",{children:[e.jsx(r,{size:a,color:t,weight:"bold",children:"Bold Weight - This paragraph demonstrates bold font weight for maximum emphasis."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'weight="bold"'})]})]}),args:{size:"base",color:"default"},parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","text","className","weight","lineHeight","maxWidth","align","fontFamily"]}}},u={render:({size:a="base",color:t="default"})=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(r,{size:a,color:t,lineHeight:"tight",children:"Tight Line Height - This paragraph demonstrates tight line height which reduces the space between lines for a more compact appearance. It's useful when you need to conserve vertical space."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'lineHeight="tight"'})]}),e.jsxs("div",{children:[e.jsx(r,{size:a,color:t,lineHeight:"normal",children:"Normal Line Height - This paragraph demonstrates normal line height which provides balanced spacing between lines for good readability. This is the default setting that works well for most content."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'lineHeight="normal" (default)'})]}),e.jsxs("div",{children:[e.jsx(r,{size:a,color:t,lineHeight:"relaxed",children:"Relaxed Line Height - This paragraph demonstrates relaxed line height which increases the space between lines for improved readability and a more open, airy feeling in longer text blocks."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'lineHeight="relaxed"'})]}),e.jsxs("div",{children:[e.jsx(r,{size:a,color:t,lineHeight:"loose",children:"Loose Line Height - This paragraph demonstrates loose line height which provides maximum space between lines for enhanced readability, particularly useful for accessibility or when working with larger text sizes."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'lineHeight="loose"'})]})]}),args:{size:"base",color:"default"},parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","text","className","weight","lineHeight","maxWidth","align","fontFamily"]}}},p={render:({size:a="base",color:t="default"})=>e.jsxs("div",{className:"w-full space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Max Width Variants"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(r,{size:a,color:t,maxWidth:"none",className:"bg-muted/20 p-4",children:"No Max Width - This paragraph has no width constraint and will expand to fill the full width of its container, which can make it harder to read on very wide screens."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'maxWidth="none"'})]}),e.jsxs("div",{children:[e.jsx(r,{size:a,color:t,maxWidth:"prose",className:"bg-muted/20 p-4",children:"Prose Width - This paragraph is constrained to an optimal reading width (around 65 characters) which is considered ideal for readability in longer text blocks."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'maxWidth="prose"'})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Text Alignment"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(r,{size:a,color:t,align:"left",className:"bg-muted/20 p-4",children:"Left Aligned - This paragraph is aligned to the left, which is the default and most common alignment for body text."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'align="left" (default)'})]}),e.jsxs("div",{children:[e.jsx(r,{size:a,color:t,align:"center",className:"bg-muted/20 p-4",children:"Center Aligned - This paragraph is center aligned, often used for headings or special callout text."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'align="center"'})]}),e.jsxs("div",{children:[e.jsx(r,{size:a,color:t,align:"right",className:"bg-muted/20 p-4",children:"Right Aligned - This paragraph is right aligned, less common but useful for specific design layouts."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'align="right"'})]}),e.jsxs("div",{children:[e.jsx(r,{size:a,color:t,align:"justify",className:"bg-muted/20 p-4",children:"Justified Text - This paragraph uses justified alignment, where text is stretched to align with both left and right margins, creating even edges on both sides but can sometimes create awkward spacing."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'align="justify"'})]})]})]})]}),args:{size:"base",color:"default"},parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","text","className","weight","lineHeight","maxWidth","align","fontFamily"]}}},g={render:({size:a="base",color:t="default"})=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(r,{size:a,color:t,fontFamily:"sans",children:"Sans Serif - This paragraph uses a sans-serif font family, which is clean and modern. It's the default choice for most web content and provides excellent readability on screens."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'fontFamily="sans" (default)'})]}),e.jsxs("div",{children:[e.jsx(r,{size:a,color:t,fontFamily:"serif",children:"Serif - This paragraph uses a serif font family, which has decorative strokes that can give a more traditional, formal, or literary feel to your content."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'fontFamily="serif"'})]}),e.jsxs("div",{children:[e.jsx(r,{size:a,color:t,fontFamily:"mono",children:"Monospace - This paragraph uses a monospace font family where each character takes up the same width. It's commonly used for code, technical content, or when you need precise character alignment."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:'fontFamily="mono"'})]})]}),args:{size:"base",color:"default"},parameters:{layout:"padded",controls:{exclude:["defaultColor","mutedColor","accentColor","text","className","weight","lineHeight","maxWidth","align","fontFamily"]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'This is a paragraph component that demonstrates the core typography controls available for designers.',
    size: 'base',
    weight: 'normal',
    color: 'default',
    lineHeight: 'normal'
  },
  parameters: {
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'className']
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'default',
    weight: 'normal',
    lineHeight: 'normal'
  },
  render: ({
    color,
    weight,
    lineHeight
  }) => {
    return <div className="space-y-4">
        <div>
          <Paragraph size="xs" color={color} weight={weight} lineHeight={lineHeight}>
            Extra Small (12px) - This paragraph demonstrates the xs size variant.
          </Paragraph>
          <p className="text-xs text-muted-foreground mt-1">size="xs"</p>
        </div>
        <div>
          <Paragraph size="sm" color={color} weight={weight} lineHeight={lineHeight}>
            Small (14px) - This paragraph demonstrates the sm size variant.
          </Paragraph>
          <p className="text-xs text-muted-foreground mt-1">size="sm"</p>
        </div>
        <div>
          <Paragraph size="base" color={color} weight={weight} lineHeight={lineHeight}>
            Base (16px) - This paragraph demonstrates the base size variant, which is the default.
          </Paragraph>
          <p className="text-xs text-muted-foreground mt-1">size="base" (default)</p>
        </div>
        <div>
          <Paragraph size="lg" color={color} weight={weight} lineHeight={lineHeight}>
            Large (18px) - This paragraph demonstrates the lg size variant for emphasis.
          </Paragraph>
          <p className="text-xs text-muted-foreground mt-1">size="lg"</p>
        </div>
        <div>
          <Paragraph size="xl" color={color} weight={weight} lineHeight={lineHeight}>
            Extra Large (20px) - This paragraph demonstrates the xl size variant.
          </Paragraph>
          <p className="text-xs text-muted-foreground mt-1">size="xl"</p>
        </div>
        <div>
          <Paragraph size="2xl" color={color} weight={weight} lineHeight={lineHeight}>
            2X Large (24px) - This paragraph demonstrates the 2xl size variant.
          </Paragraph>
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultColor: '#000000',
    mutedColor: '#6b7280',
    accentColor: '#3b82f6'
  },
  render: () => <div className="space-y-4">
      <div>
        <Paragraph color="default" size="base">
          Default Color - This paragraph uses the default text color for primary content.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">color="default"</p>
      </div>
      <div>
        <Paragraph color="muted" size="base">
          Muted Color - This paragraph uses muted text color for secondary content.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">color="muted"</p>
      </div>
      <div>
        <Paragraph color="subtle" size="base">
          Subtle Color - This paragraph uses an even more subtle color for tertiary content.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">color="subtle"</p>
      </div>
      <div>
        <Paragraph color="accent" size="base">
          Accent Color - This paragraph uses the accent/brand color for highlighted content.
        </Paragraph>
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: ({
    size = 'base',
    color = 'default'
  }) => <div className="space-y-4">
      <div>
        <Paragraph size={size} color={color} weight="normal">
          Normal Weight - This paragraph demonstrates normal font weight for regular text.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">weight="normal" (default)</p>
      </div>
      <div>
        <Paragraph size={size} color={color} weight="medium">
          Medium Weight - This paragraph demonstrates medium font weight for emphasis.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">weight="medium"</p>
      </div>
      <div>
        <Paragraph size={size} color={color} weight="semibold">
          Semibold Weight - This paragraph demonstrates semibold font weight for strong emphasis.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">weight="semibold"</p>
      </div>
      <div>
        <Paragraph size={size} color={color} weight="bold">
          Bold Weight - This paragraph demonstrates bold font weight for maximum emphasis.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">weight="bold"</p>
      </div>
    </div>,
  args: {
    size: 'base',
    color: 'default'
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily']
    }
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: ({
    size = 'base',
    color = 'default'
  }) => <div className="space-y-6">
      <div>
        <Paragraph size={size} color={color} lineHeight="tight">
          Tight Line Height - This paragraph demonstrates tight line height which reduces the space between lines for a more compact appearance. It's useful when you need to conserve vertical space.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">lineHeight="tight"</p>
      </div>
      <div>
        <Paragraph size={size} color={color} lineHeight="normal">
          Normal Line Height - This paragraph demonstrates normal line height which provides balanced spacing between lines for good readability. This is the default setting that works well for most content.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">lineHeight="normal" (default)</p>
      </div>
      <div>
        <Paragraph size={size} color={color} lineHeight="relaxed">
          Relaxed Line Height - This paragraph demonstrates relaxed line height which increases the space between lines for improved readability and a more open, airy feeling in longer text blocks.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">lineHeight="relaxed"</p>
      </div>
      <div>
        <Paragraph size={size} color={color} lineHeight="loose">
          Loose Line Height - This paragraph demonstrates loose line height which provides maximum space between lines for enhanced readability, particularly useful for accessibility or when working with larger text sizes.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">lineHeight="loose"</p>
      </div>
    </div>,
  args: {
    size: 'base',
    color: 'default'
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily']
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ({
    size = 'base',
    color = 'default'
  }) => <div className="w-full space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Max Width Variants</h3>
        <div className="space-y-4">
          <div>
            <Paragraph size={size} color={color} maxWidth="none" className="bg-muted/20 p-4">
              No Max Width - This paragraph has no width constraint and will expand to fill the full width of its container, which can make it harder to read on very wide screens.
            </Paragraph>
            <p className="text-xs text-muted-foreground mt-1">maxWidth="none"</p>
          </div>
          <div>
            <Paragraph size={size} color={color} maxWidth="prose" className="bg-muted/20 p-4">
              Prose Width - This paragraph is constrained to an optimal reading width (around 65 characters) which is considered ideal for readability in longer text blocks.
            </Paragraph>
            <p className="text-xs text-muted-foreground mt-1">maxWidth="prose"</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Text Alignment</h3>
        <div className="space-y-4">
          <div>
            <Paragraph size={size} color={color} align="left" className="bg-muted/20 p-4">
              Left Aligned - This paragraph is aligned to the left, which is the default and most common alignment for body text.
            </Paragraph>
            <p className="text-xs text-muted-foreground mt-1">align="left" (default)</p>
          </div>
          <div>
            <Paragraph size={size} color={color} align="center" className="bg-muted/20 p-4">
              Center Aligned - This paragraph is center aligned, often used for headings or special callout text.
            </Paragraph>
            <p className="text-xs text-muted-foreground mt-1">align="center"</p>
          </div>
          <div>
            <Paragraph size={size} color={color} align="right" className="bg-muted/20 p-4">
              Right Aligned - This paragraph is right aligned, less common but useful for specific design layouts.
            </Paragraph>
            <p className="text-xs text-muted-foreground mt-1">align="right"</p>
          </div>
          <div>
            <Paragraph size={size} color={color} align="justify" className="bg-muted/20 p-4">
              Justified Text - This paragraph uses justified alignment, where text is stretched to align with both left and right margins, creating even edges on both sides but can sometimes create awkward spacing.
            </Paragraph>
            <p className="text-xs text-muted-foreground mt-1">align="justify"</p>
          </div>
        </div>
      </div>
    </div>,
  args: {
    size: 'base',
    color: 'default'
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily']
    }
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: ({
    size = 'base',
    color = 'default'
  }) => <div className="space-y-4">
      <div>
        <Paragraph size={size} color={color} fontFamily="sans">
          Sans Serif - This paragraph uses a sans-serif font family, which is clean and modern. It's the default choice for most web content and provides excellent readability on screens.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">fontFamily="sans" (default)</p>
      </div>
      <div>
        <Paragraph size={size} color={color} fontFamily="serif">
          Serif - This paragraph uses a serif font family, which has decorative strokes that can give a more traditional, formal, or literary feel to your content.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">fontFamily="serif"</p>
      </div>
      <div>
        <Paragraph size={size} color={color} fontFamily="mono">
          Monospace - This paragraph uses a monospace font family where each character takes up the same width. It's commonly used for code, technical content, or when you need precise character alignment.
        </Paragraph>
        <p className="text-xs text-muted-foreground mt-1">fontFamily="mono"</p>
      </div>
    </div>,
  args: {
    size: 'base',
    color: 'default'
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'mutedColor', 'accentColor', 'text', 'className', 'weight', 'lineHeight', 'maxWidth', 'align', 'fontFamily']
    }
  }
}`,...g.parameters?.docs?.source}}};const A=["Docs","Primary","AllSizes","ColorVariants","WeightVariants","LineHeightVariants","LayoutVariants","FontFamilyVariants"];export{c as AllSizes,m as ColorVariants,n as Docs,g as FontFamilyVariants,p as LayoutVariants,u as LineHeightVariants,d as Primary,h as WeightVariants,A as __namedExportsOrder,k as default};
