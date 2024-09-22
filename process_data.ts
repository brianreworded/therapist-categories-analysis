import Papa from 'papaparse';
import { useState, useEffect } from 'react';

type QuestionData = {
  questionTitle: string;
  questionText: string;
  topic: string;
  therapistInfo: string;
  answerText: string;
  category: string;
  views: number;
};

export default function useData(): QuestionData[] {
  const [data, setData] = useState<QuestionData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/new_therapist_responses.csv');
      console.log(response)
      const text = await response.text();
      const results = Papa.parse<QuestionData>(text, { header: true });
      setData(results.data);
    };

    fetchData();
  }, []);

  return data;
}
