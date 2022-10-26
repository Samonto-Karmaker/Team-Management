import React from "react";
import BodyComponent from "./Components/BodyComponent";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const MainComponent = () => {
    return(
        <div>
            <Header />
            <BodyComponent />
            <Footer />
        </div>
    )
}

export default MainComponent