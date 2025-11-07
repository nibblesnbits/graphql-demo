import type { RouteDefinition } from "@/Router/withRelay";
import { lazy } from "react";

export default {
  path: "/admin",
  component: lazy(() => import(".")),
} as RouteDefinition;
