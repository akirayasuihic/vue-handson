const app = new Vue({
  el: '#app',
  data: {
    todos: [
      { text: 'Learn Javascript' },
      { text: 'Learn Vue' },
      { text: 'Build someshing awesone' },
    ]
  }
})

app.todos.push({ text: 'New item' })
