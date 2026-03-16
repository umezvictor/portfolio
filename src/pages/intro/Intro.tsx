import MyPicture from "../../assets/victor.jpg";
import "./Intro.css";

function Intro() {
  return (
    <>
      <div className="main-div">
        <div className="profile-headers">
          <h5>Chibuzor Victor Umezuruike</h5>
          <h6>Lead Software Engineer</h6>
        </div>

        <div className="profile">
          <div className="image-box">
            <img src={MyPicture} alt="Victor Umezuruike" />
          </div>
          <div className="profile-description">
            <p>
              I am a Lead Software Engineer with over six years of experience in
              enterprise application development, specializing in backend
              technologies such as C#, .NET, and .NET Core, and occasionally
              working with React.js and TypeScript on the frontend. My expertise
              includes designing RESTful APIs, implementing ASP.NET MVC and Web
              Forms, and working with databases like MSSQL, MySQL, DynamoDB,
              MongoDB, and PostgreSQL. I have strong experience with Azure and
              AWS, building event-driven, distributed systems using cloud-native
              technologies, and managing CI/CD pipelines with GitHub Actions and
              Infrastructure as Code through Terraform. I am a proven
              collaborator in Agile/SCRUM teams, dedicated to delivering
              high-quality solutions with comprehensive unit and integration
              testing.
              <br />
              <br />
              <a className="btn btn-sm btn-success" href="#">
                Download my resume <i className="bi bi-box-arrow-up-right"></i>
              </a>
              <a
                className="email-btn btn btn-sm btn-light ms-1"
                href="mailto:someone@example.com"
              >
                <i className="bi bi-envelope-at"></i>
                Send Email
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
