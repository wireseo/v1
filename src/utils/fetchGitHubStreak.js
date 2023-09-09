const GITHUB_API = "https://api.github.com/graphql";

const fetchGitHubStreak = async (username) => {
  const query = `
    {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch(GITHUB_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();

  let streak = 0;
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  const weeks =
    data.data.user.contributionsCollection.contributionCalendar.weeks;

  for (const week of weeks.reverse()) {
    for (const day of week.contributionDays.reverse()) {
      if (day.date === today && day.contributionCount === 0) {
        continue; // Skip today if there's no contribution
      }
      if (day.contributionCount > 0) {
        streak++;
      } else {
        return streak;
      }
    }
  }
  return streak;
};

export default fetchGitHubStreak;
