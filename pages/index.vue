<template>
    <div class="container flex h-screen items-center justify-center">
        <div>
            <h1 class="text-2xl font-semibold">Welcome back</h1>
            <p>Click to login</p>
            <UiButton external href="/api/auth/github">Login</UiButton>
        </div>
    </div>
</template>

<script setup lang="ts">

const login = () => {

}
</script>