import{n,N as o,j as e,r as a,O as s}from"./index-cc96baab.js";const i=n.div`
  position: relative;
  padding: 0;
`,r=n.nav`
  display: flex;
  padding: 20px 30px;

  gap: 30px;
  background-color: #b8dbe4;
  box-shadow: 0px 6px 8px -6px rgba(0, 0, 0, 0.75);
`,t=n(o)`
  margin: 0;
  padding: 0;

  color: #1a2183;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`,x=()=>e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx(t,{to:"/",children:"Home"}),e.jsx(t,{to:"/tweets",children:"Tweets"})]}),e.jsx(a.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(s,{})})]});export{x as default};
