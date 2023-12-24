export default defineNuxtRouteMiddleware(async (to, from) => {
    const { loggedIn } = useUserSession();
console.log('logged in ', loggedIn)
    if(!loggedIn.value){
        return await navigateTo('/');
    }
})