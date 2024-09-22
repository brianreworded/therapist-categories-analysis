interface FiltersProps {
    topics: string[];
    categories: string[];
    selectedTopic: string;
    setSelectedTopic: (topic: string) => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
  }
  
  export function Filters({
    topics,
    categories,
    selectedTopic,
    setSelectedTopic,
    selectedCategory,
    setSelectedCategory,
  }: FiltersProps) {
    return (
      <div className="flex space-x-4">
        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          className="border p-2 rounded bg-blue-100"
        >
          <option value="">All Topics</option>
          {topics.filter((topic) => topic && topic.trim() !== "") .map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
  
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded bg-green-100"
        >
          <option value="">All Categories</option>
          {categories.filter((category) => category && category.trim() !== "") .map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  }
  