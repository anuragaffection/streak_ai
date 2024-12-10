package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
)

func queryParamDisplayHandler(res http.ResponseWriter, req *http.Request) {
	io.WriteString(res, "startItemX: "+req.FormValue("startItemX"))
	io.WriteString(res, "\nstartItemY: "+req.FormValue("startItemY"))
	io.WriteString(res, "\nendItemX: "+req.FormValue("endItemX"))
	io.WriteString(res, "\nendItemY\n: "+req.FormValue("endItemY"))
}
func main() {
	// API routes
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello")
	})

	http.HandleFunc("/find-path", func(w http.ResponseWriter, r *http.Request) {
		startItemX := r.FormValue("startItemX")
		startItemY := r.FormValue("startItemY")
		endItemX := r.FormValue("endItemX")
		endItemY := r.FormValue("endItemY")

		var matrix [20][20]int
		// fmt.Println(r)
		for i := 0; i < len(matrix); i++ {
			for j := 0; j < len(matrix[i]); j++ {

				fmt.Printf("Element at [%d][%d]: %d\n", i, j, matrix[i][j])
			}
		}
		queryParamDisplayHandler(w, r)
		fmt.Fprintf(w, "Hi find path")
		fmt.Fprintf(w, r.FormValue("startItemX"))
	})

	port := ":5000"
	fmt.Println("Server is running on port" + port)

	// Start server on port specified above
	log.Fatal(http.ListenAndServe(port, nil))
	fmt.Println("Hello, world.")
}
