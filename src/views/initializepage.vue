<template>
  <div class="min-h-screen bg-zinc-900 flex items-center justify-center">
    <div class="w-[414px] font-lexend min-h-screen relative">
      <header class="fixed top-0 left-1/2 -translate-x-1/2 w-[414px] h-24 bg-black flex justify-between items-center px-6 border-b-4 border-white z-50">
        <div class="flex items-center">
          <h1 class="text-white font-lexend font-bold text-3xl uppercase tracking-tighter">智瞳</h1>
        </div>
        <span class="material-symbols-outlined text-white" style="font-size: 32px;">star</span>
      </header>
      
      <main class="pt-24 pb-8 px-6 flex flex-col items-center w-full bg-white min-h-screen overflow-y-auto">
        <h2 class="font-headline-lg text-black text-center mb-8 px-4"></h2>
        
        <router-link to="/selectmodle" class="w-[300px] h-[300px] rounded-full deep-blue-btn flex items-center justify-center brutal-border active:scale-95 transition-transform">
          <span class="material-symbols-outlined text-white" style="font-size: 140px; font-variation-settings: 'FILL' 1;">touch_app</span>
        </router-link>
        
        <div class="w-[382px] h-32 bg-zinc-400 border-4 border-zinc-600 rounded-xl flex items-center justify-center mt-8">
          <p class="font-headline-md text-white tracking-widest text-center">震动反馈教学区</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'initializepage'
}
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48;
  font-size: 84px;
}

.brutal-border {
  border: 4px solid #000000;
}

.deep-blue-btn {
  background-color: #0052CC;
}
</style>
