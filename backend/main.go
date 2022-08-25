package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/login", Login)
	http.HandleFunc("/home", Home)

	log.Fatal(http.ListenAndServe(":5000", nil))
}
