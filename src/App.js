import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import { AuthProvider } from './AuthContext';
// import CombinedComponent from './components/CombinedComponent'; // Объединенный компонент
import Reactthreefiber from './Reactthreefiber';
import Component6 from './Component6';
import Carousel from './Carousel';
import Ques from './Ques';
import Heading from './Heading';
import Greetings from './Greetings';
import Footter from './Footter';
import Deadlines from './Deadlines';
import Tags from './Tags';
import Dddmarket from './Dddmarket';
import ServicesGrid from './ServicesGrid';
import Headingtg from './Headingtg';
import Button from './Button';
import ContactSection from './ContactSection';
import HeadingCnt from './HeadingCnt';
import Advantages from './Advantages';



function App() {
  return (
    <Router>
      <AuthProvider>
        <Header /> 
        <ServicesGrid />
        {/* <CombinedComponent /> Объединенный компонент */}
        {/* <Reactthreefiber />  */}
        <Greetings />
        <Advantages />
        {/* <Component6 /> */}
        {/* <Tags /> */}
        <Heading />
        <Carousel />
        <Ques />
        <Deadlines />
        <Button />
        <Headingtg />
        <Dddmarket />
        <Button />
        <HeadingCnt />
        <ContactSection />
      </AuthProvider>
      <Footter />
    </Router>
  );
}

export default App;

