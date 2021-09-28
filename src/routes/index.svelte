<div class="w-full flex justify-center mt-10 select-none skew-y-3">
  <img class="imgsize" src="/icon.svg" alt="Tree Studio Logo" />
</div>

<h1
  class="ml-8 select-none text-center h1size font-display font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from to animate-bg skew-y-3 saturate-200 bg-center"
>
  Shoot.<br />
  Edit.
</h1>

<div class="mt-8 flex flex-row place-items-center justify-center skew-y-3">
  <a
    class="h-12 px-3 py-2 rounded-md bg-white hover:scale-105 hover:shadow-sm transition-all duration-300 border-2 uppercase font-display btn select-none"
    href="https://space.bilibili.com/350952551"
  >
    Watch Videos
  </a>
  <a
    class="ml-3 h-12 px-3 py-2 rounded-md bg-blue-800 text-white hover:scale-105 hover:shadow-sm transition-all duration-300 border-2 uppercase font-display btn select-none"
    href="/about"
  >
    About
  </a>
</div>

<style>
  @keyframes animate-bg {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }
  .from {
    --tw-gradient-from: #3494e6;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(52, 148, 230, 0));
  }
  .to {
    --tw-gradient-to: #ec6ead;
  }
  .animate-bg {
    background-size: 200%;
    background-repeat: repeat;
    animation: 6s animate-bg infinite;
  }
  .h1size {
    line-height: 0.95;
    font-size: 14vw;
  }
  .imgsize {
    width: 20vw;
    margin-bottom: -5vw;
    margin-top: -1vw;
  }
  .btn {
    line-height: 28px;
  }
</style>
