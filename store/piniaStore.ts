import { defineStore } from "pinia";
import { MyData } from "~~/models/db.models";
interface TaskState {
  dataMass: MyData[];
  favourites: MyData[];
  deals: MyData[];
  paid: MyData[];
  activeType_All: boolean;
  activeType_Direct: boolean;
  activeType_Auction: boolean;
  filterKey: string;
  index: number;
  inputValue: string;
}

export const usePiniaStore = defineStore("usePiniaStore", {
  state: (): TaskState => ({
    dataMass: [],
    favourites: [],
    deals: [],
    paid: [],
    activeType_All: false,
    activeType_Direct: false,
    activeType_Auction: false,
    filterKey: "",
    index: 0,
    inputValue: "",
  }),
  getters: {},
  actions: {
    async loadData() {
      let response: any = await $fetch(
        "https://proxy.cors.sh/https://myjsons.com/v/23ce916",
        {
          headers: {
            "x-cors-api-key": "temp_f4844ffe7a9feef424c725c5309b03f7",
          },
        }
      );
      this.dataMass = response.data;
    },
    setActiveType(saleType: string) {
      if (saleType == "All") {
        this.activeType_All = true;
        this.activeType_Direct = false;
        this.activeType_Auction = false;
        this.filterKey = "All";
      } else if (saleType == "Direct") {
        this.activeType_All = false;
        this.activeType_Direct = true;
        this.activeType_Auction = false;
        this.filterKey = "Разовая продажа";
      } else {
        this.activeType_All = false;
        this.activeType_Direct = false;
        this.activeType_Auction = true;
        this.filterKey = "Аукцион";
      }
      localStorage.setItem("activeChapter", saleType);
    },
  },
});
