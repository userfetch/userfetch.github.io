# GitHub Actions

```yaml
on:
  push:
    branches: [main]
  workflow_dispatch:
  schedule:
    - cron:  '0 0 * * *'

jobs:
  sample_job:
    runs-on: ubuntu-latest
    steps:
      - name: setup
        uses: actions/checkout@v2

      - name: userfetch
        uses: userfetch/userfetch-action@latest
        with:
          config: 'path/to/config.mjs'
          svg: 'path/to/card.svg'
        env:
          github_token: ${{ secrets.GH_PAT }}

      - name: commit
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
          publish_branch: main
          user_name: 'github-actions[bot]'
          user_email: 'github-actions[bot]@users.noreply.github.com'
          allow_empty_commit: true
```