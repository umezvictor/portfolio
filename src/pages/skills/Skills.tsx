import "./Skills.css";

function Skills() {
  return (
    <>
      <div className="skill">
        <h5>Skills & Tools</h5>
        <h6>I build soluitions using cutting-edge technology</h6>
        <p>
          I am a Lead Software Engineer with over six years of experience in
          enterprise application development, specializing in backend
          technologies such as C#, .NET, and .NET Core, and occasionally working
          with React.js and TypeScript on the frontend.
        </p>

        <div className="badge-lg">
          <span className="badge text-bg-dark">
            <i className="fa-brands fa-docker skill-icon"></i>Docker
          </span>
          <span className="badge text-bg-dark ms-1">
            {" "}
            <i className="fa-brands fa-kubernetes skill-icon"></i>Kubernetes
          </span>
          <span className="badge text-bg-dark ms-1">
            <i className="fa-brands fa-react skill-icon"></i>React
          </span>
          <span className="badge text-bg-dark ms-1">
            <i className="fa-brands fa-html5 skill-icon"></i>HTML5
          </span>
          <span className="badge text-bg-dark ms-1">
            <i className="fa-solid fa-code skill-icon"></i>C#
          </span>
          <span className="badge text-bg-dark ms-1">
            <i className="fa-brands fa-aws skill-icon"></i>AWS
          </span>
          <span className="badge text-bg-dark ms-1">
            <i className="fa-solid fa-database skill-icon"></i>SQL Server
          </span>
          <span className="badge text-bg-dark ms-1">
            <i className="fa-solid fa-cloud skill-icon"></i>Azure
          </span>
          <span className="badge text-bg-dark ms-1">
            <i className="fa-brands fa-postgresql skill-icon"></i>PostgreSQL
          </span>
        </div>
      </div>
    </>
  );
}

export default Skills;
