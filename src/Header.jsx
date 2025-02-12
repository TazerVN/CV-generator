import "./Header.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const exportPdf = () => {
  html2canvas(document.querySelector("#capture")).then((canvas) => {
    document.body.appendChild(canvas); // if you want see your screenshot in body.
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 0, 0);
    pdf.save("download.pdf");
  });
};

function Header() {
  return (
    <div className="header">
      <h1>CV Generator</h1>
      <div>
        <button onClick={() => window.location.reload()}>Reset</button>
        <button onClick={() => exportPdf()}>Export</button>
      </div>
    </div>
  );
}

export default Header;
