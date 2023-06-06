# Github Search

An app that lets you search for users and repositories on Github.

<a href="https://github-search-topaz.vercel.app/" target="_blank">Live link </a>

## Useful Scripts

- npm install - install dependencies
- npm run dev - run the app locally and go to http://localhost:3000 in a browser.
- npm run test - run all unit tests.
- npm run storybook - run storybook and go to http://localhost:6006/ in a browser.

## Tech stack

- NextJS
- TypeScript
- TailwindCSS
- Storybook
- Jest / RTL

## Developer Notes

<b>Note: I am making API calls with a personal GitHub token as authorization, stored as NEXT_PUBLIC_GITHUB_TOKEN in .env. It is possible to use the GitHub API without an authorization header, but then the rate limit is set to 10 request per min (30 with auth).</b>

The search from Home page fires after user finishes typing - set to 1000ms with <a href="https://www.npmjs.com/package/use-debounce" target="_blank">use-debounce</a>, I considered making my own solution, but this is a tried and tested hook with over a million weekly downloads.

To avoid repetition, search query is handled in the Searcher component, which contains the input and select fields as well as state values related to them. On debounce (and on category change when on the results page) a useEffect hook is triggered and user is pushed (next-router) to a dynamic route. This is the first thing I would change if I had more time / were to do it all over again - I do not like the source of truth being split between stateful values and URL, so I would attempt to keep it all in the URL. The useEffect also looks too messy to me.

The dynamic route is under /results. I did not create separate pages for users and repositories since the only difference between the result pages are the cards being rendered.

Selected category and query are passed in the URL, they are then extracted in the dynamic route and a API call is being made (logic abstracted to a custom hook, utilizing react query).
The user can browse the paginated results and make additional searches from this location. On the dynamic route the search also fires on category change (select dropdown).

The user card varies from the provided design - most of the values required are not provided by GitHub API /search/users - I would need to search for specific users to get that info - too many requests for a listing page.
The repository card could use more polishing style wise, but the required info is there.

The app is quite small and I did not have much time, so atomic design implementation is rudimentary.

## Questions to prepare answers to:

- why NextJS? why not Remix? why not Vite? Why not CRA?
- why React Query? pros / cons
  - do you the understand the queryKey in React Query
  - why `refetchOnWindowFocus: false` `keepPreviousData: true` these were necessary
- why use a debounce library? benefits of "battle-tested", check bundle size bundlephobia
- thoughts around RTL + Jest?
  - how you found it?
  - what you would have tested with more time?
  - mention why you used `getByRole`
- double check if next config has the react-hooks-eslint
- double check if you need `_document.tsx_`
- thoughts / strategy around componment composition
- note to self - should delete code not using e.g. api/hello.ts
- pros / cons of "casting" in TS - forcing types
- talk about why `if ("avatar_url" in item)` is necessary
- at what point would you put the types from `useGithubApi` to a types folder
- if you pass with nothing, will it still go through
- what should `children: any;` this be?
- overall thoughts on Storybook, pros and cons, if you'd used it before
  - what you think it would be
- talk about useEffect in `Searcher`
  - its works, but.......
  - how would you do this better?
- have a YT around snapshot tests
  - pros / cons
    - its not worth testing components that do nothing
- maybe have a think about a backup for when no avatar_url
- double check with original reqs
- be aware that your GITHUB_TOKEN is still exposed
- moving that API call to BE would hide token from users
