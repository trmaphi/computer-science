package main

import (
	"fmt"
)

const (
	isAdmin = 1 << iota
	isHeadquarters
	canSeeFinancials

	canSeeAfrica
	canSeeAsia
)

func main() {
	var roles byte = isAdmin | canSeeAfrica | canSeeAsia;
	fmt.Printf("%b\n", roles);
	fmt.Printf("Is admin? %v\n", isAdmin & roles == isAdmin);
	fmt.Printf("Is HQ? %v\n", isHeadquarters & roles == isHeadquarters);
}
