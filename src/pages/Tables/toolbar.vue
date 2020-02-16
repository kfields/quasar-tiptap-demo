<template>
  <q-toolbar>
    <q-btn
      flat
      dense
      round
      @click="toggleLeftDrawer"
      aria-label="Menu"
    >
      <q-icon name="menu" />
    </q-btn>
    <editor-menu-bar :editor="editor">
      <div class="menubar" slot-scope="{ commands, isActive }">
        <div class="toolbar">
          <button
            class="menubar__button"
            @click="commands.undo"
          >
            <svgicon name="undo" />
          </button>

          <button
            class="menubar__button"
            @click="commands.redo"
          >
            <svgicon name="redo" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <svgicon name="bold" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <svgicon name="italic" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          >
            <svgicon name="strike" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <svgicon name="underline" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code() }"
            @click="commands.code"
          >
            <svgicon name="code" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.paragraph() }"
            @click="commands.paragraph"
          >
            <svgicon name="paragraph" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            H1
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            H2
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            H3
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <svgicon name="ul" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <svgicon name="ol" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.blockquote() }"
            @click="commands.blockquote"
          >
            <svgicon name="quote" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <svgicon name="code" />
          </button>

          <button
            class="menubar__button"
            @click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: false })"
          >
            <svgicon name="table" />
          </button>

          <span v-if="isActive.table()">
            <button
              class="menubar__button"
              @click="commands.deleteTable"
            >
              <svgicon name="delete_table" />
            </button>
            <button
              class="menubar__button"
              @click="commands.addColumnBefore"
            >
              <svgicon name="add_col_before" />
            </button>
            <button
              class="menubar__button"
              @click="commands.addColumnAfter"
            >
              <svgicon name="add_col_after" />
            </button>
            <button
              class="menubar__button"
              @click="commands.deleteColumn"
            >
              <svgicon name="delete_col" />
            </button>
            <button
              class="menubar__button"
              @click="commands.addRowBefore"
            >
              <svgicon name="add_row_before" />
            </button>
            <button
              class="menubar__button"
              @click="commands.addRowAfter"
            >
              <svgicon name="add_row_after" />
            </button>
            <button
              class="menubar__button"
              @click="commands.deleteRow"
            >
              <svgicon name="delete_row" />
            </button>
            <button
              class="menubar__button"
              @click="commands.toggleCellMerge"
            >
              <svgicon name="combine_cells" />
            </button>
          </span>
        </div>
      </div>
    </editor-menu-bar>

  </q-toolbar>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import { EditorMenuBar } from 'tiptap'
import { mapActions } from 'vuex'
export default {
  name: 'DefaultToolbar',
  mixins: [UiMixin],
  props: [],
  components: {
    EditorMenuBar
  },
  methods: {
    ...mapActions([
      'toggleLeftDrawer'
    ])
  }
}
</script>
