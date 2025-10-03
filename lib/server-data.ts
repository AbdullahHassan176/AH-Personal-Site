import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const dataDir = path.join(process.cwd(), "data");

export function readJSON<T=any>(file: string): T {
  return JSON.parse(fs.readFileSync(path.join(dataDir, file), "utf-8"));
}

export function readYAML<T=any>(file: string): T {
  return yaml.load(fs.readFileSync(path.join(dataDir, file), "utf-8")) as T;
}

// Type definitions
export interface Profile {
  fullName: string;
  headline: string;
  location: string;
  summary: string;
  currentFocus: string[];
  education: Array<{
    degree: string;
    institution: string;
    focus: string;
  }>;
  emails: string[];
  phones: string[];
  links: {
    website: string;
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface Experience {
  company: string;
  title: string;
  start: string;
  end: string | null;
  location: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  name: string;
  year: number;
  category: string;
  summary: string;
  outcomes: string[];
  stack: string[];
  links: {
    site?: string;
    repo?: string;
    paper?: string;
  };
}

export interface Writing {
  date: string;
  title: string;
  topics: string[];
  link: string;
}

export interface Contact {
  email: string;
  phone: string;
  calendar: string;
  social: Array<{
    platform: string;
    url: string;
  }>;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  data_ml: string[];
  cloud_devops: string[];
  business: string[];
}

export interface Images {
  profile: {
    main: string;
    alt: string;
  };
  gallery: Array<{
    src: string;
    alt: string;
    category: string;
  }>;
}

