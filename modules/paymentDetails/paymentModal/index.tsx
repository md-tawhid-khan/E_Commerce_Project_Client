"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";

export function DropdownMenuRadioGroupDemo({onOpen,orderId}:{
  onOpen: () => void;
  orderId: string | null;
}) {
  const [position, setPosition] = React.useState("bottom")
 const router = useRouter() ;
  

  return (
    <DropdownMenu  onOpenChange={(open) => {
        if (open && !orderId) {
          onOpen(); 
        }
      }}>
      <DropdownMenuTrigger asChild>
        <Button onClick={onOpen} variant="outline">OrderNow</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>choose payment method </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          
          <DropdownMenuRadioItem value="strip" onClick={() => router.push(`/payment/${orderId}`)}
          >Stripe</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">BKash</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
