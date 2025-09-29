import { Card } from "@/components/ui/card";
import React from "react";
import Block2Card2 from "./bock2-card2";
import Block3Card2 from "./block3-card2";
import Block1Card2 from "./block1-card2";


export default function Card2SubHeader() {
  return (
    <Card className="w-3/4 space-y-2 ps-7">
      <div className="space-y-2">
        <Block1Card2/>
        <Block2Card2 />
        <Block3Card2 />
      </div>
    </Card>
  );
}
