import "./Profile.css";
import React from "react";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

export default function Profile({
  setIsItemModalOpen,
  setClickedItem,
  filteredApiItems
}) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        setIsItemModalOpen={setIsItemModalOpen}
        setClickedItem={setClickedItem}
        filteredApiItems={filteredApiItems}
      />
    </div>
  );
}
