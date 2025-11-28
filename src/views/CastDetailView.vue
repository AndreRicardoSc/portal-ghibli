<script setup>
    import { ref, onMounted } from 'vue';
    import { useCastStore } from '../stores/cast';
    import getImageUrl from '../services/images';
    import CastDetailComponent from '../components/CastDetailComponent.vue';

    const castStore = useCastStore();

    const props = defineProps({
        id: String
    });

    const cast = ref(null);

    onMounted(async () => {
        cast.value = await castStore.getDetail(props.id);
        console.log(getImageUrl(cast.value.profile_path))
    });
</script>
<template>
    <section class="flex flex-col items-center justify-end h-screen px-30">
        
        <CastDetailComponent
            :name="cast?.name"
            :birthday="cast?.birthday"
            :deathday="cast?.deathday"
            :place_of_birth="cast?.place_of_birth"
            :biography="cast?.biography"
            :profile_path="cast?.profile_path"
            :known_for_department="cast?.known_for_department"
            :popularity="cast?.popularity"
            :also_known_as="cast?.also_known_as"
        />

    </section>
</template>