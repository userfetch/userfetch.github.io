# Docker

## Download

```bash
docker pull aryan02420/userfetch:v1
```
## Run

```bash
export github_token="ghp_xxxxxxxxxpersonalAccessTokenxxxxxxxx"
docker run \
  -i -t --rm \
  -v "${PWD}:/workspace" \
  -e github_token \
  aryan02420/userfetch:v1 --ci --config "path/to/config.mjs"
```

### Persistence
1. Save configuration locally

```bash
docker run \
  -i -t --rm \
  -u "$(id -u):$(id -g)" \
  -v "${PWD}:/workspace" \
  -v "${HOME}/.userfetch:/home/node/.userfetch" \
  aryan02420/userfetch:v1 --first-run"
```

2. Use local configuration

```bash
docker run \
  -i -t --rm \
  -u "$(id -u):$(id -g)" \
  -v "${PWD}:/workspace" \
  -v "${HOME}/.userfetch:/home/node/.userfetch" \
  aryan02420/userfetch:v1
```

### Alias

You can create a bash alias to avoid typing the long command

```bash
alias userfetch='docker run \
  -i -t --rm \
  -u "$(id -u):$(id -g)" \
  -v "${PWD}:/workspace" \
  -v "${HOME}/.userfetch:/home/node/.userfetch" \
  aryan02420/userfetch:v1'
userfetch
```
