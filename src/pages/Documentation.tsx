import AcademicLayout from "@/components/AcademicLayout";

const Documentation = () => (
  <AcademicLayout>
    <h2>Documentation</h2>
    <p>
      This page provides technical documentation for the LithoMap software system.
      Users are advised to consult the relevant sections below before first use.
    </p>

    <div className="section-divider" />

    <h3>1. Installation</h3>
    <p>
      Download the appropriate installer from the <a href="/download">Download</a> page.
      Run the installer and follow the on-screen instructions. No additional dependencies
      are required; all necessary libraries are bundled with the distribution.
    </p>

    <h3>2. Input Data Format</h3>
    <p>
      LithoMap accepts FTIR spectral data in the following formats:
    </p>
    <ul>
      <li><strong>CSV:</strong> Comma-separated values with wavenumber in the first column and absorbance/transmittance values in subsequent columns. Each column represents a spatial measurement point.</li>
      <li><strong>JCAMP-DX:</strong> Standard spectroscopic data exchange format (IUPAC).</li>
    </ul>
    <p>
      Spatial coordinate metadata should be provided in an accompanying index file (CSV format)
      specifying X and Y grid positions for each measurement point.
    </p>

    <h3>3. Workflow</h3>
    <ol>
      <li>Load spectral dataset via <em>File &gt; Open Dataset</em></li>
      <li>Load spatial index file via <em>File &gt; Load Spatial Index</em></li>
      <li>Select mineral reference library (default library included)</li>
      <li>Run phase identification: <em>Analysis &gt; Identify Phases</em></li>
      <li>Generate spatial map: <em>Analysis &gt; Generate Map</em></li>
      <li>Export results: <em>File &gt; Export Map</em> or <em>File &gt; Export Table</em></li>
    </ol>

    <h3>4. Mineral Phase Identification</h3>
    <p>
      Phase identification is performed by spectral matching against a reference library of
      known mineral FTIR spectra. The software computes a correlation coefficient between the
      input spectrum at each spatial point and each reference spectrum. A threshold value
      (default: 0.85) determines the minimum acceptable match quality. Points below the
      threshold are classified as "unidentified."
    </p>

    <h3>5. Output Formats</h3>
    <ul>
      <li><strong>Map Image:</strong> PNG or TIFF format, colour-coded by identified mineral phase</li>
      <li><strong>Composition Table:</strong> CSV file listing spatial coordinates, identified phase, and match score for each measurement point</li>
      <li><strong>Summary Report:</strong> Plain text summary of overall composition percentages</li>
    </ul>

    <div className="section-divider" />

    <h3>6. Troubleshooting</h3>
    <table style={{ width: "100%", marginTop: 8 }}>
      <thead>
        <tr>
          <th>Issue</th>
          <th>Possible Cause</th>
          <th>Resolution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>No phases identified</td>
          <td>Correlation threshold too high</td>
          <td>Lower threshold in Settings &gt; Analysis Parameters</td>
        </tr>
        <tr>
          <td>Map appears blank</td>
          <td>Spatial index not loaded</td>
          <td>Ensure index file is loaded before generating map</td>
        </tr>
        <tr>
          <td>Import error on CSV</td>
          <td>Incorrect delimiter or encoding</td>
          <td>Verify CSV uses UTF-8 encoding and comma delimiters</td>
        </tr>
      </tbody>
    </table>

    <p className="last-updated" style={{ marginTop: 16 }}>
      Documentation version: 1.0 — Last updated: 15 February 2026
    </p>
  </AcademicLayout>
);

export default Documentation;
