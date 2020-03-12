import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import moment from "moment";
import Datetime from "react-datetime";
import { Button } from "react-bootstrap";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			meal: "",
			chain: "",
			food: "",
			date: ""
		};
	}

	render() {
		console.log(this.state.meal);
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let testArray = store.chains.concat(store.test);
					console.log("test", testArray);
					return (
						<div>
							<div className="jumbotron jumbotron-home mx-auto">
								<h1>Tracklories everywhere</h1>
								<h2 className="lead">
									Start to take a look how many calories brings your food and track how much calories
									you eat at the end of the day in each meal!!!
								</h2>
								<hr className="my-4" />
								<p>Sign in to start a new healthy life</p>
								<p className="lead">
									<a className="btn btn-primary btn-lg" role="button">
										Join in
									</a>
								</p>
							</div>
							{/*Jumbotron con texto inicial*/}
							<div>
								<h3 className="text-center">
									Start here to check how many calories you are next to eat in fast food
								</h3>
								<hr className="my-4" />
								<h3 className="text-center">Pick a Fast Food Chain:</h3>
							</div>
							<div className="form-group-home text-center mx-auto">
								<label htmlFor="exampleSelect1">Choose one</label>
								<select
									className="form-control"
									id="exampleSelect1"
									onChange={e => {
										actions.selectChain(e.target.value);
										this.setState({ chain: e.target.value });
									}}>
									{testArray.map((chain, inx) => (
										<option key={inx} value={chain}>
											{chain}
										</option>
									))}
								</select>
								{/*lista desplegable de las cadenas de comida*/}
							</div>
							<div className="form-group-home2 text-center mx-auto mt-4 mb-4 row">
								<select
									className="form-control col"
									id="exampleSelect1"
									onChange={e => {
										this.setState({ meal: e.target.value });
									}}>
									{store.branded.map((meal, inx) => (
										<option key={inx} value={meal.food_name}>
											{meal.food_name}
										</option>
									))}
								</select>
								{/*lista desplegable de los tipos de comida*/}
								<button
									type="button col"
									className="btn btn-outline-success ml-2"
									onClick={() => {
										actions.addedItem(this.state.meal);
									}}>
									Add Food item
								</button>
							</div>
							<div>
								<h3 className="text-center">Or if you are not eating a chain food,</h3>
								<hr className="my-4" />
								<h3 className="text-center mb-5">Add your own customized food/calories:</h3>
							</div>
							<div className="NewArea text-center d-flex justify-content-center mb-3">
								<label className="ml-2 col-form-label" htmlFor="inputDefault">
									Insert Food Name
								</label>
								<input
									type="text"
									className="input form-control ml-2 mr-2"
									placeholder="Food Name"
									id="inputDefault"
								/>
								<label className="ml-2 mr-2 col-form-label" htmlFor="inputDefault">
									Insert # Food Calories
								</label>
								<input
									type="number"
									className="input form-control mr-3"
									placeholder="Food Calories"
									id="inputDefault"
								/>
								<button type="button" className="btn btn-outline-success">
									Add New Item
								</button>
							</div>
							<table className="supertable col-sm-12">
								<thead>
									<tr className="table-active">
										<th scope="col">Pic</th>
										<th scope="col">Food Item</th>
										<th scope="col">time</th>
										<th scope="col">qty</th>
										<th scope="col">Calories</th>
										<th scope="col">Total</th>
									</tr>
								</thead>
								<tbody>
									{store.foods.map((meal, id) => (
										<tr key={id}>
											<td>
												<img src={meal.photo.thumb} height="30" width="30" />
											</td>

											<td>{meal.food_name}</td>
											<td>
												<Datetime
													dateFormat={"MM-DD-YYYY"}
													onChange={newDate => {
														actions.updateItem(meal.food_name, {
															quantity: meal.quantity,
															date: newDate._d
														});
													}}
													value={meal.date}
												/>
											</td>

											<td>
												<input
													type="number"
													className="form-control qtyhome"
													id="exampleSelect1"
													value={meal.quantity}
													onChange={e =>
														actions.updateItem(meal.food_name, {
															qty: parseInt(e.target.value, 10),
															date: meal.date
														})
													}
												/>
											</td>

											<td className="py-auto">{parseInt(meal.nf_calories)}</td>

											<td>{parseInt(meal.total)}</td>
										</tr>
									))}
								</tbody>
							</table>
							{/*tabla para reflejar las comidas y las calorias*/}
							<div className="container-fluid mt-3 mb-3">
								<div className="row w-100 align-items-center">
									<div className="col text-center">
										<button
											type="button"
											className="btn btn-success"
											onClick={() => {
												actions.saveFoods(1, 2);
											}}>
											<Link to="/food-tracker">Save meal</Link>
										</button>
									</div>
								</div>
							</div>
							{/*Boton de guardar meal*/}
							<div className="alert alert-dismissible alert-warning">
								<button type="button" className="close" data-dismiss="alert" />
								<h4 className="alert-heading">Warning!</h4>
								<p className="mb-0">
									Join now to save your meal in your tracker profile up 5 days,
									<br />
									<a className="alert-link">
										Sign In <br />
									</a>
									Or if you are already member <br />
								</p>

								<a className="alert-link">Log In</a>
							</div>
							{/*Warning advice text*/}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
