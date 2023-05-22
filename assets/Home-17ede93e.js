import{L as n,r as o,_ as i,j as t}from"./index-6417e6a7.js";import{n as e}from"./emotion-styled.browser.esm-3b27c251.js";const r="/goit-test-task/assets/mainBcgr-9a02d8fb.jpg",s=e.div`
  height: 100vh;

  background: linear-gradient(
      112.58deg,
      #ffffff 18.15%,
      rgba(255, 255, 255, 0) 53.07%
    ),
    url(${r}), rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-position: 100% auto;
  background-size: cover;
`,a=e.div`
  margin: 0 250px;
  padding-top: 120px;
`,d=e.div`
  width: 440px;

  font-family: "Lato";
  font-weight: 400;
  font-size: 20px;
`,c=e.h1`
  margin-bottom: 30px;

  font-family: "Georgia";
  font-weight: 700;
  font-size: 65px;
  line-height: 74px;

  color: #01996d;
`,p=e.p`
  margin-bottom: 30px;

  line-height: 31px;

  color: #484848;
`,x=e(n)`
  margin-bottom: 30px;
  padding: 20px;

  line-height: 25px;
  text-align: center;

  color: #ffffff;

  font-size: 20px;
  line-height: 25px;
  background: #01996d;
  border: 1px solid #01996d;
  border-radius: 4px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
`,l=o.lazy(()=>i(()=>import("./Tweets-79f2dd2c.js"),["assets/Tweets-79f2dd2c.js","assets/index-6417e6a7.js","assets/index-b96bc380.css","assets/emotion-styled.browser.esm-3b27c251.js"])),g=()=>t.jsx(s,{children:t.jsx(a,{children:t.jsxs(d,{children:[t.jsx(c,{children:"Find your own tweet person"}),t.jsx(p,{children:"Is a free social networking site where users broadcast short posts known as tweets. These tweets can contain text, videos, photos or links."}),t.jsx(o.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:t.jsx(x,{to:"/tweets",element:t.jsx(l,{}),children:"Find Your Person"})})]})})}),m=()=>t.jsx(g,{});export{m as default};
