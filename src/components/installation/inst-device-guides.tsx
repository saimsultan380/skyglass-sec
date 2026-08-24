"use client";

import React, { useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  HERO_IMAGE,
  HERO_IMAGE_ALT,
  HERO_IMAGE_HEIGHT,
  HERO_IMAGE_WIDTH,
} from "@/lib/assets";
import { ROUTES } from "@/lib/seo";
import { DOWNLOADER_CODE } from "@/lib/site";
import {
  Tv,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Cast,
  Download,
  AlertTriangle,
  ChevronRight,
  Box,
  Headphones,
  Satellite,
  Radio,
} from "lucide-react";

interface DeviceGuide {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  showDownloaderCode?: boolean;
  steps: { title: string; description: string }[];
  notes?: string[];
}

const deviceGuidesList: DeviceGuide[] = [
  {
    id: "firestick",
    name: "Firestick",
    icon: Cast,
    title: "Install Sky Glass IPTV on Firestick",
    subtitle:
      "Install Downloader by AFTVnews, allow the installation permission and enter the Downloader code.",
    showDownloaderCode: true,
    steps: [
      {
        title: "Step 1 – Install Downloader by AFTVnews",
        description:
          "Open Find or Search from the Firestick home screen. Search for Downloader by AFTVnews. Select it from the official Amazon Appstore. Choose Download or Get. Open Downloader after installation.",
      },
      {
        title: "Step 2 – Enable Installation Permission",
        description:
          "Open Settings. Select My Fire TV. Open Developer Options. Select Install Unknown Apps. Allow the permission for Downloader.",
      },
      {
        title: "Step 3 – Enter Downloader Code",
        description: `Open Downloader. Select the code or URL field. Enter ${DOWNLOADER_CODE}. Select Go. Wait for the application file to download. Select Install. Choose Open after installation.`,
      },
      {
        title: "Step 4 – Contact Support",
        description:
          "After the Sky Glass IPTV app is installed, contact support. Support will provide the username, password and server address needed to sign in.",
      },
    ],
    notes: [
      "If Developer Options is hidden: open Settings > My Fire TV > About, highlight your Firestick device name and press the select button repeatedly until the developer message appears, then return to the previous menu.",
    ],
  },
  {
    id: "fire-tv-cube",
    name: "Fire TV Cube",
    icon: Box,
    title: "Install Sky Glass IPTV on Fire TV Cube",
    subtitle:
      "The Fire TV Cube uses the same Amazon Appstore and Downloader route as the Firestick.",
    showDownloaderCode: true,
    steps: [
      { title: "Open the Amazon Appstore", description: "Install Downloader by AFTVnews." },
      {
        title: "Allow Installation",
        description: "Permit Downloader to install the required application.",
      },
      {
        title: "Enter the Code",
        description: `Enter code ${DOWNLOADER_CODE}. Download and install the app.`,
      },
      {
        title: "Contact Support",
        description: "Open the application, then contact support for your account credentials.",
      },
    ],
  },
  {
    id: "android-tv",
    name: "Android TV",
    icon: Tv,
    title: "Install Sky Glass IPTV on Android TV",
    subtitle:
      "Android TV devices install Downloader from the Google Play Store.",
    showDownloaderCode: true,
    steps: [
      {
        title: "Install Downloader",
        description:
          "Open the Google Play Store. Search for Downloader by AFTVnews. Install and open Downloader.",
      },
      {
        title: "Allow App Installation",
        description: "Permit app installation for Downloader where required.",
      },
      {
        title: "Download and Install",
        description: `Enter code ${DOWNLOADER_CODE}. Download the Sky Glass IPTV application. Select Install.`,
      },
      {
        title: "Contact Support",
        description:
          "Open the application, then contact support for your username, password and server URL.",
      },
    ],
  },
  {
    id: "google-tv",
    name: "Google TV",
    icon: Tv,
    title: "Install Sky Glass IPTV on Google TV",
    subtitle: "Google TV devices follow the same Google Play route as Android TV.",
    showDownloaderCode: true,
    steps: [
      {
        title: "Install Downloader",
        description:
          "Open the Google Play Store on the Google TV device. Install Downloader by AFTVnews. Open Downloader.",
      },
      {
        title: "Enter the Code",
        description: `Enter ${DOWNLOADER_CODE}. Download and install the application.`,
      },
      {
        title: "Contact Support",
        description:
          "Open the installed app, then contact support to receive your login details.",
      },
    ],
  },
  {
    id: "android-box",
    name: "Android TV Box",
    icon: Box,
    title: "Install on an Android TV Box",
    subtitle:
      "This method applies to many Android boxes, Nvidia Shield, Xiaomi Mi Box and similar devices.",
    showDownloaderCode: true,
    steps: [
      {
        title: "Install Downloader",
        description:
          "Open the Google Play Store. Install Downloader by AFTVnews.",
      },
      {
        title: "Download the Application",
        description: `Open Downloader and enter ${DOWNLOADER_CODE}. Download the application. Select Install.`,
      },
      {
        title: "Contact Support",
        description:
          "Open the app after installation. Contact support with your device model and order information.",
      },
      {
        title: "Sign In",
        description: "Enter the login details supplied by support.",
      },
    ],
  },
  {
    id: "android-phone",
    name: "Android Phone & Tablet",
    icon: Smartphone,
    title: "Install on an Android Phone or Tablet",
    subtitle: "Install the application through Downloader where it is available.",
    showDownloaderCode: true,
    steps: [
      {
        title: "Install Downloader",
        description:
          "Open the Google Play Store. Search for Downloader by AFTVnews. Install Downloader if available for your device.",
      },
      {
        title: "Download and Install",
        description: `Open the application. Enter code ${DOWNLOADER_CODE}. Download and install the Sky Glass IPTV app.`,
      },
      {
        title: "Contact Support",
        description:
          "Open the application, then contact support for your account login.",
      },
    ],
    notes: [
      "If Downloader is not available for the phone or tablet model, contact support for the appropriate installation link.",
    ],
  },
  {
    id: "samsung-tv",
    name: "Samsung Smart TV",
    icon: Tv,
    title: "Set Up Sky Glass IPTV on Samsung Smart TV",
    subtitle:
      "Samsung Smart TVs use a compatible application from the Samsung Smart Hub rather than an Android APK. Install whichever of CR7 Player, IBO Player, SmartOne IPTV or HOT IPTV is available.",
    steps: [
      {
        title: "Open the Samsung Smart Hub",
        description: "Search for one of the supported players.",
      },
      {
        title: "Install the Player",
        description: "Install and open the selected application.",
      },
      {
        title: "Record the Device Details",
        description:
          "Record the MAC address and device key shown on screen.",
      },
      {
        title: "Contact Support",
        description:
          "Contact support and send the details privately. Support will provide or configure the required account information.",
      },
      {
        title: "Refresh the Player",
        description: "Restart or refresh the player after configuration.",
      },
    ],
  },
  {
    id: "lg-tv",
    name: "LG Smart TV",
    icon: Tv,
    title: "Set Up Sky Glass IPTV on LG Smart TV",
    subtitle:
      "LG Smart TVs normally use an application from the LG Content Store. Available players may include CR7 Player, IBO Player, SmartOne IPTV and HOT IPTV.",
    steps: [
      {
        title: "Open the LG Content Store",
        description: "Search for one of the supported IPTV players.",
      },
      {
        title: "Install the Player",
        description: "Install and open the selected player.",
      },
      {
        title: "Note the Device Details",
        description: "Note the MAC address and device key.",
      },
      {
        title: "Contact Support",
        description:
          "Contact support with those details. Support will provide or configure the playlist information.",
      },
      {
        title: "Refresh the Application",
        description: "Refresh or restart the application.",
      },
    ],
  },
  {
    id: "sony-tv",
    name: "Sony Smart TV",
    icon: Monitor,
    title: "Set Up on Sony Smart TV",
    subtitle: "The method depends on whether the television uses Android TV or Google TV.",
    showDownloaderCode: true,
    steps: [
      {
        title: "Android TV or Google TV Models",
        description: `Open Google Play. Install Downloader by AFTVnews. Enter code ${DOWNLOADER_CODE}. Download and install the Sky Glass IPTV app.`,
      },
      {
        title: "Contact Support",
        description: "Open the application, then contact support for login details.",
      },
    ],
    notes: [
      "If it does not use Android or Google TV, check its app store for CR7 Player, IBO Player, SmartOne IPTV or HOT IPTV.",
    ],
  },
  {
    id: "hisense-tv",
    name: "Hisense Smart TV",
    icon: Monitor,
    title: "Set Up on Hisense Smart TV",
    subtitle:
      "Hisense televisions may use Google TV, Android TV, VIDAA or another operating system.",
    showDownloaderCode: true,
    steps: [
      {
        title: "Android or Google TV Models",
        description: `Install Downloader by AFTVnews. Enter code ${DOWNLOADER_CODE}. Download and install the application. Contact support for login details.`,
      },
      {
        title: "VIDAA Models",
        description:
          "Open the VIDAA app store. Search for CR7 Player, IBO Player, SmartOne IPTV or HOT IPTV. Install whichever supported player is available. Send its MAC address and device key to support.",
      },
    ],
  },
  {
    id: "tcl-tv",
    name: "TCL Smart TV",
    icon: Monitor,
    title: "Set Up on TCL Smart TV",
    subtitle: "TCL models may use Android TV, Google TV or Roku TV.",
    showDownloaderCode: true,
    steps: [
      {
        title: "Android or Google TV Models",
        description: `Install Downloader by AFTVnews from Google Play. Enter code ${DOWNLOADER_CODE}. Install the application.`,
      },
      {
        title: "Contact Support",
        description: "Contact support for login details.",
      },
    ],
    notes: [
      "For Roku TV models, contact support before ordering because app availability varies.",
    ],
  },
  {
    id: "philips-tv",
    name: "Philips Smart TV",
    icon: Monitor,
    title: "Set Up on Philips Smart TV",
    subtitle: "Philips Android and Google TV models use the Downloader route.",
    showDownloaderCode: true,
    steps: [
      {
        title: "Install Downloader",
        description: "Open Google Play. Install Downloader by AFTVnews.",
      },
      {
        title: "Install the Application",
        description: `Enter code ${DOWNLOADER_CODE}. Install and open the Sky Glass IPTV application.`,
      },
      {
        title: "Contact Support",
        description: "Contact support for the account login.",
      },
    ],
    notes: [
      "For non-Android models, check the television app store for CR7 Player, IBO Player, SmartOne IPTV or HOT IPTV.",
    ],
  },
  {
    id: "ios-devices",
    name: "iPhone & iPad",
    icon: Tablet,
    title: "Set Up on iPhone or iPad",
    subtitle: "Apple devices do not install Android APK files.",
    steps: [
      {
        title: "Install a Compatible Player",
        description:
          "Open the Apple App Store. Install a compatible IPTV player recommended by support.",
      },
      {
        title: "Choose the Login Method",
        description: "Open the player. Select Xtream Codes or M3U login.",
      },
      {
        title: "Contact Support",
        description:
          "Contact support for the required username, password, server URL or playlist. Enter the supplied details.",
      },
      {
        title: "Load the Catalogue",
        description: "Save the profile and allow the catalogue to load.",
      },
    ],
  },
  {
    id: "apple-tv",
    name: "Apple TV",
    icon: Cast,
    title: "Set Up on Apple TV",
    subtitle: "Apple TV uses a compatible tvOS player from the App Store.",
    steps: [
      {
        title: "Install a Compatible Player",
        description:
          "Open the tvOS App Store. Install a compatible IPTV player. Open the application.",
      },
      {
        title: "Choose the Login Method",
        description: "Choose Xtream Codes or M3U login.",
      },
      {
        title: "Contact Support",
        description:
          "Contact support for your account information. Enter the supplied details.",
      },
      { title: "Refresh the Profile", description: "Save and refresh the profile." },
    ],
  },
  {
    id: "windows-pc",
    name: "Windows",
    icon: Monitor,
    title: "Set Up on Windows",
    subtitle:
      "Install a trusted compatible IPTV application that accepts Xtream Codes or an M3U playlist.",
    steps: [
      {
        title: "Install the Player",
        description: "Install a trusted compatible IPTV application. Open the player.",
      },
      {
        title: "Choose the Login Method",
        description: "Choose Xtream Codes or M3U.",
      },
      {
        title: "Contact Support",
        description:
          "Contact support for your login information. Enter the username, password and server URL supplied.",
      },
      {
        title: "Load the Catalogue",
        description: "Save the account. Allow the categories and EPG to load.",
      },
    ],
  },
  {
    id: "mac-computer",
    name: "Mac",
    icon: Laptop,
    title: "Set Up on Mac",
    subtitle:
      "Install a compatible macOS IPTV player from the App Store or its verified developer website.",
    steps: [
      {
        title: "Install the Player",
        description:
          "Install a compatible macOS IPTV player from the App Store or its verified developer website. Open the application.",
      },
      {
        title: "Choose the Login Method",
        description: "Select Xtream Codes or M3U login.",
      },
      {
        title: "Contact Support",
        description:
          "Contact support for the correct account details. Enter and save the supplied information.",
      },
      { title: "Refresh the Catalogue", description: "Refresh the catalogue." },
    ],
  },
  {
    id: "mag-device",
    name: "MAG Box",
    icon: Box,
    title: "Set Up on MAG Box",
    subtitle: "MAG devices use portal information rather than an Android application.",
    steps: [
      {
        title: "Find the MAC Address",
        description:
          "Open the MAG device settings. Find the device MAC address.",
      },
      {
        title: "Contact Support",
        description:
          "Contact support and provide the MAC address privately. Support will supply the portal URL or complete the required activation.",
      },
      {
        title: "Enter the Portal",
        description:
          "Enter the portal URL if instructed. Restart the MAG box.",
      },
    ],
  },
  {
    id: "formuler",
    name: "Formuler & MYTVOnline",
    icon: Satellite,
    title: "Set Up on Formuler and MYTVOnline",
    subtitle: "Formuler receivers use MYTVOnline with a portal or Xtream Codes login.",
    steps: [
      {
        title: "Open MYTVOnline",
        description:
          "Choose the portal or Xtream Codes login option recommended by support.",
      },
      {
        title: "Note the Device Details",
        description: "Note the device ID or MAC address if displayed.",
      },
      {
        title: "Contact Support",
        description:
          "Contact support with the device information. Enter the supplied portal or account details.",
      },
      { title: "Connect", description: "Save and connect." },
    ],
  },
  {
    id: "enigma2",
    name: "Enigma2",
    icon: Radio,
    title: "Set Up on Enigma2",
    subtitle: "Enigma2 installation varies by image and receiver.",
    steps: [
      {
        title: "Send Your Receiver Details",
        description:
          "Send support the full receiver model and installed Enigma2 image.",
      },
      {
        title: "Confirm the Method",
        description:
          "Support will confirm whether M3U, Xtream Codes, portal or another supported method is required.",
      },
      {
        title: "Apply the Configuration",
        description:
          "Follow the supplied configuration instructions. Restart the receiver after setup.",
      },
    ],
  },
  {
    id: "roku",
    name: "Roku",
    icon: Tv,
    title: "Set Up on Roku",
    subtitle: "Roku app availability varies by model and country.",
    steps: [
      {
        title: "Check the Channel Store",
        description:
          "Check the Roku Channel Store for a compatible IPTV player.",
      },
      {
        title: "Contact Support First",
        description: "Contact support before purchasing a longer plan.",
      },
      {
        title: "Confirm the Login Method",
        description:
          "Provide the Roku model and available player name. Follow the login method confirmed by support.",
      },
    ],
  },
  {
    id: "sky-glass-tv",
    name: "Sky Glass Television",
    icon: Tv,
    title: "Use Sky Glass IPTV on a Sky Glass Television",
    subtitle:
      "A Sky Glass television normally does not allow direct installation of an Android APK. Connect a compatible Firestick, Fire TV or Android streaming device through HDMI, then follow these steps.",
    showDownloaderCode: true,
    steps: [
      {
        title: "Install Downloader",
        description: "Install Downloader by AFTVnews.",
      },
      {
        title: "Install the Application",
        description: `Enter code ${DOWNLOADER_CODE}. Install the Sky Glass IPTV application.`,
      },
      {
        title: "Contact Support",
        description: "Contact support for login details.",
      },
    ],
  },
];

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

const readHash = () => window.location.hash.replace("#", "");
const serverHash = () => "";

export function InstDeviceGuides() {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Deep links like /…installation-guide/#samsung-tv open the matching device.
  const hash = useSyncExternalStore(subscribeToHash, readHash, serverHash);
  const hashTab = deviceGuidesList.some((guide) => guide.id === hash)
    ? hash
    : null;

  const activeTab = selectedTab ?? hashTab ?? "firestick";
  const activeGuide =
    deviceGuidesList.find((g) => g.id === activeTab) ?? deviceGuidesList[0];

  const handleTabClick = (id: string) => {
    setSelectedTab(id);
    setTimeout(() => {
      if (contentRef.current) {
        const yOffset = -80;
        const y =
          contentRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section
      id="device-guides"
      className="w-full py-12 sm:py-20 bg-slate-50/50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          <div
            data-no-reveal
            className="lg:col-span-4 flex flex-col gap-6 bg-white border border-slate-200 rounded-[12px] p-6 lg:sticky lg:top-24 max-h-[80vh] overflow-y-auto"
          >
            <div>
              <span className="text-[11px] font-bold text-[#E91E8C] uppercase tracking-wider block mb-1">
                Installation Guide
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B0E2C] mb-1 font-heading">
                Device Setup Instructions
              </h2>
              <p className="text-xs text-slate-500 font-semibold mb-6">
                Select your device for step-by-step Sky Glass IPTV installation.
              </p>

              <div className="flex flex-col gap-2.5">
                {deviceGuidesList.map((device) => {
                  const Icon = device.icon;
                  const isActive = activeTab === device.id;
                  return (
                    <button
                      key={device.id}
                      onClick={() => handleTabClick(device.id)}
                      className={`w-full flex items-center justify-between text-left px-4 py-3 rounded-[12px] border transition-all duration-200 focus:outline-none ${
                        isActive
                          ? "border-[#E91E8C] bg-pink-50/30 text-[#E91E8C]"
                          : "border-transparent bg-white hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                            isActive
                              ? "bg-pink-100 text-[#E91E8C]"
                              : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          <Icon className="h-4.5 w-4.5 stroke-[2]" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold tracking-tight">
                          {device.name}
                        </span>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isActive ? "text-[#E91E8C] translate-x-0.5" : "text-slate-300"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            id={activeGuide.id}
            ref={contentRef}
            data-no-reveal
            className="lg:col-span-8 rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between min-h-[600px] relative scroll-mt-24"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B0E2C] mb-3 font-heading">
                {activeGuide.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-6 leading-relaxed max-w-2xl">
                {activeGuide.subtitle}
              </p>

              {activeGuide.showDownloaderCode && (
                <div className="inline-flex items-center gap-3 p-3 rounded-[12px] border border-pink-100 bg-pink-50/50 mb-6 select-none">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E91E8C] text-white">
                    <Download className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block leading-none mb-0.5">
                      Downloader Code
                    </span>
                    <span className="text-sm font-extrabold text-[#E91E8C] leading-none">
                      {DOWNLOADER_CODE}
                    </span>
                  </div>
                </div>
              )}

              <div className="relative w-full max-w-md mx-auto my-8 select-none flex items-center justify-center">
                <Image
                  src={HERO_IMAGE}
                  alt={HERO_IMAGE_ALT}
                  width={HERO_IMAGE_WIDTH}
                  height={HERO_IMAGE_HEIGHT}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>

              <ol className="space-y-6 relative border-l-2 border-slate-100 pl-6 ml-3">
                {activeGuide.steps.map((step, idx) => (
                  <li key={step.title} className="relative">
                    <span className="absolute -left-[37px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-pink-50 border border-pink-100 text-[#E91E8C] font-bold text-xs">
                      {idx + 1}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0B0E2C] mb-1.5 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>

              <div className="mt-8">
                <Link href={ROUTES.contact} className="w-full sm:w-auto inline-block">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto rounded-[12px] border-gradient-brand px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold"
                  >
                    <Headphones className="mr-2 h-4 w-4 text-[#E91E8C] shrink-0 stroke-[2.5]" />
                    <span>Contact Support for Login Details</span>
                  </Button>
                </Link>
              </div>
            </div>

            {activeGuide.notes && activeGuide.notes.length > 0 && (
              <div className="border-t border-slate-100 pt-5 mt-8 space-y-2">
                {activeGuide.notes.map((note) => (
                  <div key={note} className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-[#E91E8C] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
