<template>
  <div class="min-h-screen bg-zinc-900 flex items-center justify-center">
    <div class="w-[414px] bg-black text-white font-body-md min-h-screen relative">
      <header class="fixed top-0 left-1/2 -translate-x-1/2 w-[414px] border-b-4 border-white bg-black z-50 flex justify-between items-center px-6 h-24">
        <h1 class="font-lexend font-black uppercase text-3xl text-white">智瞳</h1>
        <div class="flex items-center"><span class="material-symbols-outlined text-white" style="font-size: 32px;">star</span></div>
      </header>

      <main class="pt-24 pb-28 px-6 w-full overflow-y-auto flex flex-col gap-stack-gap">
        <section class="flex items-center gap-6 py-6 border-b-4 border-white">
          <div class="w-32 h-32 rounded-lg border-4 border-white overflow-hidden bg-blue-900 flex-shrink-0">
            <div class="w-full h-full flex items-center justify-center bg-blue-900"><span class="material-symbols-outlined text-white" style="font-size: 80px;">person</span></div>
          </div>
          <div>
            <h2 class="font-headline-md text-white">用户名称</h2>
            <span class="bg-blue-900 text-white font-label-lg px-4 py-1 rounded border-2 border-white inline-block">已实名认证</span>
          </div>
        </section>

        <section class="border-4 border-white bg-surface-container rounded-lg p-6 flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <span class="material-symbols-outlined text-blue-700">health_and_safety</span>
            <h3 class="font-headline-md">我的监护人</h3>
          </div>
          <div class="bg-black border-2 border-white rounded-lg p-4 space-y-2">
            <p class="font-body-lg text-white">姓名: <span class="text-white">张小华</span></p>
            <p class="font-body-lg text-white">电话: <span class="text-white">138 **** 5678</span></p>
          </div>
        </section>

        <section class="flex flex-col gap-6">
          <div class="p-6 border-4 border-white rounded-lg bg-surface">
            <div class="flex justify-between items-center mb-4">
              <label class="font-button-text"><span class="text-4xl font-bold">音量调节</span></label>
              <span class="material-symbols-outlined">volume_up</span>
            </div>
            <input class="h-12 cursor-pointer w-full" type="range" max="100" min="0" value="80"/>
          </div>

          <div class="p-6 border-4 border-white rounded-lg bg-surface">
            <div class="flex justify-between items-center mb-4">
              <label class="font-button-text"><span class="text-4xl font-bold">亮度调节</span></label>
              <span class="material-symbols-outlined">brightness_6</span>
            </div>
            <input class="h-12 cursor-pointer w-full" type="range" max="100" min="0" value="70"/>
          </div>

          <div class="p-6 border-4 border-white rounded-lg bg-surface">
            <div class="flex justify-between items-center mb-4">
              <label class="font-button-text"><span class="text-4xl font-bold">语速调节</span></label>
              <span class="material-symbols-outlined">record_voice_over</span>
            </div>
            <input class="h-12 cursor-pointer w-full" type="range" max="100" min="0" value="50"/>
          </div>
        </section>

        <section class="grid grid-cols-2 gap-4">
          <button class="bg-black border-4 border-white rounded-xl h-40 flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform">
            <span class="material-symbols-outlined text-white">grid_view</span>
            <span class="font-button-text text-white">切换模式</span>
          </button>
          <button class="bg-blue-900 border-4 border-white rounded-xl h-40 flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform">
            <span class="material-symbols-outlined text-white">settings</span>
            <span class="font-button-text text-white">系统设置</span>
          </button>
          <button class="bg-black border-4 border-white rounded-xl h-40 flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform">
            <span class="material-symbols-outlined text-white">help</span>
            <span class="font-button-text text-white">使用指南</span>
          </button>
          <button class="bg-black border-4 border-white rounded-xl h-40 flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform">
            <span class="material-symbols-outlined text-white">feedback</span>
            <span class="font-button-text text-white">意见反馈</span>
          </button>
          <router-link to="/" class="bg-black border-4 border-white rounded-xl h-40 flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform col-span-2">
            <span class="material-symbols-outlined text-error">logout</span>
            <span class="font-button-text text-error">退出登录</span>
          </router-link>
        </section>
      </main>

      <nav class="fixed bottom-0 left-1/2 -translate-x-1/2 w-[414px] border-t-4 border-white bg-black flex justify-around items-stretch h-28 z-50">
        <router-link class="text-white flex flex-col items-center justify-center h-full flex-1 hover:bg-zinc-900 transition-colors" to="/user01">
          <span class="material-symbols-outlined">home</span>
          <span class="font-lexend font-bold text-lg uppercase">首页</span>
        </router-link>
        <router-link class="text-white flex flex-col items-center justify-center h-full flex-1 hover:bg-zinc-900 transition-colors border-x-4 border-white" to="/camerapage">
          <span class="material-symbols-outlined">visibility</span>
          <span class="font-lexend font-bold text-lg uppercase">相机</span>
        </router-link>
        <router-link class="bg-blue-900 text-white flex flex-col items-center justify-center h-full flex-1" to="/userpersonal">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">person</span>
          <span class="font-lexend font-bold text-lg uppercase">个人</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userpersonal'
}
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48;
  font-size: 48px;
}

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 48px;
  width: 24px;
  background: #ffffff;
  border: 4px solid #00008b;
  border-radius: 8px;
  cursor: pointer;
  margin-top: -16px;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 16px;
  cursor: pointer;
  background: #00008b;
  border: 2px solid #ffffff;
  border-radius: 8px;
}
</style>