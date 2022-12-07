package main

import (
	"github.com/gdamore/tcell/v2"
	"github.com/rivo/tview"
)

var app = tview.NewApplication()

var text = tview.NewTextView().
    SetTextColor(tcell.ColorGreen).
   	SetText("Volya, Vitya, Kostya - Good Friends")

func main() {
	if err := app.SetRoot(text, true).EnableMouse(true).Run(); err != nil {
		panic(err)
	}	
}