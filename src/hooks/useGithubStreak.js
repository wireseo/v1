import { useState, useEffect } from "react";
import fetchGitHubStreak from "../utils/fetchGitHubStreak";

const useGithubStreak = (username) => {
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const fetchedStreak = await fetchGitHubStreak(username);
        setStreak(fetchedStreak);
      } catch (error) {
        console.error("Failed to fetch GitHub streak:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [username]);

  return { streak, loading };
};

export default useGithubStreak;
