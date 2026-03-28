import AcademicLayout from "@/components/AcademicLayout";

const Index = () => (
  <AcademicLayout>
    <h2>About LithoMap</h2>
    <p>
      <strong>LithoMap</strong> is a three-dimensional spatial mapping tool that provides a framework for converting compositional information into a coherent geometric form of Renal and Biliary Calculi. While Fourier Transform Infrared Spectroscopy (FTIR) accurately determines mineral composition, it lacks information about the spatial arrangement of these minerals. LithoMap addresses this by adding structural context to chemical data.
    </p>
    <p>
      Our tool provides functionality for defining layers of calculi composition, mapping minerals from a predefined set to loci within calculi, adjusting positions of minerals, and visualizing sections of calculi, ultimately including relevant clinical information in a well-organized and unified archival form.
    </p>

    <div className="section-divider" />

    <h3>Purpose</h3>
    <p>
      Conventional methods typically provide bulk compositional data without spatial resolution.
      LithoMap addresses this limitation by mapping the spatial distribution of mineral phases
      across the cross-section of a calculus specimen, using FTIR spectral data as input.
    </p>

    <h3>Key Capabilities</h3>
    <ul>
      <li>FTIR-based spatial encoding across multiple three-dimensional concentric layers</li>
      <li>Identification of COM, COD, UA, STR, CAP, BRU, and cystine with depth indexing</li>
      <li>Interactive Section View tool for internal slicing and analysis</li>
      <li>Patient metadata and clinical case tracking integration</li>
      <li>Export of structured clinical reports (PDF) incorporating geometry and chemistry</li>
    </ul>

    <div className="section-divider" />

    <div className="info-box">
      <span className="tag">v1.0.0</span>
      <span className="tag">Feb 2026</span>
      <span className="tag">Win / Mac</span>
      <br /><br />
      <span className="label">License:</span> AGPLv3 (Non-Commercial Research Use)
    </div>

    <p className="last-updated">
      Last updated: 28 March 2026
    </p>
  </AcademicLayout>
);

export default Index;
