package cart

import (
	"example/ecom/types"
	"fmt"
)

func getCartItemsIDs(items []types.CartItem) ([]int, error) {

	productsIds := make([]int, len(items))
	for i, item := range items {
		if item.Quantity <= 0 {
			return nil, fmt.Errorf("invalid quantity for the product %d", item.ProductID)
		}

		productsIds[i] = item.ProductID
	}

	return productsIds, nil

}

func (h *Handler) createOrder(ps []types.Product, item []types.CartItem, userID int) (int, float64, error) {
	//Check if all products are actually in stock
	//Calculate the total price
	//Reduce the quantity of the products
	//Create the order
	//Create order items
	return 0, 0, nil
}
