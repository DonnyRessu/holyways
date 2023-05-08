package routes

import (
	"backend-holyways/handlers"
	"backend-holyways/pkg/middleware"
	"backend-holyways/pkg/mysql"
	"backend-holyways/repositories"

	"github.com/labstack/echo/v4"
)

func AuthRoutes(e *echo.Group) {
	authRepository := repositories.RepositoryAuth(mysql.DB)
	h := handlers.HandlerAuth(authRepository)

	e.POST("/register", h.Register)
	e.POST("/login", h.Login)
	e.GET("/check-auth", middleware.Auth(h.CheckAuth))
}
