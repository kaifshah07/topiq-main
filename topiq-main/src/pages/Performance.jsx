import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import PerformanceDashboardSection 
from "../components/sections/performanceDashboard/PerformanceDashboard";


export default function Performance(){

  return (

    <>
<Navbar/>
      <PerformanceDashboardSection />
<Footer/>
    </>

  );

}