import { useState } from "react";
import Sidebar from "../Components/UI/Sidebar/Sidebar";
import Drawer from "../Components/UI/Sidebar/Drawer";
import MobileTopBar from "../Components/UI/Sidebar/MobileTopBar";
import List from "../Components/Layout/Topics/List";
import { topics } from "../data/Topics/index";

export default function TopicsPage() {
  const [activeTopic, setActiveTopic] = useState<string>("claims");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const activeTopicObj = topics.find((t) => t.id === activeTopic);
  const activeLabel = activeTopicObj?.label ?? "";
  const articles = activeTopicObj?.subcategories ?? [];

  const handleSelect = (id: string) => {
    setActiveTopic(id);
    setDrawerOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 relative">

      {/* Desktop sidebar */}
      <Sidebar
        topics={topics}
        activeTopic={activeTopic}
        onSelect={setActiveTopic}
      />

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0">

        {/* Mobile top bar */}
        <MobileTopBar
          activeTopic={activeTopicObj}
          onOpenDrawer={() => setDrawerOpen(true)}
        />

        {/*Article list */}
         <List
          activeLabel={activeLabel}
          articles={articles}
        />

      </main>

      {/* Mobile drawer */}
      <Drawer
        topics={topics}
        activeTopic={activeTopic}
        isOpen={drawerOpen}
        onSelect={handleSelect}
        onClose={() => setDrawerOpen(false)}
      />

    </div>
  );
}