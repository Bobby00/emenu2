function increaseQty(qtyId) {
	var location = document.getElementById(qtyId);
	var currentQty = location.value;
	var qty = Number(currentQty) + 1;
	location.value = qty;
}

function decreaseQty(qtyId) {
	var location = document.getElementById(qtyId);
	var currentQty = location.value;
	if (currentQty > 1) {
		var qty = Number(currentQty) - 1;
		location.value = qty;
	}
}