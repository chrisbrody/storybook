import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as a,a as p,b as u,c as x,d as r,e as f}from"./card-Bifmo93h.js";import{B as m}from"./button-B0yoUifj.js";import{I as g}from"./input-Bzc2LmeS.js";import"./iframe-COw08Uat.js";import"./utils-CBfrqCZ4.js";import"./index-Dsu4A80O.js";import"./index-CdJFUDDL.js";const T={title:"Components/Card",component:a,parameters:{layout:"centered",docs:{description:{component:"A versatile card component built on shadcn/ui foundations. Perfect for displaying various types of content including forms, property listings, and project information for luxury interior design applications."}}},argTypes:{className:{control:"text",description:"Additional CSS classes"},propertyImage:{control:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp"},description:"Upload property listing image (PNG, JPG, JPEG, GIF, WebP)"},projectImage:{control:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp"},description:"Upload project gallery image (PNG, JPG, JPEG, GIF, WebP)"},titleSize:{control:"select",options:["sm","base","lg","xl","2xl"],description:"Size variant for the card title"},titleWeight:{control:"select",options:["normal","medium","semibold","bold"],description:"Font weight for the card title"},titleColor:{control:"color",description:"Custom color for the card title"},descriptionSize:{control:"select",options:["xs","sm","base","lg"],description:"Size variant for the card description"},descriptionColor:{control:"color",description:"Custom color for the card description"},contentSize:{control:"select",options:["xs","sm","base","lg"],description:"Size variant for the card content text"},contentColor:{control:"color",description:"Custom color for the card content text"},fontFamily:{control:"select",options:["sans","serif","mono","inter","playfair","montserrat"],description:"Font family for the card text"},borderColor:{control:"color",description:"Custom border color for the card"},backgroundColor:{control:"color",description:"Custom background color for the card"},shadowSize:{control:"select",options:["sm","base","md","lg","xl"],description:"Shadow size for the card"}}},h=(t,s)=>{const o={title:{sm:"text-lg",base:"text-xl",lg:"text-2xl",xl:"text-3xl","2xl":"text-4xl"},description:{xs:"text-xs",sm:"text-sm",base:"text-base",lg:"text-lg"},content:{xs:"text-xs",sm:"text-sm",base:"text-base",lg:"text-lg"}};return o[s][t]||o[s].base},j=t=>({normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"})[t]||"font-semibold",N=t=>({sans:"font-sans",serif:"font-serif",mono:"font-mono",inter:"font-inter",playfair:"font-playfair",montserrat:"font-montserrat"})[t]||"font-sans",w=t=>({sm:"shadow-sm",base:"shadow",md:"shadow-md",lg:"shadow-lg",xl:"shadow-xl"})[t]||"shadow-sm",n={args:{titleSize:"base",titleWeight:"semibold",titleColor:"#000000",descriptionSize:"sm",descriptionColor:"#6b7280",contentSize:"sm",contentColor:"#6b7280",fontFamily:"sans",borderColor:"#e5e7eb",backgroundColor:"#ffffff",shadowSize:"sm"},render:t=>{const s={borderColor:t.borderColor,backgroundColor:t.backgroundColor},o={color:t.titleColor},y={color:t.descriptionColor},C={color:t.contentColor};return e.jsxs(a,{className:`w-[350px] ${w(t.shadowSize)} ${N(t.fontFamily)}`,style:s,children:[e.jsxs(p,{children:[e.jsx(u,{className:`${h(t.titleSize,"title")} ${j(t.titleWeight)} leading-none tracking-tight`,style:o,children:"Luxury Kitchen Consultation"}),e.jsx(x,{className:h(t.descriptionSize,"description"),style:y,children:"Schedule your complimentary design consultation with our expert team."})]}),e.jsx(r,{children:e.jsx("p",{className:h(t.contentSize,"content"),style:C,children:"Transform your kitchen into a sophisticated culinary space with our award-winning design approach."})}),e.jsx(f,{children:e.jsx(m,{className:"w-full",children:"Schedule Consultation"})})]})}},i={render:()=>e.jsxs(a,{className:"w-[350px]",children:[e.jsxs(p,{children:[e.jsx(u,{children:"Login to your account"}),e.jsx(x,{children:"Enter your email below to login to your account"})]}),e.jsxs(r,{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email"}),e.jsx(g,{id:"email",type:"email",placeholder:"m@example.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("label",{htmlFor:"password",className:"text-sm font-medium",children:"Password"}),e.jsx("a",{href:"#",className:"text-sm text-blue-600 hover:underline",children:"Forgot your password?"})]}),e.jsx(g,{id:"password",type:"password",placeholder:"Placeholder"})]})]}),e.jsxs(f,{className:"flex flex-col space-y-2",children:[e.jsx(m,{className:"w-full",children:"Login"}),e.jsx(m,{variant:"outline",className:"w-full",children:"Login with Google"}),e.jsxs("p",{className:"text-sm text-center text-muted-foreground",children:["Don't have an account?"," ",e.jsx("a",{href:"#",className:"text-blue-600 hover:underline",children:"Sign up"})]})]})]})},l={render:()=>e.jsxs(a,{className:"w-[350px]",children:[e.jsxs(p,{children:[e.jsx(u,{children:"Meeting Notes"}),e.jsx(x,{children:"Transcript from the meeting with the client."})]}),e.jsx(r,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Client requested dashboard redesign with focus on mobile responsiveness."}),e.jsxs("ol",{className:"text-sm text-muted-foreground space-y-1 list-decimal list-inside md:pl-4 pl-2",children:[e.jsx("li",{children:"New analytics widgets for daily/weekly metrics"}),e.jsx("li",{children:"Simplified navigation menu"}),e.jsx("li",{children:"Dark mode support"}),e.jsx("li",{children:"Timeline: 6 weeks"}),e.jsx("li",{children:"Follow-up meeting scheduled for next Tuesday"})]})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("div",{className:"w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-xs font-medium",children:"JD"})}),e.jsx("div",{className:"w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-xs font-medium",children:"SM"})}),e.jsx("div",{className:"w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-xs font-medium",children:"AB"})})]})]})})]})},c={args:{propertyImage:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=350&h=200&fit=crop"},render:({propertyImage:t})=>e.jsx(a,{className:"w-[350px]",children:e.jsxs(r,{className:"p-0",children:[e.jsx("div",{className:"relative",children:e.jsx("img",{src:t,alt:"Luxury property interior",className:"w-full h-48 rounded-t-lg object-cover"})}),e.jsx("div",{className:"p-6",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center space-x-2 text-sm text-muted-foreground",children:[e.jsx("span",{children:"🏠 4"}),e.jsx("span",{children:"🛏️ 2"}),e.jsx("span",{children:"📐 2,350m²"})]}),e.jsx("div",{className:"text-right",children:e.jsx("p",{className:"text-2xl font-bold",children:"$135,000"})})]})})]})})},d={args:{projectImage:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=350&h=128&fit=crop"},render:({projectImage:t})=>e.jsxs(a,{className:"w-[350px]",children:[e.jsxs(p,{children:[e.jsx(u,{children:"Minnetonka Kitchen Remodel"}),e.jsx(x,{children:"Contemporary transformation of a traditional kitchen space"})]}),e.jsx(r,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("img",{src:t,alt:"Kitchen remodel project gallery",className:"w-full h-32 rounded-md object-cover"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-muted-foreground",children:"Investment Range:"}),e.jsx("span",{className:"font-medium",children:"$85,000 - $120,000"})]}),e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-muted-foreground",children:"Timeline:"}),e.jsx("span",{className:"font-medium",children:"8-10 weeks"})]}),e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-muted-foreground",children:"Style:"}),e.jsx("span",{className:"font-medium",children:"Contemporary"})]})]})]})}),e.jsx(f,{children:e.jsx(m,{className:"w-full",children:"View Project Details"})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    titleSize: 'base',
    titleWeight: 'semibold',
    titleColor: '#000000',
    descriptionSize: 'sm',
    descriptionColor: '#6b7280',
    contentSize: 'sm',
    contentColor: '#6b7280',
    fontFamily: 'sans',
    borderColor: '#e5e7eb',
    backgroundColor: '#ffffff',
    shadowSize: 'sm'
  },
  render: args => {
    const cardStyle = {
      borderColor: args.borderColor,
      backgroundColor: args.backgroundColor
    };
    const titleStyle = {
      color: args.titleColor
    };
    const descriptionStyle = {
      color: args.descriptionColor
    };
    const contentStyle = {
      color: args.contentColor
    };
    return <Card className={\`w-[350px] \${getShadowClass(args.shadowSize)} \${getFontFamilyClass(args.fontFamily)}\`} style={cardStyle}>
        <CardHeader>
          <CardTitle className={\`\${getSizeClass(args.titleSize, 'title')} \${getWeightClass(args.titleWeight)} leading-none tracking-tight\`} style={titleStyle}>
            Luxury Kitchen Consultation
          </CardTitle>
          <CardDescription className={getSizeClass(args.descriptionSize, 'description')} style={descriptionStyle}>
            Schedule your complimentary design consultation with our expert team.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className={getSizeClass(args.contentSize, 'content')} style={contentStyle}>
            Transform your kitchen into a sophisticated culinary space with our award-winning design approach.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Schedule Consultation</Button>
        </CardFooter>
      </Card>;
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" placeholder="Placeholder" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button className="w-full">Login</Button>
        <Button variant="outline" className="w-full">Login with Google</Button>
        <p className="text-sm text-center text-muted-foreground">
          Don't have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </CardFooter>
    </Card>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Meeting Notes</CardTitle>
        <CardDescription>
          Transcript from the meeting with the client.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Client requested dashboard redesign with focus on mobile responsiveness.</h4>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside md:pl-4 pl-2">
              <li>New analytics widgets for daily/weekly metrics</li>
              <li>Simplified navigation menu</li>
              <li>Dark mode support</li>
              <li>Timeline: 6 weeks</li>
              <li>Follow-up meeting scheduled for next Tuesday</li>
            </ol>
          </div>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium">JD</span>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium">SM</span>
            </div>
            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium">AB</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    propertyImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=350&h=200&fit=crop'
  },
  render: ({
    propertyImage
  }) => <Card className="w-[350px]">
      <CardContent className="p-0">
        <div className="relative">
          <img src={propertyImage} alt="Luxury property interior" className="w-full h-48 rounded-t-lg object-cover" />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>🏠 4</span>
              <span>🛏️ 2</span>
              <span>📐 2,350m²</span>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">$135,000</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    projectImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=350&h=128&fit=crop'
  },
  render: ({
    projectImage
  }) => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Minnetonka Kitchen Remodel</CardTitle>
        <CardDescription>
          Contemporary transformation of a traditional kitchen space
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <img src={projectImage} alt="Kitchen remodel project gallery" className="w-full h-32 rounded-md object-cover" />
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Investment Range:</span>
              <span className="font-medium">$85,000 - $120,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Timeline:</span>
              <span className="font-medium">8-10 weeks</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Style:</span>
              <span className="font-medium">Contemporary</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Project Details</Button>
      </CardFooter>
    </Card>
}`,...d.parameters?.docs?.source}}};const P=["Default","LoginForm","MeetingNotes","PropertyListing","InteriorDesignProject"];export{n as Default,d as InteriorDesignProject,i as LoginForm,l as MeetingNotes,c as PropertyListing,P as __namedExportsOrder,T as default};
