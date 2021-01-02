import ListView from '@/views/ListView.vue'

export default function createListView(name) {
  return {
    name,
    render(createElement) {
      return createElement(ListView)
    }
  }
}
