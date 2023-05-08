package routes

import (
	"backend-holyways/handlers"
	"backend-holyways/pkg/middleware"
	"backend-holyways/pkg/mysql"
	"backend-holyways/repositories"

	"github.com/labstack/echo/v4"
)

func TransactionRoutes(e *echo.Group) {
	TransactionRepository := repositories.RepositoryTransaction(mysql.DB)

	h := handlers.HandlerTransaction(TransactionRepository)

	e.GET("/transactions", h.FindTransaction)
	e.GET("/transaction", middleware.Auth(h.GetTransaction))
	e.GET("/transaction-by-donation-and-status-succes/:id", h.FindTransactionByDonationIDAndStatusSucces)
	e.POST("/transaction", middleware.Auth(h.CreateTransaction))
	e.POST("/notification", h.Notification)
	e.GET("/transaction-user", middleware.Auth(h.FindTransactionUser))
	e.GET("/transaction-donation", h.FindTransactionDonation)
}
