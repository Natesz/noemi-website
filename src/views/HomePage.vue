<template>
  <NavBar />
  <main>
    <HeroSection />
    <AppointmentsSection />
    <AboutSection />
    <ServicesSection />
    <PricingSection />
    <TestimonialsSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import AppointmentsSection from '../components/AppointmentsSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import PricingSection from '../components/PricingSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>
