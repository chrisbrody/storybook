import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as _}from"./iframe-COOLqzpe.js";import{A as y}from"./aspect-ratio-Cur4wOVW.js";import{B as ie}from"./button-Ctlp8pR8.js";import{C as B,a as P,b as F}from"./card-B-FUt7B5.js";import{A as z,a as H,b as G}from"./avatar-CGqxzfMM.js";import{P as le}from"./index-z3zgewxm.js";import{c as r}from"./utils-CBfrqCZ4.js";import{T as O}from"./tagline-BI8_BMkD.js";import"./index-so1h2L6a.js";import"./index-CdJFUDDL.js";import"./index-BW_SlMhC.js";import"./index-CFrnmeOA.js";import"./index-QluWLMrY.js";import"./index-BSLrE5mu.js";var ce="Separator",$="horizontal",de=["horizontal","vertical"],J=_.forwardRef((u,l)=>{const{decorative:p,orientation:o=$,...k}=u,g=ue(o)?o:$,b=p?{role:"none"}:{"aria-orientation":g==="vertical"?g:void 0,role:"separator"};return e.jsx(le.div,{"data-orientation":g,...b,...k,ref:l})});J.displayName=ce;function ue(u){return de.includes(u)}var me=J;function W({className:u,orientation:l="horizontal",decorative:p=!0,...o}){return e.jsx(me,{"data-slot":"separator-root",decorative:p,orientation:l,className:r("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",u),...o})}W.__docgenInfo={description:"",methods:[],displayName:"Separator",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},decorative:{defaultValue:{value:"true",computed:!1},required:!1}}};const pe=[{id:1,title:"Getting Started with shadcn/ui: A Complete Guide",description:"Learn how to set up and use shadcn/ui components in your development workflow with shadcn/ui's powerful component library.",date:"Mar 15, 2024",category:"Tutorial",image:"https://ui.shadcn.com/placeholder.svg",author:"John Doe",authorImage:"https://github.com/shadcn.png",authorRole:"Developer"},{id:2,title:"Building Dark Mode with Next.js and Tailwind CSS",description:"Learn how to implement a seamless dark mode toggle in your Next.js application using Tailwind CSS and system preferences.",date:"Mar 12, 2024",category:"Development",image:"https://ui.shadcn.com/placeholder.svg",author:"Jane Smith",authorImage:"https://github.com/shadcn.png",authorRole:"Designer"},{id:3,title:"Mastering React Server Components",description:"Deep dive into React Server Components and learn how they can improve your application's performance and user experience.",date:"Mar 8, 2024",category:"Advanced",image:"https://ui.shadcn.com/placeholder.svg",author:"Alex Johnson",authorImage:"https://github.com/shadcn.png",authorRole:"Developer"},{id:4,title:"The Future of Web Development in 2024",description:"Explore the latest trends and technologies shaping the future of web development this year and beyond.",date:"Mar 5, 2024",category:"Insights",image:"https://ui.shadcn.com/placeholder.svg",author:"Max Verstappen",authorImage:"https://github.com/shadcn.png",authorRole:"Software Architect"}];function K({className:u,variant:l="default",backgroundColor:p="#ffffff",textColor:o="#000000",taglineColor:k,metaTextColor:g,tagline:D="Interior Design Projects",headline:b="Latest Design Transformations & Luxury Home Projects",description:q="Explore our portfolio of award-winning interior design projects featuring contemporary kitchens, luxury bathrooms, and complete home transformations across the Twin Cities.",posts:U,showImages:Q=!0,imageAspectRatio:I=4/3,gridColumns:X="4",cardGap:R="medium",hoverEffect:s=!0,linkColor:Y,hoverLinkColor:Z,buttonText:ee="View all articles",showButton:te=!0,buttonVariant:ae="outline",style:re,...oe}){const c=l==="minimal",A=l==="reversed",M=l==="featured",h=l==="list",f=U||pe,ne=c?f.slice(0,3).map((t,n)=>{const i=[{author:"John Doe",authorRole:"Developer"},{author:"Jane Smith",authorRole:"Designer"},{author:"Alex Johnson",authorRole:"Developer"}];return i[n]?{...t,author:i[n].author,authorRole:i[n].authorRole}:t}):f,se=h?f.map((t,n)=>{const i=[{author:"Lando Norris",authorRole:"Product Designer",title:"How can shadcn/ui kit for Figma improve your workflow?"},{author:"Charles Leclerc",authorRole:"Frontend Developer"},{author:"Lewis Hamilton",authorRole:"Tech Lead"},{author:"Max Verstappen",authorRole:"Software Architect"}];return i[n]?{...t,author:i[n].author,authorRole:i[n].authorRole,...i[n].title&&{title:i[n].title}}:t}):f,m=c?ne:h?se:f,v=c?!1:Q,S=c||A?"3":X,E=k||`${o}CC`,a=g||`${o}99`,d=Y||o,x=Z||d,V={small:"gap-4 md:gap-3",medium:"gap-8 md:gap-6",large:"gap-12 md:gap-8"},L={2:"md:grid-cols-2",3:c||A?"lg:grid-cols-3":"md:grid-cols-3",4:"md:grid-cols-2 lg:grid-cols-4"};return e.jsx("section",{className:r("section-padding-y",u),style:{backgroundColor:p,...re},"aria-labelledby":"blog-section-heading",...oe,children:e.jsx("div",{className:"container-padding-x container mx-auto",children:e.jsxs("div",{className:r("flex flex-col gap-10 md:gap-12",c||h?"items-start":"items-center"),children:[!M&&e.jsxs("div",{className:r("section-title-gap-lg flex flex-col",c||h?"max-w-2xl":"max-w-xl mx-auto items-center text-center"),children:[e.jsx(O,{style:{color:E},children:D}),e.jsx("h1",{id:"blog-section-heading",className:"heading-lg",style:{color:o},children:b}),e.jsx("p",{className:"text-base",style:{color:a},children:q})]}),h?e.jsx("div",{className:"flex w-full flex-col gap-10 md:gap-8",role:"list",children:m.map(t=>e.jsxs("div",{className:"group flex cursor-pointer flex-col gap-6 p-0 md:flex-row",role:"listitem",style:{"--link-color":d,"--hover-link-color":x},children:[v&&t.image&&e.jsx("div",{className:"w-full md:w-[200px]",children:e.jsx(y,{ratio:1/1,className:"overflow-hidden rounded-xl",children:e.jsx("img",{src:t.image,alt:`${t.title} thumbnail`,loading:"lazy",className:r("h-full w-full object-cover",s&&"transition-transform duration-200 group-hover:scale-105")})})}),e.jsxs("div",{className:"flex flex-1 flex-col justify-between p-0",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:"text-sm",style:{color:a},children:t.date}),e.jsx("span",{className:"text-sm",style:{color:a},children:"·"}),e.jsx("p",{className:"text-sm",style:{color:a},children:t.category})]}),e.jsx("h3",{className:r("text-base font-semibold transition-colors","text-[--link-color]",s&&"group-hover:text-[--hover-link-color] group-hover:underline"),children:t.title}),e.jsx("p",{className:"line-clamp-2 text-sm",style:{color:a},children:t.description})]}),e.jsxs("div",{className:"mt-6 flex items-center gap-4 md:mt-0",children:[e.jsxs(z,{className:"h-10 w-10",children:[e.jsx(H,{src:t.authorImage,alt:t.author}),e.jsx(G,{children:t.author?.charAt(0)||"A"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{className:"text-sm font-medium",style:{color:o},children:t.author}),e.jsx("p",{className:"text-sm",style:{color:a},children:t.authorRole})]})]})]})]},t.id))}):c?e.jsx("div",{className:r("grid grid-cols-1",L[S],V[R]),role:"list",children:m.map((t,n)=>e.jsxs(e.Fragment,{children:[e.jsxs(B,{className:"group flex cursor-pointer flex-col justify-between gap-6 rounded-none border-none bg-transparent p-0 shadow-none",role:"listitem",style:{"--link-color":d,"--hover-link-color":x},children:[e.jsxs(P,{className:"flex flex-col gap-3 p-0",children:[e.jsxs("div",{className:"flex items-center gap-2 text-left",children:[e.jsx("span",{className:"text-sm",style:{color:a},children:t.date}),e.jsx("span",{className:"text-sm",style:{color:a},children:"·"}),e.jsx("span",{className:"text-sm",style:{color:a},children:t.category})]}),e.jsx("h2",{className:r("text-base font-semibold leading-normal transition-colors","text-[--link-color]",s&&"group-hover:text-[--hover-link-color] group-hover:underline"),children:t.title}),e.jsx("p",{className:"text-sm leading-normal",style:{color:a},children:t.description})]}),e.jsxs(F,{className:"flex items-center gap-2 p-0",children:[e.jsxs(z,{className:"size-10",children:[e.jsx(H,{src:t.authorImage,alt:`${t.author} - ${t.authorRole}`}),e.jsx(G,{children:t.author?.charAt(0)||"A"})]}),e.jsxs("div",{className:"flex flex-1 flex-col items-start gap-0",children:[e.jsx("p",{className:"text-sm font-medium",style:{color:o},children:t.author}),e.jsx("p",{className:"text-sm",style:{color:a},children:t.authorRole})]})]})]},t.id),n<m.length-1&&e.jsx(W,{className:"lg:hidden"})]}))}):A?e.jsx("div",{className:r("grid grid-cols-1",L[S],V[R]),role:"list",children:m.map(t=>e.jsx(_.Fragment,{children:e.jsxs(B,{className:"group flex cursor-pointer flex-col justify-between gap-6 rounded-none border-none bg-transparent p-0 shadow-none",role:"listitem",style:{"--link-color":d,"--hover-link-color":x},children:[e.jsxs(P,{className:"flex flex-col gap-3 p-0",children:[e.jsxs("div",{className:"flex items-center gap-2 text-left",children:[e.jsx("span",{className:"text-sm",style:{color:a},children:t.date}),e.jsx("span",{className:"text-sm",style:{color:a},children:"·"}),e.jsx("span",{className:"text-sm",style:{color:a},children:t.category})]}),e.jsx("h2",{className:r("text-base font-semibold leading-normal transition-colors","text-[--link-color]",s&&"group-hover:text-[--hover-link-color] group-hover:underline"),children:t.title}),e.jsx("p",{className:"text-sm leading-normal line-clamp-2",style:{color:a},children:t.description})]}),e.jsx(F,{className:"p-0",children:v&&t.image&&e.jsx(y,{ratio:I,className:"w-full overflow-hidden rounded-xl",children:e.jsx("img",{src:t.image,alt:`${t.title} - Interior design project showcase`,loading:"lazy",className:r("h-full w-full object-cover",s&&"transition-transform duration-200 group-hover:scale-105")})})})]})},t.id))}):M?e.jsxs("div",{className:"grid grid-cols-1 gap-12 lg:grid-cols-2",children:[e.jsxs("div",{className:"flex max-w-lg flex-col items-start gap-8",children:[e.jsxs("div",{className:"section-title-gap-lg flex flex-col",children:[e.jsx(O,{style:{color:E},children:D}),e.jsx("h2",{id:"blog-section-heading",className:"heading-lg",style:{color:o},children:b}),e.jsx("p",{className:"text-base",style:{color:a},children:q})]}),te&&e.jsx(ie,{variant:ae,className:"w-fit",style:{borderColor:d,color:d},children:ee})]}),e.jsx("div",{className:"grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 md:gap-6",role:"list",children:m.map(t=>e.jsxs(B,{className:"group cursor-pointer gap-0 overflow-hidden rounded-lg border p-0",role:"listitem",style:{"--link-color":d,"--hover-link-color":x},children:[v&&t.image&&e.jsx(y,{ratio:I,className:"overflow-hidden",children:e.jsx("img",{src:t.image,alt:`${t.title} - Luxury interior design showcase`,loading:"lazy",className:r("h-full w-full object-cover",s&&"transition-transform duration-200 group-hover:scale-105")})}),e.jsxs(P,{className:"flex flex-col justify-between gap-4 p-6",children:[e.jsx("h3",{className:r("text-base font-semibold leading-normal transition-colors","text-[--link-color]",s&&"group-hover:text-[--hover-link-color] group-hover:underline"),children:t.title}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-sm leading-none",children:[e.jsx("span",{style:{color:a},children:t.date}),e.jsx("span",{style:{color:a},children:"·"}),e.jsx("span",{style:{color:a},children:t.category})]})]})]},t.id))})]}):e.jsx("ul",{className:r("grid grid-cols-1",L[S],V[R]),children:m.map(t=>e.jsx("li",{children:e.jsx("a",{href:"#",className:r("group block",s&&"transition-all duration-200"),style:{"--link-color":d,"--hover-link-color":x},children:e.jsxs("div",{className:"flex flex-col gap-4 rounded-xl",children:[v&&t.image&&e.jsx(y,{ratio:I,className:"overflow-hidden rounded-xl",children:e.jsx("img",{src:t.image,alt:`${t.title} - Interior design project showcase`,loading:"lazy",className:r("h-full w-full object-cover",s&&"transition-transform duration-200 group-hover:scale-105")})}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-left",children:[e.jsx("span",{className:"text-sm",style:{color:a},children:t.date}),e.jsx("span",{className:"text-sm",style:{color:a},children:"·"}),e.jsx("span",{className:"text-sm",style:{color:a},children:t.category})]}),e.jsx("h2",{className:r("text-base font-semibold leading-normal transition-colors","text-[--link-color]",s&&"group-hover:text-[--hover-link-color] group-hover:underline"),children:t.title}),e.jsx("p",{className:"text-sm leading-normal",style:{color:a},children:t.description})]})]})})},t.id))})]})})})}K.__docgenInfo={description:"",methods:[],displayName:"BlogSection",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "minimal" | "reversed" | "featured" | "list"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"minimal"'},{name:"literal",value:'"reversed"'},{name:"literal",value:'"featured"'},{name:"literal",value:'"list"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ffffff"',computed:!1}},textColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#000000"',computed:!1}},taglineColor:{required:!1,tsType:{name:"string"},description:""},metaTextColor:{required:!1,tsType:{name:"string"},description:""},tagline:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Interior Design Projects"',computed:!1}},headline:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Latest Design Transformations & Luxury Home Projects"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Explore our portfolio of award-winning interior design projects featuring contemporary kitchens, luxury bathrooms, and complete home transformations across the Twin Cities."',computed:!1}},posts:{required:!1,tsType:{name:"Array",elements:[{name:"BlogPost"}],raw:"BlogPost[]"},description:""},showImages:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},imageAspectRatio:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4/3",computed:!1}},gridColumns:{required:!1,tsType:{name:"union",raw:'"2" | "3" | "4"',elements:[{name:"literal",value:'"2"'},{name:"literal",value:'"3"'},{name:"literal",value:'"4"'}]},description:"",defaultValue:{value:'"4"',computed:!1}},cardGap:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},hoverEffect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},linkColor:{required:!1,tsType:{name:"string"},description:""},hoverLinkColor:{required:!1,tsType:{name:"string"},description:""},buttonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"View all articles"',computed:!1}},showButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},buttonVariant:{required:!1,tsType:{name:"union",raw:'"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"link"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}}}};const Re={title:"Slices/Blog Section",component:K,parameters:{layout:"fullscreen",docs:{description:{component:"A sophisticated blog section component designed for luxury interior design websites. Features customizable layout options, image controls, and comprehensive styling flexibility. Built on shadcn/ui foundations with full accessibility support and responsive design perfect for showcasing interior design projects, case studies, and design insights."}}},tags:["autodocs"],argTypes:{backgroundColor:{control:{type:"color"},description:"Background color of the section"},textColor:{control:{type:"color"},description:"Main text color for headlines and content"},taglineColor:{control:{type:"color"},description:"Color for the tagline text (if not set, uses textColor with opacity)"},metaTextColor:{control:{type:"color"},description:"Color for meta text like dates and categories (if not set, uses textColor with opacity)"},tagline:{control:{type:"text"},description:"Small tagline text above the headline"},headline:{control:{type:"text"},description:"Main headline text"},description:{control:{type:"text"},description:"Description text below the headline"},posts:{control:{type:"object"},description:"Array of blog post articles with customizable titles, descriptions, images, dates, and categories"},showImages:{control:{type:"boolean"},description:"Show/hide blog post images"},imageAspectRatio:{control:{type:"number",min:.5,max:3,step:.1},description:"Aspect ratio for blog post images (width/height)"},gridColumns:{control:{type:"select"},options:["2","3","4"],description:"Number of columns in the blog grid"},cardGap:{control:{type:"select"},options:["small","medium","large"],description:"Spacing between blog cards"},hoverEffect:{control:{type:"boolean"},description:"Enable hover effects on blog cards"},linkColor:{control:{type:"color"},description:"Color for blog post title links (if not set, uses textColor)"},hoverLinkColor:{control:{type:"color"},description:"Color for blog post title links on hover (if not set, uses linkColor)"},variant:{control:{type:"select"},options:["default","minimal","reversed","featured","list"],description:"Layout variant: 'default' with images and 4-column grid, 'minimal' with text-only cards and author info, 'reversed' with content-first layout and bottom images, 'featured' with two-column layout and button, 'list' with vertical list layout and side images"},buttonText:{control:{type:"text"},description:"Text for the button in featured variant"},showButton:{control:{type:"boolean"},description:"Show/hide the button in featured variant"},buttonVariant:{control:{type:"select"},options:["default","destructive","outline","secondary","ghost","link"],description:"Button variant style"}},args:{backgroundColor:"#ffffff",textColor:"#000000",tagline:"Interior Design Projects",headline:"Latest Design Transformations & Luxury Home Projects",description:"Explore our portfolio of award-winning interior design projects featuring contemporary kitchens, luxury bathrooms, and complete home transformations across the Twin Cities.",posts:[{id:1,title:"Contemporary Kitchen Remodel - Minnetonka Estate",description:"A stunning transformation of a traditional kitchen into a modern culinary space featuring premium quartz countertops, custom cabinetry, and high-end appliances.",date:"Mar 15, 2024",category:"Kitchen Design",image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&auto=format"},{id:2,title:"Luxury Master Suite Renovation - Wayzata Residence",description:"Complete bedroom and bathroom transformation featuring custom millwork, marble finishes, and sophisticated lighting design for ultimate comfort.",date:"Mar 12, 2024",category:"Bedroom Design",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&auto=format"},{id:3,title:"Award-Winning Living Space - Edina Home",description:"An open-concept living area showcasing contemporary furniture, custom built-ins, and curated art pieces that create an elegant entertaining space.",date:"Mar 8, 2024",category:"Living Spaces",image:"https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop&auto=format"},{id:4,title:"Custom Home Office Design - Plymouth Executive Home",description:"A sophisticated home office featuring built-in shelving, premium hardwood flooring, and carefully selected furnishings for productivity and style.",date:"Mar 5, 2024",category:"Office Design",image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format"}],showImages:!0,imageAspectRatio:4/3,gridColumns:"4",cardGap:"medium",hoverEffect:!0}},w={args:{}},j={args:{variant:"minimal",tagline:"Design Insights",headline:"Expert Interior Design Articles & Tips",description:"Discover professional insights and expert advice from our award-winning interior design team. Learn about the latest trends, material selections, and design processes that create stunning luxury homes.",gridColumns:"3",cardGap:"medium",hoverEffect:!0},argTypes:{gridColumns:{table:{disable:!0}},showImages:{table:{disable:!0}},imageAspectRatio:{table:{disable:!0}},buttonText:{table:{disable:!0}},showButton:{table:{disable:!0}},buttonVariant:{table:{disable:!0}}}},N={args:{variant:"reversed",tagline:"Design Portfolio",headline:"Featured Interior Design Projects & Showcase",description:"Browse our curated collection of luxury interior design transformations featuring award-winning projects and innovative space solutions for discerning clients.",gridColumns:"3",cardGap:"medium",hoverEffect:!0,imageAspectRatio:4/3},argTypes:{gridColumns:{table:{disable:!0}},buttonText:{table:{disable:!0}},showButton:{table:{disable:!0}},buttonVariant:{table:{disable:!0}}}},T={args:{variant:"featured",tagline:"Design Insights",headline:"Featured Interior Design Projects & Showcase",description:"Browse our curated collection of luxury interior design transformations featuring award-winning projects and innovative space solutions for discerning clients.",buttonText:"View portfolio",showButton:!0,buttonVariant:"outline",showImages:!0,imageAspectRatio:4/3,hoverEffect:!0},argTypes:{gridColumns:{table:{disable:!0}},cardGap:{table:{disable:!0}}}},C={args:{variant:"list",tagline:"Design Insights",headline:"Featured Interior Design Projects & Showcase",description:"Browse our curated collection of luxury interior design transformations featuring award-winning projects and innovative space solutions for discerning clients.",showImages:!0,hoverEffect:!0},argTypes:{gridColumns:{table:{disable:!0}},cardGap:{table:{disable:!0}},imageAspectRatio:{table:{disable:!0}},showButton:{table:{disable:!0}},buttonText:{table:{disable:!0}},buttonVariant:{table:{disable:!0}}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "minimal",
    tagline: "Design Insights",
    headline: "Expert Interior Design Articles & Tips",
    description: "Discover professional insights and expert advice from our award-winning interior design team. Learn about the latest trends, material selections, and design processes that create stunning luxury homes.",
    gridColumns: "3",
    cardGap: "medium",
    hoverEffect: true
  },
  argTypes: {
    // Hide controls not used in Minimal layout
    gridColumns: {
      table: {
        disable: true
      }
    },
    showImages: {
      table: {
        disable: true
      }
    },
    imageAspectRatio: {
      table: {
        disable: true
      }
    },
    buttonText: {
      table: {
        disable: true
      }
    },
    showButton: {
      table: {
        disable: true
      }
    },
    buttonVariant: {
      table: {
        disable: true
      }
    }
  }
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "reversed",
    tagline: "Design Portfolio",
    headline: "Featured Interior Design Projects & Showcase",
    description: "Browse our curated collection of luxury interior design transformations featuring award-winning projects and innovative space solutions for discerning clients.",
    gridColumns: "3",
    cardGap: "medium",
    hoverEffect: true,
    imageAspectRatio: 4 / 3
  },
  argTypes: {
    // Hide controls not used in Reversed layout
    gridColumns: {
      table: {
        disable: true
      }
    },
    buttonText: {
      table: {
        disable: true
      }
    },
    showButton: {
      table: {
        disable: true
      }
    },
    buttonVariant: {
      table: {
        disable: true
      }
    }
  }
}`,...N.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "featured",
    tagline: "Design Insights",
    headline: "Featured Interior Design Projects & Showcase",
    description: "Browse our curated collection of luxury interior design transformations featuring award-winning projects and innovative space solutions for discerning clients.",
    buttonText: "View portfolio",
    showButton: true,
    buttonVariant: "outline",
    showImages: true,
    imageAspectRatio: 4 / 3,
    hoverEffect: true
  },
  argTypes: {
    // Hide controls not used in Featured layout
    gridColumns: {
      table: {
        disable: true
      }
    },
    cardGap: {
      table: {
        disable: true
      }
    }
  }
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "list",
    tagline: "Design Insights",
    headline: "Featured Interior Design Projects & Showcase",
    description: "Browse our curated collection of luxury interior design transformations featuring award-winning projects and innovative space solutions for discerning clients.",
    showImages: true,
    hoverEffect: true
  },
  argTypes: {
    // Hide controls not used in List layout
    gridColumns: {
      table: {
        disable: true
      }
    },
    cardGap: {
      table: {
        disable: true
      }
    },
    imageAspectRatio: {
      table: {
        disable: true
      }
    },
    showButton: {
      table: {
        disable: true
      }
    },
    buttonText: {
      table: {
        disable: true
      }
    },
    buttonVariant: {
      table: {
        disable: true
      }
    }
  }
}`,...C.parameters?.docs?.source}}};const Ae=["Default","Minimal","Reversed","Featured","List"];export{w as Default,T as Featured,C as List,j as Minimal,N as Reversed,Ae as __namedExportsOrder,Re as default};
