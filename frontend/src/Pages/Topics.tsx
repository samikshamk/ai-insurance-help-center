import { useState } from "react";
import Sidebar from "../components/UI/Sidebar/Sidebar";
import Drawer from "../components/UI/Sidebar/Drawer";
import MobileTopBar from "../components/UI/Sidebar/MobileTopBar";
import List from "../components/Layout/Topics/List";
import { topics } from "../data/Topics/index";
import { useParams, useNavigate } from 'react-router-dom';

type ParamTypes = {
  category?: string;
};

export default function TopicsPage() {
  let { category } = useParams<ParamTypes>();
  const navigate = useNavigate();

  const [activeTopic, setActiveTopic] = useState<string>(category || "claims");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const activeTopicObj = topics.find((t) => t.id === activeTopic);
  const activeLabel = activeTopicObj?.label ?? "";
  const articles = activeTopicObj?.subcategories ?? [];

  const handleSelect = (id: string) => {
    setActiveTopic(id);
    setDrawerOpen(false);
    navigate(`/topics/${id}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 relative">

      {/* Desktop sidebar */}
      <Sidebar
        topics={topics}
        activeTopic={activeTopic}
        onSelect={handleSelect}
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