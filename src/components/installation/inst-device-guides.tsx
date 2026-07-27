"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/animation/fade-in";
import {
  HERO_IMAGE,
  HERO_IMAGE_ALT,
  HERO_IMAGE_HEIGHT,
  HERO_IMAGE_WIDTH,
} from "@/lib/assets";
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

const DOWNLOADER_CODE = "2245820";

const deviceGuidesList: DeviceGuide[] = [
  {
    id: "firestick",
    name: "Amazon Firestick",
    icon: Cast,
    title: "Install Sky Glass IPTV on Amazon Firestick",
    subtitle: "Follow these steps to install the dedicated app on Firestick or Fire TV using Downloader.",
    showDownloaderCode: true,
    steps: [
      {
        title: "Step 1 – Find Downloader",
        description:
          "From the Firestick home screen: Select Find. Open Search. Type Downloader. Select Downloader by AFTVnews. Choose Get or Download. Wait for the installation. Open Downloader.",
      },
      {
        title: "Step 2 – Enable Installation Permission",
        description:
          "Open a route similar to: Settings → My Fire TV → Developer Options → Install Unknown Apps. Select Downloader and enable permission. If Developer Options are hidden: Open Settings, select My Fire TV, choose About, highlight the Fire TV device name and press the select button repeatedly until the developer-options message appears. Return to My Fire TV and open Developer Options. Menu names can differ between Fire TV versions.",
      },
      {
        title: "Step 3 – Enter the Code",
        description:
          "Open Downloader and enter: 2245820. Choose Go. Confirm that the destination page shows the correct app information. Do not continue when the page displays unrelated branding, opens repeated redirects, requests unnecessary personal information, asks you to install unrelated applications, or downloads an unexpected file type.",
      },
      {
        title: "Step 4 – Install the APK",
        description:
          "After the download: Select Install. Wait for installation to complete. Select Done or Open. Return to Downloader. Delete the downloaded APK if you want to recover storage. Deleting the APK after installation does not remove the app.",
      },
      {
        title: "Step 5 – Move the App",
        description:
          "Open your Firestick application list. Highlight the new app. Press the remote menu button. Select Move or Move to Front. Place it near the beginning of the app list.",
      },
      {
        title: "Step 6 – Enter Your Account",
        description:
          "Open the app and enter your username, password and server URL. Save the profile and wait for the first account load.",
      },
    ],
  },
  {
    id: "android-tv",
    name: "Android TV",
    icon: Tv,
    title: "Install on Android TV",
    subtitle:
      "The same dedicated Android application can be installed on compatible Android TV devices.",
    showDownloaderCode: true,
    steps: [
      { title: "Install Downloader", description: "Open the Google Play Store. Search for Downloader. Install it." },
      { title: "Enable External Installation", description: "Open the device security settings. Allow Downloader to install external apps." },
      { title: "Enter Code and Install", description: "Open Downloader. Enter code 2245820. Download the APK. Install the application." },
      { title: "Sign In", description: "Open it. Enter the subscription login. After installation, you can remove Downloader's external-installation permission." },
    ],
  },
  {
    id: "google-tv",
    name: "Google TV",
    icon: Tv,
    title: "Google TV Installation",
    subtitle:
      "Google TV devices use a similar process to Android TV. Compatible hardware may include Chromecast with Google TV and selected televisions using the Google TV interface.",
    showDownloaderCode: true,
    steps: [
      { title: "Install Downloader", description: "Install Downloader from the app store." },
      { title: "Enable Permission", description: "Enable permission for external installation." },
      { title: "Download and Install", description: "Enter code 2245820. Download the approved APK. Install the app." },
      { title: "Add Your Account", description: "Open it. Add your username, password and server URL. The exact menu route depends on the device manufacturer and software version." },
    ],
  },
  {
    id: "android-box",
    name: "Android Box & Shield",
    icon: Box,
    title: "Android Box and NVIDIA Shield Setup",
    subtitle:
      "Android streaming boxes and NVIDIA Shield devices can normally use the dedicated APK.",
    showDownloaderCode: true,
    steps: [
      {
        title: "Before Installation",
        description:
          "Check available storage. Update the operating system where appropriate. Confirm that the device allows APK installation. Remove an incomplete older installation if necessary.",
      },
      {
        title: "Install via Downloader",
        description:
          "Follow the Android TV Downloader method: install Downloader, enable external app installation, enter code 2245820, download and install the APK.",
      },
      {
        title: "Enter Account Details",
        description:
          "Open the app and enter the account details supplied after activation.",
      },
    ],
  },
  {
    id: "android-phone",
    name: "Android Phone & Tablet",
    icon: Smartphone,
    title: "Android Phone and Tablet Installation",
    subtitle: "Install the dedicated app directly on Android mobile devices.",
    steps: [
      { title: "Download the APK", description: "Open the official direct address (http://aftv.news/2245820). Download the APK." },
      { title: "Allow Installation", description: "Open the completed download. Allow installation from the browser or file manager. Select Install." },
      { title: "Enter Account", description: "Open the application. Enter the account username, password and full server address. Save the account. Wait for the content to load." },
    ],
    notes: [
      "Android may display a warning because the app is installed outside the Play Store. Continue only when the APK came from the approved route.",
      "Remove the browser's external-installation permission after setup when it is no longer needed.",
    ],
  },
  {
    id: "samsung-tv",
    name: "Samsung Smart TV",
    icon: Tv,
    title: "Samsung Smart TV Setup",
    subtitle:
      "Samsung televisions do not normally support an Android APK. Use a compatible IPTV player from the Samsung App Store.",
    steps: [
      {
        title: "Install a Compatible Player",
        description:
          "Open the Samsung App Store. Search for a compatible player. Potential applications may include IBO Player, SmartOne IPTV, CR7 Player or other compatible Xtream Codes players.",
      },
      {
        title: "Enter Account Details",
        description:
          "Open it. Choose Xtream Codes or the supported playlist method. Enter the username, password and server URL. Add a profile name. Save the account.",
      },
      {
        title: "Load Content",
        description:
          "Restart the player if requested. Wait for the categories to load.",
      },
    ],
    notes: [
      "Player availability depends on television model, operating system, country and App Store region.",
      "A separate player activation fee may apply.",
    ],
  },
  {
    id: "lg-tv",
    name: "LG Smart TV",
    icon: Tv,
    title: "LG Smart TV Setup",
    subtitle: "LG televisions use applications from the LG Content Store.",
    steps: [
      {
        title: "Install a Player",
        description:
          "Open the LG Content Store. Search for an IPTV player. Possible applications may include IBO Player, SmartOne IPTV, CR7 Player or other compatible players.",
      },
      {
        title: "Configure Login",
        description:
          "Open it. Select Xtream Codes or M3U. Enter the account details. Save the profile.",
      },
      {
        title: "Load Categories",
        description: "Restart the application. Allow the categories to load.",
      },
    ],
    notes: [
      "Do not purchase a third-party player until you have confirmed that it supports your television and login method.",
    ],
  },
  {
    id: "sony-tv",
    name: "Sony, Hisense & TCL",
    icon: Monitor,
    title: "Sony, Hisense and TCL Television Setup",
    subtitle: "The installation method depends on the operating system.",
    steps: [
      {
        title: "Android TV or Google TV Models",
        description:
          "Use the dedicated APK through Downloader where compatible. Follow the Android TV or Google TV installation steps above.",
      },
      {
        title: "Non-Android Models",
        description:
          "Use an IPTV player available in the television's app store.",
      },
      {
        title: "Before Installing",
        description:
          "Check: television model, operating system, app-store availability, login compatibility and player activation cost.",
      },
    ],
  },
  {
    id: "apple-tv",
    name: "Apple TV",
    icon: Cast,
    title: "Apple TV Installation",
    subtitle: "Apple TV cannot install the Android APK. Use a compatible tvOS application from the Apple App Store.",
    steps: [
      {
        title: "Install a Player",
        description:
          "Open the App Store. Install a compatible application. Potential options may include IBO Player Pro, VU IPTV Player or another compatible Xtream Codes player.",
      },
      {
        title: "Add Your Account",
        description:
          "Open the player. Select the supported login method. Enter the username, password and server URL. Save the account. Wait for loading to finish.",
      },
    ],
  },
  {
    id: "ios-devices",
    name: "iPhone & iPad",
    icon: Tablet,
    title: "iPhone and iPad Setup",
    subtitle: "Use a compatible player from the iOS App Store.",
    steps: [
      {
        title: "Install a Player",
        description:
          "Possible applications may include iPlayTV AIO, IBO Player Pro, VU IPTV Player or another compatible application.",
      },
      {
        title: "Configure Account",
        description:
          "After installation: Select Xtream Codes or the supported playlist type. Enter the login information. Add a profile name. Save the account. Allow the categories to load.",
      },
    ],
    notes: ["Some applications charge a purchase or activation fee."],
  },
  {
    id: "windows-pc",
    name: "Windows PC",
    icon: Monitor,
    title: "Windows PC Setup",
    subtitle: "Install a compatible application from the Microsoft Store or a trusted developer source.",
    steps: [
      { title: "Install the Player", description: "Install the selected player from the Microsoft Store or a trusted developer source." },
      { title: "Configure Login", description: "Open it. Choose Xtream Codes or M3U. Enter the username, password and server address. Save the profile. Wait for synchronisation." },
    ],
    notes: ["Avoid modified software and unknown download directories."],
  },
  {
    id: "mac-computer",
    name: "Mac",
    icon: Laptop,
    title: "Mac Installation",
    subtitle: "Mac users can install a compatible application from the Mac App Store or another trusted developer.",
    steps: [
      { title: "Install the Player", description: "Install a compatible application from the Mac App Store or a trusted developer." },
      { title: "Add Your Account", description: "Open the player. Choose the supported login method. Enter the username, password and full server address. Save the account. Wait for the initial load." },
    ],
    notes: ["App availability varies by macOS version and country."],
  },
  {
    id: "mag-device",
    name: "MAG Device",
    icon: Box,
    title: "MAG Device Setup",
    subtitle: "MAG devices may use portal information rather than a standard Android application.",
    steps: [
      {
        title: "Required Information",
        description:
          "The setup process may require: device MAC address, portal URL and network connection.",
      },
      {
        title: "Portal Assignment",
        description:
          "Restart after portal assignment. Only provide the device information through a verified support channel.",
      },
    ],
    notes: ["Do not post the MAC address publicly."],
  },
];

export function InstDeviceGuides() {
  const [activeTab, setActiveTab] = useState("firestick");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && deviceGuidesList.some((guide) => guide.id === hash)) {
      setActiveTab(hash);
    }
  }, []);

  const activeGuide =
    deviceGuidesList.find((g) => g.id === activeTab) || deviceGuidesList[0];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
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
          <div className="lg:col-span-4 flex flex-col gap-6 bg-white border border-slate-200 rounded-[12px] p-6 lg:sticky lg:top-24 max-h-[80vh] overflow-y-auto">
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
