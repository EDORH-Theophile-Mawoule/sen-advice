package api

import (
	"database/sql"
	"example/ecom/services/product"
	"example/ecom/services/user"
	"log"
	"net/http"

	"github.com/rs/cors"

	//"github.com/gorilla/handlers"

	"github.com/gorilla/mux"
)

type APIServer struct {
	addr string
	db   *sql.DB
}

func NewAPIServer(addr string, db *sql.DB) *APIServer {
	return &APIServer{
		db:   db,
		addr: addr,
	}
}

func (s *APIServer) Run() error {
	router := mux.NewRouter()
	subrouter := router.PathPrefix("/api/v1").Subrouter() //The reason behind this prefix is do that if the api changes in the future we have a new version so we can just increment it to version 2, this because clients that are consumming our api should not have breaking changes

	userStore := user.NewStore(s.db)
	userHandler := user.NewHandler(userStore)
	userHandler.RegisterRoutes(subrouter)

	productStore := product.NewStore(s.db)
	productHandler := product.NewHandler(productStore)
	productHandler.RegisterRoutes(subrouter)
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowCredentials: true,
	})

	realhandler := c.Handler(router)
	//log.Fatal(http.ListenAndServe(":3000", handler)

	log.Println("Listening on", s.addr)
	return http.ListenAndServe(":8080", realhandler)
}
