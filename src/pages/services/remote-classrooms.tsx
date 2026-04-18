import { ServicePageTemplate } from "../../components/service-page-template";
export function RemoteClassroomsPage() {
  return <ServicePageTemplate
    badge="Remote Video Classrooms"
    title="The Future of Hybrid Education, Today"
    subtitle="Technology-enabled learning environments connecting educators and students everywhere."
    intro="Education should never be limited by geography. Our Remote Video Classroom solutions create immersive, interactive learning environments that connect in-person and remote students seamlessly. From universities and professional training centres to corporate learning suites, we design spaces that make hybrid learning feel natural."
    benefits={["Bridge in-person and remote learners", "Record lectures for on-demand playback", "Track attention and engagement", "Works with Moodle, Blackboard, and Canvas", "Comply with institutional AV standards"]}
    features={[
      { title: "Auto-Tracking Cameras", description: "AI-powered cameras that automatically follow the lecturer around the room, keeping them perfectly framed at all times." },
      { title: "Interactive Whiteboards", description: "Large-format interactive displays that allow educators to annotate, present, and collaborate in real time with remote learners." },
      { title: "Lecture Capture Systems", description: "Automated recording of audio, video, and screen content for post-session publishing to your LMS platform." },
      { title: "Multi-Camera Switching", description: "Intelligent switching between presenter, audience, and content cameras to create a broadcast-quality learning experience." },
      { title: "LMS Integration", description: "Seamless integration with Moodle, Blackboard, and Canvas to publish recordings and schedule live sessions automatically." },
      { title: "Polling & Interaction Tools", description: "Live polling, Q&A, and participation tools that keep remote learners engaged and give educators real-time feedback." },
    ]}
  />;
}
