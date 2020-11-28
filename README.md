# BrightID-Meet

BrightID-Meet is a web app to list BrightID meetings for different timezones and can be used for other listing any sort of weekly events like online courses.
BrightID-Meet is implemented in Vus.js.

You can find a running demo on [BrightID meet](https://brightid.org/meet) page.

Two types of meetings/events can be defined to be listed in BrightID-meet:

A. Weekly meetings that are displayed repeatedly on a specific week day on defined time. These meetings should be defined in [weeklybase.json](https://github.com/BrightID/BrightID-Meet/blob/main/src/static/weeklybase.json) file.

B. One time meeting that are only displayed on defined date and time. These meetings should be defined in [specialMeet.json](https://github.com/BrightID/BrightID-Meet/blob/main/src/static/specialMeeting.json) file.

Note: Times should be set in UTC (Coordinated Universal Time) time. BrightID-Meet automatically converts UTC times set in json files to local times based on client timezone.

## Features
### Local time

BrightID-Meet list meetings in client local time. Users can also change timezone using a selectbox on top of the meetings page.

Note: Timezones can be configured by editing [timezones.json](https://github.com/BrightID/BrightID-Meet/blob/main/src/static/timezones.json).

### Google Calendar
BrightID-Meet enables users to add meetings their google calendar.

### Responsive
BrightId-Meet is designed to be properly shown on both desktop and mobile phones.

## Installation

### Installing dependencies:
```bash
$ git clone https://github.com/BrightID/BrightID-Meet.git
$ cd BrightID-Meet
$ npm install
```

### Configuring:
#### Google calendar API key:
- Enable google calendar API under your google account and create an API key following [this guide](https://developers.google.com/calendar/quickstart/js).
- Configure `apiKey` and `clientId` in [main.js](https://github.com/BrightID/BrightID-Meet/blob/main/src/main.js#L8).

Note: See [Google Calendar API]( https://developers.google.com/calendar/overview) for more information.

#### Update meetings json files:

- [weeklyBase.json](https://github.com/BrightID/BrightID-Meet/blob/main/public/weeklyBase.json)
- [specialMeet.json](https://github.com/BrightID/BrightID-Meet/blob/main/public/specialMeeting.json)

### Running for development:
```bash
$ npm run serve
```
### Building for production:
```bash
$ npm run build
```
This will create a `dist` folder that you can place on a production web server like nginx.