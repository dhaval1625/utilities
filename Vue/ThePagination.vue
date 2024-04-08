<script setup>
// general vue pagination component. Import PaginationButton from where it is placed and give the styling of buttons in that component.

import PaginationButton from './PaginationButton.vue';

defineProps(['totalPages', 'activePage']);
defineEmits(['switchPage'])
</script>

<template>
    <div class="py-[12px]">
        <div class="flex justify-center flex-col w-full">
            <ul
                class="inline-flex items-center space-x-2 rtl:space-x-reverse m-auto"
            >
                <li>
                    <PaginationButton :disabled="activePage === 1" @click="$emit('switchPage','prev')">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-3 h-3 rtl:rotate-180"
                        >
                            <path
                                d="M15 5L9 12L15 19"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </PaginationButton>
                </li>
                <li v-for="num in totalPages">
                    <PaginationButton @click="$emit('switchPage',num)" :isActive="num === activePage">
                        {{ num }}
                    </PaginationButton>
                </li>
                <li>
                    <PaginationButton :disabled="activePage === totalPages" @click="$emit('switchPage','next')">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-3 h-3 rtl:rotate-180"
                        >
                            <path
                                d="M9 5L15 12L9 19"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </PaginationButton>
                </li>
            </ul>
        </div>
    </div>
</template>
