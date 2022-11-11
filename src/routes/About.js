import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
// import 'bootstrap/dist/css/bootstrap.css';
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
              Cobalah terlebih dauhulu, sebelum mengatakan tidak pada semua yang dianggap sulit.
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
              <span>Upayakan Mencantumkan Durasi Pengerjaan</span>
            </p>
            {/* <h3>All-in-one platform</h3> */}
            <p>
             Durasi akan menjadi kunci penting kamu dalam membuat jadwal dan kegiatan lebih teratur. Dengan durasi setiap aktivitas akan lebih mudah untuk dipetakan dengan metode filter, sehingga jangan lupa cantumkan durasi ya!
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
              <span>CATAT SEMUA AKTIVITAS APAPUN</span>
            </p>
            <p>
              Dalam melakukan banyak kegiatan kita sering kali lupa akan kegitan yang sudah kita lakukan, sehingaa kita perlu mempunyai cara untuk mudah mengingat dan melist kegiatan apa saja yang sudah kita lakukan. So, jangan lupa catatan kegiatan kamu!
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
              <span>Atur Prioritas Pekerjaan</span>
            </p>
            <p>
              Apabila kita tau bagaimana mengatur prioritas pekerjaan. Maka, akan lebih mudah kita mengatur prioritas tersebut dengan menceklis list kegiatan/jadwal yang bersifat penting dan tidak genting, penting dan genting, tidak penting dan genting, ataupun tidak penting dan tidak genting!
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
            </div>{" "} */}
          </div>
        </div>
      </div>
      <Hero />
    </div>
  );
};

export default About;
