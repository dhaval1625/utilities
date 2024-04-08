<script setup lang="ts">
// This button has general classes assigned. Give the styling to class as per your wish


defineProps(['isActive']);
</script>

<template>
    <button
        type="button"
        class="btn-page"
        :class="{'btn-page--active': isActive}"
    >
        <slot></slot>
    </button>
</template>

<style scoped>
.btn-page {
    
}

.btn-page--active {
    
}
</style>