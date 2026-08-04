import type { Metadata } from "next";
import MinistriesFilter from "./MinistriesFilter";

export const metadata: Metadata = {
  title: "Ministries | Faith Community Church",
  description: "There's a place for everyone here — whatever your age, season, or story.",
};

export default function ConnectPage() {
  return <MinistriesFilter />;
}
