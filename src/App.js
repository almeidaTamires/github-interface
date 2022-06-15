import React from "react";
import Layout from "./components/layout";
import Profile from "./components/layout/Profile";
import Repositories from "./components/layout/repositores";
import { ResetCSS } from "./global/resetCSS";

const App = () => {
  return (
    <main>
      <ResetCSS/>
    <Layout>
      <Profile/>
      <Repositories />
    </Layout>
    
    </main>
  );
}

export default App;
