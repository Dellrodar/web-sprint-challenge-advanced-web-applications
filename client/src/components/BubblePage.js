import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import Bubbles from './Bubbles';
import ColorList from './ColorList';

const BubblePage = () => {
	const [colorList, setColorList] = useState([]);
	// fetch your colors data from the server when the component mounts
	// set that data to the colorList state property

	const getBubbles = () =>
		axiosWithAuth()
			.get('/colors')
			.then((res) => {
				console.log(res);
				setColorList(res.data);
			})
			.catch((err) => console.log('Error fetching colors: ', err));

	useEffect(() => {
		getBubbles();
	}, []);

	return (
		<>
			<ColorList colors={colorList} updateColors={setColorList} getBubbles={getBubbles}/>
			<Bubbles colors={colorList} />
		</>
	);
};

export default BubblePage;
