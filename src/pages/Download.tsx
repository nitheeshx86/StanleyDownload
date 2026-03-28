import AcademicLayout from "@/components/AcademicLayout";

const Download = () => (
  <AcademicLayout>
    <h2>Download LithoMap</h2>
    <p>
      The current release of LithoMap is available for download below. Please review the
      {" "}<a href="/license">license terms</a> before downloading and using the software.
      Use of this software in published research requires proper{" "}
      <a href="/citation">citation</a>.
    </p>

    <div className="section-divider" />

    <h3>Version 1.0.0 — Released 15 February 2026</h3>

    <table style={{ width: "100%", marginTop: 10, marginBottom: 14 }}>
      <thead>
        <tr>
          <th>Platform</th>
          <th>Filename</th>
          <th>Size</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Windows (64-bit)</td>
          <td>LithoMap-1.0.0-setup.exe</td>
          <td>121 MB</td>
          <td><a href="https://github.com/nitheeshx86/StanleyDownload/releases/download/v1.0.0/LithoMap-1.0.0-setup.exe" className="download-btn">Download</a></td>
        </tr>
        <tr>
          <td>macOS (Intel/Apple Silicon)</td>
          <td>LithoMap-1.0.0.dmg</td>
          <td>151 MB</td>
          <td><a href="https://github.com/nitheeshx86/StanleyDownload/releases/download/v1.0.0/LithoMap-1.0.0.dmg" className="download-btn">Download</a></td>
        </tr>
      </tbody>
    </table>

    <h3>SHA256 Checksums</h3>
    <pre>{`LithoMap-1.0.0-setup.exe:
  30d8228a139e0534fb751d48004beefb03ba4601804cef62edfbce6387053f70

LithoMap-1.0.0.dmg:
  6b8ce0774fa1aa9f60dd3b8af29229f3d95ebe6bd93ee4a00ae31cdcdc1fb875`}</pre>

    <div className="section-divider" />

    <h3>System Requirements</h3>
    <ul>
      <li><strong>Windows:</strong> Windows 10 or later (64-bit)</li>
      <li><strong>macOS:</strong> macOS 11 (Big Sur) or later</li>
      <li>Minimum 4 GB RAM (8 GB recommended for large datasets)</li>
      <li>200 MB free disk space</li>
    </ul>

    <div className="section-divider" />

    <h3>Release Notes</h3>
    <ul>
      <li>Initial public release of the LithoMap 3D spatial encoding framework</li>
      <li>Support for custom multi-layer concentric structural definition</li>
      <li>Elevation and depth tuning for precise point-specific composition mapping</li>
      <li>Interactive Section View tool for internal core and interface analysis</li>
      <li>Automated clinical PDF report generation integrated with patient metadata</li>
    </ul>

    <p className="last-updated">
      Last updated: 28 March 2026
    </p>
  </AcademicLayout>
);

export default Download;
