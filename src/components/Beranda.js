import "./Beranda.css";
import logo from "../assets/logo.png";

const Beranda = () => {
  return (
    <>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h1 className="i-name">Memulai dengan Menulis</h1>
            <div className="i-title">
              <div className="i-title-wrapper"></div>
            </div>
            <p className="i-desc">
              “Menulis adalah sebuah proses menciptakan suatu catatan, informasi
              atau cerita menggunakan aksara. Sedangkan Notes merupakan buku
              yang berukuran kecil dan sering digunakan untuk mencatat hal yang
              dianggap penting. NotesApp hadir memberikan inovasi dalam mencatat
              kegiatan penting kamu !!!"
            </p>
          </div>
        </div>

        <div className="i-right">
          <div className="i-bg"></div>
          <img src={logo} alt="" className="i-img" />
        </div>
      </div>
    </>
  );
};

export default Beranda;
