package routes

import "github.com/labstack/echo/v4"

func RoutesInit(e *echo.Group) {
	UserRoutes(e)
	AuthRoutes(e)
	DonationRoutes(e)
	TransactionRoutes(e)
}
