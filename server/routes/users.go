package routes

import (
	"backend-holyways/handlers"
	"backend-holyways/pkg/middleware"
	"backend-holyways/pkg/mysql"
	"backend-holyways/repositories"

	"github.com/labstack/echo/v4"
)

func UserRoutes(e *echo.Group) {
	UserRepository := repositories.RepositoryUser(mysql.DB)
	h := handlers.HandlerUser(UserRepository)

	e.GET("/users", h.FindUsers)
	e.GET("/user/:id", h.GetUser)
	e.PATCH("/user/:id", middleware.UploadFile(h.UpdateUser))
	e.DELETE("/user/:id", h.DeleteUser)
}
