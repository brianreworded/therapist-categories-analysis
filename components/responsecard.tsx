import { useState } from 'react';

interface ResponseCardProps {
  questionText: string;
  questionTitle: string;
  topic: string;
  category: string;
  answerText: string;
  therapistInfo: string;
  views: number;
}

export function ResponseCard({
  questionTitle,
  questionText,
  topic,
  category,
  answerText,
  therapistInfo,
  views,
}: ResponseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border p-4 rounded shadow-sm mb-4">
      <button onClick={() => setIsExpanded(!isExpanded)} className="font-bold text-lg">{questionTitle}</button>
      <h2 className="mt-2">{questionText}</h2>
      <div className="flex space-x-2 mt-2">
        <span className="bg-gray-200 px-2 py-1 rounded text-sm">{topic}</span>
        <span className="bg-blue-200 px-2 py-1 rounded text-sm">{category}</span>
      </div>

      {isExpanded && (
        <div className="mt-4">
          <p>{answerText}</p>
          <p className="text-sm text-gray-600 mt-2">Therapist Info: {therapistInfo}</p>
          <p className="text-sm text-gray-600 mt-2">Views: {views}</p>
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-500 mt-2"
      >
        {isExpanded ? 'Hide Response' : 'Show Response from Professional'}
      </button>
    </div>
  );
}