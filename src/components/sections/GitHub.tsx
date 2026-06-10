'use client';

import React, { useEffect, useState } from 'react';
import { Github, Star, GitFork, BookOpen, UserCheck, Code } from 'lucide-react';

interface GitHubProfile {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  bio: string;
}

interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
}

export default function GitHub() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const profileRes = await fetch('https://api.github.com/users/Kushagriisharma');
        const reposRes = await fetch('https://api.github.com/users/Kushagriisharma/repos?sort=updated&per_page=3');

        if (profileRes.ok) {
          const profileData = await profileRes.json();
          setProfile({
            public_repos: profileData.public_repos,
            followers: profileData.followers,
            following: profileData.following,
            avatar_url: profileData.avatar_url,
            bio: profileData.bio,
          });
        }

        if (reposRes.ok) {
          const reposData = await reposRes.json();
          setRepos(
            reposData.map((repo: any) => ({
              name: repo.name,
              description: repo.description || 'No description available.',
              stargazers_count: repo.stargazers_count,
              forks_count: repo.forks_count,
              language: repo.language || 'Code',
              html_url: repo.html_url,
            }))
          );
        }
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        // Fallback mock values in case of API failure / rate limits
        setProfile({
          public_repos: 12,
          followers: 15,
          following: 20,
          avatar_url: 'https://github.com/Kushagriisharma.png',
          bio: 'B.Tech CSE student | Python | Deep Learning Enthusiast',
        });
        setRepos([
          {
            name: 'alertify',
            description: 'SOS emergency responsive web application featuring real-time GPS coordinates and alerts.',
            stargazers_count: 2,
            forks_count: 0,
            language: 'JavaScript',
            html_url: 'https://github.com/Kushagriisharma/alertify',
          },
          {
            name: 'Plant_disease_dectection_system',
            description: 'Deep Learning web tool deploying CNN structures for crop leaf health classification.',
            stargazers_count: 3,
            forks_count: 1,
            language: 'Python',
            html_url: 'https://github.com/Kushagriisharma/Plant_disease_dectection_system',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="py-20 px-4 max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center md:text-left space-y-3">
        <h2 className="text-3xl sm:text-5xl font-bold font-heading flex items-center justify-center md:justify-start gap-2">
          <Github className="w-8 h-8 text-primary-red" /> GitHub <span className="text-primary-red">Activity</span>
        </h2>
        <div className="w-12 h-1 bg-primary-red mx-auto md:mx-0 rounded" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Profile Stats Summary */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-6 space-y-6">
            <div className="flex items-center gap-4">
              {profile?.avatar_url && (
                <img 
                  src={profile.avatar_url} 
                  alt="Kushagri Sharma" 
                  className="w-16 h-16 rounded-full border-2 border-primary-red/30 shadow-md"
                />
              )}
              <div>
                <h3 className="text-lg font-bold text-foreground font-heading">Kushagri Sharma</h3>
                <a 
                  href="https://github.com/Kushagriisharma" 
                  target="_blank"
                  className="text-xs text-primary-red font-semibold hover:underline"
                >
                  @Kushagriisharma
                </a>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 italic">
              &quot;{profile?.bio || 'Building clean interfaces and training AI models.'}&quot;
            </p>

            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5 text-center">
              <div className="space-y-1">
                <div className="text-lg sm:text-xl font-bold text-foreground font-heading">
                  {loading ? '...' : profile?.public_repos}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider flex items-center justify-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> Repos
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-lg sm:text-xl font-bold text-foreground font-heading">
                  {loading ? '...' : profile?.followers}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider flex items-center justify-center gap-1">
                  <UserCheck className="w-3.5 h-3.5" /> Followers
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-lg sm:text-xl font-bold text-foreground font-heading">
                  {loading ? '...' : profile?.following}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider flex items-center justify-center gap-1">
                  <Code className="w-3.5 h-3.5" /> Following
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="https://github.com/Kushagriisharma" 
                target="_blank"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary-red/35 hover:bg-white/10 text-xs sm:text-sm font-semibold text-gray-300 hover:text-foreground cursor-pointer transition-all"
              >
                <Github className="w-4 h-4" /> Go to GitHub Profile
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Featured/Recent Repos */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-lg font-bold text-foreground font-heading text-center md:text-left">Recent Repositories</h3>
          
          {loading ? (
            <div className="glass-card p-12 text-center text-gray-400 text-sm">
              <span className="inline-block animate-spin mr-2"><Github className="w-4 h-4" /></span> Fetching repos...
            </div>
          ) : (
            <div className="space-y-4">
              {repos.map((repo, idx) => (
                <a
                  key={idx}
                  href={repo.html_url}
                  target="_blank"
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 glass-card hover:border-primary-red/35 transition-all duration-300 gap-4"
                >
                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-bold text-foreground font-heading group-hover:text-primary-red transition-colors duration-200">
                      {repo.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 max-w-md line-clamp-2">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-semibold text-gray-400">
                    <span className="flex items-center gap-1">
                      <Code className="w-3.5 h-3.5 text-primary-red" /> {repo.language}
                    </span>
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" /> {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-blue-400" /> {repo.forks_count}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
