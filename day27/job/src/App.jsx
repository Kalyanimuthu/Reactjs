import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const JobDetails = lazy(() => import('./pages/JobDetails'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Applications = lazy(() => import('./pages/Applications'));
const Profile = lazy(() => import('./pages/Profile'));

const App = () => (
  <>
    <Navbar />
    <Breadcrumbs />
    <Suspense fallback={<p className="p-4">Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:jobId" element={<JobDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="applications" element={<Applications />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </>
);

export default App;
