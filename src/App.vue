<!-- src/App.vue -->

<template>
  <div class="container">
    <h2>Conditional Rendering</h2>
    <button @click="showItems = !showItems">Toggle Items</button>
    
    <div v-if="showItems">
        <ul>
            <li v-for="item in visibleItems" :key="item.id">{{ item.text }}</li>

        </ul>
    </div>
    <div v-else>
        Items are hidden.
    </div>

    <div v-show="showGreeting">Hello from Vue!</div>

    <h2>Form Input Handling</h2>
    <input type="text" v-model="message">
    <p>You typed: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showItems: true,
      showGreeting: true,
      message: '',
      items: [
        { id: 1, text: 'Item 1', visible: true },
        { id: 2, text: 'Item 2', visible: false },
        { id: 3, text: 'Item 3', visible: true },
      ],
    };
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
