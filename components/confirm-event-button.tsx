"use client"

import { Button } from "./ui/button"

export function ConfirmEventButton() {
    // buikld an onclkick handkler -> fire API call to schedule an event
    return (
        <Button onClick={() => {

            console.log("event button Clicked")

        }}> Schedule It!</Button>

    )
}