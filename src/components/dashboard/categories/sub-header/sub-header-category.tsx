import React from "react";
import Card2SubHeader from "./card2-sub-header/card2-sub-header";
import Card1SubHeader from "./card1-sub-header/card1-sub-header";


export default function SubHeaderCategory() {
  return (
    <div className="flex justify-center items-center mt-4 gap-0.5 h-[100px]">
      <Card1SubHeader/>
      <Card2SubHeader/>
    </div>
  );
}
