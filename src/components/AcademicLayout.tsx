import { Link, useLocation } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/download", label: "Download" },
  { path: "/documentation", label: "Docs" },
  { path: "/license", label: "License" },
  { path: "/citation", label: "Cite" },
  { path: "/contact", label: "Contact" },
];

const AcademicLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div>
      {/* Hero background with fade */}
      <div className="hero-bg-wrapper">
        <div
          className="hero-bg-image"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="hero-bg-fade" />
      </div>

      <div className="site-wrapper">
        <div className="site-header">
          <h1>LithoMap</h1>
          <div className="subtitle">Renal Calculi Spatial Mapping System</div>
          <div className="department">
            Developed for the Dept. of Biochemistry<br />
            Govt. Stanley Medical College
          </div>
        </div>

        <div className="header-rule" />

        <nav className="site-nav">
          {navLinks.map((link, i) => (
            <span key={link.path}>
              {i > 0 && <span className="separator">/</span>}
              {location.pathname === link.path ? (
                <span className="active-link">{link.label}</span>
              ) : (
                <Link to={link.path}>{link.label}</Link>
              )}
            </span>
          ))}
          <span className="separator">/</span>
          <span>
            <a href="https://github.com/nitheeshx86/StanleyProduction.git" target="_blank" rel="noopener noreferrer">GitHub</a>
          </span>
        </nav>

        <div className="main-content">{children}</div>

        <div className="site-footer">
          Developed by Nitheesh K<br />
          For the Dept. of Biochemistry, Govt. Stanley Medical College<br />
          &copy; 2026 LithoMap • All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default AcademicLayout;
