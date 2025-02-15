"use client";
import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
// lib/facebookPixel.js
import ReactPixel from 'react-facebook-pixel';

const pixelID = 1198429397883903;

export const initFacebookPixel = () => {
  if (pixelID) {
    ReactPixel.init(pixelID);
    ReactPixel.pageView();  // Track the initial page load
  }
};

export const trackCustomEvent = (event, data = {}) => {
  if (pixelID) {
    ReactPixel.track(event, data);  // For custom events, like purchases
  }
};