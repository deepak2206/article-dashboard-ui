import {
  ChevronDown,
  FileText,
  LayoutDashboard,
  Target,
  UploadCloud,
  Users,
  Book,
  Settings,
  Globe,
  Link,
  BarChart3,
  Zap,
  CreditCard,
  ShieldCheck,
  LifeBuoy,
  Bell,
  MessageCircle,
  User,
} from "lucide-react";

import { useState } from "react";

const Sidebar = () => {
  const [showArticles, setShowArticles] = useState(true);

  return (
    <aside className="w-64 min-h-screen bg-white border-r px-4 py-6 text-sm">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-center mb-6">abun</h1>

      {/* Domain selector */}
      <button className="flex items-center justify-between w-full px-3 py-2 rounded-full bg-gray-100 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500" />
          amazon.com
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {/* Articles dropdown */}
      <div className="mb-4">
        <button
          onClick={() => setShowArticles(!showArticles)}
          className="flex items-center justify-between w-full px-2 py-2 text-xs font-semibold text-gray-500 uppercase hover:text-gray-800"
        >
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-500" />
            Articles
          </div>
          <ChevronDown
            className={`w-4 h-4 transform transition-transform ${
              showArticles ? "rotate-180" : ""
            }`}
          />
        </button>

        {showArticles && (
          <ul className="mt-2 ml-6 space-y-2 font-medium">
            <li className="text-blue-600">Generated Articles</li>
            <li className="text-gray-700 hover:text-blue-600">Create Article</li>
            <li className="text-gray-700 hover:text-blue-600">Keyword Projects</li>
            <li className="text-gray-700 hover:text-blue-600">AI Keyword to Article</li>
            <li className="text-gray-700 hover:text-blue-600">Steal Competitor Keyword</li>
            <li className="text-gray-700 hover:text-blue-600">Import Keyword from GSC</li>
            <li className="text-gray-700 hover:text-blue-600">Manual Keyword to Article</li>
            <li className="text-gray-700 hover:text-blue-600">Bulk Keyword to Article</li>
            <li className="text-gray-700 hover:text-blue-600">Longtail Keyword to Article</li>
            <li className="text-gray-700 hover:text-blue-600">Article Settings</li>
          </ul>
        )}
      </div>

      {/* Static section */}
      <ul className="space-y-3 text-gray-700 font-medium text-sm mt-6 ml-1">
        <li className="flex items-center gap-2 hover:text-blue-600">
          <LayoutDashboard className="w-4 h-4 text-blue-500" />
          Auto Blog
        </li>
        <li className="flex items-center gap-2 hover:text-blue-600">
          <Link className="w-4 h-4 text-blue-500" />
          Internal Links
        </li>
        <li className="flex items-center gap-2 hover:text-blue-600">
          <Globe className="w-4 h-4 text-blue-500" />
          Free Backlinks
        </li>
        <li className="flex items-center gap-2 hover:text-blue-600">
          <Zap className="w-4 h-4 text-blue-500" />
          Integrations
        </li>
        <li className="flex items-center gap-2 hover:text-blue-600">
          <CreditCard className="w-4 h-4 text-blue-500" />
          Subscription
        </li>
        <li className="flex items-center gap-2 hover:text-blue-600">
          <ShieldCheck className="w-4 h-4 text-blue-500" />
          Affiliate Program
        </li>
        <li className="flex items-center gap-2 hover:text-blue-600">
          <LifeBuoy className="w-4 h-4 text-blue-500" />
          Help Center
        </li>
        <li className="flex items-center gap-2 hover:text-blue-600">
          <Bell className="w-4 h-4 text-blue-500" />
          Updates
        </li>
        <li className="flex items-center gap-2 hover:text-blue-600">
          <MessageCircle className="w-4 h-4 text-blue-500" />
          Live Chat Support
        </li>
        <li className="flex items-center gap-2 hover:text-blue-600">
          <User className="w-4 h-4 text-blue-500" />
          Profile
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
