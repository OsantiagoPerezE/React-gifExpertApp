import React, { useState } from 'react';
import { GifGrid } from './components/GifGrid';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Dragon Ball']);

	// const handleAdd = () => {
	// 	//	setCategories(['HunterXHunter', ...categories]);
	// 	setCategories(cats => [...cats, 'HunterXHunter']);
	// };

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />

			<hr />

			<ol>
				{categories.map((category, i) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};
