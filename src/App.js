import React from "react";
import Layout from "./components/layout";

function App() {
  return (
    <main>
    <Layout>
      <div>
        <img source="https://avatars.githubusercontent.com/u/99164770?v=4" alt="picture of user"/>
        <h1>Tamires Almeida</h1>
        <h3>UserName: </h3>
        <span>almeidaTamires</span>
        <div>
          <div>
            <h4>Follower</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>5</span>
          </div>
        </div>
      </div>

      <div>Repositories</div>
      <div>Starreds</div>
    </Layout>
    
    </main>
  );
}

export default App;
