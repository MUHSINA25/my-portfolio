import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiUsers, FiBookOpen, FiStar, FiGitBranch } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { githubUsername, personal } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";

interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

interface GitHubEvent {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

function describeEvent(event: GitHubEvent) {
  const repo = event.repo.name.split("/")[1] ?? event.repo.name;
  switch (event.type) {
    case "PushEvent":
      return `Pushed commits to ${repo}`;
    case "CreateEvent":
      return `Created a new repository ${repo}`;
    case "WatchEvent":
      return `Starred ${repo}`;
    case "ForkEvent":
      return `Forked ${repo}`;
    case "IssuesEvent":
      return `Opened an issue on ${repo}`;
    case "PullRequestEvent":
      return `Opened a pull request on ${repo}`;
    default:
      return `Activity on ${repo}`;
  }
}

export default function GitHubStats() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [error, setError] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then(setUser)
      .catch(() => setError(true));

    fetch(`https://api.github.com/users/${githubUsername}/events/public`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data: GitHubEvent[]) => setEvents(data.slice(0, 5)))
      .catch(() => setError(true));
  }, []);

  const statsTheme = theme === "dark" ? "radical" : "default";

  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GitHub"
          title="Open Source & Coding Activity"
          subtitle="Live snapshot of my GitHub profile — repositories, languages, contributions, and recent activity."
        />

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-slate-200/70 bg-white/70 p-8 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.03] sm:flex-row sm:text-left"
        >
          <img
            src={user?.avatar_url ?? personal.avatar}
            alt="GitHub avatar"
            className="h-24 w-24 rounded-full ring-4 ring-indigo-500/20"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {user?.name ?? "Muhsina CT"}{" "}
              <span className="text-sm font-normal text-slate-400">@{githubUsername}</span>
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {user?.bio ?? "Data Analyst | Data Scientist | AI & Data Science Trainer"}
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-slate-600 dark:text-slate-300 sm:justify-start">
              <span className="flex items-center gap-1.5">
                <FiBookOpen /> {user?.public_repos ?? "35+"} Repos
              </span>
              <span className="flex items-center gap-1.5">
                <FiUsers /> {user?.followers ?? "—"} Followers
              </span>
              <span className="flex items-center gap-1.5">
                <FiGitBranch /> {user?.following ?? "—"} Following
              </span>
            </div>
          </div>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            <FiGithub /> View Profile
          </a>
        </motion.div>

        {/* Stats + languages */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.03] lg:col-span-3"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&theme=${statsTheme}&bg_color=00000000`}
              alt="GitHub stats"
              className="w-full"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.03] lg:col-span-2"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&hide_border=true&theme=${statsTheme}&bg_color=00000000`}
              alt="Top languages"
              className="w-full"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 overflow-x-auto rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.03]"
        >
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Contribution Graph
          </h4>
          <img
            src={`https://ghchart.rshah.org/6366f1/${githubUsername}`}
            alt="GitHub contribution graph"
            className="min-w-[600px] w-full"
            loading="lazy"
          />
        </motion.div>

        {/* Recent activity */}
        {!error && events.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.03]"
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Recent Activity
            </h4>
            <ul className="space-y-3">
              {events.map((event) => (
                <li
                  key={event.id}
                  className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3 text-sm last:border-0 last:pb-0 dark:border-white/5"
                >
                  <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <FiStar className="shrink-0 text-indigo-500" size={14} />
                    {describeEvent(event)}
                  </span>
                  <span className="shrink-0 text-xs text-slate-400">{timeAgo(event.created_at)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}
