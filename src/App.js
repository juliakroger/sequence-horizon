import React, { useState } from "react";
import { Header, Cards, ContactUs } from "./components";

const App = () => {
  const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false);

  return (
    <div className={mobileHeaderOpen ? "app-hidden" : ""}>
      <Header
        mobileHeaderOpen={mobileHeaderOpen}
        setMobileHeaderOpen={setMobileHeaderOpen}
      />
      <div className="content" onClick={() => setMobileHeaderOpen(false)}>
        <Cards />
        <ContactUs />
      </div>
    </div>
  );
};

export default App;
