import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import "../css/About.css";

const About = () => {
  const history = useNavigate();

  return (
    <div className="pricing">
      <div className="container">
        <div className="top-content">
          <div>
            <h2>
              Tips & Trik Menyusun Notes<span>App</span>
            </h2>
            <p>
              Includes every feature we offer plus unlimited projects and
              unlimited users.
            </p>
          </div>
          <div className="btn-div">
            <button
              className="btn btn-primary"
              onClick={() => history("/note")}
            >
              Get started today
            </button>
          </div>
        </div>
        <div className="bottom-content">
          <div className="card">
            <p>
              <span>Everything you need</span>
            </p>
            {/* <h3>All-in-one platform</h3> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              soluta, temporibus ea est ipsum vero recusandae blanditiis ut
              doloribus excepturi!
            </p>
            {/* <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Read Modul
            </button> */}

            {/* <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">...</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Understood
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="card">
            <p>
              <span>Everything you need</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              soluta, temporibus ea est ipsum vero recusandae blanditiis ut
              doloribus excepturi!
            </p>
            {/* <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Read Modul
            </button>

            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">...</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Understood
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="card">
            <p>
              <span>Everything you need</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              soluta, temporibus ea est ipsum vero recusandae blanditiis ut
              doloribus excepturi!
            </p>
            {/* <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Read Modul
            </button> */}
            {/* <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">...</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Understood
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "} */}
          </div>
        </div>
      </div>
      <Hero />
    </div>
  );
};

export default About;
