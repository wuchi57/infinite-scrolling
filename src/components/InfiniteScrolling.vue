<template>
  <div>
    <ul ref="listEl">
      <li v-for="user in userList" :key="user.id">
        {{ user.firstName }}
      </li>
      <p v-show="fetchingData">
        Fetching more users... please hold
      </p>
    </ul>
  </div>
</template>

<script setup>
import User from 'api/user.js'
import { useInfiniteScroll } from '@vueuse/core'

const listEl = ref(null)
const usersToShow = 15
const userList = ref(await User.getUsers(usersToShow, 0))
const fetchingData = ref(null)

async function getUsersOnScroll () {
  fetchingData.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  const newUsers = await User.getUsers(
      usersToShow,
      userList.value.length
  )
  fetchingData.value = null
  userList.value.push(...newUsers)
  console.log(userList.value.length)
}

useInfiniteScroll(
    listEl,
    async () => {
      await getUsersOnScroll()
    },
    {
      distance: 10
    }
)

</script>

<style scoped lang='sass'>
ul
  background-color: #41b480
  list-style: none
  max-height: 600px
  width: 600px
  overflow: scroll
  padding: 12px 20px
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1)
li
  padding: 12px 0
  color: #fff
  font-size: 18px
ul p
  text-align: center
  color: white
</style>
