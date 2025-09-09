"use client";

import { useState } from "react";
import TopPannel from "./topPannel/page";
import { usePanel } from "@/context/panelContext";

export default function Navbar() {
  return (
    <header>
      <TopPannel/>
    </header>
  );
}
