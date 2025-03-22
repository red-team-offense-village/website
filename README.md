# Red Team Village Website

[![Deploy Hugo site to Pages](https://github.com/red-team-offense-village/website/actions/workflows/hugo.yml/badge.svg)](https://github.com/red-team-offense-village/website/actions/workflows/hugo.yml) [![Website](https://img.shields.io/website?url=https%3A%2F%2Fredteamvillage.io&label=redteamvillage.io&link=https%3A%2F%2Fredteamvillage.io)](https://redteamvillage.io/)

This git repository contains the [website](http://redteamvillage.io) for the Red Team Village organization. Someone should really update it to make it suck less.

## Local Dev

If you want to make changes and actually test them locally you will need to [install Hugo](https://gohugo.io/installation/). How you accomplish that is beyond this README file. We recommend using Homebrew.

```sh
hugo server
```

This will launch a local web server running on <http://127.0.0.1:1313/website/> that auto-updates the test site live when changes are detected on disk.

### Directory Structure

Configuration can be managed in the file `hugo.toml`. It is unlikely you'll need to touch this.

The primary folder you'll be working with is `data/` which contains all the main Pages, such as Team, Sponsors, Updates, Venue, Schedule, etc.

Anything that should be deployed to the final website and not rendered through Hugo and go directly into the `static/` directory.

### Homepage "Latest Updates" Content Instructions

To add/remove/delete a "Latest Updates" entry on the main page, browse to the `data/updates.json` file and make changes there. Newer entries should be added to the top of the file. The structure of an entry follows:

```
updates
|_title
|_date
|_content
|_tag
|_image
| |_src
| |_alt
|_url
| |_href
| |_text
```

`title`: This is the title of the update, appears at the top of the update in bold.
`date`: This is the update posting date.
`content`: This is the text of the update.
`tag`: This is the pill tag associated with the update.
`image`: This is an optional parameter where you can specify the image file name to display with the update. Images should be added to the `static/assets/images/updates` folder.
`url`: This is an optional URL to display a Call-to-Action button with the update. If the link is external, the site will include an icon indicating that the link is external.

Exmaple Update Entry:

```json
{
  "title": "RTV CRON Workshop Call for Workshops",
  "date": "March 6, 2025",
  "content": "We're looking for speakers for our RTV CRON workshop series! If you're interested in speaking, please fill out the Call on Sessionize. We're looking for a two hour workshop on a topic of your choice (as long as it's related to offensive security). For examples of what we're looking for, check out the RTV Overflow videos which we recently released on our YouTube channel.",
  "tag": ["RTV CRON", "Call for Workshops"],
  "image": {
    "src": "RTVcron-cfw.png",
    "alt": "Red Team Village Conference 2023"
  },
  "url": {
    "href": "https://sessionize.com/rtv-cron/",
    "text": "Answer the Call!",
    "target": "_blank"
  }
}
```

### Team Page Content Instructions

To modify the content of the team page, edit the `data/team.json` file. All entries here will be rendered in order of appearance within the file, so slot in a new entry on the appropriate space in the file. The structure of a team entry is as follows:

```
team
|_members []
|  |_name
|  |_handle
|  |_role
|  |_image
|  |_linkedin
|  |_twitter
```

`name`: Team member's Name.
`handle`: Team member's handle.
`role`: Team member's role.
`image`: Image name. Images should be added to the `static/assets/images/team` folder.
`linkedin`: URL of member's LinkedIn page.
`twitter`: URL of member's Twitter/X profile.

Example Team Member Entry:

```json
{
  "name": "Mike Lisi",
  "handle": "@mikehacksthings",
  "role": "President",
  "image": "mike-240x240.png",
  "linkedin": "https://www.linkedin.com/in/mikelisi/",
  "twitter": "https://x.com/mikehacksthings"
}
```

### Sponsors Page Content Instructions

To modify the content of the sponsors page, edit the `data/sponsors.json` file. All entries here will be rendered in order of appearance within the file, so slot in a new entry on the appropriate space in the file.

This is a little more complex since we can have multiple events listed with sponsors associated with each event.

The structure of the file is as follows:

```
events
|_Name
|_Dates
|_Location
|_Description
|_Image
|_Levels []
|  |_Name
|  |_Sponsors []
|    |_Name
|    |_Logo
|    |_Website
|    |_Description
```

The structure of an entry follows:

events:
`name`: Name of the event.
`dates`: Dates of the event.
`location`: Location of the event.
`description`: Description of the event.
`image`: Image for the event.
`levels`: Structure containing an array of sponsor levels.

levels:
`name`: Name of the sponsor level.
`sponsors`: Structure containing an array of sponsors.

sponsors:
`name`: Name of the sponsor.
`logo`: Logo of the sponsor.
`website`: Website of the sponsor.
`description`: Description of the sponsor.

Example Entry:

```json
  "events": [
      {
        "name": "DEF CON 33 (2025)",
        "dates": "August 7-10, 2025",
        "location": "Las Vegas, Nevada",
        "description": "Join us at the world's largest hacker convention where Red Team Village will host workshops, capture the flag competitions, more!",
        "image": "dc33.png",
        "levels": [
          {
            "name": "Diamond",
            "sponsors": [
              {
                "name": "Security Corp Inc.",
                "logo": "security-corp.png",
                "website": "https://securitycorp.example.com",
                "description": "Industry leader in penetration testing and security analysis, providing enterprise solutions for over 15 years."
              }
            ]
          }
        ]
      }
    ]
  }
```
