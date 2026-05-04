<template>
  <div class="min-h-screen bg-zinc-900 flex items-center justify-center">
    <div class="w-[414px] bg-black text-white min-h-screen relative">
      <header class="fixed top-0 left-1/2 -translate-x-1/2 w-[414px] border-b-4 border-white bg-black z-50 flex justify-between items-center px-6 h-24">
        <h1 class="font-lexend font-black uppercase text-3xl text-white">智瞳</h1>
        <div class="flex items-center">
          <span class="material-symbols-outlined text-white" style="font-size: 32px;">star</span>
        </div>
      </header>

      <main class="pt-24 pb-28 px-6 w-full flex flex-col items-center justify-center space-y-stack-gap">
        <div class="w-full text-center mb-8">
          <h2 class="font-headline-md text-headline-md text-white">请选择模式</h2>
        </div>

        <div class="w-full flex flex-col space-y-8">
          <router-link to="/user01" class="w-full h-40 bg-primary-container border-4 border-white rounded-xl flex items-center justify-center space-x-6 active:scale-95 transition-transform hover:bg-blue-800">
            <span class="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">person</span>
            <span class="font-button-text text-button-text text-white">用户模式</span>
          </router-link>

          <router-link to="/guardian01" class="w-full h-40 bg-primary-container border-4 border-white rounded-xl flex items-center justify-center space-x-6 active:scale-95 transition-transform hover:bg-blue-800">
            <span class="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">shield</span>
            <span class="font-button-text text-button-text text-white">监护人模式</span>
          </router-link>
        </div>

        <p class="font-body-md text-body-md text-on-surface-variant text-center mt-12">
          通过选择您的身份，我们将为您提供最合适的辅助视界体验。
        </p>
      </main>

      <nav class="fixed bottom-0 left-1/2 -translate-x-1/2 w-[414px] border-t-4 border-white bg-black flex justify-around items-stretch h-28 z-50">
        <router-link to="/" class="text-white flex flex-col items-center justify-center h-full flex-1 hover:bg-zinc-900 transition-colors">
          <span class="material-symbols-outlined">home</span>
          <span class="font-lexend font-bold text-lg uppercase">主页</span>
        </router-link>
        <router-link to="/user01" class="text-white flex flex-col items-center justify-center h-full flex-1 hover:bg-zinc-900 transition-colors">
          <span class="material-symbols-outlined">visibility</span>
          <span class="font-lexend font-bold text-lg uppercase">相机</span>
        </router-link>
        <router-link to="/userpersonal" class="text-white flex flex-col items-center justify-center h-full flex-1 hover:bg-zinc-900 transition-colors">
          <span class="material-symbols-outlined">account_circle</span>
          <span class="font-lexend font-bold text-lg uppercase">个人</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectmodle'
}
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48;
  font-size: 48px;
}
</style>