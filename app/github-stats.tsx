"use client";

import { useEffect, useState } from "react";

type ContributionDay = {
  date: string;
  contributionCount: number;
};

type Repository = {
  language: string | null;
};

type GithubSummary = {
  totalContributions: number;
  weeks: { contributionDays: ContributionDay[] }[];
};

type LanguageStat = {
  language: string;
  percent: number;
};

export default function GithubStats() {
  const [summary, setSummary] = useState<GithubSummary | null>(null);
  const [languages, setLanguages] = useState<LanguageStat[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let active = true;

    async function loadStats() {
      try {
        const repositoriesResponse = await fetch(
          "https://api.github.com/users/Shubham-168/repos?per_page=100&sort=updated",
        );
        if (!repositoriesResponse.ok) {
          throw new Error(`GitHub repositories request failed: ${repositoriesResponse.status}`);
        }

        const repositories = (await repositoriesResponse.json()) as Repository[];
        const languageCounts = new Map<string, number>();
        repositories.forEach((repository) => {
          if (repository.language) {
            languageCounts.set(
              repository.language,
              (languageCounts.get(repository.language) ?? 0) + 1,
            );
          }
        });
        const total = [...languageCounts.values()].reduce((sum, count) => sum + count, 0);
        const languageStats = [...languageCounts.entries()]
          .map(([language, count]) => ({
            language,
            percent: total ? Math.round((count / total) * 100) : 0,
          }))
          .sort((a, b) => b.percent - a.percent)
          .slice(0, 4);

        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        let contributionSummary: GithubSummary | null = null;
        if (token) {
          const query = `query {
            user(login: "Shubham-168") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays { date contributionCount }
                  }
                }
              }
            }
          }`;
          const contributionsResponse = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
          });
          if (!contributionsResponse.ok) {
            throw new Error(`GitHub contributions request failed: ${contributionsResponse.status}`);
          }
          const payload = await contributionsResponse.json();
          contributionSummary =
            payload.data?.user?.contributionsCollection?.contributionCalendar ?? null;
        }

        if (active) {
          setLanguages(languageStats);
          setSummary(contributionSummary);
          setStatus("ready");
        }
      } catch (error) {
        console.error("Could not load GitHub stats:", error);
        if (active) setStatus("error");
      }
    }

    loadStats();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="section-wrap border-t border-white/[0.06] py-16" aria-labelledby="github-heading">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="section-label">Open source</span>
          <h2 id="github-heading" className="section-title mt-4">GitHub activity</h2>
        </div>
        <a
          href="https://github.com/Shubham-168"
          target="_blank"
          rel="noreferrer"
          className="button-secondary !min-h-10 !px-4"
        >
          View GitHub
        </a>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.4fr_.8fr]">
        <div className="github-panel">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-200">Contribution activity</p>
            {summary && <p className="text-xs text-slate-400">{summary.totalContributions} contributions this year</p>}
          </div>
          {status === "loading" && <p className="text-sm text-slate-400">Loading GitHub activity…</p>}
          {status === "error" && <p className="text-sm text-slate-400">GitHub activity is unavailable right now.</p>}
          {status === "ready" && summary && (
            <div className="overflow-x-auto pb-2">
              <div className="flex min-w-max gap-[3px]">
                {summary.weeks.map((week, weekIndex) => (
                  <div className="grid gap-[3px]" key={weekIndex}>
                    {week.contributionDays.map((day) => (
                      <span
                        key={day.date}
                        className={`contribution-cell ${day.contributionCount ? "contribution-cell-active" : ""}`}
                        title={`${day.contributionCount} contributions on ${day.date}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
          {status === "ready" && !summary && (
            <p className="text-xs leading-5 text-slate-400">
              Add a read-only GitHub token as <code>NEXT_PUBLIC_GITHUB_TOKEN</code> to display the contribution calendar.
            </p>
          )}
        </div>
        <div className="github-panel">
          <p className="mb-4 text-sm font-semibold text-slate-200">Top languages by repository</p>
          {status === "error" && <p className="text-sm text-slate-400">Language data is unavailable right now.</p>}
          {languages.length === 0 && status === "ready" && <p className="text-sm text-slate-400">No public language data available.</p>}
          <div className="space-y-3">
            {languages.map((language) => (
              <div key={language.language}>
                <div className="mb-1 flex justify-between text-xs text-slate-300">
                  <span>{language.language}</span><span>{language.percent}%</span>
                </div>
                <div className="skill-track"><div className="skill-fill" style={{ width: `${language.percent}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
