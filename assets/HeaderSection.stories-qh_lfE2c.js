import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as f}from"./tagline-3Lsexh7e.js";import{r as b}from"./iframe-C4XYm0XF.js";import{S as U}from"./index-h1AStERs.js";import{c as x}from"./utils-CBfrqCZ4.js";import{C as G}from"./chevron-right-CJ3-4zcE.js";import"./index-CdJFUDDL.js";import"./createLucideIcon-D_dzvEMn.js";const B=b.forwardRef(({...a},t)=>e.jsx("nav",{ref:t,"aria-label":"breadcrumb",...a}));B.displayName="Breadcrumb";const q=b.forwardRef(({className:a,...t},n)=>e.jsx("ol",{ref:n,className:x("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",a),...t}));q.displayName="BreadcrumbList";const V=b.forwardRef(({className:a,...t},n)=>e.jsx("li",{ref:n,className:x("inline-flex items-center gap-1.5",a),...t}));V.displayName="BreadcrumbItem";const E=b.forwardRef(({asChild:a,className:t,...n},r)=>{const D=a?U:"a";return e.jsx(D,{ref:r,className:x("transition-colors hover:text-foreground",t),...n})});E.displayName="BreadcrumbLink";const F=b.forwardRef(({className:a,...t},n)=>e.jsx("span",{ref:n,role:"link","aria-disabled":"true","aria-current":"page",className:x("font-normal text-foreground",a),...t}));F.displayName="BreadcrumbPage";const k=({children:a,className:t,...n})=>e.jsx("li",{role:"presentation","aria-hidden":"true",className:x("[&>svg]:w-3.5 [&>svg]:h-3.5",t),...n,children:a??e.jsx(G,{})});k.displayName="BreadcrumbSeparator";B.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};q.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};V.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};E.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};F.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};k.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};function P({tagline:a="Interior Design Studio",taglineFont:t="Inter",taglineColor:n,heading:r="Transform Your Space with Expert Interior Design",headlineFont:D="Inter",headlineColor:M,description:l="Experience luxury interior design that reflects your unique style and enhances your daily life. Our award-winning team creates stunning, functional spaces that exceed expectations.",descriptionFont:O="Inter",descriptionColor:Y,taglineVariant:g="ghost",alignment:A="center",background:i="default",layout:m="default",breadcrumbs:y=[{label:"Home",href:"/"},{label:"Header Sections",href:"/header-sections"},{label:"Header Section Five"}],className:s="",backgroundColor:$}){const o={default:"bg-background",muted:"bg-muted",accent:"bg-accent"},z={center:"items-center text-center",left:"items-center text-center md:items-start md:text-left"},d={backgroundColor:$||void 0},p={color:n||void 0,fontFamily:t||void 0},c={color:M||void 0,fontFamily:D||void 0},u={color:Y||void 0,fontFamily:O||void 0},_=(h=!1)=>!y||y.length===0?null:e.jsx(B,{children:e.jsx(q,{children:y.map((H,R)=>e.jsx(V,{children:R===y.length-1?e.jsx(F,{className:h?"text-white":"",children:H.label}):e.jsxs(e.Fragment,{children:[e.jsx(E,{href:H.href||"#",className:h?"text-white":"text-muted-foreground",children:H.label}),e.jsx(k,{className:h?"text-white":"text-muted-foreground"})]})},R))})});if(m==="hero")return e.jsx("div",{className:"w-screen",children:e.jsx("section",{className:`${o[i]} section-padding-y ${s}`,style:d,"aria-labelledby":"page-heading",children:e.jsx("div",{className:"container-padding-x container mx-auto",children:e.jsxs("div",{className:"mx-auto flex max-w-4xl flex-col items-center gap-6 text-center",children:[e.jsx(f,{variant:g,style:p,children:a}),e.jsx("h1",{id:"page-heading",className:"text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground",style:c,children:r}),e.jsx("p",{className:"text-muted-foreground text-lg sm:text-xl max-w-2xl",style:u,"aria-description":"page description",children:l})]})})})});if(m==="hero-left-aligned")return e.jsx("div",{className:"w-screen",children:e.jsx("section",{className:`${o[i]} section-padding-y ${s}`,style:d,"aria-labelledby":"page-heading",children:e.jsx("div",{className:"container-padding-x container mx-auto",children:e.jsxs("div",{className:"flex max-w-4xl flex-col gap-6 text-left",children:[e.jsx(f,{variant:g,style:p,children:a}),e.jsx("h1",{id:"page-heading",className:"heading-xl text-foreground",style:c,children:r}),e.jsx("p",{className:"text-muted-foreground text-base lg:text-lg max-w-2xl",style:u,"aria-description":"page description",children:l})]})})})});if(m==="hero-breadcrumbs"){const h=$==="#1a1a1a"||i==="accent";return e.jsx("div",{className:"w-screen",children:e.jsx("section",{className:`${o[i]} section-padding-y ${s}`,style:d,"aria-labelledby":"page-heading",children:e.jsx("div",{className:"container-padding-x container mx-auto",children:e.jsxs("div",{className:"flex max-w-4xl flex-col gap-16 text-left",children:[_(h),e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(f,{variant:g,style:p,children:a}),e.jsx("h1",{id:"page-heading",className:"text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground",style:c,children:r}),e.jsx("p",{className:"text-muted-foreground text-lg sm:text-xl max-w-2xl",style:u,"aria-description":"page description",children:l})]})]})})})})}return m==="minimal"?e.jsx("div",{className:"w-screen",children:e.jsx("section",{className:`${o[i]} py-8 md:py-12 ${s}`,style:d,"aria-labelledby":"page-heading",children:e.jsx("div",{className:"container-padding-x container mx-auto",children:e.jsxs("div",{className:"mx-auto flex max-w-2xl flex-col items-center gap-4 text-center",children:[e.jsx("h1",{id:"page-heading",className:"heading-lg text-foreground",style:c,children:r}),e.jsx("p",{className:"text-muted-foreground text-base",style:u,"aria-description":"page description",children:l})]})})})}):m==="left-aligned"?e.jsx("div",{className:"w-screen",children:e.jsx("section",{className:`${o[i]} section-padding-y ${s}`,style:d,"aria-labelledby":"page-heading",children:e.jsx("div",{className:"container-padding-x container mx-auto",children:e.jsxs("div",{className:"flex max-w-4xl flex-col gap-6 text-left",children:[e.jsx(f,{variant:g,style:p,children:a}),e.jsx("h1",{id:"page-heading",className:"heading-xl text-foreground",style:c,children:r}),e.jsx("p",{className:"text-muted-foreground text-base lg:text-lg max-w-2xl",style:u,"aria-description":"page description",children:l})]})})})}):m==="left-breadcrumbs"?e.jsx("div",{className:"w-screen",children:e.jsx("section",{className:`${o[i]} section-padding-y ${s}`,style:d,"aria-labelledby":"page-heading",children:e.jsx("div",{className:"container-padding-x container mx-auto",children:e.jsxs("div",{className:"flex max-w-4xl flex-col gap-16 text-left",children:[_(),e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(f,{variant:g,style:p,children:a}),e.jsx("h1",{id:"page-heading",className:"heading-xl text-foreground",style:c,children:r}),e.jsx("p",{className:"text-muted-foreground text-base lg:text-lg max-w-2xl",style:u,"aria-description":"page description",children:l})]})]})})})}):m==="split"?e.jsx("div",{className:"w-screen",children:e.jsx("section",{className:`${o[i]} section-padding-y ${s}`,style:d,"aria-labelledby":"page-heading",children:e.jsx("div",{className:"container-padding-x container mx-auto",children:e.jsxs("div",{className:"grid gap-8 lg:grid-cols-2 lg:gap-16 items-center",children:[e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(f,{variant:g,style:p,children:a}),e.jsx("h1",{id:"page-heading",className:"heading-xl text-foreground",style:c,children:r})]}),e.jsx("div",{children:e.jsx("p",{className:"text-muted-foreground text-base lg:text-lg",style:u,"aria-description":"page description",children:l})})]})})})}):e.jsx("div",{className:"w-screen",children:e.jsx("section",{className:`${o[i]} section-padding-y ${s}`,style:d,"aria-labelledby":"page-heading",children:e.jsx("div",{className:"container-padding-x container mx-auto",children:e.jsx("div",{className:"mx-auto flex max-w-xl flex-col items-center gap-8 md:gap-10",children:e.jsx("div",{className:"section-title-gap-xl flex max-w-xl flex-1 flex-col",children:e.jsxs("div",{className:`section-title-gap-xl flex flex-col ${z[A]}`,children:[e.jsx(f,{variant:g,style:p,children:a}),e.jsx("h1",{id:"page-heading",className:"heading-xl text-foreground",style:c,children:r}),e.jsx("p",{className:"text-muted-foreground text-base lg:text-lg",style:u,"aria-description":"page description",children:l})]})})})})})})}P.__docgenInfo={description:"",methods:[],displayName:"HeaderSection",props:{tagline:{required:!1,tsType:{name:"string"},description:"The tagline text displayed above the heading",defaultValue:{value:'"Interior Design Studio"',computed:!1}},taglineFont:{required:!1,tsType:{name:"string"},description:"Font family for tagline",defaultValue:{value:'"Inter"',computed:!1}},taglineColor:{required:!1,tsType:{name:"string"},description:"Color for tagline text"},heading:{required:!1,tsType:{name:"string"},description:"The main heading text",defaultValue:{value:'"Transform Your Space with Expert Interior Design"',computed:!1}},headlineFont:{required:!1,tsType:{name:"string"},description:"Font family for headline",defaultValue:{value:'"Inter"',computed:!1}},headlineColor:{required:!1,tsType:{name:"string"},description:"Color for headline text"},description:{required:!1,tsType:{name:"string"},description:"The description text below the heading",defaultValue:{value:'"Experience luxury interior design that reflects your unique style and enhances your daily life. Our award-winning team creates stunning, functional spaces that exceed expectations."',computed:!1}},descriptionFont:{required:!1,tsType:{name:"string"},description:"Font family for description",defaultValue:{value:'"Inter"',computed:!1}},descriptionColor:{required:!1,tsType:{name:"string"},description:"Color for description text"},taglineVariant:{required:!1,tsType:{name:"union",raw:'"default" | "ghost" | "white"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"white"'}]},description:"Tagline variant style",defaultValue:{value:'"ghost"',computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:'"center" | "left"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"left"'}]},description:"Text alignment",defaultValue:{value:'"center"',computed:!1}},background:{required:!1,tsType:{name:"union",raw:'"default" | "muted" | "accent"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"accent"'}]},description:"Background color variant",defaultValue:{value:'"default"',computed:!1}},layout:{required:!1,tsType:{name:"union",raw:'"default" | "left-aligned" | "left-breadcrumbs" | "hero" | "hero-left-aligned" | "hero-breadcrumbs" | "minimal" | "split"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"left-aligned"'},{name:"literal",value:'"left-breadcrumbs"'},{name:"literal",value:'"hero"'},{name:"literal",value:'"hero-left-aligned"'},{name:"literal",value:'"hero-breadcrumbs"'},{name:"literal",value:'"minimal"'},{name:"literal",value:'"split"'}]},description:"Layout variant",defaultValue:{value:'"default"',computed:!1}},breadcrumbs:{required:!1,tsType:{name:"Array",elements:[{name:"HeaderBreadcrumbItem"}],raw:"HeaderBreadcrumbItem[]"},description:"Breadcrumb items for breadcrumb layouts",defaultValue:{value:`[
  { label: "Home", href: "/" },
  { label: "Header Sections", href: "/header-sections" },
  { label: "Header Section Five" }
]`,computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom CSS classes",defaultValue:{value:'""',computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color of the section"}}};const te={title:"Slices/Header",component:P,parameters:{layout:"fullscreen",docs:{description:{component:"A flexible header section component perfect for landing pages and content sections. Features customizable tagline, heading, description, and styling options."}}},tags:["autodocs"],argTypes:{tagline:{control:"text",description:"The small text displayed above the main heading",table:{category:"Content",subcategory:"1. Tagline"}},taglineFont:{control:{type:"select"},options:["Inter","Roboto","Open Sans","Playfair Display","Source Code Pro"],description:"Font family for the tagline",table:{category:"Content",subcategory:"1. Tagline"}},taglineColor:{control:{type:"color"},description:"Color for the tagline text",table:{category:"Content",subcategory:"1. Tagline"}},heading:{control:"text",description:"The main headline text",table:{category:"Content",subcategory:"2. Heading"}},headlineFont:{control:{type:"select"},options:["Inter","Roboto","Open Sans","Playfair Display","Source Code Pro"],description:"Font family for the headline",table:{category:"Content",subcategory:"2. Heading"}},headlineColor:{control:{type:"color"},description:"Color for the headline text",table:{category:"Content",subcategory:"2. Heading"}},description:{control:"text",description:"The descriptive text below the heading",table:{category:"Content",subcategory:"3. Description"}},descriptionFont:{control:{type:"select"},options:["Inter","Roboto","Open Sans","Playfair Display","Source Code Pro"],description:"Font family for the description",table:{category:"Content",subcategory:"3. Description"}},descriptionColor:{control:{type:"color"},description:"Color for the description text",table:{category:"Content",subcategory:"3. Description"}},layout:{control:{type:"select"},options:["default","centered","left-aligned","left-breadcrumbs","hero","hero-breadcrumbs","minimal","split"],description:"Layout variant - different structural layouts for various use cases",table:{category:"Layout & Styling"}},breadcrumbs:{control:{type:"object"},description:"Array of breadcrumb items for breadcrumb layouts",table:{category:"Layout & Styling"}},alignment:{control:{type:"select"},options:["center","left"],description:"Text alignment - center always centers, left centers on mobile but left-aligns on desktop (used in default layout only)",table:{category:"Layout & Styling"}},background:{control:{type:"select"},options:["default","muted","accent"],description:"Background color variant",table:{category:"Layout & Styling"}},backgroundColor:{control:{type:"color"},description:"Background color of the section",table:{category:"Layout & Styling"}},className:{control:"text",description:"Additional CSS classes to apply",table:{category:"Advanced"}}},args:{tagline:"Interior Design Studio",heading:"Transform Your Space with Expert Interior Design",description:"Eminent Interior Design creates sophisticated, luxury spaces that reflect your personal style and enhance your daily living experience.",taglineVariant:"ghost",alignment:"center",background:"default"}},v={args:{},argTypes:{taglineVariant:{table:{disable:!0}},alignment:{table:{disable:!0}},breadcrumbs:{table:{disable:!0}}}},j={args:{layout:"left-aligned",tagline:"Eminent Interior Design",heading:"Creating Exceptional Spaces for Luxury Living",description:"Our expert team specializes in high-end residential and commercial interior design, delivering stunning results that exceed expectations while maintaining functionality and timeless appeal."},argTypes:{taglineVariant:{table:{disable:!0}},alignment:{table:{disable:!0}},breadcrumbs:{table:{disable:!0}}}},C={args:{layout:"left-breadcrumbs",tagline:"Eminent Interior Design",heading:"Creating Exceptional Spaces for Luxury Living",description:"Our expert team specializes in high-end residential and commercial interior design, delivering stunning results that exceed expectations while maintaining functionality and timeless appeal.",breadcrumbs:[{label:"Home",href:"/"},{label:"Header Sections",href:"/header-sections"},{label:"Header Section Five"}]},argTypes:{taglineVariant:{table:{disable:!0}},alignment:{table:{disable:!0}}}},S={args:{layout:"hero",tagline:"Luxury Interior Design Studio",heading:"Transform Your Home Into a Masterpiece",description:"Experience award-winning interior design that creates stunning, functional spaces reflecting your unique style and enhancing your daily life through sophisticated design solutions.",backgroundColor:"#1a1a1a",taglineColor:"#fafafa",headlineColor:"#fafafa",descriptionColor:"#fafafa"},argTypes:{taglineVariant:{table:{disable:!0}},alignment:{table:{disable:!0}},breadcrumbs:{table:{disable:!0}}}},N={args:{layout:"hero-left-aligned",tagline:"Luxury Interior Design Studio",heading:"Transform Your Home Into a Masterpiece",description:"Experience award-winning interior design that creates stunning, functional spaces reflecting your unique style and enhancing your daily life through sophisticated design solutions.",backgroundColor:"#1a1a1a",taglineColor:"#fafafa",headlineColor:"#fafafa",descriptionColor:"#fafafa"},argTypes:{taglineVariant:{table:{disable:!0}},alignment:{table:{disable:!0}}}},w={args:{layout:"hero-breadcrumbs",tagline:"Luxury Interior Design Studio",heading:"Transform Your Home Into a Masterpiece",description:"Experience award-winning interior design that creates stunning, functional spaces reflecting your unique style and enhancing your daily life through sophisticated design solutions.",backgroundColor:"#1a1a1a",taglineColor:"#fafafa",headlineColor:"#fafafa",descriptionColor:"#fafafa",breadcrumbs:[{label:"Home",href:"/"},{label:"Portfolio",href:"/portfolio"},{label:"Luxury Projects",href:"/luxury-projects"},{label:"Modern Living Spaces"}]},argTypes:{taglineVariant:{table:{disable:!0}},alignment:{table:{disable:!0}}}},T={args:{layout:"minimal",heading:"Expert Interior Design Services",description:"Creating beautiful, functional spaces that enhance your lifestyle through thoughtful design and premium materials."},argTypes:{taglineVariant:{table:{disable:!0}},alignment:{table:{disable:!0}},tagline:{table:{disable:!0}},breadcrumbs:{table:{disable:!0}}}},I={args:{layout:"split",tagline:"Interior Design Studio",heading:"Luxury Design Solutions for Modern Living",description:"Our comprehensive approach to interior design combines aesthetic excellence with practical functionality, creating spaces that are both beautiful and livable for discerning homeowners."},argTypes:{taglineVariant:{table:{disable:!0}},alignment:{table:{disable:!0}},breadcrumbs:{table:{disable:!0}}}},L={args:{layout:"default",tagline:"Custom Design Solutions",heading:"Tailored Interior Design for Your Unique Vision",description:"Every project is customized to reflect your personal style and functional needs, ensuring a space that truly feels like home.",className:"border-t-4 border-blue-500",taglineColor:"#1f1f1f",headlineColor:"#1f1f1f",backgroundColor:"#f8f9fa"},argTypes:{taglineVariant:{table:{disable:!0}},breadcrumbs:{table:{disable:!0}}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {},
  argTypes: {
    taglineVariant: {
      table: {
        disable: true
      }
    },
    alignment: {
      table: {
        disable: true
      }
    },
    breadcrumbs: {
      table: {
        disable: true
      }
    }
  }
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'left-aligned',
    tagline: 'Eminent Interior Design',
    heading: 'Creating Exceptional Spaces for Luxury Living',
    description: 'Our expert team specializes in high-end residential and commercial interior design, delivering stunning results that exceed expectations while maintaining functionality and timeless appeal.'
  },
  argTypes: {
    taglineVariant: {
      table: {
        disable: true
      }
    },
    alignment: {
      table: {
        disable: true
      }
    },
    breadcrumbs: {
      table: {
        disable: true
      }
    }
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'left-breadcrumbs',
    tagline: 'Eminent Interior Design',
    heading: 'Creating Exceptional Spaces for Luxury Living',
    description: 'Our expert team specializes in high-end residential and commercial interior design, delivering stunning results that exceed expectations while maintaining functionality and timeless appeal.',
    breadcrumbs: [{
      label: "Home",
      href: "/"
    }, {
      label: "Header Sections",
      href: "/header-sections"
    }, {
      label: "Header Section Five"
    }]
  },
  argTypes: {
    taglineVariant: {
      table: {
        disable: true
      }
    },
    alignment: {
      table: {
        disable: true
      }
    }
  }
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'hero',
    tagline: 'Luxury Interior Design Studio',
    heading: 'Transform Your Home Into a Masterpiece',
    description: 'Experience award-winning interior design that creates stunning, functional spaces reflecting your unique style and enhancing your daily life through sophisticated design solutions.',
    backgroundColor: '#1a1a1a',
    taglineColor: '#fafafa',
    headlineColor: '#fafafa',
    descriptionColor: '#fafafa'
  },
  argTypes: {
    taglineVariant: {
      table: {
        disable: true
      }
    },
    alignment: {
      table: {
        disable: true
      }
    },
    breadcrumbs: {
      table: {
        disable: true
      }
    }
  }
}`,...S.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'hero-left-aligned',
    tagline: 'Luxury Interior Design Studio',
    heading: 'Transform Your Home Into a Masterpiece',
    description: 'Experience award-winning interior design that creates stunning, functional spaces reflecting your unique style and enhancing your daily life through sophisticated design solutions.',
    backgroundColor: '#1a1a1a',
    taglineColor: '#fafafa',
    headlineColor: '#fafafa',
    descriptionColor: '#fafafa'
  },
  argTypes: {
    taglineVariant: {
      table: {
        disable: true
      }
    },
    alignment: {
      table: {
        disable: true
      }
    }
  }
}`,...N.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'hero-breadcrumbs',
    tagline: 'Luxury Interior Design Studio',
    heading: 'Transform Your Home Into a Masterpiece',
    description: 'Experience award-winning interior design that creates stunning, functional spaces reflecting your unique style and enhancing your daily life through sophisticated design solutions.',
    backgroundColor: '#1a1a1a',
    taglineColor: '#fafafa',
    headlineColor: '#fafafa',
    descriptionColor: '#fafafa',
    breadcrumbs: [{
      label: "Home",
      href: "/"
    }, {
      label: "Portfolio",
      href: "/portfolio"
    }, {
      label: "Luxury Projects",
      href: "/luxury-projects"
    }, {
      label: "Modern Living Spaces"
    }]
  },
  argTypes: {
    taglineVariant: {
      table: {
        disable: true
      }
    },
    alignment: {
      table: {
        disable: true
      }
    }
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'minimal',
    heading: 'Expert Interior Design Services',
    description: 'Creating beautiful, functional spaces that enhance your lifestyle through thoughtful design and premium materials.'
  },
  argTypes: {
    taglineVariant: {
      table: {
        disable: true
      }
    },
    alignment: {
      table: {
        disable: true
      }
    },
    tagline: {
      table: {
        disable: true
      }
    },
    breadcrumbs: {
      table: {
        disable: true
      }
    }
  }
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'split',
    tagline: 'Interior Design Studio',
    heading: 'Luxury Design Solutions for Modern Living',
    description: 'Our comprehensive approach to interior design combines aesthetic excellence with practical functionality, creating spaces that are both beautiful and livable for discerning homeowners.'
  },
  argTypes: {
    taglineVariant: {
      table: {
        disable: true
      }
    },
    alignment: {
      table: {
        disable: true
      }
    },
    breadcrumbs: {
      table: {
        disable: true
      }
    }
  }
}`,...I.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'default',
    tagline: 'Custom Design Solutions',
    heading: 'Tailored Interior Design for Your Unique Vision',
    description: 'Every project is customized to reflect your personal style and functional needs, ensuring a space that truly feels like home.',
    className: 'border-t-4 border-blue-500',
    taglineColor: "#1f1f1f",
    headlineColor: "#1f1f1f",
    backgroundColor: '#f8f9fa'
  },
  argTypes: {
    taglineVariant: {
      table: {
        disable: true
      }
    },
    breadcrumbs: {
      table: {
        disable: true
      }
    }
  }
}`,...L.parameters?.docs?.source}}};const ne=["Default","LeftAligned","LeftBreadCrumbs","Hero","HeroLeftAligned","HeroBreadcrumbs","Minimal","Split","CustomStyling"];export{L as CustomStyling,v as Default,S as Hero,w as HeroBreadcrumbs,N as HeroLeftAligned,j as LeftAligned,C as LeftBreadCrumbs,T as Minimal,I as Split,ne as __namedExportsOrder,te as default};
