# GitHub Actions

1. [Create](https://github.com/settings/tokens/new?scopes=repo,read:packages,read:org,read:user,user:email) a github token with `repo`, `read:packages`, `read:org`, `read:user`, `user:email` scopes
2. Goto `https://github.com/<user>/<repo>/settings/secrets/actions/new`. Name the secret as `GH_PAT` and paste the value from step 1
3. Create `./github/workflows/userfetch.yml` as shown below

```yaml
# .github/workflows/userfetch.yml

on:
  push:
    branches: [main]
  workflow_dispatch:
  schedule:
    # every day
    - cron:  '0 0 * * *'

jobs:
  sample_job:
    runs-on: ubuntu-latest
    steps:
      - name: setup
        uses: actions/checkout@v2

      - name: userfetch
        uses: userfetch/userfetch-action@v1
        with:
          # path is relative to project root
          config: 'path/to/config.mjs'
          svg: 'path/to/card.svg'
        env:
          # the token you created in step 2
          github_token: ${{ secrets.GH_PAT }}

      - name: commit
        uses: peaceiris/actions-gh-pages@v3
        with:
          # this token is provided by default by github
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
          publish_branch: main
          user_name: 'github-actions[bot]'
          user_email: 'github-actions[bot]@users.noreply.github.com'
          allow_empty_commit: false
          full_commit_message: '🤖 Daily update!'
```