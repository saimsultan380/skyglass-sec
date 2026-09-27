import { permanentRedirect } from "next/navigation";
import { ROUTES } from "@/lib/seo";

export default function LegacyHomeRedirect() {
  permanentRedirect(ROUTES.installation);
}
