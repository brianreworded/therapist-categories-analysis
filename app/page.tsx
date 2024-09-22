"use client";

import { useState } from 'react';
import useData from '@/process_data';
import { Filters } from '@/components/filters';
import { ResponseCard } from '@/components/responsecard';

export default function Home() {
  const data = useData();
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredData = data
    .filter((item) => (selectedTopic ? item.topic === selectedTopic : true))
    .filter((item) => (selectedCategory ? item.category === selectedCategory : true))
    .sort((a, b) => b.views - a.views)
    .slice(0, 100);

  const uniqueTopics = [...new Set(data.map((item) => item.topic))];
  const uniqueCategories = [...new Set(data.map((item) => item.category))];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl my-2">Therapist Methods Prototype</h1>
      <Filters
        topics={uniqueTopics}
        categories={uniqueCategories}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <p className='my-2'>For simplicity sake, results are limited to up to 100 responses to view at a time. Each response from a professional is its own different card. Responses are sorted by number of views descending from a deprecated site called Counsel-chat.</p>

      <div className="mt-6">
        {filteredData && filteredData.length > 0 ? filteredData.map((item, index) => (
          <ResponseCard
            key={index}
            questionText={item.questionText}
            questionTitle={item.questionTitle}
            topic={item.topic}
            category={item.category}
            answerText={item.answerText}
            therapistInfo={item.therapistInfo}
            views={item.views}
          />
        )) : <p className='mt-4'>No data was found. Please try a different filter combination.</p>}
      </div>
    </div>
  );
}