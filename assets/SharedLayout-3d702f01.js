import{N as o,u as a,j as t,r,O as s}from"./index-00ad796b.js";import{n as e}from"./emotion-styled.browser.esm-acf94b1d.js";const d=e.div`
  position: relative;
  padding: 0;
`,c=e.nav`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 250px;

  gap: 30px;
  background-color: #fff;
  box-shadow: 0px 6px 8px -6px rgba(0, 0, 0, 0.75);
  background: linear-gradient(
    112.58deg,
    #fffec8 18.15%,
    rgba(255, 255, 255, 0) 63.07%
  );
`,l=e(o)`
  margin-right: 80px;
  padding: 20px 0;
  font-size: 24px;
  line-height: 0.83;

  font-style: italic;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: #01996d;
`,n=e(o)`
  padding: 24px 0;

  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 0.83;
  text-decoration: none;
  color: #292929;

  &.active {
    color: #d47901;
    text-decoration: underline;
    font-size: 24px;
  }

  :not(:last-child) {
    margin-right: 50px;
  }

  :hover {
    text-decoration: underline;
  }
`,g=()=>{const i=a();return t.jsxs(d,{children:[t.jsxs(c,{children:[t.jsx(l,{to:"/",end:!0,children:"Tweetters"}),t.jsx(n,{to:"/",end:!0,children:"Home"}),t.jsx(n,{to:"/tweets",state:{from:i},children:"Tweets"})]}),t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:t.jsx(s,{})})]})};export{g as default};
