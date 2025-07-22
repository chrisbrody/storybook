import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./iframe-BSqHWzP6.js";import{c as S,a as b}from"./utils-DEz_iieQ.js";const N=b("font-medium tracking-tight leading-tight",{variants:{size:{h1:"text-4xl sm:text-5xl lg:text-6xl font-bold",h2:"text-3xl sm:text-4xl lg:text-5xl font-bold",h3:"text-2xl sm:text-3xl lg:text-4xl font-bold",h4:"text-xl sm:text-2xl lg:text-3xl font-semibold",h5:"text-lg sm:text-xl lg:text-2xl font-semibold",h6:"text-base sm:text-lg lg:text-xl font-medium"},color:{default:"heading-dynamic-default",primary:"heading-dynamic-primary",muted:"heading-dynamic-muted"},weight:{default:"",thin:"font-thin",bold:"font-bold",semibold:"font-semibold"}},defaultVariants:{size:"h2",color:"default",weight:"default"}}),r=y.forwardRef(({className:t,size:o,color:a,weight:d,level:l,as:g,...s},x)=>{const f=g||l||"h2";return y.createElement(f,{className:S(N({size:o,color:a,weight:d,className:t})),ref:x,...s})});r.displayName="Heading";r.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{level:{required:!1,tsType:{name:"union",raw:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'}]},description:""},as:{required:!1,tsType:{name:"union",raw:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'}]},description:""}},composes:["VariantProps"]};const v=({text:t,defaultColor:o,primaryColor:a,mutedColor:d,color:l,style:g,level:s,size:x,...f})=>{let i;l==="default"&&o?i=o:l==="primary"&&a?i=a:l==="muted"&&d&&(i=d);const C={...g,color:i},H=x||s;return e.jsx(r,{level:s,size:H,color:l,style:C,...f,children:t})};v.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{text:{required:!0,tsType:{name:"string"},description:"The heading text content"},defaultColor:{required:!1,tsType:{name:"string"},description:"Custom color for default variant (docs only)"},primaryColor:{required:!1,tsType:{name:"string"},description:"Custom color for primary variant (docs only)"},mutedColor:{required:!1,tsType:{name:"string"},description:"Custom color for muted variant (docs only)"}},composes:["Omit"]};const P={title:"Components/Typography/Heading",component:v,parameters:{layout:"centered",docs:{story:{inline:!0,height:"auto"}}},tags:["autodocs"],argTypes:{level:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"The semantic heading level (h1-h6).",table:{type:{summary:"string"},defaultValue:{summary:"h2"}}},color:{control:"select",options:["default","primary","muted"],description:"Color variant for the heading text.",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},weight:{control:"select",options:["default","thin","semibold","bold"],description:"Font weight variant.",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},defaultColor:{control:{type:"color"},description:"Custom color for default variant. Overrides theme default color.",table:{type:{summary:"string"},defaultValue:{summary:"#000000"}}},primaryColor:{control:{type:"color"},description:"Custom color for primary variant. Overrides theme primary color.",table:{type:{summary:"string"},defaultValue:{summary:"#3b82f6"}}},mutedColor:{control:{type:"color"},description:"Custom color for muted variant. Overrides theme muted color.",table:{type:{summary:"string"},defaultValue:{summary:"#6b7280"}}},className:{control:"text",description:"Additional Tailwind CSS classes for custom styling.",table:{type:{summary:"string"}}},text:{control:"text",description:"The heading text content.",table:{type:{summary:"string"}}}},args:{text:"Sample Heading Text",level:"h2",color:"default",weight:"default",defaultColor:"#000000",primaryColor:"#3b82f6",mutedColor:"#6b7280"}},n={args:{level:"h2",color:"default",weight:"default",text:"This is a heading component",defaultColor:"#000000",primaryColor:"#3b82f6",mutedColor:"#6b7280"},decorators:[(t,o)=>{const{defaultColor:a,primaryColor:d,mutedColor:l}=o.args;return a&&document.documentElement.style.setProperty("--heading-default-color",a),d&&document.documentElement.style.setProperty("--heading-primary-color",d),l&&document.documentElement.style.setProperty("--heading-muted-color",l),t()}]},m={args:{level:"h2",color:"default",weight:"default",text:"This is a heading component"},parameters:{controls:{exclude:["defaultColor","primaryColor","mutedColor","text","className"]}}},c={args:{color:"default",weight:"default"},render:({color:t,weight:o,defaultColor:a,primaryColor:d,mutedColor:l})=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(r,{level:"h1",size:"h1",color:t,weight:o,children:"Heading 1 (48px → 60px → 72px)"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:'level="h1" size="h1"'})]}),e.jsxs("div",{children:[e.jsx(r,{level:"h2",size:"h2",color:t,weight:o,children:"Heading 2 (36px → 48px → 60px)"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:'level="h2" size="h2"'})]}),e.jsxs("div",{children:[e.jsx(r,{level:"h3",size:"h3",color:t,weight:o,children:"Heading 3 (24px → 36px → 48px)"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:'level="h3" size="h3"'})]}),e.jsxs("div",{children:[e.jsx(r,{level:"h4",size:"h4",color:t,weight:o,children:"Heading 4 (20px → 24px → 36px)"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:'level="h4" size="h4"'})]}),e.jsxs("div",{children:[e.jsx(r,{level:"h5",size:"h5",color:t,weight:o,children:"Heading 5 (18px → 20px → 24px)"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:'level="h5" size="h5"'})]}),e.jsxs("div",{children:[e.jsx(r,{level:"h6",size:"h6",color:t,weight:o,children:"Heading 6 (16px → 18px → 20px)"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:'level="h6" size="h6"'})]})]}),decorators:[(t,o)=>{const{defaultColor:a,primaryColor:d,mutedColor:l}=o.args;return a&&document.documentElement.style.setProperty("--heading-default-color",a),d&&document.documentElement.style.setProperty("--heading-primary-color",d),l&&document.documentElement.style.setProperty("--heading-muted-color",l),t()}],parameters:{layout:"padded",controls:{exclude:["defaultColor","primaryColor","mutedColor","text","className","level"]}}},u={args:{defaultColor:"#000000",primaryColor:"#3b82f6",mutedColor:"#6b7280"},render:({defaultColor:t,primaryColor:o,mutedColor:a})=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(r,{level:"h2",size:"h2",color:"default",children:"Default Color Heading"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:'color="default"'})]}),e.jsxs("div",{children:[e.jsx(r,{level:"h2",size:"h2",color:"primary",children:"Primary Color Heading"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:'color="primary"'})]}),e.jsxs("div",{children:[e.jsx(r,{level:"h2",size:"h2",color:"muted",children:"Muted Color Heading"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:'color="muted"'})]})]}),decorators:[(t,o)=>{const{defaultColor:a,primaryColor:d,mutedColor:l}=o.args;return a&&document.documentElement.style.setProperty("--heading-default-color",a),d&&document.documentElement.style.setProperty("--heading-primary-color",d),l&&document.documentElement.style.setProperty("--heading-muted-color",l),t()}],parameters:{layout:"padded",controls:{include:["defaultColor","primaryColor","mutedColor"]}}},h={render:({level:t="h2",color:o="default"})=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(r,{level:t,size:t,color:o,weight:"default",children:"Default Weight Heading"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:'weight="default"'})]}),e.jsxs("div",{children:[e.jsx(r,{level:t,size:t,color:o,weight:"thin",children:"Thin Weight Heading"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:'weight="thin"'})]}),e.jsxs("div",{children:[e.jsx(r,{level:t,size:t,color:o,weight:"semibold",children:"Semibold Weight Heading"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:'weight="semibold"'})]}),e.jsxs("div",{children:[e.jsx(r,{level:t,size:t,color:o,weight:"bold",children:"Bold Weight Heading"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:'weight="bold"'})]})]}),args:{level:"h2",color:"default"},parameters:{layout:"padded",controls:{exclude:["defaultColor","primaryColor","mutedColor","text","className","weight"]}}},p={render:({color:t="default",weight:o="default"})=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Semantic H3 with H1 Visual Styling"}),e.jsx(r,{level:"h3",size:"h1",color:t,weight:o,children:"This is semantically H3 but looks like H1"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:'level="h3" size="h1"'})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Semantic H1 with H4 Visual Styling"}),e.jsx(r,{level:"h1",size:"h4",color:t,weight:o,children:"This is semantically H1 but looks like H4"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:'level="h1" size="h4"'})]})]}),args:{color:"default",weight:"default"},parameters:{layout:"padded",controls:{exclude:["defaultColor","primaryColor","mutedColor","text","className","level","size","weight"]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    level: 'h2',
    color: 'default',
    weight: 'default',
    text: 'This is a heading component',
    defaultColor: '#000000',
    primaryColor: '#3b82f6',
    mutedColor: '#6b7280'
  },
  decorators: [(Story, context) => {
    const {
      defaultColor,
      primaryColor,
      mutedColor
    } = context.args;
    if (defaultColor) {
      document.documentElement.style.setProperty('--heading-default-color', defaultColor);
    }
    if (primaryColor) {
      document.documentElement.style.setProperty('--heading-primary-color', primaryColor);
    }
    if (mutedColor) {
      document.documentElement.style.setProperty('--heading-muted-color', mutedColor);
    }
    return Story();
  }]
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    level: 'h2',
    color: 'default',
    weight: 'default',
    text: 'This is a heading component'
  },
  parameters: {
    controls: {
      exclude: ['defaultColor', 'primaryColor', 'mutedColor', 'text', 'className']
    }
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'default',
    weight: 'default'
  },
  render: ({
    color,
    weight,
    defaultColor,
    primaryColor,
    mutedColor
  }) => {
    return <div className="space-y-6">
        <div>
          <ShadcnHeading level="h1" size="h1" color={color} weight={weight}>
            Heading 1 (48px → 60px → 72px)
          </ShadcnHeading>
          <p className="text-sm text-muted-foreground mt-1">level="h1" size="h1"</p>
        </div>
        <div>
          <ShadcnHeading level="h2" size="h2" color={color} weight={weight}>
            Heading 2 (36px → 48px → 60px)
          </ShadcnHeading>
          <p className="text-sm text-muted-foreground mt-1">level="h2" size="h2"</p>
        </div>
        <div>
          <ShadcnHeading level="h3" size="h3" color={color} weight={weight}>
            Heading 3 (24px → 36px → 48px)
          </ShadcnHeading>
          <p className="text-sm text-muted-foreground mt-1">level="h3" size="h3"</p>
        </div>
        <div>
          <ShadcnHeading level="h4" size="h4" color={color} weight={weight}>
            Heading 4 (20px → 24px → 36px)
          </ShadcnHeading>
          <p className="text-sm text-muted-foreground mt-1">level="h4" size="h4"</p>
        </div>
        <div>
          <ShadcnHeading level="h5" size="h5" color={color} weight={weight}>
            Heading 5 (18px → 20px → 24px)
          </ShadcnHeading>
          <p className="text-sm text-muted-foreground mt-1">level="h5" size="h5"</p>
        </div>
        <div>
          <ShadcnHeading level="h6" size="h6" color={color} weight={weight}>
            Heading 6 (16px → 18px → 20px)
          </ShadcnHeading>
          <p className="text-sm text-muted-foreground mt-1">level="h6" size="h6"</p>
        </div>
      </div>;
  },
  decorators: [(Story, context) => {
    const {
      defaultColor,
      primaryColor,
      mutedColor
    } = context.args;
    if (defaultColor) {
      document.documentElement.style.setProperty('--heading-default-color', defaultColor);
    }
    if (primaryColor) {
      document.documentElement.style.setProperty('--heading-primary-color', primaryColor);
    }
    if (mutedColor) {
      document.documentElement.style.setProperty('--heading-muted-color', mutedColor);
    }
    return Story();
  }],
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'primaryColor', 'mutedColor', 'text', 'className', 'level']
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultColor: '#000000',
    primaryColor: '#3b82f6',
    mutedColor: '#6b7280'
  },
  render: ({
    defaultColor,
    primaryColor,
    mutedColor
  }) => <div className="space-y-4">
      <div>
        <ShadcnHeading level="h2" size="h2" color="default">Default Color Heading</ShadcnHeading>
        <p className="text-sm text-muted-foreground">color="default"</p>
      </div>
      <div>
        <ShadcnHeading level="h2" size="h2" color="primary">Primary Color Heading</ShadcnHeading>
        <p className="text-sm text-muted-foreground">color="primary"</p>
      </div>
      <div>
        <ShadcnHeading level="h2" size="h2" color="muted">Muted Color Heading</ShadcnHeading>
        <p className="text-sm text-muted-foreground">color="muted"</p>
      </div>
    </div>,
  decorators: [(Story, context) => {
    const {
      defaultColor,
      primaryColor,
      mutedColor
    } = context.args;
    if (defaultColor) {
      document.documentElement.style.setProperty('--heading-default-color', defaultColor);
    }
    if (primaryColor) {
      document.documentElement.style.setProperty('--heading-primary-color', primaryColor);
    }
    if (mutedColor) {
      document.documentElement.style.setProperty('--heading-muted-color', mutedColor);
    }
    return Story();
  }],
  parameters: {
    layout: 'padded',
    controls: {
      include: ['defaultColor', 'primaryColor', 'mutedColor']
    }
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: ({
    level = 'h2',
    color = 'default'
  }) => <div className="space-y-4">
      <div>
        <ShadcnHeading level={level} size={level} color={color} weight="default">Default Weight Heading</ShadcnHeading>
        <p className="text-sm text-muted-foreground">weight="default"</p>
      </div>
      <div>
        <ShadcnHeading level={level} size={level} color={color} weight="thin">Thin Weight Heading</ShadcnHeading>
        <p className="text-sm text-muted-foreground">weight="thin"</p>
      </div>
      <div>
        <ShadcnHeading level={level} size={level} color={color} weight="semibold">Semibold Weight Heading</ShadcnHeading>
        <p className="text-sm text-muted-foreground">weight="semibold"</p>
      </div>
      <div>
        <ShadcnHeading level={level} size={level} color={color} weight="bold">Bold Weight Heading</ShadcnHeading>
        <p className="text-sm text-muted-foreground">weight="bold"</p>
      </div>
    </div>,
  args: {
    level: 'h2',
    color: 'default'
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'primaryColor', 'mutedColor', 'text', 'className', 'weight']
    }
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ({
    color = 'default',
    weight = 'default'
  }) => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Semantic H3 with H1 Visual Styling</h3>
        <ShadcnHeading level="h3" size="h1" color={color} weight={weight}>This is semantically H3 but looks like H1</ShadcnHeading>
        <p className="text-sm text-muted-foreground mt-1">level="h3" size="h1"</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Semantic H1 with H4 Visual Styling</h3>
        <ShadcnHeading level="h1" size="h4" color={color} weight={weight}>This is semantically H1 but looks like H4</ShadcnHeading>
        <p className="text-sm text-muted-foreground mt-1">level="h1" size="h4"</p>
      </div>
    </div>,
  args: {
    color: 'default',
    weight: 'default'
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['defaultColor', 'primaryColor', 'mutedColor', 'text', 'className', 'level', 'size', 'weight']
    }
  }
}`,...p.parameters?.docs?.source}}};const T=["Docs","Primary","AllLevels","ColorVariants","WeightVariants","SemanticVsVisual"];export{c as AllLevels,u as ColorVariants,n as Docs,m as Primary,p as SemanticVsVisual,h as WeightVariants,T as __namedExportsOrder,P as default};
