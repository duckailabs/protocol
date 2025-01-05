<script setup>
import { ref } from "vue";

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
});

const copied = ref(false);

const copy = async () => {
  try {
    const content = document.querySelector(".vp-doc")?.textContent || "";
    await navigator.clipboard.writeText(content);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};
</script>

<template>
  <button class="copy-button" @click="copy" :class="{ copied }">
    {{ copied ? "Copied!" : "Copy" }}
  </button>
</template>

<style scoped>
.copy-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 0.9em;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-button:hover {
  background-color: var(--vp-c-bg-mute);
}

.copy-button.copied {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}
</style>
