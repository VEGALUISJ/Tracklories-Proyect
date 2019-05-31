import PropTypes from "prop-types";
import React from "react";
import injectContext from "../store/appContext.js";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			food: [],
			info: ["sfsdd", "dddd"],
			selected: "",
			tableMain: "",
			day: new Date(),
			previousDay: "",
			months: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},

		actions: {
			searchBar: () => {
				// const store = getStore();
				// fetch("https://trackapi.nutritionix.com/v2/search/instant?query=" + store.fetcho, {
				// 	headers: {
				// 		"x-app-key": "2865a994886d0e258357d55037e33f3b",
				// 		"x-remote-user-id": "0",
				// 		"x-app-id": "da0a3819"
				// 	}
				// })
				// 	.then(response => response.json())
				// 	.then(data => {
				// 		store.food = data.common.map((item, index) => {
				// 			return item.food_name;
				// 		});
				// 		setStore({ store: store });
				// 	});
			},

			selection: select => {
				console.log(select);
			}
		}
	};
};

export default getState;
