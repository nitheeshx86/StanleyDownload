import AcademicLayout from "@/components/AcademicLayout";

const Index = () => (
  <AcademicLayout>
    <h2>About LithoMap</h2>
    <p>
      <strong>LithoMap</strong> is a computational tool for the spatial mapping and compositional analysis
      of renal calculi (kidney stones). The software enables researchers and clinicians to generate
      two-dimensional mineral distribution maps from Fourier Transform Infrared (FTIR) spectroscopic
      data acquired across sectioned calculus specimens.
    </p>
    <p>
      The system provides automated identification and localisation of crystalline and amorphous
      phases within heterogeneous stone matrices, facilitating the study of mineral zonation patterns,
      nucleation sites, and compositional gradients.
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
      <li>FTIR-based spatial mineral phase mapping of sectioned renal calculi</li>
      <li>Identification of COM, COD, hydroxyapatite, brushite, uric acid, struvite, and cystine</li>
      <li>Visualisation of compositional zonation and layering patterns</li>
      <li>Export of mapped data in standard image and tabular formats</li>
      <li>Batch processing of multiple specimen datasets</li>
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
      Last updated: 15 February 2026
    </p>
  </AcademicLayout>
);

export default Index;
