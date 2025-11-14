<script setup>
    const props = defineProps(['image', 'name', 'sinopse', 'classification']);
</script>
<template>
    <div>
        <img :src="props.image" :alt="`${props.name}-image`">
        <div>
            <h3>{{ props.name }}</h3>
            <p>{{ props.sinopse }}</p>
        </div>
    </div>
</template>