import React from "react";
import Layout from "./components/layout";
import Profile from "./components/layout/Profile";
import { ResetCSS } from "./global/resetCSS";

const App = () => {
  return (
    <main>
      <ResetCSS/>
    <Layout>
      <Profile/>
      <div>Repositories</div>
      <div>Starreds</div>
    </Layout>
    
    </main>
  );
}

export default App;
