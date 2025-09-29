import { Card, CardDescription } from "@/components/ui/card";
import React from "react";

export default function Card1SubHeader() {
  return (
    <Card className="ps-6 w-1/4">
      <CardDescription className="capitalize">
        total asset value
      </CardDescription>
      <p className="text-2xl font-bold">$10,356788</p>
    </Card>
  );
}
