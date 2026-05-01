import React, { useEffect, useState } from "react";
import { Model } from "survey-core";
import "survey-core/survey-core.min.css";
import "survey-analytics/survey.analytics.min.css";
import { json } from "./survey_json";
import { createClient } from "@supabase/supabase-js";

const { VisualizationPanel } = require("survey-analytics");

const supabase = createClient(
  "https://feflicpsebdapxekthop.supabase.co",
  "sb_publishable_203p_54SM-kXGuwgavMacA_ApMNTEB9"
);

export default function ResultsPage() {
  const [status, setStatus] = useState("Loading survey results...");

  useEffect(() => {
    let isMounted = true;
    let panel = null;

    async function loadResults() {
      try {
        const { data, error } = await supabase
          .from("SurveyResults")
          .select("id, survey_results");

        if (error) throw error;

        const rows = data || [];
        const results = rows
          .map((row) => {
            const payload = row.survey_results;
            if (!payload) return null;
            if (typeof payload === "object") return payload;
            if (typeof payload === "string") {
              try {
                const parsed = JSON.parse(payload);
                return parsed && typeof parsed === "object" ? parsed : null;
              } catch {
                return null;
              }
            }
            return null;
          })
          .filter(Boolean);

        if (!results.length) {
          if (isMounted) {
            setStatus(
              rows.length
                ? "Rows were found, but `survey_results` is empty or not valid JSON."
                : "No survey responses found yet."
            );
          }
          return;
        }

        const survey = new Model(json);
        panel = new VisualizationPanel(survey.getAllQuestions(), results, {
          allowHideQuestions: false
        });
        panel.render("surveyVizPanel");

        if (isMounted) setStatus("");
      } catch (e) {
        if (isMounted) setStatus(`Could not load results: ${e.message || e}`);
      }
    }

    loadResults();

    return () => {
      isMounted = false;
      if (panel && typeof panel.destroy === "function") {
        panel.destroy();
      }
    };
  }, []);

  return (
    <main style={{ padding: "1rem" }}>
      <h1>D&D Survey Results</h1>
      {status ? <p>{status}</p> : null}
      <div id="surveyVizPanel" />
    </main>
  );
}
