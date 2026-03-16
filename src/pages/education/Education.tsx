import "./Education.css";

function Education() {
  return (
    <>
      <section className="education">
        <h5>Chibuzor Victor Umezuruike</h5>
        <h6>Lead Software Engineer</h6>
        <p>
          I am a Lead Software Engineer with over six years of experience in
          enterprise application development, specializing in backend
          technologies such as C#, .NET, and .NET Core, and occasionally working
          with React.js and TypeScript on the frontend. My expertise includes
          designing RESTful APIs, implementing ASP.NET MVC and Web Forms, and
          working with databases like MSSQL, MySQL, DynamoDB, MongoDB, and
          PostgreSQL. I have strong experience with Azure and AWS, building
          event-driven, distributed systems using cloud-native technologies, and
          managing CI/CD pipelines with GitHub Actions and Infrastructure as
          Code through Terraform. I am a proven collaborator in Agile/SCRUM
          teams, dedicated to delivering high-quality solutions with
          comprehensive unit and integration testing.
        </p>
      </section>
      <section className="py-4 ps-4">
        <ul className="timeline-with-icons">
          <li className="timeline-item mb-5">
            <span className="timeline-icon">
              <i className="fa-solid fa-graduation-cap text-primary fa-sm fa-fw"></i>
            </span>

            <h5 className="fw-bold">
              B.Sc. Computer Science - Michael Okpara University of Agriculture
              Umudike
            </h5>
            <p className="text-muted mb-2 fw-bold">2010 - 2014</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              necessitatibus adipisci, ad alias, voluptate pariatur officia
              repellendus repellat inventore fugit perferendis totam dolor
              voluptas et corrupti distinctio maxime corporis optio?
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Education;
