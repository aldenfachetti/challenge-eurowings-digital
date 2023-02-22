<template>
  <v-app id="inspire">
    <v-main>
      <div class="pa-6">
        <header class="container">
          <p>Eurowings Digital - Check!</p>
          <section class="animation">
            <div class="first"><div>Price offers</div></div>
            <div class="second"><div>Origin</div></div>
            <div class="third"><div>Destinations</div></div>
          </section>
        </header>

        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search by Origin or Destination"
          single-line
          hide-details
        ></v-text-field>
        <v-data-table
          :headers="headers"
          :items="offers.data"
          :search="search"
        ></v-data-table>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import json from "./data/offers.json";
export default {
  data: () => ({
    offers: json,
    search: "",
    headers: [
      {
        text: "Origin",
        value: "origin",
        align: "start",
      },
      {
        text: "Destination",
        value: "destination",
        align: "center",
      },
      {
        text: "Departure Date",
        value: "departureDate",
        align: "center",
      },
      {
        text: "Return Date",
        value: "returnDate",
        align: "center",
      },
      {
        text: "Price (EUR)",
        value: "price.amount",
        align: "center",
      },
      {
        text: "Available seat(s)",
        value: "seatAvailability",
        align: "center",
      },
    ],
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:700");

body {
  font-family: "Roboto";
}

p {
  cursor: pointer;
  color: #84253e;
  text-shadow: 0 0 7px rgba(255, 255, 255, 0.3),
    0 0 3px rgba(255, 255, 255, 0.3);
  transition: color 250ms ease-in-out;
}

p:hover {
  color: #ac0d0d;
}

.v-application p {
  margin-bottom: 0;
}

.container {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
}

.animation {
  height: 40px;
  overflow: hidden;
  margin-left: 1rem;
}

.animation > div > div {
  display: inline-block;
  height: 40px;
  margin-bottom: 40px;
  padding: 5px 10px;
}

.animation div:first-child {
  animation: text-animation 8s infinite;
}

.first div {
  color: #ffffff;
  background-color: #20a7d8;
}
.second div {
  color: #ffffff;
  background-color: #cd921e;
}
.third div {
  color: #ffffff;
  background-color: #c10528;
}

@keyframes text-animation {
  0% {
    margin-top: 0;
  }
  10% {
    margin-top: 0;
  }
  20% {
    margin-top: -70px;
  }
  30% {
    margin-top: -70px;
  }
  40% {
    margin-top: -145px;
  }
  60% {
    margin-top: -145px;
  }
  70% {
    margin-top: -70px;
  }
  80% {
    margin-top: -70px;
  }
  90% {
    margin-top: 0;
  }
  100% {
    margin-top: 0;
  }
}
</style>
