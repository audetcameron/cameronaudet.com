   <template>
            <label class="swap swap-rotate mr-2">
              <input type="checkbox" @change="toggleTheme" :checked="isDarkTheme" />
              <div class="swap-on">🌙</div>
              <div class="swap-off">☀️</div>
            </label>
    </template>

    <script setup>
    import { ref, watch, onMounted } from 'vue';

    const currentTheme = ref('light'); // Initial theme

    // Check if the current theme is dark
    const isDarkTheme = ref(false);

    // Function to toggle the theme
    const toggleTheme = () => {
      currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark';
      isDarkTheme.value = currentTheme.value === 'dark';
    };

    // Watch for changes in currentTheme and update the HTML data-theme attribute
    watch(currentTheme, (newTheme) => {
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme); // Persist theme preference
    });

    // On component mount, retrieve theme from localStorage or set default
    onMounted(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        currentTheme.value = savedTheme;
        isDarkTheme.value = savedTheme === 'dark';
      } else {
        // Optional: Set initial theme based on user's system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          currentTheme.value = 'dark';
          isDarkTheme.value = true;
        }
      }
      document.documentElement.setAttribute('data-theme', currentTheme.value);
    });
    </script>