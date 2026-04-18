import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Services } from "./pages/services";
import { Contact } from "./pages/contact";
import { Mission } from "./pages/mission";
import { ProcessPage } from "./pages/process";
import { FAQ } from "./pages/faq";
import { Solutions } from "./pages/solutions";
import { Resources } from "./pages/resources";
// Service sub-pages
import { ITConsultancy } from "./pages/services/it-consultancy";
import { ITAudit } from "./pages/services/it-audit";
import { SecurityPage } from "./pages/services/security";
import { CustomSoftware } from "./pages/services/custom-software";
import { NetworkDesign } from "./pages/services/network-design";
import { WiFiPage } from "./pages/services/wifi";
import { VoIPPage } from "./pages/services/voip";
import { ContactCentersPage } from "./pages/services/contact-centers";
import { VideoConferencingPage } from "./pages/services/video-conferencing";
import { RemoteClassroomsPage } from "./pages/services/remote-classrooms";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            {/* Company Sub-Pages */}
            <Route path="/mission" element={<Mission />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/faq" element={<FAQ />} />
            {/* Service Detail Pages */}
            <Route path="/services/it-consultancy" element={<ITConsultancy />} />
            <Route path="/services/it-audit" element={<ITAudit />} />
            <Route path="/services/security" element={<SecurityPage />} />
            <Route path="/services/custom-software" element={<CustomSoftware />} />
            <Route path="/services/network-design" element={<NetworkDesign />} />
            <Route path="/services/wifi" element={<WiFiPage />} />
            <Route path="/services/voip" element={<VoIPPage />} />
            <Route path="/services/contact-centers" element={<ContactCentersPage />} />
            <Route path="/services/video-conferencing" element={<VideoConferencingPage />} />
            <Route path="/services/remote-classrooms" element={<RemoteClassroomsPage />} />
            {/* Solutions & Resources */}
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
