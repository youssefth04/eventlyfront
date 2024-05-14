import React, { Component } from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

class LandingPage extends Component {
  render() {
    return (
      <body>
        <Navbar a="home" b="about" c="gallery" d="review" e="contact" f="Sign UP" g="Log In" quantity="none" />
        <section className="home" id="home">
          <div className="content">
            <a></a>
          </div>

          <div className="swiper-container home-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="/img/lartiste-.jpg" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/img/sch.jpg" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/img/hunt.jpg" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/img/metro.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/img/lacri.jpg" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/img/hiphop.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <h1 className="heading">
            <span>about</span> us
          </h1>

          <div className="row">
            <div className="image">
              <img src="/img/about.jpg" alt="" />
            </div>

            <div className="content">
              <h3>your occasion deserves our careful planning</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                labore fugiat ut esse perferendis perspiciatis provident dolores
                fuga in facilis culpa possimus, quia praesentium itaque,
                sapiente quasi harum rem asperiores.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Fugiat vero expedita incidunt provident quibusdam aut odit,
                numquam nesciunt similique nisi.
              </p>
              <a href="#" className="btn">
                reach us
              </a>
            </div>
          </div>
        </section>

        <section className="gallery" id="gallery">
          <h1 className="heading">
            our <span>gallery</span>
          </h1>

          <div className="box-container">
            <div className="box">
              <img src="/img/drake.webp" alt="" />
              <h3 className="title">best events</h3>
              <div className="icons">
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-share"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
            </div>

            <div className="box">
              <img src="/img/home1.jpg" alt="" />
              <h3 className="title">best events</h3>
              <div className="icons">
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-share"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
            </div>

            <div className="box">
              <img src="/img/gallery5.jpg" alt="" />
              <h3 className="title">best events</h3>
              <div className="icons">
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-share"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
            </div>

            <div className="box">
              <img src="/img/gallery6.jpg" alt="" />
              <h3 className="title">best events</h3>
              <div className="icons">
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-share"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
            </div>

            <div className="box">
              <img src="img/home6.jpg" alt="" />
              <h3 className="title">best events</h3>
              <div className="icons">
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-share"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
            </div>

            <div className="box">
              <img src="img/gallery9.jpg" alt="" />
              <h3 className="title">best events</h3>
              <div className="icons">
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-share"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
            </div>
          </div>
        </section>

        <section className="reivew" id="review">
          <h1 className="heading">
            client's <span>review</span>
          </h1>

          <div className="review-slider swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide box">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                  <img src="img/img1.jpg" alt="" />
                  <div className="user-info">
                    <h3>nayana</h3>
                    <span>happy customer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis dolor dicta cum. Eos beatae eligendi, magni numquam
                  nemo sed ut corrupti, ipsam iure nisi unde et assumenda
                  perspiciatis voluptatibus nihil.
                </p>
              </div>

              <div className="swiper-slide box">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                  <img src="img/img2.jpg" alt="" />
                  <div className="user-info">
                    <h3>lisa</h3>
                    <span>happy customer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis dolor dicta cum. Eos beatae eligendi, magni numquam
                  nemo sed ut corrupti, ipsam iure nisi unde et assumenda
                  perspiciatis voluptatibus nihil.
                </p>
              </div>

              <div className="swiper-slide box">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                  <img src="img/img3.jpg" alt="" />
                  <div className="user-info">
                    <h3>mary</h3>
                    <span>happy customer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis dolor dicta cum. Eos beatae eligendi, magni numquam
                  nemo sed ut corrupti, ipsam iure nisi unde et assumenda
                  perspiciatis voluptatibus nihil.
                </p>
              </div>

              <div className="swiper-slide box">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                  <img src="img/img4.jpg" alt="" />
                  <div className="user-info">
                    <h3>rose</h3>
                    <span>happy customer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis dolor dicta cum. Eos beatae eligendi, magni numquam
                  nemo sed ut corrupti, ipsam iure nisi unde et assumenda
                  perspiciatis voluptatibus nihil.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <h1 className="heading">
            <span>contact</span> us
          </h1>

          <form action="">
            <div className="inputBox">
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
              <input type="tel" placeholder="number" />
              <input type="text" placeholder="subject" />
            </div>
            <textarea
              name=""
              placeholder="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="send message" className="btn" />
          </form>
        </section>

        <Footer />
      </body>
    );
  }
}

export default LandingPage;