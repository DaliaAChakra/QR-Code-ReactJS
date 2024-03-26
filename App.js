import QRCode from "qrcode.react";
export default function App() {
  return (
    <div style={{ padding: 25 , marginTop: 200, display: "flex", flexDirection: "row" }}>
      <div>
        <QRCode value="https://www.google.com/" style={{ marginRight: 40 }} />
        <p>Google</p>
      </div>
      <div>
        <QRCode value="https://github.com/" style={{ marginRight: 40 }} />
        <p>Github</p>
      </div>
      <div>
        <QRCode value="https://www.youtube.com/" style={{ marginRight: 40 }} />
        <p>YouTube</p>
      </div>
      <div>
        <QRCode
          value="https://www.netflix.com/lb-en/" style={{ marginRight: 40 }} />
        <p>Netflix</p>
      </div>
      <div>
        <QRCode value="https://www.tinkercad.com/" style={{ marginRight: 40 }} />
        <p>Tinkercad</p>
      </div>
      <div>
        <QRCode value="https://www.linkedin.com/" style={{ marginRight: 40 }} />
        <p>Linkedin</p>
      </div>
    </div>
  );
}
