import "./styles.css";


export default function App() {
  const pdfFile = '/dummy.pdf'
  return (
    <div className="App">
      <h1>PDF <code>&lt;object&gt;</code> Example</h1>
      <object data={pdfFile} type="application/pdf" width="100%" height="100%">
        <p>
          This browser does not support PDFs.
          Please download the PDF to view it: <a href={pdfFile}>Download PDF</a>.
        </p>
      </object>
    </div>
  );
}
