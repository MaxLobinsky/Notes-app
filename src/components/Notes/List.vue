<template>
  <div class="notes-list">
    <div class="note-item" v-for="(note, index) in getNotes" :key="index">
      <div class="note-header">
        <p>{{ note.title }}</p>
        <span style="cursor: pointer" @click="removeNote(index)">&#10005;</span>
      </div>
      <div class="note-footer">
        <TagsList
          isPreview
          v-if="note.tags && note.tags.length > 0"
          :items="note.tags"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TagsList from "@/components/UI/TagsList.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    TagsList,
  },
  computed: {
    ...mapGetters(["getNotes"]),
  },
  methods: {
    ...mapActions(["removeNote", "getLocalNotes"]),
  },
  mounted() {
    this.getLocalNotes();
  },
  watch: {
    getNotes: {
      handler(updatedList) {
        localStorage.setItem("notes", JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
};
</script>
