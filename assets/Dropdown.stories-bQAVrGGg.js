import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-CbiDz5ol.js";import{D as i,a as w,b as m,c as u,d as o,e as n,f as a,g as j,h as d}from"./dropdown-menu-Dc4PHACs.js";import{B as M}from"./button-BPdBoc8L.js";import"./index-DgO-Q7g_.js";import"./index-CxA6Q9vD.js";import"./index-BN48xNTo.js";import"./index-D5JwQ_jb.js";import"./index-Cm40y2oI.js";import"./index-1zjtO6sP.js";import"./index-6dBjIojW.js";import"./utils-CBfrqCZ4.js";import"./check-CbvK31mt.js";import"./createLucideIcon-BDbkZiB5.js";import"./index-CdJFUDDL.js";const V={title:"Components/Dropdown",component:i,parameters:{layout:"centered"},tags:["autodocs"]},p={render:()=>e.jsxs(i,{children:[e.jsx(w,{asChild:!0,children:e.jsx(M,{variant:"outline",children:"Open Menu"})}),e.jsxs(m,{className:"w-56",children:[e.jsx(u,{children:"My Account"}),e.jsx(o,{}),e.jsx(n,{children:"Profile"}),e.jsx(n,{children:"Billing"}),e.jsx(n,{children:"Team"}),e.jsx(o,{}),e.jsx(n,{children:"Settings"}),e.jsx(n,{children:"Support"}),e.jsx(o,{}),e.jsx(n,{children:"Log out"})]})]})},c={render:()=>{const[t,s]=r.useState(!0),[D,x]=r.useState(!1),[C,S]=r.useState(!1);return e.jsxs(i,{children:[e.jsx(w,{asChild:!0,children:e.jsx(M,{variant:"outline",children:"View Options"})}),e.jsxs(m,{className:"w-56",children:[e.jsx(u,{children:"Appearance"}),e.jsx(o,{}),e.jsx(a,{checked:t,onCheckedChange:s,children:"Status Bar"}),e.jsx(a,{checked:D,onCheckedChange:x,children:"Activity Bar"}),e.jsx(a,{checked:C,onCheckedChange:S,children:"Panel"})]})]})}},l={render:()=>{const[t,s]=r.useState("bottom");return e.jsxs(i,{children:[e.jsx(w,{asChild:!0,children:e.jsx(M,{variant:"outline",children:"Panel Position"})}),e.jsxs(m,{className:"w-56",children:[e.jsx(u,{children:"Panel Position"}),e.jsx(o,{}),e.jsxs(j,{value:t,onValueChange:s,children:[e.jsx(d,{value:"top",children:"Top"}),e.jsx(d,{value:"bottom",children:"Bottom"}),e.jsx(d,{value:"right",children:"Right"})]})]})]})}},h={render:()=>{const[t,s]=r.useState(!0),[D,x]=r.useState(!1),[C,S]=r.useState("pedro");return e.jsxs(i,{children:[e.jsx(w,{asChild:!0,children:e.jsx(M,{variant:"outline",children:"Complex Menu"})}),e.jsxs(m,{className:"w-56",children:[e.jsx(u,{children:"View Options"}),e.jsx(o,{}),e.jsx(a,{checked:t,onCheckedChange:s,children:"Show Bookmarks Bar"}),e.jsx(a,{checked:D,onCheckedChange:x,children:"Show Full URLs"}),e.jsx(o,{}),e.jsx(u,{children:"People"}),e.jsx(o,{}),e.jsxs(j,{value:C,onValueChange:S,children:[e.jsx(d,{value:"pedro",children:"Pedro Duarte"}),e.jsx(d,{value:"colm",children:"Colm Tuite"})]}),e.jsx(o,{}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showStatusBar, setShowStatusBar] = useState(true);
    const [showActivityBar, setShowActivityBar] = useState(false);
    const [showPanel, setShowPanel] = useState(false);
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">View Options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [position, setPosition] = useState('bottom');
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Panel Position</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showBookmarks, setShowBookmarks] = useState(true);
    const [showUrls, setShowUrls] = useState(false);
    const [person, setPerson] = useState('pedro');
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Complex Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>View Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
            Show Bookmarks Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showUrls} onCheckedChange={setShowUrls}>
            Show Full URLs
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>People</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenuRadioItem value="pedro">Pedro Duarte</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="colm">Colm Tuite</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Edit Profile</DropdownMenuItem>
          <DropdownMenuItem>Preferences</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...h.parameters?.docs?.source}}};const O=["Basic","WithCheckboxes","WithRadio","Complex"];export{p as Basic,h as Complex,c as WithCheckboxes,l as WithRadio,O as __namedExportsOrder,V as default};
