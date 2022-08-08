<script setup lang="ts">
import { postUrl } from '~/api/url'
import { backendUrl } from '~/config'

const url = ref('')
const key = ref('')

watch(url, () => {
  key.value = ''
})

async function go() {
  const res = await postUrl(url.value)
  if (!res.ok)
    return
  const data = await res.json()
  const _key = data?.key
  if (typeof _key !== 'string')
    console.error('Wrong key:', _key)
  key.value = _key
}

function isHttpUrl(text: string) {
  return /^(http|https):\/\/[^ \t]+$/.test(text)
}
</script>

<template>
  <div>
    <h1 text-4xl font-bold>
      ShortURL
    </h1>

    <input
      id="input"
      v-model="url"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      mt-12
      w-full
      placeholder="Enter a URL"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >

    <div mt-4>
      <button
        v-if="isHttpUrl(url)"
        class="m-3 text-sm btn"
        :disabled="!url"
        @click="go"
      >
        ↓
      </button>
    </div>

    <div v-if="isHttpUrl(url) && key" mt-4>
      {{ `${backendUrl}/${key}` }}
    </div>
  </div>
</template>
