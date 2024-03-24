import React from 'react';
import dpimage from './dpimage.jpg';
import { Link } from 'react-router-dom';
import { Facebook, Github, HouseFill, Instagram, Linkedin } from 'react-bootstrap-icons';
import { Alert } from './Alert';

export const About = () => {
  const facebookProfileUrl = 'https://www.facebook.com/rushi.chebale';



  return (
    <>
      <div className="container">
        <div>
          <Link className="btn btn-primary my-5 mx-2" to="/"> <HouseFill size={20} /> Home </Link>
        </div>
        <div className="container marketing">
          <div className="row">
            <div className="col-lg-12  ">
              <img
                className="bd-placeholder-img rounded-circle"
                width="190"
                height="190"
                src={dpimage}
                alt="Profile"
              />

              <h2 className="fw-bold text-dark">Frontend Developer</h2>
              <div className="card shadow">
                <div className="card-body">
                  <p className="card-text text-dark">
                    <i className='text-=dark'>
                    "Passionate and dedicated Frontend Developer with a strong foundation in web development and a focus on <b className="text-success">React.js</b>. I am driven by a deep curiosity and a genuine love for crafting beautiful and intuitive user interfaces. As an aspiring developer, I strive to create immersive web experiences that leave a lasting impact.
                    </i>
                  </p>
                  <p className="card-text text-dark">
                    With a solid proficiency in React.js and its ecosystem, including <b className="text-success">Redux</b>, <b className="text-success">React Router</b>, and <b className="text-success">Styled Components</b>, I am equipped to build interactive and user-friendly applications. I constantly stay updated with the latest trends and best practices in frontend development, ensuring that my skills are at the cutting edge.
                  </p>
                  <p className="card-text text-dark">
                    What sets me apart is my unwavering commitment to creativity and problem-solving. I thrive on finding elegant solutions to complex challenges, always aiming to deliver exceptional user experiences. I believe in the power of collaboration and enjoy working closely with teams to bring visions to life.
                  </p>
                  <p className="card-text text-dark">
                    I am excited to take on new challenges and contribute to projects that push the boundaries of web development. If you are seeking a Frontend Developer who is not only technically skilled but also deeply passionate about creating impactful digital experiences, I would love to connect and discuss how I can contribute to your team. "
                  </p>
                </div>
                </div>
              </div>
            </div>
            <hr />

            <div className="container my-3">
              <h3 className="text-dark fw-bold">Get in Touch:</h3>
              <br /><br />
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="d-flex justify-content-center">
                    <a href="https://www.facebook.com/rushi.chebale">
                      <Facebook size={100} style={{ color: 'red' }} />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="d-flex justify-content-center">
                    <a href="https://www.instagram.com/chebalerushi/">
                      <Instagram size={100} style={{ color: 'orange' }} />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="d-flex justify-content-center">
                    <a href="https://www.linkedin.com/in/omkar-chebale-8b251726b/">
                      <Linkedin size={100} style={{ color: 'black' }} />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="d-flex justify-content-center">
                    <a href="https://github.com/Chebaleomkar">
                      <Github size={100} style={{ color: 'green' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br/> <br/>
            <Alert msg="click on the icon redirect to page " />

          </div>
        </div>
      </>
      );
};
