import "./Stats.css";
import { GitHubCalendar } from "react-github-calendar";

type GithubStatsProps = {
  username?: string;
};

function Stats({ username = "umezvictor" }: GithubStatsProps) {
  return (
    <>
      <div className="contact">
        <h5>Stats</h5>
      </div>
      <section className="ghSection" id="github-stats">
        <h2 className="ghTitle">GitHub Stats</h2>
        <p className="ghSubtitle">
          Insights and metrics about my GitHub profile
        </p>

        <div className="ghCard">
          <GitHubCalendar
            username={username}
            blockSize={14}
            blockMargin={5}
            fontSize={14}
            showWeekdayLabels
          />
        </div>
      </section>
    </>
  );
}

export default Stats;
