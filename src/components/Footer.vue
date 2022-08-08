<template>
  <nav text-xl p-4 inline-flex gap-2>
    <button icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>

    <a
      icon-btn i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/mys1024/short-url-frontend"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
