import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="Ciudad..."/>
		<input type="text" name="country" placeholder="País..."/>
		<button>Obtener Clima</button>
	</form>
);

export default Form;
