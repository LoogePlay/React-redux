function ProductCard(props) {
	const {elem, removeEmpl, incrEmplAction, decrEmplAction} = props;

	return (
		<div className="cards__card card">
			<h1 className="card__title" onDoubleClick={()=>removeEmpl()}>{elem.name}</h1>

			<div className="card__info">
				<button onClick={()=>incrEmplAction()}>+</button>
				<p>{elem.count}</p>
				<button onClick={()=>decrEmplAction()}>-</button>
			</div>
		</div>
	);
}

export default ProductCard;
