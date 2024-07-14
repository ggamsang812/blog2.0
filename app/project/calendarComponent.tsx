"use client";
import "./project.css";

import {
  CombinationCalendar,
  GitHubCalendar,
  LeetCodeCalendar,
} from "github-leetcode-component";

export default function CalendarComponent() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <span className="font-semibold">
          Combination Calendar (Large Size - default)
        </span>
        <CombinationCalendar
          github_username="ggamsang812"
          leetcode_username="ggamsang812"
        />
        <span className="font-semibold">GitHub Calendar (Medium Size)</span>
        <GitHubCalendar username="ggamsang812" size="medium" />
        <span className="font-semibold">LeetCode Calendar (Small Size)</span>
        <LeetCodeCalendar username="ggamsang812" size="small" />
      </div>
    </>
  );
}
