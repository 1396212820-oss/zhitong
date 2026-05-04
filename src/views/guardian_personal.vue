<template>
  <div class="min-h-screen bg-zinc-900 flex items-center justify-center">
    <div class="w-[414px] bg-black text-white min-h-screen relative">
      <header class="fixed top-0 left-1/2 -translate-x-1/2 w-[414px] border-b-4 border-white bg-black z-50 flex justify-between items-center px-6 h-24">
        <div class="flex items-center">
          <h1 class="font-lexend font-black uppercase text-3xl text-white">智瞳</h1>
        </div>
        <div class="flex items-center"><span class="material-symbols-outlined text-white" style="font-size: 32px;">star</span></div>
      </header>

      <main class="pt-24 pb-28 px-6 w-full overflow-y-auto space-y-6">
        <section class="border-4 border-white bg-black p-6 flex items-center justify-between">
          <div class="flex items-center gap-6">
            <div class="w-24 h-24 bg-primary-container border-4 border-white flex items-center justify-center">
              <span class="material-symbols-outlined text-white" style="font-size: 80px;">person</span>
            </div>
            <div class="flex flex-col gap-2">
              <h2 class="font-headline-md text-white">用户名称</h2>
              <span class="bg-primary-container text-white font-label-lg px-4 py-1 border-2 border-white inline-block w-fit">已实名认证</span>
            </div>
          </div>
        </section>

        <section class="space-y-4">
          <h3 class="font-headline-md text-white uppercase tracking-widest border-l-8 border-primary-container pl-4">我的亲属</h3>
          <div class="border-4 border-white bg-black">
            <div class="flex items-center gap-6 p-6">
              <div class="w-24 h-24 bg-primary-container border-4 border-white flex items-center justify-center">
                <span class="material-symbols-outlined text-white" style="font-size: 80px;">family_history</span>
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary-container" style="font-size: 32px;">person</span>
                  <h2 class="font-body-lg text-white uppercase">亲属姓名</h2>
                </div>
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary-container" style="font-size: 32px;">call</span>
                  <span class="bg-primary-container text-white font-label-lg px-4 py-1 border-2 border-white inline-block w-fit">联系电话</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="grid grid-cols-2 gap-6">
          <button class="flex items-center justify-start gap-6 border-4 border-white bg-black p-6 min-h-[100px] active:scale-95 transition-transform hover:border-primary-container group">
            <span class="material-symbols-outlined text-white group-hover:text-primary-container" style="font-size: 48px;">settings</span>
            <span class="font-button-text text-white">系统设置</span>
          </button>

          <button class="flex items-center justify-start gap-6 border-4 border-white bg-black p-6 min-h-[100px] active:scale-95 transition-transform hover:border-primary-container group">
            <span class="material-symbols-outlined text-white group-hover:text-primary-container" style="font-size: 48px;">menu_book</span>
            <span class="font-button-text text-white">使用指南</span>
          </button>

          <button class="flex items-center justify-start gap-6 border-4 border-white bg-black p-6 min-h-[100px] active:scale-95 transition-transform hover:border-primary-container group">
            <span class="material-symbols-outlined text-white group-hover:text-primary-container" style="font-size: 48px;">chat_bubble</span>
            <span class="font-button-text text-white">意见反馈</span>
          </button>

          <router-link to="/" class="flex items-center justify-start gap-6 border-4 border-white bg-black p-6 min-h-[100px] active:scale-95 transition-transform hover:border-error-container group">
            <span class="material-symbols-outlined text-white group-hover:text-error" style="font-size: 48px;">logout</span>
            <span class="font-button-text text-white">退出登录</span>
          </router-link>
        </section>
      </main>

      <nav class="fixed bottom-0 left-1/2 -translate-x-1/2 w-[414px] border-t-4 border-white bg-black flex justify-around items-stretch h-28 z-50">
        <router-link class="text-white flex flex-col items-center justify-center h-full flex-1 hover:bg-zinc-800 transition-colors" to="/guardian01">
          <span class="material-symbols-outlined">home</span>
          <span class="font-lexend font-bold text-lg uppercase">首页</span>
        </router-link>
        <router-link class="bg-[#00008B] text-white flex flex-col items-center justify-center h-full flex-1 border-x-4 border-white active:opacity-80" to="/guardian_personal">
          <span class="material-symbols-outlined">person</span>
          <span class="font-lexend font-bold text-lg uppercase">个人</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'guardian_personal'
}
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48;
}
</style>