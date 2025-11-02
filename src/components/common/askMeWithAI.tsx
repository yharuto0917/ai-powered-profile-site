"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AskMeWithAI() {
    return (
        <Button className="fixed bottom-10 w-1/8 left-1/2 -translate-x-1/2 rounded-full" variant="outline">
            Ask Me With AI
        </Button>
    );
}