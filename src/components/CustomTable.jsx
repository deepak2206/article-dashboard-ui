import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const dummyData = [
  {
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    words: 4575,
    createdOn: "20 hours ago",
  },
  {
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [2240000]",
    words: 3480,
    createdOn: "21 hours ago",
  },
  {
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [2240000]",
    words: 2676,
    createdOn: "a day ago",
  },
  {
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant [2900]",
    words: 2408,
    createdOn: "1 Oct, 24",
  },
  {
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services [390]",
    words: 1793,
    createdOn: "---",
  },
  {
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods [3600]",
    words: 2647,
    createdOn: "---",
  },
  {
    title: "Backlinks 101: What are backlinks and why they’re important",
    keyword: "backlinks [8100]",
    words: 2261,
    createdOn: "---",
  },
  {
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software [880]",
    words: 1543,
    createdOn: "---",
  },
  {
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [390]",
    words: 1974,
    createdOn: "---",
  },
];

const CustomTable = ({ searchTerm }) => {
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");

  const toggleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const filteredData = dummyData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];

    if (typeof aVal === "number") {
      return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
    } else {
      return sortOrder === "asc"
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    }
  });

  return (
    <div className="w-full rounded-md border bg-white shadow-sm overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox />
            </TableHead>
            <TableHead onClick={() => toggleSort("title")} className="font-bold text-sm cursor-pointer">
              Article Title {sortBy === "title" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </TableHead>
            <TableHead onClick={() => toggleSort("keyword")} className="font-bold text-sm cursor-pointer">
              Keyword [Traffic] {sortBy === "keyword" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </TableHead>
            <TableHead onClick={() => toggleSort("words")} className="font-bold text-sm cursor-pointer">
              Words {sortBy === "words" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </TableHead>
            <TableHead className="font-bold text-sm cursor-pointer">Created On</TableHead>
            <TableHead className="font-bold text-sm cursor-pointer">Action</TableHead>
            <TableHead className="font-bold text-sm cursor-pointer">Publish</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((item, idx) => (
            <TableRow key={idx} className="hover:bg-gray-50 text-sm px-4 py-3">
              <TableCell><Checkbox /></TableCell>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.keyword}</TableCell>
              <TableCell>{item.words}</TableCell>
              <TableCell>{item.createdOn}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">View</Button>
              </TableCell>
              <TableCell><span className="text-lg"><span className="flex items-center gap-1">
                <img src="src/assets/wordpress-icon.svg.png" alt="wp" className="w-4 h-4" />
                <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.355a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" />
                </svg>
                </span></span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center p-4 text-sm text-gray-500 border-t">
  <div>
    Total {sortedData.length} Article Titles | Show
    <select className="ml-2 border rounded px-1">
      <option>10</option>
      <option>25</option>
    </select> entries per page
  </div>
  <div>
    Page 1 / 1
  </div>
</div>

    </div>
  );
};

export default CustomTable;
