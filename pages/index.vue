<script setup>
definePageMeta({
  layout: false
})

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Early adopter form state
const earlyAdopterForm = reactive({
	email: '',
	isSubmitting: false,
	isSuccess: false,
	message: '',
	error: null
})

// Early adopter form submission handler
async function submitEarlyAdopterForm() {
	try {
		earlyAdopterForm.isSubmitting = true
		earlyAdopterForm.error = null
		earlyAdopterForm.message = ''
		
		// Submit the email to the API
		const response = await $fetch('/api/early-adopters', {
			method: 'POST',
			body: {
				email: earlyAdopterForm.email
			}
		})
		
		// Reset form on success
		earlyAdopterForm.email = ''
		earlyAdopterForm.isSuccess = true
		earlyAdopterForm.message = response.message || 'Thank you for joining our early access list!'
		
		// Reset success message after 5 seconds
		setTimeout(() => {
			earlyAdopterForm.isSuccess = false
			earlyAdopterForm.message = ''
		}, 5000)
	} catch (error) {
		console.error('Error submitting early adopter form:', error)
		earlyAdopterForm.error = error.message || 'Failed to submit the form. Please try again.'
	} finally {
		earlyAdopterForm.isSubmitting = false
	}
}

// Contact form state
const contactForm = reactive({
	name: '',
	email: '',
	message: '',
	isSubmitting: false,
	isSuccess: false,
	error: null
})

// Contact form submission handler
async function submitContactForm() {
	try {
		contactForm.isSubmitting = true
		contactForm.error = null
		
		// Submit the form data to the API
		const response = await $fetch('/api/contact-submissions', {
			method: 'POST',
			body: {
				name: contactForm.name,
				email: contactForm.email,
				message: contactForm.message
			}
		})
		
		// Reset form on success
		contactForm.name = ''
		contactForm.email = ''
		contactForm.message = ''
		contactForm.isSuccess = true
		
		// Reset success message after 5 seconds
		setTimeout(() => {
			contactForm.isSuccess = false
		}, 5000)
	} catch (error) {
		console.error('Error submitting contact form:', error)
		contactForm.error = error.message || 'Failed to submit the form. Please try again.'
	} finally {
		contactForm.isSubmitting = false
	}
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <header class="sticky top-0 z-50 bg-white py-4 px-4 sm:px-6 lg:px-8 border-b">
      <nav class="flex justify-between items-center max-w-7xl mx-auto">
        <div class="flex items-center">
          <span class="text-rose-500 mr-2">❤</span>
          <span class="text-xl font-semibold">Knots & Vows</span>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-6">
          <a href="#hero" class="text-sm hover:text-rose-500">Home</a>
          <a href="#features" class="text-sm hover:text-rose-500">Features</a>
          <a href="#about" class="text-sm hover:text-rose-500">About</a>
          <a href="#contact" class="text-sm hover:text-rose-500">Contact</a>
          <NuxtLink to="/blog" class="text-sm hover:text-rose-500">Blog</NuxtLink>
        </div>
        
        <!-- Mobile Navigation Toggle -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-rose-500 focus:outline-none">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </nav>
      
      <!-- Mobile Navigation Dropdown -->
      <div v-if="isMenuOpen" class="md:hidden py-4 px-4 bg-white border-t">
        <div class="flex flex-col space-y-4">
          <a href="#hero" class="text-sm hover:text-rose-500" @click="toggleMenu">Home</a>
          <a href="#features" class="text-sm hover:text-rose-500" @click="toggleMenu">Features</a>
          <a href="#about" class="text-sm hover:text-rose-500" @click="toggleMenu">About</a>
          <a href="#contact" class="text-sm hover:text-rose-500" @click="toggleMenu">Contact</a>
          <NuxtLink to="/blog" class="text-sm hover:text-rose-500" @click="toggleMenu">Blog</NuxtLink>
        </div>
      </div>
    </header>

    <main>
      <!-- Hero Section -->
      <section id="hero" class="text-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50">
        <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl max-w-4xl mx-auto">
          Your Perfect Wedding <span class="text-rose-500">Planned Perfectly</span>
        </h1>
        <p class="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          The all-in-one wedding planning solution that brings your dream wedding to life. 
          Seamlessly manage guests, budgets, timelines, and more.
        </p>
        <div class="mt-10 max-w-xl mx-auto">
          <p class="text-sm text-gray-600 mb-4">Be the first to know when we launch and get exclusive early access.</p>
          <form class="flex flex-col gap-2 items-center" @submit.prevent="submitEarlyAdopterForm">
            <div class="w-full flex gap-2 justify-center">
              <input 
                v-model="earlyAdopterForm.email"
                type="email" 
                required
                placeholder="Enter your email"
                class="flex-1 max-w-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                :disabled="earlyAdopterForm.isSubmitting"
              />
              <button 
                type="submit"
                class="px-6 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                :disabled="earlyAdopterForm.isSubmitting"
              >
                <span v-if="earlyAdopterForm.isSubmitting">Sending...</span>
                <span v-else>Notify Me</span>
              </button>
            </div>
            <div v-if="earlyAdopterForm.isSuccess" class="p-2 text-sm text-green-600 mt-2">
              {{ earlyAdopterForm.message }}
            </div>
            <div v-if="earlyAdopterForm.error" class="p-2 text-sm text-red-600 mt-2">
              {{ earlyAdopterForm.error }}
            </div>
          </form>
        </div>
        <div class="mt-16">
          <CountdownLaunch />
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-4">Everything You Need</h2>
          <p class="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Our comprehensive suite of tools makes wedding planning stress-free for couples and professionals alike.
          </p>
          
          <!-- For Couples -->
          <div class="mb-16">
            <h3 class="text-2xl font-semibold text-rose-500 text-center mb-8">For Couples</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div class="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div class="text-rose-500 text-3xl mb-4">👥</div>
                <h4 class="text-xl font-semibold mb-2">Guest Management</h4>
                <p class="text-gray-600">Easily manage your guest list, RSVPs, and seating arrangements in one place.</p>
              </div>
              <div class="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div class="text-rose-500 text-3xl mb-4">📅</div>
                <h4 class="text-xl font-semibold mb-2">Event Planning</h4>
                <p class="text-gray-600">Plan multiple events from engagement parties to the big day with custom timelines.</p>
              </div>
              <div class="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div class="text-rose-500 text-3xl mb-4">⏰</div>
                <h4 class="text-xl font-semibold mb-2">Timeline Tools</h4>
                <p class="text-gray-600">Stay on track with customizable timelines and automated reminders.</p>
              </div>
              <div class="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div class="text-rose-500 text-3xl mb-4">💰</div>
                <h4 class="text-xl font-semibold mb-2">Budget Tracking</h4>
                <p class="text-gray-600">Set budgets, track expenses, and manage payments to vendors.</p>
              </div>
            </div>
          </div>

          <!-- For Planners -->
          <div>
            <h3 class="text-2xl font-semibold text-rose-500 text-center mb-8">For Planners</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div class="text-rose-500 text-3xl mb-4">👥</div>
                <h4 class="text-xl font-semibold mb-2">Team Management</h4>
                <p class="text-gray-600">Coordinate with your team members and assign tasks efficiently.</p>
              </div>
              <div class="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div class="text-rose-500 text-3xl mb-4">📊</div>
                <h4 class="text-xl font-semibold mb-2">Multi-wedding Dashboard</h4>
                <p class="text-gray-600">Manage multiple weddings simultaneously with our intuitive dashboard.</p>
              </div>
              <div class="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div class="text-rose-500 text-3xl mb-4">✓</div>
                <h4 class="text-xl font-semibold mb-2">Task Assignment</h4>
                <p class="text-gray-600">Delegate tasks to team members and track progress in real-time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Vision Section -->
      <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 bg-rose-50">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">About Our Vision</h2>
          <h3 class="text-xl text-rose-500 font-semibold mb-6">Perfect Wedding, Planned Perfectly!</h3>
          <div class="space-y-6 text-gray-600">
            <p>
				We know wedding planning can feel overwhelming, but we believe that planning a wedding should be as beautiful as the day itself. We understand the complexities, from intimate ceremonies to grand, multi-day events, and the desire to savor every moment.
            </p>
            <p>
				That's why we're building an empathetic, humanized platform to seamlessly manage every detail. Our mission is to transform your wedding planning into a beautiful and memorable experience. This comprehensive solution handles the intricacies, letting you focus on the moments that truly matter.
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-4">Get In Touch</h2>
          <p class="text-center text-gray-600 mb-8">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
          <form class="space-y-6" @submit.prevent="submitContactForm">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input 
                v-model="contactForm.name"
                type="text" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input 
                v-model="contactForm.email"
                type="email" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              <textarea
                v-model="contactForm.message"
                required
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              ></textarea>
            </div>
            <div class="flex items-center">
              <input 
                type="checkbox"
                id="recaptcha"
                class="h-4 w-4 text-rose-500 focus:ring-rose-500 border-gray-300 rounded"
              />
              <label for="recaptcha" class="ml-2 block text-sm text-gray-600">
                I'm not a robot (reCAPTCHA)
              </label>
            </div>
            <div v-if="contactForm.isSuccess" class="p-4 bg-green-50 text-green-700 rounded-md mb-4">
              Thank you! Your message has been sent successfully.
            </div>
            <div v-if="contactForm.error" class="p-4 bg-red-50 text-red-700 rounded-md mb-4">
              {{ contactForm.error }}
            </div>
            <button
              type="submit"
              class="w-full py-3 bg-rose-500 text-white rounded-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
              :disabled="contactForm.isSubmitting"
            >
              <span v-if="contactForm.isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
            </button>
          </form>
        </div>
      </section>
    </main>

    <footer class="bg-gray-50 border-t">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-sm text-gray-600">&copy; 2025 Knots & Vows. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>