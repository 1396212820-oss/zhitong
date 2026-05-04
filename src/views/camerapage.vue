<template>
  <div class="min-h-screen bg-zinc-900 flex items-center justify-center">
    <div class="w-[414px] bg-black text-on-background font-body-md min-h-screen relative">
      <!-- Top Navigation -->
      <header class="fixed top-0 left-1/2 -translate-x-1/2 w-[414px] border-b-4 border-white bg-black flex justify-between items-center px-6 h-24 z-50">
        <div class="flex items-center">
          <h1 class="font-lexend font-black uppercase text-3xl text-white">智瞳</h1>
        </div>
        <div class="flex items-center">
          <span class="material-symbols-outlined text-white" style="font-size: 32px;">star</span>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-grow flex flex-col pt-24 pb-28">
        <!-- Camera Preview Area -->
        <section class="relative h-[50vh] w-full bg-surface-container-lowest overflow-hidden flex items-center justify-center">
          <div class="relative w-[85%] h-[75%] border-8 border-white rounded-[50%] flex items-center justify-center overflow-hidden" style="background-color: #0052CC; background-image: radial-gradient(circle, #ffffff20 1px, transparent 1px); background-size: 40px 40px;">
            <span class="text-white font-black text-8xl z-10 drop-shadow-2xl">点击</span>
          </div>
        </section>

        <!-- Operation Area -->
        <section class="w-full grid grid-cols-2 gap-4 p-4 border-t-4 border-white bg-black items-stretch">
          <button class="bg-surface-container-highest hover:bg-zinc-800 active:scale-95 transition-all flex flex-col items-center justify-center gap-2 rounded-xl border-4 border-white">
            <span class="material-symbols-outlined text-white" style="font-size: 48px; font-variation-settings: 'FILL' 1;">mic</span>
            <span class="text-white font-bold text-xl">语音输入</span>
          </button>
          <button class="bg-surface-container-highest hover:bg-zinc-800 active:scale-95 transition-all flex flex-col items-center justify-center gap-2 rounded-xl border-4 border-white">
            <span class="material-symbols-outlined text-white" style="font-size: 48px;">sync_alt</span>
            <span class="text-white font-bold text-xl">功能切换</span>
          </button>
        </section>
      </main>

      <!-- Bottom Navigation -->
      <nav class="fixed bottom-0 left-1/2 -translate-x-1/2 w-[414px] border-t-4 border-white bg-black flex justify-around items-stretch h-28 z-50">
        <router-link class="text-white flex flex-col items-center justify-center h-full flex-1 hover:bg-zinc-900 transition-colors" to="/user01">
          <span class="material-symbols-outlined">home</span>
          <span class="font-lexend font-bold text-lg uppercase">主页</span>
        </router-link>
        <router-link class="bg-[#0052CC] text-white flex flex-col items-center justify-center h-full flex-1 border-x-4 border-white active:bg-blue-800 transition-colors" to="/camerapage">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">photo_camera</span>
          <span class="font-lexend font-bold text-lg uppercase">相机</span>
        </router-link>
        <router-link class="text-white flex flex-col items-center justify-center h-full flex-1 hover:bg-zinc-900 transition-colors" to="/userpersonal">
          <span class="material-symbols-outlined">person</span>
          <span class="font-lexend font-bold text-lg uppercase">个人</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'camerapage'
}
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48;
  font-size: 48px;
}
</style>
