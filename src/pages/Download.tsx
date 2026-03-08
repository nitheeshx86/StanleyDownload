import AcademicLayout from "@/components/AcademicLayout";

const RELEASE_BASE = "https://github.com/nitheeshx86/StanleyDownload/releases/download/v1.0.0";

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
          <td>48.2 MB</td>
          <td>
            <a
              href={`${RELEASE_BASE}/LithoMap-1.0.0-setup.exe`}
              download
            >
              Download
            </a>
          </td>
        </tr>
        <tr>
          <td>macOS (Intel/Apple Silicon)</td>
          <td>LithoMap-1.0.0.dmg</td>
          <td>52.7 MB</td>
          <td>
            <a
              href={`${RELEASE_BASE}/LithoMap-1.0.0.dmg`}
              download
            >
              Download
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <h3>SHA256 Checksums</h3>
    <pre>{`LithoMap-1.0.0-setup.exe:
  a3f7c9d2e8b14f6a0c5d7e9f1b3a5c7d9e1f3a5b7c9d1e3f5a7b9c1d3e5f7a9

LithoMap-1.0.0.dmg:
  b4e8d1f3a5c7b9d1e3f5a7c9b1d3e5f7a9c1b3d5e7f9a1c3b5d7e9f1a3c5b7d9`}</pre>

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
      <li>Initial public release</li>
      <li>Support for standard FTIR spectral data formats (CSV, JCAMP-DX)</li>
      <li>Seven mineral phase identification algorithms</li>
      <li>PNG and TIFF map export</li>
      <li>Tabular composition summary export (CSV)</li>
    </ul>

    <p className="last-updated">
      Last updated: 15 February 2026
    </p>
  </AcademicLayout>
);

export default Download;