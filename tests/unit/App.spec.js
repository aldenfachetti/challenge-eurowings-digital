import Vuetify from "vuetify";
import { createLocalVue, mount } from "@vue/test-utils";

import App from "../../src/App.vue";

describe("App.vue", () => {
  const localVue = createLocalVue();

  let vuetify;
  let wrapper;

  beforeEach(() => {
    vuetify = new Vuetify();

    wrapper = mount(App, {
      localVue,
      vuetify,
      data: () => ({
        offers: {
          data: [
            {
              origin: "FRA",
              destination: "FCO",
              departureDate: "2023-03-21",
              returnDate: "2023-03-21",
              seatAvailability: "19",
              offerType: "Best Price",
              uuid: "1",
              price: {
                amount: "1539.75",
                currency: "EUR",
              },
            },
            {
              origin: "AAQ",
              destination: "ABJ",
              departureDate: "2023-03-21",
              returnDate: "2023-03-21",
              seatAvailability: "8",
              offerType: "Best Price",
              uuid: "2",
              price: {
                amount: "540.48",
                currency: "EUR",
              },
            },
            {
              origin: "FRA",
              destination: "ABZ",
              departureDate: "2023-03-21",
              returnDate: "2023-03-21",
              seatAvailability: "12",
              offerType: "Best Price",
              uuid: "3",
              price: {
                amount: "97.82",
                currency: "EUR",
              },
            },
            {
              origin: "ACC",
              destination: "ADB",
              departureDate: "2023-03-21",
              returnDate: "2023-03-21",
              seatAvailability: "0",
              offerType: "Best Price",
              uuid: "4",
              price: {
                amount: "703.04",
                currency: "EUR",
              },
            },
          ],
        },
      }),
    });
  });

  it("is a vue instance", () => {
    const wrapper = mount(App, {
      localVue,
      vuetify,
    });
    // console.log(wrapper.html());

    expect(wrapper.vm).toBeTruthy();
  });

  it("renders the list of offers", () => {
    const offerRows = wrapper.findAll("tbody tr");

    expect(offerRows).toHaveLength(4);
  });

  it("filters the result set by origin or destination", async () => {
    await wrapper.setData({ search: "ACC" });

    const offerRows = wrapper.findAll("tbody tr");

    expect(offerRows).toHaveLength(1);

    const filteredOffer = wrapper.find("tbody tr td:first-of-type");

    expect(filteredOffer.text()).toBe("ACC");
  });
});
