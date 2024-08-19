package main

import (
	"database/sql"
	"example/ecom/cmd/api"
	"example/ecom/config"
	"example/ecom/db"
	"html/template"
	"log"
	"net/http"
	"sync"

	"github.com/go-sql-driver/mysql"
)

var tmpl *template.Template

func init() {
	tmpl = template.Must(template.ParseGlob("cmd/static/templates/*.html"))
}
func homeHandler(w http.ResponseWriter, r *http.Request) {
	tmpl.ExecuteTemplate(w, "index2.html", nil)
}
func uploadHandler(w http.ResponseWriter, r *http.Request) {
	tmpl.ExecuteTemplate(w, "index3.html", nil)
}

func main() {
	fs := http.FileServer(http.Dir("cmd"))
	http.Handle("/cmd/static/", http.StripPrefix("/cmd/", fs))
	http.HandleFunc("/", homeHandler)
	http.HandleFunc("/upload", uploadHandler)

	//Create a wait group
	wg := new(sync.WaitGroup)

	//Add two goroutines to wg
	wg.Add(2)

	//Go routine tou launch server on port 8080
	go func() {
		//api routes
		db, err := db.NewMySQLStorage(mysql.Config{
			User:                 config.Envs.DBUser,
			Passwd:               config.Envs.DBPassword,
			Addr:                 config.Envs.DBAdress,
			DBName:               config.Envs.DBName,
			Net:                  "tcp",
			AllowNativePasswords: true,
			ParseTime:            true,
		})
		if err != nil {
			log.Fatal(err)
		}
		initStorage(db)
		server := api.NewAPIServer(":8080", db)
		if err := server.Run(); err != nil {
			log.Fatal(err)
		}
		wg.Done()
	}()

	//Go routine to launch server on port 8443
	go func() {
		err := http.ListenAndServe(":8443", nil)
		log.Fatal(err)

		wg.Done()
	}()

	//Wait until wait group is done
	wg.Wait()

}

func initStorage(db *sql.DB) {
	err := db.Ping()
	if err != nil {
		log.Fatal(err)
	}
	log.Println("DB: Successfully connected!")
}
