<template>
  <NavBar />
  <main>
    <HeroSection />
    <IntroSection />
    <AboutSection />
    <ServicesSection />
    <PricingSection />
    <BookingSection />
    <AppointmentsSection />
    <ContactSection />
  </main>
  <FooterSection wave-fill="#F5F7F9" />
  <CookieBanner />
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import IntroSection from '../components/IntroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import PricingSection from '../components/PricingSection.vue'
import BookingSection from '../components/BookingSection.vue'
import AppointmentsSection from '../components/AppointmentsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'
import CookieBanner from '../components/CookieBanner.vue'
</script>
