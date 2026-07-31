import { useLocation } from "react-router-dom";
import BlogSeriesNavigation from "./BlogSeriesNavigation";

interface LegacySeriesRouteNavigationProps {
  placement: "banner" | "footer";
}

const legacySeriesPaths = new Set([
  "/blog/politics-and-hypocrisy",
  "/blog/the-enforcers",
  "/blog/sanctuary-and-silence",
  "/blog/playing-fields-and-schoolyards",
  "/blog/community-betrayal",
  "/blog/first-do-no-harm",
  "/blog/community-ties",
  "/blog/inside-the-house",
]);

export default function LegacySeriesRouteNavigation({
  placement,
}: LegacySeriesRouteNavigationProps) {
  const { pathname } = useLocation();

  if (!legacySeriesPaths.has(pathname)) return null;

  return <BlogSeriesNavigation placement={placement} />;
}
