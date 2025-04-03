<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope ,faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'; 

const logoWhite = '/shreeom_website/Images/logos/logo-white.png';
</script>


<template>
 <footer class="bg-[#02261D] pt-[64px]">
        <div class="container">
            <div class="px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6">
                <div class="xl:col-span-4">
                    <img :src="logoWhite" alt="Shreeom Logo" class="mb-[25px]" />
                    <p class="mb-[30px] text-[#B5B5B5]">
                        shreeomsoft is a providing top-notch website and mobile app services. The company was founded in 2023 and headquartered in Surat, India.
                    </p>
                    <div class="flex gap-4">
                        <a href="#" class="border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center">
                            <FontAwesomeIcon :icon="faLinkedinIn" class="text-white h-[15px] w-[15px]" />
                        </a>
                        <a href="#" class="border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center">
                            <FontAwesomeIcon :icon="faFacebookF" class="text-white h-[15px] w-[15px]" />
                        </a> 
                        <a href="#" class="border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center">
                            <FontAwesomeIcon :icon="faInstagram" class="text-white h-[15px] w-[15px]" />
                        </a>
                    </div>  
                </div>

                <div class="xl:col-span-2">
                    <h3 class="font-medium text-white mb-6 text-xl">Company</h3>
                    <ul class="space-y-4">
                        <li><NuxtLink to="/" class="text-[#B5B5B5]">About Us </NuxtLink></li>
                        <li><NuxtLink to="/services" class="text-[#B5B5B5]">Services</NuxtLink></li>
                        <li><NuxtLink to="/Technology" class="text-[#B5B5B5]">Technology</NuxtLink></li>
                        <li><NuxtLink to="/Projects" class="text-[#B5B5B5]">Portfolio</NuxtLink></li>
                        <li><NuxtLink to="/Career" class="text-[#B5B5B5]">Career</NuxtLink></li>
                    </ul>
                </div>

                <div class="xl:col-span-3">
                    <h3 class="font-medium text-white mb-6 text-xl">Services</h3>
                    <ul class="space-y-4">
                        <li><NuxtLink to="/services" class="text-[#B5B5B5]">UI/UX Designing</NuxtLink></li>
                        <li><NuxtLink to="/services" class="text-[#B5B5B5]">Web Design & Development</NuxtLink></li>
                        <li><NuxtLink to="/services" class="text-[#B5B5B5]">Digital Marketing</NuxtLink></li>
                        <li><NuxtLink to="/services" class="text-[#B5B5B5]">Maintenance & Support</NuxtLink></li>
                    </ul>
                </div>

                <div class="xl:col-span-3">
                    <h3 class="font-medium text-white mb-6 text-xl">Contact us</h3>
                    <ul class="space-y-3 text-sm">
                        <li class="flex items-center gap-3">
                            <span class="border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center">
                                <FontAwesomeIcon :icon="faEnvelope" class="text-white h-[15px] w-[15px]" /> 
                            </span>
                            <a href="mailto:info@shreeomsoft.com" class="text-[#B5B5B5]">info@shreeomsoft.com</a>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center">
                                <FontAwesomeIcon :icon="faPhone" class="text-white h-[15px] w-[15px]" />
                            </span>
                            <a href="tel:+919586773991" class="text-[#B5B5B5]">+91 9586773991</a>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="border rounded-[3px] border-[#295048] h-[35px] min-w-[35px] flex items-center justify-center"> 
                                <FontAwesomeIcon :icon="faLocationDot" class="text-white h-[15px] w-[15px]" />
                            </span>
                            <p class="text-[#B5B5B5]"> 
                                214, Radhika Optima, Yamuna Chowk, Satellite Rd, Mota Varachha, Surat, Gujarat 394101
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="md:flex max-md:text-center justify-between gap-3 flex-wrap mt-14 border-t border-[#B8E0D3] w-full py-9">
                <p class="text-sm text-white">© 2025. Shreeomsoft All Rights Reserved.</p>
                <ul class="md:flex max-md:mt-4 items-center gap-12 text-white">
                    <li><NuxtLink to="/" class="text-sm">Terms of Service</NuxtLink></li>
                    <li><NuxtLink to="/" class="text-sm">Privacy Policy</NuxtLink></li>
                    <li><NuxtLink to="/" class="text-sm">Cookie Policy</NuxtLink></li>
                </ul>
            </div>
        </div>
    </footer>
</template>