import "./Profile.css";
import React from "react";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

export default function Profile({
  currentWeatherCard,
  setIsFormModalOpen,
  setIsItemModalOpen,
  setClickedItem,
}) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        currentWeatherCard={currentWeatherCard}
        setIsFormModalOpen={setIsFormModalOpen}
        setIsItemModalOpen={setIsItemModalOpen}
        setClickedItem={setClickedItem}
      />
    </div>
  );
}
