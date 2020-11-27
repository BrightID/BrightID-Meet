# BrightID-Meet
<<<<<<< HEAD
BrightID-Meet is a Vue.js project that usable for online class schedules and business meetings schedule and reminding them.
For a better understanding, you can refer to the [meetings section](https://brightid.org/meet) of the [BrightID](https://www.brightid.org/) site.

#### There are two types of meetings on this project:
A. weeklyBase: They are displayed repeatedly on a specific day and time each week and once the meetings are set in a JSON file (called "weeklyBase"), they are displayed each week on that specific day.

B. specialMeet: These meetings are only displayed on a specific day (for example, January 23, 2020). And by setting a special meeting in another JSON file (called "specialMeet"), those meetings will be displayed only on that specific day and time.

Note: The written format of JSON files must be the same as the sample.
[weeklyBase.json](https://github.com/BrightID/BrightID-Meet/blob/main/src/static/weeklybase.json)  | [specialMeet.json](https://github.com/BrightID/BrightID-Meet/blob/main/src/static/specialMeeting.json)

## Capabilities of BrightID-Meet
### Local time:
BrightID-Meet converts the times that are set in JSON files to client local time. But if the client wants to see another local time, this feature is provided for him.

Note: In JSON files, set the times based on UTC (Coordinated Universal Time) time.
BrightID-Meet automatically converts the UTC times set in JSON files to local time according to the client's choice.

The source of the time zone list is [
timezones.json](https://github.com/dmfilipenko/timezones.json.)

### Reminder in Google Calendar:
BrightID-Meet can insert meetings in the Google Client calendar at the request of the client and entering the correct settings by the developer (such as API key, etc.). In this case, by default, it reminds the client 30 minutes before the start of the meeting.

### Responsive:
BrightID-Meet is responsive on 2 levels. The first level is suitable for laptops, desktops, and large monitors and the other level suitable for mobile phones and tablets.

## Installation
### Set the API key and URL of JSON files:
#### Google calendar API key:
Step1. Go to [Browser Quickstart]( https://developers.google.com/calendar/quickstart/js) and do the necessary work.

Step2. Go to the ```./src/main.js``` and paste the values according to the values you got from the step1.
```javascript
const apiConfig = {
  apiKey: '<your api key>', // set your api key
  clientId: '<your client Id> ', // set your client id
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
  // see all available scopes here: https://developers.google.com/identity/protocols/googlescopes'
  scope: 'https://www.googleapis.com/auth/calendar.events'

```

See [Google Calendar API]( https://developers.google.com/calendar/overview) for more information.

### json's URLs:

Step1. Make two JSON files like the sample files for yourself.
=======

BrightID-Meet is a web app to list BrightID meetings for different timezones and can be used for other listing any sort of weekly events like online courses.
BrightID-Meet is implemented in Vus.js.
You can find a running demo on [BrightID meet](https://brightid.org/meet) page.

Two types of meetings/events can be defined to be listed in BrightID-meet:

A. Weekly meetings that are displayed repeatedly on a specific week day on defined time. These meetings should be defined in [weeklybase.json](https://github.com/BrightID/BrightID-Meet/blob/main/src/static/weeklybase.json) file.

B. One time meeting that are only displayed on defined date and time. These meetings should be defined in [specialMeet.json](https://github.com/BrightID/BrightID-Meet/blob/main/src/static/specialMeeting.json) file.

Note: Times should be set in UTC (Coordinated Universal Time) time. BrightID-Meet automatically converts UTC times set in json files to local times based on client timezone.
>>>>>>> 48b0580acf6b9d11738e10e755a73cac51cd1274

## Features

<<<<<<< HEAD
Step2. Upload JSON files to your server and set a get request for them.

Step3. Go to ```./src/App.vue``` and in the ```<script>``` section, paste the URLs set in step 2 in the appropriate place.

```javascript
timeZoneSelect() {
      axios
        .get("<weeklyBase json get request url>") // set url weeklyBase json
        .then(
          (response) =>
            (this.meetingtimelist = this.sortOnKeys(
              objectification(response.data, this.timeZoneSelect)
            ))
        )
        .catch((error) => console.log(error));
=======
### Local time:
BrightID-Meet list meetings in client local time. Users can also change timezone using a selectbox on top of the meetings page.
>>>>>>> 48b0580acf6b9d11738e10e755a73cac51cd1274

Note: Timezones can be configured by editing [timezones.json](https://github.com/BrightID/BrightID-Meet/blob/main/src/static/timezones.json).

<<<<<<< HEAD
```
Note: If your JSON file format is different from the sample file, the program will not run properly.

You can also use your JSON files statically (not recommended)

To do this, go to ```./src/App.vue``` and uncomment on the following code
```javascript
// import weeklyBase from "./static/weeklyBase.json"
// import specialMeet from "./static/specialMeet.json"
```
```javascript
// this.meetingtimelist = this.sortOnKeys(objectification(weeklyBase, this.timeZoneSelect)),
// this.meetingSpecial = this.sortOnKeys(objectification(specialMeet, this.timeZoneSelect))
```
And comment on Axios.
Put your Jason files in the ```./src/static/```.
=======
### Google Calendar:
BrightID-Meet enables users to add meetings their google calendar.

### Responsive:
BrightId-Meet is designed to be properly shown on both desktop and mobile phones.

## Installation
>>>>>>> 48b0580acf6b9d11738e10e755a73cac51cd1274

### Installing dependencies:
```bash
git clone https://github.com/BrightID/BrightID-Meet.git
cd BrightID-Meet
npm install
```

### Configuring:
#### Google calendar API key:
- Enable google calendar API under your google account and create an API key following [this guide](https://developers.google.com/calendar/quickstart/js).
- Configure `apiKey` and `clientId` in [main.js](https://github.com/BrightID/BrightID-Meet/blob/main/src/main.js#L8).

Note: See [Google Calendar API]( https://developers.google.com/calendar/overview) for more information.

#### Update meetings json files:

- [weeklyBase.json](https://github.com/BrightID/BrightID-Meet/blob/main/src/static/weeklybase.json)
- [specialMeet.json](https://github.com/BrightID/BrightID-Meet/blob/main/src/static/specialMeeting.json)

### Running for development:
```bash
npm run serve
```
### Building for production:
```bash
npm run build
```
This will create a `dist` folder that you can place on a production web server like nginx.
