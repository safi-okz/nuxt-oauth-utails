<template>
    <div>
        <h1>My profile</h1>
        <h2>Welcome {{ user }}</h2>

<UiButton UiButton @click="logout">Logout</UiButton>
    </div>
</template>

<script setup lang="ts">
const { loggedIn, user, session, clear } = useUserSession();

const logout = async () => {
        await clear();
        navigateTo('/', {replace: true});
};

definePageMeta({
    middleware: 'logged-in'
})
</script>