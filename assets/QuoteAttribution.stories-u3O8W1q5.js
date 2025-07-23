import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as b}from"./utils-CBfrqCZ4.js";import{B as p}from"./blockquote-typography-B9Y96WE1.js";const a=({name:t,title:s,company:n,size:N="sm",weight:j="medium",color:o="muted",align:C="left",fontFamily:w="sans",layout:A="stacked",defaultColor:y,mutedColor:h,accentColor:f,className:T,...x})=>{const M={xs:"text-xs",sm:"text-sm",base:"text-base"},k={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},P={default:"text-foreground text-gray-900 dark:text-gray-100",muted:"text-muted-foreground text-gray-600 dark:text-gray-400",accent:"text-primary text-blue-600 dark:text-blue-400"},S={left:"text-left",center:"text-center",right:"text-right"},E={sans:"font-sans",serif:"font-serif",mono:"font-mono",inter:"font-[Inter]",montserrat:"font-[Montserrat]",poppins:"font-[Poppins]",playfair:"font-[Playfair_Display]",dancing:"font-[Dancing_Script]",greatvibes:"font-[Great_Vibes]",pacifico:"font-[Pacifico]",anton:"font-[Anton]",bebas:"font-[Bebas_Neue]",sourcecodepro:"font-[Source_Code_Pro]"};let i;o==="default"&&y?i=y:o==="muted"&&h?i=h:o==="accent"&&f&&(i=f);const g=i?{color:i}:void 0,v=b("mt-2",M[N],k[j],P[o],S[C],E[w],T);if(A==="inline"){const u=[t];return s&&u.push(s),n&&u.push(n),e.jsxs("cite",{className:v,style:g,...x,children:["— ",u.join(", ")]})}return e.jsxs("cite",{className:b(v,"not-italic"),style:g,...x,children:[e.jsxs("div",{className:"font-semibold",children:["— ",t]}),s&&e.jsx("div",{className:"opacity-80",children:s}),n&&e.jsx("div",{className:"opacity-70",children:n})]})};a.__docgenInfo={description:"",methods:[],displayName:"QuoteAttribution",props:{name:{required:!0,tsType:{name:"string"},description:"The person's name"},title:{required:!1,tsType:{name:"string"},description:"The person's title or role"},company:{required:!1,tsType:{name:"string"},description:"The company or location"},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'base'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"}]},description:"Size variant for the attribution text",defaultValue:{value:"'sm'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"Font weight variant",defaultValue:{value:"'medium'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'muted' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'accent'"}]},description:"Color variant for the attribution text",defaultValue:{value:"'muted'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Text alignment",defaultValue:{value:"'left'",computed:!1}},fontFamily:{required:!1,tsType:{name:"union",raw:"'sans' | 'serif' | 'mono' | 'inter' | 'playfair' | 'montserrat' | 'poppins' | 'dancing' | 'greatvibes' | 'pacifico' | 'anton' | 'bebas' | 'sourcecodepro'",elements:[{name:"literal",value:"'sans'"},{name:"literal",value:"'serif'"},{name:"literal",value:"'mono'"},{name:"literal",value:"'inter'"},{name:"literal",value:"'playfair'"},{name:"literal",value:"'montserrat'"},{name:"literal",value:"'poppins'"},{name:"literal",value:"'dancing'"},{name:"literal",value:"'greatvibes'"},{name:"literal",value:"'pacifico'"},{name:"literal",value:"'anton'"},{name:"literal",value:"'bebas'"},{name:"literal",value:"'sourcecodepro'"}]},description:"Font family",defaultValue:{value:"'sans'",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'stacked' | 'inline'",elements:[{name:"literal",value:"'stacked'"},{name:"literal",value:"'inline'"}]},description:"Layout style",defaultValue:{value:"'stacked'",computed:!1}},defaultColor:{required:!1,tsType:{name:"string"},description:"Custom color for default variant (docs only)"},mutedColor:{required:!1,tsType:{name:"string"},description:"Custom color for muted variant (docs only)"},accentColor:{required:!1,tsType:{name:"string"},description:"Custom color for accent variant (docs only)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};const q={title:"Components/QuoteAttribution",component:a,parameters:{layout:"centered",docs:{story:{inline:!0,height:"auto"}}},tags:["autodocs"],argTypes:{name:{control:{type:"text"},description:"The person's name.",table:{type:{summary:"string"}}},title:{control:{type:"text"},description:"The person's title or role.",table:{type:{summary:"string"}}},company:{control:{type:"text"},description:"The company or location.",table:{type:{summary:"string"}}},size:{control:"select",options:["xs","sm","base"],description:"Size variant for the attribution text.",table:{type:{summary:"string"},defaultValue:{summary:"sm"}}},weight:{control:"select",options:["normal","medium","semibold","bold"],description:"Font weight variant.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},color:{control:"select",options:["default","muted","accent"],description:"Color variant for the attribution text.",table:{type:{summary:"string"},defaultValue:{summary:"muted"}}},align:{control:"select",options:["left","center","right"],description:"Text alignment.",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},fontFamily:{control:"select",options:["sans","serif","mono","inter","playfair","montserrat","poppins","dancing","greatvibes","pacifico","anton","bebas","sourcecodepro"],description:"Font family variant.",table:{type:{summary:"string"},defaultValue:{summary:"sans"}}},layout:{control:"select",options:["stacked","inline"],description:"Layout style for the attribution.",table:{type:{summary:"string"},defaultValue:{summary:"stacked"}}},defaultColor:{control:{type:"color"},description:"Custom color for default variant. Overrides theme default color.",table:{type:{summary:"string"},defaultValue:{summary:"#000000"}}},mutedColor:{control:{type:"color"},description:"Custom color for muted variant. Overrides theme muted color.",table:{type:{summary:"string"},defaultValue:{summary:"#6b7280"}}},accentColor:{control:{type:"color"},description:"Custom color for accent variant. Overrides theme accent color.",table:{type:{summary:"string"},defaultValue:{summary:"#3b82f6"}}},className:{control:"text",description:"Additional Tailwind CSS classes for custom styling.",table:{type:{summary:"string"}}}},args:{name:"Sarah Mitchell",title:"Homeowner",company:"Minnetonka, MN",size:"sm",weight:"medium",color:"muted",align:"left",fontFamily:"sans",layout:"stacked",defaultColor:"#000000",mutedColor:"#6b7280",accentColor:"#3b82f6"}},r={args:{name:"Jennifer Thompson",title:"Executive Vice President",company:"Wayzata, MN",size:"sm",weight:"medium",color:"muted",align:"left",fontFamily:"sans",layout:"stacked"}},l={render:t=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Stacked Layout"}),e.jsx(a,{...t,layout:"stacked",name:"Michael Rodriguez",title:"Architect",company:"Eden Prairie, MN"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:'layout="stacked" (default)'})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Inline Layout"}),e.jsx(a,{...t,layout:"inline",name:"Amanda Chen",title:"Interior Stylist",company:"Minneapolis, MN"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:'layout="inline"'})]})]}),parameters:{layout:"padded",controls:{exclude:["name","title","company","layout"]}}},c={render:t=>e.jsxs("div",{className:"space-y-12",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Client Testimonial"}),e.jsxs("div",{className:"max-w-2xl",children:[e.jsx(p,{text:"Working with Eminent Interior Design transformed not just our kitchen, but our entire lifestyle. The attention to detail and understanding of our family's needs resulted in a space that perfectly balances luxury with functionality.",variant:"sidebar",borderColor:"accent"}),e.jsx(a,{...t,name:"David & Lisa Johnson",title:"Homeowners",company:"Minnetonka, MN",align:"left"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Professional Review"}),e.jsxs("div",{className:"max-w-2xl",children:[e.jsx(p,{text:"The team's ability to blend contemporary design with timeless elegance is remarkable. This project showcases their expertise in creating spaces that are both visually stunning and highly functional.",variant:"sidebar",borderColor:"default"}),e.jsx(a,{...t,name:"Maria Gonzalez",title:"Senior Editor",company:"Architecture Minnesota Magazine",color:"accent",weight:"semibold"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Industry Recognition"}),e.jsxs("div",{className:"max-w-2xl text-center",children:[e.jsx(p,{text:"This year's Kitchen Design Excellence Award goes to a project that exemplifies innovation, craftsmanship, and client satisfaction at the highest level.",variant:"default",borderPosition:"top",borderColor:"accent",align:"center"}),e.jsx(a,{...t,name:"Thomas Anderson",title:"President",company:"Minnesota Association of Interior Designers",align:"center",layout:"inline"})]})]})]}),parameters:{layout:"padded",controls:{exclude:["name","title","company"]}}},m={render:t=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Residential Clients"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{...t,name:"Robert & Patricia Wilson",title:"Retired Educators",company:"St. Paul, MN"}),e.jsx(a,{...t,name:"Alexandra Kim",title:"Technology Executive",company:"Edina, MN"}),e.jsx(a,{...t,name:"The Martinez Family",company:"Plymouth, MN"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Commercial Clients"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{...t,name:"Jennifer Walsh",title:"Chief Executive Officer",company:"Walsh Financial Group",color:"accent"}),e.jsx(a,{...t,name:"Dr. Steven Park",title:"Practice Owner",company:"Park Dental Associates",color:"accent"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Industry Partners"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{...t,name:"Rachel Stevens",title:"Principal Architect",company:"Stevens Architecture Studio",layout:"inline",weight:"semibold"}),e.jsx(a,{...t,name:"Mark Thompson",title:"General Contractor",company:"Thompson Custom Homes",layout:"inline",weight:"semibold"})]})]})]}),parameters:{layout:"padded",controls:{exclude:["name","title","company"]}}},d={render:t=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Left Aligned"}),e.jsxs("div",{className:"max-w-md border-l-4 border-primary pl-4",children:[e.jsx("p",{className:"text-muted-foreground italic mb-2",children:'"The design perfectly captures our vision while exceeding our expectations."'}),e.jsx(a,{...t,align:"left",name:"Catherine Powell",title:"Art Collector",company:"Wayzata, MN"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Center Aligned"}),e.jsxs("div",{className:"max-w-md mx-auto text-center border-t-4 border-primary pt-4",children:[e.jsx("p",{className:"text-muted-foreground italic mb-2",children:'"An exceptional team that delivers extraordinary results."'}),e.jsx(a,{...t,align:"center",name:"James Mitchell",title:"CEO",company:"Mitchell Enterprises"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Right Aligned"}),e.jsxs("div",{className:"max-w-md ml-auto border-r-4 border-primary pr-4",children:[e.jsx("p",{className:"text-muted-foreground italic mb-2 text-right",children:'"Professional, creative, and absolutely meticulous in execution."'}),e.jsx(a,{...t,align:"right",name:"Dr. Susan Lee",title:"Physician",company:"Minnetonka Medical"})]})]})]}),parameters:{layout:"padded",controls:{exclude:["name","title","company","align"]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Jennifer Thompson',
    title: 'Executive Vice President',
    company: 'Wayzata, MN',
    size: 'sm',
    weight: 'medium',
    color: 'muted',
    align: 'left',
    fontFamily: 'sans',
    layout: 'stacked'
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Stacked Layout</h3>
        <QuoteAttribution {...args} layout="stacked" name="Michael Rodriguez" title="Architect" company="Eden Prairie, MN" />
        <p className="text-xs text-muted-foreground mt-2">layout="stacked" (default)</p>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Inline Layout</h3>
        <QuoteAttribution {...args} layout="inline" name="Amanda Chen" title="Interior Stylist" company="Minneapolis, MN" />
        <p className="text-xs text-muted-foreground mt-2">layout="inline"</p>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['name', 'title', 'company', 'layout']
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-12">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Client Testimonial</h3>
        <div className="max-w-2xl">
          <Blockquote text="Working with Eminent Interior Design transformed not just our kitchen, but our entire lifestyle. The attention to detail and understanding of our family's needs resulted in a space that perfectly balances luxury with functionality." variant="sidebar" borderColor="accent" />
          <QuoteAttribution {...args} name="David & Lisa Johnson" title="Homeowners" company="Minnetonka, MN" align="left" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Professional Review</h3>
        <div className="max-w-2xl">
          <Blockquote text="The team's ability to blend contemporary design with timeless elegance is remarkable. This project showcases their expertise in creating spaces that are both visually stunning and highly functional." variant="sidebar" borderColor="default" />
          <QuoteAttribution {...args} name="Maria Gonzalez" title="Senior Editor" company="Architecture Minnesota Magazine" color="accent" weight="semibold" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Industry Recognition</h3>
        <div className="max-w-2xl text-center">
          <Blockquote text="This year's Kitchen Design Excellence Award goes to a project that exemplifies innovation, craftsmanship, and client satisfaction at the highest level." variant="default" borderPosition="top" borderColor="accent" align="center" />
          <QuoteAttribution {...args} name="Thomas Anderson" title="President" company="Minnesota Association of Interior Designers" align="center" layout="inline" />
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['name', 'title', 'company']
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Residential Clients</h3>
        <div className="space-y-4">
          <QuoteAttribution {...args} name="Robert & Patricia Wilson" title="Retired Educators" company="St. Paul, MN" />
          <QuoteAttribution {...args} name="Alexandra Kim" title="Technology Executive" company="Edina, MN" />
          <QuoteAttribution {...args} name="The Martinez Family" company="Plymouth, MN" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Commercial Clients</h3>
        <div className="space-y-4">
          <QuoteAttribution {...args} name="Jennifer Walsh" title="Chief Executive Officer" company="Walsh Financial Group" color="accent" />
          <QuoteAttribution {...args} name="Dr. Steven Park" title="Practice Owner" company="Park Dental Associates" color="accent" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Industry Partners</h3>
        <div className="space-y-4">
          <QuoteAttribution {...args} name="Rachel Stevens" title="Principal Architect" company="Stevens Architecture Studio" layout="inline" weight="semibold" />
          <QuoteAttribution {...args} name="Mark Thompson" title="General Contractor" company="Thompson Custom Homes" layout="inline" weight="semibold" />
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['name', 'title', 'company']
    }
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Left Aligned</h3>
        <div className="max-w-md border-l-4 border-primary pl-4">
          <p className="text-muted-foreground italic mb-2">
            "The design perfectly captures our vision while exceeding our expectations."
          </p>
          <QuoteAttribution {...args} align="left" name="Catherine Powell" title="Art Collector" company="Wayzata, MN" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Center Aligned</h3>
        <div className="max-w-md mx-auto text-center border-t-4 border-primary pt-4">
          <p className="text-muted-foreground italic mb-2">
            "An exceptional team that delivers extraordinary results."
          </p>
          <QuoteAttribution {...args} align="center" name="James Mitchell" title="CEO" company="Mitchell Enterprises" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Right Aligned</h3>
        <div className="max-w-md ml-auto border-r-4 border-primary pr-4">
          <p className="text-muted-foreground italic mb-2 text-right">
            "Professional, creative, and absolutely meticulous in execution."
          </p>
          <QuoteAttribution {...args} align="right" name="Dr. Susan Lee" title="Physician" company="Minnetonka Medical" />
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['name', 'title', 'company', 'align']
    }
  }
}`,...d.parameters?.docs?.source}}};const R=["Primary","LayoutComparison","WithTestimonials","VariousClients","AlignmentShowcase"];export{d as AlignmentShowcase,l as LayoutComparison,r as Primary,m as VariousClients,c as WithTestimonials,R as __namedExportsOrder,q as default};
