# D&D Survey App

A lightweight survey app for tabletop RPG groups built with Create React App, SurveyJS, Supabase, and Netlify.

The survey itself is taken with very little modification from the "Dungeon Master Evaluation Form" by DeAnn Iwan from Dragon Magazine #43 (November 1980).

The app has two main views:

- `/` - fill out and submit the survey
- `/results` - view SurveyJS analytics charts for collected responses

## What This Project Does

- Renders a SurveyJS form from `src/survey_json.js`
- Saves submitted responses to Supabase (`SurveyResults` table)
- Loads saved responses and visualizes them with SurveyJS `VisualizationPanel`
- Deploys as a static React app (SPA) on Netlify

## Tech Stack

- React (Create React App)
- `survey-core` + `survey-react-ui`
- `survey-analytics`
- `@supabase/supabase-js`
- Netlify (static hosting + SPA rewrites)

## Project Structure

- `src/App.js` - survey entry/submission flow
- `src/ResultsPage.js` - results dashboard flow
- `src/survey_json.js` - survey definition used by both pages
- `src/schema.sql` - Supabase table schema reference
- `public/_redirects` - Netlify SPA routing rules

## Run Locally

1. Clone and install dependencies:

   ```bash
   npm install
   ```

2. Start dev server:

   ```bash
   npm start
   ```

3. Open:
   - `http://localhost:3000/` for the survey
   - `http://localhost:3000/results` for analytics

## Supabase Setup

1. Create a Supabase project.
2. Apply table DDL from `src/schema.sql` (or adapt it).
3. Add RLS and grants appropriate to your use case.

Recommended baseline:

- Public (`anon`) can `INSERT` survey responses
- Public cannot `UPDATE` or `DELETE` responses
- Public `SELECT` only if you want `/results` to be publicly viewable

## Security Notes (Important)

- The Supabase anon key is safe to ship in frontend code **only when RLS policies are strict**.
- Do not rely on obscurity of client keys.
- For stronger abuse protection, add:
  - CAPTCHA on submit
  - rate limiting (Edge Function/API gateway)
  - optional auth for `/results`

## Netlify Deployment

This repo is configured as an SPA through `public/_redirects`:

- `/results/*   /index.html   200`
- `/*           /index.html   200`

That allows direct visits to `/results` without 404s/redirect loops.

Typical Netlify settings:

- Build command: `npm run build`
- Publish directory: `build`

## Reusing This Project For Your Own Survey

To replicate this for another group or questionnaire:

1. Replace survey content in `src/survey_json.js`.
2. Create your own Supabase project/table(s).
3. Update Supabase URL/key and table names in:
   - `src/App.js`
   - `src/ResultsPage.js`
4. Apply RLS policies for your chosen access model.
5. Deploy to Netlify (or any static host supporting SPA rewrites).

## Scripts

- `npm start` - run development server
- `npm run build` - create production build
- `npm test` - run test watcher
