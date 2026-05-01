import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/survey-core.min.css";
import './App.css';
import { json } from "./survey_json.js";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://feflicpsebdapxekthop.supabase.co",
  "sb_publishable_203p_54SM-kXGuwgavMacA_ApMNTEB9"
);

function SurveyComponent() {
    const survey = new Model(json);
    survey.onCompleting.add(async (_, options) => {
        console.log(JSON.stringify(survey.data, null, 3));
        try {
          const { error } = await supabase
            .from('SurveyResults')
            .insert({
              "survey_schema_id": 1,
              "survey_results": survey.data
          })

          if (error) {
            console.log(error);
            options.allow = false;
            options.message = "Could not post the survey results";
          } else {
            options.message = "Your data has been saved";
          }
        } catch (e) {
          options.allow = false;
          options.message = e.message;
          console.error(e.message);
        }
    });

    return (<Survey model={survey} />)
};

export default SurveyComponent;