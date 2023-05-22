import{N as a,u as s,j as o,r as i,O as r}from"./index-c47cf5da.js";import{n as t}from"./emotion-styled.browser.esm-c16879e4.js";const d=t.div`
  position: relative;
  padding: 0;
`,x=t.nav`
  display: flex;
  padding: 20px 30px;

  gap: 30px;
  background-color: #b8dbe4;
  box-shadow: 0px 6px 8px -6px rgba(0, 0, 0, 0.75);
`,e=t(a)`
  margin: 0;
  padding: 0;

  color: #1a2183;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`,l=()=>{const n=s();return o.jsxs(d,{children:[o.jsxs(x,{children:[o.jsx(e,{to:"/",children:"Home"}),o.jsx(e,{to:"/tweets",state:{from:n},children:"Tweets"})]}),o.jsx(i.Suspense,{fallback:o.jsx("div",{children:"Loading..."}),children:o.jsx(r,{})})]})};export{l as default};
