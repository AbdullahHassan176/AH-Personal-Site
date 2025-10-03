import { Project, Experience, Writing } from './data';

export const projectCountByCategory = (projects: Project[]) =>
  Object.entries(projects.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc;
  }, {} as Record<string, number>)).map(([category, count]) => ({ category, count }));

export const techFrequency = (projects: Project[]) => {
  const counts: Record<string, number> = {};
  for (const p of projects) for (const t of (p.stack ?? [])) counts[t] = (counts[t] ?? 0) + 1;
  return Object.entries(counts).map(([tech, count]) => ({ tech, count }));
};

export const projectsByYear = (projects: Project[]) =>
  Object.entries(projects.reduce((acc, p) => {
    acc[p.year] = (acc[p.year] ?? 0) + 1; return acc;
  }, {} as Record<number, number>)).map(([year, count]) => ({ year: Number(year), count }));

export const tenureByCompany = (exp: Experience[]) => {
  const ms = (d: string) => new Date(d).getTime();
  return exp.map(e => {
    const end = e.end ? ms(e.end) : Date.now();
    const months = Math.max(1, Math.round((end - ms(e.start)) / (1000*60*60*24*30)));
    return { company: e.company, months };
  });
};

export const writingCadence = (writing: Writing[]) => {
  const byMonth: Record<string, number> = {};
  for (const w of writing) {
    const d = new Date(w.date); 
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`;
    byMonth[key] = (byMonth[key] ?? 0) + 1;
  }
  return Object.entries(byMonth).map(([month, count]) => ({ month, count }));
};

export const experienceImpact = (exp: Experience[]) => {
  return exp.map(e => ({
    company: e.company,
    title: e.title,
    impact: e.highlights.length,
    techCount: e.tech.length,
    duration: e.end ? 
      Math.round((new Date(e.end).getTime() - new Date(e.start).getTime()) / (1000*60*60*24*30)) :
      Math.round((Date.now() - new Date(e.start).getTime()) / (1000*60*60*24*30))
  }));
};

export const projectVelocity = (projects: Project[]) => {
  const byYear = projects.reduce((acc, p) => {
    if (!acc[p.year]) acc[p.year] = [];
    acc[p.year].push(p);
    return acc;
  }, {} as Record<number, Project[]>);
  
  return Object.entries(byYear).map(([year, projs]) => ({
    year: Number(year),
    count: projs.length,
    categories: Array.from(new Set(projs.map(p => p.category))).length,
    avgOutcomes: projs.reduce((sum, p) => sum + p.outcomes.length, 0) / projs.length
  }));
};
