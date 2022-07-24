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
        uses: userfetch/userfetch-action@v1.1
        with:
          # path is relative to project root
          config: 'path/to/config.mjs'   # input
          svg: 'path/to/card.svg'        # output
        env:
          # the token you created in step 2
          github_token: ${{ secrets.GH_PAT }}

      - name: commit
        run: |
          git config --local user.name 'github-actions[bot]'
          git config --local user.email 'github-actions[bot]@users.noreply.github.com'
          git commit -am '🤖 Daily update!' | true
          git push
```

You can see it in action [here](https://github.com/aryan02420/aryan02420/blob/main/.github/workflows/userfetch.yml)