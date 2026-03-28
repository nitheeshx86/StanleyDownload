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
      LithoMap operates as a conversion framework. The mineral types and their respective percentages, as derived from bulk Fourier-Transform Infrared Spectroscopy (FTIR) results, are manually entered into the program. LithoMap does not alter any raw signals from the FTIR, but merely converts the entered composition data into a structural framework, which is three-dimensional in nature.
    </p>

    <h3>3. Workflow</h3>
    <ol>
      <li>Patient demographic and clinical data are input through the Patient Info interface.</li>
      <li>Mineral composition data, calculated from the FTIR data, are incorporated into the workflow.</li>
      <li>The required number of concentric layers is defined.</li>
      <li>Surfaces are enabled, where applicable, for compositional mapping.</li>
      <li>Compositional points are placed within the defined layers.</li>
      <li>Compositional components and corresponding percentage values are assigned to the points.</li>
      <li>Points are moved along the depth axis within the normalized range of -1 to +1.</li>
      <li>The Section View tool is used to review the internal data and spatial placement.</li>
      <li>Saving, exporting, and/or creating a PDF report are accomplished.</li>
    </ol>

    <h3>4. Composition Library</h3>
    <p>
      In each layer, specific points are assigned mineral composition elements from a pre-defined library. This library includes calcium oxalate monohydrate (COM), calcium oxalate dihydrate (COD), uric acid (UA), struvite (STR), carbonate apatite (CAP), brushite (BRU), cystine, and additional user-specified minerals. Each point can have one or several mineral composition elements with defined percentage weightings.
    </p>

    <h3>5. Output Formats</h3>
    <ul>
      <li><strong>Interactive 3D Model:</strong> A spatial rendering indexing compositional points by structural depth and layer.</li>
      <li><strong>Comprehensive Clinical Report (PDF):</strong> A robust clinical record containing a three-dimensional visualization, annotated compositional plots, mineral percentages, and relevant visual summaries integrated with patient metadata.</li>
      <li><strong>Exportable Spatial Dataset:</strong> A structured archival format that saves the geometric model, point-specific annotations, and depth coordinates for future computational modeling and integration.</li>
    </ul>

    <p className="last-updated" style={{ marginTop: 16 }}>
      Documentation version: 1.0 — Last updated: 28 March 2026
    </p>
  </AcademicLayout>
);

export default Documentation;
