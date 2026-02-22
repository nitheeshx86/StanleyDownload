import AcademicLayout from "@/components/AcademicLayout";

const Citation = () => (
  <AcademicLayout>
    <h2>Citation</h2>
    <p>
      If you use LithoMap in your research, please cite the following publication.
      Proper citation is a mandatory condition of use under the software license.
    </p>

    <div className="section-divider" />

    <h3>APA Format</h3>
    <div className="citation-block">
      Nitheesh, K. (2026). LithoMap: A computational tool for FTIR-based spatial mineral
      mapping of renal calculi. <em>Journal of Urological Research</em>, 00(0), 000–000.
      https://doi.org/10.xxxx/xxxxx
    </div>

    <h3>BibTeX</h3>
    <pre>{`@article{nitheesh2026lithomap,
  title     = {LithoMap: A Computational Tool for FTIR-Based
               Spatial Mineral Mapping of Renal Calculi},
  author    = {Nitheesh, K.},
  journal   = {Journal of Urological Research},
  volume    = {00},
  number    = {0},
  pages     = {000--000},
  year      = {2026},
  doi       = {10.xxxx/xxxxx},
  publisher = {}
}`}</pre>

    <div className="section-divider" />

    <h3>DOI</h3>
    <div className="info-box">
      <span className="label">DOI:</span>{" "}
      <a href="https://doi.org/10.xxxx/xxxxx" target="_blank" rel="noopener noreferrer">
        10.xxxx/xxxxx
      </a>
      <br />
      <span style={{ fontSize: 11, color: "#888", fontStyle: "italic" }}>
        (DOI will be updated upon publication)
      </span>
    </div>

    <div className="section-divider" />

    <h3>Additional References</h3>
    <p>
      Users may also find the following references relevant to the methods employed in LithoMap:
    </p>
    <ul>
      <li>
        Daudon, M., Bazin, D., &amp; Letavernier, E. (2015). Randall's plaque as the origin of
        calcium oxalate kidney stones. <em>Urolithiasis</em>, 43(S1), 5–11.
      </li>
      <li>
        Primiano, A., Persichilli, S., Gambaro, G., et al. (2014). FT-IR analysis of urinary
        stones: A helpful tool for clinician comparison with the chemical spot test.
        <em> Disease Markers</em>, 2014, 176165.
      </li>
    </ul>

    <p className="last-updated">
      Last updated: 15 February 2026
    </p>
  </AcademicLayout>
);

export default Citation;
