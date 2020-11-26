# BrightID-Meet
BrightID-Meet is a Vus.js project that usable for Online class schedule and business meetings schedule and remind them.
For a better understanding, you can refer to the [meetings section](https://brightid.org/meet) of the [BrightID](https://www.brightid.org/) site.

#### There are two types of meetings on the this project:
A. weeklyBase: They are displayed repeatedly on a specific day and time each week and Once the meetings are set in a json file (called weeklyBase), they are displayed each week on that specific day.

B. specialMeet: These meetings are only displayed on a specific day (for example, January 23, 2020).And by setting a special meetings in another json file (called specialMeet), those meetings will be displayed only on that specific day and time.

Note: The written format of json files must be the same as the sample.
[weeklyBase.json](https://github.com/BrightID/BrightID-Meet/blob/main/src/static/weeklybase.json)  | [specialMeet.json](https://github.com/BrightID/BrightID-Meet/blob/main/src/static/specialMeeting.json)

## Capabilities of BrightID-Meet
### Local time:
BrightID-Meet converts the times that set in json files to client local time. But if the client wants to see another local time, this feature is provided for him.

Note: In json files, set the times based on UTC (Coordinated Universal Time) time.
BrightID-Meet automatically converts the UTC times set in json files to local times according to the client's choice.

The source of the time zone list is [
timezones.json](https://github.com/dmfilipenko/timezones.json.)

### Reminder in Google Calendar:
BrightID-Meet can insert meetings in the Google Client calendar at the request of the client and entering the correct settings by the developer (such as API key, etc.). In this case, by default, it reminds the client 30 minutes before the start of the meeting.

### Responsive:
BrightId-Meet is responsive in 2 levels. The first level is suitable for laptop and desktop monitors, large monitors and other level suitable for mobile phones and tablets.

## Installation
### Set the API key and URL of json files:
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

Step1. Make two json files like the sample files for yourself.

[weeklyBase.json](https://github.com/BrightID/BrightID-Meet/blob/main/src/static/weeklybase.json)  | [specialMeet.json](https://github.com/BrightID/BrightID-Meet/blob/main/src/static/specialMeeting.json)

Step2. Upload json files to your server and set a get request for them.

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

      axios
        .get("<specialMeet json get request url>") // set url specialMeet json
        .then((response) =>
          console.log(
            (this.meetingSpecial = this.sortOnKeys(
              objectificationSpecialTime(response.data, this.timeZoneSelect)
            ))
          )
        )
        .catch((error) => console.log(error));
    },

```
Note: If your json file format is different from the sample file, the program will not run properly.

You can also use your json files statically (not recommended)

To do this, go to ```./src/App.vue``` and uncomment on the following code
```javascript
// import weeklyBase from "./static/weeklyBase.json"
// import specialMeet from "./static/specialMeet.json"
```
```javascript
// this.meetingtimelist = this.sortOnKeys(objectification(weeklyBase, this.timeZoneSelect)),
// this.meetingSpecial = this.sortOnKeys(objectification(specialMeet, this.timeZoneSelect))
```
And comment on axios.
Put your Jason files in the ```./src/static/```.

### Install npm:
```bash
git clone https://github.com/BrightID/BrightID-Meet.git
cd 'BrightID-Meet'
npm install
```
Note: If you do not have npm installed on your system, visit [get npm](https://www.npmjs.com/get-npm).


### Compiles and hot-reloads for development:
```bash
npm run serve
```
In this case, you can see the result of changes in the code instantly in your localhost.

Note: This condition is not optimal for server use.

### Compiles and minifies for production
Make a zip file from the created ```dist``` folder and upload it to your server and extract it.