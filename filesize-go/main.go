package main

import (
	"fmt"
)

const (
	_ = iota
	KB = 1 << (10 * iota)
	MB
	GB
)

func main() {
	filesize := 2412412.
	fmt.Printf("%.2f MB", filesize/MB);
}
