import "./styles.css";


export default function App() {
  const pdfFile = '/dummy.pdf'
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <object data={pdfFile} type="application/pdf" width="400px" height="200px" style={{ 'border': 'solid 1px red' }}>
        <p>
          This browser does not support PDFs.
          Please download the PDF to view it: <a href={pdfFile}>Download PDF</a>.
        </p>
      </object>
    </div>
  );
}
