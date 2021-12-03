# Docker

```bash
docker pull aryan02420/userfetch
```

```bash
docker run \
  -i -t --rm \
  -v "/path/to/workdir":"/github/workspace/" \
  -w /github/workspace \
  -e github_token="ghp_personalAccessTokenxxxxxxxxxxxxxxxxx" \
  aryan02420/userfetch "path/to/config.mjs" "path/to/out.svg"
```
