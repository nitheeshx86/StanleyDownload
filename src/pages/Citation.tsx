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
      Nitheesh K., Surya S., Pranav Krishna J., Pravin, S. C., Roopavathy, J. R., &amp; Saravanan, M. P. (2026). 
      LithoMap: A 3D Spatial Encoding Framework for FTIR-Based Gallstone Analysis. 
      <em>IEEE Conference</em>.
    </div>

    <h3>BibTeX</h3>
    <pre>{`@inproceedings{nitheesh2026lithomap,
  title     = {LithoMap: A 3D Spatial Encoding Framework for FTIR-Based Gallstone Analysis},
  author    = {Nitheesh, K. and Surya, S. and Pranav Krishna, J. and Pravin, Sheena Christabel and Roopavathy, J. Rathi and Saravanan, M.P.},
  booktitle = {IEEE Conference},
  year      = {2026}
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
      Last updated: 28 March 2026
    </p>
  </AcademicLayout>
);

export default Citation;
