<script setup>
definePageMeta({
  layout: false
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <header class="sticky top-0 z-50 bg-white py-4 px-4 sm:px-6 lg:px-8 border-b">
      <nav class="flex justify-between items-center max-w-7xl mx-auto">
        <div class="flex items-center">
          <span class="text-rose-500 mr-2">❤</span>
          <span class="text-xl font-semibold">WeddingPlanner</span>
        </div>
        <div class="flex space-x-6">
          <a href="#hero" class="text-sm hover:text-rose-500">Home</a>
          <a href="#features" class="text-sm hover:text-rose-500">Features</a>
          <a href="#about" class="text-sm hover:text-rose-500">About</a>
          <a href="#contact" class="text-sm hover:text-rose-500">Contact</a>
          <NuxtLink to="/blog" class="text-sm hover:text-rose-500">Blog</NuxtLink>
        </div>
      </nav>
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
          <form class="flex gap-2 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email"
              class="flex-1 max-w-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <button 
              type="submit"
              class="px-6 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            >
              Notify Me
            </button>
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
          <h3 class="text-xl font-semibold mb-6">We're building the future of wedding planning technology.</h3>
          <div class="space-y-6 text-gray-600">
            <p>
              Our mission is to transform the wedding planning experience by providing couples and professionals 
              with powerful, intuitive tools that make the journey to the perfect wedding day seamless and joyful.
            </p>
            <p>
              Founded by a team of wedding industry experts and technology innovators, our platform combines 
              deep industry knowledge with cutting-edge technology to address the real challenges faced in wedding planning.
            </p>
            <p>
              We believe that planning a wedding should be as beautiful as the day itself. That's why we're creating 
              a comprehensive solution that handles the complexities while letting you focus on the moments that matter.
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
          <form class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input 
                type="text" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input 
                type="email" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
              <input 
                type="tel"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              <textarea
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
            <button
              type="submit"
              class="w-full py-3 bg-rose-500 text-white rounded-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>

    <footer class="bg-gray-50 border-t">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <!-- Company Info -->
          <div class="space-y-4">
            <div class="flex items-center">
              <span class="text-rose-500 mr-2">❤</span>
              <span class="text-xl font-semibold">WeddingPlanner</span>
            </div>
            <p class="text-sm text-gray-600">
              Your all-in-one wedding planning solution. Making your special day perfect.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Instagram</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Facebook</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Twitter</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Company Links -->
          <div>
            <h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">COMPANY</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-sm text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" class="text-sm text-gray-600 hover:text-gray-900">Contact</a></li>
              <li><a href="#" class="text-sm text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="#" class="text-sm text-gray-600 hover:text-gray-900">Blog</a></li>
            </ul>
          </div>

          <!-- Features Links -->
          <div>
            <h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">FEATURES</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-sm text-gray-600 hover:text-gray-900">For Couples</a></li>
              <li><a href="#" class="text-sm text-gray-600 hover:text-gray-900">For Planners</a></li>
              <li><a href="#" class="text-sm text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" class="text-sm text-gray-600 hover:text-gray-900">Testimonials</a></li>
            </ul>
          </div>

          <!-- Legal Links -->
          <div>
            <h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">LEGAL</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" class="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a></li>
              <li><a href="#" class="text-sm text-gray-600 hover:text-gray-900">Cookie Policy</a></li>
              <li><a href="#" class="text-sm text-gray-600 hover:text-gray-900">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-8 text-center">
          <p class="text-sm text-gray-600">&copy; 2025 WeddingPlanner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>