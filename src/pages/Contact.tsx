import AcademicLayout from "@/components/AcademicLayout";

const Contact = () => (
  <AcademicLayout>
    <h2>Contact</h2>
    <p>
      For enquiries regarding the LithoMap software, including bug reports, feature requests,
      or collaboration proposals, please contact the developer using the information below.
    </p>

    <div className="section-divider" />

    <table style={{ marginTop: 8 }}>
      <tbody>
        <tr>
          <td><strong>Developer</strong></td>
          <td>Nitheesh K</td>
        </tr>
        <tr>
          <td><strong>Developed For</strong></td>
          <td>Dept. of Biochemistry, Govt. Stanley Medical College</td>
        </tr>
        <tr>
          <td><strong>Location</strong></td>
          <td>Chennai, Tamil Nadu, India</td>
        </tr>
      </tbody>
    </table>

    <div className="section-divider" />

    <h3>Bug Reports</h3>
    <p>
      Please report software bugs and issues via the project repository or by contacting
      the developer directly. When reporting a bug, include the following information:
    </p>
    <ul>
      <li>Operating system and version</li>
      <li>LithoMap version number</li>
      <li>Steps to reproduce the issue</li>
      <li>Input data format used</li>
      <li>Error messages, if any</li>
    </ul>

    <p className="last-updated">
      Last updated: 15 February 2026
    </p>
  </AcademicLayout>
);

export default Contact;
