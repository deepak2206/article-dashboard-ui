import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import CustomTable from "./CustomTable";
import { useState } from "react";

const CustomDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6 flex-1 p-6">
      

    <div className="flex flex-col items-center gap-4 bg-white p-4 rounded shadow-sm">
<h1 className="text-2xl font-bold text-center">Articles</h1>
  <Tabs defaultValue="generated">
    <TabsList className="bg-gray-100 p-1 rounded">
      <TabsTrigger value="generated">Generated Articles</TabsTrigger>
      <TabsTrigger value="published">Published Articles</TabsTrigger>
      <TabsTrigger value="scheduled">Scheduled Articles</TabsTrigger>
      <TabsTrigger value="archived">Archived Articles</TabsTrigger>
    </TabsList>
  </Tabs>

  {/* Search input */}
  <Input
    placeholder="Search for Title & Keywords..."
    className="w-64 border border-gray-300 rounded px-3 py-2 shadow-sm text-center"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>


      <CustomTable searchTerm={searchTerm} />
    </div>
  );
};

export default CustomDashboard;
