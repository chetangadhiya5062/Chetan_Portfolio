
import React from 'react';
import Section from './Section';
import type { Skill } from '../types';

const skillsData: Skill[] = [
    {
        name: 'Advanced State Management with Redux Toolkit',
        description: 'Implementing scalable, maintainable, and predictable state containers for complex React applications using modern Redux practices.',
        proof: {
            type: 'code',
            language: 'typescript',
            content: `import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState { value: number; }
const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;`,
            visual: 'A diagram showing Redux data flow in a React application.'
        }
    },
    {
        name: 'Efficient Data Fetching with React Query',
        description: 'Leveraging React Query to manage server state, including caching, background refetching, and stale-while-revalidate strategies, simplifying data fetching logic.',
        proof: {
            type: 'code',
            language: 'typescript',
            content: `import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Post { id: number; title: string; }

const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get('https://api.example.com/posts');
  return data;
};

function Posts() {
  const { data, error, isLoading } = useQuery({ 
    queryKey: ['posts'], 
    queryFn: fetchPosts 
  });

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <ul>
      {data?.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}`,
            visual: 'Screenshot of a web app UI showing data successfully fetched and displayed from an API.'
        }
    },
    {
        name: 'CI/CD with GitHub Actions',
        description: 'Automating build, test, and deployment pipelines to ensure code quality and streamline the release process directly from the version control system.',
        proof: {
            type: 'code',
            language: 'yaml',
            content: `name: React CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18.x'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
    - name: Deploy to Hosting
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: \${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build`,
             visual: 'Screenshot of a GitHub Actions workflow successfully completing all steps.'
        }
    },
    {
        name: 'Database Query Optimization',
        description: 'Analyzing and improving the performance of SQL queries through indexing, query restructuring, and execution plan analysis to handle large datasets efficiently.',
        proof: {
            type: 'code',
            language: 'sql',
            content: `
-- Inefficient Query (Full Table Scan)
SELECT * FROM users WHERE last_name = 'Smith';

-- Optimized Query (Uses Index)
-- Step 1: Create an index on the 'last_name' column
CREATE INDEX idx_users_last_name ON users(last_name);

-- Step 2: The same query now runs much faster
SELECT user_id, first_name, email FROM users 
WHERE last_name = 'Smith';
-- Selecting specific columns is also more efficient.`,
            visual: 'A comparison graph showing query execution time before and after adding an index.'
        }
    }
];

const Skills: React.FC = () => {
    return (
        <Section
            id="skills"
            title="Advanced Skill Development & Mastery"
            subtitle="Deep dives into key technologies, demonstrating proficiency through practical examples and code."
        >
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {skillsData.map((skill, index) => (
                    <div key={index} className="bg-white dark:bg-text-primary rounded-2xl shadow-soft p-6">
                        <h3 className="text-xl font-bold font-heading text-secondary dark:text-background mb-2">{skill.name}</h3>
                        <p className="text-text-primary/80 dark:text-gray-400 mb-4 text-sm">{skill.description}</p>
                        <div className="bg-secondary/90 dark:bg-secondary text-white rounded-xl p-4 font-mono text-xs overflow-x-auto">
                            <pre><code className={`language-${skill.proof.language}`}>{skill.proof.content}</code></pre>
                        </div>
                        <div className="mt-4 text-center">
                            <div className="inline-block bg-gray-100 dark:bg-secondary text-gray-600 dark:text-gray-300 text-xs italic px-3 py-1 rounded-full">
                                {skill.proof.visual}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;