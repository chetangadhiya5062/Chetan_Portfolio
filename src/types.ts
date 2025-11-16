
export interface Project {
  title: string;
  overview: {
    purpose: string;
    problem: string;
    goal: string;
  };
  methodology: {
    tech: string[];
    workflow: string[];
  };
  outcomes: {
    achievements: string[];
    innovations: string[];
  };
  visuals: {
    description: string;
    items: string[];
  };
  challenges: {
    challenge: string;
    solution: string;
  }[];
}

export interface Skill {
    name: string;
    description: string;
    proof: {
        type: 'code' | 'image' | 'text';
        language?: string;
        content: string;
        visual?: string;
    };
}
