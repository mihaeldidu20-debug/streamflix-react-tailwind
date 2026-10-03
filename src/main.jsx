import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Bell,
  Check,
  ChevronRight,
  Info,
  Play,
  Plus,
  Search,
  Sparkles,
  User,
} from "lucide-react";
import "./index.css";

const movies = [
  { id: 1, title: "Shadow Protocol", genre: "Action", year: 2026, image: "/images/no 1.jpeg", badge: "98% Match" },
  { id: 2, title: "Last Horizon", genre: "Sci-Fi", year: 2026, image: "/images/no 2.jpeg", badge: "95% Match" },
  { id: 3, title: "Dark Pursuit", genre: "Thriller", year: 2025, image: "/images/no 3.jpeg", badge: "93% Match" },
  { id: 4, title: "Black Signal", genre: "Drama", year: 2026, image: "/images/no 4.jpeg", badge: "91% Match" },
  { id: 5, title: "Final Target", genre: "Action", year: 2025, image: "/images/no 5.jpeg", badge: "89% Match" },
];

const continueWatching = [
  { title: "Midnight Run", progress: 72, image: "/images/no 7.jpeg", episode: "S2 · E4" },
  { title: "Beyond Earth", progress: 43, image: "/images/no 8.jpeg", episode: "S1 · E7" },
  { title: "City of Shadows", progress: 81, image: "/images/no 9.jpeg", episode: "S3 · E2" },
];

function App() {
  const [genre, setGenre] = useState("All");
  const [search, setSearch] = useState("");
  const [myList, setMyList] = useState(false);
  const [playing, setPlaying] = useState(false);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesGenre = genre === "All" || movie.genre === genre;
      const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
      return matchesGenre && matchesSearch;
    });
  }, [genre, search]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <a href="#" className="flex items-center gap-2 font-black tracking-tight">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-red-500 to-fuchsia-600 shadow-lg shadow-red-500/20">
              S
            </span>
            <span className="hidden text-lg sm:block">NETTFLIX</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-white">Home</a>
            <a href="#trending" className="transition hover:text-white">Trending</a>
            <a href="#movies" className="transition hover:text-white">Movies</a>
            <a href="#continue" className="transition hover:text-white">Continue</a>
          </div>

          <div className="flex items-center gap-2">
            <label className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 md:flex">
              <Search size={16} className="text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search titles..."
                className="w-36 bg-transparent text-sm outline-none placeholder:text-slate-500"
              />
            </label>
            <button className="grid size-10 place-items-center rounded-xl bg-white/5 hover:bg-white/10">
              <Bell size={18} />
            </button>
            <button className="grid size-10 place-items-center rounded-xl bg-white/5 hover:bg-white/10">
              <User size={18} />
            </button>
          </div>
        </nav>
      </header>

      <section id="home" className="relative min-h-[760px] px-4 pt-36 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(244, 54, 20, 0.25),transparent_28%),radial-gradient(circle_at_30%_50%,rgba(239,68,68,.16),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-xs font-semibold text-fuchsia-200">
              <Sparkles size={14} />
              NEW ORIGINAL · 4K ULTRA HD
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-red-400">Featured tonight</p>
            <h1 className="text-5xl font-black tracking-[-0.04em] md:text-7xl">THE HOSTAGE</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
              A high-stakes cyber thriller where one encrypted signal could expose a global conspiracy.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="font-bold text-emerald-400">98% Match</span>
              <span>2026</span>
              <span>2h 14m</span>
              <span className="rounded border border-slate-600 px-2 py-0.5">16+</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setPlaying(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200"
              >
                <Play size={18} fill="currentColor" /> Watch Now
              </button>
              <button
                onClick={() => setMyList(!myList)}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-bold backdrop-blur transition hover:bg-white/15"
              >
                {myList ? <Check size={18} /> : <Plus size={18} />}
                {myList ? "Added" : "My List"}
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-8 rounded-full bg-fuchsia-500/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-fuchsia-950/30">
              <img src="/images/no10.jpeg" alt="The Hostage" className="aspect-[16/10] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 pt-24">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">THE HOSTAGE</p>
                    <p className="text-xs text-slate-400">NETTflix Original</p>
                  </div>
                  <button onClick={() => setPlaying(true)} className="grid size-12 place-items-center rounded-full bg-white text-slate-950">
                    <Play size={18} fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="trending" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-fuchsia-400">Your pulse</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Trending now</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", "Action", "Sci-Fi", "Drama", "Thriller"].map((item) => (
              <button
                key={item}
                onClick={() => setGenre(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  genre === item ? "bg-white text-slate-950" : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {filteredMovies.map((movie, index) => (
            <article key={movie.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-fuchsia-400/40 hover:shadow-2xl hover:shadow-fuchsia-950/30">
              <div className="relative aspect-[2/3] overflow-hidden">
                <img src={movie.image} alt={movie.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-slate-950/75 px-2 py-1 text-[10px] font-bold text-emerald-400 backdrop-blur">{movie.badge}</span>
                <span className="absolute bottom-3 left-3 text-4xl font-black text-white/30">{String(index + 1).padStart(2, "0")}</span>
                <button onClick={() => setPlaying(true)} className="absolute bottom-3 right-3 grid size-10 translate-y-3 place-items-center rounded-full bg-white text-slate-950 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <Play size={16} fill="currentColor" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-bold">{movie.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{movie.genre} · {movie.year}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="continue" className="border-y border-white/5 bg-white/[0.02] px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-400">Pick up where you left off</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Continue watching</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {continueWatching.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70">
                <div className="relative aspect-video overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 grid place-items-center bg-slate-950/0 transition group-hover:bg-slate-950/35">
                    <button onClick={() => setPlaying(true)} className="grid size-12 scale-75 place-items-center rounded-full bg-white text-slate-950 opacity-0 transition group-hover:scale-100 group-hover:opacity-100">
                      <Play size={18} fill="currentColor" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-bold">{item.title}</h3>
                    <span className="text-xs text-slate-500">{item.episode}</span>
                  </div>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-red-500 to-fuchsia-500" style={{ width: `${item.progress}%` }} />
                  </div>
                  <p className="mt-2 text-xs text-slate-500">{item.progress}% watched</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-4 py-12 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© 2026 StreamFlix. Built with React + Tailwind CSS.</p>
          <div className="flex gap-5">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#trending" className="hover:text-white">Browse</a>
            <a href="#continue" className="hover:text-white">My List</a>
          </div>
        </div>
      </footer>

      {playing && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-5 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900 p-7 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-400">Now playing</p>
                <h2 className="mt-1 text-2xl font-black">The Hostage</h2>
              </div>
              <button onClick={() => setPlaying(false)} className="rounded-xl bg-white/5 px-3 py-2 text-sm hover:bg-white/10">Close</button>
            </div>
            <div className="grid aspect-video place-items-center rounded-2xl bg-gradient-to-br from-red-950 via-slate-950 to-fuchsia-950">
              <div className="text-center">
                <Play size={34} className="mx-auto mb-3" fill="currentColor" />
                <p className="text-sm text-slate-400">Video player placeholder</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
