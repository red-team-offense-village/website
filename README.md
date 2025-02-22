# Red Team Village Website

[![Deploy Hugo site to Pages](https://github.com/red-team-offense-village/website/actions/workflows/hugo.yml/badge.svg)](https://github.com/red-team-offense-village/website/actions/workflows/hugo.yml) [![Website](https://img.shields.io/website?url=https%3A%2F%2Fredteamvillage.io&label=redteamvillage.io&link=https%3A%2F%2Fredteamvillage.io)](https://redteamvillage.io/)

This git repository contains the [website](http://redteamvillage.io) for the Red Team Village organization. Someone should really update it to make it suck less.

## Local Dev

If you want to make changes and actually test them locally you will need to [install Hugo](https://gohugo.io/installation/). How you accomplish that is beyond this README file. We recommend using Homebrew.

```sh
hugo server
```

This will launch a local web server running on <http://127.0.0.1:1313/> that auto-updates the test site live when changes are detected on disk.

### Directory Structure

Configuration can be managed in the file `hugo.toml`. It is unlikely you'll need to touch this.

The primary folder you'll be working with is `content/` which contains all the main Pages, such as About, Chat, Meetings, etc.

Anything that should be deployed to the final website and not rendered through Hugo and go directly into the `static/` directory.
