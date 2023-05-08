package main

import (
	"backend-holyways/database"
	"backend-holyways/pkg/mysql"
	"backend-holyways/routes"

	"fmt"
	"os"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	errEnv := godotenv.Load()
	if errEnv != nil {
		panic("failed to load env file")
	}

	e := echo.New()
	mysql.DatabaseInit()
	database.RunMigration()

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.POST, echo.PATCH, echo.DELETE, echo.PUT},
		AllowHeaders: []string{"X-Requested-With", "Content-Type", "Authorization"},
	}))

	PORT := os.Getenv("PORT")

	routes.RoutesInit(e.Group("/api/v1"))
	e.Static("/uploads", "./uploads")

	fmt.Println("Server running on localhost:" + PORT)
	e.Logger.Fatal(e.Start(":" + PORT))
}
