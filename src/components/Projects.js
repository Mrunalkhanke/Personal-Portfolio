import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Screenshot 2024-06-06 112413.jpg";
import projImg2 from "../assets/img/Screenshot 2024-06-06 113231.jpg";
import projImg3 from "../assets/img/Screenshot 2024-06-06 114837.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "BookBox",
      description: "BookBox is an engaging Android application designed to enhance language learning for kids. Featuring vibrant illustrations, audio narration, and interactive elements, BookBox makes learning fun and accessible.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/yourusername/BookBox"
    },
    {
      title: "BuyZap",
      description: "BuyZap is an innovative online shopping application that revolutionizes the customer experience by allowing users to virtually try products before making a purchase. Utilizing augmented reality (AR) technology, enables customers to visualize how products will look in real life.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/Mrunalkhanke/BuyZap"
    },
    {
      title: "Sign Language Detection",
      description: "This project aims to develop a robust sign language recognition system using Python and OpenCV, leveraging a Convolutional Neural Network (CNN) with the Pre-Trained SSD MobileNet V2 architecture. The system is designed to recognize signs with 70-80% accuracy in various environments, facilitating communication for the deaf community and aiding learners in practicing sign language.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/Mrunalkhanke/Sign-Language-Detection-"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have developed over 7+ major projects, showcasing my expertise and innovation in UI/UX Designing and Full Stack Development. My top three projects include BookBox, a language learning application showcasing my UI/UX skills, BuyZap, an efficient e-commerce android application, and a cutting-edge Sign Language Detection system, highlighting my proficiency in diverse domains. Each project reflects my commitment to delivering high-quality, user-centric applications.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* Add navigation items if needed */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  );
};
