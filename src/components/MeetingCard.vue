<template>
  <div
    @mouseleave="mobileClick = false"
    class="text-center meeting_card"
    :class="[dayStatus, mobileClick ? 'mobile_click' : '']"
    align-self="center"
  >
    <div v-if="mobileClick" class="d-md-none">
      <a class="white--text caption remove_decoration" :href="link"
        >Go to meeting</a
      >
    </div>
    <div v-else>
      <a
        class="mt-2 card-header text-subtitle-2 text-md-subtitle-1 d-none d-md-block"
        v-if="dayStatus != 'lastday_card'"
        :href="link"
      >
        {{ title }}
      </a>
      <h5
        v-else
        class="card-header text-subtitle-2 text-md-subtitle-1 d-none d-md-block"
      >
        {{ title }}
      </h5>
      <a
        class="mt-2 card-header text-subtitle-2 text-md-subtitle-1 d-md-none"
        v-if="dayStatus != 'lastday_card'"
        @click="mobileClick = true"
      >
        {{ title }}
      </a>
      <h5
        v-else
        class="card-header text-subtitle-2 text-md-subtitle-1 d-md-none"
      >
        {{ title }}
      </h5>
      <br v-if="dayStatus != 'lastday_card'" class="d-md-none" />
      <span v-if="dayStatus === 'lastday_card'" class="body-2"
        >via {{ app }}
      </span>
      <a v-else class="body-2 app_use d-none d-md-block" :href="link"
        >via {{ app }}</a
      >
      <a
        v-if="dayStatus != 'lastday_card'"
        class="body-2 app_use d-md-none"
        @click="mobileClick = true"
        >via {{ app }}</a
      >
    </div>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Google calendar
        </v-card-title>

        <v-card-text>{{ dialogmsg }}</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> OK! </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
var monthToNum = {
  Jan: "1",
  Feb: "2",
  Mar: "3",
  Apr: "4",
  May: "5",
  June: "6",
  July: "7",
  Aug: "8",
  Sept: "9",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};
export default {
  name: "MeetingCard",
  props: {
    title: String,
    app: String,
    link: String,
    dayStatus: String,
    time: String,
    date: String,
    year: String,
    timeZone: String,
  },
  data() {
    return {
      gapi: undefined,
      hoverclass: "hoverclass",
      weekPeriod: "",
      dialog: false,
      setEventStatus: false,
      mobileClick: false,
      dialogmsg: "",
    };
  },
  computed: {
    addEventSuccess: function () {
      return this.dialog && this.isAuthenticated();
    },
    startTime: function () {
      return this.time.split("-")[0];
    },
    endTime: function () {
      return this.time.split("- ")[1];
    },
    justYear: function () {
      return this.year.split(",")[1];
    },
    month: function () {
      return monthToNum[this.date.split(" ")[0]];
    },
    day: function () {
      return this.date.split(" ")[1];
    },
  },
  created: function () {
    this.dialog = false;
  },
  methods: {
    isAuthenticated() {
      return this.$isAuthenticated();
    },
    initClient(summary, start, end, location) {
      if (this.isAuthenticated()) {
        this.createEvent(summary, start, end, location);
      } else {
        this.$login();
        this.createEvent(summary, start, end, location);
      }
    },
    addEvent(summary, start, end, location) {
      this.$gapi.getGapiClient().then((gapi) => {
        // gapi.sheets.spreadsheet.get(...)
        // ...
        this.gapi = gapi;
        this.initClient(summary, start, end, location);
      });
    },
    createEvent(summary, start, end, location) {
      var event = {
        summary: summary,
        location: location,
        start: start,
        end: end,
      };
      var request = this.gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });
      this.gapi.load("client", {
        onerror: function () {
          // Handle loading error.
          this.dialog = true;
          this.dialogmsg = "Error!";
        },
        timeout: 8000, // 8 seconds.
        ontimeout: function () {
          // Handle timeout.
          this.dialog = true;
          this.dialogmsg = "Timeout error!";
        },
      });
      request.execute((response) => {
        if (response.status === "confirmed") {
          this.dialog = true;
          this.dialogmsg = "Event added to your calendar successfully!";
        }
      });
    },
  },
};
</script>

<style scoped>
.mobile_click {
  background-color: #ed7a5d;
}

.v-application .text-md-subtitle-1,
.lastday_card h5,
.v-application,
.meeting_card,
.card_btn,
.v-application .white--text,
.v-application .text-h3,
.v-application .text-h4,
.v-application .text-h5,
.v-application .text-subtitle-1,
.v-application .body-2 {
  font-family: "Poppins", sans-serif !important;
}
.today_card {
  color: black;
  width: 100%;
  /* height: 100px; */
  padding-bottom: 10px;
  border: 1px #ed7a5d solid;
  border-radius: 10px;
}
.lastday_card {
  color: gray;
  width: 100%;
  /* height: 100px; */
  padding-bottom: 10px;
  border: 1px gray solid;
  border-radius: 10px;
}

.lastday_card .card-header {
  color: gray;
}
.lastday_card .card_btn {
  background-color: gray !important;
}
.lastday_card h5 {
  color: gray;
}
.tomarow_card {
  color: black;
  width: 100%;
  /* height: 100px; */
  padding-bottom: 10px;
  border: 1px gray solid;
  border-radius: 10px;
}
.card:hover {
  background-color: #ffe4dd;
  cursor: pointer;
}
.card-header {
  color: #ed7a5d;
  text-decoration: none !important;
}
.lastday .card-header {
  color: gray;
}
.card h5 :hover {
  color: white !important;
}

.card_btn {
  z-index: 998;
  font-size: 8px !important;
  border-radius: 10px;
  padding: 5px 10px !important;
  width: 90% !important;
  height: 25px !important;
  background-color: #1da1f2 !important;
}
.join_meet {
  color: white;
}
.hoverclass {
  background-color: #ed7a5d;
}
.app_use {
  color: black;
  text-decoration: none;
}
.app_use:hover {
  text-decoration: underline;
}
.remove_decoration {
  text-decoration: none !important;
}
.add_decoration {
  text-decoration: underline !important;
}
</style>
