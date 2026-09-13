import React, { useState, useEffect, Suspense, lazy } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { Technology } from './Types/technologyTypes';
import Nav from './components/Nav';
import Banner from './components/Banner';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';

const TechCard = lazy(() => import('./components/Technology/TechCard'));

 const App: React.FC = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load technologies');
        }
        return res.json() as Promise<Technology[]>;
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to load technology data.');
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech: Technology): void => {
    const isDuplicate = stack.some((item) => item.id === tech.id);
    if (isDuplicate) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: 'top-right',
        autoClose: 2500,
      });
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const handleRemoveFromStack = (id: string, name: string): void => {
    setStack((prev) => prev.filter((item) => item.id !== id));
    toast.info(`Removed ${name} from stack.`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const handleClearStack = (): void => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error('All technologies cleared from stack.', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <ToastContainer />
      <Nav />
      <Banner />

      <main id="technologies" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Explore the <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Select foundational tools for your frontend, backend, database, and operations.
            </p>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-gray-100 border border-gray-200 text-gray-600 rounded-full w-fit">
            Showing {technologies.length} Tools
          </span>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="w-10 h-10 border-4 border-orange-200 border-t-brand-orange rounded-full animate-spin mb-4"></div>
            <p className="text-sm text-gray-500 font-medium">Loading technologies...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <Suspense fallback={<div className="text-sm text-gray-500 py-8">Loading ...</div>}>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {technologies.map((tech) => {
                    const isAdded = stack.some((item) => item.id === tech.id);
                    return (
                      <TechCard
                        key={tech.id}
                        tech={tech}
                        onAddToStack={handleAddToStack}
                        isAdded={isAdded}
                      />
                    );
                  })}
                </div>
              </Suspense>
            </div>
            <div className="lg:col-span-4">
              <StackSidebar
                stack={stack}
                onRemoveFromStack={handleRemoveFromStack}
                onClearStack={handleClearStack}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;