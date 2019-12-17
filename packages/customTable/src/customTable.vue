<template>
  <el-table
    :data="data"
    :height="height"
    :max-height="maxHeight"
    :stripe="stripe"
    :border="border"
    :size="size"
    :fit="fit"
    :show-header="showHeader"
    :highlight-current-row="highlightCurrentRow"
    :current-row-key="currentRowKey"
    :row-class-name="rowClassName"
    :row-style="rowStyle"
    :cell-class-name="cellClassName"
    :cell-style="cellStyle"
    :header-row-class-name="headerRowClassName"
    :header-row-style="headerRowStyle"
    :header-cell-class-name="headerCellClassName"
    :header-cell-style="headerCellStyle"
    :row-key="rowKey"
    :empty-text="emptyText"
    :default-expand-all="defaultExpandAll"
    :expand-row-keys="expandRowKeys"
    :default-sort="defaultSort"
    :tooltip-effect="tooltipEffect"
    :show-summary="showSummary"
    :sum-text="sumText"
    :summary-method="summaryMethod"
    :span-method="spanMethod"
    :select-on-indeterminate="selectOnIndeterminate"
    :indent="indent"
    :lazy="lazy"
    :load="load"
    :tree-props="treeProps"
    @select="selectFun"
    @select-all="selectAllFun"
    @selection-change="selectionChangeFun"
    @cell-mouse-enter="cellMouseEnterFun"
    @cell-mouse-leave="cellMouseLeaveFun"
    @cell-click="cellClickFun"
    @cell-dblclick="cellDblclickFun"
    @row-click="rowClickFun"
    @row-contextmenu="rowContextmenuFun"
    @row-dblclick="rowDblclickFun"
    @header-click="headerClickFun"
    @header-contextmenu="headerContextmenuFun"
    @sort-change="sortChangeFun"
    @filter-change="filterChangeFun"
    @current-change="currentChangeFun"
    @header-dragend="headerDragendFun"
    @expand-change="expandChangeFun"
  >
    <slot></slot>
  </el-table>
</template>

<script>
export default {
    name: 'CustomTable',

    props: {
      data: {
        type: Array,
        default: function() {
          return [];
        }
      },

      size: String,

      width: [String, Number],

      height: [String, Number],

      maxHeight: [String, Number],

      fit: {
        type: Boolean,
        default: true
      },

      stripe: Boolean,

      border: Boolean,

      rowKey: [String, Function],

      context: {},

      showHeader: {
        type: Boolean,
        default: true
      },

      showSummary: Boolean,

      sumText: String,

      summaryMethod: Function,

      rowClassName: [String, Function],

      rowStyle: [Object, Function],

      cellClassName: [String, Function],

      cellStyle: [Object, Function],

      headerRowClassName: [String, Function],

      headerRowStyle: [Object, Function],

      headerCellClassName: [String, Function],

      headerCellStyle: [Object, Function],

      highlightCurrentRow: Boolean,

      currentRowKey: [String, Number],

      emptyText: String,

      expandRowKeys: Array,

      defaultExpandAll: Boolean,

      defaultSort: Object,

      tooltipEffect: String,

      spanMethod: Function,

      selectOnIndeterminate: {
        type: Boolean,
        default: true
      },

      indent: {
        type: Number,
        default: 16
      },

      treeProps: {
        type: Object,
        default() {
          return {
            hasChildren: 'hasChildren',
            children: 'children'
          };
        }
      },

      lazy: Boolean,

      load: Function
    },

    methods: {
        selectFun() {
            this.$emit('select');
        },
        selectAllFun() {
            this.$emit('select-all');
        },
        selectionChangeFun() {
            this.$emit('selection-change');
        },
        cellMouseEnterFun() {
            this.$emit('cell-mouse-enter');
        },
        cellMouseLeaveFun() {
            this.$emit('cell-mouse-leave');
        },
        cellClickFun() {
            this.$emit('cell-click');
        },
        cellDblclickFun() {
            this.$emit('cell-dblclick');
        },
        rowClickFun() {
            this.$emit('row-click');
        },
        rowContextmenuFun() {
            this.$emit('row-contextmenu');
        },
        rowDblclickFun() {
            this.$emit('row-dblclick');
        },
        headerClickFun() {
            this.$emit('header-click');
        },
        headerContextmenuFun() {
            this.$emit('header-contextmenu');
        },
        sortChangeFun() {
            this.$emit('sort-change');
        },
        filterChangeFun() {
            this.$emit('filter-change');
        },
        currentChangeFun() {
            this.$emit('current-change');
        },
        headerDragendFun() {
            this.$emit('header-dragend');
        },
        expandChangeFun() {
            this.$emit('expand-change');
        }
    }

}
</script>

<style>

</style>