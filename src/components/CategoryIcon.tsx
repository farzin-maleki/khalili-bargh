import {
  Cable, ToggleRight, Lightbulb, Phone, Shield, Zap,
  Fan, Pipette, Lamp, Camera, Radar, Cylinder,
} from "lucide-react";
import type { Product } from "@/data/products";

const MAP = {
  Cable, ToggleRight, Lightbulb, Phone, Shield, Zap,
  Fan, PipetteIcon: Pipette, Lamp, Camera, Radar, Cylinder,
} as const;

export function CategoryIcon({ name, className = "" }: { name: Product["icon"]; className?: string }) {
  const Icon = MAP[name] ?? Lightbulb;
  return <Icon className={`icon-bulb ${className}`} strokeWidth={1.5} />;
}