import { Suspense } from "react";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <Suspense>
      <div className="flex bg-amber-100 dark:bg-gray-600 p-4 lg:text-lg justify-center gap-6">
        <NavBarItem title="Trending" param="fetchTrending" />
        <NavBarItem title="Top Rated" param="fetchTopRated" />
      </div>
    </Suspense>
  );
}
