<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="notes" />
</template>

<script>
import Form from "@/components/Notes/Form.vue";
import List from "@/components/Notes/List.vue";
export default {
  components: {
    Form,
    List,
  },
  data() {
    return {
      notes: [
        {
          title: "Выучить Vue 3",
          tags: ["работа"],
        },
        {
          title: "Закончить курс",
          tags: ["работа", "дом"],
        },
        {
          title: "Привет",
          tags: [],
        },
      ],
    };
  },
  mounted() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem("notes", JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem("notes");
      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    },
    handleSubmit(title) {
      const note = {
        title: title,
        tags: [],
      };
      this.notes.push(note);
    },
    handleRemove(index) {
      this.notes.splice(index, 1);
    },
  },
};
</script>