import { Route, Routes, useLocation } from 'react-router-dom'
import NavbarForDashBord from '../component/NavbarForDashBord'
import DashbordForCommunity from './community-page/DashbordForCommunity'
import CircularProgress from '@mui/material/CircularProgress';
import { Suspense } from 'react'
import EventPage from './comman-page/EventPage';
import HackethonPage from './comman-page/HackethonPage';
import JobPage from './comman-page/JobPage';
import HomaPageForCommunity from './comman-page/HomaPageForCommunity';


export default function DashBord() {

  let permission = useLocation().pathname.startsWith('/home') ||
    useLocation().pathname.startsWith('/event') ||
    useLocation().pathname.startsWith('/job')
    || useLocation().pathname.startsWith('/hackathon')
    || useLocation().pathname.startsWith('/community');


  if (!permission) {
    return null;
  }
  return (
    <div className=' h-screen flex md:flex-row flex-col w-full'>
      <NavbarForDashBord />
      <div className=' md:w-11/12 w-full overflow-auto'>
        <Routes>
          <Route
            path='/home'
            element={
              <Suspense fallback={<CircularProgress />}>
                <HomaPageForCommunity />
              </Suspense>
            }
          />
          <Route
            path='/event'
            element={
              <Suspense fallback={<CircularProgress />}>
                <EventPage />
              </Suspense>
            }
          />
          <Route
            path='/job'
            element={
              <Suspense fallback={<CircularProgress />}>
                <JobPage />
              </Suspense>
            }
          />
          <Route
            path='/hackathon'
            element={
              <Suspense fallback={<CircularProgress />}>
                <HackethonPage />
              </Suspense>
            }
          />
         
        </Routes>

        <DashbordForCommunity />


      </div>
    </div>
  )
}
